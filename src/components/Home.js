import React from 'react';
import { ReactTyped } from 'react-typed';  // Correct import

export default function Home() {
  return (
    <>
      <section id='hero'>
      <div className="w-full">
        <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1607798748738-b15c40d33d57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMXx8Y29kZXxlbnwwfDB8fHwxNzMyNzk1MjA5fDA&ixlib=rb-4.0.3&q=80&w=1080')] bg-cover bg-center bg-no-repeat">
          <div className="w-full h-full flex justify-center items-center relative bg-black bg-opacity-50">
            <div className="lg:px-16 px-8 py-8 flex flex-col gap-8 justify-center items-center w-full">
              {/* Text Content */}
              <div className="text-white w-full">
                <h4 className="text-2xl font-semibold bg-gray-900/40 p-3 rounded-lg">
                  Hello, My name is <span className="text-green-500 text-3xl">Birendra</span>

                  <h1 className="mt-4 sm:text-4xl text-3xl font-bold text-white leading-tight">
                  I'm <span className="text-green-500">
                    <ReactTyped
                      strings={['FullStack Web Developer,', 'Frontend Developer,', 'Backend Developer,', 'React Js Developer', 'Wordpress Developer', 'Freelancer']}
                      typeSpeed={100}
                      backSpeed={60}
                      loop
                    />
                  </span>
                </h1>

                <p className="mt-4 text-lg text-white opacity-80 leading-relaxed">
                  Experienced full-stack developer with 4+ years of expertise in Laravel, NestJS, Nuxt.js, Next.js, Android, and some Flutter experience.
                </p>
                </h4>

                <div className="mt-8 flex justify-center sm:justify-start gap-4">
                  <button className="p-2 px-6 text-white font-semibold rounded-full outline outline-2 outline-green-500 hover:bg-green-600 transition-all ease-in-out duration-200">
                    Hire Me
                  </button>
                  <button className="p-2 px-6 text-white font-semibold rounded-full outline outline-2 outline-yellow-500 hover:bg-yellow-600 transition-all ease-in-out duration-200">
                    Download CV
                  </button>
                </div>

                
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>
    </>
  );
}
