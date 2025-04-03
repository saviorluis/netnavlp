"use client";

import React from 'react';
import { SidebarMenu } from './ui/sidebar-demo';

interface SidebarWrapperProps {
  children: React.ReactNode;
}

export default function SidebarWrapper({ children }: SidebarWrapperProps) {
  return (
    <div className="flex h-screen overflow-hidden">
      <SidebarMenu />
      <div className="flex-1 overflow-auto">
        {children}
      </div>
    </div>
  );
} 