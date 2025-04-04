"use client";

import React, { useEffect } from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Contact from './components/Contact';
import Footer from './components/Footer';
import dynamic from 'next/dynamic';

// Use dynamic imports to avoid SSR issues with canvas/client components
const CardEntryAnimation = dynamic(
  () => import('./components/CardEntryAnimation'),
  { ssr: false }
);

const MatrixRainDemo = dynamic(
  () => import('./components/MatrixRainDemo'),
  { ssr: false }
);

// Import both card demos to allow switching between them
const TiltCardDemo = dynamic(
  () => import('./components/ui/tilt-card-demo').then(mod => ({ default: mod.TiltCardDemo })),
  { ssr: false }
);

const FlipCardDemo = dynamic(
  () => import('./components/ui/flip-card-demo').then(mod => ({ default: mod.FlipCardDemo })),
  { ssr: false }
);

export default function Home() {
  // Fix backdrop-filter issues on scroll
  useEffect(() => {
    // Reset body style and prevent backdrop filter issues
    document.body.style.overflow = 'auto';
    
    // Fix for z-index stacking context issues
    const fixBackdropFilters = () => {
      const blurElements = document.querySelectorAll('.backdrop-blur-md, .bg-black\\/70');
      blurElements.forEach(el => {
        if (el instanceof HTMLElement) {
          // Reset stacking context for backdrop filtered elements when scrolled into view
          const rect = el.getBoundingClientRect();
          const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
          if (isVisible) {
            el.style.transform = 'translateZ(0)';
            el.style.willChange = 'transform';
          } else {
            el.style.willChange = 'auto';
          }
        }
      });
    };
    
    // Initial call and add event listener
    fixBackdropFilters();
    window.addEventListener('scroll', fixBackdropFilters, { passive: true });
    
    // Clean up
    return () => {
      window.removeEventListener('scroll', fixBackdropFilters);
    };
  }, []);

  return (
    <main className="flex-1">
      <div id="intro-animation" className="relative z-10">
        <FlipCardDemo />
      </div>
      <div id="main-content" className="relative z-0">
        <Hero />
        <Features />
        <HowItWorks />
        <MatrixRainDemo />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
