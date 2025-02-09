import { useEffect, useRef } from 'react';
import { useMap } from 'react-leaflet';
import L from 'leaflet';
import * as LeafletTerminator from 'leaflet-terminator';

const intervalDuration = 60000;

const DayNightLayer = () => {
    const map = useMap();
    const terminatorRef = useRef<L.Layer | null>(null);

    const updateTerminator = () => {
        if (terminatorRef.current) {
            map.removeLayer(terminatorRef.current);
        }

        const newTerminator = new LeafletTerminator();
        newTerminator.addTo(map);
        terminatorRef.current = newTerminator;
    };

    useEffect(() => {
        updateTerminator();
        const interval = setInterval(updateTerminator, intervalDuration);

        return () => {
            clearInterval(interval);
            if (terminatorRef.current) {
                map.removeLayer(terminatorRef.current);
            }
        };
    }, [map]);

    return null;
};

export default DayNightLayer;
