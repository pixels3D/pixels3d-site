import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function WaveSurface() {
  const meshRef = useRef<THREE.Mesh>(null)
  
  const geometry = useMemo(() => {
    const geo = new THREE.PlaneGeometry(8, 8, 32, 32)
    return geo
  }, [])

  useFrame((state) => {
    if (meshRef.current && meshRef.current.geometry) {
      const positions = meshRef.current.geometry.attributes.position
      const time = state.clock.elapsedTime

      for (let i = 0; i < positions.count; i++) {
        const x = positions.getX(i)
        const y = positions.getY(i)
        
        const wave1 = Math.sin(x * 0.5 + time) * 0.3
        const wave2 = Math.sin(y * 0.3 + time * 0.8) * 0.2
        const wave3 = Math.sin((x + y) * 0.2 + time * 0.5) * 0.1
        
        positions.setZ(i, wave1 + wave2 + wave3)
      }
      
      positions.needsUpdate = true
      meshRef.current.geometry.computeVertexNormals()
    }
  })

  return (
    <mesh ref={meshRef} geometry={geometry} rotation={[-Math.PI / 4, 0, 0]}>
      <meshStandardMaterial 
        color="#7c3aed"
        wireframe={true}
        transparent
        opacity={0.8}
      />
    </mesh>
  )
}

export default function MorphingWave() {
  return (
    <div className="w-full h-full bg-gradient-to-b from-black to-violet-950/20">
      <Canvas
        camera={{ position: [0, 4, 6], fov: 45 }}
        dpr={Math.min(window.devicePixelRatio, 2)}
      >
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#22d3ee" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#7c3aed" />
        
        <WaveSurface />
        
        {/* Background plane */}
        <mesh position={[0, -2, -2]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[20, 20]} />
          <meshBasicMaterial color="#000000" />
        </mesh>
      </Canvas>
    </div>
  )
}