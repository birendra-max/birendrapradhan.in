import React from "react";
import email from './img/gmail.png'
import whatsapp from './img/whatsapp.png';
import github from './img/github.png'

export default function Topbar() {
  return (
    <>
       <div className="w-full bg-gradient-to-r from-sky-100 to-sky-200 py-4 px-8 border-b border-gray-300 text-gray-800 shadow-md">
            <div className="flex justify-between items-center max-w-7xl mx-auto">
                {/* Left Section */}
                <div className="flex items-center gap-4">
                    <p className="font-bold text-xl text-gray-900">birendrapradhan.in</p>
                    {/* LinkedIn Link */}
                    <a href="www.linkedin.com/in/birendra-kumar-pradhan-487b96269" target="_blank" rel="noopener noreferrer" className="text-lg font-medium text-gray-700 hover:text-gray-900 transition duration-300">
                        | LinkedIn
                    </a>
                </div>
                
                {/* Right Section */}
                <div className="flex items-center gap-8">
                    {/* Email Link */}
                    <a href="mailto:birendrapradhan112@gmail.com" className="text-md font-medium text-gray-700 hover:text-gray-900 transition duration-300 flex items-center gap-2">
                        {/* Email Image Icon */}
                        <img src={email} alt="Email" className="w-6 h-6"/>
                        <span>Email</span>
                    </a>
                    
                    {/* WhatsApp Link */}
                    <a href="https://wa.me/9692926869" target="_blank" rel="noopener noreferrer" className="text-md font-medium text-gray-700 hover:text-gray-900 transition duration-300 flex items-center gap-2">
                        {/* WhatsApp Image Icon */}
                        <img src={whatsapp} alt="WhatsApp" className="w-6 h-6"/>
                        <span>WhatsApp</span>
                    </a>

                    {/* GitHub Link */}
                    <a href="https://github.com/birendra-max/" target="_blank" rel="noopener noreferrer" className="text-md font-medium text-gray-700 hover:text-gray-900 transition duration-300 flex items-center gap-2">
                        {/* GitHub Image Icon */}
                        <img src={github} alt="GitHub" className="w-6 h-6"/>
                        <span>GitHub</span>
                    </a>
                </div>
            </div>
        </div>
    </>
  );
}
