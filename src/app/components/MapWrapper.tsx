"use client";

import { useEffect, useState } from "react";
import LeafletMap from "./LeafletMap";

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
    const url =
      selectedState === "ALL"
        ? "http://localhost:3000/weather-stations"
        : `http://localhost:3000/weather-stations/by-state?state=${selectedState}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(`Stations for ${selectedState}:`, data);
        setStations(data);
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
        <h2>Filters:</h2>
        <br />
        <h3>Filter by State</h3>
        <select
          value={selectedState}
          onChange={(e) => setSelectedState(e.target.value)}
          style={{
            width: "100%",
            padding: "0.5rem",
            marginBottom: "1rem",
            color: "black",
            border: "1px solid",
          }}
        >
          {states.map((state) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </select>
      </aside>

      <main style={{ flex: 1 }}>
        <LeafletMap stations={stations} />
      </main>
    </div>
  );
}
