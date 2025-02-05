import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import { LatLngExpression } from 'leaflet'; 
import appConfig from '../AppConfig';

const intervalDuration = 15000;

const MapComponent = () => {
  const [currentLocation, setCurrentLocation] = useState<LatLngExpression | undefined>();

  useEffect(() => {
    const intervalId = setInterval(() => {
      fetch(appConfig.serverUrl)
        .then((response) => response.json())
        .then((data) => {
          setCurrentLocation([data.iss_position.latitude, data.iss_position.longitude]);
        })
        .catch((error) => {
          console.error('Error fetching ISS location:', error);
        });
    }, intervalDuration);

    return () => clearInterval(intervalId);
  }, [])

  return (
    <MapContainer center={[0, 0]} zoom={3} style={{ height: '100vh' }}>
      <TileLayer url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {currentLocation && <Marker position={currentLocation} />}
    </MapContainer>
  );
};

export default MapComponent;
