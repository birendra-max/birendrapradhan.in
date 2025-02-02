import React from "react";
import { ReactTyped } from "react-typed"; // Correct import
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <section id="hero">
        <div className="w-full relative py-10 md:px-8 shadow-xl">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1607798748738-b15c40d33d57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMXx8Y29kZXxlbnwwfDB8fHwxNzMyNzk1MjA5fDA&ixlib=rb-4.0.3&q=80&w=1080')",
            }}
          />
          {/* Content */}
          <div className="relative z-10 flex flex-col justify-center items-center h-full px-6 sm:px-12 md:px-16 text-center sm:text-left py-10 md:bg-gray-900/50  bg-gray-900/50">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className=" w-full"
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
    </>
  );
}
