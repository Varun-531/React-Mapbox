import './App.css';
import React,{useState} from 'react';
import Map from 'react-map-gl';
import GetGeoLocation from './components/GetGeoLocation';

function App() {
  const [viewport, setViewport] = useState({
    latitude: 45.4211,
    longitude: -75.6903,
    width: '100vw',
    height: '100vh',
    zoom: 10
  });
  const location = GetGeoLocation();
  console.log('====================================');
  console.log(location.loaded ? location.coordinates.lat : "Loading...");
  console.log('====================================');
  return (
    <Map className = "map"
    // mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      mapboxAccessToken="pk.eyJ1IjoidmFydW4yMjIyIiwiYSI6ImNsdDc0YTZ4YTBndjAyaXFyYTV6bzgzdzQifQ.W8UurXXits4skBu79nTH7A"
      initialViewState={{
        longitude: location.loaded ? location.coordinates.lng : 82.7528,
        latitude: location.loaded ? location.coordinates.lat : 16.9891,
        // longitude: 82.7528,
        // latitude:  16.9891,
        zoom: 14
      }}
      style={{width: "100vw", height: "100vh"}}
      mapStyle="mapbox://styles/mapbox/streets-v9"
    />
  );
}

export default App;
