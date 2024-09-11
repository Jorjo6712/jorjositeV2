import { motion, useInView, useAnimation } from 'framer-motion'
import { useEffect, useRef } from 'react'

interface ScrollRevealProps {
  children?: JSX.Element|JSX.Element[],
  width?: "fit-content" | "100%",
  y?: number | 55,
  x?: number,
  delay?: number | 0.575,
}

export const ScrollReveal = ({children, width = "fit-content", y, x, delay} : ScrollRevealProps) => {
  
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
    <div ref={ref} style={{ position: 'relative', width, }}>
     <motion.div 
      variants={{
        hidden: { opacity: 0, y: y , x: x },
        visible: { opacity: 1, y: 0, x: 0 },
      }}

      initial='hidden'
      animate={controls}
      transition={{ duration: 0.75, delay: delay }}
    >
      {children}
    </motion.div>
    </div>
  )
}
