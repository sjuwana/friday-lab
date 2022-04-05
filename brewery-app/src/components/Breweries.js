
import { useEffect, useState } from 'react';
import { breweryData} from '../services/constants';
import React from 'react';
import BreweryCard from './BreweryCard';
import Brewery from './Brewery';
// import BreweryCard from './BreweryCard';

const Breweries = (props) => {
   

    const [breweries, setBreweries] = useState ([])

    useEffect(()=>{
    //   breweryData().then(res=>{
    //      setBreweries(res)
    //      console.log('view', res)
    //   })
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
            <h2>My Brewery List</h2>

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
          <div>
          </div>
        </div>
    );
};

export default Breweries;