/* eslint-disable @typescript-eslint/no-require-imports */
"use client";

import { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";
import { landingMapLocations } from "@/constants/mapLocations";

const Map = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center h-full">
        Loading map...
      </div>
    );
  }

  // Import components only after client-side hydration
  const { MapContainer, TileLayer, Marker, Popup } = require("react-leaflet");
  const L = require("leaflet");

  const defaultPosition: [number, number] = [
    30.023312983648676, 31.248650471163657,
  ];

  // Create custom icon
  const customIcon = new L.Icon({
    iconUrl: "/assets/marker-trans.gif",
    iconSize: [40, 40],
  });

  return (
    <MapContainer
      center={defaultPosition}
      zoom={13}
      scrollWheelZoom={false}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {landingMapLocations.map(({ title, position }) => (
        <Marker key={title} position={position} icon={customIcon}>
          <Popup>{title}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
