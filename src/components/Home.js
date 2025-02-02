import React from "react";
import { ReactTyped } from "react-typed"; // Correct import
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Home() {
    const counters = document.querySelectorAll('[data-count]');

    function countUp(element) {
        const target = parseInt(element.getAttribute('data-count'));
        let current = 0;
        const increment = target / 100;
        const interval = setInterval(function() {
            current += increment;
            if (current >= target) {
                element.textContent = target.toLocaleString() + "+";
                clearInterval(interval);
            } else {
                element.textContent = Math.floor(current).toLocaleString() + "+";
            }
        }, 30);
    }

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                countUp(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2
    });

    counters.forEach(counter => observer.observe(counter));
  
  return (
    <>
      <section id="hero">
        <div className="w-full relative py-10 md:px-8 shadow-xl md:h-[75vh]">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1607798748738-b15c40d33d57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMXx8Y29kZXxlbnwwfDB8fHwxNzMyNzk1MjA5fDA&ixlib=rb-4.0.3&q=80&w=1080')",
            }}
          />
          {/* Content */}
          <div className="relative z-10 flex flex-col justify-center items-center h-full md:h-[80%] px-6 sm:px-12 md:px-16 text-center sm:text-left py-10 md:bg-gray-900/50  bg-gray-900/50">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full"
            >
              {/* Introduction */}
              <h4 className="text-lg sm:text-xl font-medium text-gray-300 bg-blue-900/50 px-4 py-2 rounded-lg inline-block">
                Hello, I am{" "}
                <span className="text-green-400 font-semibold text-2xl">
                  Birendra Pradhan 👋 ,
                </span>
              </h4>

              {/* Typing Effect */}
              <h1 className="mt-6 text-3xl sm:text-5xl font-bold text-white leading-tight">
                I'm{" "}
                <span className="text-green-400">
                  <ReactTyped
                    strings={[
                      "FullStack Web Developer,",
                      "Frontend Developer,",
                      "Backend Developer,",
                      "React Js Developer,",
                      "WordPress Developer,",
                      "Freelancer .",
                    ]}
                    typeSpeed={100}
                    backSpeed={60}
                    loop
                  />
                </span>
              </h1>

              {/* About Me */}
              <p className="mt-4 text-sm sm:text-lg text-gray-200 opacity-90 leading-relaxed">
                Passionate full-stack developer with{" "}
                <strong>2 years of experience</strong> building modern web
                applications. I specialize in{" "}
                <strong>PHP, MySQL, and CodeIgniter</strong>, with strong
                expertise in{" "}
                <strong>
                  React.js, Tailwind CSS, Bootstrap, and JavaScript
                </strong>
                . My mission is to create{" "}
                <strong>high-performance, scalable, and user-friendly</strong>
                digital experiences.
              </p>

              {/* CTA Buttons with Hover Effects */}
              <div className="mt-8 flex flex-wrap justify-center sm:justify-start gap-4 text-sm">
                <Link to="/About">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 text-white font-semibold rounded-sm bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-indigo-600 hover:to-blue-500 transition-all duration-300 shadow-xl transform cursor-pointer"
                  >
                    Explore Me
                  </motion.button>
                </Link>

                <Link to="/Services">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 text-white font-semibold rounded-sm bg-gradient-to-r from-purple-500 to-pink-600 hover:from-pink-600 hover:to-purple-500 transition-all duration-300 shadow-xl transform cursor-pointer"
                  >
                    Get Our Services
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        id="services"
        className="z-50 md:-mt-28 md:py-12 py-12 text-white"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Service 1 */}
            <div className="bg-gradient-to-r from-blue-400 to-purple-600 p-4 rounded-xl shadow-xl transform hover:scale-105 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-40"></div>
              <div className="relative z-10">
                <div className="mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-14 h-14 mb-3 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  FullStack Web Development
                </h3>
                <p className="text-base leading-relaxed">
                  I provide full-stack web development services, creating modern
                  and scalable web applications with seamless user experiences.
                </p>
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-gradient-to-r from-indigo-400 to-purple-700 p-4 rounded-xl shadow-xl transform hover:scale-105 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-40"></div>
              <div className="relative z-10">
                <div className="mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-14 h-14 mb-3 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Frontend Development
                </h3>
                <p className="text-base leading-relaxed">
                  Specialized in building responsive and dynamic user interfaces
                  using React, Tailwind CSS, and modern frontend frameworks.
                </p>
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-gradient-to-r from-purple-500 to-blue-700 p-4 rounded-xl shadow-xl transform hover:scale-105 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-40"></div>
              <div className="relative z-10">
                <div className="mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-14 h-14 mb-3 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 3v12h14V3H5z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Backend Development
                </h3>
                <p className="text-base leading-relaxed">
                  Expertise in backend technologies like PHP, MySQL, and
                  CodeIgniter to build robust and secure server-side solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <section id="about" className="z-50 text-black">
        <div className="bg-white rounded-lg shadow-lg md:p-8 p-2 max-w-7xl mx-auto mt-12 transform transition-all duration-300 hover:scale-105">
          <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-12">
            {/* About Me Image */}
            <div className="w-full md:w-1/3">
              <img
                src="https://images.unsplash.com/photo-1607798748738-b15c40d33d57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMXx8Y29kZXxlbnwwfDB8fHwxNzMyNzk1MjA5fDA&ixlib=rb-4.0.3&q=80&w=1080" // Replace with your image URL
                alt="About Me"
                className="w-full h-full rounded-full object-cover shadow-lg border-4 border-indigo-600"
              />
            </div>

            {/* About Me Text */}
            <div className="w-full md:w-2/3">
              <h2 className="text-3xl font-semibold mb-4">
                <span className="border-b-4 border-yellow-700">About Me</span>
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                Hello! I'm a passionate web developer with a strong focus on
                creating responsive, interactive, and high-performance web
                applications. I specialize in full-stack development, with a
                deep understanding of both frontend and backend technologies. I
                strive to build applications that are not only functional but
                also user-friendly, and aesthetically pleasing.
              </p>
              <p className="text-lg leading-relaxed">
                I have a keen interest in new technologies and love to
                experiment with innovative tools and frameworks. When I'm not
                coding, I enjoy learning new things, collaborating with talented
                teams, and solving complex problems.
              </p>
              <Link to="/About">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 text-white font-semibold rounded-sm bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-indigo-600 hover:to-blue-500 transition-all duration-300 shadow-xl transform cursor-pointer mt-8"
                >
                  Explore Me
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 mt-12 rounded-lg shadow-lg hover:scale-100 transform transition-all duration-300 md:px-12 px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-gray-800">Project Achievements</h2>
            <p className="mt-2 text-lg text-gray-600">Delivering excellence with every project.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {/* <!-- Projects Completed --> */}
            <div className="flex flex-col items-center bg-white p-8 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out">
              <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <dt className="text-xl font-semibold text-gray-900">Projects Completed</dt>
              <dd className="mt-2 text-5xl font-bold text-gray-900" data-count="150">0</dd>
            </div>

            {/* <!-- SEO Optimization in Projects --> */}
            <div className="flex flex-col items-center bg-white p-8 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out">
              <div className="w-16 h-16 rounded-full bg-green-600 text-white flex items-center justify-center mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6L12 18L21 6" />
                </svg>
              </div>
              <dt className="text-xl font-semibold text-gray-900">SEO-Optimized Projects</dt>
              <dd className="mt-2 text-5xl font-bold text-gray-900" data-count="120">0</dd>
            </div>

            {/* <!-- Client Reviews --> */}
            <div className="flex flex-col items-center bg-white p-8 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out">
              <div className="w-16 h-16 rounded-full bg-yellow-500 text-white flex items-center justify-center mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6h18M3 12h18M3 18h18" />
                </svg>
              </div>
              <dt className="text-xl font-semibold text-gray-900">Client Reviews</dt>
              <dd className="mt-2 text-5xl font-bold text-gray-900" data-count="85">0</dd>
            </div>

            {/* <!-- Designs Completed --> */}
            <div className="flex flex-col items-center bg-white p-8 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out">
              <div className="w-16 h-16 rounded-full bg-red-500 text-white flex items-center justify-center mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h18M3 12h18M3 21h18" />
                </svg>
              </div>
              <dt className="text-xl font-semibold text-gray-900">Designs Completed</dt>
              <dd className="mt-2 text-5xl font-bold text-gray-900" data-count="200">0</dd>
            </div>
          </div>

          {/* <!-- Call to Action --> */}
          <div className="mt-12 text-center">
            <Link to="/contactus" className="inline-block px-8 py-4 bg-indigo-600 text-white text-lg font-medium rounded-lg shadow-md hover:bg-indigo-700 transition-all duration-300">
            Let's Build Something Amazing Together!
            </Link>
          </div>

          {
            
          }

        </section>

    </>
  );
}
