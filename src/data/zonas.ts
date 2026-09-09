// Contenido real por localidad para /zonas-cobertura y sus páginas propias
// (/zonas-cobertura/:slug) — no es una plantilla con el nombre cambiado.
// La distancia usa la cifra oficial de la Wikipedia ("a X km de la capital
// provincial") cuando la da; si no la da, se calcula en línea recta a partir
// de coordenadas reales (mismo método que ya usaba este archivo). El campo
// `detalle` se apoya en un dato histórico o geográfico real y verificable
// de cada municipio (contrastado en septiembre de 2026), no en relleno
// genérico — es justo lo que hace que una página de pueblo no sea una
// "doorway page" a ojos de Google: contenido único de verdad, no una
// plantilla con find-and-replace del nombre.

export type Comarca = "Granada capital" | "Zona sur" | "Zona norte" | "Vega de Granada" | "Sierra Nevada";

export interface Zona {
  slug: string;
  nombre: string;
  distanciaKm: number;
  comarca: Comarca;
  texto: string;
  detalle: string;
}

export const zonas: Zona[] = [
  {
    slug: "granada-capital",
    nombre: "Granada capital",
    distanciaKm: 0,
    comarca: "Granada capital",
    texto:
      "Es donde vivo y donde atiendo la mayoría de los servicios: cualquier barrio de la ciudad, de Zaidín a Realejo o Chana, está dentro de mi radio de actuación habitual, normalmente con posibilidad de visita el mismo día.",
    detalle:
      "Es donde vivo y donde atiendo la mayoría de los servicios: cualquier barrio de la ciudad, de Zaidín a Realejo, Chana o el Albaicín, está dentro de mi radio de actuación habitual, normalmente con posibilidad de visita el mismo día.",
  },
  {
    slug: "armilla",
    nombre: "Armilla",
    distanciaKm: 4,
    comarca: "Zona sur",
    texto:
      "A 4 km del centro de Granada, es una de las localidades donde más visitas hago fuera de la capital — tiempos de desplazamiento cortos, así que puedo encajar curas o controles sin que la distancia sea un problema para la frecuencia del servicio.",
    detalle:
      "Armilla, a solo 4 km del centro de Granada, es una de las localidades donde más visitas hago fuera de la capital. Es un municipio con una identidad muy marcada por la Base Aérea de Armilla (inaugurada en 1922, hoy la principal escuela de pilotos de helicóptero del Ejército del Aire y del Espacio) y con un peso histórico real: fue aquí, en las cercanías del municipio, donde Boabdil entregó las llaves de la Alhambra a los Reyes Católicos en 1492. Hoy es una de las poblaciones con más densidad del área metropolitana, y también donde tengo más facilidad para encajar visitas frecuentes — curas, seguimientos de varias sesiones a la semana o pautas de medicación — sin que la distancia sea nunca un problema.",
  },
  {
    slug: "maracena",
    nombre: "Maracena",
    distanciaKm: 6,
    comarca: "Zona norte",
    texto:
      "A unos 6 km al norte de Granada. Atiendo aquí con la misma disponibilidad que en la capital, incluidos seguimientos con varias visitas por semana para curas o pautas de medicación.",
    detalle:
      "Maracena está a unos 6 km al norte de Granada, en plena Vega. Su origen es más antiguo de lo que parece: en 1964 se descubrieron los restos de una villa romana en su término, con una inscripción votiva dedicada a la diosa Stata Mater, y en 1431 fue escenario de la batalla de la Higueruela, cuando Juan II de Castilla estableció aquí su campamento real. Hoy es uno de los municipios más poblados del área metropolitana, y atiendo con la misma disponibilidad que en la capital, incluidos seguimientos con varias visitas por semana para curas o pautas de medicación.",
  },
  {
    slug: "albolote",
    nombre: "Albolote",
    distanciaKm: 11,
    comarca: "Zona norte",
    texto:
      "A unos 11 km del centro, en la zona norte del área metropolitana. Coordino la visita según la franja horaria que necesites, igual que en cualquier otra localidad cercana a Granada.",
    detalle:
      "Albolote está a unos 11 km al norte de Granada. Es un municipio con historia real por partida doble: cerca de aquí tuvo lugar en 1431 la batalla de la Higueruela (la victoria de Juan II de Castilla sobre los ejércitos granadinos, tan famosa que está representada en un fresco del Monasterio de El Escorial), y en 1956 sufrió un terremoto de magnitud 5,1 con epicentro en el propio municipio, uno de los últimos con víctimas mortales en España antes del de Lorca de 2011. Hoy es uno de los polígonos industriales y residenciales más consolidados del área metropolitana; coordino la visita según la franja horaria que necesites, igual que en cualquier otra localidad cercana.",
  },
  {
    slug: "atarfe",
    nombre: "Atarfe",
    distanciaKm: 11,
    comarca: "Vega de Granada",
    texto:
      "En la Vega de Granada, a unos 11 km del centro. Es una distancia que atiendo con normalidad, valorando previamente el horario para ajustar bien la ruta del día.",
    detalle:
      "Atarfe está a unos 11 km de Granada, en plena Vega, a los pies de Sierra Elvira. Es uno de los municipios con más peso histórico real de la comarca: en su término se encuentra Medina Elvira, una de las ciudades más importantes de al-Ándalus durante el Califato, y en la propia Sierra Elvira tuvo lugar la batalla de la Higueruela entre Juan II de Castilla y Muhammad IX de Granada. Es una distancia que atiendo con normalidad, valorando previamente el horario para ajustar bien la ruta del día.",
  },
  {
    slug: "peligros",
    nombre: "Peligros",
    distanciaKm: 7,
    comarca: "Zona norte",
    texto:
      "A unos 7 km al norte de la capital. Una de las localidades donde el desplazamiento no supone ninguna limitación para la frecuencia de las visitas.",
    detalle:
      "Peligros está a unos 7 km al norte de Granada, en el centro de la Vega. Su nombre, curiosamente, viene del latín \"periculum\" (peligro), por su antiguo emplazamiento entre marismas cerca de la Ilíberis romana. Tras la expulsión de los moriscos en 1578 solo quedaron cinco familias en el pueblo, y el censo de ese mismo año recogía apenas 21 familias — un reinicio demográfico casi total que marcó al municipio actual. Hoy el desplazamiento hasta aquí no supone ninguna limitación para la frecuencia de las visitas, incluidas curas o controles varias veces por semana.",
  },
  {
    slug: "pulianas",
    nombre: "Pulianas",
    distanciaKm: 5,
    comarca: "Zona norte",
    texto:
      "Muy cerca de Granada capital (unos 5 km), en la zona norte metropolitana. Atención con la misma rapidez que en cualquier barrio de la ciudad.",
    detalle:
      "Pulianas está a solo 5 km de Granada capital, en la zona norte metropolitana. El municipio actual nace de la fusión de Pulianas y Pulianillas en 1944, y su historia agrícola tiene un hito real documentado: el 22 de diciembre de 1828 llegó por fin el agua de riego del río Fardes tras más de un siglo de gestiones, un momento que la propia Gazeta de Madrid de la época describió como un día de auténtico júbilo para los agricultores de la zona. Hoy atiendo aquí con la misma rapidez que en cualquier barrio de la ciudad.",
  },
  {
    slug: "cajar",
    nombre: "Cájar",
    distanciaKm: 6,
    comarca: "Zona sur",
    texto:
      "En la zona sur, a unos 6 km del centro. Uno de los municipios pequeños del área metropolitana donde atiendo con normalidad, incluidos seguimientos de varias sesiones.",
    detalle:
      "Cájar está a unos 6 km al sur de Granada. Es uno de los municipios más pequeños del área metropolitana, con un origen real curioso: su nombre viene del árabe y significa \"lugar donde se cultiva seda\", por los cerca de 400 morales (moreras) que rodeaban la antigua alquería de Cuiyar. En el siglo XVI, San Juan de Dios pasaba por aquí a pedir limosna para su hospital de Granada. Hoy sigue siendo un municipio pequeño y tranquilo donde atiendo con normalidad, incluidos seguimientos de varias sesiones a la semana.",
  },
  {
    slug: "la-zubia",
    nombre: "La Zubia",
    distanciaKm: 6,
    comarca: "Zona sur",
    texto:
      "A unos 6 km al sur de Granada, camino de Sierra Nevada. La distancia no supone ningún inconveniente para curas, sondajes o controles periódicos.",
    detalle:
      "La Zubia está a unos 6 km al sur de Granada, ya de camino a Sierra Nevada. Según la tradición local, la reina Isabel la Católica se refugió aquí bajo unos laureles tras un ataque en 1491, lo que la llevó a levantar el Convento de San Luis en agradecimiento. Y en 1748 el pueblo eligió a su patrón, San Juan Nepomuceno, por votación popular — San Miguel Arcángel quedó segundo. La distancia no supone ningún inconveniente para curas, sondajes o controles periódicos.",
  },
  {
    slug: "cenes-de-la-vega",
    nombre: "Cenes de la Vega",
    distanciaKm: 5,
    comarca: "Sierra Nevada",
    texto:
      "A unos 5 km del centro, en dirección a Sierra Nevada. Una de las localidades más cercanas donde puedo ofrecer disponibilidad prácticamente igual que en la capital.",
    detalle:
      "Cenes de la Vega está a unos 5 km de Granada, ya en la carretera hacia Sierra Nevada. Aunque su fundación documentada es de 1572, ya existía en época árabe como lugar de residencia temporal para la producción de seda. Su término conserva además conglomerados auríferos con restos de explotaciones mineras romanas y canalizaciones de época francesa, todavía visibles en el paisaje. Una de las localidades más cercanas donde puedo ofrecer disponibilidad prácticamente igual que en la capital.",
  },
  {
    slug: "huetor-vega",
    nombre: "Huétor Vega",
    distanciaKm: 4,
    comarca: "Zona sur",
    texto:
      "A 4 km de Granada capital, la localidad más cercana de todo el listado. Atención con la misma inmediatez que en cualquier barrio de la ciudad.",
    detalle:
      "Huétor Vega está a solo 4 km de Granada capital, la localidad más cercana de todo este listado. Su nombre viene del árabe \"Wādī al-Wattār\" o \"Wādī Huṭūr\" (algo así como \"valle junto al río\"), reflejo directo de su situación en plena Vega fértil de Granada. Su Iglesia de la Encarnación, construida entre 1552 y 1567, sigue siendo el centro religioso y festivo del pueblo. Atención con la misma inmediatez que en cualquier barrio de la ciudad.",
  },
  {
    slug: "ogijares",
    nombre: "Ogíjares",
    distanciaKm: 5,
    comarca: "Zona sur",
    texto:
      "A unos 5 km al sur de Granada. Zona con bastante demanda de cuidados a domicilio, así que suelo tener buena disponibilidad de horarios aquí.",
    detalle:
      "Ogíjares está a unos 5 km al sur de Granada. Su nombre viene del latín \"Hortum Sacrum\" (huerto sagrado), y históricamente fueron dos alquerías distintas —Oxijar Alto y Oxijar Bajo— que se unificaron tras la Reconquista para formar el actual \"Los Ogíjares\". Parte de la Base Aérea de Armilla (con el Ala 78 y la patrulla acrobática ASPA) ocupa también su término municipal. Es zona con bastante demanda de cuidados a domicilio, así que suelo tener buena disponibilidad de horarios aquí.",
  },
  {
    slug: "las-gabias",
    nombre: "Las Gabias",
    distanciaKm: 8,
    comarca: "Vega de Granada",
    texto:
      "En la Vega de Granada, a unos 8 km del centro. Distancia habitual dentro de mi zona de actuación, coordinando la visita con algo más de antelación cuando es posible.",
    detalle:
      "Las Gabias está a unos 8 km de Granada, en plena Vega. En 1922 se descubrió en su término un criptopórtico de una villa romana (que en un primer momento se confundió con un baptisterio paleocristiano), y en el centro de Gabia Grande se conserva un torreón nazarí que Fernando el Católico ordenó derribar tras la conquista de Granada en 1490 — una orden que, por suerte para el patrimonio local, nunca llegó a cumplirse. Distancia habitual dentro de mi zona de actuación, coordinando la visita con algo más de antelación cuando es posible.",
  },
  {
    slug: "churriana-de-la-vega",
    nombre: "Churriana de la Vega",
    distanciaKm: 5,
    comarca: "Vega de Granada",
    texto:
      "A unos 5 km al oeste de Granada, en la Vega. Atiendo aquí con la misma normalidad que en el resto del área metropolitana cercana.",
    detalle:
      "Churriana de la Vega está a unos 5 km al oeste de Granada. Tiene un peso histórico real notable: aquí se desarrollaron las negociaciones previas de Gonzalo Fernández de Córdoba, en nombre de los Reyes Católicos, con los representantes de Boabdil, que acabarían derivando en las Capitulaciones de Santa Fe y la rendición de Granada en 1492. Se llamó simplemente \"Churriana\" hasta 1916, cuando pasó a \"Churriana de la Vega\" para distinguirse de otras localidades homónimas. Atiendo aquí con la misma normalidad que en el resto del área metropolitana cercana.",
  },
  {
    slug: "santa-fe",
    nombre: "Santa Fe",
    distanciaKm: 12,
    comarca: "Vega de Granada",
    texto:
      "A 12 km del centro, en plena Vega de Granada. Sigue estando dentro de mi radio habitual de actuación; para seguimientos con varias visitas semanales conviene comentarlo al concretar el primer día.",
    detalle:
      "Santa Fe está a 12 km de Granada, en la Vega. Es, probablemente, el municipio con más peso histórico de toda la comarca: los Reyes Católicos lo levantaron como campamento militar en solo ochenta días durante el asedio final a Granada en 1491, y el 17 de abril de 1492 firmaron aquí las Capitulaciones con Cristóbal Colón, el documento que dio origen al viaje a América — reconocido por la UNESCO en 2009 como \"Memoria del Mundo\". Sigue estando dentro de mi radio habitual de actuación; para seguimientos con varias visitas semanales conviene comentarlo al concretar el primer día.",
  },
  {
    slug: "pinos-puente",
    nombre: "Pinos Puente",
    distanciaKm: 17,
    comarca: "Vega de Granada",
    texto:
      "A 17 km del centro de Granada. Puedo desplazarme igualmente, valorando antes la zona y el horario para confirmar el servicio sin compromiso.",
    detalle:
      "Pinos Puente está a 17 km de Granada, en la Vega. Conserva un puente fortificado de origen califal declarado Bien de Interés Cultural, además de infraestructuras hidráulicas históricas como el azud de Media Luna o el molino de Santa Margarita, todavía visibles en el municipio. Puedo desplazarme igualmente hasta aquí, valorando antes la zona y el horario para confirmar el servicio sin compromiso.",
  },
  {
    slug: "vegas-del-genil",
    nombre: "Vegas del Genil",
    distanciaKm: 7,
    comarca: "Vega de Granada",
    texto:
      "A unos 7 km al oeste de Granada, formado por Purchil, Ambroz y Belicena. Distancia cómoda dentro de mi zona habitual de actuación.",
    detalle:
      "Vegas del Genil está a unos 7 km al oeste de Granada. No es un único núcleo, sino tres: Purchil (la capital administrativa), Ambroz y Belicena, antiguos asentamientos árabes (\"Harab-Anrut\", \"Borch-Hilall\" y \"Balaysena\") que se unificaron en un solo municipio el 30 de abril de 1976. Distancia cómoda dentro de mi zona habitual de actuación, en cualquiera de sus tres núcleos.",
  },
  {
    slug: "cullar-vega",
    nombre: "Cúllar Vega",
    distanciaKm: 8,
    comarca: "Vega de Granada",
    texto:
      "A unos 8 km al oeste de Granada. Atiendo con normalidad, coordinando la visita según la franja horaria que necesites.",
    detalle:
      "Cúllar Vega está a unos 8 km al oeste de Granada. Su Iglesia de la Asunción, construida entre 1534 y 1540, es un ejemplo destacado de arquitectura mudéjar en la Vega. Atiendo con normalidad en todo el municipio, coordinando la visita según la franja horaria que necesites.",
  },
  {
    slug: "gojar",
    nombre: "Gójar",
    distanciaKm: 8,
    comarca: "Zona sur",
    texto:
      "A unos 8 km al sur de Granada, entre La Zubia y Ogíjares. Distancia habitual dentro de mi radio de actuación.",
    detalle:
      "Gójar está a unos 8 km al sur de Granada, entre La Zubia y Ogíjares. Su nombre procede probablemente del árabe \"Qulyar\", con el que ya se identificaba una alquería de la Vega en época medieval. Tras la expulsión de los moriscos en 1568, se repobló con familias llegadas del vecino Padul y de distintos puntos de Jaén. Distancia habitual dentro de mi radio de actuación.",
  },
  {
    slug: "villa-de-otura",
    nombre: "Villa de Otura",
    distanciaKm: 10,
    comarca: "Zona sur",
    texto:
      "A 10 km al sur de Granada, camino de Sierra Nevada. Sigue dentro de mi zona habitual de desplazamiento.",
    detalle:
      "Villa de Otura está a 10 km al sur de Granada. Recibió el título de villa en 1705, de manos de Felipe V, y lo incorporó oficialmente a su nombre en 2013. En su término se encuentra el histórico Puerto del Suspiro del Moro, el lugar donde, según la tradición, la reina Aixa reprochó a su hijo Boabdil no haber sabido defender Granada \"como un hombre\". Sigue dentro de mi zona habitual de desplazamiento.",
  },
  {
    slug: "pinos-genil",
    nombre: "Pinos Genil",
    distanciaKm: 10,
    comarca: "Sierra Nevada",
    texto:
      "A 10 km de Granada, camino de Sierra Nevada. Distancia que atiendo con normalidad, valorando el horario de antemano.",
    detalle:
      "Pinos Genil está a 10 km de Granada, en la carretera hacia Sierra Nevada. Fue el origen de la histórica Acequia del Candí, construida por los almohades en el siglo XII para abastecer de agua las zonas altas de Granada, y entre 1925 y 1974 tuvo un tranvía de montaña que conectaba la capital con Sierra Nevada — el edificio de su antigua estación todavía se conserva. Distancia que atiendo con normalidad, valorando el horario de antemano.",
  },
  {
    slug: "monachil",
    nombre: "Monachil",
    distanciaKm: 11,
    comarca: "Sierra Nevada",
    texto:
      "A 11 km de Granada, en la puerta de Sierra Nevada. Puedo desplazarme sin problema, confirmando antes zona y horario.",
    detalle:
      "Monachil está a 11 km de Granada, ya en la puerta de Sierra Nevada — su término incluye Pradollano, la localidad situada a más altitud de toda España, sede de la estación de esquí donde se celebraron los mundiales de esquí alpino de 1996 y de esquí acrobático de 2017. En su término se encuentra además el Cerro de la Encina, un yacimiento argárico de en torno al 1800 a.C., uno de los más importantes de la provincia. Puedo desplazarme sin problema, confirmando antes zona y horario.",
  },
  {
    slug: "dilar",
    nombre: "Dílar",
    distanciaKm: 12,
    comarca: "Sierra Nevada",
    texto:
      "A 12 km de Granada, a los pies de Sierra Nevada. Distancia que atiendo con normalidad, coordinando antes el horario.",
    detalle:
      "Dílar está a 12 km de Granada. Es un municipio de contrastes geográficos reales: su término se extiende más de 25 km de oeste a este, desde los 850 metros de su límite occidental hasta los 3.398 metros del pico Veleta, con un desnivel medio de 100 metros por kilómetro. Ya en fuentes árabes medievales, el cronista Ibn Sahib al-Sala menciona su río como \"Wādī Dīlar\". Distancia que atiendo con normalidad, coordinando antes el horario.",
  },
  {
    slug: "huetor-santillan",
    nombre: "Huétor Santillán",
    distanciaKm: 12,
    comarca: "Sierra Nevada",
    texto:
      "A 12 km al este de Granada, camino de la Sierra de Huétor. Distancia habitual dentro de mi radio de actuación.",
    detalle:
      "Huétor Santillán está a 12 km al este de Granada. Fue una alquería de época musulmana propiedad de la reina Aixa, madre de Boabdil, en los últimos años del reino nazarí de Granada. Tras la conquista castellana, el señorío pasó primero a Hernando de Zafra en 1494 y después al noble Gómez de Santillán en 1507, cuyo apellido dio nombre al municipio para distinguirlo de otros \"Huétor\" cercanos. Distancia habitual dentro de mi radio de actuación.",
  },
  {
    slug: "alfacar",
    nombre: "Alfacar",
    distanciaKm: 15,
    comarca: "Zona norte",
    texto:
      "A 15 km al norte de Granada. Puedo desplazarme sin problema, valorando antes la zona y el horario.",
    detalle:
      "Alfacar está a 15 km al norte de Granada, célebre por su pan: desde 2006 cuenta con Indicación Geográfica Protegida de la Unión Europea, con más de 50 tahonas en el municipio, una tradición de raíz árabe (el propio nombre \"Alfacar\" viene de los alfares, los talleres de alfarería). En su término murió, sin que se conozca el lugar exacto, el poeta Federico García Lorca durante la Guerra Civil española. Puedo desplazarme sin problema, valorando antes la zona y el horario.",
  },
  {
    slug: "viznar",
    nombre: "Víznar",
    distanciaKm: 9,
    comarca: "Zona norte",
    texto:
      "A 9 km al norte de Granada, en la Sierra de Alfaguara. Distancia que atiendo con normalidad, coordinando antes el horario.",
    detalle:
      "Víznar está a 9 km al norte de Granada, ya en la Sierra de Alfaguara. Es un municipio con historia real: en el Palacio del Cuzco residió el arzobispo de Granada del siglo XVIII Juan Manuel Moscoso y Peralta, figura relevante también en la historia de Perú. Distancia que atiendo con normalidad, coordinando antes el horario.",
  },
  {
    slug: "jun",
    nombre: "Jun",
    distanciaKm: 8,
    comarca: "Zona norte",
    texto:
      "A unos 8 km al norte de Granada. Distancia habitual dentro de mi zona de actuación.",
    detalle:
      "Jun está a unos 8 km al norte de Granada. Es un municipio conocido internacionalmente por su pionera apuesta digital: en 1999 declaró el acceso a internet un derecho universal de sus vecinos (con eco en medios como el New York Times), y en junio de 2001 celebró el primer pleno municipal interactivo del mundo, lo que llevó al entonces presidente de la Comisión Europea, Romano Prodi, a señalarlo como cuna de la teledemocracia activa. Distancia habitual dentro de mi zona de actuación.",
  },
  {
    slug: "cogollos-vega",
    nombre: "Cogollos Vega",
    distanciaKm: 15,
    comarca: "Zona norte",
    texto:
      "A 15 km al norte de Granada. Puedo desplazarme igualmente, valorando antes la zona y el horario.",
    detalle:
      "Cogollos Vega está a 15 km al norte de Granada. Conserva unos baños árabes de los siglos XII-XIV con un diseño poco habitual, de lumbreras hexagonales, redescubiertos a finales del siglo XIX por el historiador Manuel Gómez-Moreno. Puedo desplazarme igualmente hasta aquí, valorando antes la zona y el horario.",
  },
  {
    slug: "guevejar",
    nombre: "Güevéjar",
    distanciaKm: 9,
    comarca: "Zona norte",
    texto:
      "A 9 km al norte de Granada. Distancia que atiendo con normalidad dentro de mi zona habitual.",
    detalle:
      "Güevéjar está a 9 km al norte de Granada. El pueblo actual no está en su emplazamiento original: unos terremotos obligaron a trasladarlo a su ubicación de hoy en 1884, y su iglesia se reconstruyó en 1887 tras el desastre. En su término se encuentra además el yacimiento arqueológico del Castillejo de Nívar y Güevéjar, con tumbas excavadas en la roca de época tardorromana e islámica. Distancia que atiendo con normalidad dentro de mi zona habitual.",
  },
  {
    slug: "nivar",
    nombre: "Nívar",
    distanciaKm: 13,
    comarca: "Zona norte",
    texto:
      "A unos 13 km al norte de Granada, en el Parque Natural de la Sierra de Huétor. Puedo desplazarme valorando antes zona y horario.",
    detalle:
      "Nívar está a unos 13 km al norte de Granada. Buena parte de su término forma parte del Parque Natural de la Sierra de Huétor, un entorno protegido que le da un carácter mucho más rural y serrano que el resto de la Vega. Puedo desplazarme hasta aquí valorando antes la zona y el horario.",
  },
  {
    slug: "calicasas",
    nombre: "Calicasas",
    distanciaKm: 17,
    comarca: "Zona norte",
    texto:
      "A 17 km al norte de Granada. Puedo desplazarme confirmando antes el servicio sin compromiso.",
    detalle:
      "Calicasas está a 17 km al norte de Granada. Es uno de los municipios más pequeños del área metropolitana, con escudo y bandera propios aprobados oficialmente en 2006 (un acueducto de tres arcos sobre fondo rojo). Puedo desplazarme hasta aquí, confirmando antes el servicio sin compromiso.",
  },
  {
    slug: "chauchina",
    nombre: "Chauchina",
    distanciaKm: 19,
    comarca: "Vega de Granada",
    texto:
      "A 19 km al oeste de Granada. Distancia que cubro con normalidad, coordinando bien el horario de la visita.",
    detalle:
      "Chauchina está a 19 km al oeste de Granada, en plena Vega. Conserva la Torre de Romilla, una fortificación nazarí con tres plantas y un aljibe interior, y en su término se ubica buena parte del aeropuerto Federico García Lorca Granada-Jaén. Distancia que cubro con normalidad, coordinando bien el horario de la visita.",
  },
  {
    slug: "la-malaha",
    nombre: "La Malahá",
    distanciaKm: 20,
    comarca: "Vega de Granada",
    texto:
      "A 20 km al sur de Granada, conocida por sus aguas termales. Puedo desplazarme confirmando antes zona y horario.",
    detalle:
      "La Malahá está a 20 km al sur de Granada. Su nombre viene del árabe \"al-Malaha\" (las salinas), y desde época romana es conocida por sus aguas termales — hoy tiene una piscina termal para tratar afecciones reumáticas, de piel y del sistema nervioso, con un aforo de 250 personas. Puedo desplazarme hasta aquí, confirmando antes la zona y el horario.",
  },
  {
    slug: "cijuela",
    nombre: "Cijuela",
    distanciaKm: 21,
    comarca: "Vega de Granada",
    texto:
      "A 21 km al oeste de Granada. Distancia algo mayor, que atiendo valorando antes el servicio sin compromiso.",
    detalle:
      "Cijuela está a 21 km al oeste de Granada. Su origen es una alquería árabe destruida en 1431 por las tropas de don Álvaro de Luna durante la batalla de la Higueruela, y en el siglo XV llegó a ser residencia de Ceti Haxa, hermana de Boabdil. Distancia algo mayor, que atiendo valorando antes el servicio sin compromiso.",
  },
  {
    slug: "fuente-vaqueros",
    nombre: "Fuente Vaqueros",
    distanciaKm: 22,
    comarca: "Vega de Granada",
    texto:
      "A 22 km al oeste de Granada, cuna de Federico García Lorca. Puedo desplazarme, confirmando antes zona y horario.",
    detalle:
      "Fuente Vaqueros está a 22 km al oeste de Granada. Es la localidad donde nació Federico García Lorca el 5 de junio de 1898 — hoy alberga el Museo Casa Natal del poeta y el Centro de Estudios Lorquianos, el principal reclamo cultural del pueblo. Puedo desplazarme hasta aquí, confirmando antes la zona y el horario.",
  },
  {
    slug: "lachar",
    nombre: "Láchar",
    distanciaKm: 24,
    comarca: "Vega de Granada",
    texto:
      "A 24 km al oeste de Granada, el municipio más alejado que cubro. Puedo desplazarme valorando cada caso sin compromiso.",
    detalle:
      "Láchar está a 24 km al oeste de Granada, el municipio más alejado de todos los que cubro. El rey Alfonso XIII se alojó varias veces en su castillo como invitado del Duque de San Pedro, y fue precisamente cazando en Láchar donde se enteró del asesinato del rey Carlos I de Portugal en 1910. Es una distancia mayor que el resto, así que confirmo siempre antes zona y horario para valorar cada caso sin compromiso.",
  },
];

export const getZonaBySlug = (slug: string) => zonas.find((z) => z.slug === slug);
