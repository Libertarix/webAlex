// Enlazado interno automático entre blog y noticias por palabras clave
// compartidas — refuerza la relevancia temática entre páginas para el SEO.

const PALABRAS_VACIAS = new Set([
  "de", "la", "el", "en", "a", "y", "para", "con", "que", "los", "las",
  "una", "un", "del", "al", "su", "sus", "es", "se", "por", "como",
  "domicilio", "granada", "casa", "salud", "enfermeria", "enfermería",
]);

function palabrasClave(texto: string): Set<string> {
  const normalizado = texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "");
  return new Set(
    normalizado
      .split(/[^a-z0-9]+/)
      .filter((palabra) => palabra.length > 3 && !PALABRAS_VACIAS.has(palabra))
  );
}

function solapamiento(a: Set<string>, b: Set<string>): number {
  let contador = 0;
  for (const palabra of a) if (b.has(palabra)) contador += 1;
  return contador;
}

export function itemsRelacionados<T extends { title: string; keywords: string[] }>(
  origen: { title: string; keywords: string[] },
  candidatos: T[],
  maximo = 2
): T[] {
  const palabrasOrigen = palabrasClave(`${origen.title} ${origen.keywords.join(" ")}`);
  return candidatos
    .map((c) => ({ item: c, puntos: solapamiento(palabrasOrigen, palabrasClave(`${c.title} ${c.keywords.join(" ")}`)) }))
    .filter((c) => c.puntos > 0)
    .sort((a, b) => b.puntos - a.puntos)
    .slice(0, maximo)
    .map((c) => c.item);
}
