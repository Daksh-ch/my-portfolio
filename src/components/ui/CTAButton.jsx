import React from 'react'
import { ArrowUpRight } from 'lucide-react'
import { cn } from '../../lib/utils'
import gsap from 'gsap'

const CTAButton = ({ text, onClick, className }) => {
  return (
    <button 
        onMouseEnter={() => gsap.to('#cursor', {scale: 2, duration: 0.1})} 
        onMouseLeave={() => gsap.to('#cursor', {scale: 1, duration: 0.2})}
      className={cn(
        'inline-flex items-center gap-2 rounded-full border border-zinc-500/30 px-4 py-2 text-sm font-semibold transition-colors hover:bg-zinc-500/10',
        className
      )}
      onClick={onClick}
    >
      {text} <ArrowUpRight className="h-4 w-4" />
    </button>
  )
}

export default CTAButton