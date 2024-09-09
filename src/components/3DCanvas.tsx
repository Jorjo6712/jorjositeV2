import { Canvas } from '@react-three/fiber/'
import { Chomuske } from './Chomuske'
export const ThreeDCanvas : React.FC = () => {
  return (
    <div id='canvas-container' className='xl:w-20 xl:h-10 w-20 h-10'>
      <Canvas camera={{ fov: 55, near: 0.1, far: 1000 }}>
        <ambientLight intensity={3} />
        <Chomuske/>        
      </Canvas>
    </div>
  )
}

