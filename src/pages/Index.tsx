import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import ContactForm from "@/components/ContactForm";
import WhatsAppFab from "@/components/WhatsAppFab";
import { services } from "@/data/services";
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
  Activity,
  ShieldCheck,
  MapPin,
  Clock,
  CheckCircle2,
  ClipboardList,
  Mail,
  Award,
  Star,
  ExternalLink,
  Lock,
  Home,
  Linkedin,
} from "lucide-react";
import heroNurse from "@/assets/hero-nurse.jpg";
import aboutNurse from "@/assets/about-nurse.jpg";
import logo from "@/assets/logo-icon.png";
import CoverageMap from "@/components/CoverageMap";

const PHONE = "636144057";
const PHONE_DISPLAY = "636 14 40 57";
const EMAIL = "cuidate@enfermeroencasa.com";
const COLEGIADO = "76240";
const WHATSAPP = `https://wa.me/34${PHONE}?text=${encodeURIComponent(
  "Hola Alejandro, me gustaría información sobre los servicios de enfermería a domicilio."
)}`;
const GOOGLE_REVIEWS_URL = "https://share.google/hw7EizH02BwXKApfC";
const LINKEDIN_URL = "https://www.linkedin.com/in/alejandro-romero-mu%C3%B1oz-4a7984223";

const coverage = [
  "Granada capital", "Armilla", "Maracena", "Albolote", "Atarfe", "Peligros",
  "Pulianas", "Cájar", "La Zubia", "Cenes de la Vega", "Huétor Vega", "Ogíjares",
  "Las Gabias", "Churriana de la Vega", "Santa Fe", "Pinos Puente",
];

const faqs = [
  {
    q: "¿En qué zonas de Granada atiendes?",
    a: "Atiendo en Granada capital y en todo el área metropolitana: Armilla, Maracena, Albolote, Atarfe, La Zubia, Cájar, Huétor Vega, Ogíjares, Las Gabias, Churriana de la Vega, Cenes de la Vega, Peligros, Pulianas, Santa Fe y Pinos Puente. Si tu localidad no aparece en el listado, llámame y lo confirmamos sin compromiso; muchas veces puedo desplazarme a poblaciones cercanas valorando previamente la zona y el horario.",
  },
  {
    q: "¿Cuánto tardas en venir a casa?",
    a: "En la mayoría de los casos puedo atender el mismo día o al día siguiente, según la franja horaria que necesites. Para curas con seguimiento, sondajes o pautas de medicación, planificamos las visitas para que coincidan con tu rutina. Si se trata de una situación urgente (sondajes, retención, sueroterapia, dolor mal controlado, etc.), lo más rápido es llamarme directamente al teléfono.",
  },
  {
    q: "¿Qué formas de pago aceptas?",
    a: "Puedes pagar al finalizar cada sesión en efectivo, por Bizum o mediante transferencia bancaria. Para tratamientos que requieren varias visitas (curas seriadas, pautas de inyectables, seguimientos prolongados) ofrezco packs de sesiones con condiciones especiales. Siempre entrego justificante del servicio realizado para que puedas presentarlo en tu seguro privado o donde lo necesites.",
  },
  {
    q: "¿Atiendes fines de semana y festivos?",
    a: "Sí, trabajo todos los días del año coordinando previamente la visita. Sábados, domingos y festivos están disponibles igual que cualquier día laborable, especialmente para curas que no pueden interrumpirse, administración de medicación pautada o cuidados de sondas y ostomías que requieren continuidad.",
  },
  {
    q: "¿Resuelves dudas antes de contratar el servicio?",
    a: "Por supuesto. Puedes llamarme o escribirme por WhatsApp y te explico sin compromiso qué tipo de cuidado necesitas, cuánto duraría la visita, qué material hace falta y cuál sería el coste exacto. Atiendo personalmente todas las consultas, así que hablarás siempre directamente conmigo y no con un intermediario.",
  },
  {
    q: "¿Trabajas solo o tienes un equipo?",
    a: "Trabajo solo, así que la persona que valora tu caso por teléfono es la misma que acude a tu domicilio y la que hace el seguimiento. Además, colaboro habitualmente con clínicas privadas y centros de extracciones de Granada, y me coordino con tu equipo de Atención Primaria siempre que sea necesario para garantizar continuidad asistencial. Conoces a tu enfermero, no tienes que repetir tu historia y puedes contactar conmigo directamente entre visitas.",
  },
  {
    q: "¿Puedo contratarte para cuidar de un familiar mayor o dependiente?",
    a: "Sí, es uno de los perfiles que más atiendo. Realizo valoración integral mediante escalas validadas (nutrición, dependencia, riesgo de caídas, estado cognitivo), aplico los cuidados necesarios y formo a la familia o cuidadores principales para que puedan continuar el cuidado con seguridad entre visita y visita.",
  },
  {
    q: "¿Es legal contratar a un enfermero a domicilio de forma privada?",
    a: "Sí, totalmente. Soy enfermero colegiado en activo y la atención sanitaria privada en domicilio es una práctica regulada y habitual en España. Tras cada visita te entrego un justificante con la técnica realizada que puedes presentar a tu seguro privado, mutua o donde lo necesites.",
  },
  {
    q: "Mis datos médicos, ¿son confidenciales?",
    a: "Absolutamente. Como enfermero colegiado estoy sujeto al secreto profesional sanitario y al cumplimiento del RGPD. Tu información clínica solo la uso para atenderte, no se comparte con terceros y no se cede para fines comerciales.",
  },
  {
    q: "¿Puedo cancelar o cambiar la cita si me surge algo?",
    a: "Sí. Solo te pido que me avises con la mayor antelación posible (idealmente unas horas antes) para poder reorganizar la agenda y, si lo necesitas, ofrecerte otro hueco ese mismo día o al siguiente. No cobro penalización por cancelaciones razonables.",
  },
  {
    q: "¿Puedes coordinarte con mi médico de cabecera o con mi cirujano?",
    a: "Sí. Si me facilitas el informe del alta o el plan de curas pautado por tu médico, lo sigo al pie de la letra y, si surge alguna incidencia (signos de infección, mala evolución, dudas con la pauta), me coordino con tu Atención Primaria o con el especialista que corresponda.",
  },
  {
    q: "¿Atiendes a niños o solo a adultos?",
    a: "Atiendo a personas de cualquier edad, siempre con autorización de los padres o tutores en el caso de menores. Trabajo habitualmente con extracciones de sangre, curas y administración de medicación pediátrica pautada.",
  },
];

