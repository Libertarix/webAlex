// Genera public/sitemap.xml completo desde los datos reales del proyecto,
// con <lastmod> real en cada URL (antes no existía en ningún sitio del
// sitemap — un dato de frescura que Google usa para decidir cada cuánto
// re-rastrear una URL, especialmente valioso aquí porque noticias cambia
// a diario y blog dos veces por semana).
//
// Sustituye al patrón anterior (cada bot añadía su propia entrada a mano
// con string-replace sobre el XML, sin lastmod) — ahora ambos bots llaman
// a este mismo script tras publicar, así que el sitemap entero se
// regenera siempre desde la fuente de verdad real (los propios datos),
// no se va parcheando entrada a entrada.
//
// Uso: node scripts/generar-sitemap.mjs

import { readFileSync, writeFileSync } from "fs";
import { fileURLToPath, pathToFileURL } from "url";
import path from "path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const SITE_URL = "https://www.enfermeroencasa.com";
const SITEMAP_PATH = path.join(ROOT, "public/sitemap.xml");
const HOY = new Date().toISOString().slice(0, 10);

function extraerSlugs(rutaArchivo, patron) {
  const texto = readFileSync(rutaArchivo, "utf-8");
  const slugs = [];
  let m;
  while ((m = patron.exec(texto))) slugs.push(m[1]);
  return slugs;
}

function extraerParesSlugFecha(rutaArchivo) {
  const texto = readFileSync(rutaArchivo, "utf-8");
  // Cada entrada de blogPostsManual tiene slug y publishedAt como las dos
  // primeras claves string del objeto — capturamos ambas juntas para no
  // desincronizar el orden si algún día cambian de posición.
  const patron = /slug: "([^"]+)",[\s\S]{0,300}?publishedAt: "([^"]+)"/g;
  const pares = [];
  let m;
  while ((m = patron.exec(texto))) pares.push({ slug: m[1], publishedAt: m[2] });
  return pares;
}

function url(loc, { changefreq, priority, lastmod }) {
  return [
    "  <url>",
    `    <loc>${loc}</loc>`,
    `    <lastmod>${lastmod}</lastmod>`,
    `    <changefreq>${changefreq}</changefreq>`,
    `    <priority>${priority}</priority>`,
    "  </url>",
  ].join("\n");
}

export function regenerarSitemap() {
  const serviceSlugs = extraerSlugs(
    path.join(ROOT, "src/data/services.ts"),
    /slug: "([^"]+)"/g
  );

  const blogManual = extraerParesSlugFecha(path.join(ROOT, "src/data/blog.ts"));
  const blogGenerado = JSON.parse(readFileSync(path.join(ROOT, "src/data/blog-generado.json"), "utf-8"));
  const blogPosts = [...blogManual, ...blogGenerado];

  const noticias = JSON.parse(readFileSync(path.join(ROOT, "src/data/noticias-generadas.json"), "utf-8"));

  const entradas = [
    url(`${SITE_URL}/`, { changefreq: "monthly", priority: "1.0", lastmod: HOY }),
    url(`${SITE_URL}/en`, { changefreq: "monthly", priority: "0.9", lastmod: HOY }),
    url(`${SITE_URL}/zonas-cobertura`, { changefreq: "monthly", priority: "0.8", lastmod: HOY }),
    ...serviceSlugs.map((slug) =>
      url(`${SITE_URL}/servicios/${slug}`, { changefreq: "monthly", priority: "0.9", lastmod: HOY })
    ),
    url(`${SITE_URL}/blog`, { changefreq: "monthly", priority: "0.7", lastmod: HOY }),
    url(`${SITE_URL}/noticias`, { changefreq: "daily", priority: "0.7", lastmod: HOY }),
    ...blogPosts.map((p) =>
      url(`${SITE_URL}/blog/${p.slug}`, { changefreq: "yearly", priority: "0.6", lastmod: p.publishedAt })
    ),
    url(`${SITE_URL}/aviso-legal`, { changefreq: "yearly", priority: "0.3", lastmod: HOY }),
    ...noticias.map((n) =>
      url(`${SITE_URL}/noticias/${n.slug}`, { changefreq: "never", priority: "0.4", lastmod: n.publishedAt })
    ),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entradas.join("\n")}\n</urlset>\n`;
  writeFileSync(SITEMAP_PATH, xml);
  console.log(`sitemap.xml regenerado: ${entradas.length} URLs.`);
}

// Solo ejecuta al llamarse directamente (node scripts/generar-sitemap.mjs);
// cuando los bots lo importan como módulo (regenerarSitemap()), no se
// dispara solo por el import.
if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  regenerarSitemap();
}
