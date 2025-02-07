import React, { useCallback, useEffect, useRef, useState } from 'react';
import { LatLngExpression } from 'leaflet';
import appConfig from '../AppConfig';
import MapIssLocation from './MapIssLocation';
import LocationInfo from './LocationInfo';
import styled from 'styled-components';

const Container = styled.div(() => ({
    position: 'relative',
}));

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
        <Container>
            <MapIssLocation currentLocation={currentLocation} />
            <LocationInfo
                lastUpdateTime={lastUpdateTime}
                latitude={currentLocation ? currentLocation[0] : undefined}
                longitude={currentLocation ? currentLocation[1] : undefined}
                onRefresh={onRefresh}
            />
        </Container>
    );
};

export default MapConatiner;
