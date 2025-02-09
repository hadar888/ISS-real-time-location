import React from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import { divIcon, LatLngExpression } from 'leaflet';
import MapUpdater from './MapUpdater';
import { LiaSpaceShuttleSolid } from "react-icons/lia";
import ReactDOMServer from 'react-dom/server';
import DayNightLayer from './DayNightLayer';

const SpaceshipIcon = divIcon({
  className: '',
  html: ReactDOMServer.renderToString(<LiaSpaceShuttleSolid size={32} />),
});

interface MapIssLocationProps {
  currentLocation: LatLngExpression;
}

const MapIssLocation = (props: MapIssLocationProps) => {
  const { currentLocation } = props;

  return (
    <MapContainer center={[0, 0]} zoom={2} style={{ height: '97vh' }}>
      <TileLayer url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {currentLocation && <Marker position={currentLocation} icon={SpaceshipIcon}/>}
      <DayNightLayer />
      <MapUpdater currentLocation={currentLocation} />
    </MapContainer>
  );
};

export default MapIssLocation;
