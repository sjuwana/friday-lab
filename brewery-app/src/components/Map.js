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
        height: "70vh",
        width: "100%"};
      
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
        {
          name: "JAGS",
          location: { 
            lat: 40.460330,
            lng: -74.360970
          },
        },
        {
          name: "JAGS 2",
          location: { 
            lat: 41.3797,
            lng: -74.1682
          },
        },
        {
          name: "JAGS 3",
          location: { 
            lat: 40.4055,
            lng: -74.1915
          },
        }
     
      ];

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