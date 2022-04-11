// Hello, this is Aylin again!
// Please don't mind me too much
// This is how I did my search at the moment,
// but I'd like to update this to match how Godbless did his files.
// For now I'll leave my process up here. 

import breweryCall from "../services/breweryCall";
// import BrewCard from "./BrewCard";
import { useState, useEffect } from 'react';

import BreweryCard from "./BreweryCard";

function Search() {
    const [brewery, setBrewery] = useState([])
    //The brewery search results comes in an array.
    // The breweries themselves are in an object. 
    // So, we should be able to map these. 
    const [input, setInput] = useState('');
    
    const handleChange = (event) => {
        event.preventDefault();
        let value = event.target.value;
        console.log('Our value from the search bar is: ' + value);

        setInput(value);

        console.log('This is what is inside our input: ' + input)
    }


    async function handleSubmit(event) {
        // event.preventDefault();

        const data = await breweryCall(input)
        setBrewery(data)
    }


    return (
        <div className="searchResults">
            <h1>Search for breweries by keywords</h1>
        <div className="searchResults-inputs">
            <input type="text" placeholder="search terms" onChange={(e) => handleChange(e)} />
            <button onClick={(event) => handleSubmit(event)}>Search</button>
        </div>
            {
                brewery ? 
                (brewery || []).map( (item, index) => {
                    return (
                        <BreweryCard 
                        key = {item.id} 
                        name = {item.name}
                        type = {item.brewery_type}
                        city = {item.city}
                        state = {item.state}
                        country = {item.country}
                        phone = {item.phone}
                        website = {item.website_url} /> 
                    )
                })  : <p>Sorry, there are no breweries that contain your search term of <span className="searchInputClass">{input}</span></p>
            }
        </div>
    )
}

export default Search; 