import React, { useRef, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment, MeshTransmissionMaterial, Sphere } from '@react-three/drei'
import { motion } from 'framer-motion'
import * as THREE from 'three'

function AnimatedBottle() {
  const meshRef = useRef<THREE.Mesh>(null)
  
  useEffect(() => {
    if (!meshRef.current) return
    
    const animate = () => {
      if (meshRef.current) {
        meshRef.current.rotation.x += 0.003
        meshRef.current.rotation.y += 0.008
      }
      requestAnimationFrame(animate)
    }
    animate()
  }, [])

  return (
    <group ref={meshRef}>
      {/* Bottle body */}
      <mesh position={[0, -0.5, 0]}>
        <cylinderGeometry args={[0.8, 1, 2, 32]} />
        <MeshTransmissionMaterial
          color="#00ff88"
          thickness={0.3}
          roughness={0.1}
          transmission={0.9}
          ior={1.4}
          chromaticAberration={0.03}
          backside={true}
        />
      </mesh>
      
      {/* Bottle neck */}
      <mesh position={[0, 0.8, 0]}>
        <cylinderGeometry args={[0.3, 0.4, 0.8, 16]} />
        <MeshTransmissionMaterial
          color="#00ff88"
          thickness={0.2}
          roughness={0.05}
          transmission={0.95}
          ior={1.4}
          chromaticAberration={0.02}
        />
      </mesh>
      
      {/* Floating elements */}
      <Sphere args={[0.1]} position={[1.5, 0.5, 0.5]}>
        <MeshTransmissionMaterial
          color="#ff3366"
          thickness={0.1}
          roughness={0}
          transmission={1}
          ior={1.5}
        />
      </Sphere>
      
      <Sphere args={[0.08]} position={[-1.2, -0.3, 0.8]}>
        <MeshTransmissionMaterial
          color="#00ccff"
          thickness={0.1}
          roughness={0}
          transmission={1}
          ior={1.5}
        />
      </Sphere>
      
      <Sphere args={[0.06]} position={[0.8, -1, -0.5]}>
        <MeshTransmissionMaterial
          color="#ffff00"
          thickness={0.1}
          roughness={0}
          transmission={1}
          ior={1.5}
        />
      </Sphere>
    </group>
  )
}

function Lights() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#00ff88" />
      <spotLight
        position={[0, 10, 0]}
        angle={0.3}
        penumbra={1}
        intensity={0.8}
        castShadow
      />
    </>
  )
}

function Scene() {
  return (
    <>
      <Environment preset="city" />
      <Lights />
      <AnimatedBottle />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.3}
        maxPolarAngle={Math.PI / 1.6}
        minPolarAngle={Math.PI / 2.8}
        enableDamping
        dampingFactor={0.05}
      />
    </>
  )
}

interface Hero3DProps {
  className?: string
}

export default function Hero3D({ className = '' }: Hero3DProps) {
  const [webglSupported, setWebglSupported] = useState(true)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // Check WebGL support
    try {
      const canvas = document.createElement('canvas')
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
      if (!gl) {
        setWebglSupported(false)
        setError('WebGL non supporté par votre navigateur')
      }
    } catch (e) {
      setWebglSupported(false)
      setError('Erreur lors de l\'initialisation WebGL')
    }
    
    // Simulate loading
    const timer = setTimeout(() => setIsLoading(false), 1500)
    return () => clearTimeout(timer)
  }, [])

  if (!webglSupported || error) {
    return (
      <div className={`relative ${className}`}>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex items-center justify-center h-full glass rounded-2xl"
        >
          <div className="text-center p-8">
            <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-emerald-400/20 to-blue-400/20 rounded-full flex items-center justify-center">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-blue-400 rounded-lg rotate-45 animate-pulse" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Expérience 3D</h3>
            <p className="text-gray-400 text-sm mb-4">
              {error || 'WebGL requis pour l\'affichage 3D'}
            </p>
            <p className="text-xs text-gray-500">
              Découvrez nos créations dans la section Portfolio
            </p>
          </div>
        </motion.div>
      </div>
    )
  }

  return (
    <div className={`relative ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center glass backdrop-blur-sm z-10 rounded-2xl">
          <div className="text-center">
            <div className="w-8 h-8 border-2 border-emerald-400 border-t-transparent rounded-full animate-spin mx-auto mb-3" />
            <p className="text-sm text-gray-400">Initialisation 3D...</p>
          </div>
        </div>
      )}
      
      <div className="w-full h-full glass rounded-2xl overflow-hidden">
        <Canvas
          camera={{ position: [0, 0, 5], fov: 45 }}
          gl={{ 
            antialias: true, 
            alpha: true,
            powerPreference: "high-performance"
          }}
          onCreated={() => setIsLoading(false)}
          onError={(error) => {
            console.error('Canvas error:', error)
            setError('Erreur de rendu 3D')
            setIsLoading(false)
          }}
          style={{ background: 'transparent' }}
        >
          <Scene />
        </Canvas>
      </div>
    </div>
  )
}