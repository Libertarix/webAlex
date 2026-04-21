import {
  Bandage, Scissors, ShieldCheck, Droplets, ClipboardList,
  Syringe, Pill, Activity, TestTube, type LucideIcon,
} from "lucide-react";
import svcCuras from "@/assets/svc-curas.jpg";
import svcPuntos from "@/assets/svc-puntos.jpg";
import svcOstomias from "@/assets/svc-ostomias.jpg";
import svcSondajes from "@/assets/svc-sondajes.jpg";
import svcValoracion from "@/assets/svc-valoracion.jpg";
import svcIntramuscular from "@/assets/svc-intramuscular.jpg";
import svcSubcutanea from "@/assets/svc-subcutanea.jpg";
import svcIntravenoso from "@/assets/svc-intravenoso.jpg";
import svcExtraccion from "@/assets/svc-extraccion.jpg";

export interface Service {
  slug: string;
  icon: LucideIcon;
  image: string;
  title: string;
  desc: string;
  price: string;
  unit: string;
  // Página de detalle
  metaTitle: string;
  metaDescription: string;
  intro: string;
  includes: string[];
  indications: string[];
  duration: string;
  faqs: { q: string; a: string }[];
}

export const services: Service[] = [
  {
    slug: "curas-heridas-domicilio-granada",
    icon: Bandage,
    image: svcCuras,
    title: "Curas de heridas, lesiones y escaras",
    desc: "Valoración inicial, cura con material estéril, seguimiento de heridas quirúrgicas, lesiones y úlceras, con recomendaciones individualizadas para el autocuidado.",
    price: "49 €",
    unit: "/sesión",
    metaTitle: "Curas de heridas a domicilio en Granada | Enfermero en Casa",
    metaDescription: "Cura de heridas quirúrgicas, úlceras y escaras en tu domicilio en Granada. Material estéril, seguimiento profesional y trato cercano. Enfermero colegiado.",
    intro: "Realizo curas a domicilio en Granada con material estéril y un enfoque centrado en la cicatrización óptima de cada herida. Valoro la lesión, planifico el plan de curas y reviso la evolución en cada visita.",
    includes: [
      "Valoración inicial de la herida y de la piel perilesional",
      "Limpieza y cura con material estéril de un solo uso",
      "Selección del apósito más adecuado según el tipo de lesión",
      "Educación al paciente y a la familia sobre cuidados entre visitas",
      "Seguimiento de la evolución y ajuste del plan de curas",
    ],
    indications: [
      "Heridas quirúrgicas posoperatorias",
      "Úlceras por presión (escaras) en pacientes encamados",
      "Úlceras vasculares y pie diabético",
      "Quemaduras leves y heridas traumáticas",
    ],
    duration: "Entre 30 y 45 minutos por sesión, según la complejidad.",
    faqs: [
      { q: "¿Lleváis vosotros el material o lo pongo yo?", a: "Yo llevo todo el material estéril necesario para la cura. Si tienes apósitos específicos prescritos por tu médico, los podemos utilizar." },
      { q: "¿Cada cuánto hay que repetir la cura?", a: "Depende del tipo de herida. En la valoración inicial te indico la frecuencia recomendada (cada 24h, 48h, 72h…) y planificamos las visitas." },
    ],
  },
  {
    slug: "retirada-puntos-grapas-granada",
    icon: Scissors,
    image: svcPuntos,
    title: "Retirada de puntos y grapas",
    desc: "Evaluación, cura, seguimiento y retirada de grapas o puntos de sutura en tu domicilio, con recomendaciones personalizadas.",
    price: "49 €",
    unit: "/sesión",
    metaTitle: "Retirada de puntos y grapas a domicilio en Granada",
    metaDescription: "Retirada de puntos de sutura y grapas quirúrgicas en casa. Sin desplazamientos, con cura posterior y consejos para cuidar la cicatriz. Granada y alrededores.",
    intro: "Si tienes una intervención reciente y prefieres no desplazarte, voy a tu domicilio en Granada para retirar los puntos o grapas, valorar la herida y curarla si lo requiere.",
    includes: [
      "Valoración de la cicatriz antes de la retirada",
      "Retirada de puntos de sutura o grapas con material adecuado",
      "Cura posterior y aplicación de tiras de aproximación si fuera preciso",
      "Recomendaciones para el cuidado de la cicatriz",
    ],
    indications: [
      "Suturas tras intervención quirúrgica",
      "Grapas tras cirugía mayor",
      "Heridas suturadas en urgencias",
    ],
    duration: "Aproximadamente 30 minutos.",
    faqs: [
      { q: "¿Cuándo se quitan los puntos?", a: "Lo habitual es entre los 7 y 14 días, según la zona y lo que indique tu cirujano. Si tienes dudas, llámame y lo valoramos." },
    ],
  },
  {
    slug: "cuidados-ostomias-domicilio-granada",
    icon: ShieldCheck,
    image: svcOstomias,
    title: "Cuidados de ostomías",
    desc: "Valoración del estoma, cura, cambio de dispositivos (disco y bolsa), seguimiento y educación sanitaria para colostomías, ileostomías o gastrostomías.",
    price: "49 €",
    unit: "/sesión",
    metaTitle: "Cuidados de ostomías a domicilio en Granada",
    metaDescription: "Cambio de bolsa, cura del estoma y educación a la familia para colostomías, ileostomías y gastrostomías en tu domicilio en Granada.",
    intro: "Acompaño a personas ostomizadas y a sus familias en el cuidado del estoma, con un enfoque práctico y respetuoso para que ganéis autonomía progresivamente.",
    includes: [
      "Valoración del estoma y la piel periestomal",
      "Cambio de disco y bolsa adecuados a tu tipo de ostomía",
      "Educación sanitaria al paciente y a la familia",
      "Detección precoz de complicaciones",
    ],
    indications: [
      "Colostomías e ileostomías",
      "Gastrostomías de alimentación (PEG)",
      "Urostomías",
    ],
    duration: "Entre 30 y 45 minutos.",
    faqs: [
      { q: "¿Podéis enseñarnos a hacerlo nosotros?", a: "Sí. Una parte fundamental de mi trabajo es enseñarte a ti o a la persona cuidadora a manejar el estoma con seguridad." },
    ],
  },
  {
    slug: "sondajes-dispositivos-medicos-granada",
    icon: Droplets,
    image: svcSondajes,
    title: "Sondajes y dispositivos médicos",
    desc: "Cuidados y seguimiento de sondas vesicales, nasogástricas, drenajes y otros dispositivos, con educación al paciente y la familia.",
    price: "49 €",
    unit: "/sesión",
    metaTitle: "Sondaje vesical y nasogástrico a domicilio en Granada",
    metaDescription: "Colocación, cambio y cuidados de sondas vesicales, nasogástricas y drenajes en casa. Enfermero colegiado en Granada con experiencia hospitalaria.",
    intro: "Realizo el manejo de sondas y dispositivos médicos con técnica aséptica en tu domicilio, evitando desplazamientos al hospital y cuidando la comodidad del paciente.",
    includes: [
      "Colocación o cambio de sonda vesical (hombre y mujer)",
      "Colocación o cambio de sonda nasogástrica",
      "Cuidados de drenajes y catéteres",
      "Educación a familia y cuidadores",
    ],
    indications: [
      "Retención urinaria",
      "Alimentación enteral por sonda",
      "Pacientes encamados o con movilidad reducida",
    ],
    duration: "Entre 30 y 45 minutos.",
    faqs: [
      { q: "¿Es urgente? ¿Podéis venir hoy?", a: "Si es una situación urgente como una retención, llámame al teléfono directamente y priorizo la visita." },
    ],
  },
  {
    slug: "valoracion-salud-domicilio-granada",
    icon: ClipboardList,
    image: svcValoracion,
    title: "Valoración del estado de salud",
    desc: "Examen físico, toma de constantes y valoración integral mediante escalas validadas (nutrición, dependencia, riesgo de caídas) al paciente y familiar.",
    price: "39 €",
    unit: "/sesión",
    metaTitle: "Valoración de enfermería a domicilio en Granada",
    metaDescription: "Valoración integral del estado de salud en tu domicilio: constantes, escalas validadas y plan de cuidados personalizado. Granada y área metropolitana.",
    intro: "Una valoración integral de enfermería ayuda a detectar precozmente problemas y a planificar los cuidados que necesita una persona mayor o con patología crónica.",
    includes: [
      "Toma de constantes (TA, FC, SatO2, glucemia, temperatura)",
      "Escalas validadas: Barthel, Norton, MNA, Downton",
      "Valoración del entorno y la red de apoyo",
      "Informe escrito con recomendaciones",
    ],
    indications: [
      "Personas mayores que viven solas",
      "Pacientes tras alta hospitalaria",
      "Familias que buscan una segunda opinión profesional",
    ],
    duration: "Entre 45 y 60 minutos.",
    faqs: [
      { q: "¿Me dais un informe escrito?", a: "Sí, te entrego un informe con las constantes, las escalas aplicadas y las recomendaciones de cuidados." },
    ],
  },
  {
    slug: "inyeccion-intramuscular-domicilio-granada",
    icon: Syringe,
    image: svcIntramuscular,
    title: "Medicación intramuscular",
    desc: "Preparación y administración con material adecuado de medicación intramuscular: vacunas, B12, corticoides recetados, entre otros.",
    price: "39 €",
    unit: "/sesión",
    metaTitle: "Inyección intramuscular a domicilio en Granada",
    metaDescription: "Administración de inyecciones intramusculares en casa: vitamina B12, corticoides, vacunas y pautas prescritas. Enfermero colegiado en Granada.",
    intro: "Administro medicación intramuscular pautada por tu médico en tu domicilio, con técnica segura y material de un solo uso.",
    includes: [
      "Verificación de la prescripción médica",
      "Preparación y administración con material adecuado",
      "Observación posterior por si surge alguna reacción",
      "Registro de cada dosis administrada",
    ],
    indications: [
      "Vitamina B12, hierro, corticoides",
      "Vacunas pautadas (no incluye dispensación)",
      "Tratamientos hormonales",
    ],
    duration: "Aproximadamente 15-20 minutos.",
    faqs: [
      { q: "¿Tengo que llevar yo la medicación?", a: "Sí. La medicación debe estar prescrita por tu médico y la consigues tú en la farmacia. Yo me encargo de administrarla con seguridad." },
    ],
  },
  {
    slug: "inyeccion-subcutanea-domicilio-granada",
    icon: Pill,
    image: svcSubcutanea,
    title: "Medicación subcutánea",
    desc: "Preparación y administración de medicación subcutánea: insulina, heparina, vacunas y otras pautas.",
    price: "39 €",
    unit: "/sesión",
    metaTitle: "Inyección subcutánea (heparina, insulina) a domicilio en Granada",
    metaDescription: "Administración de heparina, insulina y otras pautas subcutáneas en tu domicilio en Granada. Educación al paciente para autoadministración.",
    intro: "Administro medicación subcutánea pautada y, si lo prefieres, te enseño a hacerlo a ti o a tu familia para que ganéis autonomía.",
    includes: [
      "Administración de heparina, insulina u otra pauta prescrita",
      "Rotación correcta de zonas de punción",
      "Educación para la autoadministración si procede",
    ],
    indications: [
      "Profilaxis con heparina tras cirugía",
      "Pautas de insulina",
      "Tratamientos biológicos pautados",
    ],
    duration: "Aproximadamente 15 minutos.",
    faqs: [
      { q: "¿Podéis venir todos los días?", a: "Sí, organizamos un calendario de visitas que se ajuste a tu pauta. Para tratamientos prolongados ofrezco packs de sesiones." },
    ],
  },
  {
    slug: "tratamiento-intravenoso-domicilio-granada",
    icon: Activity,
    image: svcIntravenoso,
    title: "Tratamiento intravenoso",
    desc: "Canalización de catéter y administración aséptica de medicación intravenosa, con control del paciente durante todo el proceso.",
    price: "49 €",
    unit: "/sesión",
    metaTitle: "Tratamiento intravenoso y sueroterapia a domicilio en Granada",
    metaDescription: "Canalización de vía y administración de medicación intravenosa o sueroterapia en tu domicilio en Granada, con control durante todo el proceso.",
    intro: "Realizo tratamientos intravenosos pautados por tu médico en tu domicilio, con técnica aséptica y monitorización del paciente durante toda la administración.",
    includes: [
      "Canalización de catéter periférico",
      "Administración de medicación o sueroterapia prescrita",
      "Control de constantes durante la perfusión",
      "Retirada de la vía y cura de la zona",
    ],
    indications: [
      "Sueroterapia por deshidratación",
      "Antibioterapia intravenosa pautada",
      "Pautas de hierro intravenoso",
    ],
    duration: "Entre 45 y 90 minutos según la perfusión.",
    faqs: [
      { q: "¿Necesito prescripción médica?", a: "Sí. Cualquier tratamiento intravenoso requiere prescripción médica. Yo me encargo de la administración segura." },
    ],
  },
  {
    slug: "extraccion-muestras-domicilio-granada",
    icon: TestTube,
    image: svcExtraccion,
    title: "Extracción de muestras",
    desc: "Extracción de sangre, orina, antígeno, PCR u otras muestras en el domicilio y posterior traslado al laboratorio para su análisis.",
    price: "39 €",
    unit: "/servicio",
    metaTitle: "Extracción de sangre a domicilio en Granada",
    metaDescription: "Analíticas de sangre, orina, PCR y antígeno en tu domicilio en Granada. Colaboración con centros de extracciones y laboratorios de la zona.",
    intro: "Realizo extracciones de sangre y otras muestras en tu domicilio, con la comodidad de no tener que desplazarte al centro de salud o al laboratorio.",
    includes: [
      "Extracción de sangre venosa",
      "Recogida de muestras de orina",
      "Toma de muestra para PCR o antígeno",
      "Traslado al laboratorio con el que colabores",
    ],
    indications: [
      "Pacientes con movilidad reducida",
      "Personas mayores",
      "Analíticas privadas o de seguimiento",
    ],
    duration: "Aproximadamente 20 minutos.",
    faqs: [
      { q: "¿Trabajáis con algún laboratorio en concreto?", a: "Colaboro con varios centros de extracciones y laboratorios de Granada. Si ya trabajas con uno, lo coordinamos sin problema." },
    ],
  },
];

export const getServiceBySlug = (slug: string) =>
  services.find((s) => s.slug === slug);
