// MapComponent.js
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

// Icone customizado para o marcador
const markerIcon = new L.Icon({
  iconUrl: import("leaflet/dist/images/marker-icon.png"),
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

const MapComponent = () => {
  // Latitude e longitude da localização fixa
  const position = [-23.680402373296804, -46.70800754230688]; // Exemplo: São Paulo, Brasil

  return (
    <MapContainer center={position} zoom={13} style={{ height: "350px", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position} icon={markerIcon}>
        <Popup>
          Localização Fixa: São Paulo, Brasil.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
