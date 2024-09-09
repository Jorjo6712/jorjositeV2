import { motion, useInView, useAnimation } from 'framer-motion'
import React, { useEffect, useRef } from 'react'

interface ScrollRevealProps {
  children?: JSX.Element|JSX.Element[],
  width?: "fit-content" | "100%"
}

export const ScrollReveal = ({children, width = "fit-content"} : ScrollRevealProps) => {
  
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  
  const controls = useAnimation() 

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    } else {
      controls.start('hidden')
    }
  }, [controls, isInView])

  return (
    <div ref={ref} style={{position: 'relative', width, }}>
     <motion.div 
        variants={{
        hidden: { opacity: 0, y: 55 },
        visible: { opacity: 1, y: 0 },
      }}

      initial='hidden'
      animate={controls}
      transition={{ duration: 0.75, delay: 0.575 }}
    >
      {children}
    </motion.div>
    </div>
  )
}
