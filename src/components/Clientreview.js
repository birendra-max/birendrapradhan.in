import React, { useState, useEffect } from 'react';
import Usericon from './img/user.svg'

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
    }, 5000); // Auto-slide every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <section className="md:py-20 py-6 text-white px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-extrabold mb-4 text-black">What Our Clients Say</h2>
        <p className="text-lg mb-8 mx-auto max-w-2xl text-black">
          Our clients' feedback drives us to constantly improve. Here's how we've made a difference for them!
        </p>

        {/* Client Testimonials Slider */}
        <div id="client-carousel" className="relative w-full max-w-6xl mx-auto overflow-hidden rounded-lg bg-white shadow-2xl">
          <div className="carousel-inner flex transition-all duration-700 ease-in-out" style={{ transform: `translateX(-${100 * currentIndex}%)` }}>
            {clients.map((client, index) => (
              <div key={index} className="carousel-item flex-shrink-0 w-full px-6 py-8 text-center">
                <div className="flex items-center justify-center mb-6">
                  <img className="w-24 h-24 rounded-full border-4 border-indigo-500 shadow-xl" src={Usericon} alt={client.name} />
                </div>
                <p className="md:text-xl text-lg text-gray-800 mb-4 italic px-6 leading-relaxed">"{client.comments.join(' ')}"</p>
                <h3 className="font-semibold md:text-xl text-xl text-gray-900">{client.name}</h3>
                <p className="text-gray-500">{client.address}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clientreview;
