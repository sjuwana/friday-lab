
import Typical from "react-typical";
import React from 'react';
import SampleSlideshow from "./SampleSlideshow";

const Home = () => {
    return (
        <div className="home">
          <div className="home-imageDiv">

              <div className="home-textDiv">
            <h1 >Welcome To JAGS' Brewery Site </h1>
            <div className="typical-brewery">
                <Typical 
                        loop={Infinity}
                        steps={[
                        "Search all about brewery companies🍺 🍻 🌎 ",
                        2000,
                        "All in one place 💻 ",
                        2000,
                        ]}
                    />
            </div>
                    <div className="home-button">
                        <button>Contact Us</button>
                    </div>
            </div>

            </div>
                        <div className="slideshow-div">
                        <SampleSlideshow />
                        </div>
        </div>
       
    );
};

export default Home;