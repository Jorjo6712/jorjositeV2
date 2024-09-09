/**
 * INFO:
 * This work is based on "Chomusuke" (https://sketchfab.com/3d-models/chomusuke-fcdfb068ecc34d4780cf377c536 * fd650) by HTH (https://sketchfab.com/hth317) licensed under CC-BY-4.0 (http://creativecommons.org/licen  * ses/by/4.0/)% 
 *
 * Model License:
 * License type:	CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
 **/


import React, { useEffect, useRef } from 'react'
import { useFrame, useLoader, useThree } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { Mesh } from 'three'

export const Chomuske : React.FC = () => {
  const gltf = useLoader(GLTFLoader, '/scene.gltf')
  
  const chomuskeRef = useRef<Mesh>(null)

  useFrame(() => {
    if (chomuskeRef.current) {
      chomuskeRef.current.rotation.y += 0.0085
    }
  })

  const { camera } = useThree()
    
  useEffect(() => {
    camera.position.set(0, 2.35, 5) 
    camera.rotation.set(0, 0.1, 0)
  }, [camera])

  return (
    <>
      <primitive ref={chomuskeRef} object={gltf.scene} />
    </>
  )
}
