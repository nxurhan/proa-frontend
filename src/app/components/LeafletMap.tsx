"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

delete (L.Icon.Default as any).prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

interface Measurement {
  long_name: string;
  unit: string;
  value: number;
  timestamp: string;
}

interface WeatherStation {
  id: number;
  ws_name: string;
  site: string;
  portfolio: string;
  state: string;
  latitude: number;
  longitude: number;
  latestMeasurements: Measurement[];
}

export default function LeafletMap({
  stations,
}: {
  stations: WeatherStation[];
}) {
  return (
    <MapContainer
      center={[-25.2744, 133.7751]}
      zoom={5}
      style={{ height: "100vh", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {stations.length > 0 ? (
        stations.map((station) => (
          <Marker
            key={station.id}
            position={[station.latitude, station.longitude]}
          >
            <Popup>
              <strong>Station: {station.ws_name}</strong>
              <br />
              Site: {station.site}
              <br />
              Portfolio: {station.portfolio}
              <br />
              <br />
              <hr />
              <br />
              <strong>Measurements:</strong>
              <ul style={{ padding: 0, listStyle: "none" }}>
                {station.latestMeasurements?.map((m: any, i: number) => (
                  <>
                    <li key={i}>
                      {m.long_name}: {m.value} {m.unit}
                      <br />
                      {new Date(m.timestamp).toLocaleString()}
                    </li>
                    <br />
                  </>
                ))}
              </ul>
            </Popup>
          </Marker>
        ))
      ) : (
        <p>No stations found</p>
      )}
    </MapContainer>
  );
}
