// Redimensiona y recomprime las imágenes de src/assets y public/ al tamaño
// real con el que se muestran en la web. Útil para cuando se añadan fotos
// nuevas sin optimizar (p. ej. exportadas directamente del móvil o de una IA
// de imagen, que suelen venir a resolución completa y sin comprimir).
//
// Escribe siempre en un archivo "<original>.new" en vez de sobrescribir en
// el sitio: en Windows, sharp/libvips puede dejar bloqueado un archivo que
// se acaba de leer en el mismo proceso si se intenta escribir ahí mismo.
// Revisa el resultado y luego sustitúyelo a mano, p. ej.:
//   mv src/assets/hero-nurse.jpg.new src/assets/hero-nurse.jpg
//
// Uso: node scripts/optimizar-imagenes.mjs [--dry]  (--dry no escribe nada)

import sharp from "sharp";
import { statSync, writeFileSync } from "fs";

const KB = (bytes) => (bytes / 1024).toFixed(0) + " KB";

const jobs = [
  { file: "src/assets/hero-nurse.jpg", maxWidth: 1600, format: "jpeg", quality: 72 },
  { file: "src/assets/about-nurse.jpg", maxWidth: 1024, format: "jpeg", quality: 82 },
  { file: "src/assets/logo-icon.png", maxWidth: 700, format: "png", quality: 80 },
  { file: "src/assets/svc-curas.jpg", maxWidth: 900, format: "jpeg", quality: 78 },
  { file: "src/assets/svc-extraccion.jpg", maxWidth: 900, format: "jpeg", quality: 78 },
  { file: "src/assets/svc-intramuscular.jpg", maxWidth: 900, format: "jpeg", quality: 78 },
  { file: "src/assets/svc-intravenoso.jpg", maxWidth: 900, format: "jpeg", quality: 78 },
  { file: "src/assets/svc-ostomias.jpg", maxWidth: 900, format: "jpeg", quality: 78 },
  { file: "src/assets/svc-puntos.jpg", maxWidth: 900, format: "jpeg", quality: 78 },
  { file: "src/assets/svc-sondajes.jpg", maxWidth: 900, format: "jpeg", quality: 78 },
  { file: "src/assets/svc-subcutanea.jpg", maxWidth: 900, format: "jpeg", quality: 78 },
  { file: "src/assets/svc-valoracion.jpg", maxWidth: 900, format: "jpeg", quality: 78 },
  { file: "public/logo.png", maxWidth: 1000, format: "png", quality: 80 },
  { file: "public/favicon.png", maxWidth: 128, format: "png", quality: 80 },
];

const dryRun = process.argv.includes("--dry");

for (const job of jobs) {
  const before = statSync(job.file).size;
  const img = sharp(job.file).rotate();
  const meta = await img.metadata();
  const resized = meta.width > job.maxWidth ? img.resize({ width: job.maxWidth }) : img;

  const encoded =
    job.format === "jpeg"
      ? resized.flatten({ background: "#ffffff" }).jpeg({ quality: job.quality, mozjpeg: true })
      : resized.png({ quality: job.quality, compressionLevel: 9 });

  const buffer = await encoded.toBuffer();

  if (!dryRun) {
    writeFileSync(job.file + ".new", buffer);
  }

  console.log(
    `${job.file}: ${KB(before)} -> ${KB(buffer.length)} (${meta.width}x${meta.height} -> max ${job.maxWidth}w)`
  );
}
