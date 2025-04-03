"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FiUsers, FiCalendar, FiMessageSquare, FiBarChart2, FiLink, FiShield } from 'react-icons/fi';

const featuresList = [
  {
    icon: <FiUsers className="h-7 w-7" />,
    title: 'Smart Networking',
    description: 'Connect with the right people based on your interests, industry, and goals. Our AI-powered matching helps you find meaningful connections.'
  },
  {
    icon: <FiCalendar className="h-7 w-7" />,
    title: 'Event Management',
    description: 'Discover, register, and manage all your events in one place. Get personalized event recommendations based on your network and interests.'
  },
  {
    icon: <FiMessageSquare className="h-7 w-7" />,
    title: 'Seamless Communication',
    description: 'Chat with connections before, during, and after events. Schedule meetings and follow-ups without leaving the platform.'
  },
  {
    icon: <FiBarChart2 className="h-7 w-7" />,
    title: 'Networking Analytics',
    description: "Track your networking progress with detailed insights. See who you've met, conversations had, and opportunities created."
  },
  {
    icon: <FiLink className="h-7 w-7" />,
    title: 'Business Contact Management',
    description: 'Automatically organize and update your business contacts. Never lose a valuable connection again with our smart contact system.'
  },
  {
    icon: <FiShield className="h-7 w-7" />,
    title: 'Privacy Controls',
    description: 'You control what information is shared and with whom. Our platform prioritizes your privacy while maximizing networking potential.'
  }
];

const Features = () => {
  // Staggered animation for the section
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  // Animation for heading section
  const headingVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  // Animation for feature cards
  const featureVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    },
    hover: { 
      y: -10,
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1)",
      transition: { duration: 0.3 }
    }
  };

  return (
    <section id="features" className="section bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-primary-50 rounded-full opacity-70"></div>
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-secondary-50 rounded-full opacity-70 transform -translate-x-1/2"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="space-y-16"
        >
          {/* Heading Section */}
          <div className="text-center max-w-3xl mx-auto">
            <motion.h2 
              variants={headingVariants}
              className="text-3xl md:text-4xl font-display font-bold mb-6"
            >
              Everything You Need to Network <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">Effectively</span>
            </motion.h2>
            <motion.p 
              variants={headingVariants}
              className="text-lg md:text-xl text-gray-700 leading-relaxed"
            >
              NetNav combines event management with powerful networking tools to help you build and maintain valuable professional relationships.
            </motion.p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuresList.map((feature, index) => (
              <motion.div
                key={index}
                variants={featureVariants}
                whileHover="hover"
                className="card group bg-white relative border border-gray-100 hover:border-primary-200 transition-all"
              >
                {/* Feature Icon */}
                <div className="mb-6 p-4 bg-gradient-to-br from-primary-50 to-primary-100 rounded-lg inline-block group-hover:bg-gradient-to-br group-hover:from-primary-100 group-hover:to-primary-200 transition-all">
                  <div className="text-primary-600">
                    {feature.icon}
                  </div>
                </div>
                
                {/* Feature Content */}
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary-600 transition-colors">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                
                {/* Subtle accent decoration */}
                <div className="absolute top-0 right-0 w-20 h-1 bg-gradient-to-r from-transparent to-primary-200 transform -translate-y-1 opacity-0 group-hover:opacity-100 transition-all"></div>
              </motion.div>
            ))}
          </div>
          
          {/* CTA Section */}
          <motion.div 
            variants={headingVariants}
            className="text-center mt-16"
          >
            <a 
              href="#contact" 
              className="inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-medium shadow-lg hover:shadow-xl transform transition-all hover:-translate-y-1"
            >
              <span>Start Networking Smarter</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features; 