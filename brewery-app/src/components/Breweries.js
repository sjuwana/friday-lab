
import { useEffect, useState } from 'react';
import { breweryData} from '../services/constants';
import React from 'react';
import BreweryCard from './BreweryCard';
import Typical from "react-typical";

import { NavLink } from 'react-router-dom'

const Breweries = (props) => {
   

    const [breweries, setBreweries] = useState ([])

    useEffect(()=>{
  
       (async()=>{
           try{
               const res= await breweryData()
               setBreweries(res)
               console.log ('viewing', res)
           }catch(err) {
                console.log(err)
           }
       })
        ()
    },[])


    return (
        <div>
            <div className="typical-breweries">
                <Typical 
                    loop={Infinity}
                    steps={[
                    "JAGS' LIST OF BREWERY COMPANIES 🍺 🍻 🌎 ",
                    2000,
                    "Click on a company to see more 📖 💻 ",
                    2000,
                    ]}
                />
            </div>
           
           {/* Here I will attempt to add a navigation link to my "Search" component - Aylin */}
                    <NavLink to="/search">
                        <div className='breweries-searchlink'>
                        <p>Want to Search for a Brewery, Instead? </p>
                        </div>
                    </NavLink>

            <div className='brewery-card'>
                {breweries.map(brewery=>(
                <BreweryCard
                key = {brewery.id} 
                name = {brewery.name}
                type = {brewery.brewery_type}
                city = {brewery.city}
                state = {brewery.state}
                country = {brewery.country}
                phone = {brewery.phone}
                website = {brewery.website_url}
                />
            ))}
          </div>
        </div>
    );
};

export default Breweries;