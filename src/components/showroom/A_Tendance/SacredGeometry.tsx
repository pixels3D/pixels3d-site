import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function FlowerOfLife() {
  const groupRef = useRef<THREE.Group>(null)
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.z = state.clock.elapsedTime * 0.2
    }
  })

  const circles = []
  const radius = 1
  const centerPositions = [
    [0, 0],
    [radius, 0],
    [radius * 0.5, radius * Math.sin(Math.PI / 3)],
    [-radius * 0.5, radius * Math.sin(Math.PI / 3)],
    [-radius, 0],
    [-radius * 0.5, -radius * Math.sin(Math.PI / 3)],
    [radius * 0.5, -radius * Math.sin(Math.PI / 3)]
  ]

  centerPositions.forEach((pos, index) => {
    circles.push(
      <mesh key={index} position={[pos[0], pos[1], 0]}>
        <ringGeometry args={[0.8, 1, 32]} />
        <meshBasicMaterial 
          color="#7c3aed" 
          transparent 
          opacity={0.6}
          side={THREE.DoubleSide}
        />
      </mesh>
    )
  })

  return <group ref={groupRef}>{circles}</group>
}

export default function SacredGeometry() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-black via-violet-950/20 to-black">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={Math.min(window.devicePixelRatio, 2)}
      >
        <ambientLight intensity={0.5} />
        <FlowerOfLife />
        
        {/* Additional geometric elements */}
        <mesh position={[0, 0, -1]}>
          <circleGeometry args={[3, 64]} />
          <meshBasicMaterial 
            color="#22d3ee" 
            transparent 
            opacity={0.1}
            side={THREE.DoubleSide}
          />
        </mesh>
      </Canvas>
      
      {/* Overlay text */}
      <div className="absolute inset-0 flex items-end justify-center pb-4">
        <div className="text-center">
          <div className="text-sm text-violet-300 opacity-80">Sacred Geometry</div>
          <div className="text-xs text-cyan-300 opacity-60">Flower of Life</div>
        </div>
      </div>
    </div>
  )
}