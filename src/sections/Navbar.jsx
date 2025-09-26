import React, { useState } from 'react'
import { motion } from "motion/react"
import {Link} from 'react-scroll'

function Navigation() {
    return <ul className='nav-ul'>
        <li className="nav-li">
            <Link to="home" smooth={true} duration={500} className='nav-link'>
                Home
            </Link>
        </li>
        <li className="nav-li">
            <Link to="about" smooth={true} duration={500} className='nav-link'>
                About
            </Link>
        </li>
        <li className="nav-li">
            <Link to="skills" smooth={true} duration={500} className='nav-link'>
                Skills
            </Link>
        </li>
        <li className="nav-li">
            <Link to="projects" smooth={true} duration={500} className='nav-link'>
                Projects
            </Link>
        </li>
        <li className="nav-li">
            <Link to="stats" smooth={true} duration={500} className='nav-link'>
                Stats
            </Link>
        </li>
        <li className="nav-li">
            <Link to="contact" smooth={true} duration={500} className='nav-link'>
                Contact
            </Link>
        </li>

    </ul>
}
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className='fixed insert-x-0 z-20 w-full backdrop-blur-lg bg-primary/40'>
            <div className='mx-auto c-space max-w-7xl'>
                <div className="flex items-center justify-between py-2 sm:py-0">
                    <a href="/" className="text-xl font-bold transition-colors text-neutral-400 hover:text-white">
                    </a>
                    <button onClick={() => setIsOpen(!isOpen)} className='flex cursor-pointer text-neutral-400 hover:text-white focus:outlie-none sm:hidden'>
                        <img src={isOpen ? "src/assets/close.svg" : "src/assets/menu.svg"} className='w-6 h-6' />
                    </button>
                    <nav className='hidden sm:flex'>
                        <Navigation />
                    </nav>
                </div>
                {isOpen && (<motion.div className="block overflow-hidden text-center sm:hidden"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    style={{ maxHeight: "100vh" }}
                    transition={{ duration: 1 }}>
                    <nav className="pb-5">
                        <Navigation />
                    </nav>
                </motion.div>)}
            </div>
        </div>
    )
}

export default Navbar