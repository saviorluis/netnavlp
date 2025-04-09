'use client';

import React from 'react';
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  SpringOptions,
  HTMLMotionProps,
} from 'framer-motion';
import { cn } from '../../../lib/utils';

interface SpotlightProps {
  size?: number;
  className?: string;
  springOptions?: SpringOptions;
  fill?: string;
}

export function Spotlight({
  size = 200,
  className = '',
  springOptions,
  fill = 'transparent',
}: SpotlightProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const xSpring = useSpring(mouseX, springOptions);
  const ySpring = useSpring(mouseY, springOptions);

  const bgGradient = useMotionTemplate`radial-gradient(${size}px circle at ${xSpring}px ${ySpring}px, var(--spotlight-color, var(--spotlight-from, ${fill})), var(--spotlight-to, transparent) 80%)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { currentTarget, clientX, clientY } = e;
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  return (
    <div
      className={cn(
        "absolute inset-0",
        className
      )}
      style={{
        background: bgGradient.get(),
        pointerEvents: "none",
        zIndex: 10
      }}
      onMouseMove={handleMouseMove}
    />
  );
} 