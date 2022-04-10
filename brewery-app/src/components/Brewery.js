
import { useParams } from "react-router-dom"
import { useState, useEffect } from 'react';
import { breweryData } from '../services/constants';
import React from 'react';
import Email from "./Email";
import '../styles/Brewery.css'
import Map from "./Map";


const Brewery = () => {
    const { name } = useParams();
    const [breweries, setBreweries] = useState ({})

    useEffect(()=>{
        handlegetBrewery();
     },[])
     const handlegetBrewery = ()=>{
        breweryData(name).then(res=>{
            const brewery = res.filter(item=> item.name === name )
             setBreweries(brewery[0]) 
            //  console.log('name',brewery)
           })}

//    const brewery = props[id];
    return (
        <div className="brewery">
           
            <div className="brewery-details">
                { breweries ?
                <table>
                    <thead>
                        <tr>
                            <th>NAME :</th>
                            <td>{breweries.name}</td>
                        </tr>
                        <tr>
                            <th>TYPE :</th>
                            <td>{breweries.brewery_type}</td>
                        </tr>
                        <tr>
                            <th>CITY :</th>
                            <td>{breweries.city}</td>
                        </tr>
                        <tr>
                            <th>STATE :</th>
                            <td>{breweries.state}</td>
                        </tr>
                        <tr>
                            <th>P.CODE :</th>
                            <td>{breweries.postal_code}</td>
                        </tr>
                        <tr>
                            <th>COUNTRY :</th>
                            <td>+1{breweries.phone}</td>
                        </tr>
                        <tr>
                            <th>PHONE :</th>
                            <td>{breweries.country}</td>
                        </tr>
                        <tr>
                            <th>WEBSITE :</th>
                            <td><a href={breweries.website_url}>Visit Site</a></td>
                        </tr>
                    </thead>
                </table> : 'Loading...'}

                <Map name={breweries.name} lat={breweries.latitude} lon={breweries.longitude}/>
            </div>
            <div className="map-contact">
            {/* <div className="brewery-map">
                <Map/>
            </div> */}
            <div className="contact-brewery">
            <Email/>
            </div>
            </div>

        </div>
    );
};

export default Brewery;