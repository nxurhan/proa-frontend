"use client";

import { useEffect, useState } from "react";
import LeafletMap from "./LeafletMap";
import StateSelect from "./Select";

interface WeatherStation {
  id: number;
  ws_name: string;
  site: string;
  portfolio: string;
  state: string;
  latitude: number;
  longitude: number;
  latestMeasurements: {
    long_name: string;
    unit: string;
    value: number;
    timestamp: string;
  }[];
}

const states = ["ALL", "NSW", "VIC", "SA", "QLD"];

export default function MapClient() {
  const [stations, setStations] = useState<WeatherStation[]>([]);
  const [selectedState, setSelectedState] = useState<string>("ALL");

  useEffect(() => {
    const url = `http://localhost:3000/weather-stations/by-state?state=${selectedState.toUpperCase()}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(`Stations for ${selectedState}:`, data);
        setStations(data);
      })
      .catch((err) => {
        console.error("Error fetching stations:", err);
        setStations([]);
      });
  }, [selectedState]);

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <aside
        style={{
          width: "250px",
          padding: "1rem",
          background: "#f4f4f4",
          color: "black",
          borderRight: "1px solid #ccc",
        }}
      >
        <StateSelect
          selected={selectedState}
          onChange={setSelectedState}
          options={states}
        />
      </aside>

      <main style={{ flex: 1 }}>
        <LeafletMap stations={stations} />
      </main>
    </div>
  );
}
