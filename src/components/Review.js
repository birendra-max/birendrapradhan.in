import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClipboardCheck,
  faSearch,
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
    <section className="py-12 px-4 sm:px-6 md:px-18 lg:px-18 rounded-xl text-white">
      <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
        {/* Left Side: Heading & Description */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-black">
            Project Achievements
          </h2>
          <p className="text-base sm:text-lg text-black leading-relaxed max-w-md mx-auto md:mx-0">
            Delivering excellence in every project with innovation and creativity.
          </p>

          {/* Call to Action */}
          <Link
            to="/contactus"
            className="inline-block px-6 sm:px-8 py-3 sm:py-4 my-6 bg-indigo-600 text-white text-base sm:text-lg font-semibold rounded-lg shadow-lg hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105"
          >
            Let's Build Something Amazing Together!
          </Link>
        </div>

        {/* Right Side: Achievements List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {/* Achievement Item */}
          {[
            { icon: faClipboardCheck, label: "Projects Completed", count: 500, color: "indigo" },
            { icon: faSearch, label: "SEO-Optimized Projects", count: 100, color: "green" },
            { icon: faTrophy, label: "Designs Completed", count: 100, color: "yellow" },
            { icon: faGlobeAmericas, label: "Countries Covered", count: 10, color: "red" },
          ].map(({ icon, label, count, color }, index) => (
            <div
              key={index}
              className="achievement-item bg-white p-5 sm:p-6 shadow-md rounded-lg text-center hover:scale-105 transform transition-all duration-300"
            >
              <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-${color}-600 text-white flex items-center justify-center mb-4`}>
                <FontAwesomeIcon icon={icon} className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <p className="text-base sm:text-lg text-gray-600">{label}</p>
              <p className="text-3xl sm:text-4xl font-bold text-indigo-600 counter" data-target={count}>0+</p>
            </div>
          ))}
        </div>
      </div>
    </section>

  );
};

export default Achievements;
