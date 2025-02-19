"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import type { Mesh } from "three"

export default function VRHeadset() {
  const meshRef = useRef<Mesh>(null!)

  useFrame((state, delta) => {
    meshRef.current.rotation.x += delta * 0.25
    meshRef.current.rotation.y += delta * 0.5
  })

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1.5, 1, 0.75]} />
      <meshStandardMaterial color={"#4a4a4a"} />
    </mesh>
  )
}

