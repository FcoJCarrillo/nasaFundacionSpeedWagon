import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { Botones } from '../../pages/Botones';


function LoadingSpinner3D() {
  const meshRef = useRef();
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

// La lógica se simplifica para usar useGLTF directamente.
function Model(props) {
  // useGLTF lanza una Promise que es capturada por <Suspense>.
  const gltf = useGLTF('/NASA.glb');

  // Devolvemos el objeto 3D cargado.
  return <primitive object={gltf.scene} {...props} />;
}


// --- Componente principal ---

// Componente principal de la aplicación.
export default function App() {
  return (
    // Contenedor que asegura que la aplicación ocupe toda la ventana del navegador
    // con un fondo negro simple.
    <div className='mb-3'>
      <div className="max-w-7xl mx-auto p-0"
        style={{ width: '75%', height: '700px', backgroundColor: 'black' }}>
        <Canvas
          // Ajustamos la posición de la cámara para ver el modelo más grande.
        >
          {/* Luces */}
          <ambientLight intensity={0.8} />
          <spotLight position={[10, 10, 10]} angle={0.3} penumbra={1} intensity={2} castShadow />
          <directionalLight position={[-5, 5, 5]} intensity={1} />

          {/* Suspense maneja el estado de carga mientras useGLTF obtiene el modelo */}
          <Suspense fallback={<LoadingSpinner3D />}>
            {/* Aumentamos la escala a 2.0 para que se vea más grande */}
            <Model position={[0, 0, 0]} scale={1.0} />
          </Suspense>

          {/* Controles para rotar y hacer zoom */}
          <OrbitControls enableZoom={true} enablePan={true} />
        </Canvas>
      </div>
      <div>
        <Botones />
      </div>

    </div>
  );
}
