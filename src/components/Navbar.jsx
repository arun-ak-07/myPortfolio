import React, { useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const toggleNav = () => setNav(!nav);

    return (
        <nav className="w-full bg-gray-900 bg-opacity-90 text-gray-200 shadow-lg fixed top-0 z-50">
            <div className="container mx-auto flex justify-between items-center p-6">

                <h1 className="text-4xl font-extrabold tracking-widest text-gray-100">
                    <a href="#home" className="hover:text-gray-400">Portfolio</a>
                </h1>

                <div className="hidden md:flex space-x-8 text-lg font-semibold">
                    <a href="#home" className="hover:text-gray-400 transition-colors duration-200">Home</a>
                    <a href="#about" className="hover:text-gray-400 transition-colors duration-200">About</a>
                    <a href="#services" className="hover:text-gray-400 transition-colors duration-200">Services</a>
                    <a href="#skills" className="hover:text-gray-400 transition-colors duration-200">Skills</a>
                    <a href="#projects" className="hover:text-gray-400 transition-colors duration-200">Projects</a>
                    <a href="#contact" className="hover:text-gray-400 transition-colors duration-200">Contact</a>
                </div>

                <div className="md:hidden" onClick={toggleNav}>
                    {nav ? <FaTimes size={30} className="text-gray-200" /> : <FaBars size={30} className="text-gray-200" />}
                </div>
            </div>

            <ul className={`md:hidden fixed top-0 right-0 w-full bg-gray-800 bg-opacity-95 text-gray-200 space-y-6 flex flex-col items-center justify-start p-8 transition-transform duration-300 transform ${nav ? 'translate-y-0' : '-translate-y-full'}`}>

                <li className="absolute top-6 right-6" onClick={toggleNav}>
                    <FaTimes size={30} className="text-gray-200 cursor-pointer" />
                </li>
                <li onClick={toggleNav}><a href="#home" className="text-2xl hover:text-gray-400">Home</a></li>
                <li onClick={toggleNav}><a href="#about" className="text-2xl hover:text-gray-400">About</a></li>
                <li onClick={toggleNav}><a href="#services" className="text-2xl hover:text-gray-400">Services</a></li>
                <li onClick={toggleNav}><a href="#skills" className="text-2xl hover:text-gray-400">Skills</a></li>
                <li onClick={toggleNav}><a href="#projects" className="text-2xl hover:text-gray-400">Projects</a></li>
                <li onClick={toggleNav}><a href="#contact" className="text-2xl hover:text-gray-400">Contact</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
