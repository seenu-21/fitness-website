import React from "react";
import "./Hero.css";
import Header from "../Header/Header";

import hero_image from "../../assets/hero_image.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";

import { motion } from "framer-motion";
import NumberCounter from "number-counter";
const Hero = () => {
  const transition = { type: "spring", duration: 3 };

  return (
    <div className="hero" id="home">
      <div className="blur hero-blur"></div>
      <div className="left-h">
        {/* The Header */}
        <Header />

        {/* the best ad */}
        <div className="the-best-ad">
          
          <span>the fitness-fusion | make your'e body fit</span>
        </div>

        {/* Hero Heading */}
        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape </span>
            <span>Your</span>
          </div>

          <div>
            <span>body</span>
          </div>

          <div>
            <span>
              In here we will help you to shape and build your body and
              live up your life to fittest
            </span>
          </div>
        </div>

        {/* figures */}
        <div className="figures">
          <div>
            <span>
              <NumberCounter end={5} start={0} delay="4" preFix="+" />
            </span>
            <span>expert coaches</span>
          </div>
          <div>
            <span>
              <NumberCounter end={148} start={80} delay="4" preFix="+" />
            </span>
            <span>members joined</span>
          </div>
          <div>
            <span>
              <NumberCounter end={12} start={0} delay="4" preFix="+" />
            </span>
            <span>fitness programs</span>
          </div>
        </div>
<br/>

      </div>

      <div className="right-h">
        

        <motion.div
          className="heart-rate"
          initial={{ right: "-1rem" }}
          whileInView={{ right: "4rem" }}
          transition={transition}
        >
          <img src={Heart} alt="Heart" />
          <span>Heart Rate</span>
          <span>103 bpm</span>
        </motion.div>

        {/* hero images */}
        <img src={hero_image} alt="hero_image" className="hero-image" />

        
        {/* Calories */}
        <motion.div
          className="calories"
          initial={{ right: "37rem" }}
          whileInView={{ right: "28rem" }}
          transition={transition}
        >
          <img src={Calories} alt="Calories" />
          <div>
            <span>Calories Burned</span>
            <span>210 kcal</span>
          </div>
        
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;