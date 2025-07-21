import React, { useState, useEffect } from 'react';
import Usericon from './img/user.svg';

const clients = [
  {
    name: "Rohit Sharma (Founder)",
    address: "Mumbai, India",
    comments: ["Birendra has been instrumental in creating our dynamic website. His attention to detail and seamless approach made the entire process smooth."]
  },
  {
    name: "Anjali Mehta (Marketing Director)",
    address: "Delhi, India",
    comments: ["The website Birendra developed for us is not only fast and responsive but also perfectly aligns with our branding and vision."]
  },
  {
    name: "Suresh Patel (E-commerce Manager)",
    address: "Bangalore, India",
    comments: ["Birendra's expertise in full-stack development helped transform our online store. The platform is now secure, user-friendly, and highly optimized."]
  },
  {
    name: "Priya Singh (Tech Lead)",
    address: "Kolkata, India",
    comments: ["Working with Birendra has been a fantastic experience. His coding skills and problem-solving abilities are top-notch. He always meets deadlines with excellent quality."]
  },
  {
    name: "Vikram Reddy (CEO)",
    address: "Chennai, India",
    comments: ["Birendra took our web application to the next level, ensuring scalability and integrating advanced features. His expertise in both front-end and back-end development is unmatched."]
  }
];

const Clientreview = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % clients.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden mt-10">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 to-white opacity-40 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-4 tracking-tight">Client Testimonials</h2>
          <p className="text-lg text-gray-600">Real words from real clients who trusted us with their vision.</p>
        </div>

        <div className="bg-white shadow-2xl rounded-3xl p-10 md:p-16 transition-all duration-700">
          <div className="flex flex-col md:flex-row items-center text-center md:text-left gap-8">
            <div className="flex-shrink-0">
              <img
                src={Usericon}
                alt={clients[currentIndex].name}
                className="w-24 h-24 rounded-full border-4 border-indigo-500 shadow-lg"
              />
            </div>
            <div>
              <p className="text-gray-700 text-lg md:text-xl italic mb-4">
                “{clients[currentIndex].comments[0]}”
              </p>
              <h3 className="text-xl font-semibold text-gray-900">{clients[currentIndex].name}</h3>
              <span className="text-sm text-gray-500">{clients[currentIndex].address}</span>
            </div>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-10 space-x-3">
          {clients.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-3 w-3 rounded-full transition duration-300 ${
                currentIndex === index ? 'bg-indigo-600 scale-125' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clientreview;
