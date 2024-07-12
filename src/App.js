import React from 'react';
import { useJsApiLoader } from '@react-google-maps/api';
import { RecoilRoot } from 'recoil';
import Map from './components/map/Map.js';
import Main from './components/main/main.jsx';
import { mapOptions } from './components/map/MapConfiguration.js';
import './App.css';

function App() {
  // Load the Google Maps JavaScript API using the provided API key
  const { isLoaded } = useJsApiLoader({
    id: mapOptions.googleMapApiKey,
    googleMapsApiKey: mapOptions.googleMapApiKey,
  });

  // Create the Google Map component, passing the isLoaded state
  const googleMap = <Map isLoaded={isLoaded} />;

  return (
    // RecoilRoot is used to provide a global state management context for the app
    <RecoilRoot>
      <div className="app">
        {/* Render the Main component, passing the Google Map as a prop */}
        <Main theMap={googleMap} />
      </div>
    </RecoilRoot>
  );
}

export default App;
