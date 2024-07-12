import React, { useEffect, useRef, useState } from 'react';
import { Loader } from '@googlemaps/js-api-loader'; // Import Google Maps API Loader

const Map = () => {
    const containerStyle = {
        width: '400px',
        height: '400px',
        borderRadius: '10px'
    };

    const center = {
        lat: 40.67933, // Latitude of the map center
        lng: -73.99735, // Longitude of the map center
    };

    const mapRef = useRef(null); // Reference to the map container element
    const [map, setMap] = useState(null); // State to hold the Google Maps instance

    useEffect(() => {
        // Initialize the Google Maps API loader
        const loader = new Loader({
            apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY, // Google Maps API key from environment variables
            version: '3.47',  // Specific version of the Google Maps API
        });

        // Load the Google Maps API asynchronously
        loader.load().then(() => {
            initializeMap(); // Once loaded, initialize the map
        }).catch(error => {
            console.error('Failed to load Google Maps API:', error);
        });
    }, []); // Empty dependency array ensures this effect runs only once

    // Function to initialize the Google Map
    const initializeMap = () => {
        if (!mapRef.current) return; // If mapRef is not yet initialized, return early

        // Create a new Google Maps instance
        const mapInstance = new window.google.maps.Map(mapRef.current, {
            center: center, // Set the center of the map
            zoom: 18, // Set the initial zoom level
        });

        // Add a marker to the map at the specified center
        new window.google.maps.Marker({
            position: center,
            map: mapInstance,
        });

        // Set the map instance to state
        setMap(mapInstance);
    };

    return <div ref={mapRef} style={containerStyle}></div>; // Render the map container
};

export default Map;