const navLinks = [
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#servicios", label: "Servicios" },
  { href: "#como-trabajo", label: "Cómo trabajo" },
  { href: "#cobertura", label: "Cobertura" },
  { href: "#faq", label: "Preguntas" },
  { href: "#contacto", label: "Contacto" },
];

const Index = () => {
  useEffect(() => {
    const SRC = "https://elfsightcdn.com/platform.js";
    if (document.querySelector(`script[src="${SRC}"]`)) return;
    const s = document.createElement("script");
    s.src = SRC;
    s.async = true;
    document.body.appendChild(s);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
        <nav className="container flex flex-wrap items-center justify-between gap-x-6 gap-y-2 py-3 md:py-4">
          <a href="#inicio" className="flex items-center gap-3 shrink-0" aria-label="Enfermero en Casa - Inicio">
            <img src={logo} alt="Logo Enfermero en Casa" className="h-11 w-11 object-contain md:h-12 md:w-12" />
            <div className="leading-tight">
              <div className="font-display text-sm font-semibold text-brand-navy md:text-base">Enfermero <span className="text-brand-green">en Casa</span></div>
              <div className="text-[10px] text-muted-foreground md:text-[11px]">Alejandro Romero · Col. {COLEGIADO}</div>
            </div>
          </a>

          <div className="order-3 flex w-full flex-wrap items-center justify-center gap-x-4 gap-y-1 text-[13px] font-medium text-muted-foreground md:order-2 md:w-auto md:gap-x-6 md:text-sm">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="whitespace-nowrap hover:text-brand-navy transition-colors">{l.label}</a>
            ))}
            
          </div>

        </nav>
      </header>

      <main>
      {/* BANNER CAPTADOR */}
      <section id="inicio" className="relative overflow-hidden bg-gradient-hero py-20 md:py-32">
        <img
          src={logo}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -bottom-24 w-[520px] opacity-10 blur-2xl select-none"
        />
        <div className="container relative text-center text-primary-foreground">
          <p className="mx-auto max-w-4xl text-4xl font-semibold leading-[1.05] md:text-7xl">
            Cuidar la salud no debería obligarte a salir de casa.
          </p>
          <p className="mx-auto mt-7 max-w-2xl text-lg text-primary-foreground/90 md:text-2xl leading-relaxed">
            Atención de enfermería profesional, cercana y a tu ritmo. Yo me desplazo, tú descansas.
          </p>
        </div>
      </section>

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-soft">
        {/* Imagen difuminada de fondo (logo) */}
        <img
          src={logo}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -bottom-20 w-[520px] opacity-[0.06] blur-2xl select-none"
        />
        <div className="container relative grid gap-12 py-16 md:grid-cols-2 md:py-24 md:items-center">
          <div className="animate-fade-up">
            <h1 className="text-4xl font-semibold leading-[1.05] text-brand-navy md:text-6xl">
              Enfermero a domicilio en <span className="text-brand-green">Granada</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg text-muted-foreground leading-relaxed">
              Soy <strong className="text-foreground">Alejandro Romero</strong>, enfermero colegiado (nº {COLEGIADO}) con más de 10 años de experiencia en hospitales de referencia y atención a domicilio. Curas, sondajes, inyectables y cuidados profesionales en la comodidad de tu casa.
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
              <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-brand-green" /> +10 años de experiencia</div>
              <div className="flex items-center gap-2"><Clock className="h-4 w-4 text-brand-green" /> Atención rápida</div>
              <div className="flex items-center gap-2"><Lock className="h-4 w-4 text-brand-green" /> Confidencialidad total</div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-hero opacity-20 blur-2xl" />
            <img
              src={heroNurse}
              alt="Alejandro Romero, enfermero a domicilio en Granada, atendiendo a un paciente en su casa"
              width={1600}
              height={1056}
              loading="eager"
              fetchPriority="high"
              decoding="async"
              className="relative rounded-[2rem] shadow-soft object-cover w-full h-full max-h-[560px]"
            />
          </div>
        </div>
      </section>

      {/* SOBRE MÍ */}
      <section id="sobre-mi" className="relative py-20 md:py-28 overflow-hidden">
        <img
          src={logo}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 bottom-8 -translate-x-1/2 w-[500px] md:w-[650px] opacity-[0.09] select-none"
        />
        <div className="container relative max-w-3xl">
          <div className="relative mx-auto max-w-md">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-hero opacity-15 blur-2xl" />
            <img
              src={aboutNurse}
              alt="Alejandro Romero, enfermero colegiado en Granada con uniforme sanitario"
              width={1024}
              height={1280}
              loading="lazy"
              decoding="async"
              className="relative rounded-[2rem] shadow-soft object-cover w-full max-h-[520px]"
            />
          </div>
          <div className="mt-12">

            <span className="text-xs font-semibold uppercase tracking-widest text-brand-green">Sobre mí</span>
            <h2 className="mt-3 text-3xl font-semibold text-brand-navy md:text-5xl">Mi historia</h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Llevo <strong className="text-foreground">más de diez años cuidando de personas</strong>. Empecé en el <strong className="text-foreground">Hospital Universitario La Paz de Madrid</strong>, donde trabajé en servicios como Oncología, Hematología, Reanimación, Traumatología, Cardiología, Neumología, Maxilofacial y Neurofisiología. Allí aprendí lo esencial de los cuidados de pacientes: manejar situaciones complejas con calma, adaptarme a cada persona según sus necesidades, y comunicarme con familiares que a menudo estaban preocupados o desbordados. Formación específica en urgencias y enfermedades infecciosas.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              En 2020, durante lo más duro de la pandemia, me incorporé a la <strong className="text-foreground">Unidad de Aislamiento de Alto Nivel del Hospital Carlos III</strong> para atender a pacientes COVID. Fueron meses muy exigentes, pero también los que más me marcaron: aprendí lo que significa estar al lado de alguien cuando su familia no puede estarlo. A todo eso he sumado un <strong className="text-foreground">Máster en Investigación Clínica (UCM)</strong> y formación específica en urgencias e infecciosas.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Hoy formo parte del <strong className="text-foreground">Servicio Andaluz de Salud</strong>, donde obtuve plaza, y trabajo en la <strong className="text-foreground">planta de Cirugía del Hospital Universitario San Cecilio de Granada</strong>. Compagino mi labor en el hospital con la atención a domicilio en la ciudad y los pueblos del cinturón.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Para mí, cuidar bien es mezclar rigor clínico con cercanía: explicar las cosas con calma, respetar los tiempos de cada persona y tratar a quien tengo delante como me gustaría que tratasen a los míos.
            </p>
            <div className="mt-6">
              <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="rounded-full border-brand-navy/30 text-brand-navy hover:bg-secondary">
                  <Linkedin className="h-4 w-4" /> Ver mi perfil en LinkedIn
                </Button>
              </a>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-6">
              <div>
                <div className="text-3xl font-semibold text-brand-navy">+10</div>
                <div className="text-xs text-muted-foreground">Años de experiencia</div>
              </div>
              <div>
                <div className="text-3xl font-semibold text-brand-navy">11+</div>
                <div className="text-xs text-muted-foreground">Servicios hospitalarios</div>
              </div>
              <div>
                <div className="text-3xl font-semibold text-brand-navy">100%</div>
                <div className="text-xs text-muted-foreground">Trato cercano</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RESEÑAS GOOGLE */}
      <section className="bg-secondary/40 py-20 md:py-28">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-green">Opiniones</span>
            <h2 className="mt-3 text-3xl font-semibold text-brand-navy md:text-5xl">Reseñas en Google</h2>
            <p className="mt-4 text-muted-foreground">
              Las valoraciones de mis pacientes están publicadas directamente en mi perfil de Google. Léelas, déjame la tuya o consulta la puntuación actualizada en cualquier momento.
            </p>
          </div>

          <div className="mt-12 mx-auto max-w-5xl">
            {/* Widget Elfsight - Google Reviews */}
            <div
              className="elfsight-app-96331b42-15cc-4f69-8ee6-6c6c714dfc94"
              data-elfsight-app-lazy
            />
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

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(({ slug, icon: Icon, image, title, desc, price, unit }) => (
              <Link
                key={slug}
                to={`/servicios/${slug}`}
                aria-label={`Ver detalles del servicio: ${title}`}
                className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-lg"
              >
                <Card className="flex h-full flex-col overflow-hidden border-border/60 shadow-card transition-all group-hover:-translate-y-1 group-hover:shadow-soft">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={image}
                      alt={`${title} a domicilio en Granada por enfermero colegiado`}
                      width={800}
                      height={600}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/50 via-transparent to-transparent" />
                    <div className="absolute left-4 top-4 grid h-11 w-11 place-items-center rounded-2xl bg-background/90 text-brand-navy backdrop-blur-sm">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="absolute right-4 top-4 rounded-full bg-background/90 px-3 py-1 text-right backdrop-blur-sm">
                      <span className="text-base font-semibold text-brand-green">{price}</span>
                      <span className="ml-1 text-[11px] text-muted-foreground">{unit}</span>
                    </div>
                  </div>
                  <CardContent className="flex flex-1 flex-col p-6">
                    <h3 className="text-lg font-semibold leading-snug text-brand-navy">{title}</h3>
                    <p className="mt-2 flex-1 text-sm text-muted-foreground leading-relaxed">{desc}</p>
                    <span className="mt-4 inline-flex items-center text-sm font-semibold text-brand-green group-hover:underline">
                      Ver servicio →
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <p className="mt-10 text-center text-sm text-muted-foreground">
            Disponibles <span className="font-semibold text-foreground">packs de varias sesiones</span> con condiciones especiales.{" "}
            <a href={`tel:+34${PHONE}`} className="font-semibold text-brand-green hover:underline">Consulta sin compromiso</a>.
          </p>
        </div>
      </section>

      {/* CÓMO TRABAJO */}
      <section id="como-trabajo" className="relative overflow-hidden py-20 md:py-28">
        <img
          src={logo}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 top-10 w-[520px] opacity-[0.05] blur-2xl select-none"
        />
        <div className="container relative">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-green">Cómo trabajo</span>
            <h2 className="mt-3 text-3xl font-semibold text-brand-navy md:text-5xl">Sencillo, cercano y confidencial</h2>
            <p className="mt-4 text-muted-foreground">
              Sin formularios largos ni intermediarios. Hablas conmigo desde el primer momento y tus datos se tratan con el mismo cuidado que tu salud.
            </p>
          </div>

          <ol className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              { n: "1", icon: Phone, title: "Me llamas o escribes", desc: "Por teléfono, WhatsApp o email. Te respondo personalmente: ningún intermediario, ningún call center." },
              { n: "2", icon: ClipboardList, title: "Valoramos tu caso", desc: "Te explico qué necesitas, cuánto dura la visita, qué material hace falta y el coste exacto. Sin compromiso y sin sorpresas." },
              { n: "3", icon: Award, title: "Voy a tu casa", desc: "Acudo en el horario acordado con todo el material preparado y realizo la técnica con seguridad. Después te dejo recomendaciones claras y seguimiento por si surge cualquier duda." },
            ].map(({ n, icon: Icon, title, desc }) => (
              <li key={n} className="relative rounded-[1.75rem] border border-border/60 bg-card p-7 shadow-card transition hover:-translate-y-1 hover:shadow-soft">
                <span className="absolute -top-4 left-7 rounded-full bg-brand-navy px-3 py-1 text-xs font-semibold text-primary-foreground">Paso {n}</span>
                <div className="mt-2 grid h-14 w-14 place-items-center rounded-2xl bg-secondary text-brand-green">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-brand-navy">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </li>
            ))}
          </ol>

          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {[
              { icon: Lock, title: "Confidencialidad total", desc: "Secreto profesional sanitario y cumplimiento del RGPD. Tus datos solo los uso para atenderte." },
              { icon: ShieldCheck, title: "Material adecuado", desc: "Llevo el material necesario para cada visita, de un solo uso y desechado de forma segura." },
              { icon: Home, title: "Misma persona siempre", desc: "Te atiendo yo en cada visita. Continuidad real, sin tener que repetir tu historia." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-2xl border border-border/60 bg-card p-5 shadow-card">
                <Icon className="h-6 w-6 text-brand-green" />
                <div className="mt-3 font-semibold text-brand-navy">{title}</div>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
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
            <CoverageMap />
            <p className="mt-3 text-center text-xs text-muted-foreground">
              Cada punto verde marca una localidad donde atiendo habitualmente. El círculo difuso indica el radio principal de actuación.
            </p>
          </div>
        </div>
      </section>
      {/* FAQ */}
      <section id="faq" className="relative py-20 md:py-28 overflow-hidden">
        <img
          src={logo}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-10 w-[420px] opacity-[0.05] blur-2xl select-none"
        />
        <div className="container relative max-w-3xl">
          <div className="text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-green">Preguntas frecuentes</span>
            <h2 className="mt-3 text-3xl font-semibold text-brand-navy md:text-5xl">Resuelvo tus dudas</h2>
            <p className="mt-4 text-muted-foreground">
              Las consultas más habituales antes de contratar el servicio. Si no encuentras tu respuesta, llámame o escríbeme por WhatsApp.
            </p>
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
      <section id="contacto" className="relative overflow-hidden bg-gradient-soft py-20 md:py-28">
        <img
          src={logo}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -left-32 bottom-0 w-[480px] opacity-[0.05] blur-2xl select-none"
        />
        <div className="container relative">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-green">Contacto</span>
            <h2 className="mt-3 text-3xl font-semibold text-brand-navy md:text-5xl">¿Necesitas un enfermero hoy?</h2>
            <p className="mt-4 text-muted-foreground">
              Cuéntame brevemente lo que necesitas y te respondo personalmente. Sin compromiso, sin intermediarios y con total confidencialidad.
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-5">
            {/* FORMULARIO */}
            <div className="lg:col-span-3 rounded-[2rem] border border-border/60 bg-card p-7 md:p-10 shadow-card">
              <h3 className="text-xl font-semibold text-brand-navy">Escríbeme tu consulta</h3>
              <p className="mt-1 text-sm text-muted-foreground">Te respondo lo antes posible (normalmente el mismo día).</p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>

            {/* DATOS DE CONTACTO */}
            <div className="lg:col-span-2 overflow-hidden rounded-[2rem] bg-gradient-hero p-7 md:p-10 text-primary-foreground shadow-soft">
              <div className="inline-flex items-center gap-2 rounded-full bg-background/15 px-3 py-1 text-xs font-semibold backdrop-blur-sm">
                <Award className="h-3.5 w-3.5" /> Col. {COLEGIADO}
              </div>
              <h3 className="mt-4 text-2xl font-semibold">Contacto directo</h3>
              <p className="mt-2 text-sm text-primary-foreground/85">Habla conmigo, Alejandro, sin intermediarios.</p>

              <div className="mt-6 space-y-3">
                <a href={`tel:+34${PHONE}`} className="flex items-center gap-4 rounded-2xl bg-background/10 p-4 backdrop-blur-sm transition hover:bg-background/20">
                  <div className="grid h-11 w-11 place-items-center rounded-full bg-background/20"><Phone className="h-5 w-5" /></div>
                  <div>
                    <div className="text-xs opacity-80">Teléfono</div>
                    <div className="text-lg font-semibold">{PHONE_DISPLAY}</div>
                  </div>
                </a>
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 rounded-2xl bg-background/10 p-4 backdrop-blur-sm transition hover:bg-background/20">
                  <div className="grid h-11 w-11 place-items-center rounded-full bg-background/20"><MessageCircle className="h-5 w-5" /></div>
                  <div>
                    <div className="text-xs opacity-80">WhatsApp</div>
                    <div className="text-lg font-semibold">Escríbeme ahora</div>
                  </div>
                </a>
                <a href={`mailto:${EMAIL}`} className="flex items-center gap-4 rounded-2xl bg-background/10 p-4 backdrop-blur-sm transition hover:bg-background/20">
                  <div className="grid h-11 w-11 place-items-center rounded-full bg-background/20"><Mail className="h-5 w-5" /></div>
                  <div>
                    <div className="text-xs opacity-80">Email</div>
                    <div className="text-sm font-semibold break-all">{EMAIL}</div>
                  </div>
                </a>
                <div className="flex items-center gap-4 rounded-2xl bg-background/10 p-4 backdrop-blur-sm">
                  <div className="grid h-11 w-11 place-items-center rounded-full bg-background/20"><MapPin className="h-5 w-5" /></div>
                  <div>
                    <div className="text-xs opacity-80">Zona</div>
                    <div className="text-lg font-semibold">Granada y alrededores</div>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex items-start gap-2 rounded-2xl bg-background/10 p-4 text-xs backdrop-blur-sm">
                <Lock className="mt-0.5 h-4 w-4 shrink-0" />
                <span>Tus datos están protegidos por el RGPD y el secreto profesional sanitario.</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-border/60 py-10">
        <div className="container flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground md:flex-row">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Logo de Enfermero en Casa" className="h-8 w-8 object-contain" />
            <span>© {new Date().getFullYear()} Enfermero en Casa · Alejandro Romero · Col. {COLEGIADO}</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <a href={`tel:+34${PHONE}`} className="hover:text-brand-navy transition-colors">{PHONE_DISPLAY}</a>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="hover:text-brand-navy transition-colors">WhatsApp</a>
            <a href={`mailto:${EMAIL}`} className="hover:text-brand-navy transition-colors">Email</a>
            <Link to="/aviso-legal" className="hover:text-brand-navy transition-colors">Aviso y privacidad</Link>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <WhatsAppFab href={WHATSAPP} />
    </div>
  );
};

export default Index;
