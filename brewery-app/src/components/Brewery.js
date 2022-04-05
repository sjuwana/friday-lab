
import { useParams } from "react-router-dom"
import { useState, useEffect } from 'react';
import { breweryData } from '../services/constants';
import React from 'react';

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
             console.log('name',brewery)
           })}

//    const brewery = props[id];
    return (
        <div className="brewery">
            {/* use tenary to make sure there is data to avoid the data from hanging */}
           {breweries ? <ul key={breweries.id}>
                 <li><span>NAME : </span>{breweries.name}</li>
                 <li><span>TYPE : </span>{breweries.brewery_type}</li>
                 <li><span>CITY : </span>{breweries.city}</li>
                 <li><span>STATE : </span>{breweries.state}</li>
                 <li><span>COUNTRY : </span>{breweries.country}</li>
                 <li><span>PHONE : </span>{breweries.phone}</li> 
                  <li><span>WEBSITE : </span><a href="{props.website_url}">Visit Site</a></li>
                   
            </ul>: 'Loading...'}
        </div>
    );
};

export default Brewery;