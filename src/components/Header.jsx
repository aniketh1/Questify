import React, { useState } from 'react';
import '../Global.css';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import {Link} from 'react-router-dom'
function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <div className='header bg-black flex justify-between items-center fixed w-full z-20 p-4 md:p-2'>
            <Link to='/'>
            <div className="right flex items-center text-white gap-4">
                <div>
                    <img src="/images/Untitled_logo_nbg.jpg" className='w-12 sm:w-14 rounded-full p-2' alt="Logo" />
                </div>
                <div className='font-bold font-mono text-xl sm:text-2xl'>
                    Questify
                </div>  
            </div>  
            </Link>
            
            <div className="md:hidden">
                <button onClick={toggleMenu} aria-label="Toggle menu">
                    {isMenuOpen ? (
                        <XIcon className="w-8 h-8 text-white" />
                    ) : (
                        <MenuIcon className="w-8 h-8 text-white" />
                    )}
                </button>
            </div>

            <div className={`left flex-col md:flex-row items-center text-white gap-2 md:gap-4 md:flex 
                            ${isMenuOpen ? 'flex' : 'hidden'} md:static absolute top-16 right-4 bg-black p-4 md:p-0 rounded-md md:bg-transparent z-20`}>
                <Link to='/studentLogin'>
                    <button className='bg-green-custom text-black p-2 px-3 rounded-lg my-1 w-full sm:w-fit hover:bg-opacity-70'>
                        I am Student
                    </button>
                </Link>
                <Link to='/teacherLogin'>
                <button className='bg-blue-custom1 text-black p-2 px-3 rounded-lg my-1  w-full sm:w-fit hover:bg-opacity-70'>
                    I am Teacher
                </button>
                </Link>
                <Link to='/aboutUs'>
                <button className='bg-green-custom1 text-black p-2 px-3 rounded-lg my-1 w-full sm:w-fit  hover:bg-opacity-70'>
                    About Us
                </button>
                </Link>
                <Link to='/contact'>
                <button className='bg-blue-custom text-black p-2 px-3 rounded-lg my-1  w-full sm:w-fit  hover:bg-opacity-70'>
                    Contact
                </button>
                </Link>
            </div>
        </div>
    );
}

export default Header;
