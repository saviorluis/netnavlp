"use client";

import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "NetNav has completely transformed how I network at industry events. I've made more meaningful connections in the past 3 months than I did all of last year.",
    name: "Sarah Johnson",
    title: "Marketing Director, TechCorp",
    image: "/images/testimonial-1.jpg" // This would be a real image in production
  },
  {
    quote: "The ability to scan badges and instantly connect with people has saved me countless hours. Plus, the follow-up reminders ensure I never miss an opportunity.",
    name: "Michael Chen",
    title: "Startup Founder, InnovateLabs",
    image: "/images/testimonial-2.jpg" // This would be a real image in production
  },
  {
    quote: "As an event organizer, NetNav has added tremendous value for our attendees. The networking metrics also help us improve our events year after year.",
    name: "Jessica Williams",
    title: "Event Manager, Global Conferences",
    image: "/images/testimonial-3.jpg" // This would be a real image in production
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section bg-primary-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-display font-bold mb-4"
          >
            What Our Users <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">Say</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-gray-700"
          >
            Join thousands of professionals who are already networking smarter with NetNav.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card bg-white relative"
            >
              {/* Quote mark */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary-500 text-white flex items-center justify-center rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
              </div>
              
              {/* Quote */}
              <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
              
              {/* Author */}
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gray-200 mr-4">
                  {/* This would be an actual image in production */}
                  <div className="w-full h-full rounded-full bg-gray-300"></div>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Stats */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-20 bg-white rounded-xl shadow-custom p-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-primary-600 mb-2">15,000+</p>
              <p className="text-gray-600">Active Users</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary-600 mb-2">500+</p>
              <p className="text-gray-600">Events Hosted</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary-600 mb-2">100,000+</p>
              <p className="text-gray-600">Connections Made</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials; 