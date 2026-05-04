import React from 'react';
import {Moon, Sun} from 'lucide-react';

const ThemeToggle = ({ darkMode, setDarkMode, themeName }) => {
  return (
    <button className='ThemeToggle' onClick={() => setDarkMode(prev => !prev)}>
      {themeName === "Dark" ? <Moon /> : <Sun />}
    </button>
  );
};

export default ThemeToggle;