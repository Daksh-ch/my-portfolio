import React, { useEffect } from 'react'
import gsap from 'gsap'
import { ThemeContext } from '../../context/ThemeContext'

export const Cursor = () => {
    const { darkMode } = React.useContext(ThemeContext)

    useEffect(() => {
        const handleMouseMove = (event) => {
            const {clientX, clientY} = event;
    
            gsap.to('#cursor', {
                x: clientX - 20/2,
                y: clientY - 20/2,
                duration: .85,
                delay: 0.1,
                ease: 'power4.out'
            })
        }

        window.addEventListener('mousemove', handleMouseMove)

        return() => {
            window.removeEventListener('mousemove', handleMouseMove)
        }
    },[])

    const cursorColor = darkMode ? 'bg-white' : 'bg-zinc-200';

  return (
    <>
    <div id = "cursor" 
    className={'fixed top-0 left-0 h-6 w-6 rounded-full pointer-events-none mix-blend-difference ' + cursorColor}
    style={{ zIndex: 9999 }}></div>
    </>
  )
}
