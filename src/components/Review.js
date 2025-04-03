import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClipboardCheck,
  faSearch,
  faComments,
  faPalette,
  faGlobeAmericas, // for Countries Covered
  faTrophy, // for Designs Completed
} from "@fortawesome/free-solid-svg-icons";

import gsap from "gsap";

const Achievements = () => {
  useEffect(() => {
    function animateCounters() {
      document.querySelectorAll(".counter").forEach(counter => {
        let target = +counter.getAttribute("data-target");
        let duration = 2; // Duration of count animation

        function startCount() {
          let count = { value: 0 };

          gsap.to(count, {
            value: target,
            duration: duration,
            ease: "power1.out",
            onUpdate: function () {
              counter.textContent = Math.floor(count.value) + "+";
            },
            onComplete: function () {
              setTimeout(() => {
                counter.textContent = "0+";
                startCount(); // Restart after 1 sec
              }, 1000);
            }
          });
        }

        startCount(); // Start the animation loop
      });
    }

    animateCounters(); // Initialize the counters animation
  }, []);

  return (
    <section className="py-24 px-6 md:px-12 rounded-xl text-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side: Heading & Description */}
        <div className="text-center md:text-left">
          <h2 className="text-4xl font-bold mb-4 text-black">Project Achievements</h2>
          <p className="text-lg text-black leading-relaxed max-w-lg mx-auto md:mx-0">
            Delivering excellence in every project with innovation and creativity.
          </p>

          {/* Call to Action */}
          <Link
            to="/contactus"
            className="inline-block px-8 py-4 my-4 bg-indigo-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105"
          >
            Let's Build Something Amazing Together!
          </Link>
        </div>

        {/* Right Side: Achievements List */}
        <div className="grid grid-cols-2 gap-6 md:gap-8">
          {/* Projects Completed */}
          <div className="achievement-item bg-white p-6 shadow-md rounded-lg text-center hover:scale-105 transform transition-all duration-300">
            <div className="w-16 h-16 rounded-full bg-indigo-600 text-white flex items-center justify-center mb-4">
              <FontAwesomeIcon icon={faClipboardCheck} className="w-14 h-14" />
            </div>
            <p className="text-lg text-gray-600">Projects Completed</p>
            <p className="text-4xl font-bold text-indigo-600 counter" data-target="500">0+</p>
          </div>

          {/* SEO-Optimized Projects */}
          <div className="achievement-item bg-white p-6 shadow-md rounded-lg text-center hover:scale-105 transform transition-all duration-300">
            <div className="w-16 h-16 rounded-full bg-green-600 text-white flex items-center justify-center mb-4">
              <FontAwesomeIcon icon={faSearch} className="w-14 h-14" />
            </div>
            <p className="text-lg text-gray-600">SEO-Optimized Projects</p>
            <p className="text-4xl font-bold text-indigo-600 counter" data-target="100">0+</p>
          </div>

          {/* Designs Completed */}
          <div className="achievement-item bg-white p-6 shadow-md rounded-lg text-center hover:scale-105 transform transition-all duration-300">
            <div className="w-16 h-16 rounded-full bg-yellow-500 text-white flex items-center justify-center mb-4">
              <FontAwesomeIcon icon={faTrophy} className="w-14 h-14" />
            </div>
            <p className="text-lg text-gray-600">Designs Completed</p>
            <p className="text-4xl font-bold text-indigo-600 counter" data-target="100">0+</p>
          </div>

          {/* Countries Covered */}
          <div className="achievement-item bg-white p-6 shadow-md rounded-lg text-center hover:scale-105 transform transition-all duration-300">
            <div className="w-16 h-16 rounded-full bg-red-500 text-white flex items-center justify-center mb-4">
              <FontAwesomeIcon icon={faGlobeAmericas} className="w-16 h-16" />
            </div>
            <p className="text-lg text-gray-600">Countries Covered</p>
            <p className="text-4xl font-bold text-indigo-600 counter" data-target="10">0+</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
