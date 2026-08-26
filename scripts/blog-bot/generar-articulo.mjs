// Genera un artículo de texto nuevo del blog con Gemini, usando el
// siguiente tema sin usar de temas.json. Este script solo escribe los
// archivos; es el workflow de GitHub Actions
// (.github/workflows/blog-bot.yml) el que hace commit y push directo a
// main — publicación automática, sin revisión humana previa.
//
// Solo texto, sin imagen de portada (decisión de la usuaria tras probar
// varios generadores de imagen gratuitos y no quedar satisfecha).
//
// Requiere GEMINI_API_KEY en el entorno. Clave gratuita en
// https://aistudio.google.com/apikey
//
// Uso:
//   node scripts/blog-bot/generar-articulo.mjs --dry   (no llama a la API, no gasta nada)
//   node scripts/blog-bot/generar-articulo.mjs         (genera de verdad)

import { readFileSync, writeFileSync } from "fs";
import { fileURLToPath } from "url";
import path from "path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "../..");

// --- Periodo de prueba: 2 meses desde que se activó el bot (2026-08-07). ---
// Pasada esta fecha el script no genera nada; se acordó revisar el
// resultado (calidad, tráfico) antes de decidir si continúa. Para
// prorrogarlo, simplemente adelanta esta fecha.
const FIN_PERIODO_PRUEBA = new Date("2026-10-08T00:00:00Z");

const TEMAS_PATH = path.join(__dirname, "temas.json");
const BLOG_GENERADO_PATH = path.join(ROOT, "src/data/blog-generado.json");
const SITEMAP_PATH = path.join(ROOT, "public/sitemap.xml");

const dryRun = process.argv.includes("--dry");
const SITE_URL = "https://www.enfermeroencasa.com";

const MODEL_TEXTO = "gemini-flash-latest";

