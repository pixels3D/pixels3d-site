import React from 'react'
import { motion } from 'framer-motion'

export default function GlassMorph() {
  return (
    <div className="w-full h-full relative overflow-hidden bg-gradient-to-br from-violet-900/20 to-cyan-900/20 flex items-center justify-center">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-violet-400/30 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-cyan-400/30 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Glass cards */}
      <div className="relative z-10 grid grid-cols-2 gap-4 p-6">
        {[1, 2, 3, 4].map((i) => (
          <motion.div
            key={i}
            className="w-24 h-24 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl flex items-center justify-center"
            whileHover={{ 
              scale: 1.05,
              backgroundColor: 'rgba(255, 255, 255, 0.15)',
              borderColor: 'rgba(255, 255, 255, 0.3)'
            }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-8 h-8 bg-gradient-to-br from-violet-400 to-cyan-400 rounded-lg opacity-80" />
          </motion.div>
        ))}
      </div>

      {/* Animated gradient overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
        animate={{ x: ['-100%', '100%'] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
      />
    </div>
  )
}