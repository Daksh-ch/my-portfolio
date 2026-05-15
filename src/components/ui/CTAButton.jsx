import React from 'react'
import { ArrowUpRight } from 'lucide-react'
import { cn } from '../../lib/utils'

const CTAButton = ({ text, onClick, className }) => {
  return (
    <button
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