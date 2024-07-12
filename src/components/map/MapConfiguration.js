const GOOGLE_MAPS_API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY; // Retrieve Google Maps API key from environment variables
//console.log('Google Maps API Key:', GOOGLE_MAPS_API_KEY); // Log the API key to the console for debugging

export const mapOptions = {
    googleMapApiKey: GOOGLE_MAPS_API_KEY, // Export the API key as part of mapOptions object
};
