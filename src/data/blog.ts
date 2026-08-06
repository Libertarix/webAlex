export interface BlogSection {
  heading: string;
  paragraphs: string[];
  list?: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  publishedAt: string; // ISO
  readingMinutes: number;
  keywords: string[];
  relatedServiceSlug: string;
  intro: string;
  sections: BlogSection[];
  disclaimer: string;
  /** Ruta de la imagen de portada (solo la tienen los artículos generados por el bot). */
  coverImage?: string;
  /** true si el artículo lo escribió el bot programado (ver scripts/blog-bot/). */
  generatedByBot?: boolean;
}

const blogPostsManual: BlogPost[] = [
  {
    slug: "cuidar-herida-en-casa-guia-practica",
    title: "Cómo cuidar una herida en casa: guía práctica paso a paso",
    metaTitle: "Cómo cuidar una herida en casa: guía paso a paso | Enfermero en Casa",
    metaDescription:
      "Guía práctica de cuidado de heridas en casa: limpieza, elección de apósito y señales de alarma. Enfermero colegiado a domicilio en Granada.",
    excerpt:
      "Limpieza, elección de apósito y señales de alarma: lo esencial para cuidar una herida en casa sin poner en riesgo la cicatrización.",
    publishedAt: "2026-08-06",
    readingMinutes: 7,
    keywords: [
      "cuidado de heridas en casa",
      "cómo curar una herida",
      "cura de heridas a domicilio Granada",
      "cicatrización de heridas",
    ],
    relatedServiceSlug: "curas-heridas-domicilio-granada",
    intro:
      "Una herida bien cuidada desde el primer momento cicatriza antes, duele menos y tiene mucho menos riesgo de infectarse. Esta guía repasa lo esencial del cuidado de heridas en casa: qué hacer, qué evitar y cuándo dejar de improvisar y llamar a un profesional.",
    sections: [
      {
        heading: "Antes de empezar: manos limpias y material a mano",
        paragraphs: [
          "El primer paso de cualquier cura, por sencilla que sea, es lavarse bien las manos con agua y jabón durante al menos 20 segundos. La mayoría de infecciones de heridas domésticas no vienen de la calle, sino de manos o material contaminado en el propio proceso de curarlas.",
          "Antes de empezar, reúne todo el material: suero fisiológico o agua y jabón neutro para limpiar, gasas estériles, el apósito elegido, esparadrapo hipoalergénico y unas tijeras limpias. Tenerlo todo preparado evita tener que interrumpir la cura a medias con las manos ya sucias otra vez.",
        ],
      },
      {
        heading: "Cómo limpiar la herida correctamente",
        paragraphs: [
          "La limpieza es el paso que más influye en la cicatrización. Lo más recomendable es usar suero fisiológico o agua corriente limpia, aplicado con una gasa o directamente a chorro suave, arrastrando la suciedad desde el centro de la herida hacia fuera.",
          "Un error muy habitual es usar alcohol, agua oxigenada o povidona yodada directamente sobre el tejido de la herida en cada cura: son antisépticos agresivos que también dañan las células que están intentando regenerar el tejido, así que retrasan la cicatrización en vez de ayudarla. Su uso puntual tiene sentido en ciertos casos, pero no como rutina diaria sin indicación profesional.",
        ],
      },
      {
        heading: "Qué apósito elegir según el tipo de herida",
        paragraphs: [
          "No todos los apósitos sirven para todas las heridas. Como orientación general:",
        ],
        list: [
          "Heridas superficiales y secas: una gasa estéril con esparadrapo suele ser suficiente.",
          "Heridas con algo de exudado (líquido): apósitos absorbentes que no se peguen al lecho de la herida.",
          "Heridas quirúrgicas recientes: seguir siempre el material y la pauta que haya indicado el cirujano o el profesional que hizo la cura inicial.",
          "Úlceras o heridas crónicas (pie diabético, escaras): requieren apósitos avanzados específicos y valoración profesional periódica, no material genérico de farmacia.",
        ],
      },
      {
        heading: "Errores comunes que retrasan la cicatrización",
        paragraphs: [
          "Además del uso excesivo de antisépticos agresivos, hay otros hábitos que, aunque parecen inofensivos, complican la curación:",
        ],
        list: [
          "Dejar la herida al aire \"para que respire\" cuando en realidad necesita un ambiente húmedo controlado para cicatrizar mejor.",
          "Tocar o despegar una costra antes de tiempo, lo que reabre el tejido nuevo.",
          "Cambiar el apósito con más frecuencia de la necesaria, lo que también daña el tejido en formación.",
          "Aplicar remedios caseros no contrastados (pasta de dientes, azúcar, alcohol de farmacia sin diluir) directamente sobre la herida.",
        ],
      },
      {
        heading: "Señales de alarma: cuándo dejar de curarla tú y llamar a un profesional",
        paragraphs: [
          "La mayoría de heridas leves evolucionan bien con cuidados básicos, pero hay señales que indican que conviene que la valore un enfermero o un médico sin demora:",
        ],
        list: [
          "Enrojecimiento que se extiende alrededor de la herida, calor local o hinchazón que aumenta con los días.",
          "Salida de pus o líquido con mal olor.",
          "Fiebre, malestar general o dolor que va a más en lugar de disminuir.",
          "Una herida que no muestra ninguna mejoría pasados 7-10 días de cuidados correctos.",
          "Heridas profundas, muy extensas, con los bordes muy separados o producidas por objetos oxidados o sucios.",
        ],
      },
    ],
    disclaimer:
      "Este artículo tiene carácter informativo y no sustituye la valoración presencial de un profesional sanitario. Ante cualquier duda o señal de alarma, consulta con tu enfermero, tu médico o los servicios de urgencias.",
  },
  {
    slug: "cuidados-sonda-vesical-en-casa",
    title: "Sonda vesical en casa: cuidados básicos y cuándo pedir ayuda",
    metaTitle: "Cuidados de la sonda vesical en casa: guía completa | Enfermero en Casa",
    metaDescription:
      "Higiene, cuidado de la bolsa colectora y señales de alarma de la sonda vesical en casa. Enfermero colegiado a domicilio en Granada, Col. 12386.",
    excerpt:
      "Higiene diaria, cuidado de la bolsa colectora y señales de alarma: lo que debes saber para llevar bien una sonda vesical en casa.",
    publishedAt: "2026-08-03",
    readingMinutes: 8,
    keywords: [
      "cuidados sonda vesical",
      "sonda urinaria en casa",
      "cuidado de la sonda permanente",
      "higiene sonda vesical",
    ],
    relatedServiceSlug: "sondajes-dispositivos-medicos-granada",
    intro:
      "Llevar una sonda vesical, ya sea de forma temporal o permanente, cambia la rutina diaria pero no tiene por qué ser complicado. Con unos cuidados básicos y sabiendo reconocer las señales de alarma, la mayoría de complicaciones se pueden evitar o detectar a tiempo.",
    sections: [
      {
        heading: "Higiene diaria de la sonda",
        paragraphs: [
          "La zona donde la sonda entra en contacto con la piel (genital) debe lavarse a diario con agua y jabón neutro, secando bien después. No hace falta usar antisépticos ni productos especiales salvo que un profesional lo indique expresamente.",
          "Es importante lavarse las manos antes y después de manipular la sonda o la bolsa, y evitar tirones o movimientos bruscos que puedan desplazarla, especialmente en las sondas fijadas con balón interno.",
        ],
      },
      {
        heading: "Cuidado de la bolsa colectora",
        paragraphs: [
          "La bolsa debe mantenerse siempre por debajo del nivel de la vejiga, incluso al caminar o al dormir, para que la orina fluya por gravedad y no retroceda hacia la vejiga, lo que aumenta el riesgo de infección.",
          "Hay que vaciarla antes de que se llene por completo (normalmente cuando alcanza dos tercios de su capacidad) y evitar que el grifo de vaciado toque el suelo u otras superficies. Las bolsas de pierna, más discretas para el día, y las de noche, de mayor capacidad, pueden combinarse según la rutina de cada persona.",
        ],
      },
      {
        heading: "Qué hacer y qué evitar",
        paragraphs: ["Algunas pautas sencillas marcan una diferencia real en la prevención de complicaciones:"],
        list: [
          "Beber suficiente agua a lo largo del día (salvo restricción médica), ya que ayuda a prevenir infecciones y obstrucciones.",
          "No desconectar la sonda de la bolsa salvo que sea estrictamente necesario, para reducir el riesgo de contaminación.",
          "No tirar ni forzar el tubo al cambiar de postura o vestirse.",
          "Evitar dobleces en el tubo que puedan bloquear el paso de la orina.",
          "No usar cremas o polvos perfumados en la zona de inserción sin indicación profesional.",
        ],
      },
      {
        heading: "Cuándo se cambia una sonda vesical",
        paragraphs: [
          "La periodicidad depende del material: las sondas de látex suelen cambiarse cada 2-3 semanas y las de silicona cada 2-3 meses, aunque el criterio final siempre lo marca el profesional según cómo la tolere cada persona. Un cambio programado a tiempo evita obstrucciones e infecciones asociadas a sondas que llevan demasiado tiempo puestas.",
        ],
      },
      {
        heading: "Señales de alarma que requieren atención sin demora",
        paragraphs: [
          "Aunque los cuidados diarios sean correctos, hay signos que no deben esperar a la siguiente visita programada:",
        ],
        list: [
          "La orina deja de salir o sale muy poca cantidad, sobre todo si aparece dolor o sensación de vejiga llena (posible obstrucción o retención).",
          "Orina con sangre, muy turbia o con mal olor intenso.",
          "Fiebre, escalofríos o dolor en la zona lumbar o abdominal (posible infección urinaria).",
          "Fugas de orina alrededor de la sonda de forma persistente.",
          "Enrojecimiento, dolor o hinchazón en el punto de inserción.",
        ],
      },
    ],
    disclaimer:
      "Este artículo tiene carácter informativo y no sustituye la valoración presencial de un profesional sanitario. Ante cualquier señal de alarma relacionada con la sonda, contacta con tu enfermero, tu médico o los servicios de urgencias.",
  },
  {
    slug: "vivir-con-ostomia-consejos-practicos",
    title: "Vivir con una ostomía: consejos prácticos para el día a día",
    metaTitle: "Vivir con una ostomía: consejos prácticos para el día a día",
    metaDescription:
      "Cuidado de la piel periestomal, alimentación, ducha y vida social con una ostomía. Guía práctica de un enfermero colegiado a domicilio en Granada.",
    excerpt:
      "Cuidado de la piel periestomal, alimentación y vida social: consejos prácticos para ganar autonomía y confianza con una ostomía.",
    publishedAt: "2026-07-30",
    readingMinutes: 8,
    keywords: [
      "cuidados ostomía",
      "vivir con colostomía",
      "consejos ostomía",
      "cambio de bolsa de ostomía",
    ],
    relatedServiceSlug: "cuidados-ostomias-domicilio-granada",
    intro:
      "Adaptarse a vivir con una colostomía, ileostomía o urostomía lleva tiempo, y es normal que los primeros meses generen dudas. Con la información correcta y algo de práctica, la inmensa mayoría de personas recuperan una vida completamente normal.",
    sections: [
      {
        heading: "Cuidado de la piel periestomal",
        paragraphs: [
          "La piel que rodea el estoma es la parte más delicada de todo el cuidado. Debe lavarse con agua tibia y, si acaso, un jabón neutro sin perfume, secando siempre a toques suaves, nunca frotando.",
          "El disco o placa debe recortarse a la medida exacta del estoma: un agujero demasiado grande deja piel expuesta al contacto con las heces u orina, que es la causa más frecuente de irritación (dermatitis periestomal). Revisar la piel en cada cambio ayuda a detectar cualquier rojez a tiempo, antes de que se convierta en una molestia mayor.",
        ],
      },
      {
        heading: "Cómo elegir el dispositivo adecuado",
        paragraphs: [
          "Existen sistemas de una pieza (disco y bolsa unidos) y de dos piezas (disco y bolsa independientes, que permiten cambiar solo la bolsa sin despegar el disco). También hay bolsas cerradas, abiertas o con válvula, y con o sin filtro de olores.",
          "No hay un dispositivo \"mejor\" en general: el más adecuado depende del tipo de estoma, la forma del abdomen, el tipo de piel y las preferencias personales. Es habitual probar más de un modelo hasta encontrar el que mejor se adapta, y no hay ningún problema en pedir ayuda profesional para hacerlo.",
        ],
      },
      {
        heading: "Alimentación y ostomía",
        paragraphs: [
          "En general no hace falta seguir una dieta restrictiva de por vida, pero sí conviene introducir los alimentos poco a poco tras la cirugía y observar cómo responde el cuerpo. Algunos alimentos (legumbres, col, bebidas gaseosas) pueden aumentar los gases o el olor en algunas personas, sin que eso signifique que haya que eliminarlos por completo.",
          "Mantener una buena hidratación es especialmente importante en las ileostomías, donde se pierde más líquido que con una colostomía. Ante cualquier duda concreta sobre tu caso, lo más fiable es consultarlo con tu equipo de enfermería o nutrición.",
        ],
      },
      {
        heading: "Ducha, deporte y vida social",
        paragraphs: [
          "Se puede duchar con normalidad con la bolsa puesta o incluso sin ella durante unos minutos, ya que el agua no daña el estoma. La mayoría de deportes son compatibles con una ostomía, adaptando la intensidad en las primeras semanas tras la cirugía y usando, si se desea, fajas o cinturones específicos de sujeción.",
          "El miedo a fugas o al ruido en situaciones sociales es muy común al principio y suele disminuir con la práctica y con encontrar el sistema adecuado. Vaciar la bolsa quiando está a un tercio de su capacidad, en lugar de esperar a que esté llena, reduce mucho ese riesgo.",
        ],
      },
      {
        heading: "Señales de alarma",
        paragraphs: [
          "Conviene consultar sin demora si aparece cualquiera de estos signos:",
        ],
        list: [
          "El estoma cambia de color (pálido, oscuro o morado) en lugar de mantener su tono rosado-rojizo habitual.",
          "Sangrado abundante, hinchazón importante o el estoma se hunde o sobresale de forma repentina.",
          "Irritación de la piel que no mejora pese a ajustar el disco.",
          "Ausencia de gases o heces durante más de 2-3 días, junto con dolor abdominal.",
          "Fiebre o malestar general.",
        ],
      },
    ],
    disclaimer:
      "Este artículo tiene carácter informativo y no sustituye la valoración presencial de un profesional sanitario. Ante cualquier señal de alarma relacionada con el estoma, contacta con tu enfermero, tu médico o los servicios de urgencias.",
  },
  {
    slug: "cuidado-personas-mayores-senales-ayuda-profesional",
    title: "Cuidado de personas mayores en casa: señales de que necesitan ayuda profesional",
    metaTitle: "Cuidado de mayores en casa: cuándo pedir ayuda profesional",
    metaDescription:
      "Señales físicas, cognitivas y de medicación que indican que una persona mayor necesita apoyo de enfermería. Valoración a domicilio en Granada.",
    excerpt:
      "Cambios físicos, cognitivos y en el manejo de la medicación que indican que ha llegado el momento de pedir apoyo profesional.",
    publishedAt: "2026-07-27",
    readingMinutes: 7,
    keywords: [
      "cuidado de mayores en casa",
      "cuándo contratar un enfermero a domicilio",
      "valoración de salud en casa",
      "dependencia en personas mayores",
    ],
    relatedServiceSlug: "valoracion-salud-domicilio-granada",
    intro:
      "Cuando un padre, madre o familiar mayor empieza a necesitar más ayuda, no siempre es fácil saber en qué momento el cuidado que puede darle la familia deja de ser suficiente. Estas son las señales más habituales a las que prestar atención.",
    sections: [
      {
        heading: "Cambios físicos que conviene vigilar",
        paragraphs: [
          "Algunos cambios se instalan poco a poco y, precisamente por eso, cuesta darse cuenta de ellos en el día a día:",
        ],
        list: [
          "Pérdida de peso no buscada o pérdida de apetito mantenida en el tiempo.",
          "Caídas, aunque sean leves, o inseguridad nueva al caminar o levantarse.",
          "Moratones frecuentes sin causa clara.",
          "Dificultad creciente para tareas básicas: vestirse, bañarse, cocinar o subir escaleras.",
          "Heridas o llagas que tardan en curar, sobre todo en personas que pasan mucho tiempo sentadas o encamadas.",
        ],
      },
      {
        heading: "Cambios cognitivos y de ánimo",
        paragraphs: [
          "No todo el deterioro que aparece con la edad es \"normal\" ni hay que asumirlo sin más. Olvidos que interfieren con la vida diaria (perder citas importantes, repetir la misma pregunta varias veces seguidas, desorientarse en lugares conocidos), aislamiento social repentino, tristeza mantenida o cambios bruscos de carácter son señales que merece la pena valorar, tanto por lo que puedan indicar en sí mismas como porque a veces son la primera pista de un problema físico de base (una infección, un desajuste de medicación, un problema de tiroides).",
        ],
      },
      {
        heading: "Cuando la medicación deja de manejarse bien",
        paragraphs: [
          "El manejo de la medicación es una de las áreas donde antes se nota que alguien necesita apoyo: pastilleros a medio usar, dosis olvidadas o duplicadas, dificultad para leer los prospectos o para distinguir pastillas parecidas. Con tratamientos crónicos múltiples (muy habitual a partir de cierta edad), un error de medicación mantenido en el tiempo puede tener consecuencias serias sin que se note de forma inmediata.",
        ],
      },
      {
        heading: "Cuándo el cuidado familiar deja de ser suficiente",
        paragraphs: [
          "Cuidar a un familiar mayor es compatible con pedir ayuda profesional; de hecho, suele ser lo que permite sostener ese cuidado en el tiempo sin que la familia se agote. Algunas señales de que ha llegado ese momento:",
        ],
        list: [
          "La persona cuidadora principal siente que ya no puede cubrir las necesidades básicas con seguridad.",
          "Hay técnicas concretas que requieren manejo profesional (curas, sondas, inyectables, control de constantes).",
          "La familia vive lejos y necesita un seguimiento regular y fiable de la salud de la persona mayor.",
          "Tras un alta hospitalaria, hay dudas sobre cómo continuar los cuidados en casa.",
        ],
      },
      {
        heading: "Qué aporta una valoración de enfermería a domicilio",
        paragraphs: [
          "Una valoración integral de enfermería no se limita a tomar la tensión: incluye escalas validadas para medir dependencia, riesgo de caídas o estado nutricional, revisión de la medicación habitual y una conversación detallada sobre la rutina diaria. El resultado es un plan de cuidados claro y por escrito, que ayuda a la familia a saber exactamente qué vigilar y qué pasos dar a continuación, con la tranquilidad de contar con un criterio profesional objetivo.",
        ],
      },
    ],
    disclaimer:
      "Este artículo tiene carácter informativo y no sustituye la valoración presencial de un profesional sanitario. Ante cualquier cambio brusco en el estado de salud de una persona mayor, consulta con su médico o enfermero de referencia.",
  },
];

// Artículos que genera y publica automáticamente scripts/blog-bot/
// generar-articulo.mjs los lunes y jueves (ver .github/workflows/blog-bot.yml)
// — sin revisión humana previa, decisión expresa de la usuaria.
import blogPostsGenerados from "./blog-generado.json";

export const blogPosts: BlogPost[] = [...blogPostsManual, ...(blogPostsGenerados as BlogPost[])].sort((a, b) =>
  b.publishedAt.localeCompare(a.publishedAt)
);

export const getBlogPostBySlug = (slug: string) => blogPosts.find((p) => p.slug === slug);
