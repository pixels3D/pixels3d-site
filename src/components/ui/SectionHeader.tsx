import React from 'react'
import { motion } from 'framer-motion'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

interface SectionHeaderProps {
  title: string
  subtitle?: string
  centered?: boolean
  className?: string
}

export default function SectionHeader({ 
  title, 
  subtitle, 
  centered = false, 
  className = '' 
}: SectionHeaderProps) {
  const { ref, controls } = useScrollAnimation()

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
      }}
      className={`${centered ? 'text-center' : ''} ${className}`}
    >
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg md:text-xl text-gray-400 max-w-3xl ${centered ? 'mx-auto' : ''}">
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}