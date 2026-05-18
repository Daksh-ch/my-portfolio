import React, { useEffect, useState } from 'react'
import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Lenis from 'lenis'
import Projects from './components/sections/Projects'
import Contact from './components/sections/Contact'

function App() {
  const lenis = new Lenis({
    autoRaf: true,
  });

  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved ? saved === "dark" :  true;
  })
  const themeName = darkMode ? "Light" : "Dark";

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <div
      data-theme={darkMode ? "dark" : "light"}
      className='group'
    >

        <Navbar darkMode = {darkMode} setDarkMode = {setDarkMode} themeName={themeName}/>

        <Hero name = "Daksh" role = "Full Stack Developer"/>
        <About  darkMode = {darkMode} />

        <Projects />
        
        <Contact />

    </div>
  )
}

export default App