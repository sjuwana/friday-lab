// import SampleSlideshow from './SampleSlideshow';
import React from "react";
import {   useNavigate } from "react-router-dom";
import "../styles/AboutUs.css";
import Map from "./Map";

const AboutUs = () => {
  const navigate = useNavigate();
  const handleLocation =(e)=> {
      console.log('clicked')
      navigate('/locate-us')
  }

  return (
    <div className="aboutUs">
      <h2>
        The JAGS Brewers’ Association was founded in 2022 by Janet, Aylin,
        Godbless and Stephanus through a Per Scholas project and represents the
        Breweries and BrewPubs in the U.S.A. JAGS is the voice of craft beer in
        America, representing its independent breweries and affiliated groups to
        support industry-wide growth and beer appreciation. We are the America
        Fresh Beer!
      </h2>
      <div className="location">
      <button onClick={handleLocation}>Locate Us</button>
      </div>
      
    </div>
  );
};

export default AboutUs;
