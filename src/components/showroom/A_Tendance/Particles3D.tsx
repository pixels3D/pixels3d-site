import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

function ParticleSystem() {
  const ref = useRef<THREE.Points>(null)
  
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(100 * 3)
    for (let i = 0; i < 100; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10
    }
    return positions
  }, [])

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1
      ref.current.rotation.y = state.clock.elapsedTime * 0.1
    }
  })

  return (
    <Points ref={ref} positions={particlesPosition} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#7c3aed"
        size={0.1}
        sizeAttenuation={true}
        depthWrite={false}
      />
    </Points>
  )
}

export default function Particles3D() {
  return (
    <div className="w-full h-full bg-gradient-to-b from-gray-900 to-black">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={Math.min(window.devicePixelRatio, 2)}
      >
        <ambientLight intensity={0.5} />
        <ParticleSystem />
      </Canvas>
    </div>
  )
}