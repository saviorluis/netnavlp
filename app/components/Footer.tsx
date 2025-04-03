"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const footerLinks = [
    {
      title: 'Product',
      links: [
        { name: 'Features', href: '#features' },
        { name: 'How It Works', href: '#how-it-works' },
        { name: 'Pricing', href: '#' },
        { name: 'FAQ', href: '#' },
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '#' },
        { name: 'Team', href: '#' },
        { name: 'Careers', href: '#' },
        { name: 'Blog', href: '#' },
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Documentation', href: '#' },
        { name: 'Support', href: '#' },
        { name: 'API Docs', href: '#' },
        { name: 'Privacy', href: '#' },
      ]
    },
    {
      title: 'Connect',
      links: [
        { name: 'Twitter', href: 'https://twitter.com' },
        { name: 'LinkedIn', href: 'https://linkedin.com' },
        { name: 'GitHub', href: 'https://github.com' },
        { name: 'Contact', href: '#contact' },
      ]
    }
  ];

  return (
    <footer className="bg-gray-950 text-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="absolute top-0 left-1/4 w-1/3 h-1/3 bg-gradient-to-br from-primary-600 to-primary-400 rounded-full filter blur-[100px]"></div>
        <div className="absolute bottom-0 right-1/4 w-1/3 h-1/3 bg-gradient-to-tr from-secondary-600 to-secondary-400 rounded-full filter blur-[120px]"></div>
      </div>

      <div className="container-custom relative z-10 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-7 gap-12">
          {/* Logo & Description */}
          <motion.div 
            variants={fadeInUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-3 space-y-6"
          >
            <Link href="/" className="inline-block">
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-r from-primary-600 to-secondary-600 flex items-center justify-center text-white mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                </div>
                <span className="text-xl font-bold text-white">NetNav</span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              NetNav is a revolutionary platform designed to transform the networking experience at events.
              We connect professionals with meaningful opportunities through our intelligent matchmaking technology.
            </p>
            <div className="pt-2">
              <h4 className="text-sm font-bold text-gray-300 mb-3">Subscribe to our newsletter</h4>
              <form className="flex max-w-md">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-grow px-4 py-2 rounded-l-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-1 focus:ring-primary-500"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-primary-600 rounded-r-lg text-white hover:bg-primary-700 transition-colors duration-300"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </motion.div>
          
          {/* Links */}
          <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8 lg:pl-12">
            {footerLinks.map((column, idx) => (
              <motion.div
                key={column.title}
                variants={fadeInUpVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="space-y-4"
              >
                <h4 className="text-lg font-bold text-white">{column.title}</h4>
                <ul className="space-y-2">
                  {column.links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-primary-400 transition-colors duration-300 text-sm"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Bottom Bar */}
        <motion.div 
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible" 
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row md:items-center justify-between text-gray-500 text-sm"
        >
          <div className="mb-4 md:mb-0">
            <p>&copy; {currentYear} NetNav. All rights reserved.</p>
          </div>
          
          <div className="flex flex-wrap gap-x-8 gap-y-2">
            <a href="#" className="hover:text-primary-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary-400 transition-colors">Cookie Policy</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 