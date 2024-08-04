import React, { useState} from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import logo from '../assets/logo.png'
import {Link} from 'react-scroll'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-black text-gray-300'>
            <div>
                <img src={logo} alt="logo" style={{width: '60px'}} />
            </div>
                <ul className='hidden md:flex'>
                    <li><Link to='home' smooth={true} duration={500}>Home</Link></li>
                    <li><Link to='about' smooth={true} duration={500}>About Me</Link></li>
                    <li><Link to='skills'>Skills</Link></li>
                    <li><Link to='work' smooth={true} duration={500}>Expirience</Link></li>
                    <li><Link to='contact' smooth={true} duration={500}>Contact</Link></li>
                </ul>
            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>
            {/* Mobile version */}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-black flex flex-col justify-center items-center'}> 
                <li className='py-6 text-4xl'><Link onClick={handleClick} to='home' smooth={true} duration={500}>Home</Link></li>
                <li className='py-6 text-4xl'><Link onClick={handleClick} to='about' smooth={true} duration={500}>About Me</Link></li>
                <li className='py-6 text-4xl'><Link onClick={handleClick} to='skills' smooth={true} duration={500}>Skills</Link></li>
                <li className='py-6 text-4xl'><Link onClick={handleClick} to='work' smooth={true} duration={500}>Expirience</Link></li>
                <li className='py-6 text-4xl'><Link onClick={handleClick} to='contact' smooth={true} duration={500}>Contact</Link></li>
            </ul>
            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-800'>
                        <a className='flex justify-between items-center w-full text-gray-300' href="https://linkedin.com/in/thami-mncwabe-0bb47576">Linkedin <FaLinkedin size={30}/></a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-900'>
                        <a className='flex justify-between items-center w-full text-gray-300' href="https://github.com/Thami911">Github <FaGithub size={30}/></a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-orange-500'>
                        <a className='flex justify-between items-center w-full text-gray-300' href="mailto:thamimncwabe@gmail.com">Email <HiOutlineMail size={30}/></a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-green-800'>
                        <a className='flex justify-between items-center w-full text-gray-300' href="https://drive.google.com/file/d/1oOAWVX4oFXHc9sH6FztlUrd6r2673pen/view?usp=drive_link">Resume <BsFillPersonLinesFill size={30}/></a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar