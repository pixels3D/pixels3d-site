import React, { useRef, useCallback } from 'react'
import { motion } from 'framer-motion'

interface RadiantButtonProps {
  children: React.ReactNode
  onClick?: () => void
  className?: string
  hoverAlpha?: number
  hoverRadius?: number
  burstAlpha?: number
  burstRadius?: number
  haloColor?: string
  disabled?: boolean
}

export default function RadiantButton({
  children,
  onClick,
  className = '',
  hoverAlpha = 0.28,
  hoverRadius = 900,
  burstAlpha = 0.48,
  burstRadius = 1500,
  haloColor = '#8b5cf6',
  disabled = false
}: RadiantButtonProps) {
  const rafRef = useRef<number>()
  const buttonRef = useRef<HTMLButtonElement>(null)

  const getRelativePosition = useCallback((event: React.MouseEvent | React.TouchEvent) => {
    if (!buttonRef.current) return { x: 50, y: 50 }
    
    const rect = buttonRef.current.getBoundingClientRect()
    const clientX = 'touches' in event ? event.touches[0]?.clientX || 0 : event.clientX
    const clientY = 'touches' in event ? event.touches[0]?.clientY || 0 : event.clientY
    
    const x = ((clientX - rect.left) / rect.width) * 100
    const y = ((clientY - rect.top) / rect.height) * 100
    
    return { x, y }
  }, [])

  const emitHalo = useCallback((x: number, y: number, alpha: number, radius: number) => {
    window.dispatchEvent(new CustomEvent('halo:set', {
      detail: { x, y, alpha, radius, color: haloColor }
    }))
  }, [haloColor])

  const throttledMouseMove = useCallback((event: React.MouseEvent) => {
    if (rafRef.current) return
    
    rafRef.current = requestAnimationFrame(() => {
      const { x, y } = getRelativePosition(event)
      emitHalo(x, y, hoverAlpha, hoverRadius)
      rafRef.current = undefined
    })
  }, [getRelativePosition, emitHalo, hoverAlpha, hoverRadius])

  const handleMouseEnter = useCallback((event: React.MouseEvent) => {
    const { x, y } = getRelativePosition(event)
    emitHalo(x, y, hoverAlpha, hoverRadius)
  }, [getRelativePosition, emitHalo, hoverAlpha, hoverRadius])

  const handleMouseLeave = useCallback(() => {
    window.dispatchEvent(new CustomEvent('halo:off'))
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current)
      rafRef.current = undefined
    }
  }, [])

  const handleMouseDown = useCallback((event: React.MouseEvent) => {
    const { x, y } = getRelativePosition(event)
    emitHalo(x, y, burstAlpha, burstRadius)
  }, [getRelativePosition, emitHalo, burstAlpha, burstRadius])

  const handleMouseUp = useCallback((event: React.MouseEvent) => {
    const { x, y } = getRelativePosition(event)
    emitHalo(x, y, hoverAlpha, hoverRadius)
  }, [getRelativePosition, emitHalo, hoverAlpha, hoverRadius])

  const handleTouchStart = useCallback((event: React.TouchEvent) => {
    const { x, y } = getRelativePosition(event)
    emitHalo(x, y, burstAlpha, burstRadius)
  }, [getRelativePosition, emitHalo, burstAlpha, burstRadius])

  const handleTouchEnd = useCallback(() => {
    window.dispatchEvent(new CustomEvent('halo:off'))
  }, [])

  return (
    <motion.button
      ref={buttonRef}
      onClick={onClick}
      disabled={disabled}
      className={`
        relative inline-flex items-center justify-center px-8 py-4 
        bg-gradient-to-r from-violet-500 to-cyan-500 
        text-white font-semibold rounded-lg
        transition-all duration-300 
        hover:shadow-lg hover:shadow-violet-500/25
        focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-offset-2 focus:ring-offset-gray-900
        disabled:opacity-50 disabled:cursor-not-allowed
        ${className}
      `}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={throttledMouseMove}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-cyan-600 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300" />
      <span className="relative z-10">{children}</span>
    </motion.button>
  )
}