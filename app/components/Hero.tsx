"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import dynamic from 'next/dynamic';

// Import GlobeDemo component with dynamic loading to avoid SSR issues
const GlobeDemo = dynamic(
  () => import('../components/ui/globe-demo').then(mod => mod.GlobeDemo),
  { ssr: false }
);

const Hero = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Add your email submission logic here
    setIsSubmitted(true);
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
    <section id="hero" className="py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          className="flex flex-col md:flex-row gap-12 items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Left Column - Content */}
          <div className="w-full md:w-1/2 lg:pr-8">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-gray-900"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
            >
              Network <br/>
              <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">Navigator</span>
            </motion.h1>
            <motion.p
              className="text-xl text-gray-700 mb-8 leading-relaxed"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              The smarter way to connect at events. Build meaningful relationships and 
              grow your professional network effortlessly.
            </motion.p>
            
            {/* Email signup form */}
            <motion.form 
              className="flex flex-col sm:flex-row gap-3 mb-8"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              onSubmit={handleSubmit}
            >
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email" 
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                required
                id="hero-email-input"
                name="email"
                autoComplete="email"
              />
              <button 
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
              >
                Get Early Access
              </button>
            </motion.form>
            
            {isSubmitted && (
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-primary-600 mt-2 text-sm"
              >
                Thanks! We'll be in touch soon.
              </motion.p>
            )}
            
            {/* Social proof */}
            <motion.div
              className="flex items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <div className="flex -space-x-2">
                {Array.from({ length: 4 }).map((_, i) => (
                  <motion.div 
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-white overflow-hidden bg-gray-200"
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4 + (i * 0.1) }}
                  />
                ))}
              </div>
              <span className="ml-3 text-sm text-gray-600">Trusted by <span className="font-semibold">2,000+</span> event professionals</span>
            </motion.div>
          </div>
          
          {/* Right Column - Globe Demo */}
          <motion.div 
            className="w-full md:w-1/2 relative"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="relative">
              {/* The interactive Globe Demo */}
              <GlobeDemo />
              
              {/* Event Details Card - Below the Globe */}
              <motion.div
                className="mt-4 p-4 bg-white shadow-lg rounded-xl"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <div className="flex items-center justify-between mb-2">
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
              </motion.div>
              
              {/* Decorative elements with animations */}
              <motion.div
                className="absolute -bottom-6 -right-6 w-20 h-20 bg-secondary-100 rounded-lg z-0"
                initial={{ rotate: 0 }}
                animate={{ rotate: 12 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              />
              <motion.div
                className="absolute -top-6 -left-6 w-16 h-16 bg-primary-100 rounded-lg z-0"
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