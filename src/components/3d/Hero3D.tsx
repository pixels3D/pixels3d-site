import React, { useMemo } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment } from "@react-three/drei"

function Bottle(){
  // Corps = cylindre, col = cylindre fin, bouchon = petit cylindre
  return (
    <group position={[0, -0.5, 0]}>
      {/* Corps */}
      <mesh castShadow receiveShadow>
        <cylinderGeometry args={[0.35, 0.35, 1.6, 64]} />
        <meshStandardMaterial metalness={0.7} roughness={0.25} color="#25223a" />
      </mesh>
      {/* Étiquette */}
      <mesh position={[0, 0.1, 0.352]}>
        <planeGeometry args={[0.5, 0.35]} />
        <meshStandardMaterial color="#f8f8ff" />
      </mesh>
      {/* Col */}
      <mesh position={[0, 0.95, 0]} castShadow>
        <cylinderGeometry args={[0.12, 0.12, 0.5, 48]} />
        <meshStandardMaterial metalness={0.5} roughness={0.35} color="#2b2744" />
      </mesh>
      {/* Capsule */}
      <mesh position={[0, 1.28, 0]} castShadow>
        <cylinderGeometry args={[0.14, 0.14, 0.18, 48]} />
        <meshStandardMaterial metalness={0.3} roughness={0.3} color="#7c3aed" />
      </mesh>
      {/* Base */}
      <mesh rotation={[ -Math.PI/2, 0, 0]} position={[0, -0.85, 0]} receiveShadow>
        <ringGeometry args={[0.35, 0.6, 64]} />
        <meshStandardMaterial color="#13121e" />
      </mesh>
    </group>
  )
}

function Scene(){
  const colorA = "#7c3aed"
  const colorB = "#22d3ee"
  return (
    <>
      <ambientLight intensity={0.6} />
      <pointLight position={[2, 2, 2]} intensity={1.1} color={colorA} />
      <pointLight position={[-2, 1.5, -1]} intensity={0.9} color={colorB} />
      <spotLight position={[0, 5, 3]} angle={0.3} penumbra={0.5} intensity={1.2} castShadow />
      <Bottle />
      <Environment preset="city" />
      <OrbitControls enablePan={false} maxPolarAngle={Math.PI * 0.58} autoRotate autoRotateSpeed={0.8}/>
    </>
  )
}

export default function Hero3D(){
  const dpr = useMemo(()=> Math.min(window.devicePixelRatio ?? 1, 2), [])
  return (
    <div style={{width:"100%", height: 420, borderRadius: 20, overflow:"hidden", border:"1px solid rgba(255,255,255,.08)", background:"rgba(255,255,255,.03)"}}>
      <Canvas shadows dpr={dpr} camera={{ position:[2.2, 1.6, 2.4], fov: 45 }}>
        <Scene />
      </Canvas>
    </div>
  )
}
