import { ScrollReveal } from "../components/ScrollReveal"

export const About : React.FC = () => {
  return (
    <div className="flex flex-col gap-0.5 w-64">
      <ScrollReveal 
        x={-55}
        once={true}
        transitionDuration={0.55}
      > 
          <h1 className="text-3xl text-primary justify-self-start self-start"> Who am i?</h1>
      </ScrollReveal>
      
      <ScrollReveal
        once={true}
        transitionDuration={0.55}
        delay={0.35} 
      >
        <h2 className="text-lg text-accent justify-self-end self-end"> What do i do? </h2>
      </ScrollReveal>
      <ScrollReveal
        scaleVisible={1}
        scaleHidden={0}
        transitionDuration={0.75}
        delay={0.365}
        once={false}
      >
        <div className="flex justify-items-center items-center">
          <p className="text-secondary text-xl"> Hello </p>
        </div>
      </ScrollReveal>
    </div>
  )
}
