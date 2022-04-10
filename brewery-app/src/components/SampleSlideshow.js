import React from "react";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import breweryInfo from "../services/breweryInfo";

const slideImages = [
    {
        url: 'https://images.pexels.com/photos/159291/beer-machine-alcohol-brewery-159291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        caption: 'Beer Kegs'
    },
    {
        url: 'https://images.pexels.com/photos/1267361/pexels-photo-1267361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        caption: 'Beer Machine'
    },
    {
        url: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        caption: 'Beer being Poured'
    }
]
const brewery = breweryInfo;

const SampleSlideshow = () => {
    return (
      <div className="slide-container">
        <Slide>
       
            <div className="each-slide">
              <div className="ourImages" style={{'backgroundImage': `url(${brewery[0].pictureOne})`}}>
                {/* <span>observe</span> */}
              </div>
            </div>
       
            <div className="each-slide">
              <div className="ourImages" style={{'backgroundImage': `url(${brewery[0].pictureTwo})`}}>
              {/* <span>observe</span> */}
              </div>
            </div>

            <div className="each-slide">
              <div className="ourImages" style={{'backgroundImage': `url(${brewery[0].pictureThree})`}}>
              {/* <span>observe</span> */}
              </div>
            </div>

        </Slide>
      </div>
    )
}

export default SampleSlideshow;