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
// // import SampleSlideshow from './SampleSlideshow';
// import React from "react";
// // import Email from './Email';
// import "../styles/AboutUs.css";

// const AboutUs = () => {
//   return (
//     <><div className="aboutUs">
//       <h2>
//         The JAGS Brewers' Association was founded in 2022 by Janet, Aylin,
//         Godbless and Stephanus through a Per Scholas project and represents the
//         Breweries and BrewPubs in the U.S.A. JAGS' Brewery is a pioneering brewery directory that keeps up to date with the latest and classic crafted breweries on the market. We are proud to say we wehold an outstanding selection. We will continue to only grow and expand, thanks to our supporters! We are the America Fresh Beer!
        

      // </h2>
      // <div className="main-contact"></div>
      
      // <div className="makeshiftFooter">
      //   <p></p>
      // </div>

    //   <div className="about-email">{/* <Email/> */}</div>
    // // </div><div className="ceo-images">
    //     <img src="https://media-exp1.licdn.com/dms/image/C4E03AQHZ8tXeAj473Q/profile-displayphoto-shrink_200_200/0/1516240412461?e=1655337600&v=beta&t=sz-mb7a4SRQ59XA4xhSmlDcQdzhXJFl345msf4EJmtk" />
    //     <img src="https://media-exp1.licdn.com/dms/image/C4E03AQH_nDfho_ChNA/profile-displayphoto-shrink_200_200/0/1646363254797?e=1655337600&v=beta&t=ate3Jg7k_uKRzj53s6IfF6lud2glFxY4AAmWo2VaHqM" />
    //     <img src="https://media-exp1.licdn.com/dms/image/C4D03AQEmJ4wgx2Kajw/profile-displayphoto-shrink_200_200/0/1646187175406?e=1655337600&v=beta&t=u24fxjvqpeuSDaNTqg9FpGXSa-Y7KvCsHEtmX2xUdCY" />
    //     <img className="stephanus" src="https://media-exp1.licdn.com/dms/image/C4D03AQECPUmzN3MELQ/profile-displayphoto-shrink_200_200/0/1649962943960?e=1655337600&v=beta&t=EdieQXoDgvehGgrfWeS9AZqIIdzgi4O1dx4SdAGLsnI" />
    //   // </div></>
  // );
// };

export default AboutUs;
