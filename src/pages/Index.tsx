import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Phone,
  MessageCircle,
  Syringe,
  Bandage,
  Pill,
  Activity,
  Droplets,
  ShieldCheck,
  MapPin,
  Clock,
  CheckCircle2,
  Scissors,
  ClipboardList,
  TestTube,
  Mail,
  Menu,
  X,
  Award,
} from "lucide-react";
import heroNurse from "@/assets/hero-nurse.jpg";
import aboutNurse from "@/assets/about-nurse.jpg";
import serviceCare from "@/assets/service-care.jpg";
import logo from "@/assets/logo.png";

const PHONE = "626784327";
const PHONE_DISPLAY = "626 78 43 27";
const EMAIL = "cuidate@enfermeroencasa.com";
const COLEGIADO = "47384";
const WHATSAPP = `https://wa.me/34${PHONE}?text=${encodeURIComponent(
  "Hola Alejandro, me gustaría información sobre los servicios de enfermería a domicilio."
)}`;

const services = [
  { icon: Bandage, title: "Curas de heridas, lesiones y escaras", desc: "Valoración inicial, cura con material estéril, seguimiento de heridas quirúrgicas, lesiones y úlceras, con recomendaciones individualizadas para el autocuidado.", price: "50 €", unit: "/sesión" },
  { icon: Scissors, title: "Retirada de puntos y grapas", desc: "Evaluación, cura, seguimiento y retirada de grapas o puntos de sutura en tu domicilio, con recomendaciones personalizadas.", price: "50 €", unit: "/sesión" },
  { icon: ShieldCheck, title: "Cuidados de ostomías", desc: "Valoración del estoma, cura, cambio de dispositivos (disco y bolsa), seguimiento y educación sanitaria para colostomías, ileostomías o gastrostomías.", price: "50 €", unit: "/sesión" },
  { icon: Droplets, title: "Sondajes y dispositivos médicos", desc: "Cuidados y seguimiento de sondas vesicales, nasogástricas, drenajes y otros dispositivos, con educación sanitaria al paciente y la familia.", price: "50 €", unit: "/sesión" },
  { icon: ClipboardList, title: "Valoración del estado de salud", desc: "Examen físico, toma de constantes y valoración integral mediante escalas validadas (nutrición, dependencia, riesgo de caídas) al paciente y familiar.", price: "40 €", unit: "/sesión" },
  { icon: Syringe, title: "Medicación intramuscular", desc: "Preparación y administración con material estéril de medicación intramuscular: vacunas, B12, corticoides recetados, entre otros.", price: "40 €", unit: "/sesión" },
  { icon: Pill, title: "Medicación subcutánea", desc: "Preparación y administración de medicación subcutánea con material estéril: insulina, heparina, vacunas y otras pautas.", price: "40 €", unit: "/sesión" },
  { icon: Activity, title: "Tratamiento intravenoso", desc: "Canalización de catéter y administración aséptica de medicación intravenosa, con control del paciente durante todo el proceso.", price: "50 €", unit: "/sesión" },
  { icon: TestTube, title: "Extracción de muestras", desc: "Extracción de sangre, orina, antígeno, PCR u otras muestras en el domicilio y posterior traslado al laboratorio para su análisis.", price: "40 €", unit: "/servicio" },
];

const coverage = [
  "Granada capital", "Armilla", "Maracena", "Albolote", "Atarfe", "Peligros",
  "Pulianas", "Cájar", "La Zubia", "Cenes de la Vega", "Huétor Vega", "Ogíjares",
  "Las Gabias", "Churriana de la Vega", "Santa Fe", "Pinos Puente",
];

const testimonials = [
  { name: "María L.", text: "Una atención cercana y muy profesional. Vino a casa para las curas de mi madre y todo perfecto." },
  { name: "Antonio R.", text: "Puntual, cuidadoso y con mucha paciencia. Recomendable al 100%." },
  { name: "Carmen S.", text: "Me solucionó un sondaje en el mismo día. Muy agradecida por la rapidez y el trato." },
];

