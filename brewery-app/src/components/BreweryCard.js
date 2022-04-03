
import { useNavigate } from 'react-router-dom'
import React from 'react';

const BreweryCard = (props) => {
    // setting a variable for the funcion useNavigate to use later in app
    const navigate = useNavigate();
    return (
        <div className='details' key={props.id}>

            <h2>{props.name}</h2>

            {/* <ul >
                 <li><span>NAME : </span>{props.name}</li>
                 <li><span>TYPE : </span>{props.brewery_type}</li>
                 <li><span>CITY : </span>{props.city}</li>
                 <li><span>STATE : </span>{props.state}</li>
                 <li><span>COUNTRY : </span>{props.country}</li>
                 <li><span>PHONE : </span>{props.phone}</li>
                 <li><span>WEBSITE : </span><a href="{props.website_url}">Visit Site</a></li>
                   
            </ul> */}

            {/* created a button to take us to individual brewery when clicked */}
            <button onClick={()=>navigate(`/breweries/${props.id}`)}>See More Details</button>
 
        </div>
    );
};

export default BreweryCard;


