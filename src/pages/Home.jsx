import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import Projects from '../components/sections/Projects'
import Contact from '../components/sections/Contact'

// We pass darkMode as a prop because Home needs to pass it down to About
export default function Home({ darkMode }) {
  return (
    <main>
      <Hero name="Daksh" role="Full Stack Developer" />
      <About darkMode={darkMode} />
      <Projects />
      <Contact />
    </main>
  )
}