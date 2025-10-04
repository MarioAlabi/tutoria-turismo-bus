import { MapContainer, TileLayer, Marker, Polyline, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

export default function BusMap({ route }) {
  if (!route) return null;

  return (
    <MapContainer
      center={route.path[0]}
      zoom={13}
      style={{ height: "400px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />

      {/* Dibujar la línea de la ruta */}
      <Polyline positions={route.path} color="blue" />

      {/* Marcadores con nombres de parada y recomendación */}
      {route.path.map((pos, index) => (
        <Marker key={index} position={pos}>
          <Popup>
            {route.stopNames && route.stopNames[index] 
              ? route.stopNames[index] 
              : `Parada ${index + 1}`}

            {/* Mostrar recomendación solo en la última parada */}
            {index === route.path.length - 1 && (
              <div style={{ marginTop: "5px", fontWeight: "bold", color: "green" }}>
                🚏 {route.recommendation}
              </div>
            )}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
