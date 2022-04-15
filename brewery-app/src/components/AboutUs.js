// import SampleSlideshow from './SampleSlideshow';
import React from "react";
import {   useNavigate } from "react-router-dom";
import "../styles/AboutUs.css";
// import { Button } from '@mui/material'
import { Button } from '@mui/material';


const AboutUs = () => {
  const navigate = useNavigate();
  const handleLocation =(e)=> {
      console.log('clicked')
      navigate('/locate-us')
  }

  return (
    <div className="aboutUs-container">
      <div className="aboutUs">
      <h2>
        The JAGS Brewers’ Association was founded in 2022 by Janet, Aylin,
        Godbless and Stephanus through a Per Scholas project and represents the
        Breweries and BrewPubs in the U.S.A. JAGS is the voice of craft beer in
        America, representing its independent breweries and affiliated groups to
        support industry-wide growth and beer appreciation. We are the America
        Fresh Beer!
      </h2>
      </div>
      <div className="images">
         <div>
          <img src={require('../images/stephanus.jpeg')} alt='Stephanus'></img>
          <h4><a href="https://www.linkedin.com/in/stephanus-iwan-j-55a35b/">ABOUT STEPHANUS</a></h4>
          </div>
          <div>
          <img src={require('../images/godbless.jpeg')} alt='Godbless'></img>
          <h4><a href="https://www.linkedin.com/in/godbless-amankwah-b17b3084/">ABOUT GODBLESS</a></h4>
          </div>
          <div>
          <img src={require('../images/Aylin.jpeg')} alt='Aylin'></img>
          <h4><a href="https://www.linkedin.com/in/aylin-guillen-ba912612a/">ABOUT AYLIN</a></h4>
          </div>
          <div>
          <img src={require('../images/Janet.jpeg')} alt='Janet'></img>
          <h4><a href="https://www.linkedin.com/in/janet-nieto-2a00a9232/">ABOUT JANET</a></h4>
          </div>
        </div>

        <div className="aboutUs-button">

        <Button variant='contained' size='large' onClick={handleLocation} color='error' > Locate Us</Button>
        </div>
        
      
    </div>
  );
};

export default AboutUs;
