import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useParams, Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ArrowLeft, Phone, MessageCircle, CheckCircle2, Clock, Lock, ShieldCheck, Sparkles,
} from "lucide-react";
import { getServiceBySlug, services } from "@/data/services";
import WhatsAppFab from "@/components/WhatsAppFab";
import TranslateButton from "@/components/TranslateButton";
import logo from "@/assets/logo-icon.png";
import { PHONE, PHONE_DISPLAY, SITE_URL, whatsappUrl } from "@/data/contact";

const WHATSAPP = (title: string) =>
  whatsappUrl(`Hola Alejandro, me interesa el servicio de "${title}". ¿Puedes darme más información?`);

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getServiceBySlug(slug) : undefined;

  useEffect(() => {
    if (!service) return;
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [service]);

  if (!service) return <Navigate to="/" replace />;

  const Icon = service.icon;
  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: service.title,
    description: service.metaDescription,
    image: `${SITE_URL}${service.image}`,
    url: `${SITE_URL}/servicios/${service.slug}`,
    provider: {
      "@type": "MedicalBusiness",
      name: "Enfermero en Casa - Alejandro Romero",
      areaServed: "Granada, España",
      telephone: `+34${PHONE}`,
      url: `${SITE_URL}/`,
    },
    offers: {
      "@type": "Offer",
      price: service.price.replace(/[^\d]/g, ""),
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      url: `${SITE_URL}/servicios/${service.slug}`,
    },
  };

  const faqJsonLd = service.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  } : null;

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Servicios", item: `${SITE_URL}/#servicios` },
      { "@type": "ListItem", position: 3, name: service.title, item: `${SITE_URL}/servicios/${service.slug}` },
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{service.metaTitle}</title>
        <meta name="description" content={service.metaDescription} />
        <link rel="canonical" href={`${SITE_URL}/servicios/${service.slug}`} />
        <meta property="og:title" content={service.metaTitle} />
        <meta property="og:description" content={service.metaDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`${SITE_URL}/servicios/${service.slug}`} />
        <meta property="og:image" content={`${SITE_URL}${service.image}`} />
        <meta name="twitter:title" content={service.metaTitle} />
        <meta name="twitter:description" content={service.metaDescription} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbJsonLd)}</script>
        {faqJsonLd && <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>}
      </Helmet>
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-brand-navy focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-primary-foreground"
      >
        Saltar al contenido
      </a>

      {/* NAV mínima */}
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
            <Link to="/" className="text-sm font-medium text-muted-foreground hover:text-brand-navy transition-colors inline-flex items-center gap-1">
              <ArrowLeft className="h-4 w-4" /> Volver
            </Link>
            <TranslateButton />
          </div>
        </nav>
      </header>

      <main id="contenido">
      {/* HERO del servicio */}
      <section className="relative overflow-hidden bg-gradient-soft py-12 md:py-20">
        <div className="container relative grid gap-10 md:grid-cols-2 md:items-center">
          <div className="animate-fade-up">
            <Link to="/#servicios" className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-brand-green hover:underline">
              <ArrowLeft className="h-3 w-3" /> Servicios
            </Link>
            <div className="mt-4 inline-grid h-12 w-12 place-items-center rounded-2xl bg-secondary text-brand-green">
              <Icon className="h-6 w-6" />
            </div>
            <h1 className="mt-4 text-3xl font-semibold leading-tight text-brand-navy md:text-5xl">
              {service.title}
            </h1>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">{service.intro}</p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <div className="rounded-2xl bg-card border border-border/60 px-5 py-3 shadow-card">
                <div className="text-xs text-muted-foreground">Desde</div>
                <div className="text-2xl font-semibold text-brand-green">
                  {service.price}<span className="ml-1 text-sm text-muted-foreground">{service.unit}</span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4 text-brand-green" /> {service.duration}
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href={`tel:+34${PHONE}`}>
                <Button size="lg" className="rounded-full bg-brand-navy hover:bg-brand-navy/90 shadow-soft">
                  <Phone className="h-4 w-4" /> Llamar al {PHONE_DISPLAY}
                </Button>
              </a>
              <a href={WHATSAPP(service.title)} target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="rounded-full border-brand-green/40 text-brand-green hover:bg-secondary">
                  <MessageCircle className="h-4 w-4" /> WhatsApp
                </Button>
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-hero opacity-15 blur-2xl" />
            <img
              src={service.image}
              alt={`${service.title} a domicilio en Granada por enfermero colegiado`}
              width={1200}
              height={900}
              loading="eager"
              // @ts-expect-error React 18's DOM runtime only recognizes the lowercase
              // "fetchpriority" attribute; its own type defs assume camelCase (React 19+).
              fetchpriority="high"
              decoding="async"
              className="relative rounded-[2rem] shadow-soft object-cover w-full max-h-[480px]"
            />
          </div>
        </div>
      </section>

      {/* DETALLES */}
      <section className="py-16 md:py-24">
        <div className="container grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold text-brand-navy md:text-3xl">Qué incluye el servicio</h2>
            <ul className="mt-6 space-y-3">
              {service.includes.map((item) => (
                <li key={item} className="flex gap-3 text-muted-foreground">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-green" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-brand-navy md:text-3xl">Indicaciones habituales</h2>
            <ul className="mt-6 space-y-3">
              {service.indications.map((item) => (
                <li key={item} className="flex gap-3 text-muted-foreground">
                  <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-brand-green" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex items-start gap-3 rounded-2xl border border-border/60 bg-card p-5 shadow-card">
              <Lock className="mt-0.5 h-5 w-5 shrink-0 text-brand-green" />
              <p className="text-sm text-muted-foreground leading-relaxed">
                Confidencialidad total. Tus datos sanitarios están protegidos por el secreto profesional y el RGPD.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DESCRIPCIÓN AMPLIADA */}
      {service.longDescription.length > 0 && (
        <section className="bg-gradient-soft py-16 md:py-24">
          <div className="container max-w-3xl">
            <h2 className="text-2xl font-semibold text-brand-navy md:text-3xl">
              Sobre este servicio
            </h2>
            <div className="mt-6 space-y-5 text-muted-foreground leading-relaxed">
              {service.longDescription.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CÓMO ES LA VISITA */}
      {service.process.length > 0 && (
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-semibold uppercase tracking-widest text-brand-green">Cómo es la visita</span>
              <h2 className="mt-3 text-2xl font-semibold text-brand-navy md:text-3xl">Paso a paso, sin sorpresas</h2>
            </div>
            <ol className="mt-10 grid gap-6 md:grid-cols-3">
              {service.process.map((p, i) => (
                <li key={i} className="relative rounded-2xl border border-border/60 bg-card p-6 shadow-card">
                  <span className="absolute -top-4 left-6 rounded-full bg-brand-navy px-3 py-1 text-xs font-semibold text-primary-foreground">
                    Paso {i + 1}
                  </span>
                  <h3 className="mt-2 text-lg font-semibold text-brand-navy">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}

      {/* BENEFICIOS */}
      {service.benefits.length > 0 && (
        <section className="bg-gradient-soft py-16 md:py-24">
          <div className="container max-w-4xl">
            <div className="text-center">
              <span className="text-xs font-semibold uppercase tracking-widest text-brand-green">Por qué hacerlo en casa</span>
              <h2 className="mt-3 text-2xl font-semibold text-brand-navy md:text-3xl">Ventajas para ti y tu familia</h2>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {service.benefits.map((b) => (
                <div key={b} className="flex items-start gap-3 rounded-2xl border border-border/60 bg-card p-5 shadow-card">
                  <Sparkles className="mt-0.5 h-5 w-5 shrink-0 text-brand-green" />
                  <span className="text-sm text-foreground/90 leading-relaxed">{b}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ específicas */}
      {service.faqs.length > 0 && (
        <section className="py-16 md:py-24">
          <div className="container max-w-3xl">
            <h2 className="text-2xl font-semibold text-brand-navy md:text-3xl text-center">
              Preguntas sobre este servicio
            </h2>
            <Accordion type="single" collapsible className="mt-8">
              {service.faqs.map((f, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-border/60">
                  <AccordionTrigger className="text-left text-base font-semibold text-brand-navy hover:no-underline">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="rounded-[2rem] bg-gradient-hero p-10 text-center text-primary-foreground shadow-soft">
            <h2 className="text-2xl md:text-3xl font-semibold">¿Necesitas este servicio en casa?</h2>
            <p className="mt-3 text-primary-foreground/85">Llámame o escríbeme y lo organizamos sin compromiso.</p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <a href={`tel:+34${PHONE}`}>
                <Button size="lg" className="rounded-full bg-background text-brand-navy hover:bg-background/90">
                  <Phone className="h-4 w-4" /> {PHONE_DISPLAY}
                </Button>
              </a>
              <a href={WHATSAPP(service.title)} target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="rounded-full border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-background/10">
                  <MessageCircle className="h-4 w-4" /> WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* RELACIONADOS */}
      <section className="bg-gradient-soft py-16 md:py-24">
        <div className="container">
          <h2 className="text-2xl font-semibold text-brand-navy md:text-3xl text-center">Otros servicios</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((s) => {
              const SIcon = s.icon;
              return (
                <Link
                  key={s.slug}
                  to={`/servicios/${s.slug}`}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-border/60 bg-card shadow-card transition-all hover:-translate-y-1 hover:shadow-soft"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img src={s.image} alt={`${s.title} a domicilio en Granada`} width={800} height={600} loading="lazy" decoding="async" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute left-4 top-4 grid h-11 w-11 place-items-center rounded-2xl bg-background/90 text-brand-navy backdrop-blur-sm">
                      <SIcon className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-brand-navy">{s.title}</h3>
                    <span className="mt-3 inline-block text-sm font-semibold text-brand-green">Ver servicio →</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
      </main>

      <WhatsAppFab href={WHATSAPP(service.title)} />
    </div>
  );
};

export default ServiceDetail;
