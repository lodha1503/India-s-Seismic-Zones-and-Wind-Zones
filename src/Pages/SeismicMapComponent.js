import React, { useEffect, useState } from 'react';
import esriConfig from '@arcgis/core/config';
import Map from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';
import FeatureLayer from '@arcgis/core/layers/FeatureLayer';
import GraphicsLayer from '@arcgis/core/layers/GraphicsLayer';

import { search } from './SeismicSearchService'; // Import the search function
import { API_KEY } from './config';


const SeismicMapComponent =() => {

  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [view, setView] = useState(null); 
  const [featureLayer, setFeatureLayer] = useState(null); 
  const [graphicsLayer, setGraphicsLayer] = useState(null);




  useEffect(() => {
    esriConfig.apiKey = API_KEY;
    const map = new Map({
      basemap: 'streets-vector',
    });

    const seismicZonesUrl =
      'https://gis-dm.ndma.gov.in/server/rest/services/India/Earthquake/MapServer';
    const e2_url =
      'https://gis-dm.ndma.gov.in/server/rest/services/India/Earthquake/MapServer/6';
    const e3_url =
    'https://gis-dm.ndma.gov.in/server/rest/services/India/Earthquake/MapServer/5';
    const e4_url =
    'https://gis-dm.ndma.gov.in/server/rest/services/India/Earthquake/MapServer/4';
    const e5_url='https://gis-dm.ndma.gov.in/server/rest/services/India/Earthquake/MapServer/3';

 
    // const newFeatureLayer1 = new FeatureLayer({
    //   url: seismicZonesUrl
    // });
    const newFeatureLayer2 = new FeatureLayer({
      url: e2_url,
    });
    const newFeatureLayer3 = new FeatureLayer({
      url:e3_url
    });
    const newFeatureLayer4 = new FeatureLayer({
      url: e4_url
    });
    const newFeatureLayer5 = new FeatureLayer({
      url: e5_url,
    });
   
    
    // map.add(newFeatureLayer1);
    map.add(newFeatureLayer2);
    map.add(newFeatureLayer3);
    map.add(newFeatureLayer4);
    map.add(newFeatureLayer5);

    const mapView = new MapView({
      container: 'map-container',
      map: map,
      center: [81.2090, 20.6139],
      zoom: 3.3,
    });

    // setFeatureLayer(newFeatureLayer1); 
    setFeatureLayer(newFeatureLayer2); 
    setFeatureLayer(newFeatureLayer3); 
    setFeatureLayer(newFeatureLayer4); 
    setFeatureLayer(newFeatureLayer5); 

    setView(mapView);
    const graphicsLayer = new GraphicsLayer();
    map.add(graphicsLayer);
    setGraphicsLayer(graphicsLayer);

    return () => {
      mapView.destroy();
    };
  }, []);
  

  var result;
  const handleSearch = async () => {
    try {
      result = await search(searchText, view, setSearchResults, graphicsLayer, featureLayer);
      
      if (result) {
        console.log("Result value is ",result);
        
        
      } else {
        console.error('Please enter a place inside India');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };


  
  
  


  return (
    <div>
      <div>
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Enter a location"
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      

      <div id="map-container" style={{ height: '100vh', width: '100%' }}></div>
    </div>
  );
};

export default SeismicMapComponent;