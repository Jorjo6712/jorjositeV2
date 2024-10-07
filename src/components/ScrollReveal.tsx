import { motion, useInView, useAnimation } from 'framer-motion'
import { useEffect, useRef } from 'react'

interface ScrollRevealProps {
  children?: JSX.Element | JSX.Element[],
  width?: "fit-content" | "100%",
  y?: number | 55,
  x?: number,
  delay?: number | 0.575,
  transitionDuration: number | 0.75,
  once: boolean | true,
  scaleHidden?: number,
  scaleVisible?: number,
}
/* INFO: Some of the props are very specific 
 * for split functionality because
 * the portfolio's UI isn't made
 * to scale like a normal app.
 */

export const ScrollReveal = ({
  children,
  width = "fit-content",
  y,
  x,
  delay,
  transitionDuration,
  once,
  scaleHidden,
  scaleVisible,
}: ScrollRevealProps
) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: once })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    } else {
      controls.start('hidden')
    }
  }, [controls, isInView])

  return (
    <div ref={ref} style={{ position: 'relative', width, zIndex: 30 }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: y, x: x, scale: scaleHidden },
          visible: { opacity: 1, y: 0, x: 0, scale: scaleVisible },
        }}

        initial='hidden'
        animate={controls}
        transition={{ duration: transitionDuration, delay: delay }}
      >
        {children}
      </motion.div>
    </div>
  )
}
