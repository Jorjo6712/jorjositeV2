import './App.css'
import { Home } from './sections/Home.tsx'
import { About } from './sections/About.tsx'
import { Skills } from './sections/Skills.tsx'
import { Projects } from './sections/Projects.tsx'
import { Navbar } from './Navbar.tsx'

const App: React.FC = () => {

  const links = [
    { id: 'Home', element: 'home' },
    { id: 'About', element: 'about' },
    { id: 'Skills', element: 'skills' },
    { id: 'Projects', element: 'projects'},
  ]

  
  return (
    <>
      <Navbar links={links} />
        <div id="home" className='h-screen flex justify-center'>
          <Home />
        </div>
        <div id="about" className='h-screen flex justify-center items-center mt-28'>
          <About />
        </div>
        <div id="skills" className='h-screen flex justify-center items-center'>
          <Skills />
        </div>
        <div id="projects" className='h-screen flex justify-center items-center'>
          <Projects />
        </div>
    </>
  )
}

export default App
