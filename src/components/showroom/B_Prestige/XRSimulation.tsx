import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function XRSimulation() {
  const [headPosition, setHeadPosition] = useState({ x: 50, y: 50 })
  const [isTracking, setIsTracking] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      if (isTracking) {
        setHeadPosition({
          x: 50 + Math.sin(Date.now() * 0.001) * 10,
          y: 50 + Math.cos(Date.now() * 0.0008) * 8
        })
      }
    }, 50)

    return () => clearInterval(interval)
  }, [isTracking])

  return (
    <div className="w-full h-full bg-black relative overflow-hidden">
      {/* VR Headset Frame */}
      <div className="absolute inset-4 border-4 border-gray-600 rounded-3xl bg-gradient-to-b from-gray-800 to-gray-900">
        {/* Lens areas */}
        <div className="absolute top-8 left-8 right-8 bottom-8 flex space-x-4">
          {/* Left eye */}
          <div className="flex-1 border-2 border-gray-500 rounded-full bg-black relative overflow-hidden">
            <div className="absolute inset-2 bg-gradient-to-br from-violet-900/30 to-cyan-900/30 rounded-full">
              {/* Virtual environment */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="w-8 h-8 bg-gradient-to-r from-violet-400 to-cyan-400 rounded-lg"
                  animate={{ 
                    rotateY: [0, 360],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </div>
              
              {/* Grid overlay */}
              <div 
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: `
                    linear-gradient(to right, #7c3aed 1px, transparent 1px),
                    linear-gradient(to bottom, #7c3aed 1px, transparent 1px)
                  `,
                  backgroundSize: '20px 20px'
                }}
              />
            </div>
          </div>
          
          {/* Right eye */}
          <div className="flex-1 border-2 border-gray-500 rounded-full bg-black relative overflow-hidden">
            <div className="absolute inset-2 bg-gradient-to-br from-violet-900/30 to-cyan-900/30 rounded-full">
              {/* Virtual environment (slightly offset for stereoscopic effect) */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="w-8 h-8 bg-gradient-to-r from-violet-400 to-cyan-400 rounded-lg"
                  animate={{ 
                    rotateY: [0, 360],
                    scale: [1, 1.2, 1],
                    x: [0, 2, 0]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </div>
              
              {/* Grid overlay */}
              <div 
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: `
                    linear-gradient(to right, #22d3ee 1px, transparent 1px),
                    linear-gradient(to bottom, #22d3ee 1px, transparent 1px)
                  `,
                  backgroundSize: '20px 20px'
                }}
              />
            </div>
          </div>
        </div>

        {/* Head tracking reticle */}
        <motion.div
          className="absolute w-4 h-4 border-2 border-green-400 rounded-full"
          style={{
            left: `${headPosition.x}%`,
            top: `${headPosition.y}%`,
            transform: 'translate(-50%, -50%)'
          }}
          animate={{ scale: isTracking ? [1, 1.2, 1] : 1 }}
          transition={{ duration: 1, repeat: isTracking ? Infinity : 0 }}
        >
          <div className="absolute inset-1 bg-green-400 rounded-full opacity-50" />
        </motion.div>

        {/* Status indicators */}
        <div className="absolute top-4 left-4 space-y-2">
          <div className="flex items-center space-x-2">
            <div className={`w-2 h-2 rounded-full ${isTracking ? 'bg-green-400' : 'bg-red-400'}`} />
            <span className="text-xs text-white">Head Tracking</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full" />
            <span className="text-xs text-white">Display Active</span>
          </div>
        </div>

        {/* Control button */}
        <button
          onClick={() => setIsTracking(!isTracking)}
          className="absolute bottom-4 right-4 px-3 py-1 bg-violet-600 text-white text-xs rounded hover:bg-violet-700 transition-colors"
        >
          {isTracking ? 'Stop' : 'Start'} Tracking
        </button>
      </div>

      {/* Vignette effect */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/50 pointer-events-none" />
      
      {/* Title */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center">
        <div className="text-sm text-white font-semibold">XR Simulation</div>
        <div className="text-xs text-gray-400">Virtual Reality Interface</div>
      </div>
    </div>
  )
}