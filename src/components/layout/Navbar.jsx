import React, {useState} from 'react'
import './Navbar.css'
import Brand from './navbar/Brand'
import Navlinks from './navbar/Navlinks'
import CTAButton from '../ui/CTAButton'
import ThemeToggle from '../ui/ThemeToggle'

const Navbar = ({darkMode, setDarkMode, themeName}) => { 
  return (
     <nav className="navbar">
      <Brand heroImg='src\assets\hero.jpg'/>
      <Navlinks />

      <div className="navbar-actions">
        <CTAButton text = "Message Daksh"/>
        <ThemeToggle darkMode={darkMode} 
        setDarkMode={setDarkMode} 
        themeName={themeName} />
      </div>
      
      </nav>
  )
}

export default Navbar