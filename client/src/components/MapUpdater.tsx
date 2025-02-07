import React, { useEffect } from "react";
import { LatLngExpression } from "leaflet";
import { useMap } from "react-leaflet";

interface MapIssLocationProps {
    currentLocation: LatLngExpression;
}

const MapUpdater = (props: MapIssLocationProps) => {
    const { currentLocation } = props;
    const map = useMap();

    useEffect(() => {
        if (currentLocation) {
            map.setView(currentLocation, map.getZoom());
        }
    }, [currentLocation, map]);

    return null;
};

export default MapUpdater;
