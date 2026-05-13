import React from 'react'
import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import { useState } from 'react'
import Lenis from 'lenis'
import Projects from './components/sections/Projects'
import Contact from './components/sections/Contact'

function App() {
  const lenis = new Lenis({
    autoRaf: true,
  });

  const [darkMode, setDarkMode] = useState(true);
  const themeName = darkMode ? "Light" : "Dark";


  return (
    <div
      data-theme={darkMode ? "dark" : "light"}
      style={{
      background : darkMode ? "black" : "white",
      color : darkMode ? "white" : "black",
      borderColor: darkMode ? "rgba(128,128,128,0.2)" : "rgba(128,128,128,0.8)",
      minHeight: "100vh",
      fontFamily: "Helvetica",
      gap: "2rem"
      }}
    >

        <Navbar darkMode = {darkMode} setDarkMode = {setDarkMode} themeName={themeName}/>

        <Hero name = "Daksh" role = "Web Developer"/>
        <About  darkMode = {darkMode} />

        <Projects />
        
        <Contact />

    </div>
  )
}

export default App