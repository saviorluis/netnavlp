"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PersonalCard from './PersonalCard';
import MatrixRain from './ui/matrix-rain';

export default function CardEntryAnimation() {
  const [animationStage, setAnimationStage] = useState(0);
  const [showPersonalCard, setShowPersonalCard] = useState(false);
  const [autoScrolling, setAutoScrolling] = useState(false);
  
  // Auto-advance through animation stages
  useEffect(() => {
    if (animationStage < 3) {
      const timer = setTimeout(() => {
        setAnimationStage(prev => prev + 1);
      }, animationStage === 0 ? 4000 : 6000); // 5x slower: 800 -> 4000, 1200 -> 6000
      
      return () => clearTimeout(timer);
    } else if (animationStage === 3) {
      const timer = setTimeout(() => {
        setShowPersonalCard(true);
      }, 2500); // 5x slower: 500 -> 2500
      
      return () => clearTimeout(timer);
    } else if (animationStage === 4) {
      // Auto-scroll after 15 seconds of showing the full card (increased from 3)
      const timer = setTimeout(() => {
        if (!autoScrolling) {
          setAutoScrolling(true);
          const mainContent = document.getElementById('main-content');
          if (mainContent) {
            mainContent.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }, 15000);
      
      return () => clearTimeout(timer);
    }
  }, [animationStage, autoScrolling]);
  
  // Progress to full card after animation completes
  useEffect(() => {
    if (showPersonalCard) {
      setAnimationStage(4);
    }
  }, [showPersonalCard]);

  // Matrix text effect for Network Navigator (slowed down)
  const MatrixText = ({ text, delay = 0 }) => {
    const [displayText, setDisplayText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const characters = "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";
    
    useEffect(() => {
      if (currentIndex === text.length) return;
      
      const randomize = () => {
        setDisplayText(prev => {
          let result = '';
          for (let i = 0; i < currentIndex; i++) {
            result += text[i];
          }
          
          if (currentIndex < text.length) {
            result += characters[Math.floor(Math.random() * characters.length)];
          }
          
          return result;
        });
      };
      
      let intervalId;
      
      // Start after delay (5x slower)
      const startTimeout = setTimeout(() => {
        // Randomize characters slowly
        intervalId = setInterval(randomize, 150); // 5x slower: 30 -> 150
        
        // Set the real character after more randomization
        setTimeout(() => {
          clearInterval(intervalId);
          setDisplayText(prev => text.substring(0, currentIndex + 1));
          setCurrentIndex(prev => prev + 1);
        }, 750); // 5x slower: 150 -> 750
      }, delay * 5); // 5x slower delay
      
      return () => {
        clearTimeout(startTimeout);
        if (intervalId) clearInterval(intervalId);
      };
    }, [currentIndex, text, delay]);
    
    return <span>{displayText}</span>;
  };

  // NFC card initial animation
  const cardVariants = {
    initial: {
      scale: 0.5,
      y: 50,
      opacity: 0,
      rotateY: 180
    },
    visible: {
      scale: 1,
      y: 0,
      opacity: 1,
      rotateY: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
        duration: 0.8
      }
    },
    exit: {
      scale: 0.8,
      opacity: 0,
      transition: {
        duration: 0.4
      }
    }
  };

  // Elements animation (for logo, name, tagline)
  const elementVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    }
  };
  
  // Ripple animation for NFC tap
  const rippleVariants = {
    initial: { scale: 0, opacity: 0.8 },
    animate: { 
      scale: 2.5, 
      opacity: 0,
      transition: {
        repeat: Infinity,
        repeatDelay: 1,
        duration: 1.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-gray-950 to-primary-950 flex flex-col items-center justify-center">
      {/* Matrix Rain Background */}
      <MatrixRain 
        fontSize={15}
        color="#00cc00"
        characters="01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン"
        fadeOpacity={0.05}
        speed={0.16} // 5x slower: 0.8 -> 0.16
      />
      
      <AnimatePresence mode="wait">
        {!showPersonalCard ? (
          <motion.div
            key="animation"
            className="relative flex flex-col items-center justify-center p-4 z-10"
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 2.5 }} // 5x slower: 0.5 -> 2.5
          >
            {animationStage === 0 && (
              <motion.div 
                className="text-center mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 4 }} // 5x slower: 0.8 -> 4
              >
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  <span className="text-gradient">Digital Identity</span>, 
                  <span className="text-white"> Redefined</span>
                </h1>
                <p className="text-xl text-gray-300">Your professional presence in the digital age</p>
                
                {/* Empty form for industry and email */}
                <motion.div 
                  className="mt-8 bg-black/30 rounded-lg p-6 w-full max-w-md mx-auto backdrop-blur-sm"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 1.5 }}
                >
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">Industry</label>
                      <input 
                        type="text" 
                        placeholder="Your Industry" 
                        className="w-full px-4 py-2 bg-gray-800/60 border border-gray-700 rounded-md text-white placeholder-gray-500 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                      <input 
                        type="email" 
                        placeholder="your@email.com" 
                        className="w-full px-4 py-2 bg-gray-800/60 border border-gray-700 rounded-md text-white placeholder-gray-500 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}

            {animationStage === 1 && (
              <motion.div 
                className="text-center mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 4 }} // 5x slower: 0.8 -> 4
              >
                <div className="text-green-400 text-5xl font-mono">
                  <MatrixText text="Big Brother" delay={100} />
                </div>
              </motion.div>
            )}

            {animationStage === 2 && (
              <motion.div 
                className="text-center mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 4 }} // 5x slower: 0.8 -> 4
              >
                <div className="text-green-400 text-5xl font-mono">
                  <MatrixText text="Property Solutions" delay={100} />
                </div>
              </motion.div>
            )}

            {/* Tap instruction */}
            {animationStage < 3 && animationStage > 0 && (
              <motion.p 
                className="text-white/70 text-sm mt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3, duration: 3 }} // 5x slower: 0.6 -> 3, 0.6 -> 3
              >
                {animationStage === 1 ? "Generating digital identity..." : "Preparing business card..."}
              </motion.p>
            )}
            
            {/* Want your own? */}
            {animationStage >= 3 && (
              <motion.div 
                className="mt-8 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 4, duration: 3 }} // 5x slower: 0.8 -> 4, 0.6 -> 3
              >
                <p className="text-white text-xl font-medium mb-3">Create your own digital business card</p>
                <a href="#main-content" className="inline-block px-6 py-3 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-full text-sm font-medium shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  Explore More
                </a>
              </motion.div>
            )}
          </motion.div>
        ) : (
          <motion.div
            key="personal-card"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 4 }} // 5x slower: 0.8 -> 4
            className="w-full z-10"
          >
            <div className="max-w-4xl mx-auto p-6">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white">
                  <span className="text-gradient">Digital Business Card</span>
                </h2>
                <p className="text-gray-300 mt-2">Simple | Interactive | Professional</p>
              </div>
              
              <div className="bg-black/30 backdrop-blur-md p-8 rounded-2xl shadow-2xl">
                <div className="text-center mb-8">
                  <div className="inline-block h-24 w-24 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center text-white text-4xl font-bold">
                    L
                  </div>
                  <h2 className="text-2xl font-bold text-white mt-4">Luis Velasco</h2>
                  <p className="text-primary-300">Field Manager</p>
                  <p className="text-gray-400 mt-2">Big Brother Property Solutions</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  <div className="bg-gray-800/30 p-4 rounded-lg">
                    <h3 className="text-white font-medium mb-2">Contact</h3>
                    <div className="space-y-2">
                      <div className="flex items-center text-gray-300">
                        <svg className="h-5 w-5 text-primary-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span>ncbbps@gmail.com</span>
                      </div>
                      <div className="flex items-center text-gray-300">
                        <svg className="h-5 w-5 text-primary-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <span>(336) 624-7442</span>
                      </div>
                      <div className="flex items-center text-gray-300">
                        <svg className="h-5 w-5 text-primary-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span>1200 Eastchester Dr. High Point NC 27265</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-800/30 p-4 rounded-lg">
                    <h3 className="text-white font-medium mb-2">Create Your Own</h3>
                    <p className="text-gray-300 text-sm mb-4">
                      Generate your own digital business card with custom matrix effects and interactive elements.
                    </p>
                    <a href="#business-card-section" className="inline-block px-4 py-2 bg-primary-600 text-white rounded-lg text-sm mt-2 hover:bg-primary-500 transition-colors">
                      View Sample Card
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Scroll indicator */}
            <motion.div 
              className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white/70"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <p className="text-sm mb-2">Scroll down to explore</p>
              <svg className="h-6 w-6 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 