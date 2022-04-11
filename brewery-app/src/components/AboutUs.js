// import SampleSlideshow from './SampleSlideshow';
import React from "react";
// import Email from './Email';
import "../styles/AboutUs.css";

const AboutUs = () => {
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
      <div className="main-contact"></div>
      <div className="makeshiftFooter">
        <p></p>
      </div>
      <div className="about-email">{/* <Email/> */}</div>
    </div>
  );
};

export default AboutUs;
