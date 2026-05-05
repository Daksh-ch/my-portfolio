import React from 'react'

const Navlinks = () => 
{
    return (
    <ul className="navbar-links" cursor="pointer">
      <li><a href="#resume">Resume</a></li>
      <li onClick={() => {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
      }}>Projects</li>
      <li onClick={() => {
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
      }}>About</li>
    </ul>
    )
}

export default Navlinks;