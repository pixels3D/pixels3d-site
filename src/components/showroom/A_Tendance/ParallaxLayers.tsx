import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function ParallaxLayers() {
  const { scrollYProgress } = useScroll()
  
  const layer1Y = useTransform(scrollYProgress, [0, 1], [0, -50])
  const layer2Y = useTransform(scrollYProgress, [0, 1], [0, -100])
  const layer3Y = useTransform(scrollYProgress, [0, 1], [0, -150])

  return (
    <div className="w-full h-full relative overflow-hidden bg-gradient-to-b from-violet-900 to-black">
      {/* Layer 3 - Background */}
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{ y: layer3Y }}
      >
        <div className="w-full h-full bg-gradient-to-br from-violet-600/20 to-cyan-600/20" />
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`
            }}
          />
        ))}
      </motion.div>

      {/* Layer 2 - Middle */}
      <motion.div
        className="absolute inset-0 opacity-60"
        style={{ y: layer2Y }}
      >
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute w-8 h-8 border-2 border-cyan-400/40 rounded-full"
            style={{
              left: `${30 + i * 20}%`,
              top: `${40 + i * 15}%`
            }}
          />
        ))}
      </motion.div>

      {/* Layer 1 - Foreground */}
      <motion.div
        className="absolute inset-0"
        style={{ y: layer1Y }}
      >
        <div className="flex items-center justify-center h-full">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-white mb-2">PARALLAX</h3>
            <p className="text-cyan-400">Scroll to see effect</p>
          </div>
        </div>
      </motion.div>

      {/* Static reference point */}
      <div className="absolute bottom-4 right-4 text-xs text-white/50">
        Layers: 3
      </div>
    </div>
  )
}