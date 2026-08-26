// Publica una noticia de salud/enfermería nueva cada día, a partir de un
// feed RSS real (ver fuentes.json) — nunca inventada por la IA. El texto
// que se publica es un resumen ORIGINAL escrito a partir del titular y la
// descripción reales de la fuente, con enlace claro al artículo completo.
// Este script solo escribe los archivos; es el workflow de GitHub Actions
// (.github/workflows/news-bot.yml) el que hace commit y despliega a Vercel.
//
// Requiere GEMINI_API_KEY en el entorno.
//
// Uso:
//   node scripts/news-bot/generar-noticia.mjs --dry   (no llama a la API, no gasta nada)
//   node scripts/news-bot/generar-noticia.mjs         (genera de verdad)

import Parser from "rss-parser";
import { readFileSync, writeFileSync } from "fs";
import { fileURLToPath } from "url";
import path from "path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "../..");

const FUENTES_PATH = path.join(__dirname, "fuentes.json");
const USADAS_PATH = path.join(__dirname, "usadas.json");
const NOTICIAS_PATH = path.join(ROOT, "src/data/noticias-generadas.json");
const SITEMAP_PATH = path.join(ROOT, "public/sitemap.xml");

const dryRun = process.argv.includes("--dry");
const SITE_URL = "https://www.enfermeroencasa.com";
const MODEL_TEXTO = "gemini-flash-latest";

const parser = new Parser({ timeout: 15000 });

function slugify(texto) {
  const completo = texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
  if (completo.length <= 80) return completo;
  return completo.slice(0, 80).replace(/-[^-]*$/, "");
}

function limpiarHtml(html) {
  return (html || "")
    .replace(/<[^>]+>/g, " ")
    .replace(/&#8230;|…/g, "...")
    .replace(/&amp;/g, "&")
    .replace(/&nbsp;/g, " ")
    // Pie típico de WordPress ("La entrada X se publicó primero en Y").
    .replace(/La entrada .+? se public[oó] primero en .+?\.?$/i, "")
    .replace(/\s+/g, " ")
    .trim();
}

function extraerPrimeraImagen(html) {
  const m = (html || "").match(/<img[^>]+src="([^"]+)"/);
  return m ? m[1] : null;
}

