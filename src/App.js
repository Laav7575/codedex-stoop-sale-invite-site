import Map from "./components/map/Map.js";
import { useJsApiLoader } from "@react-google-maps/api";
import './App.css';
import Main from "./components/main/main.jsx";
import { mapOptions } from "./components/map/MapConfiguration.js";


function App() {
  const { isLoaded } = useJsApiLoader({
    id: mapOptions.googleMapApiKey,
    googleMapsApiKey: mapOptions.googleMapApiKey
  })

  const googleMap = <Map isLoaded = {isLoaded} />

  return (
    <div className="App">
      <Main theMap={googleMap}/>
      
    </div>
    
  );

}

export default App;