function slugify(texto) {
  return texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function elegirSiguienteTema() {
  const temas = JSON.parse(readFileSync(TEMAS_PATH, "utf-8"));
  const siguiente = temas.find((t) => !t.publicadoEn);
  return { temas, siguiente };
}

const RESPONSE_SCHEMA = {
  type: "object",
  properties: {
    title: { type: "string", description: "Título del artículo (H1), claro y natural, sin clickbait" },
    metaTitle: { type: "string", description: "Título SEO, máx. 60 caracteres, termina en \"| Enfermero en Casa\"" },
    metaDescription: { type: "string", description: "Meta descripción SEO, 140-160 caracteres" },
    excerpt: { type: "string", description: "Resumen de 1-2 frases para la tarjeta del listado del blog" },
    readingMinutes: { type: "integer" },
    keywords: { type: "array", items: { type: "string" }, description: "3-5 palabras clave reales" },
    intro: { type: "string", description: "Párrafo de introducción, 2-3 frases" },
    sections: {
      type: "array",
      minItems: 4,
      maxItems: 6,
      items: {
        type: "object",
        properties: {
          heading: { type: "string" },
          paragraphs: { type: "array", items: { type: "string" }, minItems: 1, maxItems: 3 },
          list: { type: "array", items: { type: "string" } },
        },
        required: ["heading", "paragraphs"],
      },
    },
    disclaimer: {
      type: "string",
      description: "Aviso de que el contenido es informativo y no sustituye una valoración profesional",
    },
  },
  required: ["title", "metaTitle", "metaDescription", "excerpt", "readingMinutes", "keywords", "intro", "sections", "disclaimer"],
};

function construirPrompt(tema, ejemplo) {
  return `Eres un redactor experto en salud que escribe para el blog de "Enfermero en Casa", la web de Alejandro Romero, enfermero colegiado (nº 12386) que ofrece enfermería a domicilio en Granada, España.

Escribe un artículo nuevo en español de España sobre este tema: "${tema.tema}".
Palabra clave objetivo para SEO (úsala de forma natural, sin forzar): "${tema.palabraClave}".

Reglas importantes:
- Tono cercano, profesional y práctico, igual que este artículo ya publicado en la misma web (úsalo como referencia de estilo, estructura y longitud, pero NO repitas su contenido ni su tema):

"""
${ejemplo}
"""

- Contenido de carácter general e informativo. NO des dosis, marcas de medicamentos, plazos clínicos exactos ni instrucciones que solo debería dar un profesional tras valorar a la persona en directo. Ante cualquier duda, remite a consultar con un profesional sanitario.
- Extensión total orientativa: 900-1300 palabras entre la introducción y las secciones.
- Entre 4 y 6 secciones, cada una con un h2 claro y 1-3 párrafos; usa listas cuando ayuden a la lectura.
- No inventes cifras, estudios ni estadísticas que no sean de conocimiento general.
- No menciones precios ni servicios concretos de la empresa dentro del texto (eso ya se añade aparte).`;
}

// Gemini devuelve 503 "high demand" con bastante frecuencia (fallo
// transitorio, no un problema de la petición) — sin reintentos, eso tiraba
// la ejecución entera. Dos capas de resistencia:
//  1) reintentos con espera creciente sobre el mismo modelo (fallos de red
//     o códigos claramente temporales);
//  2) si aun así ese modelo sigue caído, se prueba en cascada con otros
//     modelos de Gemini (cada uno con su propia capacidad/cuota, así que
//     pueden seguir libres aunque el primero esté saturado) antes de
//     rendirse del todo.
const MODELOS_TEXTO = [MODEL_TEXTO, "gemini-flash-lite-latest", "gemini-pro-latest"];
const ESPERAS_REINTENTO_MS = [10_000, 30_000, 60_000];
const CODIGOS_REINTENTABLES = new Set([429, 500, 502, 503, 504]);

async function llamarModeloGemini(modelo, prompt, intento = 1) {
  const apiKey = process.env.GEMINI_API_KEY;
  const maxIntentos = ESPERAS_REINTENTO_MS.length + 1;

  let res;
  try {
    res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${modelo}:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ role: "user", parts: [{ text: prompt }] }],
          generationConfig: {
            responseMimeType: "application/json",
            responseSchema: RESPONSE_SCHEMA,
            temperature: 0.9,
          },
        }),
      }
    );
  } catch (err) {
    if (intento < maxIntentos) {
      const espera = ESPERAS_REINTENTO_MS[intento - 1];
      console.warn(`[${modelo}] Fallo de red (intento ${intento}/${maxIntentos}): ${err.message}. Reintentando en ${espera / 1000}s...`);
      await new Promise((r) => setTimeout(r, espera));
      return llamarModeloGemini(modelo, prompt, intento + 1);
    }
    throw err;
  }

  if (!res.ok) {
    const cuerpo = await res.text();
    if (CODIGOS_REINTENTABLES.has(res.status) && intento < maxIntentos) {
      const espera = ESPERAS_REINTENTO_MS[intento - 1];
      console.warn(`[${modelo}] Gemini texto: ${res.status} (intento ${intento}/${maxIntentos}). Reintentando en ${espera / 1000}s...`);
      await new Promise((r) => setTimeout(r, espera));
      return llamarModeloGemini(modelo, prompt, intento + 1);
    }
    throw new Error(`Gemini texto (${modelo}): ${res.status} ${cuerpo}`);
  }

  const data = await res.json();
  const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!text) throw new Error(`Gemini texto (${modelo}): respuesta vacía o bloqueada por seguridad`);
  return JSON.parse(text);
}

async function llamarGeminiTexto(prompt) {
  let ultimoError;
  for (const modelo of MODELOS_TEXTO) {
    try {
      return await llamarModeloGemini(modelo, prompt);
    } catch (err) {
      console.warn(`Modelo ${modelo} no disponible tras los reintentos: ${err.message}`);
      ultimoError = err;
    }
  }
  throw ultimoError;
}

