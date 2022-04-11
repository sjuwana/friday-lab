import React, { createContext } from 'react';
import Map from './Map';
import '../styles/News.css'

const NewsContext = createContext() 

const NewsContextProvider = (props) => {
   const api key =  394f221df9fd46608350a92c306ec120
    return (
        <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime amet quasi deserunt quia. Aperiam, hic quibusdam eius autem minima id officia explicabo? Excepturi inventore repudiandae ipsa eveniet recusandae necessitatibus dolore.</p>

            <div className="map">
                {/* <Map /> */}
            </div>
        </div>
    );
};

export default News;
