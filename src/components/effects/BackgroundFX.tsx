import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

interface Star {
  x: number
  y: number
  size: number
  opacity: number
  speed: number
}

export default function BackgroundFX() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const starsRef = useRef<Star[]>([])
  const animationRef = useRef<number>()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const createStars = () => {
      const stars: Star[] = []
      const numStars = Math.floor((window.innerWidth * window.innerHeight) / 8000)
      
      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.5,
          opacity: Math.random() * 0.8 + 0.2,
          speed: Math.random() * 0.5 + 0.1
        })
      }
      
      starsRef.current = stars
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      // Draw stars
      starsRef.current.forEach(star => {
        ctx.save()
        ctx.globalAlpha = star.opacity
        ctx.fillStyle = '#ffffff'
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()

        // Animate opacity
        star.opacity += (Math.random() - 0.5) * 0.02
        star.opacity = Math.max(0.1, Math.min(1, star.opacity))

        // Slow drift
        star.x += (Math.random() - 0.5) * star.speed
        star.y += (Math.random() - 0.5) * star.speed

        // Wrap around edges
        if (star.x < 0) star.x = canvas.width
        if (star.x > canvas.width) star.x = 0
        if (star.y < 0) star.y = canvas.height
        if (star.y > canvas.height) star.y = 0
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    resizeCanvas()
    createStars()
    animate()

    const handleResize = () => {
      resizeCanvas()
      createStars()
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Animated background canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ background: 'radial-gradient(ellipse at center, #0a0a0a 0%, #000000 100%)' }}
      />
      
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/10 via-transparent to-blue-900/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
      
      {/* Floating halos */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-400/5 rounded-full blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute top-3/4 right-1/4 w-80 h-80 bg-blue-400/5 rounded-full blur-3xl"
        animate={{
          x: [0, -80, 0],
          y: [0, 60, 0],
          scale: [1, 0.8, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute top-1/2 right-1/3 w-64 h-64 bg-pink-400/5 rounded-full blur-3xl"
        animate={{
          x: [0, 60, 0],
          y: [0, -80, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  )
}