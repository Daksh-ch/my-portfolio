import React from 'react'
import { Moon, Sun } from 'lucide-react'
import { cn } from '../../lib/utils'

const ThemeToggle = ({ darkMode, setDarkMode, themeName, className }) => {
  return (
    <button
      className={cn(
        'inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-500/30 transition-colors hover:bg-zinc-500/10',
        className
      )}
      onClick={() => setDarkMode((prev) => !prev)}
      type="button"
      aria-label={`Switch to ${themeName} mode`}
    >
      {themeName === 'Dark' ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
    </button>
  )
}

export default ThemeToggle