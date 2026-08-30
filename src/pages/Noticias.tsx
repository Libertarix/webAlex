import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Calendar, Newspaper, ArrowRight } from "lucide-react";
import { noticias } from "@/data/noticias";
import WhatsAppFab from "@/components/WhatsAppFab";
import TranslateButton from "@/components/TranslateButton";
import logo from "@/assets/logo-icon.png";
import { PHONE, SITE_URL, WHATSAPP_DEFAULT } from "@/data/contact";

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("es-ES", { day: "numeric", month: "long", year: "numeric" });

const Noticias = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Noticias de salud y enfermería | Enfermero en Casa Granada</title>
        <meta
          name="description"
          content="Noticias de actualidad sobre salud y enfermería, seleccionadas y resumidas cada día de fuentes sanitarias fiables."
        />
        <link rel="canonical" href={`${SITE_URL}/noticias`} />
        <meta property="og:title" content="Noticias de salud y enfermería | Enfermero en Casa Granada" />
        <meta
          property="og:description"
          content="Noticias de actualidad sobre salud y enfermería, seleccionadas y resumidas cada día de fuentes sanitarias fiables."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${SITE_URL}/noticias`} />
      </Helmet>
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
            <Link to="/" className="text-sm font-medium text-muted-foreground hover:text-brand-navy transition-colors">
              Volver al inicio
            </Link>
            <TranslateButton />
          </div>
        </nav>
      </header>

      <main id="contenido">
        <section className="relative overflow-hidden bg-gradient-soft py-16 md:py-24">
          <div className="container relative max-w-3xl text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-green">Noticias</span>
            <h1 className="mt-3 text-3xl font-semibold text-brand-navy md:text-5xl">
              Actualidad en salud y enfermería
            </h1>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Un resumen cada día de noticias reales de fuentes sanitarias fiables, con enlace a la noticia completa
              en su medio de origen.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container">
            {noticias.length === 0 ? (
              <p className="text-center text-muted-foreground">
                Todavía no hay noticias publicadas. Vuelve pronto.
              </p>
            ) : (
              <div className="grid gap-6 sm:grid-cols-2">
                {noticias.map((noticia) => (
                  <Link
                    key={noticia.slug}
                    to={`/noticias/${noticia.slug}`}
                    aria-label={`Leer noticia: ${noticia.title}`}
                    className="group flex flex-col overflow-hidden rounded-[1.75rem] border border-border/60 bg-card shadow-card transition-all hover:-translate-y-1 hover:shadow-soft focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    {noticia.image ? (
                      <div className="aspect-[16/9] overflow-hidden">
                        <img
                          src={noticia.image}
                          alt={noticia.imageAlt || ""}
                          loading="lazy"
                          decoding="async"
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                    ) : (
                      <div className="relative flex aspect-[16/9] items-center justify-center overflow-hidden bg-gradient-soft">
                        <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-hero opacity-20 blur-2xl" />
                        <div className="relative grid h-16 w-16 place-items-center rounded-2xl bg-background text-brand-green shadow-card">
                          <Newspaper className="h-8 w-8" />
                        </div>
                      </div>
                    )}
                    <div className="flex flex-1 flex-col p-7">
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span className="inline-flex items-center gap-1.5">
                          <Calendar className="h-3.5 w-3.5" /> {formatDate(noticia.publishedAt)}
                        </span>
                        <span className="font-semibold text-brand-green">{noticia.sourceName}</span>
                      </div>
                      <h2 className="mt-4 text-xl font-semibold leading-snug text-brand-navy">{noticia.title}</h2>
                      <p className="mt-3 flex-1 text-sm text-muted-foreground leading-relaxed">{noticia.summary}</p>
                      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-green group-hover:underline">
                        Leer más <ArrowRight className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            )}

            <p className="mt-12 text-center text-sm text-muted-foreground">
              ¿Necesitas ayuda con algún cuidado en casa?{" "}
              <a href={WHATSAPP_DEFAULT} className="font-semibold text-brand-green hover:underline">
                Escríbeme por WhatsApp
              </a>{" "}
              o llama al {PHONE.replace(/(\d{3})(\d{2})(\d{2})(\d{2})/, "$1 $2 $3 $4")}.
            </p>
          </div>
        </section>
      </main>

      <WhatsAppFab href={WHATSAPP_DEFAULT} />
    </div>
  );
};

export default Noticias;
