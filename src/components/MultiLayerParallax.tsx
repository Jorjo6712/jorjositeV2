import { Image } from './Image'

import { motion, useScroll, useTransform } from 'framer-motion'
import React from 'react'

export const MultiLayerParallax : React.FC <{ parentRef: React.RefObject<HTMLDivElement> }> = ({ parentRef }) => {
  const { scrollYProgress } = useScroll({
    target: parentRef,
    offset: ["start start", "end start"]
  })
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"])
  const middlegroundY = useTransform(scrollYProgress, [0, 1], ["0%", "15.65%"])
  const foregroundY = useTransform(scrollYProgress, [0, 1], ["0%", "15.85%"])

  return (
    <>
       <motion.div className="absolute inset-0 z-0 bg-bottom bg-cover"
          style={{
            y: backgroundY
          }}
       >
          <Image 
            imgUrl="./bg-full.jpg"
            style="w-full h-full object-cover shadow-lg shadow-black" 
          />
       </motion.div>
       <motion.div className="absolute inset-0 xl:z-10 bg-bottom bg-cover"
          style={{
            y: middlegroundY
          }}
       >
          <Image 
            imgUrl="./bg-middle.png"
            style="w-full h-full object-cover z-10" 
          />
       </motion.div> 
       <motion.div className="absolute inset-0 z-20 bg-bottom bg-cover"
          style={{
            y: foregroundY
          }}
       >
          <Image 
            imgUrl="./bg-bottom.png"
            style="w-full h-full z-20 object-cover" 
          />
       </motion.div> 
    </>
  )
}
