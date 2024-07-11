import Map from "./components/Map";
import { useJsApiLoader } from "@react-google-maps/api";
import './App.css';
import { mapOptions } from "./components/MapConfiguration";

function App() {
    const { isLoaded } = useJsApiLoader({
    id: mapOptions.googleMapApiKey,
    googleMapsApiKey: mapOptions.googleMapApiKey
  })
  return (
    <div className="App">
     <h1>Yo</h1>
     <Map isLoaded = {isLoaded} />
    </div>
  );
}

export default App;
