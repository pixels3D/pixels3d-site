import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function KineticType() {
  const [activeIndex, setActiveIndex] = useState(0)
  const word = "KINETIC"

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % word.length)
    }, 800)

    return () => clearInterval(interval)
  }, [word.length])

  return (
    <div className="w-full h-full bg-black flex items-center justify-center relative overflow-hidden">
      {/* Background grid */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(to right, #7c3aed 1px, transparent 1px),
            linear-gradient(to bottom, #7c3aed 1px, transparent 1px)
          `,
          backgroundSize: '30px 30px'
        }}
      />

      {/* Kinetic text */}
      <div className="flex items-center space-x-1">
        {word.split('').map((letter, index) => (
          <motion.span
            key={index}
            className="text-4xl font-bold text-white inline-block"
            animate={activeIndex === index ? {
              scale: [1, 1.3, 1],
              rotateY: [0, 180, 360],
              color: ['#ffffff', '#7c3aed', '#22d3ee', '#ffffff']
            } : {}}
            transition={{ 
              duration: 0.8,
              ease: 'easeInOut'
            }}
          >
            {letter}
          </motion.span>
        ))}
      </div>

      {/* Animated cursor */}
      <motion.div
        className="absolute w-1 h-8 bg-violet-400 ml-2"
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 1, repeat: Infinity }}
        style={{ left: '60%' }}
      />

      {/* Particle effects */}
      {activeIndex >= 0 && (
        <motion.div
          className="absolute w-2 h-2 bg-cyan-400 rounded-full"
          initial={{ 
            x: `${50 + activeIndex * 20}%`, 
            y: '50%',
            scale: 0 
          }}
          animate={{ 
            x: `${50 + activeIndex * 20 + Math.random() * 40 - 20}%`,
            y: `${50 + Math.random() * 40 - 20}%`,
            scale: [0, 1, 0]
          }}
          transition={{ duration: 1 }}
        />
      )}
    </div>
  )
}