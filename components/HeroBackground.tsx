"use client"

import { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Points, PointMaterial } from "@react-three/drei"
import type * as THREE from "three"

function FloatingOrbs({ count = 100, mouse }) {
  const mesh = useRef<THREE.Points>(null!)
  const light = useRef<THREE.PointLight>(null!)

  const particlePositions = useMemo(() => {
    const positions = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10
    }
    return positions
  }, [count])

  useFrame((state, delta) => {
    mesh.current.rotation.x += delta * 0.01
    mesh.current.rotation.y += delta * 0.02

    light.current.position.x = mouse.current[0] * 5
    light.current.position.y = mouse.current[1] * 5
  })

  return (
    <>
      <pointLight ref={light} distance={40} intensity={8} color="white" />
      <Points ref={mesh}>
        <PointMaterial transparent vertexColors size={0.15} sizeAttenuation={true} depthWrite={false} />
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particlePositions.length / 3}
            array={particlePositions}
            itemSize={3}
          />
        </bufferGeometry>
      </Points>
    </>
  )
}

export default function HeroBackground() {
  const mouse = useRef([0, 0])

  return (
    <div
      className="absolute inset-0 -z-10"
      onMouseMove={(e) => {
        mouse.current = [(e.clientX / window.innerWidth) * 2 - 1, -(e.clientY / window.innerHeight) * 2 + 1]
      }}
    >
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <color attach="background" args={["#050816"]} />
        <ambientLight intensity={0.5} />
        <FloatingOrbs count={200} mouse={mouse} />
      </Canvas>
    </div>
  )
}

