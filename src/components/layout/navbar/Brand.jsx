import React from 'react'

const Brand = ({heroImg}) => {
  return (
    <div className="navbar-left">
      <img src={heroImg} alt="Profile" className="navbar-avatar" />
      <h2>Daksh Chaudhary</h2>
    </div>
  );
};

export default Brand