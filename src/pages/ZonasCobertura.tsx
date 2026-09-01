import { Link } from "react-router-dom";
import { Head } from "vite-react-ssg";
import { MapPin, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import WhatsAppFab from "@/components/WhatsAppFab";
import TranslateButton from "@/components/TranslateButton";
import logo from "@/assets/logo-icon.png";
import { zonas } from "@/data/zonas";
import { services } from "@/data/services";
import { PHONE, PHONE_DISPLAY, SITE_URL, WHATSAPP_DEFAULT } from "@/data/contact";

const comarcas = ["Granada capital", "Zona sur", "Zona norte", "Vega de Granada"] as const;

const ZonasCobertura = () => {
  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Zonas de cobertura del enfermero a domicilio en Granada",
    description:
      "Localidades del área metropolitana de Granada donde Enfermero en Casa atiende con regularidad, con la distancia real desde el centro de la ciudad.",
    url: `${SITE_URL}/zonas-cobertura`,
    about: {
      "@type": "ItemList",
      itemListElement: zonas.map((z, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: z.nombre,
      })),
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Zonas de cobertura", item: `${SITE_URL}/zonas-cobertura` },
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      <Head>
        <title>Enfermero a domicilio en Armilla, Maracena, Santa Fe y toda el área de Granada | Enfermero en Casa</title>
        <meta
          name="description"
          content="Zonas donde atiendo como enfermero privado a domicilio: Granada capital y 15 localidades del área metropolitana (Armilla, Maracena, Santa Fe, Atarfe, La Zubia y más), con distancia real desde el centro."
        />
        <link rel="canonical" href={`${SITE_URL}/zonas-cobertura`} />
        <meta property="og:title" content="Zonas de cobertura | Enfermero a domicilio en Granada y su área metropolitana" />
        <meta
          property="og:description"
          content="Localidades donde atiendo con regularidad como enfermero privado a domicilio, con la distancia real desde Granada capital."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${SITE_URL}/zonas-cobertura`} />
        <script type="application/ld+json">{JSON.stringify(webPageJsonLd)}</script>
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
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-green">Zonas de cobertura</span>
            <h1 className="mt-3 text-3xl font-semibold text-brand-navy md:text-5xl">
              Enfermero a domicilio en Granada y su área metropolitana
            </h1>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Además de Granada capital, atiendo con regularidad en {zonas.length - 1} localidades del área
              metropolitana. Aquí tienes la distancia real desde el centro de Granada a cada una — si la tuya no
              aparece, llámame de todas formas: muchas veces puedo desplazarme valorando antes la zona y el horario.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container">
            {comarcas.map((comarca) => {
              const zonasComarca = zonas.filter((z) => z.comarca === comarca);
              if (zonasComarca.length === 0) return null;
              return (
                <div key={comarca} className="mb-14 last:mb-0">
                  <h2 className="text-xl font-semibold text-brand-navy md:text-2xl">{comarca}</h2>
                  <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {zonasComarca.map((zona) => (
                      <div
                        key={zona.slug}
                        id={zona.slug}
                        className="scroll-mt-24 rounded-[1.75rem] bg-card p-6 shadow-card"
                      >
                        <div className="flex items-center justify-between gap-3">
                          <h3 className="text-lg font-semibold text-brand-navy">{zona.nombre}</h3>
                          {zona.distanciaKm > 0 && (
                            <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                              <MapPin className="h-3 w-3" /> {zona.distanciaKm} km
                            </span>
                          )}
                        </div>
                        <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{zona.texto}</p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}

            <div className="mt-4 rounded-[2rem] bg-gradient-hero p-8 text-center text-primary-foreground shadow-soft md:p-10">
              <h2 className="text-xl font-semibold md:text-2xl">¿Vives en alguna de estas zonas?</h2>
              <p className="mt-2 text-primary-foreground/85">
                Consulta sin compromiso qué servicio necesitas y cuándo puedo pasar por tu casa.
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

            <div className="mt-12 text-center">
              <h2 className="text-lg font-semibold text-brand-navy">Servicios disponibles en toda la zona</h2>
              <div className="mt-4 flex flex-wrap justify-center gap-3">
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
          </div>
        </section>
      </main>

      <WhatsAppFab href={WHATSAPP_DEFAULT} />
    </div>
  );
};

export default ZonasCobertura;
