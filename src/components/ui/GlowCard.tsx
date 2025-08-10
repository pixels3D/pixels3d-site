import React from 'react'
import { motion } from 'framer-motion'
import clsx from 'clsx'

interface GlowCardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  glow?: boolean
}

export default function GlowCard({ 
  children, 
  className = '', 
  hover = true, 
  glow = true 
}: GlowCardProps) {
  return (
    <motion.div
      className={clsx(
        'relative glass rounded-2xl overflow-hidden',
        {
          'glass-hover': hover,
          'neon-glow': glow
        },
        className
      )}
      whileHover={hover ? { y: -4, scale: 1.02 } : undefined}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />
      
      {/* Glow effect on hover */}
      {glow && (
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/0 via-emerald-400/5 to-emerald-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      )}
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  )
}