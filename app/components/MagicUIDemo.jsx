"use client";

import React, { useEffect, useState } from 'react';
import { initMcpClient } from '../lib/mcpClient';

const MagicButton = ({ children, variant = "primary", onClick }) => {
  const baseClasses = "px-4 py-2 rounded font-medium transition-all duration-300";
  const variantClasses = {
    primary: "bg-primary-600 text-white hover:bg-primary-700",
    secondary: "bg-secondary-600 text-white hover:bg-secondary-700",
    outline: "border-2 border-primary-600 text-primary-600 hover:bg-primary-50"
  };
  
  return (
    <button 
      className={`${baseClasses} ${variantClasses[variant]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

const MagicCard = ({ title, description, icon }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
      {icon && <div className="text-primary-500 mb-4">{icon}</div>}
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default function MagicUIDemo() {
  const [client, setClient] = useState(null);
  const [isConnected, setIsConnected] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [activeTab, setActiveTab] = useState('buttons');

  useEffect(() => {
    async function connectClient() {
      try {
        const mcpClient = await initMcpClient();
        setClient(mcpClient);
        setIsConnected(!!mcpClient);
      } catch (error) {
        console.error("Failed to connect:", error);
        setErrorMessage(error.message);
      }
    }
    
    connectClient();
  }, []);

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 max-w-4xl mx-auto">
      <div className="border-b pb-4 mb-6">
        <h2 className="text-2xl font-bold">Magic UI Components</h2>
        <p className="text-gray-600">
          Using our mock implementation of the 21st.dev Magic Component Provider
        </p>
        
        {isConnected ? (
          <div className="mt-2 flex items-center text-green-600">
            <span className="h-2 w-2 rounded-full bg-green-500 mr-2"></span>
            Connected to MCP Server
          </div>
        ) : (
          <div className="mt-2 flex items-center text-red-600">
            <span className="h-2 w-2 rounded-full bg-red-500 mr-2"></span>
            Not connected to MCP Server
            {errorMessage && <span className="ml-2 text-sm">({errorMessage})</span>}
          </div>
        )}
      </div>
      
      {/* Tabs */}
      <div className="flex border-b mb-6">
        <button 
          className={`px-4 py-2 ${activeTab === 'buttons' ? 'border-b-2 border-primary-500 text-primary-600 font-medium' : 'text-gray-500'}`}
          onClick={() => setActiveTab('buttons')}
        >
          Buttons
        </button>
        <button 
          className={`px-4 py-2 ${activeTab === 'cards' ? 'border-b-2 border-primary-500 text-primary-600 font-medium' : 'text-gray-500'}`}
          onClick={() => setActiveTab('cards')}
        >
          Cards
        </button>
      </div>
      
      {/* Components Display */}
      {activeTab === 'buttons' && (
        <div>
          <h3 className="text-lg font-medium mb-4">Button Components</h3>
          <div className="flex flex-wrap gap-4">
            <MagicButton variant="primary">Primary Button</MagicButton>
            <MagicButton variant="secondary">Secondary Button</MagicButton>
            <MagicButton variant="outline">Outline Button</MagicButton>
          </div>
        </div>
      )}
      
      {activeTab === 'cards' && (
        <div>
          <h3 className="text-lg font-medium mb-4">Card Components</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <MagicCard 
              title="Networking Features" 
              description="Connect with the right people at events based on your interests and goals."
            />
            <MagicCard 
              title="Event Management" 
              description="Discover, register and manage all your events in one place."
            />
          </div>
        </div>
      )}
      
      <div className="mt-8">
        <button 
          className="px-4 py-2 bg-primary-100 text-primary-700 rounded hover:bg-primary-200 transition"
          onClick={async () => {
            try {
              const mcpClient = await initMcpClient();
              setClient(mcpClient);
              setIsConnected(!!mcpClient);
              setErrorMessage('');
            } catch (error) {
              setErrorMessage(error.message);
            }
          }}
        >
          Reconnect to MCP Server
        </button>
      </div>
    </div>
  );
} 