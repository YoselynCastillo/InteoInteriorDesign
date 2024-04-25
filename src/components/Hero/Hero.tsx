// import React from 'react'

import Content from "./Content/Content";
import Navbar from "./Navbar/Navbar";
import "./Hero.scss";
import HeroImageCTA from "./HeroImageCTA/HeroImageCTA";

const Hero = () => {
  return (
    <div className="hero">
      <Navbar />
      <Content />
      <HeroImageCTA />
    </div>
  )
}

export default Hero;