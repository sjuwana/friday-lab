
import { useParams } from "react-router-dom"
import React from 'react';

const Brewery = (props) => {

    console.log('props', props)
    const {brewery_id } = useParams();
    console.log (brewery_id)

   const brewery = props[brewery_id];
    return (
        <div className="brewery">
            <ul key={props.id}>
                 <li><span>NAME : </span>{props.name}</li>
                 <li><span>TYPE : </span>{props.brewery_type}</li>
                 <li><span>CITY : </span>{props.city}</li>
                 <li><span>STATE : </span>{props.state}</li>
                 <li><span>COUNTRY : </span>{props.country}</li>
                 <li><span>PHONE : </span>{props.phone}</li>
                 <li><span>WEBSITE : </span><a href="{props.website_url}">Visit Site</a></li>
                   
            </ul>
        </div>
    );
};

export default Brewery;