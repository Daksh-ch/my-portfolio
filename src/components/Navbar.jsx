import React, {useState} from 'react'

const Navbar = ({darkMode, setDarkMode, themeName}) => {
  const [menuOpen, setMenuOpen] = useState(false);
 
  return (
    <nav style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem'}}>
        <h2>Daksh Chaudhary</h2> 
        <button onClick={() => setDarkMode(prev => !prev)}>{themeName}</button>
        <button onClick={() => setMenuOpen(prev => !prev)}>Menu</button>

        {menuOpen && (
          <ul style={{display: 'flex', gap: '1rem', listStyle: 'none'}}>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
        )}
    </nav>
  )
}

export default Navbar