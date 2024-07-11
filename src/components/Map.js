import React from 'react';
import { GoogleMap, useLoadScript } from '@react-google-maps/api';
import { mapOptions } from './MapConfiguration';

const Map = () => {
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: mapOptions.googleMapApiKey,
    });

    const containerStyle = {
        width: '400px',
        height: '400px',
    };

    const center = {
        lat: 40.67933,
        lng: -73.99735,
    };

    if (loadError) {
        return <div>Error loading maps</div>;
    }

    return (
        isLoaded && (
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={18}
            ></GoogleMap>
        )
    );
};

export default Map;
