import React from 'react';

const ThemeToggle = ({ darkMode, setDarkMode, themeName }) => {
  return (
    <button className='navbar-cta' onClick={() => setDarkMode(prev => !prev)}>
      {themeName}
    </button>
  );
};

export default ThemeToggle;