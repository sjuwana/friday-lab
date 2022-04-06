
import Typical from "react-typical";
import React from 'react';

const Home = () => {
    return (
        <div>
            <h1>Welcome To JAGS' Brewery Site </h1>
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

        </div>
    );
};

export default Home;