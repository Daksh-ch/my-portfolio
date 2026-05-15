import React from 'react'
import { cn } from '../../lib/utils'

const Container = ({ children, className }) => {
  return (
    <div className={cn('mx-auto w-full max-w-4xl px-4 sm:px-6', className)}>
      {children}
    </div>
  )
}

export default Container
