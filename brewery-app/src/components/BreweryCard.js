
import { useNavigate } from 'react-router-dom'
import React from 'react';

const BreweryCard = (props) => {
    // setting a variable for the funcion useNavigate to use later in app
    const navigate = useNavigate();
    return (
        <div className='details' key={props.id}>

            <h2>{props.name}</h2>

            {/* created a button to take us to individual brewery when clicked */}
            <button onClick={()=>navigate(`/brewery/${props.name}`)}>See More Details</button>
 
        </div>
    );
};

export default BreweryCard;


