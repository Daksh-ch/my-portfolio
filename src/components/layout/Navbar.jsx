import React, { useState } from 'react'
import './Navbar.css'
import Brand from './navbar/Brand'
import Navlinks from './navbar/Navlinks'
import CTAButton from '../ui/CTAButton'
import ThemeToggle from '../ui/ThemeToggle'
import { Menu } from 'lucide-react'

const Navbar = ({ darkMode, setDarkMode, themeName }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleNavigate = () => {
    setIsMenuOpen(false)
  }

  return (
     <nav className="navbar">
      <Brand heroImg='src/assets/hero.jpg'/>
      <Navlinks isOpen={isMenuOpen} onNavigate={handleNavigate} />

      <div className="navbar-actions">
        <CTAButton text = "Message Daksh" onClick={() => {
          document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
        }}/>
        <ThemeToggle darkMode={darkMode} 
        setDarkMode={setDarkMode} 
        themeName={themeName} />
        <button
          type="button"
          className="navbar-menu"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <Menu size={20} />
        </button>
      </div>
      
      </nav>
  )
}

export default Navbar