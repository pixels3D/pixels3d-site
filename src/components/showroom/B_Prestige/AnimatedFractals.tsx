import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function FractalPattern() {
  const meshRef = useRef<THREE.Mesh>(null)
  
  const shader = useMemo(() => ({
    vertexShader: `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform float time;
      varying vec2 vUv;
      
      vec3 palette(float t) {
        vec3 a = vec3(0.5, 0.5, 0.5);
        vec3 b = vec3(0.5, 0.5, 0.5);
        vec3 c = vec3(1.0, 1.0, 1.0);
        vec3 d = vec3(0.263, 0.416, 0.557);
        return a + b * cos(6.28318 * (c * t + d));
      }
      
      void main() {
        vec2 uv = (vUv - 0.5) * 2.0;
        vec2 uv0 = uv;
        vec3 finalColor = vec3(0.0);
        
        for (float i = 0.0; i < 4.0; i++) {
          uv = fract(uv * 1.5) - 0.5;
          float d = length(uv) * exp(-length(uv0));
          vec3 col = palette(length(uv0) + i * 0.4 + time * 0.4);
          d = sin(d * 8.0 + time) / 8.0;
          d = abs(d);
          d = pow(0.01 / d, 1.2);
          finalColor += col * d;
        }
        
        gl_FragColor = vec4(finalColor, 1.0);
      }
    `
  }), [])

  useFrame((state) => {
    if (meshRef.current && meshRef.current.material) {
      (meshRef.current.material as any).uniforms.time.value = state.clock.elapsedTime
    }
  })

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[4, 4, 1, 1]} />
      <shaderMaterial
        vertexShader={shader.vertexShader}
        fragmentShader={shader.fragmentShader}
        uniforms={{
          time: { value: 0 }
        }}
      />
    </mesh>
  )
}

export default function AnimatedFractals() {
  return (
    <div className="w-full h-full bg-black">
      <Canvas
        camera={{ position: [0, 0, 3], fov: 45 }}
        dpr={Math.min(window.devicePixelRatio, 2)}
      >
        <FractalPattern />
      </Canvas>
    </div>
  )
}