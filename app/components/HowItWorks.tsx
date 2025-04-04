"use client";

import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Create Your Profile',
    description: 'Sign up and build your professional profile. Add your interests, industry, and networking goals to help us match you with the right people.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    )
  },
  {
    number: '02',
    title: 'Discover Events',
    description: 'Browse and register for events in your industry or area of interest. Get personalized event recommendations based on your profile.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    number: '03',
    title: 'Connect at Events',
    description: 'Use our mobile app at events to scan badges, exchange contact info, and schedule meetings with other attendees.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
      </svg>
    )
  },
  {
    number: '04',
    title: 'Grow Your Network',
    description: 'Follow up with your connections after events. Our platform helps you maintain relationships and track networking opportunities.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    )
  }
];

const HowItWorks = () => {
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

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };

  const stepVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const iconVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { 
        duration: 0.5,
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <section id="how-it-works" className="section bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg className="absolute -bottom-1/4 -right-1/4 text-primary-50 w-1/2 h-1/2 opacity-50" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" d="M37.6,-65.2C45.4,-56.7,46.5,-40.2,52.9,-27.2C59.3,-14.1,71.1,-4.7,73.3,6.5C75.5,17.6,68.2,30.5,58.1,38.9C48,47.3,35.1,51.2,23.1,56.2C11.1,61.2,0,67.3,-13.6,70.2C-27.3,73.1,-43.6,72.9,-52.2,64.2C-60.9,55.5,-62,38.3,-65.5,23.5C-69,8.7,-74.8,-3.9,-73.7,-16.2C-72.5,-28.5,-64.3,-40.7,-53.5,-49.2C-42.7,-57.8,-29.4,-62.7,-16.4,-65.7C-3.5,-68.7,9.1,-69.8,21.6,-70.3C34.1,-70.8,45.7,-70.7,37.6,-65.2Z" transform="translate(100 100)" />
        </svg>
        <svg className="absolute -top-1/4 -left-1/4 text-secondary-50 w-1/2 h-1/2 opacity-50" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" d="M45.7,-78.2C58.9,-71.1,69.2,-58.5,76.2,-44.4C83.1,-30.3,86.8,-15.2,86.6,-0.1C86.4,14.9,82.4,29.8,74.2,42C65.9,54.1,53.5,63.6,40,69.5C26.5,75.4,13.3,77.7,-0.6,78.7C-14.4,79.7,-28.8,79.3,-42.3,74.2C-55.9,69.1,-68.5,59.2,-76.2,46.2C-83.9,33.1,-86.7,16.6,-85.2,0.9C-83.7,-14.7,-78,-29.5,-69.5,-42.1C-60.9,-54.7,-49.4,-65.2,-36.5,-72.3C-23.6,-79.4,-9.3,-83,-0.4,-82.2C8.4,-81.5,16.8,-76.5,28.5,-75.1C40.2,-73.7,52.4,-75.8,55.8,-68.9C59.2,-62,53.9,-46.1,45.7,-78.2Z" transform="translate(100 100)" />
        </svg>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="space-y-20"
        >
          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto">
            <motion.h2 
              variants={titleVariants}
              className="text-3xl md:text-4xl font-display font-bold mb-6"
            >
              How <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">NetNav</span> Works
            </motion.h2>
            <motion.p 
              variants={titleVariants}
              className="text-lg md:text-xl text-gray-700 leading-relaxed"
            >
              Our platform makes networking at events simple, effective, and measurable
            </motion.p>
          </div>

          {/* Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={stepVariants}
                className="relative"
              >
                {/* Step Icon */}
                <motion.div 
                  variants={iconVariants}
                  className="h-20 w-20 bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl flex items-center justify-center text-primary-600 mb-6 shadow-sm"
                >
                  {step.icon}
                </motion.div>
                
                {/* Large Step Number (Behind) */}
                <div className="absolute -top-8 -left-4 text-8xl font-bold text-gray-100 opacity-50 -z-10">
                  {step.number}
                </div>
                
                {/* Content */}
                <div className="relative">
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
                
                {/* Connector line for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 right-0 w-full h-0.5 bg-gradient-to-r from-primary-200 to-gray-200 transform translate-x-1/3">
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary-500"></div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
          
          {/* CTA */}
          <motion.div 
            variants={titleVariants}
            className="text-center mt-10"
          >
            <a 
              href="#hero" 
              className="inline-flex items-center px-8 py-4 rounded-lg bg-white border-2 border-primary-600 text-primary-600 font-medium shadow-lg hover:shadow-xl hover:bg-primary-50 transform transition-all hover:-translate-y-1"
              onClick={(e) => {
                e.preventDefault();
                // Focus on the hero email input
                const emailInput = document.getElementById('hero-email-input');
                if (emailInput) {
                  emailInput.scrollIntoView({ behavior: 'smooth' });
                  setTimeout(() => emailInput.focus(), 800);
                }
              }}
            >
              <span>Join Waiting List</span>
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

export default HowItWorks; 