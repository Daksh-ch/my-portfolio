import React from 'react'
import heroImg from '../../assets/hero.jpg'

const Brand = () => {
  return (
    <div className="navbar-left">
      <img src={heroImg} alt="Profile" className="navbar-avatar" />
      <h2>Daksh Chaudhary</h2>
    </div>
  );
};

export default Brand