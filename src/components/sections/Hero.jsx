import React from 'react';
import './Hero.css';
import CTAButton from '../ui/CTAButton';

const Hero = ({ name, role}) => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">Hello, I'm {name}</h1>
        <h2 className="hero-subtitle">{role}</h2>
        <p className="hero-description">
          I build scalable web applications and explore the latest in front-end development.
        </p>
        <div className="hero-actions">
          <CTAButton
            text="View My Work"
            onClick={() => {
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;