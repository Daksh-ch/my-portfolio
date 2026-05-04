import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import { useState } from 'react'

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [showAbout, setShowAbout]  = useState(false);
  // const [themeName, setThemeName] = useState("white");


  return (
    <div style={{
      background : darkMode ? "black" : "white",
      color : darkMode ? "white" : "black",
      minHeight: "100vh"
    }}>

        <Navbar darkMode = {darkMode} setDarkMode = {setDarkMode}/>
        <Hero name = "Daksh" role = "Web Developer" darkMode = {darkMode} />
        <button onClick={() => setShowAbout(prev => !prev)}>Toggle About</button>
        {showAbout && <About  darkMode = {darkMode} />}
    </div>
  )
}

export default App