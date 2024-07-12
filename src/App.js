import React from 'react';
import { useJsApiLoader } from '@react-google-maps/api';
import { RecoilRoot } from 'recoil';
import Map from './components/map/Map.js';
import Main from './components/main/main.jsx';
import { mapOptions } from './components/map/MapConfiguration.js';
import './App.css';


function App() {
  const { isLoaded } = useJsApiLoader({
    id: mapOptions.googleMapApiKey,
    googleMapsApiKey: mapOptions.googleMapApiKey,
  });

  const googleMap = <Map isLoaded={isLoaded} />;

  return (
    <RecoilRoot>
      <div className="App">
        <Main theMap={googleMap} />
      </div>    
    </RecoilRoot>
  );
}

export default App;
