import React from 'react'
import { motion } from 'framer-motion'

interface CardGlassProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
}

export default function CardGlass({ children, className = '', hover = true }: CardGlassProps) {
  return (
    <motion.div
      className={`
        relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden
        ${hover ? 'hover:bg-white/10 hover:border-white/20' : ''}
        transition-all duration-300 ${className}
      `}
      whileHover={hover ? { y: -4 } : undefined}
      transition={{ duration: 0.3 }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  )
}