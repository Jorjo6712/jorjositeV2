import { FaAngleDown } from "react-icons/fa"
import { Link } from 'react-scroll'
import { IconContext } from 'react-icons'

export const ScrollArrow = () => {
  return (
    <div className="flex justify-center xl:mt-36 mt-14 sm:mt-4 w-full text-center">
      <div className="w-9 justify-center items-center rounded-full text-white z-30 bg-primary p-2.5">
        <IconContext.Provider
          value= {{
            style: {
              scale: '1.5',
              cursor: 'pointer',
            }
          }}
        >
          <Link 
            to={"about"} 
            smooth={true}
            duration={650}
          >
            <FaAngleDown/>
          </Link>
        </IconContext.Provider>
        </div>
    </div>
  )
}
