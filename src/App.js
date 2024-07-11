import Map from "./components/Map";
import { useJsApiLoader } from "@react-google-maps/api";
import './App.css';
import Main from "./components/main/main.jsx";
import { mapOptions } from "./components/MapConfiguration";

function App() {
    const { isLoaded } = useJsApiLoader({
    id: mapOptions.googleMapApiKey,
    googleMapsApiKey: mapOptions.googleMapApiKey
  })
  return (
    <div className="App">
      <Main />
     <Map isLoaded = {isLoaded} />
    </div>
  );

}


export default App;
