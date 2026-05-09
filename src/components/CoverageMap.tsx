import { MapContainer, TileLayer, CircleMarker, Tooltip, Circle } from "react-leaflet";
import "leaflet/dist/leaflet.css";

type Point = { name: string; lat: number; lng: number };

const points: Point[] = [
  { name: "Granada capital", lat: 37.1773, lng: -3.5986 },
  { name: "Armilla", lat: 37.1431, lng: -3.6219 },
  { name: "Maracena", lat: 37.2069, lng: -3.6431 },
  { name: "Albolote", lat: 37.2310, lng: -3.6498 },
  { name: "Atarfe", lat: 37.2244, lng: -3.6886 },
  { name: "Peligros", lat: 37.2206, lng: -3.6206 },
  { name: "Pulianas", lat: 37.2169, lng: -3.6094 },
  { name: "Cájar", lat: 37.1389, lng: -3.5750 },
  { name: "La Zubia", lat: 37.1278, lng: -3.5833 },
  { name: "Cenes de la Vega", lat: 37.1647, lng: -3.5536 },
  { name: "Huétor Vega", lat: 37.1494, lng: -3.5733 },
  { name: "Ogíjares", lat: 37.1336, lng: -3.6028 },
  { name: "Las Gabias", lat: 37.1333, lng: -3.6722 },
  { name: "Churriana de la Vega", lat: 37.1503, lng: -3.6444 },
  { name: "Santa Fe", lat: 37.1881, lng: -3.7150 },
  { name: "Pinos Puente", lat: 37.2533, lng: -3.7611 },
];

const CoverageMap = () => {
  const center: [number, number] = [37.1773, -3.6200];
  const navy = "hsl(224, 50%, 32%)";
  const green = "hsl(152, 65%, 38%)";
  return (
    <div className="overflow-hidden rounded-[2rem] border border-border/60 shadow-card">
      <MapContainer
        center={center}
        zoom={11}
        scrollWheelZoom={false}
        style={{ height: "480px", width: "100%" }}
        aria-label="Mapa de zonas de cobertura del enfermero a domicilio en Granada"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Circle
          center={center}
          radius={14000}
          pathOptions={{ color: "hsl(var(--brand-green))", fillColor: "hsl(var(--brand-green))", fillOpacity: 0.08, weight: 1 }}
        />
        {points.map((p) => (
          <CircleMarker
            key={p.name}
            center={[p.lat, p.lng]}
            radius={8}
            pathOptions={{
              color: "hsl(var(--brand-navy))",
              fillColor: "hsl(var(--brand-green))",
              fillOpacity: 0.9,
              weight: 2,
            }}
          >
            <Tooltip direction="top" offset={[0, -6]} opacity={1} permanent={false}>
              <strong>{p.name}</strong>
            </Tooltip>
          </CircleMarker>
        ))}
      </MapContainer>
    </div>
  );
};

export default CoverageMap;
