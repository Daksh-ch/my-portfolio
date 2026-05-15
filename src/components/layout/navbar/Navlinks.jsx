import React from 'react'
import { cn } from '../../../lib/utils'

const Navlinks = ({ isOpen, onNavigate, className }) => {
  const handleNav = (event, targetId) => {
    event.preventDefault()
    document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' })
    onNavigate?.()
  }

  return (
    <ul
      className={cn(
        'w-full flex-col gap-3 rounded-xl border border-zinc-500/20 bg-zinc-500/5 p-3 text-sm font-semibold sm:w-auto sm:flex-row sm:items-center sm:gap-8 sm:border-0 sm:bg-transparent sm:p-0',
        isOpen ? 'flex' : 'hidden sm:flex',
        className
      )}
    >
      <li>
        <a
          href="#home"
          className="text-current opacity-80 transition-opacity hover:opacity-100"
          onClick={(event) => handleNav(event, 'home')}
        >
          Home
        </a>
      </li>
      <li>
        <a
          href="#projects"
          className="text-current opacity-80 transition-opacity hover:opacity-100"
          onClick={(event) => handleNav(event, 'projects')}
        >
          Projects
        </a>
      </li>
      <li>
        <a
          href="#about"
          className="text-current opacity-80 transition-opacity hover:opacity-100"
          onClick={(event) => handleNav(event, 'about')}
        >
          About
        </a>
      </li>
      <li>
        <a
          href="#contact"
          className="text-current opacity-80 transition-opacity hover:opacity-100"
          onClick={(event) => handleNav(event, 'contact')}
        >
          Contact
        </a>
      </li>
    </ul>
  )
}

export default Navlinks