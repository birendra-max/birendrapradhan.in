import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClipboardCheck,
  faSearch,
  faGlobeAmericas,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";

import gsap from "gsap";

const Achievements = () => {
  useEffect(() => {
    const animateCounters = () => {
      document.querySelectorAll(".counter").forEach(counter => {
        const target = +counter.getAttribute("data-target");
        const duration = 2;

        const startCount = () => {
          const count = { value: 0 };

          gsap.to(count, {
            value: target,
            duration: duration,
            ease: "power1.out",
            onUpdate: () => {
              counter.textContent = Math.floor(count.value) + "+";
            },
            onComplete: () => {
              setTimeout(() => {
                counter.textContent = "0+";
                startCount();
              }, 1000);
            }
          });
        };

        startCount();
      });
    };

    animateCounters();
  }, []);

  const achievements = [
    { icon: faClipboardCheck, label: "Projects Completed", count: 500, color: "bg-indigo-600" },
    { icon: faSearch, label: "SEO-Optimized Projects", count: 100, color: "bg-green-600" },
    { icon: faTrophy, label: "Designs Completed", count: 100, color: "bg-yellow-500" },
    { icon: faGlobeAmericas, label: "Countries Covered", count: 10, color: "bg-red-500" },
  ];

  return (
    <section className="py-16 px-6 bg-gradient-to-br from-white to-gray-100 mt-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
        {/* Left Side */}
        <div className="text-center md:text-left">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-5">
            🚀 Project Achievements
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-md mx-auto md:mx-0">
            I’ve delivered high-impact solutions with a focus on quality, speed, and client satisfaction. Here's a quick glimpse of my accomplishments.
          </p>
          <Link
            to="/contactus"
            className="inline-block mt-8 px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white text-lg font-semibold rounded-xl shadow-md transition transform hover:scale-105"
          >
            Let’s Work Together
          </Link>
        </div>

        {/* Right Side: Achievements */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {achievements.map(({ icon, label, count, color }, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 text-center hover:shadow-xl transition-transform transform hover:scale-105"
            >
              <div className={`w-16 h-16 mx-auto rounded-full ${color} text-white flex items-center justify-center shadow-md mb-4`}>
                <FontAwesomeIcon icon={icon} className="text-2xl" />
              </div>
              <p className="text-gray-700 text-lg font-medium mb-1">{label}</p>
              <p className="text-4xl font-extrabold text-indigo-600 counter" data-target={count}>0+</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
