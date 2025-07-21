import React from "react";
import { ReactTyped } from "react-typed"; // Correct import
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Review from "./Review";
import Clientreview from "./Clientreview";
import Footer from "./Footer";

export default function Home() {
  const counters = document.querySelectorAll("[data-count]");

  function countUp(element) {
    const target = parseInt(element.getAttribute("data-count"));
    let current = 0;
    const increment = target / 100;
    const interval = setInterval(function () {
      current += increment;
      if (current >= target) {
        element.textContent = target.toLocaleString() + "+";
        clearInterval(interval);
      } else {
        element.textContent = Math.floor(current).toLocaleString() + "+";
      }
    }, 30);
  }

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          countUp(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2,
    }
  );

  counters.forEach((counter) => observer.observe(counter));

  return (
    <>
      <section id="hero" className="relative w-full min-h-[60vh] bg-gray-900 text-white overflow-hidden">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-80"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1607798748738-b15c40d33d57?auto=format&fit=crop&w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-start justify-center h-full px-6 py-16 sm:px-12 md:px-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl"
          >
            {/* Intro */}
            <h2 className="text-xl md:text-2xl font-light text-gray-200 mb-2">
              Hi, I’m
              <span className="ml-2 text-green-400 font-bold text-2xl md:text-3xl">
                Birendra Kumar Pradhan 👋
              </span>
            </h2>

            {/* Typing Title */}
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-white mt-2">
              I’m a{" "}
              <span className="text-green-400">
                <ReactTyped
                  strings={[
                    "FullStack Web Developer.",
                    "React JS Developer.",
                    "WordPress Expert.",
                    "Backend Developer.",
                    "Freelancer.",
                  ]}
                  typeSpeed={80}
                  backSpeed={50}
                  loop
                />
              </span>
            </h1>

            {/* Summary */}
            <p className="mt-6 text-md md:text-lg text-gray-300 leading-relaxed">
              I’m a passionate developer with <strong>2 years of experience</strong>
              building fast, scalable, and user-friendly web solutions. My stack
              includes <strong>PHP, CodeIgniter, MySQL</strong> on the backend, and{" "}
              <strong>React, Tailwind, Bootstrap</strong> on the frontend. Let’s bring your
              ideas to life with clean, efficient code.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/About">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 rounded-md bg-green-500 hover:bg-green-600 text-white font-semibold shadow-lg transition"
                >
                  Explore Me
                </motion.button>
              </Link>

              <Link to="/Services">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 rounded-md border border-white text-white font-medium hover:bg-white hover:text-gray-900 transition"
                >
                  Get My Services
                </motion.button>
              </Link>
            </div>
          </motion.div>
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

      {/* === ABOUT ME SECTION === */}
      <section id="about" className="relative bg-white py-16 sm:py-20 px-4 sm:px-6 md:px-12 lg:px-24 overflow-hidden">
        <div className="absolute inset-y-0 left-0 w-1 bg-indigo-600 rounded-r-lg hidden sm:block"></div>

        <div className="relative z-10 max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12 sm:gap-16">
          {/* Text Content */}
          <div className="w-full lg:w-2/3">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4 sm:mb-6 leading-tight">
              Hello, I’m <span className="text-indigo-600">Birendra</span><br />
              A Passionate Full Stack Developer
            </h2>

            <p className="text-gray-600 text-base sm:text-lg mb-4 leading-relaxed">
              With <span className="font-semibold text-indigo-600">2+ years of experience</span>, I build high-performance websites & apps using modern technologies.
            </p>
            <p className="text-gray-600 text-base sm:text-lg mb-4 leading-relaxed">
              From <span className="text-indigo-600 font-medium">React, PHP, MySQL</span> to deployment on <span className="text-indigo-600 font-medium">AWS & Docker</span>, I deliver full-stack solutions.
            </p>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
              Let’s collaborate and bring your next idea to life with elegant UI and clean code.
            </p>

            {/* Tech Stack Tags */}
            <div className="flex flex-wrap gap-2 sm:gap-3 mb-6">
              {["React.js", "PHP", "MySQL", "Docker", "AWS"].map((tech) => (
                <span
                  key={tech}
                  className="bg-gray-100 px-3 py-1.5 rounded-full text-sm text-gray-700 font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>

            <a
              href="/About"
              className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white text-sm sm:text-md font-semibold px-5 py-3 rounded-xl shadow-md transition duration-300"
            >
              Know More About Me
            </a>
          </div>

          {/* Profile Image */}
          <div className="w-full lg:w-1/3 flex justify-center lg:justify-end">
            <div className="relative group w-72 h-72 sm:w-82 sm:h-82">
              <img
                src="https://images.unsplash.com/photo-1607798748738-b15c40d33d57?auto=format&fit=crop&w=800&q=80"
                alt="Birendra Kumar Pradhan"
                className="w-full h-full object-cover rounded-2xl border-4 border-indigo-600 shadow-2xl group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute -top-4 -left-4 w-full h-full border-4 border-dashed border-gray-200 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* === SERVICES SECTION === */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 md:px-12 bg-gradient-to-br from-white to-gray-100 dark:from-[#111111] dark:to-gray-900 mt-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              💼 What I Do
            </h2>
            <div className="mx-auto mt-2 h-1 w-20 sm:w-24 bg-green-500 rounded-full"></div>
          </div>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            {[
              { title: "Web Development", icon: "fa-code", desc: "Responsive websites using modern tools." },
              { title: "UI/UX Design", icon: "fa-laptop-code", desc: "Clean, usable interfaces that convert." },
              { title: "SEO Solutions", icon: "fa-search", desc: "Optimized for visibility and traffic." },
              { title: "WordPress Dev", icon: "fab fa-wordpress", desc: "Custom themes & plugins." },
              { title: "E-commerce", icon: "fa-shopping-bag", desc: "Fast, secure online stores." },
              { title: "API Integration", icon: "fa-plug", desc: "Enhancing your site with powerful APIs." },
            ].map((service, idx) => (
              <Link
                to="/"
                key={idx}
                className="group flex items-start gap-4 sm:gap-5 bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-700 rounded-2xl p-5 sm:p-6 hover:bg-blue-100/20 dark:hover:bg-blue-800/10 transition-all duration-300 ease-in-out shadow-sm hover:shadow-lg"
              >
                <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-green-500/10 dark:bg-green-500/20 rounded-xl flex items-center justify-center">
                  <i className={`fa ${service.icon} text-xl sm:text-2xl text-green-600 dark:text-green-400`}></i>
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    {service.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>


      <Review />

      <Clientreview />

      <Footer />
    </>
  );
}