async function obtenerOgImage(url) {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 8000);
    const res = await fetch(url, { signal: controller.signal, headers: { "User-Agent": "Mozilla/5.0" } });
    clearTimeout(timeout);
    if (!res.ok) return null;
    const html = await res.text();
    const m = html.match(/<meta[^>]+property=["']og:image["'][^>]+content=["']([^"']+)["']/i);
    return m ? m[1] : null;
  } catch {
    return null;
  }
}

// Preferimos noticias sobre cuidados, enfermedades y salud del paciente;
// evitamos noticias puramente gremiales/institucionales (premios, huelgas,
// normativa de colegios profesionales, elecciones sindicales...), que no
// aportan valor al público que busca información de salud.
const PALABRAS_PREFERIDAS = [
  "cuidado", "cuidados", "enfermedad", "enfermedades", "sintoma", "síntoma",
  "sintomas", "síntomas", "tratamiento", "tratamientos", "prevencion",
  "prevención", "paciente", "pacientes", "salud", "diagnostico",
  "diagnóstico", "terapia", "dolor", "recuperacion", "recuperación",
  "herida", "heridas", "cronica", "crónica", "cronico", "crónico",
  "mayores", "domicilio", "vacuna", "vacunacion", "vacunación",
];
const PALABRAS_EVITAR = [
  "colegio de enfermeria", "colegio de enfermería", "premio", "sindicat",
  "satse", "huelga", "oposicion", "oposición", "elecciones", "concurso",
  "convocatoria", "decreto", "normativa", "comite de cuidados",
  "comité de cuidados", "cecova",
];

function puntuarNoticia(titulo) {
  const t = titulo.toLowerCase();
  let puntos = 0;
  for (const palabra of PALABRAS_PREFERIDAS) if (t.includes(palabra)) puntos += 1;
  for (const palabra of PALABRAS_EVITAR) if (t.includes(palabra)) puntos -= 3;
  return puntos;
}

async function elegirSiguienteNoticia() {
  const fuentes = JSON.parse(readFileSync(FUENTES_PATH, "utf-8")).sort((a, b) => a.prioridad - b.prioridad);
  let usadas = [];
  try {
    usadas = JSON.parse(readFileSync(USADAS_PATH, "utf-8"));
  } catch {
    usadas = [];
  }

  // Reunimos candidatos de TODAS las fuentes (no solo la primera con
  // resultados) para poder elegir el más relevante, no solo el primero.
  const candidatos = [];
  for (const fuente of fuentes) {
    let feed;
    try {
      feed = await parser.parseURL(fuente.feed);
    } catch (err) {
      console.warn(`No se pudo leer el feed de ${fuente.nombre}: ${err.message}`);
      continue;
    }
    for (const item of feed.items) {
      const id = item.guid || item.link;
      if (!id || usadas.includes(id)) continue;
      candidatos.push({ fuente, item, id, puntos: puntuarNoticia(item.title) });
    }
  }

  if (candidatos.length === 0) return null;

  // Orden: puntuación de relevancia primero, prioridad de fuente después.
  candidatos.sort((a, b) => b.puntos - a.puntos || a.fuente.prioridad - b.fuente.prioridad);
  const elegido = candidatos[0];
  const { fuente, item, id } = elegido;

  const contenidoHtml = item["content:encoded"] || item.content || item.contentSnippet || "";
  let imagen = item.enclosure?.url || extraerPrimeraImagen(contenidoHtml);
  if (!imagen && item.link) imagen = await obtenerOgImage(item.link);

  return {
    fuente,
    id,
    title: item.title,
    link: item.link,
    description: limpiarHtml(item.contentSnippet || item.summary || contenidoHtml).slice(0, 600),
    pubDate: item.pubDate ? new Date(item.pubDate).toISOString().slice(0, 10) : new Date().toISOString().slice(0, 10),
    categories: item.categories || [],
    imagen,
  };
}

const RESPONSE_SCHEMA = {
  type: "object",
  properties: {
    title: { type: "string", description: "Titular propio, claro, basado en el original pero no copiado literalmente" },
    metaTitle: { type: "string", description: "Título SEO, máx. 60 caracteres, termina en \"| Enfermero en Casa\"" },
    metaDescription: { type: "string", description: "Meta descripción SEO, 140-160 caracteres" },
    summary: {
      type: "string",
      description: "Resumen ORIGINAL de 3-5 frases en español, tono periodístico neutro, sin copiar frases textuales del original ni inventar datos que no estén en el titular/descripción de partida",
    },
    keywords: { type: "array", items: { type: "string" }, description: "3-5 palabras clave reales" },
    imageAlt: {
      type: "string",
      description: "Texto alternativo SEO de la imagen de portada: descriptivo del contenido de la noticia, en español, con la palabra clave principal, máximo 125 caracteres, sin empezar por 'Imagen de' ni 'Foto de'",
    },
  },
  required: ["title", "metaTitle", "metaDescription", "summary", "keywords", "imageAlt"],
};

function construirPrompt(noticia) {
  return `Eres redactor del apartado de noticias de salud del blog de "Enfermero en Casa", la web de Alejandro Romero, enfermero colegiado (nº 12386) que ofrece enfermería a domicilio en Granada, España.

Aquí tienes el titular y la descripción REALES de una noticia publicada por "${noticia.fuente.nombre}" el ${noticia.pubDate}:

Titular original: "${noticia.title}"
Descripción original: "${noticia.description}"

Tu tarea: escribir un titular propio y un resumen ORIGINAL de esta noticia para republicarlo en nuestra web, citando la fuente y enlazando al artículo completo (eso se añade aparte, no lo incluyas tú).

Reglas importantes:
- NO copies frases textuales del titular o la descripción original; reformula con tus propias palabras.
- NO inventes datos, cifras, nombres o declaraciones que no estén ya en el titular/descripción de partida. Si la descripción es escueta, el resumen también debe serlo — mejor corto y fiel que largo e inventado.
- Tono periodístico neutro, en español de España, igual que un breve de prensa.
- No menciones servicios ni precios de la empresa.
- Escribe también "imageAlt": el texto alternativo SEO de la imagen que acompaña a la noticia (no la ves, pero trata del mismo tema que el titular) — describe qué se esperaría ver en una foto de esta noticia, con la palabra clave principal, natural y no genérico.`;
}

// Gemini devuelve 503 "high demand" con bastante frecuencia (fallo
// transitorio, no un problema de la petición) — sin reintentos, eso tiraba
// la ejecución diaria entera. Dos capas de resistencia:
//  1) reintentos con espera creciente sobre el mismo modelo (fallos de red
//     o códigos claramente temporales);
//  2) si aun así ese modelo sigue caído, se prueba con un segundo modelo
//     (capacidad/cuota separada en Gemini, así que puede seguir libre
//     aunque el primero esté saturado) antes de rendirse del todo.
const MODELOS_TEXTO = [MODEL_TEXTO, "gemini-flash-lite-latest"];
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
          generationConfig: { responseMimeType: "application/json", responseSchema: RESPONSE_SCHEMA, temperature: 0.7 },
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
  const entrada = `  <url>\n    <loc>${SITE_URL}/noticias/${slug}</loc>\n    <changefreq>never</changefreq>\n    <priority>0.4</priority>\n  </url>\n</urlset>`;
  writeFileSync(SITEMAP_PATH, xml.replace("</urlset>", entrada));
}

