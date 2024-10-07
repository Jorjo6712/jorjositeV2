import { IconContext } from 'react-icons'
import { ScrollReveal } from '../components/ScrollReveal'
import { ScrollArrow } from '../components/ScrollArrow'
import { MultiLayerParallax } from '../components/MultiLayerParallax'
import { Image } from '../components/Image'

import { FaGithub } from 'react-icons/fa'
import { FiPhoneCall } from 'react-icons/fi'
import { IoMdMail } from 'react-icons/io'
import { FaLinkedin } from 'react-icons/fa'

import { Tooltip } from 'react-tooltip'
import { Typewriter } from 'react-simple-typewriter'
import React, { useRef } from 'react'

export const Home: React.FC = () => {
  const parentDivRef = useRef<HTMLDivElement>(null)
  return (
    <div ref={parentDivRef} className="block relative w-screen h-screen">
      <MultiLayerParallax parentRef={parentDivRef} />
      <ScrollReveal y={55} once={true} transitionDuration={0.75} width='100%'>
        <div className="flex xl:flex-row h-64 mt-44 max-w-screen-md mx-auto flex-col justify-center items-center">
          <div
            className="xl:w-6/12 xl:max-w-md w-9/12 h-full flex flex-col justify-center items-center gap-2.5 bg-white border-black border-2 border-b-0 xl:border-b-2 xl:border-r-0 p-6 rounded-t-lg xl:rounded-tr-none xl:rounded-l-lg">
            <Image
              style="rounded-full outline outline-primary outline-offset-2"
              imageHeight="100px" imageWidth="100px"
              imgUrl="./pfp.png"
            />
            <span
              className="text-3xl font-bold text-primary">
              Yordan Mitov
            </span>
            <h1 className="text-primary text-xl italic">
              <Typewriter
                words={[
                  'Software',
                  'Systems',
                  'Full-stack',
                  'Indie'
                ]}
                typeSpeed={70}
                deleteSpeed={65}
                loop={false}
              />
              {' Developer'}
            </h1>
          </div>
          <div className="bg-primary border-black border-2 border-t-1 xl:border-2 xl:border-l-1 w-9/12 xl:flex xl:justify-center xl:items-center xl:w-9/12 xl:h-full p-6 xl:px-4">
            <p className="text-secondary text-center break-words text-lg font-semibold">
              Welcome to my Portfolio. <br />
              I'm 19 years old and love many things technology.
            </p>
          </div>
        </div>
      </ScrollReveal>
      <div className="flex justify-center items-center bg-black">
        <ScrollReveal x={55} once={true} delay={0.675} transitionDuration={0.65}>
          <div className="flex flex-row mt-20 w-full xl:w-full h-10 z-30 xl:mt-5 border-black bg-white border-2 rounded py-6 px-6 space-x-12 justify-center items-center">
            <IconContext.Provider
              value={{
                style: {
                  scale: '2',
                  zIndex: '30'
                },
              }}
            >
              <a href='https://github.com/Jorjo6712' target='_blank' > <FaGithub /> </a>
              <a data-tooltip-id='phone-tooltip' data-tooltip-content="+45 41414092" data-tooltip-place="top" >
                <FiPhoneCall />
                <Tooltip
                  id="phone-tooltip"

                  opacity={100}
                />
              </a>
              <a href='mailto:jorjo6924@protonmail.com'><IoMdMail /></a>
              <a href='https://www.linkedin.com/in/yordan-mitov-b3501322b/' target='_blank'> <FaLinkedin /> </a>
            </IconContext.Provider>
          </div>
        </ScrollReveal>
      </div>
      <ScrollArrow />
    </div>
  )
}

