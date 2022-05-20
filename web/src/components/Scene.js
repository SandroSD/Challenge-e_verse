import { Grid } from '@mui/material'
import { useRef, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import Cube from './Cube';
import Pyramid from './Pyramid';
import Sphere from './Sphere';

const canvasStyle = {
  marginTop: '5em',
  height: '700px',
  width: '100vw'
}

function Box({shape, color}) {
  const mesh = useRef();
  useFrame((state, delta) => {
    mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
    mesh.current.rotation.y = mesh.current.rotation.x += 0.01;
  });

  return (
    <mesh position={[0, 0, 0]} rotation={[90, 20, 20]} ref={mesh}>
      {shape === "cube" && <Cube />}
      {shape === "sphere" && <Sphere />}
      {shape === "triangle" && <Pyramid />}
      <meshLambertMaterial attach="material" color={color} />
    </mesh>
  );
}

function Scene({ color, shape }) {
  
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
    >
      <Grid item>
        <Canvas
          style={canvasStyle}
          colorManagement
          shadowMap
        >
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0.2} />
          <directionalLight
            position={[-2, 5, 2]}
            intensity={0.5}
            castShadow
            shadow-mapSize-height={512}
            shadow-mapSize-width={512}
          />
          <Suspense fallback={null}>
            <Box shape={shape} color={color} />
          </Suspense>
        </Canvas>      
      </Grid>
    </Grid>
  )
}

export default Scene
