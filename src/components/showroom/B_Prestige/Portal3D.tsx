import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

function Portal() {
  const portalRef = useRef<THREE.Mesh>(null)
  const particlesRef = useRef<THREE.Points>(null)
  
  useFrame((state) => {
    if (portalRef.current) {
      portalRef.current.rotation.z = state.clock.elapsedTime * 0.5
    }
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.3
    }
  })

  // Generate spiral particles
  const particlePositions = new Float32Array(200 * 3)
  for (let i = 0; i < 200; i++) {
    const angle = (i / 200) * Math.PI * 8
    const radius = (i / 200) * 3
    particlePositions[i * 3] = Math.cos(angle) * radius
    particlePositions[i * 3 + 1] = Math.sin(angle) * radius
    particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 2
  }

  return (
    <>
      {/* Portal ring */}
      <mesh ref={portalRef}>
        <torusGeometry args={[2, 0.1, 16, 100]} />
        <meshBasicMaterial color="#7c3aed" />
      </mesh>
      
      {/* Inner portal */}
      <mesh>
        <circleGeometry args={[1.8, 64]} />
        <meshBasicMaterial 
          color="#22d3ee" 
          transparent 
          opacity={0.3}
          side={THREE.DoubleSide}
        />
      </mesh>
      
      {/* Spiral particles */}
      <Points ref={particlesRef} positions={particlePositions} stride={3}>
        <PointMaterial
          transparent
          color="#ffffff"
          size={0.05}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </>
  )
}

export default function Portal3D() {
  return (
    <div className="w-full h-full bg-black">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        dpr={Math.min(window.devicePixelRatio, 2)}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Portal />
      </Canvas>
    </div>
  )
}