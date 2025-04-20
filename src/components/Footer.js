import React from 'react';
import logo from './img/logo.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
        <div className=" dark:bg-gray-950">
            <div className="w-full bottom-0 bg-bergundy">
            <div className="h-fit w-[80%] mx-auto md:py-10 py-4 flex sm:flex-row flex-col justify-between items-center">
                <div>
                    <img src={logo} alt="Logo" className="md:w-32 md:h-32 w-18 h-18 rounded-full border-4 border-indigo-600 shadow-lg" />
                </div>

                <div className="flex flex-col gap-4 items-center">
                    <ul className="flex lg:gap-6 md:gap-4 md:flex-row flex-col justify-center items-center md:text-xl text-lg md:mt-0 mt-4 md:font-semibold text-gray-300">
                        <li className="">
                            <Link to="" className="text-gold">Privacy & Policy</Link>
                        </li>
                        <li className="">
                            <Link to="" className="hover:text-gold">Blogs</Link>
                        </li>
                        <li className="">
                            <Link to="" className="hover:text-gold">Contact</Link>
                        </li>
                        <li className="">
                            <Link to="" className="hover:text-gold">Projects</Link>
                        </li>
                    </ul>

                    <div>
                        <h3 className="text-semibold text-center lg:text-2xl text-xl text-white md:mt-6 ">Where magic and mastery mix, unlocking unimaginable possibilities.</h3>
                    </div>
                </div>
                {/* <!-- Socials --> */}
                <div>
                    <ul className="flex gap-2 justify-center md:py-0 py-4 md:flex-col lg:flex-row text-gray-300">
                        <li className="">
                            <a href="" className=""><i className="uil uil-instagram lg:text-4xl md:text-3xl text-4xl hover:text-gold"></i></a>
                        </li>
                        <li className="">
                            <a href="" className=""><i className="uil uil-facebook lg:text-4xl md:text-3xl text-4xl hover:text-gold"></i></a>
                        </li>
                        <li className="">
                            <a href="" className=""><i className="uil uil-linkedin lg:text-4xl md:text-3xl text-4xl hover:text-gold"></i></a>
                        </li>
                        <li className="">
                            <a href="" className=""><i className="uil uil-telegram lg:text-4xl md:text-3xl text-4xl hover:text-gold"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
            {/* <!-- Horizontal line --> */}
            <div className="md:w-[70%] sm:w-[80%] w-[96%] mx-auto flex md:gap-4 gap-2 items-center justify-center">
                <hr className="w-full md:border-2 border-yellow-400" />
                <h1 className="w-fit sm:text-2xl text-xl font-semibold font-serif text-white">birendrapradhan.in</h1>
                <hr className="w-full md:border-2 border-yellow-400" />
            </div>

            <div className="flex justify-center items-center py-4 capitalize">
                <h4 className="text-white sm:text-xl font-smibold text-lg">&copy;2024 Designed by Birendra</h4>
            </div>
            </div>
        </div>
  );
};

export default Footer;
