import React from 'react'

const Navlinks = ({ isOpen, onNavigate }) => {
  const handleNav = (event, targetId) => {
    event.preventDefault()
    document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' })
    onNavigate?.()
  }

  return (
    <ul className={`navbar-links ${isOpen ? 'is-open' : ''}`}>
      <li>
        <a href="#home" onClick={(event) => handleNav(event, 'home')}>Home</a>
      </li>
      <li>
        <a href="#projects" onClick={(event) => handleNav(event, 'projects')}>Projects</a>
      </li>
      <li>
        <a href="#about" onClick={(event) => handleNav(event, 'about')}>About</a>
      </li>
      <li>
        <a href="#contact" onClick={(event) => handleNav(event, 'contact')}>Contact</a>
      </li>
    </ul>
  )
}

export default Navlinks