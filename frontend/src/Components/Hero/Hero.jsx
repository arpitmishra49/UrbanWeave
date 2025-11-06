import React from 'react';
import './Hero.css';
import arrow_icon from '../Assets/arrow.png';
import hero_image from '../Assets/hero_image.png';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">

        <div className="hero-left">
          <h2>NEW ARRIVALS</h2>
          <h1>Discover Your Perfect Style</h1>
          <p>
            Explore our latest collections crafted for everyone. Trendy, comfortable, and timeless fashion that makes you stand out.
          </p>
          <button className="hero-btn">
            Latest Collections
            <img src={arrow_icon} alt="arrow" />
          </button>
        </div>

        
        <div className="hero-right">
          <div className="hero-image-container">
            <img src={hero_image} alt="hero" className="hero-image" />
          </div>
        </div>
      </div>
      
      <div className="hero-floating"></div>
    </section>
  );
};

export default Hero;
