import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClipboardCheck,
  faSearch,
  faComments,
  faPalette,
} from "@fortawesome/free-solid-svg-icons";

const Review = () => {
  const [projectsCompleted, setProjectsCompleted] = useState(0);
  const [seoOptimized, setSeoOptimized] = useState(0);
  const [clientReviews, setClientReviews] = useState(0);
  const [designsCompleted, setDesignsCompleted] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const countUp = (target, setState, duration = 5000) => {
      const increment = target / (duration / 100);
      const interval = setInterval(() => {
        setState((prev) => {
          if (prev < target) {
            return Math.min(prev + increment, target);
          }
          clearInterval(interval);
          return target;
        });
      }, 100);
    };

    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          countUp(150, setProjectsCompleted, 5000);
          countUp(120, setSeoOptimized, 5000);
          countUp(85, setClientReviews, 5000);
          countUp(200, setDesignsCompleted, 5000);

          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5,
    });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-12 rounded-lg hover:scale-100 transform transition-all duration-300 md:px-12 px-4"
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl font-extrabold text-gray-800">
          Project Achievements
        </h2>
        <p className="mt-2 text-lg text-gray-600">
          Delivering excellence with every project.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 gap-6">
        {/* Projects Completed */}
        <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out">
          <div className="w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center">
            <FontAwesomeIcon icon={faClipboardCheck} className="w-10 h-10" />
          </div>
          <dt className="text-lg font-semibold text-gray-900 mt-4">
            Projects Completed
          </dt>
          <dd className="mt-2 text-4xl font-bold text-gray-900">
            {Math.floor(projectsCompleted)}
          </dd>
        </div>

        {/* SEO Optimization in Projects */}
        <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out">
          <div className="w-14 h-14 rounded-full bg-green-600 text-white flex items-center justify-center mb-4">
            <FontAwesomeIcon icon={faSearch} className="w-10 h-10" />
          </div>
          <dt className="text-lg font-semibold text-gray-900">
            SEO-Optimized Projects
          </dt>
          <dd className="mt-2 text-4xl font-bold text-gray-900">
            {Math.floor(seoOptimized)}
          </dd>
        </div>

        {/* Client Reviews */}
        <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out">
          <div className="w-14 h-14 rounded-full bg-yellow-500 text-white flex items-center justify-center mb-4">
            <FontAwesomeIcon icon={faComments} className="w-10 h-10" />
          </div>
          <dt className="text-lg font-semibold text-gray-900">
            Client Reviews
          </dt>
          <dd className="mt-2 text-4xl font-bold text-gray-900">
            {Math.floor(clientReviews)}
          </dd>
        </div>

        {/* Designs Completed */}
        <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out">
          <div className="w-14 h-14 rounded-full bg-red-500 text-white flex items-center justify-center mb-4">
            <FontAwesomeIcon icon={faPalette} className="w-10 h-10" />
          </div>
          <dt className="text-lg font-semibold text-gray-900">
            Designs Completed
          </dt>
          <dd className="mt-2 text-4xl font-bold text-gray-900">
            {Math.floor(designsCompleted)}
          </dd>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-12 text-center">
        <Link
          to="/contactus"
          className="inline-block px-6 py-3 bg-indigo-600 text-white text-lg font-medium rounded-lg shadow-md hover:bg-indigo-700 transition-all duration-300"
        >
          Let's Build Something Amazing Together!
        </Link>
      </div>
    </section>
  );
};

export default Review;
