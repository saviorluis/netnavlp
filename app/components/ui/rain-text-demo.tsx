"use client";

import MatrixRain from "./matrix-rain";

export function RainTextDemo() {
    return (
        <>
          <MatrixRain 
            fontSize={20}
            color="#00ff00"
            characters="01"
            fadeOpacity={0.1}
            speed={1.0}
          />
          <div className="h-screen w-full flex items-center justify-center bg-black/50 backdrop-blur-sm">
            <div className="relative">
              <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-500 to-green-600 animate-pulse">
                Matrix Code
              </h1>
              <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 via-emerald-500/20 to-green-600/20 blur-xl animate-pulse" 
                  style={{ filter: 'blur(20px)' }}>
              </div>
            </div>
          </div>
        </>
    );
} 