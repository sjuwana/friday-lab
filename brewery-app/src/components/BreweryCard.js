
import { useNavigate } from 'react-router-dom'
import React from 'react';
import breweryInfo from '../services/breweryInfo';

const BreweryCard = (props) => {
    // setting a variable for the funcion useNavigate to use later in app
    const navigate = useNavigate();

    //Below will be code to set the url for an image inside of our brewery card
    let imageURL = '';
    
    breweryInfo.map( (el) => { 
          (el.type === props.type) ? 
            imageURL = el.pictureOne 
             : 
            console.log('There is no image to display.');
      })

    return (
        <div className='details' key={props.id}>

            <h2>{props.name}</h2>

            {/* Below will be a palaceholder */}
            {/* <div className='details-image'> 
            <img src={breweryInfo[0].pictureThree}></img>
            </div> */}

            {
                (imageURL === '') ? <p>There is no image to display.</p> :
                <div className='details-image'>
                    <img src={imageURL}></img>
                </div>
            }
            
            {/* created a button to take us to individual brewery when clicked */}
            <div className='details-button'>
            <button onClick={()=>navigate(`/brewery/${props.name}`)}>See More Details</button>
            </div>
        </div>
    );
};

export default BreweryCard;


