"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

// Mock user data - in a real app this would come from a database or API
const userData = {
  name: "Network Navigator",
  title: "Digital Identity Platform",
  bio: "Redefining your professional presence in the digital age. Securely manage and share your identity across the web with our advanced technology.",
  location: "San Francisco, CA",
  avatar: "/images/avatar-placeholder.png", // You would need to add this image to the public/images folder
  contact: {
    email: "contact@networknavigator.com",
    phone: "+1 (555) 123-4567",
    website: "networknavigator.com"
  },
  social: [
    { name: "GitHub", url: "https://github.com", icon: "github" },
    { name: "LinkedIn", url: "https://linkedin.com", icon: "linkedin" },
    { name: "Twitter", url: "https://twitter.com", icon: "twitter" }
  ],
  skills: ["Digital Identity", "Blockchain", "Security", "Web3", "Decentralization", "Privacy"],
  projects: [
    { name: "Identity Verification", description: "Secure verification system with blockchain technology" },
    { name: "Digital Wallet", description: "Manage and share identity credentials securely" }
  ]
};

// Social Icon Components
const SocialIcon = ({ icon }) => {
  const iconComponents = {
    github: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
      </svg>
    ),
    linkedin: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
      </svg>
    ),
    twitter: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
      </svg>
    )
  };
  
  return iconComponents[icon] || null;
};

