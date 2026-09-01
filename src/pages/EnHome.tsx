import { Link } from "react-router-dom";
import { Head } from "vite-react-ssg";
import { Phone, MessageCircle, ShieldCheck, Clock, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import WhatsAppFab from "@/components/WhatsAppFab";
import TranslateButton from "@/components/TranslateButton";
import logo from "@/assets/logo-icon.png";
import heroNurse from "@/assets/hero-nurse.jpg";
import { services } from "@/data/services";
import { PHONE, PHONE_DISPLAY, COLEGIADO, SITE_URL, whatsappUrl } from "@/data/contact";

// Página en inglés real, indexable, con su propio <title>/meta/JSON-LD y
// hreflang cruzado con la portada en español — a diferencia del botón de
// Google Translate (traducción solo en el navegador, invisible para
// buscadores), esta URL sí la puede indexar Google como contenido en
// inglés de verdad. Traducción propia, no generada por IA sobre la marcha
// — mismo criterio de calidad que el resto de traducciones del proyecto.
// Alcance de esta primera pasada: portada solamente (hero, sobre mí,
// resumen de servicios, FAQ principal) — fichas de servicio individuales,
// blog y noticias quedan fuera por ahora.

const serviceTranslations: Record<string, { title: string; desc: string }> = {
  "curas-heridas-domicilio-granada": {
    title: "Wound, injury and pressure sore care",
    desc: "Initial assessment, sterile wound dressing, follow-up for surgical wounds, injuries and ulcers, with personalised self-care advice.",
  },
  "retirada-puntos-grapas-granada": {
    title: "Stitch and staple removal",
    desc: "Assessment, dressing, follow-up and removal of staples or sutures at your home, with personalised advice.",
  },
  "cuidados-ostomias-domicilio-granada": {
    title: "Ostomy care",
    desc: "Stoma assessment, dressing changes, device changes (disc and bag), follow-up and health education for colostomies, ileostomies or gastrostomies.",
  },
  "sondajes-dispositivos-medicos-granada": {
    title: "Catheters and medical devices",
    desc: "Care and follow-up for urinary catheters, nasogastric tubes, drains and other devices, with education for the patient and family.",
  },
  "valoracion-salud-domicilio-granada": {
    title: "Health status assessment",
    desc: "Physical examination, vital signs and a full assessment using validated scales (nutrition, dependency, fall risk) for the patient and family.",
  },
  "inyeccion-intramuscular-domicilio-granada": {
    title: "Intramuscular medication",
    desc: "Preparation and administration of prescribed intramuscular medication: vaccines, B12, corticosteroids and others.",
  },
  "inyeccion-subcutanea-domicilio-granada": {
    title: "Subcutaneous medication",
    desc: "Preparation and administration of subcutaneous medication: insulin, heparin, vaccines and other prescribed treatments.",
  },
  "tratamiento-intravenoso-domicilio-granada": {
    title: "Intravenous treatment",
    desc: "Catheter placement and aseptic administration of intravenous medication, with monitoring throughout the process.",
  },
  "extraccion-muestras-domicilio-granada": {
    title: "Sample collection",
    desc: "Blood, urine, antigen, PCR or other sample collection at home, with delivery to the laboratory for analysis.",
  },
};

const faqsEn = [
  {
    q: "Do you cover areas outside Granada city?",
    a: "Yes — I attend Granada city and the whole metropolitan area (Armilla, Maracena, Santa Fe and other nearby towns). If your town isn't on the usual list, call me and we'll confirm it together, no obligation.",
  },
  {
    q: "How soon can you come to my home?",
    a: "In most cases I can attend the same day or the next, depending on the time slot you need. For urgent situations (catheter issues, retention, IV therapy, poorly controlled pain), the fastest way is to call me directly.",
  },
  {
    q: "What payment methods do you accept?",
    a: "Cash, Bizum or bank transfer at the end of each session. I always provide a receipt for the service, which you can submit to your private insurer if needed.",
  },
  {
    q: "Do you work weekends and public holidays?",
    a: "Yes, every day of the year, coordinated in advance — including wound care that can't be interrupted, scheduled medication or ongoing catheter/ostomy care.",
  },
  {
    q: "Is it legal to hire a private home nurse in Spain?",
    a: "Yes, completely. I am a registered nurse (Colegiado nº 12386) and private home nursing care is a regulated, common practice in Spain. You receive a receipt for every visit.",
  },
  {
    q: "Is my medical information confidential?",
    a: "Absolutely. As a registered nurse I am bound by professional confidentiality and GDPR compliance — your information is only used to provide your care.",
  },
];

const EnHome = () => {
  const businessJsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": `${SITE_URL}/en/#business`,
    name: "Enfermero en Casa - Home Nursing Care in Granada, Spain",
    description:
      "Private home nursing service in Granada, Spain and its metropolitan area. Wound care, catheters, injections, blood sample collection and specialised care, provided by a registered nurse.",
    image: `${SITE_URL}/logo.png`,
    url: `${SITE_URL}/en`,
    telephone: "+34636144057",
    areaServed: [{ "@type": "City", name: "Granada" }, { "@type": "AdministrativeArea", name: "Granada metropolitan area" }],
    founder: {
      "@type": "Person",
      name: "Alejandro Romero",
      jobTitle: "Registered nurse",
      identifier: `Colegiado nº ${COLEGIADO}`,
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/en` }],
  };

  const whatsapp = whatsappUrl("Hi Alejandro, I'd like some information about your home nursing services.");

  return (
    <div className="min-h-screen bg-background">
      <Head>
        <html lang="en" />
        <title>Home Nursing Care in Granada, Spain | Enfermero en Casa</title>
        <meta
          name="description"
          content="Private registered nurse providing home visits in Granada, Spain: wound care, catheters, injections, blood sample collection. Same-day availability, English spoken on request."
        />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <link rel="canonical" href={`${SITE_URL}/en`} />
        <link rel="alternate" hrefLang="en" href={`${SITE_URL}/en`} />
        <link rel="alternate" hrefLang="es" href={`${SITE_URL}/`} />
        <link rel="alternate" hrefLang="x-default" href={`${SITE_URL}/`} />
        <meta property="og:title" content="Home Nursing Care in Granada, Spain | Enfermero en Casa" />
        <meta
          property="og:description"
          content="Private registered nurse providing home visits in Granada, Spain: wound care, catheters, injections, blood sample collection."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${SITE_URL}/en`} />
        <meta property="og:image" content={`${SITE_URL}/logo.png`} />
        <meta property="og:locale" content="en_GB" />
        <script type="application/ld+json">{JSON.stringify(businessJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbJsonLd)}</script>
      </Head>
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-brand-navy focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-primary-foreground"
      >
        Skip to content
      </a>

      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-md">
        <nav className="container flex items-center justify-between gap-6 py-3 md:py-4">
          <Link to="/en" className="flex items-center gap-3" aria-label="Enfermero en Casa - Home">
            <img src={logo} alt="Enfermero en Casa logo" className="h-10 w-10 object-contain" />
            <div className="leading-tight">
              <div className="font-display text-sm font-semibold text-brand-navy md:text-base">
                Enfermero <span className="text-brand-green">en Casa</span>
              </div>
              <div className="text-[10px] text-muted-foreground md:text-[11px]">Alejandro Romero · Granada</div>
            </div>
          </Link>
          <div className="flex items-center gap-3">
            <Link to="/" className="text-sm font-medium text-muted-foreground hover:text-brand-navy transition-colors">
              Versión en español
            </Link>
            <TranslateButton />
          </div>
        </nav>
      </header>

      <main id="contenido">
        <section className="relative overflow-hidden bg-gradient-hero py-20 md:py-32">
          <img
            src={logo}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -bottom-24 w-[520px] opacity-10 blur-2xl select-none"
          />
          <div className="container relative grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-primary-foreground/80">
                Home nurse in Granada, Spain
              </span>
              <h1 className="mt-4 text-4xl font-semibold leading-tight text-primary-foreground md:text-6xl">
                Taking care of your health shouldn&apos;t mean leaving home.
              </h1>
              <p className="mt-6 text-lg text-primary-foreground/90">
                Professional, friendly nursing care at your own pace. I come to you, you rest.
              </p>
              <p className="mt-4 text-primary-foreground/85">
                I&apos;m Alejandro Romero, a registered nurse (Colegiado nº {COLEGIADO}) with over 10 years of
                experience in leading hospitals and private home care in Granada. Wound care, catheters,
                injections and professional care in the comfort of your own home.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={`tel:+34${PHONE}`}>
                  <Button size="lg" className="rounded-full bg-background text-brand-navy hover:bg-background/90">
                    <Phone className="h-4 w-4" /> {PHONE_DISPLAY}
                  </Button>
                </a>
                <a href={whatsapp} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline" className="rounded-full border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-background/10">
                    <MessageCircle className="h-4 w-4" /> WhatsApp
                  </Button>
                </a>
              </div>
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-primary-foreground/80">
                <span className="inline-flex items-center gap-1.5"><Clock className="h-4 w-4" /> Same-day availability</span>
                <span className="inline-flex items-center gap-1.5"><ShieldCheck className="h-4 w-4" /> Registered nurse</span>
                <span className="inline-flex items-center gap-1.5"><Lock className="h-4 w-4" /> Full confidentiality</span>
              </div>
            </div>
            <img
              src={heroNurse}
              alt="Alejandro Romero, home nurse in Granada, attending a patient at their home"
              width={800}
              height={950}
              className="rounded-[2rem] object-cover shadow-soft"
            />
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-green">About me</span>
            <h2 className="mt-3 text-3xl font-semibold text-brand-navy md:text-5xl">My story</h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              I have over ten years of experience caring for people. I started at La Paz University Hospital in
              Madrid, working in departments including Oncology, Haematology, Resuscitation, Trauma, Cardiology,
              Pulmonology, Maxillofacial Surgery and Neurophysiology. There I learned the essentials of patient
              care: handling complex situations calmly, adapting to each person&apos;s needs, and communicating
              with family members who are often worried or overwhelmed.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              In 2020, during the hardest months of the pandemic, I joined the High-Level Isolation Unit at the
              Carlos III Hospital to care for COVID patients — some of the most demanding months of my career, and
              also the ones that shaped me the most. Today I work at the Andalusian Health Service, in the
              Surgery ward of the San Cecilio University Hospital in Granada, alongside my private home care
              practice in the city and the surrounding towns.
            </p>
          </div>
        </section>

        <section id="servicios" className="bg-secondary/30 py-16 md:py-24">
          <div className="container">
            <div className="text-center">
              <span className="text-xs font-semibold uppercase tracking-widest text-brand-green">Services</span>
              <h2 className="mt-3 text-3xl font-semibold text-brand-navy md:text-5xl">Home nursing care</h2>
              <p className="mt-4 text-muted-foreground">
                Full nursing care so you don&apos;t have to travel. Can&apos;t find what you need? Call me and we&apos;ll go through it together.
              </p>
            </div>
            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((s) => {
                const t = serviceTranslations[s.slug];
                if (!t) return null;
                return (
                  <Link
                    key={s.slug}
                    to={`/servicios/${s.slug}`}
                    aria-label={`View details: ${t.title}`}
                    className="group flex flex-col rounded-[1.75rem] border border-border/60 bg-card p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-soft"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div className="grid h-11 w-11 place-items-center rounded-2xl bg-secondary text-brand-green">
                        <s.icon className="h-5 w-5" />
                      </div>
                      <span className="text-sm font-semibold text-brand-green">
                        From {s.price}
                        <span className="ml-1 text-xs text-muted-foreground">{s.unit === "/sesión" ? "/session" : "/service"}</span>
                      </span>
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-brand-navy">{t.title}</h3>
                    <p className="mt-2 flex-1 text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
                    <span className="mt-4 inline-flex items-center text-sm font-semibold text-brand-green group-hover:underline">
                      View service →
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <section id="faq" className="py-16 md:py-24">
          <div className="container max-w-3xl">
            <div className="text-center">
              <span className="text-xs font-semibold uppercase tracking-widest text-brand-green">FAQ</span>
              <h2 className="mt-3 text-3xl font-semibold text-brand-navy md:text-5xl">Common questions</h2>
            </div>
            <div className="mt-10 space-y-6">
              {faqsEn.map((f) => (
                <div key={f.q} className="rounded-2xl border border-border/60 bg-card p-6">
                  <h3 className="font-semibold text-brand-navy">{f.q}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container max-w-3xl rounded-[2rem] bg-gradient-hero p-8 text-center text-primary-foreground shadow-soft md:p-12">
            <h2 className="text-2xl font-semibold md:text-3xl">Need home nursing care in Granada?</h2>
            <p className="mt-3 text-primary-foreground/85">
              Call or message me directly — no intermediaries, no long forms. I&apos;ll explain what the visit involves and the exact cost before you book anything.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <a href={`tel:+34${PHONE}`}>
                <Button size="lg" className="rounded-full bg-background text-brand-navy hover:bg-background/90">
                  <Phone className="h-4 w-4" /> {PHONE_DISPLAY}
                </Button>
              </a>
              <a href={whatsapp} target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="rounded-full border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-background/10">
                  <MessageCircle className="h-4 w-4" /> WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>

      <WhatsAppFab href={whatsapp} />
    </div>
  );
};

export default EnHome;
