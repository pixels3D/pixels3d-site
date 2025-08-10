import React from 'react'
import { motion } from 'framer-motion'

export default function HologramSim() {
  return (
    <div className="w-full h-full bg-black relative overflow-hidden flex items-center justify-center">
      {/* Hologram content */}
      <motion.div
        className="relative z-10 text-center"
        animate={{ opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="text-2xl font-bold text-cyan-400 mb-2">HOLOGRAM</div>
        <div className="text-sm text-cyan-300 opacity-80">Simulation Active</div>
        
        {/* Hologram frame */}
        <div className="absolute inset-0 border-2 border-cyan-400/50 rounded-lg">
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyan-400" />
          <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-cyan-400" />
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-cyan-400" />
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyan-400" />
        </div>
      </motion.div>

      {/* Scan lines */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute left-0 right-0 h-px bg-cyan-400/30"
            style={{ top: `${(i + 1) * 12.5}%` }}
            animate={{ opacity: [0.3, 0.8, 0.3] }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity, 
              delay: i * 0.1 
            }}
          />
        ))}
      </div>

      {/* Bloom effect */}
      <div className="absolute inset-0 bg-cyan-400/10 blur-xl" />
      
      {/* Noise overlay */}
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
        animate={{ opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 0.5, repeat: Infinity }}
      />
    </div>
  )
}