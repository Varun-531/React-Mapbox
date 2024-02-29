import './App.css';
import React,{useState} from 'react';
import Map from 'react-map-gl';

function App() {
  const [viewport, setViewport] = useState({
    latitude: 45.4211,
    longitude: -75.6903,
    width: '100vw',
    height: '100vh',
    zoom: 10
  });
  return (
    <Map
      mapboxAccessToken="pk.eyJ1IjoidmFydW4yMjIyIiwiYSI6ImNsdDc0YTZ4YTBndjAyaXFyYTV6bzgzdzQifQ.W8UurXXits4skBu79nTH7A"
      initialViewState={{
        longitude: 82.2475,
        latitude:  16.9891,
        zoom: 14
      }}
      style={{width: "100vw", height: "100vh"}}
      mapStyle="mapbox://styles/mapbox/streets-v9"
    />
  );
}

export default App;
