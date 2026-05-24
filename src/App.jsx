import { useContext } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScrollHandler from './components/layout/ScrollHandler';

import Navbar from './components/layout/Navbar'
import Home from './pages/Home';
import Blogs from './pages/Blogs';

import Lenis from 'lenis'
import { ThemeContext } from './context/ThemeContext';
import { Cursor } from './components/ui/Cursor';

function App() {

  const lenis = new Lenis({
    autoRaf: true,
  });
  const darkMode = useContext(ThemeContext).darkMode
  

  return (

    <div
      data-theme={darkMode ? "dark" : "light"}
      className='group'
    >
      <BrowserRouter>
        <ScrollHandler />
        <Cursor />

        <Navbar />  
        <Routes>
          <Route path="/" element={<Home darkMode={darkMode} />} />
          <Route path="/blogs" element={<Blogs />} />
        </Routes>

      </BrowserRouter>
    </div>

  )
}

export default App