import { ScrollReveal } from "../components/ScrollReveal"

export const Skills : React.FC = () => {
  return (
  <>
    <ScrollReveal 
      x={55} 
      delay={0.565}
      once={true}
      transitionDuration={0.75}
    >   
      <h1 className="text-3xl text-[#2D3142]"> Skills works </h1>
    </ScrollReveal>
  </>
  )
}
