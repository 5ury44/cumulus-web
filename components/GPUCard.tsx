"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Canvas } from "@react-three/fiber";
import { Group } from "three";
import { Float, Box, OrbitControls } from "@react-three/drei";

function GPUCardModel() {
  const groupRef = useRef<Group>(null!);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime) * 0.1;
      groupRef.current.rotation.x =
        Math.cos(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <group ref={groupRef}>
        {/* GPU Card Base */}
        <Box args={[3, 0.2, 2]} position={[0, 0, 0]}>
          <meshStandardMaterial
            color="#1e293b"
            metalness={0.8}
            roughness={0.2}
            emissive="#6366f1"
            emissiveIntensity={0.2}
          />
        </Box>

        {/* GPU Chip */}
        <Box args={[1, 0.15, 1]} position={[0, 0.15, 0]}>
          <meshStandardMaterial
            color="#0f172a"
            metalness={0.9}
            roughness={0.1}
          />
        </Box>

        {/* Heat Sink Fins */}
        {Array.from({ length: 8 }).map((_, i) => (
          <Box
            key={i}
            args={[2.8, 0.3, 0.05]}
            position={[0, 0.25 + i * 0.1, 0.8]}
          >
            <meshStandardMaterial
              color="#475569"
              metalness={0.6}
              roughness={0.4}
            />
          </Box>
        ))}

        {/* Connector */}
        <Box args={[0.8, 0.1, 0.2]} position={[-1.2, -0.15, 0]}>
          <meshStandardMaterial
            color="#6366f1"
            emissive="#6366f1"
            emissiveIntensity={0.5}
          />
        </Box>

        {/* Power Connector */}
        <Box args={[0.4, 0.1, 0.3]} position={[1.2, 0.05, 0]}>
          <meshStandardMaterial
            color="#8b5cf6"
            emissive="#8b5cf6"
            emissiveIntensity={0.4}
          />
        </Box>
      </group>
    </Float>
  );
}

export default function GPUCard() {
  return (
    <div className="w-full h-full">
      <div className="w-full h-[500px] md:h-[600px] relative">
        <div className="absolute inset-0 bg-gradient-to-br from-[#6366f1]/20 via-[#8b5cf6]/10 to-transparent rounded-2xl" />
        <Canvas
          camera={{ position: [0, 0, 5], fov: 50 }}
          gl={{ antialias: true, alpha: true }}
          className="w-full h-full"
        >
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <pointLight position={[-5, -5, -5]} intensity={0.5} color="#6366f1" />
          <GPUCardModel />
          <OrbitControls
            enableZoom={false}
            autoRotate
            autoRotateSpeed={0.5}
            minPolarAngle={Math.PI / 3}
            maxPolarAngle={Math.PI / 3}
          />
        </Canvas>
      </div>
    </div>
  );
}