async function main() {
  const noticia = await elegirSiguienteNoticia();
  if (!noticia) {
    console.log("No hay noticias nuevas sin usar en ninguna de las fuentes configuradas.");
    return;
  }

  console.log(`Noticia elegida: [${noticia.fuente.nombre}] ${noticia.title}`);

  if (dryRun) {
    console.log("--dry: no se llama a la API. Prompt que se enviaría:\n");
    console.log(construirPrompt(noticia));
    console.log("\nImagen detectada:", noticia.imagen || "(ninguna)");
    return;
  }

  if (!process.env.GEMINI_API_KEY) {
    console.error("Falta GEMINI_API_KEY en el entorno.");
    process.exit(1);
  }

  const generado = await llamarGeminiTexto(construirPrompt(noticia));
  const slug = slugify(generado.title);

  const nuevaNoticia = {
    slug,
    title: generado.title,
    metaTitle: generado.metaTitle,
    metaDescription: generado.metaDescription,
    summary: generado.summary,
    keywords: generado.keywords,
    sourceName: noticia.fuente.nombre,
    sourceUrl: noticia.link,
    publishedAt: new Date().toISOString().slice(0, 10),
    ...(noticia.imagen ? { image: noticia.imagen, imageAlt: generado.imageAlt } : {}),
  };

  const existentes = JSON.parse(readFileSync(NOTICIAS_PATH, "utf-8"));
  existentes.push(nuevaNoticia);
  writeFileSync(NOTICIAS_PATH, JSON.stringify(existentes, null, 2) + "\n");

  let usadas = [];
  try {
    usadas = JSON.parse(readFileSync(USADAS_PATH, "utf-8"));
  } catch {
    usadas = [];
  }
  usadas.push(noticia.id);
  writeFileSync(USADAS_PATH, JSON.stringify(usadas, null, 2) + "\n");

  actualizarSitemap(slug);

  console.log(`Noticia publicada: ${generado.title} (/noticias/${slug})`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
