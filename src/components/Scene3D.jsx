import { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import {
  Float,
  Environment,
  MeshDistortMaterial,
  Stars,
  Icosahedron,
  Torus,
  TorusKnot,
  Box,
} from '@react-three/drei'

function CoreBlob() {
  const ref = useRef()
  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    if (ref.current) {
      ref.current.rotation.y = t * 0.18
      ref.current.rotation.x = Math.sin(t * 0.2) * 0.15
    }
  })
  return (
    <Float speed={1.4} rotationIntensity={0.6} floatIntensity={1.1}>
      <Icosahedron ref={ref} args={[1.45, 6]}>
        <MeshDistortMaterial
          color="#7c5cff"
          emissive="#3a1d8a"
          emissiveIntensity={0.45}
          roughness={0.15}
          metalness={0.85}
          distort={0.38}
          speed={1.6}
        />
      </Icosahedron>
    </Float>
  )
}

function OrbiterKnot() {
  return (
    <Float speed={2} rotationIntensity={1.4} floatIntensity={1.6}>
      <TorusKnot args={[0.32, 0.12, 160, 24]} position={[2.6, 1.1, -0.5]}>
        <meshStandardMaterial
          color="#21d4fd"
          emissive="#0a6f87"
          emissiveIntensity={0.5}
          roughness={0.2}
          metalness={0.9}
        />
      </TorusKnot>
    </Float>
  )
}

function OrbiterRing() {
  const ref = useRef()
  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    if (ref.current) {
      ref.current.rotation.x = t * 0.5
      ref.current.rotation.y = t * 0.3
    }
  })
  return (
    <Float speed={1.6} rotationIntensity={1} floatIntensity={1.2}>
      <Torus ref={ref} args={[0.55, 0.06, 24, 80]} position={[-2.7, -1, -0.6]}>
        <meshStandardMaterial
          color="#ff6ad5"
          emissive="#7a1d5e"
          emissiveIntensity={0.5}
          roughness={0.25}
          metalness={0.85}
        />
      </Torus>
    </Float>
  )
}

function OrbiterCube() {
  return (
    <Float speed={2.2} rotationIntensity={2} floatIntensity={1.4}>
      <Box args={[0.45, 0.45, 0.45]} position={[2.2, -1.4, 0.4]}>
        <meshStandardMaterial
          color="#42e695"
          emissive="#147a44"
          emissiveIntensity={0.45}
          roughness={0.3}
          metalness={0.7}
        />
      </Box>
    </Float>
  )
}

function ParallaxRig({ children }) {
  const group = useRef()
  useFrame((state) => {
    if (group.current) {
      const x = state.pointer.x * 0.4
      const y = state.pointer.y * 0.3
      group.current.rotation.y += (x - group.current.rotation.y) * 0.05
      group.current.rotation.x += (-y - group.current.rotation.x) * 0.05
    }
  })
  return <group ref={group}>{children}</group>
}

export default function Scene3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 45 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} />
        <pointLight position={[-5, -3, 2]} intensity={2} color="#21d4fd" />
        <pointLight position={[5, 3, -2]} intensity={2} color="#ff6ad5" />
        <Stars radius={60} depth={40} count={2500} factor={4} saturation={0} fade speed={1} />
        <ParallaxRig>
          <CoreBlob />
          <OrbiterKnot />
          <OrbiterRing />
          <OrbiterCube />
        </ParallaxRig>
        <Environment preset="city" />
      </Suspense>
    </Canvas>
  )
}
