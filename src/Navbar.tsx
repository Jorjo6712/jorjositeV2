import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ThreeDCanvas } from './components/3DCanvas'
import { Link } from 'react-scroll'

interface NavbarProps {
  links: { id: string; element: string }[]
}

export const Navbar: React.FC<NavbarProps> = ({ links }) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => setIsOpen(!isOpen)

  const menuVariants = {
    open: { opacity: 1, x: '-50', y: 0, display: 'flex' },
    closed: { opacity: 0, x: '-50', y: '-100%', transitionEnd: { display: 'none' } },
  }

  const buttonVariants = {
    spanOneOpen: { rotate: 45, y: 12, width: 32 },
    spanTwoOpen: { rotate: -45, y: -10, width: 32 },
    closed: { rotate: 0, y: 0 },
  }

  return (
    <>
      <motion.div 
        className='xl:hidden flex justify-between items-center w-full py-4 fixed top-0 left-0 right-0 z-30 bg-opacity-5'
        style={isOpen ? { backdropFilter: "none" } : { backdropFilter: "blur(16px)" }} // HACK: Fix for mobile ul not being blurred when open while mobile nav is blurred
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
         <Link
            className="cursor-pointer"
            to={"home"}
            smooth={true}
            duration={650}
          >
            <div className='flex flex-row items-center justify-center'>
              <ThreeDCanvas/>
              <h1 className='text-2xl font-bold'>
                jorjosite.dev
              </h1>
            </div>
        </Link> 

        <motion.button
          onClick={toggleMenu}
          className='xl:hidden z-50 h-12 w-12 mt-3 mr-3 top-0 right-0 fixed rounded-md bg-white/0 transition-colors outline outline-primary outline-1 focus:border-none'
        >
          <motion.span
            variants={buttonVariants}
            animate={isOpen ? 'spanOneOpen' : 'closed'}
            className='absolute rounded-md left-[17.5%] top-[25%] h-[1.75px] w-5 bg-primary'
          />
          <motion.span
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            className='absolute rounded-md left-[17.5%] top-[47.5%] h-[1.75px] w-8 bg-primary'
          />
          <motion.span
            variants={buttonVariants}
            animate={isOpen ? 'spanTwoOpen' : 'closed'}
            className='absolute rounded-md left-[17.5%] bottom-[25%] h-[1.75px] w-6 bg-primary'
          />
        </motion.button>
         
        <motion.ul
          className='fixed top-0 xl:right-0 w-full xl:w-3/12 h-6/12 h-full bg-accent bg-opacity-5 backdrop-blur-xl flex flex-col xl:items-center items-center xl:justify-start z-40' 
          initial={false}
          animate={isOpen ? 'open' : 'closed'}
          variants={menuVariants}
          transition={{ duration: 0.3 }}
        >
          {links.map((link) => (
            <li key={link.id} className='mt-24'>
              <motion.div className='inline-block relative'>
                <Link
                  className='text-white font-extrabold border-2 border-black bg-primary bg-opacity-50 rounded-md p-2 text-2xl cursor-pointer'
                  to={link.element}
                  smooth={true}
                  duration={650}
                  onClick={() => setIsOpen(false)}
                >
                  {link.id}
                </Link>
              </motion.div>
            </li>
          ))}
        </motion.ul>
      </motion.div>

      <motion.div
        className='hidden xl:flex w-full py-2 fixed top-0 left-0 right-0 z-40 backdrop-blur-lg bg-transparent bg-opacity-5'
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75 }}
      >
        <div className='container w-full mx-auto flex flex-row justify-between items-center py-2'>
          <Link
            className="cursor-pointer"
            to={"home"}
            smooth={true}
            duration={650}
          >
            <div className='flex sm:flex flex-row items-center justify-center'>
              <ThreeDCanvas/>
              <h1 className='text-2xl font-bold'>
                jorjosite.dev
              </h1>
            </div>
          </Link>
          <ul className='flex ml-auto gap-x-10'>
            {links.map((link) => (
              <li key={link.id}>
                  <Link
                    className='text-lg text-primary font-normal hover:text-secondary cursor-pointer relative'
                    to={link.element}
                    smooth={true}
                    duration={650}
                  >
                    {link.id}
                  </Link>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </>
  )
}

