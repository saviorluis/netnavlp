"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MatrixRain from './ui/matrix-rain';

export default function MatrixRainDemo() {
  // Keep the state variables with default values
  const [color, setColor] = useState("#ffffff");
  const [speed, setSpeed] = useState(0.5);
  const [fontSize, setFontSize] = useState(10);
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState('about');
  
  // Character sets
  const characterSets = [
    { 
      name: "Binary", 
      value: "01" 
    },
    { 
      name: "Matrix", 
      value: "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン" 
    },
    { 
      name: "Alphanumeric", 
      value: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz" 
    }
  ];
  
  // Set the default character set to Binary (index 0)
  const [activeCharSet, setActiveCharSet] = useState(0);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      // Here you would typically send the email to your backend
      console.log('Email submitted:', email);
    }
  };

  return (
    <section id="matrix-demo" className="py-16 relative overflow-hidden bg-black">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">Digital Identity, Redefined</h2>
            <p className="text-gray-300 max-w-3xl mx-auto mb-4">
              Seamlessly blend your professional persona into the digital realm with customizable virtual business cards.
            </p>
            <p className="text-gray-400 max-w-2xl mx-auto">
              In today's digital-first world, your online presence is your first impression. Netnav helps you create striking, interactive digital identity cards that showcase your unique skills and personality—all while maintaining complete control over your personal data.
            </p>
          </motion.div>
          
          {/* Matrix display with centered vCard */}
          <div className="w-full max-w-4xl">
            <div className="rounded-xl overflow-hidden shadow-2xl relative">
              <MatrixRain
                fontSize={fontSize}
                color={color}
                characters={characterSets[activeCharSet].value}
                fadeOpacity={0.05}
                speed={speed}
                className="absolute inset-0"
              />
              
              {/* Enhanced vCard with Projects */}
              <div className="relative z-10 p-6">
                <motion.div 
                  className="bg-black/70 backdrop-blur-md p-6 rounded-xl w-full"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Profile Section */}
                    <div className="md:w-1/3 flex flex-col items-center">
                      <div className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white text-3xl font-bold mb-4">
                        LV
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-1 text-center">Luis Velasco</h3>
                      <p className="text-blue-400 font-medium mb-4 text-center">Software Developer</p>
                      
                      <div className="flex space-x-3 mt-2">
                        <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-blue-400 hover:bg-blue-800 transition-colors">
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                          </svg>
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-blue-400 hover:bg-blue-800 transition-colors">
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                          </svg>
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-blue-400 hover:bg-blue-800 transition-colors">
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                          </svg>
                        </a>
                      </div>

                      {/* Email signup */}
                      <div className="w-full mt-6">
                        <AnimatePresence mode="wait">
                          {!showEmailForm && !submitted ? (
                            <motion.button 
                              key="get-started-button"
                              className="w-full px-6 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-colors"
                              onClick={() => setShowEmailForm(true)}
                              exit={{ 
                                height: 45, 
                                backgroundColor: 'rgba(59, 130, 246, 0.1)',
                                borderColor: '#3b82f6',
                                borderWidth: 1,
                                transition: { duration: 0.3 }
                              }}
                            >
                              Get Started
                            </motion.button>
                          ) : submitted ? (
                            <motion.div
                              key="thank-you"
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="text-green-400 font-medium text-center"
                            >
                              Thanks! We'll notify you when we launch.
                            </motion.div>
                          ) : (
                            <motion.form 
                              key="email-form"
                              className="w-full"
                              initial={{ 
                                height: 40,
                                backgroundColor: 'rgba(37, 99, 235, 1)' 
                              }}
                              animate={{ 
                                height: 45, 
                                backgroundColor: 'rgba(59, 130, 246, 0.1)'
                              }}
                              transition={{ duration: 0.3 }}
                              onSubmit={handleFormSubmit}
                            >
                              <div className="flex">
                                <input
                                  type="email"
                                  value={email}
                                  onChange={(e) => setEmail(e.target.value)}
                                  placeholder="Enter your email"
                                  className="flex-1 px-4 py-2 bg-transparent border border-blue-500 text-white rounded-l-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
                                  required
                                  autoFocus
                                />
                                <button 
                                  type="submit" 
                                  className="px-4 py-2 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700 transition-colors"
                                >
                                  Join
                                </button>
                              </div>
                            </motion.form>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                    
                    {/* Content Section */}
                    <div className="md:w-2/3">
                      {/* Tab Navigation */}
                      <div className="border-b border-gray-700 mb-6">
                        <nav className="flex space-x-8">
                          <button
                            onClick={() => setActiveTab('about')}
                            className={`py-2 px-1 -mb-px font-medium text-sm transition-colors ${
                              activeTab === 'about'
                                ? 'text-blue-400 border-b-2 border-blue-400'
                                : 'text-gray-400 hover:text-gray-300'
                            }`}
                          >
                            About
                          </button>
                          <button
                            onClick={() => setActiveTab('skills')}
                            className={`py-2 px-1 -mb-px font-medium text-sm transition-colors ${
                              activeTab === 'skills'
                                ? 'text-blue-400 border-b-2 border-blue-400'
                                : 'text-gray-400 hover:text-gray-300'
                            }`}
                          >
                            Skills
                          </button>
                          <button
                            onClick={() => setActiveTab('projects')}
                            className={`py-2 px-1 -mb-px font-medium text-sm transition-colors ${
                              activeTab === 'projects'
                                ? 'text-blue-400 border-b-2 border-blue-400'
                                : 'text-gray-400 hover:text-gray-300'
                            }`}
                          >
                            Projects
                          </button>
                          <button
                            onClick={() => setActiveTab('contact')}
                            className={`py-2 px-1 -mb-px font-medium text-sm transition-colors ${
                              activeTab === 'contact'
                                ? 'text-blue-400 border-b-2 border-blue-400'
                                : 'text-gray-400 hover:text-gray-300'
                            }`}
                          >
                            Contact
                          </button>
                        </nav>
                      </div>
                      
                      {/* Tab Content */}
                      <div className="text-gray-300">
                        {/* About Tab */}
                        {activeTab === 'about' && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <h4 className="text-xl font-semibold text-white mb-3">About Me</h4>
                            <p className="mb-4">
                              Full-stack developer specializing in Next.js, React, and modern web technologies. Building intuitive and performant digital experiences with a focus on user-centered design.
                            </p>
                            <p>
                              With over 5 years of experience in web development, I help businesses transform their digital presence with cutting-edge solutions that stand out in today's competitive landscape.
                            </p>
                          </motion.div>
                        )}
                        
                        {/* Skills Tab */}
                        {activeTab === 'skills' && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <h4 className="text-xl font-semibold text-white mb-4">Technical Skills</h4>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                              {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'API Design', 'UI/UX', 'Redux', 'GraphQL'].map((skill) => (
                                <div key={skill} className="flex items-center">
                                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                                  <span>{skill}</span>
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                        
                        {/* Projects Tab */}
                        {activeTab === 'projects' && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <h4 className="text-xl font-semibold text-white mb-4">Latest Projects</h4>
                            <div className="space-y-4">
                              {[
                                { 
                                  name: "EstimAItor", 
                                  description: "AI-powered estimation tool for project planning and resource allocation.",
                                  tech: ["AI", "React", "Node.js"]
                                },
                                { 
                                  name: "scAIe", 
                                  description: "Scalable AI infrastructure for enterprise solutions.",
                                  tech: ["AI", "Python", "Kubernetes"]
                                },
                                { 
                                  name: "E-Tanda", 
                                  description: "Electronic payment solution for traditional rotating savings groups.",
                                  tech: ["Blockchain", "React Native", "Firebase"]
                                },
                                { 
                                  name: "Netnav Founder", 
                                  description: "Founder of Netnav digital identity platform.",
                                  tech: ["Next.js", "Digital Identity", "Branding"]
                                }
                              ].map((project) => (
                                <div key={project.name} className="bg-gray-800/50 rounded-lg p-3">
                                  <h5 className="text-white font-medium">{project.name}</h5>
                                  <p className="text-sm text-gray-400 mt-1">{project.description}</p>
                                  <div className="flex flex-wrap gap-1 mt-2">
                                    {project.tech.map((tech) => (
                                      <span key={tech} className="px-2 py-1 bg-blue-900/30 text-blue-300 rounded-full text-xs">
                                        {tech}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                        
                        {/* Contact Tab */}
                        {activeTab === 'contact' && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <h4 className="text-xl font-semibold text-white mb-4">Contact Information</h4>
                            <div className="space-y-3">
                              {[
                                { icon: "phone", text: "(C) 336-624-7442" },
                                { icon: "mail", text: "ncbbps@gmail.com" },
                                { icon: "map-pin", text: "1200 Eastchester Dr. High Point NC 27265" }
                              ].map((item, index) => (
                                <div key={index} className="flex items-center space-x-3">
                                  <div className="w-10 h-10 rounded-full bg-blue-900/40 flex items-center justify-center">
                                    {item.icon === "phone" && (
                                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                      </svg>
                                    )}
                                    {item.icon === "mail" && (
                                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                        <polyline points="22,6 12,13 2,6"></polyline>
                                      </svg>
                                    )}
                                    {item.icon === "map-pin" && (
                                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                        <circle cx="12" cy="10" r="3"></circle>
                                      </svg>
                                    )}
                                  </div>
                                  <p className="text-gray-300">{item.text}</p>
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 