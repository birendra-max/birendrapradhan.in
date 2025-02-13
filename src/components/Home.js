import React from "react";
import { ReactTyped } from "react-typed"; // Correct import
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Review from './Review';

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

      <section className=" h-full m-auto my-24">
        <div className="max-w-7xl m-auto md:px-0 px-2 md:my-10 bg-[#111111] dark:bg-white rounded-xl overflow-hidden transition-transform transform hover:scale-105 duration-300 ease-in-out hover:shadow-xl">
          <section className="w-full h-full flex flex-col justify-center md:py-20 py-10 md:px-20">
            <div className="w-fit">
              <h2 className="text-2xl font-bold text-white dark:text-black pb-2">What I Do</h2>
              <div className="rounded-t-full border-[1px] border-gray-500 dark:border-gray-400 overflow-hidden">
                <hr className="border-[3px] border-green-400 dark:border-green-600 w-[20%]" />
              </div>
            </div>

            <div className="w-full grid md:grid-cols-2 grid-cols-1 gap-4 mt-8">
              {/* Web Development */}
              <Link to="/" className="flex sm:gap-4 gap-1 transition-transform transform hover:scale-105 duration-300 ease-in-out hover:shadow-xl hover:bg-blue-300 rounded-xl p-6 hover:text-white">
                <span>
                  <i className="fa fa-code text-2xl sm:text-3xl text-green-400 dark:text-green-600"></i>
                </span>

                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-semibold text-white dark:text-black">Web Development</h3>
                  <p className="text-gray-400 dark:text-gray-700">
                    Crafting responsive and intuitive websites tailored to your unique needs using cutting-edge technologies.
                  </p>
                </div>
              </Link>

              {/* UI/UX Design */}
              <Link to="/" className="flex sm:gap-4 gap-2 transition-transform transform hover:scale-105 duration-300 ease-in-out hover:shadow-xl hover:bg-blue-300 rounded-xl p-6 hover:text-white">
                <span>
                  <i className="fa fa-laptop-code text-2xl sm:text-3xl text-green-400 dark:text-green-600"></i>
                </span>

                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-semibold text-white dark:text-black">UI/UX Design</h3>
                  <p className="text-gray-400 dark:text-gray-700">
                    Creating visually appealing and user-centric designs that enhance user experiences and engagement.
                  </p>
                </div>
              </Link>

              {/* SEO Solutions */}
              <Link to="/" className="flex sm:gap-4 gap-2 transition-transform transform hover:scale-105 duration-300 ease-in-out hover:shadow-xl hover:bg-blue-300 rounded-xl p-6 hover:text-white">
                <span>
                  <i className="fa fa-search text-2xl sm:text-3xl text-green-400 dark:text-green-600"></i>
                </span>

                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-semibold text-white dark:text-black">SEO Solutions</h3>
                  <p className="text-gray-400 dark:text-gray-700">
                    Optimizing websites for search engines to enhance visibility and drive organic traffic.
                  </p>
                </div>
              </Link>

              {/* WordPress Site Development */}
              <Link to="/" className="flex sm:gap-4 gap-2 transition-transform transform hover:scale-105 duration-300 ease-in-out hover:shadow-xl hover:bg-blue-300 rounded-xl p-6 hover:text-white">
                <span>
                  <i className="fab fa-wordpress text-2xl sm:text-3xl text-green-400 dark:text-green-600"></i>
                </span>

                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-semibold text-white dark:text-black">WordPress Site Development</h3>
                  <p className="text-gray-400 dark:text-gray-700">
                    Designing and developing responsive WordPress websites, from themes to custom plugins.
                  </p>
                </div>
              </Link>

              {/* E-commerce Development */}
              <Link to="/" className="flex sm:gap-4 gap-2 transition-transform transform hover:scale-105 duration-300 ease-in-out hover:shadow-xl hover:bg-blue-300 rounded-xl p-6 hover:text-white">
                <span>
                  <i className="fa fa-shopping-bag text-2xl sm:text-3xl text-green-400 dark:text-green-600"></i>
                </span>
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-semibold text-white dark:text-black">E-commerce Development</h3>
                  <p className="text-gray-400 dark:text-gray-700">
                    Creating robust platforms to elevate your online business presence.
                  </p>
                </div>
              </Link>

              {/* API Integration */}
              <Link to="/" className="flex sm:gap-4 gap-2 transition-transform transform hover:scale-105 duration-300 ease-in-out hover:shadow-xl hover:bg-blue-300 rounded-xl p-6 hover:text-white">
                <span>
                  <i className="fa fa-plug text-2xl sm:text-3xl text-green-400 dark:text-green-600"></i>
                </span>
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-semibold text-white dark:text-black">API Integration</h3>
                  <p className="text-gray-400 dark:text-gray-700">
                    Seamlessly connecting systems to enhance functionality and performance.
                  </p>
                </div>
              </Link>
            </div>
          </section>
        </div>
      </section>

      <div className="w-full md:h-screen flex flex-col md:flex-row py-24 dark:bg-gray-800">
         {/* <!-- Our Working Style Section --> */}
         <div className="relative w-full mb-10 md:w-auto md:mt-[300px]">
              <div className="text-center text-white p-2">
                  <h2 className="text-4xl font-semibold text-emerald-400">Our Working Style</h2>
                  <p className="text-md mt-4">
                      We believe in collaboration and open communication to ensure success. Our agile approach helps us to adapt quickly to clients' needs and deliver high-quality results on time.
                  </p>
              </div>
          </div>
          {/* <!-- Feature 1: Highlight Your Expertise and Services --> */}
          <div className="relative w-full ml-auto mt-6 md:!mt-0 md:-mr-[68px] md:w-auto">
              <svg xmlns="http://www.w3.org/2000/svg" className="relative z-10 rotate-90 mx-auto w-4/5 md:w-[300px] md:h-[300px]" id="Layer_1" viewBox="0 0 512 512">
                  <path d="m485.291 129.408-224-128a10.645 10.645 0 0 0-10.581 0l-224 128a10.665 10.665 0 0 0-5.376 9.259v234.667c0 3.819 2.048 7.36 5.376 9.259l224 128c1.643.939 3.456 1.408 5.291 1.408s3.648-.469 5.291-1.408l224-128a10.665 10.665 0 0 0 5.376-9.259V138.667a10.668 10.668 0 0 0-5.377-9.259z" fill="url(&quot;#SvgjsLinearGradient1060&quot;)"></path>
                  <defs><linearGradient id="SvgjsLinearGradient1060"><stop stopColor="#059669" offset="0"></stop><stop stopColor="#059669" offset="1"></stop></linearGradient></defs>
              </svg>
              <div className="absolute max-w-[60%] left-[19%] md:left-[13%] md:max-w-[75%] z-20 top-0 text-center text-white max-h-[300px] pt-3 md:!pt-12 overflow-hidden">
                  <h1 className="text-2xl mt-16 md:text-xl font-semibold text-emerald-400 dark:text-white md:my-2">
                      Our <span className="text-emerald-200"> Expertise</span> in Business Growth
                  </h1>
                  <p className="w-full md:text-sm text-md my-3 md:mt-6 line-clamp-3 md:line-clamp-none overflow-hidden">
                      View some of our recent work that showcases our expertise and creativity. We have helped businesses scale their operations through impactful design and development.
                  </p>
                    
              </div>
          </div>

          {/* <!-- Feature 2: Showcase Your Work --> */}
          <div className="relative w-full mt-6 md:w-auto md:mt-[141px] md:-mr-[21px]">
              <svg xmlns="http://www.w3.org/2000/svg" className="relative z-10 rotate-90 mx-auto w-4/5 md:w-[300px] md:h-[300px]" id="Layer_1" viewBox="0 0 512 512">
                  <path d="m485.291 129.408-224-128a10.645 10.645 0 0 0-10.581 0l-224 128a10.665 10.665 0 0 0-5.376 9.259v234.667c0 3.819 2.048 7.36 5.376 9.259l224 128c1.643.939 3.456 1.408 5.291 1.408s3.648-.469 5.291-1.408l224-128a10.665 10.665 0 0 0 5.376-9.259V138.667a10.668 10.668 0 0 0-5.377-9.259z" fill="url(&quot;#SvgjsLinearGradient1060&quot;)"></path>
                  <defs><linearGradient id="SvgjsLinearGradient1060"><stop stopColor="#059669" offset="0"></stop><stop stopColor="#059669" offset="1"></stop></linearGradient></defs>
              </svg>
              <div className="absolute max-w-[60%] left-[19%] md:left-[13%] md:max-w-[75%] z-20 top-0 text-center text-white max-h-[300px] pt-3 md:!pt-12 overflow-hidden">
                  <h1 className="text-2xl mt-16 md:text-xl font-semibold text-emerald-400 dark:text-white md:my-2">
                      Our Latest <span className="text-emerald-200"> Projects</span>
                  </h1>
                  <p className="w-full md:text-sm text-md my-3 md:mt-6 line-clamp-3 md:line-clamp-none overflow-hidden">
                      View some of our recent work that showcases our expertise and creativity. We have helped businesses scale their operations through impactful design and development.
                  </p>
              </div>
          </div>

          {/* <!-- Feature 3: Testimonials and Reviews --> */}
          <div className="relative w-full mt-6 md:w-auto md:!mt-0 md:!w-auto md:-ml-[48px]">
              <svg xmlns="http://www.w3.org/2000/svg" className="relative z-10 rotate-90 mx-auto w-4/5 md:w-[300px] md:h-[300px]" id="Layer_1" viewBox="0 0 512 512">
                  <path d="m485.291 129.408-224-128a10.645 10.645 0 0 0-10.581 0l-224 128a10.665 10.665 0 0 0-5.376 9.259v234.667c0 3.819 2.048 7.36 5.376 9.259l224 128c1.643.939 3.456 1.408 5.291 1.408s3.648-.469 5.291-1.408l224-128a10.665 10.665 0 0 0 5.376-9.259V138.667a10.668 10.668 0 0 0-5.377-9.259z" fill="url(&quot;#SvgjsLinearGradient1060&quot;)"></path>
                  <defs><linearGradient id="SvgjsLinearGradient1060"><stop stopColor="#059669" offset="0"></stop><stop stopColor="#059669" offset="1"></stop></linearGradient></defs>
              </svg>
              <div className="absolute max-w-[60%] left-[19%] md:left-[13%] md:max-w-[75%] z-20 top-0 text-center text-white max-h-[300px] pt-3 md:!pt-12 overflow-hidden">
                  <h1 className="text-2xl mt-16 md:text-xl font-semibold text-emerald-400 dark:text-white md:my-2">
                      Client <span className="text-emerald-200"> Testimonials</span>
                  </h1>
                  <p className="w-full md:text-sm text-md my-3 md:mt-6 line-clamp-3 md:line-clamp-none overflow-hidden">
                      "Working with this team was a game changer for our business. They truly understand our needs and deliver results that exceed expectations."
                  </p>
              </div>
          </div>

          {/* <!-- Feature 4: Value Proposition and CTA --> */}
          <div className="relative w-full mt-6 md:w-auto md:mt-[283px] md:-ml-[302px]">
              <svg xmlns="http://www.w3.org/2000/svg" className="relative z-10 rotate-90 mx-auto w-4/5 md:w-[300px] md:h-[300px]" id="Layer_1" viewBox="0 0 512 512">
                  <path d="m485.291 129.408-224-128a10.645 10.645 0 0 0-10.581 0l-224 128a10.665 10.665 0 0 0-5.376 9.259v234.667c0 3.819 2.048 7.36 5.376 9.259l224 128c1.643.939 3.456 1.408 5.291 1.408s3.648-.469 5.291-1.408l224-128a10.665 10.665 0 0 0 5.376-9.259V138.667a10.668 10.668 0 0 0-5.377-9.259z" fill="url(&quot;#SvgjsLinearGradient1060&quot;)"></path>
                  <defs><linearGradient id="SvgjsLinearGradient1060"><stop stopColor="#059669" offset="0"></stop><stop stopColor="#059669" offset="1"></stop></linearGradient></defs>
              </svg>
              <div className="absolute max-w-[60%] left-[19%] md:left-[13%] md:max-w-[75%] z-20 top-0 text-center text-white max-h-[300px] pt-3 md:!pt-12 overflow-hidden">
                  <h1 className="text-2xl mt-16 md:text-xl font-semibold text-emerald-400 dark:text-white md:my-2">
                      Ready to Start Your <span className="text-emerald-200"> Project?</span>
                  </h1>
                  <p className="w-full md:text-sm text-md my-3 md:mt-6 line-clamp-3 md:line-clamp-none overflow-hidden">
                      Get in touch today for a free consultation. Let's discuss how we can help grow your business.
                  </p>
              </div>
          </div>

          {/* <!-- Feature 5: Social Proof and Call to Action --> */}
          <div className="relative w-full mt-6 md:w-auto md:mt-[141px] md:-ml-[68px]">
              <svg xmlns="http://www.w3.org/2000/svg" className="relative z-10 rotate-90 mx-auto w-4/5 md:w-[300px] md:h-[300px]" id="Layer_1" viewBox="0 0 512 512">
                  <path d="m485.291 129.408-224-128a10.645 10.645 0 0 0-10.581 0l-224 128a10.665 10.665 0 0 0-5.376 9.259v234.667c0 3.819 2.048 7.36 5.376 9.259l224 128c1.643.939 3.456 1.408 5.291 1.408s3.648-.469 5.291-1.408l224-128a10.665 10.665 0 0 0 5.376-9.259V138.667a10.668 10.668 0 0 0-5.377-9.259z" fill="url(&quot;#SvgjsLinearGradient1060&quot;)"></path>
                  <defs><linearGradient id="SvgjsLinearGradient1060"><stop stopColor="#059669" offset="0"></stop><stop stopColor="#059669" offset="1"></stop></linearGradient></defs>
              </svg>
              <div className="absolute max-w-[60%] left-[19%] md:left-[13%] md:max-w-[75%] z-20 top-0 text-center text-white max-h-[300px] pt-3 md:!pt-12 overflow-hidden">
                  <h1 className="text-2xl mt-16 md:text-xl font-semibold text-emerald-400 dark:text-white md:my-2">
                      Join Our <span className="text-emerald-200"> Partners</span> Worldwide
                  </h1>
                  <p className="w-full md:text-sm text-md my-3 md:mt-6 line-clamp-3 md:line-clamp-none overflow-hidden">
                      Trusted by clients from various industries. Join our global community of successful businesses.
                  </p>
              </div>
          </div>
      </div>
      <Review/>

    </>
  );
}
