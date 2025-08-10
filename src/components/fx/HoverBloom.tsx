import React, { useEffect, useRef } from 'react'

interface HaloState {
  x: number
  y: number
  alpha: number
  radius: number
  color: string
  targetAlpha: number
  targetRadius: number
  lastUpdate: number
}

export default function HoverBloom() {
  const rafRef = useRef<number>()
  const haloState = useRef<HaloState>({
    x: 50,
    y: 50,
    alpha: 0,
    radius: 0,
    color: '#8b5cf6',
    targetAlpha: 0,
    targetRadius: 0,
    lastUpdate: Date.now()
  })

  const updateHaloCSS = (state: HaloState) => {
    document.documentElement.style.setProperty('--halo-x', `${state.x}%`)
    document.documentElement.style.setProperty('--halo-y', `${state.y}%`)
    document.documentElement.style.setProperty('--halo-alpha', state.alpha.toString())
    document.documentElement.style.setProperty('--halo-radius', `${state.radius}px`)
    document.documentElement.style.setProperty('--halo-color', state.color)
  }

  const animate = () => {
    const state = haloState.current
    const now = Date.now()
    const dt = Math.min(now - state.lastUpdate, 16) / 16 // Normalize to 60fps
    state.lastUpdate = now

    // Auto-decay if no events for 180ms
    if (now - state.lastUpdate > 180) {
      state.targetAlpha = 0
      state.targetRadius = 0
    }

    // Smooth interpolation with inertia
    const lerpFactor = 0.12 * dt
    state.alpha += (state.targetAlpha - state.alpha) * lerpFactor
    state.radius += (state.targetRadius - state.radius) * lerpFactor

    updateHaloCSS(state)

    // Continue animation if values are changing
    if (Math.abs(state.targetAlpha - state.alpha) > 0.001 || 
        Math.abs(state.targetRadius - state.radius) > 1) {
      rafRef.current = requestAnimationFrame(animate)
    }
  }

  useEffect(() => {
    const handleHaloSet = (event: CustomEvent) => {
      const { x, y, alpha, radius, color } = event.detail
      const state = haloState.current
      
      state.x = x
      state.y = y
      state.targetAlpha = alpha
      state.targetRadius = radius
      state.color = color || '#8b5cf6'
      state.lastUpdate = Date.now()

      if (!rafRef.current) {
        rafRef.current = requestAnimationFrame(animate)
      }
    }

    const handleHaloOff = () => {
      const state = haloState.current
      state.targetAlpha = 0
      state.targetRadius = 0
      state.lastUpdate = Date.now()

      if (!rafRef.current) {
        rafRef.current = requestAnimationFrame(animate)
      }
    }

    window.addEventListener('halo:set', handleHaloSet as EventListener)
    window.addEventListener('halo:off', handleHaloOff)

    return () => {
      window.removeEventListener('halo:set', handleHaloSet as EventListener)
      window.removeEventListener('halo:off', handleHaloOff)
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
    }
  }, [])

  return (
    <div 
      className="fixed inset-0 pointer-events-none z-[2]"
      style={{
        background: `
          radial-gradient(
            circle at var(--halo-x) var(--halo-y),
            color-mix(in srgb, var(--halo-color) calc(var(--halo-alpha) * 60%), transparent) 0%,
            transparent calc(var(--halo-radius) * 0.3px)
          ),
          radial-gradient(
            circle at var(--halo-x) var(--halo-y),
            color-mix(in srgb, var(--halo-color) calc(var(--halo-alpha) * 35%), transparent) 0%,
            transparent calc(var(--halo-radius) * 0.6px)
          )
        `,
        mixBlendMode: 'screen'
      }}
    />
  )
}