"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh } from "three";

const RotatingCube = () => {
    const meshRef = useRef<Mesh>(null);
    useFrame((state, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.x += delta * 0.5;
            meshRef.current.rotation.y += delta * 0.2;
        }
    });

    return (
        <mesh ref={meshRef}>
            <boxGeometry args={[2, 2, 2]} />
            <meshStandardMaterial color="#0047AB" wireframe />
        </mesh>
    );
};

export const HeroShader = () => {
    return (
        <div className="w-full h-full absolute top-0 left-0 -z-10 opacity-50">
            <Canvas>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                <RotatingCube />
            </Canvas>
        </div>
    );
};
