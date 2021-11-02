import React, { Suspense } from 'react'
import { Canvas  } from '@react-three/fiber'
import { OrbitControls, Stage, useProgress, Html } from '@react-three/drei'

import E from './Geometry/E'
import X from './Geometry/X'
import Y from './Geometry/Y'
import V from './Geometry/V'


function CustomLoader() {
  const { progress } = useProgress()
  return (
    <Html center>
      <span style={{ color: 'black' }}>{progress} % loaded</span>
    </Html>
  )
}


export default function Projection() {
    return (
        <Canvas 
            shadows 
            dpr={[1, 2]} 
            camera={{  fov: 25, near: 0.1, far: 1000, position: [0, 1, 5] }}
        >
        
            <pointLight position={[0, 100, 400]} intensity={0.1} />
            <ambientLight intensity={0.1} />
            <spotLight
                position={[100, 100, 100]}
                penumbra={1}
                castShadow
                shadow-mapSize-width={1024}
                shadow-mapSize-height={1024}
            />
        <Suspense fallback={<CustomLoader />}>
            <Stage adjustCamera={false} preset="rembrandt" environment="city" intensity={0.5} contactShadowOpacity={0.6} contactShadowBlur={1}>
            <Y position={[0, 0, 0]} />
            <X position={[0, 0.10, 0]} />
            <E position={[0, 0, 0.20]} />
            <V position={[0, 0.40, 0]} />
            </Stage>
        </Suspense>

        <OrbitControls 
            maxPolarAngle = {Math.PI / 2}
            minPolarAngle = {Math.PI / 3}
            minAzimuthAngle = {-Math.PI / 3} // radians
            maxAzimuthAngle = {Math.PI / 3} // radians
            enableDamping = {true}
            enablePan={false} 
            enableZoom={false}
            dampingFactor = {0.1}
            autoRotate = {false} 
            autoRotateSpeed = {0.2} />
        </Canvas>
    )
}
