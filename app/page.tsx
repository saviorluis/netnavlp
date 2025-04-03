"use client";

import React, { useState } from 'react';
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

const TiltCardDemo = dynamic(
  () => import('./components/ui/tilt-card-demo').then(mod => ({ default: mod.TiltCardDemo })),
  { ssr: false }
);

export default function Home() {
  return (
    <main className="flex-1">
      <div id="intro-animation">
        <TiltCardDemo />
      </div>
      <div id="main-content">
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