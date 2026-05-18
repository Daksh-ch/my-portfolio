import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScrollHandler from './components/layout/ScrollHandler';

import Navbar from './components/layout/Navbar'
import Home from './pages/Home';
import Blogs from './pages/Blogs';

import Lenis from 'lenis'

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
      <BrowserRouter>

        <ScrollHandler />
        
        <Navbar darkMode = {darkMode} setDarkMode = {setDarkMode} themeName={themeName}/>
        <Routes>
          <Route path="/" element={<Home darkMode={darkMode} />} />
          <Route path="/blogs" element={<Blogs />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App