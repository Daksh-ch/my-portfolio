import React from 'react'
import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import { useState } from 'react'
import CTAButton from './components/ui/CTAButton'
import Lenis from 'lenis'

function App() {
  const lenis = new Lenis({
    autoRaf: true,
  });

  const [darkMode, setDarkMode] = useState(false);
  const [showAbout, setShowAbout]  = useState(false);
  const themeName = darkMode ? "Light" : "Dark";


  return (
    <div style={{
      background : darkMode ? "black" : "white",
      color : darkMode ? "white" : "black",
      minHeight: "100vh",
      fontFamily: "Helvetica",
      gap: "2rem"
    }}>

        <Navbar darkMode = {darkMode} setDarkMode = {setDarkMode} themeName={themeName}/>
        <Hero name = "Daksh" role = "Web Developer"/>
        <div style = {{display: "flex", justifyContent: "center"}}>
          <CTAButton onClick={() => setShowAbout(prev => !prev)} text = "Toggle About"/> 
        </div>

        {showAbout && <About  darkMode = {darkMode} />}
    </div>
  )
}

export default App