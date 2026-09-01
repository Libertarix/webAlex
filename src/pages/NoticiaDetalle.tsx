import { useEffect } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { Head } from "vite-react-ssg";
import { ArrowLeft, Calendar, ExternalLink, Newspaper } from "lucide-react";
import { Button } from "@/components/ui/button";
import { noticias, getNoticiaBySlug } from "@/data/noticias";
import { blogPosts } from "@/data/blog";
import { itemsRelacionados } from "@/lib/relacionados";
import WhatsAppFab from "@/components/WhatsAppFab";
import TranslateButton from "@/components/TranslateButton";
import logo from "@/assets/logo-icon.png";
import { SITE_URL, WHATSAPP_DEFAULT } from "@/data/contact";

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("es-ES", { day: "numeric", month: "long", year: "numeric" });

const NoticiaDetalle = () => {
  const { slug } = useParams<{ slug: string }>();
  const noticia = slug ? getNoticiaBySlug(slug) : undefined;

  useEffect(() => {
    if (!noticia) return;
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [noticia]);

  if (!noticia) return <Navigate to="/noticias" replace />;

  const otrasNoticias = noticias.filter((n) => n.slug !== noticia.slug).slice(0, 3);
  const articulosRelacionados = itemsRelacionados(noticia, blogPosts);

  const newsJsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: noticia.title,
    description: noticia.metaDescription,
    datePublished: noticia.publishedAt,
    dateModified: noticia.publishedAt,
    author: { "@type": "Organization", name: "Enfermero en Casa" },
    publisher: {
      "@type": "Organization",
      name: "Enfermero en Casa",
      logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png` },
    },
    mainEntityOfPage: `${SITE_URL}/noticias/${noticia.slug}`,
    keywords: noticia.keywords.join(", "),
    isBasedOn: noticia.sourceUrl,
    ...(noticia.image ? { image: noticia.image } : {}),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Noticias", item: `${SITE_URL}/noticias` },
      { "@type": "ListItem", position: 3, name: noticia.title, item: `${SITE_URL}/noticias/${noticia.slug}` },
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      <Head>
        <title>{noticia.metaTitle}</title>
        <meta name="description" content={noticia.metaDescription} />
        <meta name="keywords" content={noticia.keywords.join(", ")} />
        <link rel="canonical" href={`${SITE_URL}/noticias/${noticia.slug}`} />
        <meta property="og:title" content={noticia.metaTitle} />
        <meta property="og:description" content={noticia.metaDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`${SITE_URL}/noticias/${noticia.slug}`} />
        {noticia.image && <meta property="og:image" content={noticia.image} />}
        <script type="application/ld+json">{JSON.stringify(newsJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbJsonLd)}</script>
      </Head>
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-brand-navy focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-primary-foreground"
      >
        Saltar al contenido
      </a>

      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-md">
        <nav className="container flex items-center justify-between gap-6 py-3 md:py-4">
          <Link to="/" className="flex items-center gap-3" aria-label="Volver al inicio">
            <img src={logo} alt="Logo Enfermero en Casa" className="h-10 w-10 object-contain" />
            <div className="leading-tight">
              <div className="font-display text-sm font-semibold text-brand-navy md:text-base">
                Enfermero <span className="text-brand-green">en Casa</span>
              </div>
              <div className="text-[10px] text-muted-foreground md:text-[11px]">Alejandro Romero · Granada</div>
            </div>
          </Link>
          <div className="flex items-center gap-3">
            <Link to="/noticias" className="text-sm font-medium text-muted-foreground hover:text-brand-navy transition-colors inline-flex items-center gap-1">
              <ArrowLeft className="h-4 w-4" /> Noticias
            </Link>
            <TranslateButton />
          </div>
        </nav>
      </header>

      <main id="contenido">
        <article>
          <div className="relative overflow-hidden bg-gradient-soft py-14 md:py-20">
            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gradient-hero opacity-20 blur-3xl" />
            <div className="container relative max-w-3xl">
              <Link to="/noticias" className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-brand-green hover:underline">
                <ArrowLeft className="h-3 w-3" /> Noticias
              </Link>
              <div className="mt-5 grid h-14 w-14 place-items-center rounded-2xl bg-background text-brand-green shadow-card">
                <Newspaper className="h-7 w-7" />
              </div>
              <h1 className="mt-4 text-3xl font-semibold leading-tight text-brand-navy md:text-5xl">{noticia.title}</h1>
              <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="h-4 w-4" /> {formatDate(noticia.publishedAt)}
                </span>
                <span>
                  Fuente: <strong className="font-semibold text-foreground">{noticia.sourceName}</strong>
                </span>
              </div>
            </div>
          </div>

          <div className="container max-w-3xl py-10 md:py-14">
            {noticia.image && (
              <img
                src={noticia.image}
                alt={noticia.imageAlt || ""}
                loading="eager"
                decoding="async"
                className="mb-8 aspect-[16/9] w-full rounded-[2rem] object-cover shadow-soft"
              />
            )}

            <p className="text-lg text-muted-foreground leading-relaxed">{noticia.summary}</p>

            <div className="mt-8 flex items-start gap-3 rounded-2xl border border-border/60 bg-secondary/40 p-5">
              <Newspaper className="mt-0.5 h-5 w-5 shrink-0 text-brand-green" />
              <p className="text-sm text-muted-foreground leading-relaxed">
                Resumen elaborado a partir de la noticia publicada por <strong>{noticia.sourceName}</strong>. Puedes
                leer la noticia completa en su fuente original.
              </p>
            </div>

            <a
              href={noticia.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2"
            >
              <Button size="lg" className="rounded-full bg-brand-navy hover:bg-brand-navy/90">
                Leer la noticia completa en {noticia.sourceName} <ExternalLink className="h-4 w-4" />
              </Button>
            </a>

            {articulosRelacionados.length > 0 && (
              <div className="mt-10">
                <h2 className="text-lg font-semibold text-brand-navy">Artículos relacionados del blog</h2>
                <ul className="mt-3 space-y-2">
                  {articulosRelacionados.map((post) => (
                    <li key={post.slug}>
                      <Link to={`/blog/${post.slug}`} className="text-sm font-medium text-brand-green hover:underline">
                        {post.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </article>

        {otrasNoticias.length > 0 && (
          <section className="bg-gradient-soft py-16 md:py-24">
            <div className="container">
              <h2 className="text-2xl font-semibold text-brand-navy md:text-3xl text-center">Más noticias</h2>
              <div className="mt-10 grid gap-6 sm:grid-cols-3">
                {otrasNoticias.map((n) => (
                  <Link
                    key={n.slug}
                    to={`/noticias/${n.slug}`}
                    className="flex flex-col rounded-2xl border border-border/60 bg-card p-6 shadow-card transition hover:-translate-y-1 hover:shadow-soft"
                  >
                    <h3 className="text-lg font-semibold text-brand-navy">{n.title}</h3>
                    <p className="mt-2 flex-1 text-sm text-muted-foreground leading-relaxed">{n.summary}</p>
                    <span className="mt-4 inline-block text-sm font-semibold text-brand-green">Leer más →</span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <WhatsAppFab href={WHATSAPP_DEFAULT} />
    </div>
  );
};

export default NoticiaDetalle;
