// Contenido real por localidad para /zonas-cobertura — no es una plantilla
// con el nombre cambiado: cada una lleva su distancia real (calculada a
// partir de las mismas coordenadas que ya usa CoverageMap.tsx, en línea
// recta desde el centro de Granada) y su zona real del área metropolitana,
// dato verificable, no inventado.

export interface Zona {
  slug: string;
  nombre: string;
  distanciaKm: number;
  comarca: "Zona sur" | "Zona norte" | "Vega de Granada" | "Granada capital";
  texto: string;
}

export const zonas: Zona[] = [
  {
    slug: "granada-capital",
    nombre: "Granada capital",
    distanciaKm: 0,
    comarca: "Granada capital",
    texto:
      "Es donde vivo y donde atiendo la mayoría de los servicios: cualquier barrio de la ciudad, de Zaidín a Realejo o Chana, está dentro de mi radio de actuación habitual, normalmente con posibilidad de visita el mismo día.",
  },
  {
    slug: "armilla",
    nombre: "Armilla",
    distanciaKm: 4.3,
    comarca: "Zona sur",
    texto:
      "A poco más de 4 km del centro de Granada, es una de las localidades donde más visitas hago fuera de la capital — tiempos de desplazamiento cortos, así que puedo encajar curas o controles sin que la distancia sea un problema para la frecuencia del servicio.",
  },
  {
    slug: "maracena",
    nombre: "Maracena",
    distanciaKm: 5.1,
    comarca: "Zona norte",
    texto:
      "A unos 5 km al norte de Granada. Atiendo aquí con la misma disponibilidad que en la capital, incluidos seguimientos con varias visitas por semana para curas o pautas de medicación.",
  },
  {
    slug: "albolote",
    nombre: "Albolote",
    distanciaKm: 7.5,
    comarca: "Zona norte",
    texto:
      "A unos 7,5 km del centro, en la zona norte del área metropolitana. Coordino la visita según la franja horaria que necesites, igual que en cualquier otra localidad cercana a Granada.",
  },
  {
    slug: "atarfe",
    nombre: "Atarfe",
    distanciaKm: 9.5,
    comarca: "Vega de Granada",
    texto:
      "En la Vega de Granada, a unos 9,5 km del centro. Es una distancia que atiendo con normalidad, valorando previamente el horario para ajustar bien la ruta del día.",
  },
  {
    slug: "peligros",
    nombre: "Peligros",
    distanciaKm: 5.2,
    comarca: "Zona norte",
    texto:
      "A poco más de 5 km al norte de la capital. Una de las localidades donde el desplazamiento no supone ninguna limitación para la frecuencia de las visitas.",
  },
  {
    slug: "pulianas",
    nombre: "Pulianas",
    distanciaKm: 4.5,
    comarca: "Zona norte",
    texto:
      "Muy cerca de Granada capital (unos 4,5 km), en la zona norte metropolitana. Atención con la misma rapidez que en cualquier barrio de la ciudad.",
  },
  {
    slug: "cajar",
    nombre: "Cájar",
    distanciaKm: 4.8,
    comarca: "Zona sur",
    texto:
      "En la zona sur, a menos de 5 km del centro. Uno de los municipios pequeños del área metropolitana donde atiendo con normalidad, incluidos seguimientos de varias sesiones.",
  },
  {
    slug: "la-zubia",
    nombre: "La Zubia",
    distanciaKm: 5.7,
    comarca: "Zona sur",
    texto:
      "A unos 5,7 km al sur de Granada, camino de Sierra Nevada. La distancia no supone ningún inconveniente para curas, sondajes o controles periódicos.",
  },
  {
    slug: "cenes-de-la-vega",
    nombre: "Cenes de la Vega",
    distanciaKm: 4.2,
    comarca: "Zona sur",
    texto:
      "A poco más de 4 km del centro, en dirección a Sierra Nevada. Una de las localidades más cercanas donde puedo ofrecer disponibilidad prácticamente igual que en la capital.",
  },
  {
    slug: "huetor-vega",
    nombre: "Huétor Vega",
    distanciaKm: 3.8,
    comarca: "Zona sur",
    texto:
      "Es la localidad más cercana a Granada capital de todo el listado, a menos de 4 km. Atención con la misma inmediatez que en cualquier barrio de la ciudad.",
  },
  {
    slug: "ogijares",
    nombre: "Ogíjares",
    distanciaKm: 4.9,
    comarca: "Zona sur",
    texto:
      "A unos 5 km al sur de Granada. Zona con bastante demanda de cuidados a domicilio, así que suelo tener buena disponibilidad de horarios aquí.",
  },
  {
    slug: "las-gabias",
    nombre: "Las Gabias",
    distanciaKm: 8.2,
    comarca: "Vega de Granada",
    texto:
      "En la Vega de Granada, a unos 8 km del centro. Distancia habitual dentro de mi zona de actuación, coordinando la visita con algo más de antelación cuando es posible.",
  },
  {
    slug: "churriana-de-la-vega",
    nombre: "Churriana de la Vega",
    distanciaKm: 5.0,
    comarca: "Vega de Granada",
    texto:
      "A unos 5 km al oeste de Granada, en la Vega. Atiendo aquí con la misma normalidad que en el resto del área metropolitana cercana.",
  },
  {
    slug: "santa-fe",
    nombre: "Santa Fe",
    distanciaKm: 10.4,
    comarca: "Vega de Granada",
    texto:
      "A poco más de 10 km del centro, ya en plena Vega de Granada. Sigue estando dentro de mi radio habitual de actuación; para seguimientos con varias visitas semanales conviene comentarlo al concretar el primer día.",
  },
  {
    slug: "pinos-puente",
    nombre: "Pinos Puente",
    distanciaKm: 16.7,
    comarca: "Vega de Granada",
    texto:
      "La localidad más alejada de las que atiendo con regularidad, a unos 17 km del centro de Granada. Puedo desplazarme igualmente, valorando antes la zona y el horario para confirmar el servicio sin compromiso.",
  },
];

export const getZonaBySlug = (slug: string) => zonas.find((z) => z.slug === slug);
