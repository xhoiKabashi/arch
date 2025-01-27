"use client";
import React, { useState } from "react";
import { FaInstagram, FaFacebook, FaTiktok, FaLinkedin } from 'react-icons/fa';
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  // State to manage the active section
  const [activeSection, setActiveSection] = useState(0);

  // Data for each section (background image and text)
  const sections = [
    {
      bgImage: "https://brok.qodeinteractive.com/wp-content/uploads/2021/11/h1-port-list-img-1-3-1536x774.jpg",
      title: "HARMONY OF SHAPES",
      subtitle: "Future city buildings",
      description: "Housing",
    },
    {
      bgImage: "https://brok.qodeinteractive.com/wp-content/uploads/2021/11/h1-port-img-2-1536x774.jpg",
      title: "MODERN ARCHITECTURE",
      subtitle: "Urban landscapes",
      description: "Design",
    },
    {
      bgImage: "https://brok.qodeinteractive.com/wp-content/uploads/2021/11/h1-port-img-3-1536x774.jpg",
      title: "FUTURISTIC LIVING",
      subtitle: "Smart homes",
      description: "Innovation",
    },
  ];

  // Handle click to change the active section
  const handleSectionClick = (index) => {
    setActiveSection(index);
  };

  return (
    <header className="text-center h-screen pt-20  sm:px-6 md:px-10 relative overflow-hidden">
      {/* Background image with animation */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSection}
          className=" h-full md:h-[90%] flex items-center pl-4 md:pl-5 xl:pl-10 md:rounded-t-xl"
          style={{
            backgroundImage: `url(${sections[activeSection].bgImage})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          initial={{ scale: 0.9, opacity: 0 }} // Start slightly zoomed in
          animate={{ scale: 1, opacity: 1 }} // Zoom out to normal
          exit={{ scale: 0.9, opacity: 0 }} // Exit by zooming in
          transition={{ duration: 0.2 }}
        >
          <div className="flex flex-col text-start w-full">
            <div className="flex flex-col md:flex-row gap-10 md:gap-20">
              {/* Social Icons */}
              <motion.h1
                key={`title-${activeSection}`}
                className="absolute top-24 flex right-1/3 flex-row sm:static md:flex md:flex-col gap-5 md:items-center md:justify-center text-white"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}>
                <FaInstagram size={20} />
                <FaFacebook size={20} />
                <FaTiktok size={20} />
                <FaLinkedin size={20} />
              </motion.h1>

              {/* Title */}
              <div className="w-full text-balance">
                <motion.h1
                  key={`title-${activeSection}`}
                  className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white mb-4"
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}>
                  {sections[activeSection].title.split(" ")[0]}
                </motion.h1>
                <motion.h1
                  key={`subtitle-${activeSection}`}
                  className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white mb-4"
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  {sections[activeSection].title.split(" ").slice(1).join(" ")}
                </motion.h1>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Bottom navigation with clickable sections */}
      <div className="absolute flex flex-row justify-around bottom-8 sm:bottom-16 right-4 rounded-tl-lg p-4 h-auto sm:h-32 w-full sm:w-1/2 bg-transparent sm:bg-white  ">
        {/* Show cards on larger screens */}
        <div className="hidden sm:flex flex-row justify-around w-full">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-start text-start gap-2 cursor-pointer"
              onClick={() => handleSectionClick(index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <h1 className={`${activeSection === index ? 'text-slate-900' : "text-slate-400"} font-semibold`}>0{index + 1}</h1>
              <h1 className={`${activeSection === index ? 'text-slate-900' : "text-slate-400"} font-bold uppercase sm:text-xs md:text-sm xl:text-lg`}>
                {section.subtitle}
              </h1>
              <p className={`${activeSection === index ? 'text-slate-600' : "text-slate-400"} font-thin italic text-xs sm:text-[13px]`}>
                {section.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Show dots on mobile screens */}
        <div className="flex sm:hidden gap-6 absolute bottom-10 justify-center items-center w-full">
          {sections.map((_, index) => (
            <button
              key={index}
              onClick={() => handleSectionClick(index)}
              className={`w-12 h-12 rounded-full transition-colors ${activeSection === index ? "bg-white" : "bg-slate-200"
                }`}
            />
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;