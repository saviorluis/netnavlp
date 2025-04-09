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
      className="py-16 w-full bg-transparent min-h-screen flex flex-col items-center justify-center relative overflow-hidden"
    >
      <style jsx global>{`
        #business-card {
          background: transparent;
          position: relative;
          min-height: 100vh;
          padding: 1rem;
        }
        
        @media (max-width: 768px) {
          #business-card {
            padding: 1rem;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .card-container {
            transform: scale(1) !important;
            width: 100% !important;
            max-width: 100% !important;
            height: auto !important;
            min-height: 80vh;
          }

          .tilt-card {
            height: auto !important;
            min-height: 80vh;
          }

          .card-layout {
            background: rgba(0, 0, 0, 0.8);
            border-radius: 1rem;
            padding: 2rem 1rem;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          }
        }
        
        #business-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at center, rgba(30, 41, 59, 0.3), rgba(15, 23, 42, 0.1));
          z-index: -1;
        }
        
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
        
        /* Card flip animation styles */
        .card-flipper {
          transition: transform 0.6s;
          transform-style: preserve-3d;
          position: relative;
          width: 100%;
          height: 100%;
        }
        
        .card-flipper.flipped {
          transform: rotateY(180deg);
        }

        .flip-button {
          position: absolute;
          bottom: 1rem;
          right: 1rem;
          z-index: 999 !important; /* Maximum z-index */
          width: 2.4rem;
          height: 2.4rem;
          border-radius: 9999px;
          background-color: rgba(59, 130, 246, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          cursor: pointer;
          transition: all 0.2s;
          border: 2px solid rgba(255, 255, 255, 0.4);
          box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
          pointer-events: auto !important;
        }

        .flip-button:hover {
          color: white;
          background-color: rgba(37, 99, 235, 0.9);
          transform: scale(1.1);
          box-shadow: 0 0 20px rgba(59, 130, 246, 0.5);
        }

        /* Override any conflicting styles */
        .tilt-card * {
          pointer-events: auto;
        }
      `}</style>

      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center min-h-[80vh]">
          <div className="relative w-full max-w-md">
            {/* Matrix Rain container with mobile adjustments */}
            {showWelcome && (
              <div className="absolute inset-0 rounded-xl overflow-hidden z-0">
                <MatrixRain
                  fontSize={window.innerWidth < 768 ? 8 : 10}
                  color="white"
                  characters="01"
                  fadeOpacity={0.05}
                  speed={0.5}
                />
              </div>
            )}

            {/* Card content */}
            {showCard && (
              <motion.div
                className="card-container relative z-30 w-full mx-auto tilt-card bg-black/80 rounded-xl shadow-xl border border-gray-800"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
              >
                <Tilt
                  className="w-full h-full"
                  rotationFactor={10}
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                >
                  <Spotlight className="absolute inset-0 z-10" />

                  <div className="card-layout p-6 md:p-8">
                    {/* Logo section */}
                    <div className="logo-section mb-6">
                      <div className="logo text-center">
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                          className="w-24 h-24 md:w-32 md:h-32 mx-auto"
                        >
                          <img
                            src="/bbps-logo.png"
                            alt="BBPS Logo"
                            className="w-full h-full object-contain"
                          />
                        </motion.div>
                        <motion.p
                          className="company-name text-sm mt-3 text-[#CDB87C] font-semibold"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.8 }}
                        >
                          BIG BROTHER PROPERTY SOLUTIONS LLC
                        </motion.p>
                      </div>
                    </div>

                    {/* Info section */}
                    <div className="info-section text-center space-y-4">
                      <motion.h1
                        className="name text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        Luis Velasco
                      </motion.h1>

                      <motion.p
                        className="title text-lg md:text-xl text-gray-300"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        Field Manager
                      </motion.p>

                      <div className="contact-info space-y-3 mt-6">
                        {[
                          { icon: "phone", text: "(C) 336-624-7442" },
                          {
                            icon: "map-pin",
                            text: "1200 Eastchester Dr. High Point NC 27265",
                          },
                        ].map((item, index) => (
                          <motion.div
                            key={index}
                            className="flex items-center justify-center space-x-3"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 + index * 0.1 }}
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

                    {/* Contact BBPS button */}
                    <div className="mt-8 flex justify-center">
                      <button
                        onClick={() => window.open('https://www.bigbropros.com/', '_blank', 'noopener,noreferrer')}
                        className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
                      >
                        Contact BBPS
                      </button>
                    </div>
                  </div>
                </Tilt>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
