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
}

export default function MapClient() {
  const [stations, setStations] = useState<WeatherStation[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/weather-stations")
      .then((res) => res.json())
      .then((data) => {
        console.log("Weather stations from API:", data);
        setStations(data);
      });
  }, []);

  return <LeafletMap stations={stations} />;
}
