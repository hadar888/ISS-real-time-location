import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { LatLngExpression } from 'leaflet';

const MapComponent = () => {
  const position: LatLngExpression = [0, 0];

  return (
    <MapContainer center={position} zoom={3} style={{ height: '100vh' }}>
      <TileLayer url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={position} />
    </MapContainer>
  );
};

export default MapComponent;