export default function PersonalCard() {
  const [activeTab, setActiveTab] = useState('about');
  
  // Social media links
  const socialLinks = [
    { name: 'GitHub', icon: 'github', url: 'https://github.com' },
    { name: 'LinkedIn', icon: 'linkedin', url: 'https://linkedin.com' },
    { name: 'Twitter', icon: 'twitter', url: 'https://twitter.com' },
    { name: 'Discord', icon: 'discord', url: 'https://discord.com' }
  ];
  
  // Skills with proficiency percentages
  const skills = [
    { name: 'Digital Identity', proficiency: 95 },
    { name: 'Blockchain', proficiency: 85 },
    { name: 'Security', proficiency: 90 },
    { name: 'Web3', proficiency: 80 },
    { name: 'Privacy', proficiency: 85 }
  ];
  
  // Work experience
  const experience = [
    {
      company: 'Identity Innovations Inc.',
      role: 'Digital Identity Platform',
      period: '2023 - Present',
      description: 'Pioneering secure digital identity solutions that put users in control of their personal data.'
    },
    {
      company: 'Blockchain Ventures',
      role: 'Web3 Identity Solutions',
      period: '2021 - 2023',
      description: 'Developed decentralized identity protocols and user-friendly access management tools.'
    },
    {
      company: 'Privacy Tech Labs',
      role: 'Identity Researcher',
      period: '2019 - 2021',
      description: 'Researched cutting-edge technologies for privacy-preserving digital identity systems.'
    }
  ];
  
  // Tab animation variants
  const tabContentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    },
    exit: { 
      opacity: 0, 
      y: -20,
      transition: {
        duration: 0.3
      }
    }
  };
  
  // Individual item animation variants
  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-gradient-to-r from-gray-900/95 via-gray-800/95 to-primary-900/95 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden">
        <div className="md:flex">
          {/* Left column - Profile info */}
          <div className="md:w-1/3 bg-gradient-to-b from-gray-900 to-primary-950 p-6 flex flex-col items-center">
            <div className="relative">
              <div className="h-32 w-32 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center text-white text-4xl font-bold mb-4">
                N
              </div>
              <motion.div 
                className="absolute -bottom-1 -right-1 bg-green-500 h-5 w-5 rounded-full border-2 border-white"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
              />
            </div>
            
            <h2 className="text-2xl font-bold text-white mt-4">Network Navigator</h2>
            <p className="text-primary-300 mb-6">Digital Identity Platform</p>
            
            <div className="space-y-3 text-sm text-gray-300 w-full">
              <div className="flex items-center">
                <svg className="h-5 w-5 text-primary-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>contact@networknavigator.com</span>
              </div>
              <div className="flex items-center">
                <svg className="h-5 w-5 text-primary-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <svg className="h-5 w-5 text-primary-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>San Francisco, CA</span>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-gray-700 w-full">
              <h3 className="text-white font-medium mb-4">Connect</h3>
              <div className="flex justify-between">
                {socialLinks.map(social => (
                  <a 
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-10 w-10 rounded-full bg-gray-800 hover:bg-primary-600 flex items-center justify-center text-gray-300 hover:text-white transition-colors"
                  >
                    <span className="sr-only">{social.name}</span>
                    <span>{social.icon[0].toUpperCase()}</span>
                  </a>
                ))}
              </div>
            </div>
            
            <button 
              className="mt-8 w-full py-2 bg-primary-600 hover:bg-primary-500 text-white rounded-lg transition-colors text-sm"
              onClick={() => {
                // Focus on the hero email input
                const emailInput = document.getElementById('hero-email-input');
                if (emailInput) {
                  emailInput.scrollIntoView({ behavior: 'smooth' });
                  setTimeout(() => emailInput.focus(), 800);
                }
              }}
            >
              Join Waiting List
            </button>
          </div>
          
          {/* Right column - Tabs and content */}
          <div className="md:w-2/3 p-6">
            {/* Tabs */}
            <div className="flex border-b border-gray-700 mb-6">
              {['about', 'features', 'benefits'].map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 font-medium transition-colors ${
                    activeTab === tab 
                      ? 'text-white border-b-2 border-primary-500' 
                      : 'text-gray-400 hover:text-gray-200'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
            
            {/* Tab content */}
            <div className="min-h-[300px]">
              {/* About Tab */}
              {activeTab === 'about' && (
                <motion.div
                  key="about"
                  variants={tabContentVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="space-y-4"
                >
                  <motion.p variants={itemVariants} className="text-gray-300">
                    Network Navigator is a cutting-edge digital identity platform that helps professionals securely manage their online presence. Our platform uses advanced encryption and blockchain technology to give you control over your personal data and how it's shared across the web.
                  </motion.p>
                  
                  <motion.div variants={itemVariants}>
                    <h3 className="text-white font-medium mb-2">Our Mission</h3>
                    <div className="bg-gray-800/50 p-3 rounded-lg">
                      <p className="text-white font-medium">Redefining Digital Identity</p>
                      <p className="text-primary-300">To empower individuals with control over their digital identity</p>
                      <p className="text-gray-400 text-sm">Established 2023</p>
                    </div>
                  </motion.div>
                  
                  <motion.div variants={itemVariants}>
                    <h3 className="text-white font-medium mb-2">Technology</h3>
                    <div className="flex flex-wrap gap-2">
                      {['Blockchain', 'Zero-Knowledge Proofs', 'Biometric Auth', 'Decentralized ID'].map(technology => (
                        <span key={technology} className="px-3 py-1 bg-gray-800/50 rounded-full text-gray-300 text-sm">
                          {technology}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                  
                  <motion.div variants={itemVariants}>
                    <h3 className="text-white font-medium mb-2">Use Cases</h3>
                    <div className="flex flex-wrap gap-2">
                      {['Professional Networking', 'Secure Authentication', 'Digital Credentials', 'Privacy Control', 'Cross-platform Identity'].map(interest => (
                        <span key={interest} className="px-3 py-1 bg-gray-800/50 rounded-full text-gray-300 text-sm">
                          {interest}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              )}
              
              {/* Features Tab (previously Skills) */}
              {activeTab === 'features' && (
                <motion.div
                  key="features"
                  variants={tabContentVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="space-y-6"
                >
                  {skills.map(skill => (
                    <motion.div key={skill.name} variants={itemVariants} className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-white">{skill.name}</span>
                        <span className="text-primary-400">{skill.proficiency}%</span>
                      </div>
                      <div className="w-full bg-gray-800 rounded-full h-2.5">
                        <motion.div 
                          className="bg-gradient-to-r from-primary-600 to-secondary-500 h-2.5 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.proficiency}%` }}
                          transition={{ duration: 1, ease: "easeOut" }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}
              
              {/* Benefits Tab (previously Experience) */}
              {activeTab === 'benefits' && (
                <motion.div
                  key="benefits"
                  variants={tabContentVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="space-y-6"
                >
                  {experience.map((exp, index) => (
                    <motion.div 
                      key={index}
                      variants={itemVariants}
                      className="relative pl-6 border-l border-gray-700"
                    >
                      <div className="absolute w-3 h-3 bg-primary-500 rounded-full -left-[6.5px] top-1" />
                      <div className="mb-1">
                        <h3 className="text-white font-medium">{exp.company}</h3>
                        <p className="text-primary-400 text-sm">{exp.role}</p>
                        <p className="text-gray-500 text-xs">{exp.period}</p>
                      </div>
                      <p className="text-gray-300 text-sm">{exp.description}</p>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 