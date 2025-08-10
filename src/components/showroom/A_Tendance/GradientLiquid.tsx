import React, { useState } from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'

export default function GradientLiquid() {
  const [isHovered, setIsHovered] = useState(false)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const gradientX = useTransform(mouseX, [0, 300], [0, 100])
  const gradientY = useTransform(mouseY, [0, 200], [0, 100])

  const handleMouseMove = (event: React.MouseEvent) => {
    const rect = event.currentTarget.getBoundingClientRect()
    mouseX.set(event.clientX - rect.left)
    mouseY.set(event.clientY - rect.top)
  }

  return (
    <motion.div
      className="w-full h-full relative overflow-hidden cursor-pointer"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Base gradient */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at ${gradientX}% ${gradientY}%, 
            #7c3aed 0%, 
            #22d3ee 50%, 
            #1e1b4b 100%)`
        }}
        animate={{
          scale: isHovered ? 1.1 : 1,
          opacity: isHovered ? 0.9 : 0.7
        }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      />

      {/* Liquid layers */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-violet-500/30 via-transparent to-cyan-500/30"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
      />

      <motion.div
        className="absolute inset-0 bg-gradient-to-tl from-cyan-400/20 via-transparent to-violet-400/20"
        animate={{
          rotate: [360, 0],
          scale: [1.2, 1, 1.2]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
      />

      {/* Center content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="text-white font-bold text-lg backdrop-blur-sm bg-black/20 px-4 py-2 rounded-lg"
          animate={{ opacity: isHovered ? 1 : 0.8 }}
        >
          Liquide
        </motion.div>
      </div>
    </motion.div>
  )
}