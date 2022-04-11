import { GoogleMap, 
        LoadScript,
         Marker, 
         InfoWindow } from '@react-google-maps/api';
         import { useState } from 'react';
import '../styles/Map.css'

import React from 'react';

const Map = (props) => {

    // set mao defaults
    const mapStyles = {        
        // height: "100vh",
        height: "40vh",
        width: "70%"};
      
      const defaultCenter = {
        lat: 40.460330,
        lng: -74.360970,
      }
      // hardcode locations with lat and long 
      const locations = [
        {
          name: props.name,
          location: { 
            lat:parseFloat(props.lat),
            lng: parseFloat(props.lon)
          },
        },
     
      ];

      // create useState for selected item 
      const [ selected, setSelected ] = useState({});
  
        const onSelect = item => {
        setSelected(item);
    }
    return (
        <LoadScript
       googleMapsApiKey='API-KEY'>
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
    );
};

export default Map;