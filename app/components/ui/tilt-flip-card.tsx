"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Tilt } from "./tilt";
import { Spotlight } from "./spotlight";

interface TiltFlipCardProps {
  frontContent: React.ReactNode;
  backContent: React.ReactNode;
  className?: string;
  rotationFactor?: number;
}

export function TiltFlipCard({ 
  frontContent, 
  backContent, 
  className = "",
  rotationFactor = 10
}: TiltFlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsFlipped(!isFlipped);
    console.log("Card flipped:", !isFlipped);
  };

  return (
    <div className={`tilt-flip-card-container ${className}`}>
      <style jsx global>{`
        .tilt-flip-card-container {
          width: 100%;
          height: 100%;
        }

        .tilt-flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          text-align: center;
          transition: transform 0.8s;
          transform-style: preserve-3d;
        }

        .tilt-flip-card-inner.flipped {
          transform: rotateY(180deg);
        }

        .tilt-flip-card-front,
        .tilt-flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          -webkit-backface-visibility: hidden; /* Safari */
          backface-visibility: hidden;
          border-radius: 0.75rem;
          overflow: hidden;
        }

        .tilt-flip-card-back {
          transform: rotateY(180deg);
        }

        /* Flip button container and label */
        .flip-button-container {
          position: absolute;
          bottom: 1rem;
          right: 1rem;
          z-index: 999;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .flip-button {
          width: 5rem;
          height: 5rem;
          border-radius: 9999px;
          background-color: rgba(59, 130, 246, 1);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          cursor: pointer;
          transition: all 0.2s;
          border: 4px solid rgba(255, 255, 255, 0.9);
          box-shadow: 0 0 30px rgba(59, 130, 246, 0.9);
        }

        .flip-button:hover {
          background-color: rgba(37, 99, 235, 1);
          transform: scale(1.1);
          box-shadow: 0 0 35px rgba(59, 130, 246, 1);
        }
        
        /* Add a pulsing animation to make the button more noticeable */
        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.7); }
          70% { box-shadow: 0 0 0 15px rgba(59, 130, 246, 0); }
          100% { box-shadow: 0 0 0 0 rgba(59, 130, 246, 0); }
        }
        
        .flip-button {
          animation: pulse 2s infinite;
        }
      `}</style>

      <div className={`tilt-flip-card-inner ${isFlipped ? "flipped" : ""}`}>
        <div className="tilt-flip-card-front">
          <Tilt
            className="w-full h-full perspective-1000"
            rotationFactor={rotationFactor}
            isRevese={false}
            style={{
              transformOrigin: "center center",
              perspective: "1000px",
            }}
            springOptions={{
              stiffness: 300,
              damping: 26,
              mass: 1,
            }}
          >
            <Spotlight className="absolute inset-0 z-10" />
            {frontContent}
            <div className="flip-button-container">
              <motion.div
                className="flip-button"
                onClick={handleFlip}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                aria-label="Flip card"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M17 1l4 4-4 4"></path>
                  <path d="M3 11V9a4 4 0 0 1 4-4h14"></path>
                  <path d="M7 23l-4-4 4-4"></path>
                  <path d="M21 13v2a4 4 0 0 1-4 4H3"></path>
                </svg>
              </motion.div>
            </div>
          </Tilt>
        </div>
        <div className="tilt-flip-card-back">
          <Tilt
            className="w-full h-full perspective-1000"
            rotationFactor={rotationFactor}
            isRevese={false}
            style={{
              transformOrigin: "center center",
              perspective: "1000px",
            }}
            springOptions={{
              stiffness: 300,
              damping: 26,
              mass: 1,
            }}
          >
            <Spotlight className="absolute inset-0 z-10" />
            {backContent}
            <div className="flip-button-container">
              <motion.div
                className="flip-button"
                onClick={handleFlip}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                aria-label="Flip card back"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M17 1l4 4-4 4"></path>
                  <path d="M3 11V9a4 4 0 0 1 4-4h14"></path>
                  <path d="M7 23l-4-4 4-4"></path>
                  <path d="M21 13v2a4 4 0 0 1-4 4H3"></path>
                </svg>
              </motion.div>
            </div>
          </Tilt>
        </div>
      </div>
    </div>
  );
}
