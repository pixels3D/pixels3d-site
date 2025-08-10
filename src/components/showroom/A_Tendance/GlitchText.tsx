import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function GlitchText() {
  const [glitchActive, setGlitchActive] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setGlitchActive(true)
      setTimeout(() => setGlitchActive(false), 200)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="w-full h-full flex items-center justify-center bg-black relative overflow-hidden">
      {/* Background noise */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full bg-gradient-to-r from-transparent via-white to-transparent animate-pulse" />
      </div>

      {/* Main text */}
      <div className="relative">
        <motion.h2
          className="text-4xl font-bold text-white relative"
          animate={glitchActive ? {
            x: [0, -2, 2, -1, 1, 0],
            textShadow: [
              '0 0 0 transparent',
              '2px 0 0 #ff0000, -2px 0 0 #00ffff',
              '-2px 0 0 #ff0000, 2px 0 0 #00ffff',
              '1px 0 0 #ff0000, -1px 0 0 #00ffff',
              '0 0 0 transparent'
            ]
          } : {}}
          transition={{ duration: 0.2 }}
        >
          GLITCH
        </motion.h2>

        {/* Glitch layers */}
        {glitchActive && (
          <>
            <motion.div
              className="absolute inset-0 text-4xl font-bold text-red-500 opacity-70"
              initial={{ x: 0 }}
              animate={{ x: [0, 3, -2, 1, 0] }}
              transition={{ duration: 0.2 }}
            >
              GLITCH
            </motion.div>
            <motion.div
              className="absolute inset-0 text-4xl font-bold text-cyan-500 opacity-70"
              initial={{ x: 0 }}
              animate={{ x: [0, -3, 2, -1, 0] }}
              transition={{ duration: 0.2 }}
            >
              GLITCH
            </motion.div>
          </>
        )}
      </div>

      {/* Scan lines */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent"
        animate={{ y: ['-100%', '100%'] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
        style={{ height: '200%' }}
      />
    </div>
  )
}