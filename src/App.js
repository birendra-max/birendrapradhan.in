import React, { useEffect, useState } from "react";
import Topbar from "./components/Topbar";
import Menu from "./components/Menu";
import Loader from "./components/Loader";

import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import ContactUs from './components/ContactUs';
import Blogs from './components/Blogs';

import { BrowserRouter, Route, Routes } from 'react-router-dom';


export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Topbar />
          <BrowserRouter>
          <Menu />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contactus" element={<ContactUs />} />
              <Route path="/blog" element={<Blogs />} />
            </Routes>
          </BrowserRouter>
        </>
      )}
    </>
  );
}
