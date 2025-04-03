"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Here you would typically send the email to your backend
      console.log('Email submitted:', email);
      setIsSubmitted(true);
      setEmail('');
      
      // Reset the submission state after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }
  };

  // Motion variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        duration: 0.5, 
        ease: "easeOut" 
      }
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-primary-50 pt-20 pb-16 md:pt-32 md:pb-24">
      {/* Enhanced background elements with more subtle animations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.2, scale: 1 }}
          transition={{ duration: 2.5, repeat: Infinity, repeatType: "reverse" }}
          className="absolute top-20 right-10 w-80 h-80 bg-primary-300 rounded-full mix-blend-multiply filter blur-3xl"
        />
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.2, scale: 1 }}
          transition={{ duration: 3.5, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
          className="absolute bottom-20 left-10 w-80 h-80 bg-secondary-300 rounded-full mix-blend-multiply filter blur-3xl"
        />
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", delay: 1 }}
          className="absolute top-60 left-40 w-60 h-60 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl"
        />
      </div>

      <div className="container-custom relative z-10">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left">
            <motion.div variants={itemVariants}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6">
                Network <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">Navigator</span>
              </h1>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                The smarter way to connect at events. Build meaningful relationships and grow your professional network effortlessly.
              </p>
            </motion.div>

            {/* Email Signup Form with enhanced styling */}
            <motion.div variants={itemVariants} className="max-w-md mx-auto lg:mx-0">
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="input flex-grow focus:ring-2 focus:ring-primary-500 border-none shadow-lg"
                  required
                />
                <motion.button
                  type="submit"
                  className="btn-primary whitespace-nowrap shadow-lg"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get Early Access
                </motion.button>
              </form>
              
              {isSubmitted && (
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-primary-600 mt-2 text-sm"
                >
                  Thanks! We'll be in touch soon.
                </motion.p>
              )}
              
              <motion.p variants={itemVariants} className="text-gray-500 text-sm mt-3">
                Join 2,000+ professionals already on the waitlist
              </motion.p>
            </motion.div>
          </div>

          {/* Right Column - Image/Illustration with enhanced styling */}
          <motion.div
            className="relative"
            variants={itemVariants}
          >
            <div className="relative mx-auto max-w-md lg:max-w-full">
              <motion.div 
                className="relative z-10 bg-white rounded-xl shadow-custom overflow-hidden"
                whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)" }}
                transition={{ duration: 0.3 }}
              >
                <div className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-primary-50 to-secondary-50 w-full h-[400px] relative">
                  <motion.div 
                    className="absolute inset-0 flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                  >
                    <div className="text-center p-6">
                      <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-primary-100 to-primary-200 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-3">NetNav Dashboard</h3>
                      <p className="text-lg text-gray-600">Connect with attendees, exchange contacts, and grow your network</p>
                    </div>
                  </motion.div>
                </div>
                <div className="p-6 bg-white">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="font-bold text-gray-800">Tech Summit 2023</h3>
                      <p className="text-sm text-gray-500">New York, NY • September 12-14</p>
                    </div>
                    <motion.button 
                      className="px-3 py-1.5 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold"
                      whileHover={{ backgroundColor: "#bae6fd" }}
                    >
                      Attending
                    </motion.button>
                  </div>
                  <div className="flex -space-x-2 overflow-hidden">
                    {/* Use different background colors for attendee avatars */}
                    {[
                      "bg-blue-300", "bg-green-300", "bg-yellow-300", 
                      "bg-pink-300", "bg-purple-300"
                    ].map((color, i) => (
                      <motion.div 
                        key={i}
                        className={`inline-block h-8 w-8 rounded-full ring-2 ring-white ${color}`}
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.2 + (i * 0.1) }}
                      />
                    ))}
                    <motion.div 
                      className="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-primary-100 text-primary-700 flex items-center justify-center text-xs font-medium"
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.7 }}
                    >
                      +42
                    </motion.div>
                  </div>
                </div>
              </motion.div>
              
              {/* Decorative elements with animations */}
              <motion.div
                className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary-100 rounded-lg z-0"
                initial={{ rotate: 0 }}
                animate={{ rotate: 12 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              />
              <motion.div
                className="absolute -top-6 -left-6 w-24 h-24 bg-primary-100 rounded-lg z-0"
                initial={{ rotate: 0 }}
                animate={{ rotate: -12 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 