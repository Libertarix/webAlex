export interface NewsItem {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  summary: string;
  keywords: string[];
  sourceName: string;
  sourceUrl: string;
  publishedAt: string; // ISO
  /** URL de la imagen de portada tal cual la publica la fuente original (enlazada, nunca descargada). */
  image?: string;
  /** Texto alternativo SEO de la imagen, generado por el bot (no descriptivo genérico). */
  imageAlt?: string;
}

// Noticias que publica scripts/news-bot/generar-noticia.mjs cada día, a
// partir de un feed RSS real de una fuente sanitaria/de enfermería fiable
// (ver scripts/news-bot/fuentes.json) — nunca inventadas por la IA.
import noticiasGeneradas from "./noticias-generadas.json";

export const noticias: NewsItem[] = (noticiasGeneradas as NewsItem[]).sort((a, b) =>
  b.publishedAt.localeCompare(a.publishedAt)
);

export const getNoticiaBySlug = (slug: string) => noticias.find((n) => n.slug === slug);
