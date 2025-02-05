import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import { LatLngExpression } from 'leaflet';
import appConfig from '../AppConfig';
import MapIssLocation from './MapIssLocation';
import CurrentLocaionButton from './CurrentLocaionButton';

const intervalDuration = 15000;

const MapConatiner = () => {
    const [currentLocation, setCurrentLocation] = useState<LatLngExpression | undefined>();

    useEffect(() => {
        const intervalId = setInterval(() => {
            getCurrentIssLocation();
        }, intervalDuration);

        return () => clearInterval(intervalId);
    }, [])

    const getCurrentIssLocation = () => {
        fetch(appConfig.serverUrl)
            .then((response) => response.json())
            .then((data) => {
                setCurrentLocation([data.iss_position.latitude, data.iss_position.longitude]);
            })
            .catch((error) => {
                console.error('Error fetching ISS location:', error);
            });
    }

    return (
        <>
            <MapIssLocation currentLocation={currentLocation} />
            <CurrentLocaionButton onClick={getCurrentIssLocation} />
        </>
    );
};

export default MapConatiner;
