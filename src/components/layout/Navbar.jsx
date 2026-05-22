import { useState } from 'react'
import Brand from './navbar/Brand'
import Navlinks from './navbar/Navlinks'
import CTAButton from '../ui/CTAButton'
import ThemeToggle from '../ui/ThemeToggle'
import Container from '../ui/Container'
import { Menu } from 'lucide-react'
import { cn } from '../../lib/utils'
import { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'

const Navbar = () => {

  const {darkMode, setDarkMode, themeName} = useContext(ThemeContext)


  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleNavigate = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav
      className={cn(
        'sticky top-0 z-50 w-full border-b backdrop-blur',
        darkMode ? 'border-white/10 bg-black/40' : 'border-black/10 bg-white/70'
      )}
    >
      <Container className="py-4">
        <div className="grid grid-cols-[auto_auto] items-center gap-4 sm:grid-cols-[auto_1fr_auto]">
          <Brand />
          <Navlinks
            isOpen={isMenuOpen}
            onNavigate={handleNavigate}
            className="order-3 col-span-2 justify-center sm:order-0 sm:col-auto"
          />

          <div className="order-2 flex items-center justify-end gap-2 sm:order-0 sm:gap-3">
            <CTAButton
              text="Message Daksh"
              className="hidden sm:inline-flex"
              onClick={() => {
                document
                  .getElementById('contact')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }}
            />
            <ThemeToggle
              darkMode={darkMode}
              setDarkMode={setDarkMode}
              themeName={themeName}
            />
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-full border border-zinc-500/30 p-2.5 text-current transition-colors hover:bg-zinc-500/10 sm:hidden"
              aria-label="Toggle navigation menu"
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen((prev) => !prev)}
            >
              <Menu className="h-4 w-4" />
            </button>
          </div>
        </div>
      </Container>
    </nav>
  )
}

export default Navbar