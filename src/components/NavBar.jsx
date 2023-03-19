import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {SlEnvolopeLetter} from 'react-icons/sl'
import Logo from '../assets/logo.png'
import {Link} from 'react-scroll'

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
      <div>
        <img src={Logo} alt='logo' style={{width: '60px'}}/>
      </div>
      
        <ul className='hidden md:flex'>
          <li>
          <Link  to="home"  smooth={true}  duration={500} >
          Home
        </Link>
          </li>
          <li>          <Link  to="about"  smooth={true}  duration={500} >
          About
          </Link></li>
          <li>          <Link  to="skills"  smooth={true}  duration={500} >
          Skills
          </Link></li>
          <li>          <Link  to="work"  smooth={true}  duration={500} >
          Projects
          </Link></li>
          <li>          <Link  to="contact"  smooth={true}  duration={500} >
          Contact Me
          </Link></li>
        </ul>
      
      
      <div onClick={toggle} className='md:hidden z-10'>
        {!isOpen ? <FaBars className='text-3xl'/> : <FaTimes className='text-3xl'/>}
      </div>

      <ul className={!isOpen ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
          <li className='py-6 text-4xl'>          <Link onClick={toggle}  to="home"  smooth={true}  duration={500} >
          Home
          </Link></li>
          <li className='py-6 text-4xl'><Link onClick={toggle}  to="about"  smooth={true}  duration={500} >
          About
          </Link></li>
          <li className='py-6 text-4xl'><Link onClick={toggle} to="skills"  smooth={true}  duration={500} >
          Skills
          </Link></li>
          <li className='py-6 text-4xl'><Link onClick={toggle}  to="work"  smooth={true}  duration={500} >
          Projects
          </Link></li>
          <li className='py-6 text-4xl'><Link onClick={toggle} to="contact"  smooth={true}  duration={500} >
          Contact Me
          </Link></li>
      </ul>

      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-200 bg-[black]'>
            <a className='flex justify-between items-center w-full text-gray-300' href='https://github.com/Shakil657' target={'_blank'} >Github <FaGithub size={40} /> </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-200 bg-[#004462]'>
            <a className='flex justify-between items-center w-full text-gray-300' href='mailto: shakil.miah@georgebrown.ca'>Email <HiOutlineMail size={40} /> </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-200 bg-[#007583]'>
            <a className='flex justify-between items-center w-full text-gray-300' href='/resume.pdf'target={'_blank'} >Resume <BsFillPersonLinesFill size={40} /> </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-200 bg-[#00A789]'>
            <a className='flex justify-between items-center w-full text-gray-300' href='/cv.pdf' target={'_blank'} >Cover Letter <SlEnvolopeLetter size={40} /> </a>
          </li>

        </ul>
        
      </div>

    </div>
  )
}

export default NavBar