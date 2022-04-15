import { GoogleMap, 
        LoadScript,
         Marker, 
         InfoWindow } from '@react-google-maps/api';
         import { useState } from 'react';
import '../styles/Map.css'
import locations from '../services/mapCall'

import React from 'react';

const Map = (props) => {

    // set mao defaults
    const mapStyles = {        
        // height: "100vh",
        height: "70vh",
        width: "100%"};
      
      const defaultCenter = {
        lat: 40.460330,
        lng: -74.360970,
      }


      // create useState for selected item 
      const [ selected, setSelected ] = useState({});
  
        const onSelect = item => {
        setSelected(item);
    }

    return (
      <div className="map">
        <LoadScript
       googleMapsApiKey={ process.env.REACT_APP_GOOGLE_KEY }>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={10}
          center={defaultCenter}
          
        >
            {locations?
            locations.map(item => {
              return (
              <Marker key={item.name} position={item.location} onClick={() => onSelect(item)}/>
              )
            }): defaultCenter
         }
         {
            selected.location && 
            (
              <InfoWindow
              position={selected.location}
              clickable={true}
              onCloseClick={() => setSelected({})}
            >
              <p>{selected.name}</p>
            </InfoWindow>
            )
         }
        </GoogleMap>
     </LoadScript>
     </div>
    );
};

export default Map;