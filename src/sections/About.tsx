import { ScrollReveal } from "../components/ScrollReveal"

import { motion } from 'framer-motion'

export const About : React.FC = () => {
  return (
    <div>
      <ScrollReveal x={-55} delay={0.300}>
        <div 
          className="flex flex-col justify-center items-center">
          <h1 className="text-4xl text-[#2D3142]"> Who am i?</h1>
          <h2 className="text-xl text-accent"> What do i do? </h2>
        </div>
      </ScrollReveal>
      <motion.div
        className="flex justify-center items-center" 
        initial= {{
          scale: 0
        }}
        animate={{
          scale: 1
        }}
      >
        <p className="text-secondary">  </p>
      </motion.div>
    </div>
  )
}
