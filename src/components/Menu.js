import { useState } from "react";
import logo from './img/logo.png';

function Menu() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="w-full bg-gray-900 md:py-2 py-2 md:px-0 px-4 shadow-lg">
            <div className="flex justify-between items-center max-w-7xl mx-auto">
                {/* Left Section: Logo */}
                <div className="flex items-center">
                    <img src={logo} alt="Logo" className="md:w-18 md:h-18 w-12 h-12 rounded-full" />
                </div>

                {/* Middle Section: Navigation Links */}
                <div className="hidden md:flex items-center space-x-12">
                    <a href="#home" className="text-md font-semibold text-white hover:text-[#1abc9c] transition duration-300">
                        Home
                    </a>
                    <a href="#about" className="text-md font-semibold text-white hover:text-[#1abc9c] transition duration-300">
                        About
                    </a>
                    <a href="#services" className="text-md font-semibold text-white hover:text-[#1abc9c] transition duration-300">
                        Services
                    </a>
                    <a href="#blog" className="text-md font-semibold text-white hover:text-[#1abc9c] transition duration-300">
                        Blog
                    </a>
                </div>

                {/* Right Section: Contact Us Button */}
                <div className="hidden md:flex items-center">
                    <button className="relative flex items-center justify-center rounded-md bg-[#1abc9c] text-white font-semibold tracking-wider text-sm shadow-lg overflow-hidden group hover:bg-[#16a085] transition-all duration-300 ease-in-out cursor-pointer">
                        {/* Icon + Text */}
                        <span className="relative z-10 flex items-center space-x-3 px-4 py-3 text-center group-hover:text-[#183153]">
                            <span>Contact Us</span>
                            {/* Right Arrow Icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                            </svg>
                        </span>
                        {/* Animated background */}
                        <span className="absolute top-0 left-[-100%] w-full h-full bg-[#ffd401] transition-all duration-400 ease-in-out group-hover:left-0 group-hover:w-full"></span>
                    </button>
                </div>

                {/* Hamburger Menu for Mobile */}
                <div className="md:hidden flex items-center" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <button className="text-white focus:outline-none">
                        <svg
                            className="w-10 h-10"
                            fill="none"
                            stroke="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 6h16M4 12h16M4 18h16"
                            ></path>
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden py-4 px-8 shadow-lg">
                    {/* Contact Us Button First in Mobile */}
                    <div className="flex flex-col items-center space-y-6">
                        <a href="#contact" className="text-md font-semibold text-white bg-[#1abc9c] hover:bg-[#16a085] transition duration-300 py-2 px-6 rounded-full shadow-lg">
                            Contact Us
                        </a>
                        <a href="#home" className="text-xl font-semibold text-white hover:text-[#1abc9c] transition duration-300">
                            Home
                        </a>
                        <a href="#about" className="text-xl font-semibold text-white hover:text-[#1abc9c] transition duration-300">
                            About
                        </a>
                        <a href="#services" className="text-xl font-semibold text-white hover:text-[#1abc9c] transition duration-300">
                            Services
                        </a>
                        <a href="#blog" className="text-xl font-semibold text-white hover:text-[#1abc9c] transition duration-300">
                            Blog
                        </a>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Menu;
