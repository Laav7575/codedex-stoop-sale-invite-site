const GOOGLE_MAPS_API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
console.log('Google Maps API Key:', GOOGLE_MAPS_API_KEY);

export const mapOptions = {
    googleMapApiKey: GOOGLE_MAPS_API_KEY,
};
