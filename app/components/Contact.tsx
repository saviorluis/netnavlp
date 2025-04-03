"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
    submitted: false,
    loading: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState({ ...formState, loading: true });
    
    // Simulate form submission with a timeout
    setTimeout(() => {
      setFormState({
        name: '',
        email: '',
        message: '',
        submitted: true,
        loading: false
      });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const formVariants = {
    hidden: { opacity: 0, scale: 0.98 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="contact" className="section bg-gray-900 text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
        <svg className="absolute -top-20 -right-20 text-primary-600 w-1/3" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" d="M46.5,-78.3C59.6,-71.3,69.3,-57.8,75.9,-43.4C82.5,-29,86,-13.5,84.8,1.2C83.5,15.9,77.5,29.9,68.5,41.1C59.6,52.4,47.7,60.9,34.8,67.5C21.9,74.1,8,78.8,-4.9,77.9C-17.8,77,-29.7,70.6,-41.3,63.2C-52.9,55.9,-64.3,47.6,-71.5,36.1C-78.7,24.7,-81.8,10.1,-81.1,-4.7C-80.5,-19.5,-76.1,-34.6,-67.4,-46.6C-58.8,-58.5,-45.9,-67.4,-32.6,-73.9C-19.3,-80.5,-5.7,-84.8,7.4,-82.4C20.5,-79.9,33.4,-85.3,46.5,-78.3Z" transform="translate(100 100)" />
        </svg>
        <svg className="absolute -bottom-20 -left-20 text-secondary-600 w-1/3" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" d="M41.3,-69.3C53.9,-63.2,64.6,-52.3,70.6,-39.6C76.6,-26.8,77.8,-12.1,76.2,1.7C74.6,15.5,70.2,28.3,63.2,39.6C56.2,50.9,46.6,60.8,35,66.7C23.4,72.7,9.9,74.7,-3.5,74.1C-16.9,73.4,-30.3,70.1,-41.7,63C-53.1,55.9,-62.6,45.1,-69.5,32.3C-76.4,19.6,-80.8,4.9,-80.2,-9.6C-79.6,-24.1,-74,-38.5,-64.3,-48.5C-54.6,-58.5,-40.7,-64.1,-27.9,-69.3C-15,-74.5,-3.2,-79.4,8.6,-78.5C20.3,-77.7,28.7,-75.3,41.3,-69.3Z" transform="translate(100 100)" />
        </svg>
      </div>

      <div className="container-custom relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-12 md:mb-20">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Have questions about NetNav? Want to try our platform for your next event? 
              Send us a message, and we'll get back to you soon.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact Info */}
            <motion.div variants={itemVariants} className="lg:col-span-2 space-y-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-primary-400">Contact Information</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 text-primary-400 mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-gray-300 text-sm mb-1">Email</h4>
                      <a href="mailto:info@netnav.com" className="text-white hover:text-primary-400 transition-colors">
                        info@netnav.com
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 text-primary-400 mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-gray-300 text-sm mb-1">Phone</h4>
                      <a href="tel:+1-555-000-0000" className="text-white hover:text-primary-400 transition-colors">
                        +1 (555) 000-0000
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 text-primary-400 mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-gray-300 text-sm mb-1">Address</h4>
                      <address className="not-italic text-white">
                        123 Networking Street<br />
                        San Francisco, CA 94107
                      </address>
                    </div>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4 text-primary-400">Social Media</h3>
                <div className="flex space-x-4">
                  {['twitter', 'facebook', 'linkedin', 'instagram'].map((social) => (
                    <a 
                      key={social}
                      href={`https://${social}.com`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:bg-primary-600 hover:text-white transition-all duration-300"
                    >
                      <span className="sr-only">{social}</span>
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              variants={formVariants}
              className="lg:col-span-3 bg-gray-800 rounded-2xl p-8 shadow-xl"
            >
              {!formState.submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Your Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formState.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Your Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formState.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={formState.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>
                  <div>
                    <button
                      type="submit"
                      disabled={formState.loading}
                      className={`w-full flex items-center justify-center px-6 py-3 rounded-lg text-white font-medium transition-all duration-300 ${
                        formState.loading 
                          ? 'bg-gray-600 cursor-not-allowed' 
                          : 'bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500'
                      }`}
                    >
                      {formState.loading ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </>
                      ) : 'Send Message'}
                    </button>
                  </div>
                </form>
              ) : (
                <motion.div 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  className="text-center py-8"
                >
                  <div className="bg-primary-600/20 rounded-full p-4 inline-flex mb-6">
                    <svg className="w-12 h-12 text-primary-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Thank You!</h3>
                  <p className="text-gray-300 mb-6">Your message has been sent successfully. We'll get back to you soon.</p>
                  <button
                    onClick={() => setFormState({ ...formState, submitted: false })}
                    className="inline-flex items-center px-6 py-3 rounded-lg text-white font-medium bg-gray-700 hover:bg-gray-600 transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                    </svg>
                    Send Another Message
                  </button>
                </motion.div>
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 