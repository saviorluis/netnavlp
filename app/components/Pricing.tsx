"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FiCheck } from 'react-icons/fi';

const pricingPlans = [
  {
    name: 'Starter',
    price: 'Free',
    description: 'Perfect for trying out NetNav at your next event',
    features: [
      'Access to basic networking features',
      'Up to 25 connections per event',
      'Digital business card exchange',
      'Event discovery'
    ],
    cta: 'Get Started',
    highlighted: false
  },
  {
    name: 'Professional',
    price: '$19',
    period: '/month',
    description: 'Everything you need for effective networking',
    features: [
      'Unlimited connections',
      'Advanced contact management',
      'Meeting scheduler',
      'Follow-up reminders',
      'Analytics dashboard',
      'Priority support'
    ],
    cta: 'Start Free Trial',
    highlighted: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For organizations hosting or attending multiple events',
    features: [
      'All Professional features',
      'Custom branding',
      'Team collaboration tools',
      'API access',
      'Dedicated account manager',
      'Onboarding & training'
    ],
    cta: 'Contact Sales',
    highlighted: false
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="section bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-display font-bold mb-4"
          >
            Simple, <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">Transparent</span> Pricing
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-gray-700"
          >
            Choose the plan that fits your networking needs
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`card relative ${plan.highlighted ? 'border-2 border-primary-500' : ''}`}
            >
              {plan.highlighted && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
              )}
              
              <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold">{plan.price}</span>
                {plan.period && <span className="text-gray-500">{plan.period}</span>}
              </div>
              <p className="text-gray-600 mb-6">{plan.description}</p>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <FiCheck className="h-5 w-5 text-primary-500 mr-2 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <a 
                href="#hero" 
                className={`block text-center py-2 px-4 rounded-lg font-medium transition-colors ${
                  plan.highlighted 
                    ? 'bg-primary-600 text-white hover:bg-primary-700' 
                    : 'border-2 border-primary-600 text-primary-600 hover:bg-primary-50'
                }`}
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
                Join Waiting List
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing; 