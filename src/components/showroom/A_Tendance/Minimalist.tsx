import React from 'react'
import { motion } from 'framer-motion'

export default function Minimalist() {
  return (
    <div className="w-full h-full bg-white text-black flex items-center justify-center relative">
      {/* Perfect grid background */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(to right, #000 1px, transparent 1px),
            linear-gradient(to bottom, #000 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px'
        }}
      />

      {/* Content */}
      <div className="text-center relative z-10">
        <motion.h1 
          className="text-6xl font-black tracking-tight mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          PURE
        </motion.h1>
        
        <motion.div
          className="w-24 h-1 bg-black mx-auto mb-4"
          initial={{ width: 0 }}
          animate={{ width: 96 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
        
        <motion.p 
          className="text-sm uppercase tracking-widest text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          Minimalism
        </motion.p>
      </div>

      {/* Geometric accent */}
      <motion.div
        className="absolute top-8 right-8 w-4 h-4 bg-black"
        animate={{ rotate: [0, 90, 180, 270, 360] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
      />
    </div>
  )
}