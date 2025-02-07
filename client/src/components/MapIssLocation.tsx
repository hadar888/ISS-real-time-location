import React from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import { LatLngExpression } from 'leaflet';
import MapUpdater from './MapUpdater';

interface MapIssLocationProps {
  currentLocation: LatLngExpression;
}

const MapIssLocation = (props: MapIssLocationProps) => {
  const { currentLocation } = props;

  return (
    <MapContainer center={[0, 0]} zoom={2} style={{ height: '97vh' }}>
      <TileLayer url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {currentLocation && <Marker position={currentLocation} />}
      <MapUpdater currentLocation={currentLocation} />
    </MapContainer>
  );
};

export default MapIssLocation;
