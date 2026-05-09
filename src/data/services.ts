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
  longDescription: string[]; // Párrafos extensos para SEO y contexto
  includes: string[];
  indications: string[];
  benefits: string[]; // Por qué hacerlo en casa
  process: { title: string; desc: string }[]; // Cómo es la visita paso a paso
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
    price: "39 €",
    unit: "/sesión",
    metaTitle: "Curas de heridas a domicilio en Granada | Enfermero en Casa",
    metaDescription: "Cura de heridas quirúrgicas, úlceras por presión, escaras y pie diabético en tu casa en Granada. Material estéril, seguimiento profesional y trato cercano. Enfermero colegiado.",
    intro: "Realizo curas a domicilio en Granada con material estéril y un enfoque centrado en la cicatrización óptima de cada herida. Valoro la lesión, planifico el plan de curas y reviso la evolución en cada visita.",
    longDescription: [
      "La cura de una herida no es solo cambiar un apósito. Es valorar el lecho de la lesión, el estado de la piel de alrededor, controlar el exudado, prevenir la infección y elegir en cada momento el producto que mejor favorece la cicatrización. Cuando esto se hace bien y de forma constante, los tiempos de recuperación se acortan de manera muy notable.",
      "En cada visita realizo una cura adaptada a la fase concreta en la que está la herida (limpieza, granulación o epitelización), utilizando material profesional de un solo uso y los apósitos más adecuados según la evidencia científica actual. Si tu médico ha pautado apósitos específicos, los integro en el plan de curas sin problema.",
      "Trabajo con personas operadas recientemente, pacientes encamados con riesgo de úlceras por presión, personas con pie diabético, úlceras vasculares y lesiones traumáticas. Si tienes dudas sobre el tipo de herida o la frecuencia, llámame y lo valoramos antes de la primera visita.",
    ],
    includes: [
      "Valoración inicial de la herida y de la piel perilesional",
      "Limpieza y cura con material estéril de un solo uso",
      "Selección del apósito más adecuado según el tipo de lesión",
      "Educación al paciente y a la familia sobre cuidados entre visitas",
      "Seguimiento de la evolución y ajuste del plan de curas",
      "Coordinación con tu médico o cirujano si es necesario",
    ],
    indications: [
      "Heridas quirúrgicas posoperatorias",
      "Úlceras por presión (escaras) en pacientes encamados",
      "Úlceras vasculares y pie diabético",
      "Quemaduras leves y heridas traumáticas",
      "Dehiscencias de sutura",
    ],
    benefits: [
      "Evitas desplazamientos al centro de salud o al hospital",
      "Misma persona en todas las visitas: continuidad real",
      "Plan de curas personalizado y revisado en cada sesión",
      "Educación a la familia para los cuidados entre visitas",
    ],
    process: [
      { title: "Valoración inicial", desc: "Revisamos la herida, su evolución y los productos que estás usando." },
      { title: "Cura propiamente dicha", desc: "Limpieza, valoración del lecho, aplicación del apósito adecuado y fijación segura." },
      { title: "Recomendaciones", desc: "Te explico qué vigilar, cómo proteger la zona y cuándo conviene la siguiente visita." },
    ],
    duration: "Entre 30 y 45 minutos por sesión, según la complejidad.",
    faqs: [
      { q: "¿Lleváis vosotros el material o lo pongo yo?", a: "Yo llevo todo el material estéril necesario para la cura. Si tienes apósitos específicos prescritos por tu médico, los podemos utilizar." },
      { q: "¿Cada cuánto hay que repetir la cura?", a: "Depende del tipo de herida. En la valoración inicial te indico la frecuencia recomendada (cada 24h, 48h, 72h…) y planificamos las visitas." },
      { q: "¿Trabajáis con escaras grado III o IV?", a: "Sí. En úlceras por presión profundas valoro el lecho, el exudado y el riesgo de infección, y aplico apósitos avanzados (hidrocoloides, hidrofibra, plata, alginato…) según la fase." },
      { q: "¿Puedo combinarlo con la cura de mi centro de salud?", a: "Sí. Podemos coordinarnos con Atención Primaria para reforzar las visitas en fines de semana, festivos o cuando necesites continuidad." },
    ],
  },
  {
    slug: "retirada-puntos-grapas-granada",
    icon: Scissors,
    image: svcPuntos,
    title: "Retirada de puntos y grapas",
    desc: "Evaluación, cura, seguimiento y retirada de grapas o puntos de sutura en tu domicilio, con recomendaciones personalizadas.",
    price: "39 €",
    unit: "/sesión",
    metaTitle: "Retirada de puntos y grapas a domicilio en Granada",
    metaDescription: "Retirada de puntos de sutura y grapas quirúrgicas en casa, sin desplazamientos, con cura posterior y consejos para cuidar la cicatriz. Granada y área metropolitana.",
    intro: "Si tienes una intervención reciente y prefieres no desplazarte, voy a tu domicilio en Granada para retirar los puntos o grapas, valorar la herida y curarla si lo requiere.",
    longDescription: [
      "Tras una cirugía, la retirada de puntos o grapas marca el cierre de una etapa importante de la recuperación. Hacerlo en el momento adecuado y con la técnica correcta es clave para evitar dehiscencias, marcas innecesarias o infecciones tardías.",
      "Voy a tu casa con todo el material preparado, valoro el aspecto de la cicatriz, retiro los puntos o grapas con la técnica más adecuada para cada zona y, si la herida lo requiere, aplico tiras de aproximación (Steri-Strip) para reforzar el cierre durante los primeros días.",
      "Es un servicio especialmente cómodo para personas con movilidad reducida, mayores, posoperados o cualquiera que prefiera no desplazarse al centro de salud. Si tienes dudas sobre cuándo retirarlos, llámame y lo confirmamos con tu informe quirúrgico.",
    ],
    includes: [
      "Valoración de la cicatriz antes de la retirada",
      "Retirada de puntos de sutura o grapas con material adecuado",
      "Cura posterior y aplicación de tiras de aproximación si fuera preciso",
      "Recomendaciones para el cuidado de la cicatriz",
      "Pautas para protección solar y prevención de queloides",
    ],
    indications: [
      "Suturas tras intervención quirúrgica",
      "Grapas tras cirugía mayor",
      "Heridas suturadas en urgencias",
      "Retirada parcial (puntos alternos) en cierres con tensión",
    ],
    benefits: [
      "Sin colas ni esperas en el centro de salud",
      "Valoración de la cicatriz por enfermero hospitalario",
      "Recomendaciones específicas para cada tipo de cirugía",
    ],
    process: [
      { title: "Revisión", desc: "Compruebo el estado de la cicatriz y descarto signos de infección." },
      { title: "Retirada", desc: "Extraigo puntos o grapas con material desechable y técnica indolora." },
      { title: "Refuerzo y consejos", desc: "Aplico tiras de aproximación si procede y te dejo pautas para los siguientes días." },
    ],
    duration: "Aproximadamente 30 minutos.",
    faqs: [
      { q: "¿Cuándo se quitan los puntos?", a: "Lo habitual es entre los 7 y 14 días, según la zona y lo que indique tu cirujano. Si tienes dudas, llámame y lo valoramos." },
      { q: "¿Duele que te retiren los puntos?", a: "No suele doler. Puedes notar un pequeño tirón en cada punto, pero la técnica correcta hace que sea muy llevadero." },
      { q: "¿Y si la herida aún no está cerrada del todo?", a: "Si veo que algún punto debe mantenerse, lo dejo y planifico una segunda visita en unos días para evitar dehiscencias." },
    ],
  },
  {
    slug: "cuidados-ostomias-domicilio-granada",
    icon: ShieldCheck,
    image: svcOstomias,
    title: "Cuidados de ostomías",
    desc: "Valoración del estoma, cura, cambio de dispositivos (disco y bolsa), seguimiento y educación sanitaria para colostomías, ileostomías o gastrostomías.",
    price: "39 €",
    unit: "/sesión",
    metaTitle: "Cuidados de ostomías a domicilio en Granada (colostomía, ileostomía, PEG)",
    metaDescription: "Cambio de bolsa, cura del estoma y educación a la familia para colostomías, ileostomías, urostomías y gastrostomías (PEG) en tu domicilio en Granada.",
    intro: "Acompaño a personas ostomizadas y a sus familias en el cuidado del estoma, con un enfoque práctico y respetuoso para que ganéis autonomía progresivamente.",
    longDescription: [
      "Vivir con una ostomía supone aprender una nueva rutina de cuidados. Los primeros meses son los más exigentes: aparecen dudas sobre el tipo de dispositivo, la piel se irrita, hay fugas inesperadas o el estoma cambia de tamaño. Contar con un enfermero a domicilio en esta fase reduce mucho la ansiedad y previene complicaciones.",
      "Trabajo con personas con colostomía, ileostomía, urostomía y gastrostomías de alimentación (PEG). Valoro el estoma y la piel periestomal, ajusto el tipo de disco y bolsa a tus necesidades y te enseño paso a paso cómo realizar los cambios de forma cómoda y segura.",
      "Mi objetivo es que ganes autonomía: que tú o tu cuidador principal podáis manejar el estoma con confianza, sepáis identificar signos de alarma (irritación, sangrado, prolapso, retracción) y os sintáis acompañados en cualquier duda entre visitas.",
    ],
    includes: [
      "Valoración del estoma y la piel periestomal",
      "Cambio de disco y bolsa adecuados a tu tipo de ostomía",
      "Educación sanitaria al paciente y a la familia",
      "Detección precoz de complicaciones (dermatitis, prolapso, hernia)",
      "Recomendaciones de alimentación y vida cotidiana",
    ],
    indications: [
      "Colostomías e ileostomías",
      "Gastrostomías de alimentación (PEG)",
      "Urostomías",
      "Adaptación tras cirugía reciente",
    ],
    benefits: [
      "Reduces la ansiedad de los primeros meses tras la cirugía",
      "Aprendes a hacer los cambios sin depender de nadie",
      "Detectamos a tiempo irritaciones o complicaciones",
    ],
    process: [
      { title: "Valoración del estoma", desc: "Revisamos color, tamaño, piel periestomal y elección del dispositivo." },
      { title: "Cambio del dispositivo", desc: "Te muestro paso a paso cómo retirar, limpiar y colocar el nuevo disco y bolsa." },
      { title: "Educación", desc: "Resolvemos dudas sobre alimentación, ducha, ropa, deporte o intimidad." },
    ],
    duration: "Entre 30 y 45 minutos.",
    faqs: [
      { q: "¿Podéis enseñarnos a hacerlo nosotros?", a: "Sí. Una parte fundamental de mi trabajo es enseñarte a ti o a la persona cuidadora a manejar el estoma con seguridad." },
      { q: "Mi piel se irrita mucho alrededor del estoma, ¿qué hago?", a: "La irritación periestomal suele indicar fugas o un dispositivo mal ajustado. En la valoración revisamos el tipo de disco, el corte y la técnica de cambio para corregirlo." },
      { q: "¿Atendéis sondas PEG de alimentación?", a: "Sí. Realizo cuidados del estoma de la PEG, limpieza, rotación, comprobación del balón y educación sobre la administración de la nutrición enteral." },
    ],
  },
  {
    slug: "sondajes-dispositivos-medicos-granada",
    icon: Droplets,
    image: svcSondajes,
    title: "Sondajes y dispositivos médicos",
    desc: "Cuidados y seguimiento de sondas vesicales, nasogástricas, drenajes y otros dispositivos, con educación al paciente y la familia.",
    price: "39 €",
    unit: "/sesión",
    metaTitle: "Sondaje vesical y nasogástrico a domicilio en Granada",
    metaDescription: "Colocación, cambio y cuidados de sondas vesicales, nasogástricas, PEG y drenajes en casa. Enfermero colegiado en Granada con experiencia hospitalaria.",
    intro: "Realizo el manejo de sondas y dispositivos médicos con técnica aséptica en tu domicilio, evitando desplazamientos al hospital y cuidando la comodidad del paciente.",
    longDescription: [
      "Los sondajes son técnicas de enfermería que requieren entrenamiento, paciencia y un material adecuado. Realizarlos en casa, en un entorno familiar y sin la presión de una sala de urgencias, suele ser mucho más cómodo para el paciente, especialmente para personas mayores, encamadas o con movilidad reducida.",
      "Atiendo sondajes vesicales en hombre y mujer (incluyendo recambios programados de sonda permanente y manejo de retenciones urinarias), sondajes nasogástricos para alimentación enteral, así como cuidados de drenajes posquirúrgicos y otros dispositivos médicos.",
      "Trabajo con técnica aséptica, material profesional de un solo uso y un enfoque muy centrado en explicar cada paso al paciente y a la familia. Si la situación es urgente (por ejemplo, una retención urinaria con dolor), llámame por teléfono y prioritizo la visita.",
    ],
    includes: [
      "Colocación o cambio de sonda vesical (hombre y mujer)",
      "Colocación o cambio de sonda nasogástrica",
      "Cuidados de drenajes y catéteres",
      "Lavados vesicales si están pautados",
      "Educación a familia y cuidadores sobre signos de alarma",
    ],
    indications: [
      "Retención urinaria",
      "Alimentación enteral por sonda",
      "Pacientes encamados o con movilidad reducida",
      "Recambios programados de sonda permanente",
    ],
    benefits: [
      "Evitas un traslado al hospital o a urgencias",
      "Técnica aséptica con material profesional",
      "Acompañamiento explicando cada paso",
    ],
    process: [
      { title: "Preparación", desc: "Preparo el campo, el material estéril y reviso la indicación." },
      { title: "Técnica", desc: "Realizo el sondaje o el cambio con la máxima asepsia y comodidad para el paciente." },
      { title: "Educación", desc: "Explico cuidados diarios y signos por los que conviene volver a contactar." },
    ],
    duration: "Entre 30 y 45 minutos.",
    faqs: [
      { q: "¿Es urgente? ¿Podéis venir hoy?", a: "Si es una situación urgente como una retención, llámame al teléfono directamente y priorizo la visita." },
      { q: "¿Cada cuánto hay que cambiar una sonda vesical?", a: "Las sondas de látex se suelen cambiar cada 15-21 días y las de silicona cada 2-3 meses, pero siempre se ajusta al criterio médico y a la tolerancia del paciente." },
      { q: "¿Atendéis sondas nasogástricas en alimentación enteral?", a: "Sí. Realizo el cambio, comprobación de ubicación, cuidados del orificio nasal y enseñanza para administrar la alimentación con seguridad." },
    ],
  },
  {
    slug: "valoracion-salud-domicilio-granada",
    icon: ClipboardList,
    image: svcValoracion,
    title: "Valoración del estado de salud",
    desc: "Examen físico, toma de constantes y valoración integral mediante escalas validadas (nutrición, dependencia, riesgo de caídas) al paciente y familiar.",
    price: "29 €",
    unit: "/sesión",
    metaTitle: "Valoración de enfermería a domicilio en Granada (mayores y crónicos)",
    metaDescription: "Valoración integral del estado de salud en tu domicilio: constantes vitales, escalas validadas y plan de cuidados personalizado. Granada y área metropolitana.",
    intro: "Una valoración integral de enfermería ayuda a detectar precozmente problemas y a planificar los cuidados que necesita una persona mayor o con patología crónica.",
    longDescription: [
      "Cuando una persona mayor empieza a perder autonomía, cuando alguien recibe el alta hospitalaria o cuando la familia siente que algo no va bien, una valoración profesional aporta una foto clara de la situación y de qué se puede hacer para mejorarla.",
      "Realizo una valoración integral de enfermería que incluye toma de constantes, exploración física básica, escalas validadas internacionalmente (Barthel para dependencia, Norton para riesgo de úlceras, MNA para nutrición, Downton para riesgo de caídas) y una conversación detallada con el paciente y la familia sobre rutinas, medicación y entorno.",
      "Al terminar entrego un informe escrito con los hallazgos y un plan de cuidados claro: qué vigilar, qué adaptaciones recomiendo en el domicilio, qué profesionales conviene implicar y cuándo programar la siguiente revisión.",
    ],
    includes: [
      "Toma de constantes (TA, FC, SatO2, glucemia, temperatura)",
      "Escalas validadas: Barthel, Norton, MNA, Downton",
      "Valoración del entorno y la red de apoyo",
      "Revisión de la medicación habitual",
      "Informe escrito con recomendaciones",
    ],
    indications: [
      "Personas mayores que viven solas",
      "Pacientes tras alta hospitalaria",
      "Familias que buscan una segunda opinión profesional",
      "Detección precoz de fragilidad o deterioro",
    ],
    benefits: [
      "Detectas problemas antes de que se compliquen",
      "Plan de cuidados claro y por escrito",
      "Tranquilidad para la familia que vive lejos",
    ],
    process: [
      { title: "Entrevista", desc: "Hablamos sobre el día a día, la medicación y las preocupaciones de la familia." },
      { title: "Exploración", desc: "Tomo constantes y aplico las escalas validadas más adecuadas." },
      { title: "Informe", desc: "Te entrego un informe con conclusiones y plan de cuidados personalizado." },
    ],
    duration: "Entre 45 y 60 minutos.",
    faqs: [
      { q: "¿Me dais un informe escrito?", a: "Sí, te entrego un informe con las constantes, las escalas aplicadas y las recomendaciones de cuidados." },
      { q: "Mi padre vive solo y vivimos fuera de Granada, ¿podéis hacerle un seguimiento?", a: "Sí. Podemos planificar valoraciones periódicas y os mando el informe por email tras cada visita para que tengáis tranquilidad estéis donde estéis." },
      { q: "¿Sirve para tramitar la dependencia?", a: "El informe es un documento de enfermería; no sustituye al baremo oficial, pero aporta información clínica útil que puedes presentar a tu trabajadora social o médico." },
    ],
  },
  {
    slug: "inyeccion-intramuscular-domicilio-granada",
    icon: Syringe,
    image: svcIntramuscular,
    title: "Medicación intramuscular",
    desc: "Preparación y administración con material adecuado de medicación intramuscular: vacunas, B12, corticoides recetados, entre otros.",
    price: "29 €",
    unit: "/sesión",
    metaTitle: "Inyección intramuscular a domicilio en Granada (B12, corticoides)",
    metaDescription: "Administración de inyecciones intramusculares en casa: vitamina B12, corticoides, vacunas y pautas prescritas por tu médico. Enfermero colegiado en Granada.",
    intro: "Administro medicación intramuscular pautada por tu médico en tu domicilio, con técnica segura y material de un solo uso.",
    longDescription: [
      "La administración de inyectables es una técnica sencilla en apariencia, pero requiere experiencia para hacerlo bien: elegir la zona adecuada, evitar nervios y vasos, y asegurar la asepsia. Más aún cuando la persona tiene poca masa muscular, está anticoagulada o tiene fobia a las agujas.",
      "Voy a tu casa con todo el material desechable preparado, verifico la prescripción, administro la dosis con técnica indolora y dejo unos minutos de observación por si surgiera cualquier reacción.",
      "Trabajo con pautas habituales como vitamina B12, hierro, corticoides, tratamientos hormonales y vacunas pautadas por tu médico (no incluyo dispensación de vacunas; las consigues en tu farmacia o centro de salud).",
    ],
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
      "Pautas mensuales o trimestrales programadas",
    ],
    benefits: [
      "Sin desplazamientos para una técnica de pocos minutos",
      "Especialmente cómodo para personas mayores o con miedo a agujas",
      "Calendario planificado contigo",
    ],
    process: [
      { title: "Verificación", desc: "Reviso la receta y la medicación que has comprado." },
      { title: "Administración", desc: "Inyección intramuscular con técnica segura y lo más indolora posible." },
      { title: "Observación", desc: "Unos minutos de control por si aparece cualquier reacción adversa." },
    ],
    duration: "Aproximadamente 15-20 minutos.",
    faqs: [
      { q: "¿Tengo que llevar yo la medicación?", a: "Sí. La medicación debe estar prescrita por tu médico y la consigues tú en la farmacia. Yo me encargo de administrarla con seguridad." },
      { q: "¿Podéis poner vacunas?", a: "Sí, siempre que estén prescritas por tu médico y las hayas conseguido en la farmacia respetando la cadena de frío." },
      { q: "¿Qué pasa si la persona toma anticoagulantes?", a: "Lo tengo en cuenta para elegir la zona, la longitud de aguja y aplicar compresión adecuada. Sin problema." },
    ],
  },
  {
    slug: "inyeccion-subcutanea-domicilio-granada",
    icon: Pill,
    image: svcSubcutanea,
    title: "Medicación subcutánea",
    desc: "Preparación y administración de medicación subcutánea: insulina, heparina, vacunas y otras pautas.",
    price: "29 €",
    unit: "/sesión",
    metaTitle: "Inyección subcutánea a domicilio en Granada (heparina, insulina)",
    metaDescription: "Administración de heparina, insulina y otras pautas subcutáneas en tu domicilio en Granada. Educación al paciente y a la familia para autoadministración.",
    intro: "Administro medicación subcutánea pautada y, si lo prefieres, te enseño a hacerlo a ti o a tu familia para que ganéis autonomía.",
    longDescription: [
      "La medicación subcutánea (heparina tras cirugía, insulina en diabetes, biológicos, hormonas) suele administrarse durante semanas o meses. Aprender a ponerlo en casa con seguridad supone un cambio enorme en la calidad de vida del paciente y su familia.",
      "Voy a tu casa para administrarla, pero también para enseñarte: te muestro la rotación correcta de zonas, la técnica de pellizco, el ángulo de inyección y cómo evitar hematomas. En pocas visitas la mayoría de personas se sienten capaces de hacerlo solas.",
      "Para tratamientos prolongados (heparina posoperatoria, biológicos quincenales, etc.) ofrezco packs de sesiones con condiciones especiales para abaratar el coste total.",
    ],
    includes: [
      "Administración de heparina, insulina u otra pauta prescrita",
      "Rotación correcta de zonas de punción",
      "Educación para la autoadministración si procede",
      "Material de un solo uso y desecho seguro",
    ],
    indications: [
      "Profilaxis con heparina tras cirugía",
      "Pautas de insulina",
      "Tratamientos biológicos pautados",
      "Tratamientos hormonales (estimulación ovárica, etc.)",
    ],
    benefits: [
      "Educación práctica para que aprendas a ponértelo solo",
      "Pack de sesiones para tratamientos largos",
      "Confianza para empezar el tratamiento sin miedo",
    ],
    process: [
      { title: "Demostración", desc: "Te explico la técnica completa antes de la primera punción." },
      { title: "Administración", desc: "Pongo la dosis con técnica correcta y rotación de zonas." },
      { title: "Aprendizaje", desc: "Si lo deseas, te ayudo a hacerlo tú en visitas posteriores hasta que ganes autonomía." },
    ],
    duration: "Aproximadamente 15 minutos.",
    faqs: [
      { q: "¿Podéis venir todos los días?", a: "Sí, organizamos un calendario de visitas que se ajuste a tu pauta. Para tratamientos prolongados ofrezco packs de sesiones." },
      { q: "¿Cuánto cuesta un tratamiento de heparina de varias semanas?", a: "Depende del número de visitas. Para tratamientos largos hago un pack con descuento. Llámame y te lo calculo en función de la pauta exacta." },
      { q: "¿Me podéis enseñar a ponerme la insulina?", a: "Sí. La educación diabetológica es parte del servicio: te enseño zonas de punción, rotación, conservación del bolígrafo y signos de hipoglucemia." },
    ],
  },
  {
    slug: "tratamiento-intravenoso-domicilio-granada",
    icon: Activity,
    image: svcIntravenoso,
    title: "Tratamiento intravenoso",
    desc: "Canalización de catéter y administración aséptica de medicación intravenosa, con control del paciente durante todo el proceso.",
    price: "39 €",
    unit: "/sesión",
    metaTitle: "Tratamiento intravenoso y sueroterapia a domicilio en Granada",
    metaDescription: "Canalización de vía y administración de medicación intravenosa o sueroterapia en tu domicilio en Granada, con control durante toda la perfusión.",
    intro: "Realizo tratamientos intravenosos pautados por tu médico en tu domicilio, con técnica aséptica y monitorización del paciente durante toda la administración.",
    longDescription: [
      "La sueroterapia y la medicación intravenosa en domicilio permiten recuperar a personas deshidratadas, con vómitos persistentes o que necesitan completar un ciclo de antibiótico sin estar ingresadas. Para muchos pacientes es la diferencia entre pasar el día en urgencias o recuperarse cómodamente en casa.",
      "Canalizo una vía periférica con técnica aséptica, administro la medicación o el suero pautado por tu médico, controlo constantes durante la perfusión y retiro la vía al terminar. En caso de tratamientos de varios días, podemos mantener la vía con un apósito transparente y reducir las punciones.",
      "Trabajo con pautas habituales: sueroterapia por deshidratación, antibioterapia intravenosa, hierro intravenoso y otros tratamientos prescritos. Siempre requiere prescripción médica y la medicación la aporta el paciente.",
    ],
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
      "Recuperación posviaje o gastroenteritis prolongada",
    ],
    benefits: [
      "Recuperación cómoda sin pasar por urgencias",
      "Control profesional durante toda la perfusión",
      "Posibilidad de tratamientos de varios días en casa",
    ],
    process: [
      { title: "Vía y preparación", desc: "Canalización de vía periférica con técnica aséptica." },
      { title: "Perfusión", desc: "Administración pautada con control de constantes y respuesta del paciente." },
      { title: "Retirada", desc: "Retirada segura, compresión y cura de la zona de punción." },
    ],
    duration: "Entre 45 y 90 minutos según la perfusión.",
    faqs: [
      { q: "¿Necesito prescripción médica?", a: "Sí. Cualquier tratamiento intravenoso requiere prescripción médica. Yo me encargo de la administración segura." },
      { q: "¿Hacéis sueroterapia para resaca o cansancio?", a: "Solo administro pautas indicadas por un médico. Si tu médico considera adecuada la sueroterapia y te la prescribe, sin problema." },
      { q: "¿Y para tratamientos antibióticos de varios días?", a: "Sí. Coordinamos un calendario de visitas y, si procede, mantenemos la vía con apósito transparente entre dosis para reducir punciones." },
    ],
  },
  {
    slug: "extraccion-muestras-domicilio-granada",
    icon: TestTube,
    image: svcExtraccion,
    title: "Extracción de muestras",
    desc: "Extracción de sangre, orina, antígeno, PCR u otras muestras en el domicilio y posterior traslado al laboratorio para su análisis.",
    price: "29 €",
    unit: "/servicio",
    metaTitle: "Extracción de sangre a domicilio en Granada (analíticas y PCR)",
    metaDescription: "Analíticas de sangre, orina, PCR y antígeno en tu domicilio en Granada. Colaboración con centros de extracciones y laboratorios privados de la zona.",
    intro: "Realizo extracciones de sangre y otras muestras en tu domicilio, con la comodidad de no tener que desplazarte al centro de salud o al laboratorio.",
    longDescription: [
      "Hacerse una analítica de madrugada con ayuno, esperar turno en el centro de extracciones y volver a casa puede ser una odisea para muchas personas: mayores, encamados, niños, personas con fobia a las agujas o profesionales con agendas imposibles.",
      "Voy a tu casa a la hora acordada, realizo la extracción venosa con técnica indolora y traslado las muestras al laboratorio con el que trabajes manteniendo las condiciones adecuadas (cadena de frío si procede, tiempos de transporte respetados).",
      "Colaboro habitualmente con varios centros de extracciones y laboratorios privados de Granada. Si ya tienes un laboratorio de referencia, lo coordinamos sin problema. También realizo recogidas de orina, PCR y test de antígenos.",
    ],
    includes: [
      "Extracción de sangre venosa",
      "Recogida de muestras de orina",
      "Toma de muestra para PCR o antígeno",
      "Traslado al laboratorio en condiciones óptimas",
    ],
    indications: [
      "Pacientes con movilidad reducida",
      "Personas mayores",
      "Analíticas privadas o de seguimiento",
      "Niños con fobia a las agujas",
    ],
    benefits: [
      "Sin madrugones ni colas en el centro de extracciones",
      "Coordinación con tu laboratorio habitual",
      "Resultados directamente en el laboratorio que tú elijas",
    ],
    process: [
      { title: "Cita", desc: "Acordamos hora respetando el ayuno cuando lo requiera la analítica." },
      { title: "Extracción", desc: "Punción venosa con técnica indolora y material desechable." },
      { title: "Traslado", desc: "Llevo las muestras al laboratorio en condiciones adecuadas." },
    ],
    duration: "Aproximadamente 20 minutos.",
    faqs: [
      { q: "¿Trabajáis con algún laboratorio en concreto?", a: "Colaboro con varios centros de extracciones y laboratorios de Granada. Si ya trabajas con uno, lo coordinamos sin problema." },
      { q: "¿El precio incluye el análisis del laboratorio?", a: "No. Mi tarifa cubre la extracción, los tubos y el traslado de las muestras. El coste del análisis lo factura directamente el laboratorio según las pruebas pedidas." },
      { q: "¿Hacéis extracciones a niños?", a: "Sí, siempre con autorización de los padres o tutores y con la mayor delicadeza posible. Si nunca le han pinchado, te explico cómo prepararle antes de la visita." },
    ],
  },
];

export const getServiceBySlug = (slug: string) =>
  services.find((s) => s.slug === slug);
