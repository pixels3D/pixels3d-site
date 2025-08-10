import React, { useState } from 'react'
import { motion } from 'framer-motion'

export default function InteractiveHologram() {
  const [isActive, setIsActive] = useState(false)

  return (
    <div 
      className="w-full h-full bg-black relative overflow-hidden cursor-pointer flex items-center justify-center"
      onClick={() => setIsActive(!isActive)}
    >
      {/* Hologram panel */}
      <motion.div
        className="relative w-80 h-60 border-2 border-cyan-400/50 rounded-lg bg-gradient-to-b from-cyan-900/20 to-transparent"
        animate={isActive ? {
          scale: [1, 1.05, 1],
          borderColor: ['rgba(34, 211, 238, 0.5)', 'rgba(34, 211, 238, 1)', 'rgba(34, 211, 238, 0.5)']
        } : {}}
        transition={{ duration: 2, repeat: isActive ? Infinity : 0 }}
      >
        {/* Content */}
        <div className="p-6 text-center">
          <motion.h3 
            className="text-2xl font-bold text-cyan-400 mb-4"
            animate={{ opacity: isActive ? [0.7, 1, 0.7] : 0.7 }}
            transition={{ duration: 1.5, repeat: isActive ? Infinity : 0 }}
          >
            HOLOGRAM 3D
          </motion.h3>
          
          <div className="space-y-2 text-cyan-300 text-sm">
            <div className="flex justify-between">
              <span>Status:</span>
              <span className={isActive ? 'text-green-400' : 'text-yellow-400'}>
                {isActive ? 'ACTIVE' : 'STANDBY'}
              </span>
            </div>
            <div className="flex justify-between">
              <span>Depth:</span>
              <span>3.2m</span>
            </div>
            <div className="flex justify-between">
              <span>Resolution:</span>
              <span>4K</span>
            </div>
          </div>
        </div>

        {/* Depth layers */}
        <motion.div
          className="absolute inset-2 border border-cyan-400/30 rounded"
          animate={isActive ? { 
            scale: [1, 0.95, 1],
            opacity: [0.3, 0.6, 0.3]
          } : {}}
          transition={{ duration: 2, repeat: isActive ? Infinity : 0, delay: 0.2 }}
        />
        
        <motion.div
          className="absolute inset-4 border border-cyan-400/20 rounded"
          animate={isActive ? { 
            scale: [1, 0.9, 1],
            opacity: [0.2, 0.4, 0.2]
          } : {}}
          transition={{ duration: 2, repeat: isActive ? Infinity : 0, delay: 0.4 }}
        />

        {/* Corner indicators */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-3 h-3 border-2 border-cyan-400 ${
              i === 0 ? 'top-2 left-2 border-r-0 border-b-0' :
              i === 1 ? 'top-2 right-2 border-l-0 border-b-0' :
              i === 2 ? 'bottom-2 left-2 border-r-0 border-t-0' :
              'bottom-2 right-2 border-l-0 border-t-0'
            }`}
            animate={isActive ? { opacity: [0.5, 1, 0.5] } : {}}
            transition={{ duration: 1, repeat: isActive ? Infinity : 0, delay: i * 0.1 }}
          />
        ))}
      </motion.div>

      {/* Interaction hint */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-xs text-cyan-400/60">
        Click to {isActive ? 'deactivate' : 'activate'}
      </div>
    </div>
  )
}