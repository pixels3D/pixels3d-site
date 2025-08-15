import React, { useRef, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Text3D, Center, Environment, MeshTransmissionMaterial } from '@react-three/drei'
import { motion } from 'framer-motion'
import * as THREE from 'three'

function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null)
  
  useEffect(() => {
    if (!meshRef.current) return
    
    const animate = () => {
      if (meshRef.current) {
        meshRef.current.rotation.x += 0.005
        meshRef.current.rotation.y += 0.01
      }
      requestAnimationFrame(animate)
    }
    animate()
  }, [])

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <icosahedronGeometry args={[1, 0]} />
      <MeshTransmissionMaterial
        color="#00ff88"
        thickness={0.5}
        roughness={0}
        transmission={1}
        ior={1.5}
        chromaticAberration={0.02}
        backside={true}
      />
    </mesh>
  )
}

function Scene() {
  return (
    <>
      <Environment preset="city" />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <AnimatedSphere />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
        maxPolarAngle={Math.PI / 1.8}
        minPolarAngle={Math.PI / 2.5}
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

  useEffect(() => {
    // Check WebGL support
    try {
      const canvas = document.createElement('canvas')
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
      setWebglSupported(!!gl)
    } catch (e) {
      setWebglSupported(false)
    }
    
    // Simulate loading
    const timer = setTimeout(() => setIsLoading(false), 1000)
    return () => clearTimeout(timer)
  }, [])

  if (!webglSupported) {
    return (
      <div className={`relative ${className}`}>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex items-center justify-center h-full bg-gradient-to-br from-emerald-500/20 to-blue-500/20 rounded-2xl border border-white/10"
        >
          <div className="text-center p-8">
            <div className="w-24 h-24 mx-auto mb-4 bg-emerald-400/20 rounded-full flex items-center justify-center">
              <div className="w-12 h-12 bg-emerald-400 rounded-lg rotate-45" />
            </div>
            <p className="text-gray-300">WebGL non supporté</p>
            <p className="text-sm text-gray-500 mt-2">Fallback image loading...</p>
          </div>
        </motion.div>
      </div>
    )
  }

  return (
    <div className={`relative ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-10 rounded-2xl">
          <div className="text-center">
            <div className="w-8 h-8 border-2 border-emerald-400 border-t-transparent rounded-full animate-spin mx-auto mb-2" />
            <p className="text-sm text-gray-400">Chargement 3D...</p>
          </div>
        </div>
      )}
      <Canvas
        camera={{ position: [0, 0, 4], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        onCreated={() => setIsLoading(false)}
        style={{ background: 'transparent' }}
      >
        <Scene />
      </Canvas>
    </div>
  )
}