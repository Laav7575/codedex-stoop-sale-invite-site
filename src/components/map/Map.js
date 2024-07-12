import React, { useEffect, useRef, useState } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

const Map = () => {
    const containerStyle = {
        width: '400px',
        height: '400px',
        borderRadius: '10px'
    };

    const center = {
        lat: 40.67933, 
        lng: -73.99735, 
    };

    const mapRef = useRef(null);
    const [map, setMap] = useState(null);

    useEffect(() => {
        const loader = new Loader({
            apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
            version: '3.47', 
        });

        loader.load().then(() => {
            initializeMap();
        }).catch(error => {
        });
    }, []);

    const initializeMap = () => {
        if (!mapRef.current) return;

        const mapInstance = new window.google.maps.Map(mapRef.current, {
            center: center,
            zoom: 18,
        });

        new window.google.maps.Marker({
            position: center,
            map: mapInstance,
        });

        setMap(mapInstance);
    };

    return <div ref={mapRef} style={containerStyle}></div>;
};

export default Map;