const faqs = [
  { q: "¿En qué zonas de Granada atiendes?", a: "Atiendo en Granada capital y en los municipios del área metropolitana: Armilla, Maracena, Albolote, Atarfe, La Zubia, Cájar, Huétor Vega, Ogíjares, Las Gabias, Churriana, Cenes de la Vega, Peligros, Pulianas, Santa Fe y Pinos Puente. Si tu localidad no está, llámame y lo confirmamos." },
  { q: "¿Eres enfermero colegiado?", a: `Sí. Soy Alejandro Romero, enfermero colegiado nº ${COLEGIADO}, con más de 10 años de experiencia tanto en atención hospitalaria como a domicilio.` },
  { q: "¿Cuánto tardas en venir a casa?", a: "En la mayoría de casos puedo atender el mismo día o al día siguiente. Para situaciones urgentes, lo mejor es llamar directamente." },
  { q: "¿Qué formas de pago aceptas?", a: "Efectivo, Bizum y transferencia bancaria al finalizar la sesión. Para packs de varias sesiones, condiciones especiales." },
  { q: "¿Atiendes fines de semana y festivos?", a: "Sí, atiendo todos los días del año coordinando previamente la visita." },
];

const navLinks = [
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#servicios", label: "Servicios" },
  { href: "#cobertura", label: "Cobertura" },
  { href: "#faq", label: "FAQ" },
  { href: "#contacto", label: "Contacto" },
];

