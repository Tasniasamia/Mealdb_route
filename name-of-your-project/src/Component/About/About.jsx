import React from 'react';
import Lottie from "lottie-react";
import reading from "../../assets/read.json"
const About = () => {
    return (
        <div>
             <Lottie animationData={reading} loop={true} />;
            <p>Lorem ipsum dolor sit amet.</p>
        </div>
    );
};

export default About;