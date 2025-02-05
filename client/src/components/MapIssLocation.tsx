import React from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import { LatLngExpression } from 'leaflet';

interface MapIssLocationProps {
  currentLocation: LatLngExpression;
}

const MapIssLocation = (props: MapIssLocationProps) => {
  const { currentLocation } = props;

  return (
    <MapContainer center={[0, 0]} zoom={3} style={{ height: '100vh' }}>
      <TileLayer url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {currentLocation && <Marker position={currentLocation} />}
    </MapContainer>
  );
};

export default MapIssLocation;
