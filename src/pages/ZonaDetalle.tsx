import { Link, useParams, Navigate } from "react-router-dom";
import { Head } from "vite-react-ssg";
import { MapPin, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import WhatsAppFab from "@/components/WhatsAppFab";
import TranslateButton from "@/components/TranslateButton";
import logo from "@/assets/logo-icon.png";
import { getZonaBySlug, zonas } from "@/data/zonas";
import { services } from "@/data/services";
import { PHONE, PHONE_DISPLAY, SITE_URL, WHATSAPP_DEFAULT } from "@/data/contact";

const ZonaDetalle = () => {
  const { slug } = useParams<{ slug: string }>();
  const zona = slug ? getZonaBySlug(slug) : undefined;

  if (!zona || zona.slug === "granada-capital") return <Navigate to="/zonas-cobertura" replace />;

  const otrasZonas = zonas.filter((z) => z.slug !== zona.slug && z.slug !== "granada-capital").slice(0, 4);

  const title = `Enfermero a domicilio en ${zona.nombre} | Enfermero en Casa`;
  const description = `Enfermería privada a domicilio en ${zona.nombre} (Granada): curas, sondajes, inyectables y extracciones con Alejandro Romero, enfermero colegiado nº 12386. A ${zona.distanciaKm} km del centro de Granada.`;

  const businessJsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: `Enfermero en Casa - Alejandro Romero (${zona.nombre})`,
    description,
    url: `${SITE_URL}/zonas-cobertura/${zona.slug}`,
    telephone: `+34${PHONE}`,
    areaServed: { "@type": "City", name: zona.nombre },
    provider: {
      "@type": "Person",
      name: "Alejandro Romero",
      jobTitle: "Enfermero colegiado",
      identifier: "Nº Colegiado 12386",
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Zonas de cobertura", item: `${SITE_URL}/zonas-cobertura` },
      { "@type": "ListItem", position: 3, name: zona.nombre, item: `${SITE_URL}/zonas-cobertura/${zona.slug}` },
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={`${SITE_URL}/zonas-cobertura/${zona.slug}`} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${SITE_URL}/zonas-cobertura/${zona.slug}`} />
        <script type="application/ld+json">{JSON.stringify(businessJsonLd)}</script>
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
            <Link to="/zonas-cobertura" className="text-sm font-medium text-muted-foreground hover:text-brand-navy transition-colors">
              Zonas de cobertura
            </Link>
            <TranslateButton />
          </div>
        </nav>
      </header>

      <main id="contenido">
        <section className="relative overflow-hidden bg-gradient-soft py-14 md:py-20">
          <div className="container relative max-w-3xl">
            <Link to="/zonas-cobertura" className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-brand-green hover:underline">
              ← Zonas de cobertura
            </Link>
            <div className="mt-5 flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                <MapPin className="h-3 w-3" /> {zona.distanciaKm > 0 ? `${zona.distanciaKm} km de Granada` : "Granada capital"}
              </span>
              <span className="text-xs font-medium text-muted-foreground">{zona.comarca}</span>
            </div>
            <h1 className="mt-4 text-3xl font-semibold leading-tight text-brand-navy md:text-5xl">
              Enfermero a domicilio en {zona.nombre}
            </h1>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">{zona.detalle}</p>
          </div>
        </section>

        <section className="py-14 md:py-20">
          <div className="container max-w-3xl">
            <div className="rounded-[2rem] bg-gradient-hero p-8 text-center text-primary-foreground shadow-soft md:p-10">
              <h2 className="text-xl font-semibold md:text-2xl">
                ¿Necesitas un enfermero a domicilio en {zona.nombre}?
              </h2>
              <p className="mt-2 text-primary-foreground/85">
                Llámame o escríbeme por WhatsApp — te digo sin compromiso cuándo puedo pasar por tu casa.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <a href={`tel:+34${PHONE}`}>
                  <Button size="lg" className="rounded-full bg-background text-brand-navy hover:bg-background/90">
                    <Phone className="h-4 w-4" /> {PHONE_DISPLAY}
                  </Button>
                </a>
                <a href={WHATSAPP_DEFAULT} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline" className="rounded-full border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-background/10">
                    <MessageCircle className="h-4 w-4" /> WhatsApp
                  </Button>
                </a>
              </div>
            </div>

            <div className="mt-12">
              <h2 className="text-lg font-semibold text-brand-navy">
                Servicios disponibles en {zona.nombre}
              </h2>
              <div className="mt-4 flex flex-wrap gap-3">
                {services.map((s) => (
                  <Link
                    key={s.slug}
                    to={`/servicios/${s.slug}`}
                    className="rounded-full border border-border/60 bg-background px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:border-brand-green hover:text-brand-navy"
                  >
                    {s.title}
                  </Link>
                ))}
              </div>
            </div>

            {otrasZonas.length > 0 && (
              <div className="mt-12">
                <h2 className="text-lg font-semibold text-brand-navy">Otras localidades cercanas</h2>
                <div className="mt-4 flex flex-wrap gap-3">
                  {otrasZonas.map((z) => (
                    <Link
                      key={z.slug}
                      to={`/zonas-cobertura/${z.slug}`}
                      className="rounded-full bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground transition-colors hover:bg-secondary/70"
                    >
                      {z.nombre}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </main>

      <WhatsAppFab href={WHATSAPP_DEFAULT} />
    </div>
  );
};

export default ZonaDetalle;