function actualizarSitemap(slug) {
  const xml = readFileSync(SITEMAP_PATH, "utf-8");
  const entrada = `  <url>\n    <loc>${SITE_URL}/blog/${slug}</loc>\n    <changefreq>yearly</changefreq>\n    <priority>0.6</priority>\n  </url>\n</urlset>`;
  writeFileSync(SITEMAP_PATH, xml.replace("</urlset>", entrada));
}

function yaPublicadoHoy() {
  const posts = JSON.parse(readFileSync(BLOG_GENERADO_PATH, "utf-8"));
  const hoy = new Date().toISOString().slice(0, 10);
  return posts.some((p) => p.publishedAt === hoy);
}

async function main() {
  if (new Date() > FIN_PERIODO_PRUEBA && !dryRun) {
    console.log(
      `Periodo de prueba del blog-bot terminado (${FIN_PERIODO_PRUEBA.toISOString().slice(0, 10)}). No se genera ningún artículo. Revisa el resultado y, si se continúa, adelanta FIN_PERIODO_PRUEBA en este script.`
    );
    return;
  }

  // Capa 3 de respaldo: este workflow también corre una segunda vez más
  // tarde el mismo día de publicación (ver blog-bot.yml) por si la
  // ejecución principal falla del todo pese a los reintentos y el modelo
  // de repuesto. Si la principal ya publicó hoy, esta segunda pasada no
  // hace nada — evita publicar dos artículos el mismo día.
  if (!dryRun && yaPublicadoHoy()) {
    console.log("Ya se ha publicado un artículo hoy — esta ejecución de respaldo no hace nada.");
    return;
  }

  const { temas, siguiente } = elegirSiguienteTema();
  if (!siguiente) {
    console.log("No quedan temas sin usar en scripts/blog-bot/temas.json. Añade más temas antes de la próxima ejecución.");
    return;
  }

  const EJEMPLO_ESTILO = `Cómo cuidar una herida en casa: guía práctica paso a paso. Introducción: Una herida bien cuidada desde el primer momento cicatriza antes, duele menos y tiene mucho menos riesgo de infectarse... [artículo estructurado en 5 secciones con h2, párrafos y listas, ~1000 palabras, tono cercano y profesional, termina con un aviso de que no sustituye la valoración de un profesional]`;

  console.log(`Tema elegido: ${siguiente.tema}`);

  if (dryRun) {
    console.log("--dry: no se llama a la API. Prompt que se enviaría:\n");
    console.log(construirPrompt(siguiente, EJEMPLO_ESTILO));
    return;
  }

  if (!process.env.GEMINI_API_KEY) {
    console.error("Falta GEMINI_API_KEY en el entorno. Consigue una clave gratis en https://aistudio.google.com/apikey");
    process.exit(1);
  }

  const generado = await llamarGeminiTexto(construirPrompt(siguiente, EJEMPLO_ESTILO));
  const slug = slugify(generado.title);

  const nuevoPost = {
    slug,
    title: generado.title,
    metaTitle: generado.metaTitle,
    metaDescription: generado.metaDescription,
    excerpt: generado.excerpt,
    publishedAt: new Date().toISOString().slice(0, 10),
    readingMinutes: generado.readingMinutes,
    keywords: generado.keywords,
    relatedServiceSlug: siguiente.servicioRelacionado,
    intro: generado.intro,
    sections: generado.sections,
    disclaimer: generado.disclaimer,
    generatedByBot: true,
  };

  const existentes = JSON.parse(readFileSync(BLOG_GENERADO_PATH, "utf-8"));
  existentes.push(nuevoPost);
  writeFileSync(BLOG_GENERADO_PATH, JSON.stringify(existentes, null, 2) + "\n");

  const temaIndex = temas.findIndex((t) => t.tema === siguiente.tema);
  temas[temaIndex].publicadoEn = slug;
  writeFileSync(TEMAS_PATH, JSON.stringify(temas, null, 2) + "\n");

  actualizarSitemap(slug);

  console.log(`Artículo generado: ${generado.title} (/blog/${slug})`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
