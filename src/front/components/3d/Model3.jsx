import React from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

// Componente Model: Carga el archivo GLB y lo muestra en la escena.
export function Model(props) {
  // La ruta absoluta al archivo GLB en la carpeta 'public'.
  try {
    const gltf = useGLTF('/NASA.glb'); 
    
    // Devolvemos el objeto 3D cargado.
    return <primitive object={gltf.scene} {...props} />;
  } catch (error) {
    console.error("Error al cargar el modelo GLTF:", error);
    // Renderiza una esfera simple como fallback visual si hay un error de carga
    return (
      <mesh>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color="red" />
      </mesh>
    );
  }
}

// Componente para mostrar un indicador de carga 3D
export function LoadingSpinner3D() {
  const meshRef = React.useRef();
  // Simple animación de rotación
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.02; // Velocidad de rotación
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <ringGeometry args={[0.5, 0.7, 32, 32]} />
      <meshStandardMaterial color="#6366f1" transparent opacity={0.8} />
    </mesh>
  );
}