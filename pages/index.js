import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stage, Text } from '@react-three/drei'

import Table from '../components/Table'
import Closure from '../components/Closure'

export default function Index() {
  return (
    <Canvas 
      shadows dpr={[1, 2]} camera={{ position: [0, 0, 150], fov: 40 }}>
      
      <pointLight position={[0, 100, 400]} intensity={0.1} />
        <ambientLight intensity={0.1} />
        <spotLight
          position={[100, 100, 100]}
          penumbra={1}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
      <Suspense fallback={"loading.."}>
        <Stage environment="city" intensity={0.5} contactShadowOpacity={0.6} contactShadowBlur={1}>
          <Table position={[0, 0, 0]} />
          <Closure position={[0, 0.75, 0]} />
          <Text color="black" position={[0.65, 0.5 , -1]} scale={[ 1, 1, 2]} >FULL</Text>
          <Text color="black" position={[0.65, 0.4 , -1]} scale={[ .5, .5, 2]} >SYSTEMS DIRECTORY</Text>
            <Text  color="red" position={[0.65, 0.33 , -1]} scale={[ .5, .4, 2]} >communications@full.international</Text>
        </Stage>
      </Suspense>

      <OrbitControls 
        maxPolarAngle = {Math.PI / 2}
        minPolarAngle = {Math.PI / 3}
        minAzimuthAngle = {-Math.PI / 3} // radians
        maxAzimuthAngle = {Math.PI / 3} // radians
        enableDamping = {true}
        enablePan = {false}
        dampingFactor = {0.1}
        autoRotate = {false} 
        autoRotateSpeed = {0.2} />
    </Canvas>
  )
}