const Index = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
        <nav className="container flex h-20 items-center justify-between">
          <a href="#inicio" className="flex items-center gap-3" aria-label="Enfermero en Casa - Inicio">
            <img src={logo} alt="Logo Enfermero en Casa" className="h-12 w-12 object-contain" />
            <div className="leading-tight">
              <div className="font-display text-lg font-semibold text-brand-navy">Enfermero <span className="text-brand-green">en Casa</span></div>
              <div className="text-[11px] text-muted-foreground">Alejandro Romero · Col. {COLEGIADO}</div>
            </div>
          </a>

          <div className="hidden items-center gap-7 lg:flex text-sm font-medium text-muted-foreground">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-brand-navy transition-colors">{l.label}</a>
            ))}
          </div>

          <div className="hidden md:block">
            <a href={`tel:+34${PHONE}`}>
              <Button size="sm" className="rounded-full bg-brand-navy hover:bg-brand-navy/90">
                <Phone className="h-4 w-4" /> {PHONE_DISPLAY}
              </Button>
            </a>
          </div>

          <button
            type="button"
            aria-label="Abrir menú"
            className="lg:hidden grid h-10 w-10 place-items-center rounded-full border border-border/60"
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        {menuOpen && (
          <div className="lg:hidden border-t border-border/60 bg-background">
            <div className="container flex flex-col gap-1 py-4">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-lg px-3 py-3 text-sm font-medium text-foreground/80 hover:bg-secondary"
                >
                  {l.label}
                </a>
              ))}
              <a href={`tel:+34${PHONE}`} className="mt-2">
                <Button className="w-full rounded-full bg-brand-navy hover:bg-brand-navy/90">
                  <Phone className="h-4 w-4" /> {PHONE_DISPLAY}
                </Button>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="inicio" className="relative overflow-hidden bg-gradient-soft">
        <div className="container grid gap-12 py-16 md:grid-cols-2 md:py-24 md:items-center">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-xs font-semibold text-secondary-foreground">
              <MapPin className="h-3.5 w-3.5 text-brand-green" /> Granada y alrededores
            </span>
            <h1 className="mt-6 text-4xl font-semibold leading-[1.05] text-brand-navy md:text-6xl">
              Enfermero a domicilio en <span className="text-brand-green">Granada</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg text-muted-foreground leading-relaxed">
              Soy <strong className="text-foreground">Alejandro Romero</strong>, enfermero colegiado (nº {COLEGIADO}) con más de 10 años de experiencia en atención hospitalaria y a domicilio. Curas, sondajes, inyectables y cuidados profesionales en la comodidad de tu casa.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={`tel:+34${PHONE}`}>
                <Button size="lg" className="rounded-full bg-brand-navy hover:bg-brand-navy/90 shadow-soft">
                  <Phone className="h-4 w-4" /> Llamar al {PHONE_DISPLAY}
                </Button>
              </a>
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="rounded-full border-brand-green/40 text-brand-green hover:bg-secondary">
                  <MessageCircle className="h-4 w-4" /> WhatsApp
                </Button>
              </a>
            </div>
            <div className="mt-10 flex flex-wrap gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2"><Award className="h-4 w-4 text-brand-green" /> Colegiado nº {COLEGIADO}</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-brand-green" /> +10 años de experiencia</div>
              <div className="flex items-center gap-2"><Clock className="h-4 w-4 text-brand-green" /> Atención rápida</div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-hero opacity-20 blur-2xl" />
            <img
              src={heroNurse}
              alt="Alejandro Romero, enfermero a domicilio en Granada, atendiendo a paciente"
              width={1600}
              height={1056}
              className="relative rounded-[2rem] shadow-soft object-cover w-full h-full max-h-[560px]"
            />
          </div>
        </div>
      </section>

      {/* SOBRE MÍ */}
      <section id="sobre-mi" className="py-20 md:py-28">
        <div className="container grid gap-12 md:grid-cols-2 md:items-center">
          <div className="relative order-2 md:order-1">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-hero opacity-15 blur-2xl" />
            <img
              src={aboutNurse}
              alt="Alejandro Romero, enfermero colegiado nº 47384 en Granada"
              width={1024}
              height={1280}
              loading="lazy"
              className="relative rounded-[2rem] shadow-soft object-cover w-full max-h-[520px]"
            />
          </div>
          <div className="order-1 md:order-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-green">Sobre mí</span>
            <h2 className="mt-3 text-3xl font-semibold text-brand-navy md:text-5xl">Alejandro Romero, enfermero colegiado en Granada</h2>
            <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-sm font-semibold text-brand-navy">
              <Award className="h-4 w-4 text-brand-green" /> Nº Colegiado {COLEGIADO}
            </div>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Llevo <strong className="text-foreground">más de 10 años dedicándome a la enfermería</strong>, combinando la experiencia en el ámbito hospitalario con la atención a domicilio en Granada y los pueblos de alrededor. Esa doble trayectoria me ha permitido desarrollar una visión integral del cuidado: rigor clínico, técnica depurada y una mirada cercana a lo que el paciente vive en su día a día.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Creo firmemente que todas las personas merecen recibir cuidados de calidad sin tener que salir de casa, especialmente cuando la salud o la movilidad lo dificultan. Por eso trabajo desde la cercanía, la profesionalidad y el respeto, escuchando lo que necesitas, explicando cada paso y tratando a cada paciente como me gustaría que tratasen a mi familia.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-6">
              <div>
                <div className="text-3xl font-semibold text-brand-navy">+10</div>
                <div className="text-xs text-muted-foreground">Años de experiencia</div>
              </div>
              <div>
                <div className="text-3xl font-semibold text-brand-navy">2</div>
                <div className="text-xs text-muted-foreground">Hospital + domicilio</div>
              </div>
              <div>
                <div className="text-3xl font-semibold text-brand-navy">100%</div>
                <div className="text-xs text-muted-foreground">Trato cercano</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="bg-gradient-soft py-20 md:py-28">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-green">Servicios</span>
            <h2 className="mt-3 text-3xl font-semibold text-brand-navy md:text-5xl">Cuidados de enfermería en casa</h2>
            <p className="mt-4 text-muted-foreground">
              Atención sanitaria completa para que no tengas que desplazarte. Si no encuentras tu necesidad, llámame y lo valoramos.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(({ icon: Icon, title, desc, price, unit }) => (
              <Card key={title} className="group flex flex-col border-border/60 shadow-card transition-all hover:-translate-y-1 hover:shadow-soft">
                <CardContent className="flex flex-1 flex-col p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-secondary text-brand-navy transition-colors group-hover:bg-brand-navy group-hover:text-primary-foreground">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-semibold text-brand-green">{price}</div>
                      <div className="text-xs text-muted-foreground">{unit}</div>
                    </div>
                  </div>
                  <h3 className="mt-5 text-lg font-semibold leading-snug text-brand-navy">{title}</h3>
                  <p className="mt-2 flex-1 text-sm text-muted-foreground leading-relaxed">{desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <p className="mt-10 text-center text-sm text-muted-foreground">
            Disponibles <span className="font-semibold text-foreground">packs de varias sesiones</span> con condiciones especiales.{" "}
            <a href={`tel:+34${PHONE}`} className="font-semibold text-brand-green hover:underline">Consulta sin compromiso</a>.
          </p>
        </div>
      </section>

      {/* COBERTURA */}
      <section id="cobertura" className="py-20 md:py-28">
        <div className="container grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-green">Zona de cobertura</span>
            <h2 className="mt-3 text-3xl font-semibold text-brand-navy md:text-5xl">Granada capital y área metropolitana</h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Atiendo en Granada ciudad y en los pueblos del cinturón metropolitano. Si tu localidad no aparece,
              llámame y lo confirmamos sin compromiso.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {coverage.map((c) => (
                <span key={c} className="rounded-full bg-secondary px-4 py-1.5 text-sm font-medium text-secondary-foreground">
                  {c}
                </span>
              ))}
            </div>
          </div>
          <div className="relative">
            <img
              src={serviceCare}
              alt="Enfermero tomando la tensión a paciente a domicilio en Granada"
              width={1280}
              height={896}
              loading="lazy"
              className="rounded-[2rem] shadow-card object-cover w-full max-h-[480px]"
            />
          </div>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section className="bg-secondary/40 py-20 md:py-28">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-green">Testimonios</span>
            <h2 className="mt-3 text-3xl font-semibold text-brand-navy md:text-5xl">Lo que dicen los pacientes</h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <Card key={t.name} className="border-border/60 shadow-card">
                <CardContent className="p-7">
                  <div className="text-4xl leading-none text-brand-green">“</div>
                  <p className="mt-2 text-foreground/90 leading-relaxed">{t.text}</p>
                  <div className="mt-6 text-sm font-semibold text-brand-navy">{t.name}</div>
                  <div className="text-xs text-muted-foreground">Paciente · Granada</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 md:py-28">
        <div className="container max-w-3xl">
          <div className="text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-green">Preguntas frecuentes</span>
            <h2 className="mt-3 text-3xl font-semibold text-brand-navy md:text-5xl">Resolvemos tus dudas</h2>
          </div>
          <Accordion type="single" collapsible className="mt-10">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-border/60">
                <AccordionTrigger className="text-left text-base font-semibold text-brand-navy hover:no-underline">{f.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="py-20 md:py-28">
        <div className="container">
          <div className="overflow-hidden rounded-[2rem] bg-gradient-hero p-10 md:p-16 text-primary-foreground shadow-soft">
            <div className="grid gap-10 md:grid-cols-2 md:items-center">
              <div>
                <h2 className="text-3xl font-semibold md:text-5xl">¿Necesitas un enfermero hoy?</h2>
                <p className="mt-4 text-primary-foreground/85 leading-relaxed">
                  Llámame, escríbeme por WhatsApp o envíame un email. Te atiendo personalmente y valoramos tu caso sin compromiso.
                </p>
                <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-background/15 px-4 py-1.5 text-sm font-semibold backdrop-blur-sm">
                  <Award className="h-4 w-4" /> Alejandro Romero · Col. {COLEGIADO}
                </div>
              </div>
              <div className="space-y-4">
                <a href={`tel:+34${PHONE}`} className="flex items-center gap-4 rounded-2xl bg-background/10 p-5 backdrop-blur-sm transition hover:bg-background/20">
                  <div className="grid h-12 w-12 place-items-center rounded-full bg-background/20"><Phone className="h-5 w-5" /></div>
                  <div>
                    <div className="text-sm opacity-80">Teléfono</div>
                    <div className="text-xl font-semibold">{PHONE_DISPLAY}</div>
                  </div>
                </a>
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 rounded-2xl bg-background/10 p-5 backdrop-blur-sm transition hover:bg-background/20">
                  <div className="grid h-12 w-12 place-items-center rounded-full bg-background/20"><MessageCircle className="h-5 w-5" /></div>
                  <div>
                    <div className="text-sm opacity-80">WhatsApp</div>
                    <div className="text-xl font-semibold">Escríbeme ahora</div>
                  </div>
                </a>
                <a href={`mailto:${EMAIL}`} className="flex items-center gap-4 rounded-2xl bg-background/10 p-5 backdrop-blur-sm transition hover:bg-background/20">
                  <div className="grid h-12 w-12 place-items-center rounded-full bg-background/20"><Mail className="h-5 w-5" /></div>
                  <div>
                    <div className="text-sm opacity-80">Email</div>
                    <div className="text-lg font-semibold break-all">{EMAIL}</div>
                  </div>
                </a>
                <div className="flex items-center gap-4 rounded-2xl bg-background/10 p-5 backdrop-blur-sm">
                  <div className="grid h-12 w-12 place-items-center rounded-full bg-background/20"><MapPin className="h-5 w-5" /></div>
                  <div>
                    <div className="text-sm opacity-80">Zona</div>
                    <div className="text-xl font-semibold">Granada y alrededores</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border/60 py-10">
        <div className="container flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground md:flex-row">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Logo" className="h-8 w-8 object-contain" />
            <span>© {new Date().getFullYear()} Enfermero en Casa · Alejandro Romero · Col. {COLEGIADO}</span>
          </div>
          <div className="flex items-center gap-6">
            <a href={`tel:+34${PHONE}`} className="hover:text-brand-navy transition-colors">{PHONE_DISPLAY}</a>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="hover:text-brand-navy transition-colors">WhatsApp</a>
            <a href={`mailto:${EMAIL}`} className="hover:text-brand-navy transition-colors">Email</a>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        className="fixed bottom-6 right-6 z-50 grid h-14 w-14 place-items-center rounded-full bg-brand-green text-primary-foreground shadow-soft transition hover:scale-110"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </div>
  );
};

export default Index;
