import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Phone,
  MessageCircle,
  Syringe,
  HeartPulse,
  Bandage,
  Stethoscope,
  Pill,
  Activity,
  Droplets,
  ShieldCheck,
  MapPin,
  Clock,
  CheckCircle2,
  Mail,
} from "lucide-react";
import heroNurse from "@/assets/hero-nurse.jpg";
import aboutNurse from "@/assets/about-nurse.jpg";
import serviceCare from "@/assets/service-care.jpg";

const PHONE = "626784327";
const PHONE_DISPLAY = "626 78 43 27";
const WHATSAPP = `https://wa.me/34${PHONE}?text=${encodeURIComponent(
  "Hola, me gustaría información sobre los servicios de enfermería a domicilio."
)}`;

const services = [
  { icon: Bandage, title: "Curas a domicilio", desc: "Curas de heridas crónicas, postoperatorias, úlceras por presión y quemaduras." },
  { icon: Syringe, title: "Inyectables", desc: "Administración de inyectables intramusculares, subcutáneos y vacunas." },
  { icon: Droplets, title: "Sondajes", desc: "Sondaje vesical, recambio y cuidados de sonda en pacientes encamados." },
  { icon: HeartPulse, title: "Control de constantes", desc: "Tensión arterial, glucemia, saturación y seguimiento de pacientes crónicos." },
  { icon: Pill, title: "Administración de medicación", desc: "Preparación, control y administración pautada de tratamientos." },
  { icon: Activity, title: "Extracciones y analíticas", desc: "Extracciones de sangre a domicilio con entrega en laboratorio." },
  { icon: Stethoscope, title: "Cuidados al paciente encamado", desc: "Higiene, cambios posturales, prevención de úlceras y movilizaciones." },
  { icon: ShieldCheck, title: "Seguimiento postoperatorio", desc: "Retirada de puntos, grapas y control tras intervenciones quirúrgicas." },
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

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
        <nav className="container flex h-16 items-center justify-between">
          <a href="#inicio" className="flex items-center gap-2 font-semibold">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-hero text-primary-foreground">
              <HeartPulse className="h-5 w-5" />
            </span>
            <span className="text-lg">Enfermero<span className="text-primary">enCasa</span></span>
          </a>
          <div className="hidden items-center gap-8 md:flex text-sm font-medium text-muted-foreground">
            <a href="#servicios" className="hover:text-foreground transition-colors">Servicios</a>
            <a href="#sobre-mi" className="hover:text-foreground transition-colors">Sobre mí</a>
            <a href="#cobertura" className="hover:text-foreground transition-colors">Cobertura</a>
            <a href="#contacto" className="hover:text-foreground transition-colors">Contacto</a>
          </div>
          <a href={`tel:+34${PHONE}`}>
            <Button size="sm" className="rounded-full">
              <Phone className="h-4 w-4" /> {PHONE_DISPLAY}
            </Button>
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section id="inicio" className="relative overflow-hidden bg-gradient-soft">
        <div className="container grid gap-12 py-16 md:grid-cols-2 md:py-24 md:items-center">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-xs font-semibold text-secondary-foreground">
              <MapPin className="h-3.5 w-3.5 text-primary" /> Granada y alrededores
            </span>
            <h1 className="mt-6 text-4xl font-semibold leading-[1.05] md:text-6xl">
              Enfermero a domicilio en <span className="text-primary">Granada</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg text-muted-foreground leading-relaxed">
              Cuidados de enfermería profesionales en la comodidad de tu casa.
              Curas, sondajes, inyectables y atención personalizada para ti o tus seres queridos.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={`tel:+34${PHONE}`}>
                <Button size="lg" className="rounded-full shadow-soft">
                  <Phone className="h-4 w-4" /> Llamar al {PHONE_DISPLAY}
                </Button>
              </a>
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="rounded-full border-primary/30 text-primary hover:bg-secondary">
                  <MessageCircle className="h-4 w-4" /> WhatsApp
                </Button>
              </a>
            </div>
            <div className="mt-10 flex flex-wrap gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Colegiado</div>
              <div className="flex items-center gap-2"><Clock className="h-4 w-4 text-primary" /> Atención rápida</div>
              <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-primary" /> Trato cercano</div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-hero opacity-20 blur-2xl" />
            <img
              src={heroNurse}
              alt="Enfermero a domicilio atendiendo a paciente mayor en Granada"
              width={1600}
              height={1056}
              className="relative rounded-[2rem] shadow-soft object-cover w-full h-full max-h-[560px]"
            />
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="py-20 md:py-28">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">Servicios</span>
            <h2 className="mt-3 text-3xl font-semibold md:text-5xl">Cuidados de enfermería en casa</h2>
            <p className="mt-4 text-muted-foreground">
              Atención sanitaria completa para que no tengas que desplazarte. Si no encuentras tu necesidad, llámame y lo valoramos.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map(({ icon: Icon, title, desc }) => (
              <Card key={title} className="group border-border/60 shadow-card transition-all hover:-translate-y-1 hover:shadow-soft">
                <CardContent className="p-6">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold">{title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <p className="mt-10 text-center text-sm text-muted-foreground">
            Las tarifas se adaptan al tipo y frecuencia del servicio.{" "}
            <a href={`tel:+34${PHONE}`} className="font-semibold text-primary hover:underline">Consulta sin compromiso</a>.
          </p>
        </div>
      </section>

      {/* SOBRE MÍ */}
      <section id="sobre-mi" className="bg-gradient-soft py-20 md:py-28">
        <div className="container grid gap-12 md:grid-cols-2 md:items-center">
          <div className="relative order-2 md:order-1">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-hero opacity-15 blur-2xl" />
            <img
              src={aboutNurse}
              alt="Enfermero colegiado en Granada"
              width={1024}
              height={1280}
              loading="lazy"
              className="relative rounded-[2rem] shadow-soft object-cover w-full max-h-[520px]"
            />
          </div>
          <div className="order-1 md:order-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">Sobre mí</span>
            <h2 className="mt-3 text-3xl font-semibold md:text-5xl">Cuidados con vocación, cerca de ti</h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Soy enfermero colegiado y llevo años dedicándome a la atención sanitaria a domicilio en Granada y los pueblos
              de alrededor. Empecé en este camino por algo muy sencillo: creer que todas las personas merecen recibir cuidados
              de calidad sin tener que salir de casa, especialmente cuando la salud o la movilidad lo dificultan.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Mi forma de trabajar se basa en la cercanía, la profesionalidad y el respeto. Antes de cada visita escucho lo que
              necesitas, explico cada paso del cuidado y trato a cada paciente como me gustaría que tratasen a mi familia.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-6">
              <div>
                <div className="text-3xl font-semibold text-primary">+5</div>
                <div className="text-xs text-muted-foreground">Años de experiencia</div>
              </div>
              <div>
                <div className="text-3xl font-semibold text-primary">24/7</div>
                <div className="text-xs text-muted-foreground">Disponibilidad</div>
              </div>
              <div>
                <div className="text-3xl font-semibold text-primary">100%</div>
                <div className="text-xs text-muted-foreground">Trato cercano</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COBERTURA */}
      <section id="cobertura" className="py-20 md:py-28">
        <div className="container grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">Zona de cobertura</span>
            <h2 className="mt-3 text-3xl font-semibold md:text-5xl">Granada capital y área metropolitana</h2>
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
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">Testimonios</span>
            <h2 className="mt-3 text-3xl font-semibold md:text-5xl">Lo que dicen los pacientes</h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <Card key={t.name} className="border-border/60 shadow-card">
                <CardContent className="p-7">
                  <div className="text-4xl leading-none text-primary">“</div>
                  <p className="mt-2 text-foreground/90 leading-relaxed">{t.text}</p>
                  <div className="mt-6 text-sm font-semibold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">Paciente · Granada</div>
                </CardContent>
              </Card>
            ))}
          </div>
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
                  Llámame o escríbeme por WhatsApp. Te atiendo personalmente y valoramos tu caso sin compromiso.
                </p>
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
          <div className="flex items-center gap-2">
            <span className="grid h-7 w-7 place-items-center rounded-full bg-gradient-hero text-primary-foreground">
              <HeartPulse className="h-4 w-4" />
            </span>
            <span>© {new Date().getFullYear()} Enfermero en Casa Granada</span>
          </div>
          <div className="flex items-center gap-6">
            <a href={`tel:+34${PHONE}`} className="hover:text-foreground transition-colors">{PHONE_DISPLAY}</a>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">WhatsApp</a>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        className="fixed bottom-6 right-6 z-50 grid h-14 w-14 place-items-center rounded-full bg-primary text-primary-foreground shadow-soft transition hover:scale-110"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </div>
  );
};

export default Index;
