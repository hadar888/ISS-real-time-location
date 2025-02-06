import React, { useCallback, useEffect, useRef, useState } from 'react';
import { LatLngExpression } from 'leaflet';
import appConfig from '../AppConfig';
import MapIssLocation from './MapIssLocation';
import RefreshLocaion from './RefreshLocaion';

const intervalDuration = 15000;

const MapConatiner = () => {
    const [currentLocation, setCurrentLocation] = useState<LatLngExpression | undefined>();
    const [lastUpdateTime, setLastUpdateTime] = useState<number | undefined>();
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const getCurrentIssLocation = useCallback(() => {
        fetch(appConfig.serverUrl)
            .then((response) => response.json())
            .then((data) => {
                setCurrentLocation([data.iss_position.latitude, data.iss_position.longitude]);
                setLastUpdateTime(data.timestamp * 1000);
            })
            .catch((error) => {
                console.error('Error fetching ISS location:', error);
            });
    }, []);

    useEffect(() => {
        getCurrentIssLocation();
        intervalRef.current = setInterval(getCurrentIssLocation, intervalDuration);
        return () => intervalRef.current && clearInterval(intervalRef.current);
    }, []);

    const onRefresh = () => {
        intervalRef.current && clearInterval(intervalRef.current);
        getCurrentIssLocation();
        intervalRef.current = setInterval(getCurrentIssLocation, intervalDuration);
    };

    return (
        <>
            <MapIssLocation currentLocation={currentLocation} />
            <RefreshLocaion onClick={onRefresh} />
            {lastUpdateTime && <div> {new Date(lastUpdateTime).toDateString() + " "
                + new Date(lastUpdateTime).toLocaleTimeString()} </div>}
        </>
    );
};

export default MapConatiner;
