
import React from 'react';
import Email from './Email';
import '../styles/AboutUs.css'

const AboutUs = () => {
    return (
        <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas dicta, aliquid quas esse dignissimos recusandae! Dolorum inventore modi quod totam odio obcaecati nobis enim unde soluta, omnis saepe adipisci consectetur?</p>
       <p>Doing an About Me</p>
       <div className="main-contact">
           <Email/>
       </div>
        </div>
        
    );
};

export default AboutUs;