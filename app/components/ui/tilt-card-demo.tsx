"use client";

import React, { useState, useEffect } from "react";
import { Tilt } from "./tilt";
import { Spotlight } from "./spotlight";
import { motion, AnimatePresence } from "framer-motion";
import MatrixRain from "./matrix-rain";

export function TiltCardDemo({ title = "BBPS Digital Business Card" }) {
  const [showWelcome, setShowWelcome] = useState(true);
  const [showCard, setShowCard] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  // Simplified animation sequence: show welcome message then card
  useEffect(() => {
    if (showWelcome) {
      // Show welcome message for 3 seconds then show card
      const timer = setTimeout(() => {
        setShowWelcome(false);
        setShowCard(true);
      }, 3000);
      
      return () => clearTimeout(timer);
    }
  }, [showWelcome]);

  // Handle card interaction
  const handleInteraction = () => {
    if (showWelcome) {
      // Skip welcome animation if user interacts
      setShowWelcome(false);
      setShowCard(true);
    }
  };

  // Handle card dismissal
  const handleDismissCard = () => {
    setShowCard(false);
    setShowWelcome(true);
  };

  // Handle flipping the card
  const handleFlipCard = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsFlipped(!isFlipped);
  };

  // Ensure elements remain visible on scroll
  useEffect(() => {
    // Function to handle scroll events
    const handleScroll = () => {
      // Skip animations and show card immediately when scrolling starts
      if (showWelcome) {
        setShowWelcome(false);
        setShowCard(true);
      }
      
      // Prevent any elements from being hidden when scrolling
      const elementsToKeepVisible = document.querySelectorAll('.contact-info, .navigation-links, .card-container');
      elementsToKeepVisible.forEach(el => {
        if (el instanceof HTMLElement) {
          el.style.visibility = 'visible';
          el.style.opacity = '1';
        }
      });
    };

    // Add scroll event listener with a small threshold to detect initial scroll
    let scrollY = window.scrollY;
    const scrollThreshold = 5; // pixels of scroll to trigger the skip
    
    const handleScrollStart = () => {
      // Only trigger on scroll beyond threshold
      if (Math.abs(window.scrollY - scrollY) > scrollThreshold) {
        handleScroll();
      }
      scrollY = window.scrollY;
    };
    
    window.addEventListener('scroll', handleScrollStart, { passive: true });
    
    // Initial call to ensure visibility
    handleScroll();
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScrollStart);
    };
  }, [showWelcome, setShowWelcome, setShowCard]);

  return (
    <section
      id="business-card"
      className="py-16 w-full bg-gradient-to-br from-gray-900 to-black min-h-screen flex flex-col items-center justify-center relative overflow-hidden"
    >
      <style jsx global>{`
        .glow-text {
          text-shadow: 0 0 10px rgba(255, 255, 255, 0.7);
          animation: none;
          opacity: 1 !important;
        }
        .heading-container {
          margin-bottom: 3rem;
          padding: 1.5rem;
          background: rgba(30, 41, 59, 0.7);
          border-radius: 1rem;
          border: 1px solid rgba(59, 130, 246, 0.3);
          box-shadow: 0 0 20px rgba(59, 130, 246, 0.2);
          position: relative;
          z-index: 50;
          overflow: visible;
        }

        /* Enhanced heading styles */
        .digital-identity-heading {
          font-size: 2.5rem;
          font-weight: 800;
          color: white;
          margin-bottom: 1rem;
          text-shadow: 0 0 15px rgba(255, 255, 255, 0.9);
          position: relative;
          display: inline-block;
        }

        .digital-identity-heading::after {
          content: "";
          position: absolute;
          bottom: -10px;
          left: 25%;
          width: 50%;
          height: 4px;
          background: linear-gradient(to right, #3b82f6, #8b5cf6);
          border-radius: 2px;
        }

        .digital-identity-subtitle {
          font-size: 1.1rem;
          color: #d1d5db;
          line-height: 1.6;
          max-width: 90%;
          margin: 0 auto;
        }
      `}</style>

      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center">
          <div className="relative w-full max-w-3xl aspect-[2/1] mb-6">
            {/* Matrix Rain in the background - only show during welcome message */}
            <div className="absolute inset-0 rounded-xl overflow-hidden z-0">
              {showWelcome && (
                <MatrixRain
                  fontSize={10}
                  color="white"
                  characters="01"
                  fadeOpacity={0.05}
                  speed={0.5}
                />
              )}
            </div>

            {/* Modified Animation Sequence with better visibility handling */}
            <AnimatePresence mode="wait">
              {showWelcome && (
                <motion.div
                  key="welcome"
                  className="absolute inset-0 flex flex-col items-center justify-center z-20"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, transition: { duration: 0.5 } }}
                  onClick={handleInteraction}
                >
                  <motion.div
                    className="text-green-400 text-3xl font-mono text-center glow-text"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    Nice to meet you!
                  </motion.div>
                </motion.div>
              )}

              {showCard && (
                <motion.div
                  className="card-container relative z-20 w-full max-w-5xl mx-auto"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  onClick={handleInteraction}
                  style={{ willChange: 'transform', transform: 'translateZ(0)' }}
                >
                  <Tilt
                    className="w-full perspective-1000"
                    rotationFactor={10}
                    isRevese={false}
                    style={{
                      transformOrigin: "center center",
                      perspective: "1000px",
                    }}
                    springOptions={{
                      stiffness: 300,
                      damping: 20,
                      mass: 0.5,
                    }}
                  >
                    {/* Spotlight effect */}
                    <Spotlight
                      className="z-10 from-purple-500/20 via-blue-500/10 to-transparent blur-2xl"
                      size={300}
                      springOptions={{
                        stiffness: 300,
                        damping: 20,
                        mass: 0.5,
                      }}
                    />

                    <div
                      className="card-flipper relative transition-transform duration-700 w-full h-full"
                      style={{
                        transformStyle: "preserve-3d",
                        transform: isFlipped
                          ? "rotateY(180deg)"
                          : "rotateY(0deg)",
                      }}
                    >
                      {/* Front of card - BBPS Card */}
                      <div
                        className="card front relative z-20 p-8 bg-black text-white overflow-hidden rounded-xl shadow-2xl border border-gray-800"
                        style={{
                          backfaceVisibility: "hidden",
                          position: isFlipped ? "absolute" : "relative",
                          width: "100%",
                          height: "100%",
                        }}
                      >
                        <div className="card-layout flex flex-col md:flex-row items-stretch w-full">
                          <div className="left-section w-full md:w-2/5 mb-8 md:mb-0">
                            <div className="logo text-center relative">
                              {/* Removing the BBPS letters at the top */}
                              <div className="house-icon mt-4 flex justify-center">
                                <motion.div
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  transition={{
                                    delay: 0.5,
                                    type: "spring",
                                    stiffness: 200,
                                  }}
                                >
                                  {/* Fixed logo size to better fit the card - increased by 50% */}
                                  <div className="w-60 h-60 md:w-[360px] md:h-[360px] relative mx-auto">
                                    <img
                                      src="/bbps-logo.png"
                                      alt="BBPS Logo"
                                      className="w-full h-full object-contain object-top"
                                      style={{
                                        clipPath:
                                          "inset(0 0 5%)" /* Crop less from the bottom to show the full S */,
                                        transform:
                                          "scale(0.9)" /* Reduce size by 10% */,
                                      }}
                                      onError={(e) => {
                                        // Fallback to SVG if image not found
                                        e.currentTarget.style.display = "none";
                                        document
                                          .getElementById("fallback-svg")
                                          ?.style.removeProperty("display");
                                      }}
                                    />
                                    <svg
                                      id="fallback-svg"
                                      style={{ display: "none" }}
                                      width="100%"
                                      height="100%"
                                      viewBox="0 0 100 100"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M50 10 L20 40 L25 45 L25 75 L75 75 L75 45 L80 40 Z"
                                        stroke="#CDB87C"
                                        strokeWidth="4"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M30 35 H70"
                                        stroke="#CDB87C"
                                        strokeWidth="4"
                                        strokeLinecap="round"
                                      />
                                      <path
                                        d="M50 55 V75"
                                        stroke="#CDB87C"
                                        strokeWidth="4"
                                        strokeLinecap="round"
                                      />
                                      <path
                                        d="M10 35 C 20 20, 80 20, 90 35"
                                        stroke="#CDB87C"
                                        strokeWidth="4"
                                        strokeLinecap="round"
                                      />
                                      <path
                                        d="M15 30 C 30 15, 70 15, 85 30"
                                        stroke="#CDB87C"
                                        strokeWidth="4"
                                        strokeLinecap="round"
                                      />
                                      <path
                                        d="M18 65 C 30 80, 70 80, 82 65"
                                        stroke="#CDB87C"
                                        strokeWidth="4"
                                        strokeLinecap="round"
                                      />
                                    </svg>
                                  </div>
                                </motion.div>
                              </div>
                              <motion.p
                                className="company-name text-sm mt-4 text-[#CDB87C]"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.8 }}
                              >
                                BIG BROTHER PROPERTY SOLUTIONS LLC
                              </motion.p>
                            </div>
                          </div>

                          <div className="right-section w-full md:w-3/5 pl-0 md:pl-6 md:border-l border-gray-700 flex flex-col items-center">
                            <motion.h1
                              className="name text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 mb-2 text-center"
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.6 }}
                            >
                              Luis Velasco
                            </motion.h1>

                            <motion.p
                              className="title text-2xl text-gray-300 mb-6 text-center"
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.2, duration: 0.6 }}
                            >
                              Field Manager
                            </motion.p>

                            <div className="contact-info space-y-3 flex flex-col items-center">
                              {[
                                { icon: "phone", text: "(C) 336-624-7442" },
                                { icon: "mail", text: "ncbbps@gmail.com" },
                                {
                                  icon: "map-pin",
                                  text: "1200 Eastchester Dr. High Point NC 27265",
                                },
                              ].map((item, index) => (
                                <motion.div
                                  key={index}
                                  className="flex items-center space-x-3"
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{
                                    delay: 0.4 + index * 0.1,
                                    duration: 0.5,
                                  }}
                                >
                                  <div className="w-8 h-8 rounded-full bg-blue-900/40 flex items-center justify-center">
                                    {item.icon === "phone" && (
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-4 h-4 text-blue-400"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      >
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                      </svg>
                                    )}
                                    {item.icon === "mail" && (
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-4 h-4 text-blue-400"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      >
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                        <polyline points="22,6 12,13 2,6"></polyline>
                                      </svg>
                                    )}
                                    {item.icon === "map-pin" && (
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-4 h-4 text-blue-400"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      >
                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                        <circle cx="12" cy="10" r="3"></circle>
                                      </svg>
                                    )}
                                  </div>
                                  <p className="text-gray-300 text-sm">
                                    {item.text}
                                  </p>
                                </motion.div>
                              ))}
                            </div>
                          </div>

                          {/* Card decorative elements */}
                          <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-xl"></div>
                          <div className="absolute -top-8 -left-8 w-32 h-32 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 blur-xl"></div>
                        </div>

                        {/* Flip indicator */}
                        <button
                          className="absolute bottom-4 right-4 z-30 w-10 h-10 rounded-full bg-gray-800/80 flex items-center justify-center text-gray-300 hover:text-white"
                          onClick={handleFlipCard}
                          aria-label="Flip card"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M17 1l4 4-4 4"></path>
                            <path d="M3 11V9a4 4 0 0 1 4-4h14"></path>
                            <path d="M7 23l-4-4 4-4"></path>
                            <path d="M21 13v2a4 4 0 0 1-4 4H3"></path>
                          </svg>
                        </button>
                      </div>

                      {/* Back of card - Developer Profile */}
                      <div
                        className="card back relative z-20 p-8 bg-gray-900 text-white overflow-hidden rounded-xl shadow-2xl border border-gray-800"
                        style={{
                          backfaceVisibility: "hidden",
                          transform: "rotateY(180deg)",
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                        }}
                      >
                        {/* Updated Developer Profile with navigation links */}
                        <div className="text-center mb-6">
                          <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white text-2xl font-bold mb-4 mx-auto border-4 border-blue-400/30">
                            LV
                          </div>
                          <h2 className="text-2xl font-bold text-white mb-1">
                            Luis Velasco
                          </h2>
                          <p className="text-blue-400 font-medium mb-6">
                            Software Developer
                          </p>

                          {/* Navigation Links */}
                          <div className="flex flex-wrap justify-center gap-4 mb-8">
                            {[
                              "Get Started",
                              "About",
                              "Skills",
                              "Projects",
                              "Contact",
                            ].map((item) => (
                              <a
                                key={item}
                                href={`#${item
                                  .toLowerCase()
                                  .replace(" ", "-")}`}
                                className="px-3 py-1 rounded-full bg-blue-900/30 text-blue-300 hover:bg-blue-800/50 transition-colors text-sm"
                              >
                                {item}
                              </a>
                            ))}
                          </div>

                          {/* About Me Section */}
                          <div className="text-left mb-6">
                            <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 mb-3">
                              About Me
                            </h3>
                            <p className="text-gray-300 text-sm leading-relaxed">
                              Full-stack developer specializing in Next.js,
                              React, and modern web technologies. Building
                              intuitive and performant digital experiences with
                              a focus on user-centered design.
                            </p>
                            <p className="text-gray-300 text-sm mt-3 leading-relaxed">
                              With over 5 years of experience in web
                              development, I help businesses transform their
                              digital presence with cutting-edge solutions that
                              stand out in today's competitive landscape.
                            </p>
                          </div>
                        </div>

                        {/* Call to action button */}
                        <div className="text-center">
                          <a
                            href="#contact"
                            className="mt-4 inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center"
                          >
                            Contact Me
                          </a>
                        </div>

                        {/* Card decorative elements */}
                        <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-xl"></div>
                        <div className="absolute -top-8 -left-8 w-32 h-32 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 blur-xl"></div>

                        {/* Flip indicator */}
                        <button
                          className="absolute bottom-4 right-4 z-30 w-10 h-10 rounded-full bg-gray-800/80 flex items-center justify-center text-gray-300 hover:text-white"
                          onClick={handleFlipCard}
                          aria-label="Flip card back"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M17 1l4 4-4 4"></path>
                            <path d="M3 11V9a4 4 0 0 1 4-4h14"></path>
                            <path d="M7 23l-4-4 4-4"></path>
                            <path d="M21 13v2a4 4 0 0 1-4 4H3"></path>
                          </svg>
                        </button>
                      </div>
                    </div>

                    {/* Swipe/dismiss indicator with improved performance */}
                    {showCard && (
                      <motion.button
                        className="absolute top-4 right-4 z-30 w-8 h-8 rounded-full bg-gray-800/80 flex items-center justify-center text-gray-300 hover:text-white"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDismissCard();
                        }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        style={{ willChange: 'transform', transform: 'translateZ(0)' }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <line x1="18" y1="6" x2="6" y2="18"></line>
                          <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                      </motion.button>
                    )}
                  </Tilt>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="text-center max-w-lg">
            <p className="text-gray-400">
              Interactive business card with 3D tilt effect. Touch or hover to
              experience the full 3D effect.
            </p>
            <a
              href="mailto:ncbbps@gmail.com"
              className="mt-6 inline-block px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-medium hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              style={{ willChange: 'transform', transform: 'translateZ(0)' }}
            >
              Contact BBPS
            </a>
          </div>

          {/* Modified scroll indicator with better visibility */}
          <motion.div
            className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white/70"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ repeat: Infinity, duration: 2 }}
            style={{ willChange: 'opacity', transform: 'translateZ(0)' }}
          >
            <p className="text-sm mb-2">Scroll down to explore</p>
            <a href="#main-content">
              <svg
                className="h-6 w-6 animate-bounce"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
