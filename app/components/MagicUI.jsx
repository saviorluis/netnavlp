"use client";

import React, { useEffect, useState } from 'react';
import { initMcpClient } from '../lib/mcpClient';

// This component will utilize the Magic UI MCP for enhanced UI components
export default function MagicUI() {
  const [isClientReady, setIsClientReady] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    async function setupMcpClient() {
      try {
        const client = await initMcpClient();
        if (client) {
          setIsClientReady(true);
        } else {
          setErrorMessage('Failed to initialize Magic UI client');
        }
      } catch (error) {
        console.error('Error setting up Magic UI client:', error);
        setErrorMessage(`Error: ${error.message}`);
      }
    }

    setupMcpClient();
  }, []);

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Magic UI Status</h2>
      
      {errorMessage && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md">
          {errorMessage}
          <p className="mt-2 text-sm">
            To fix this, please make sure:
            <ul className="list-disc pl-5 mt-1">
              <li>You have internet connection</li>
              <li>The .mcp.json file is properly configured</li>
              <li>You've installed @21st-dev/mcp-client package</li>
            </ul>
          </p>
        </div>
      )}
      
      {isClientReady ? (
        <div className="p-3 bg-green-100 text-green-700 rounded-md">
          ✅ Magic UI Client is connected and ready
        </div>
      ) : !errorMessage && (
        <div className="p-3 bg-yellow-100 text-yellow-700 rounded-md">
          ⏳ Connecting to Magic UI server...
        </div>
      )}
      
      <div className="mt-4">
        <button 
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          onClick={async () => {
            try {
              await initMcpClient();
              setIsClientReady(true);
              setErrorMessage('');
            } catch (error) {
              setErrorMessage(`Connection error: ${error.message}`);
            }
          }}
        >
          Reconnect to Magic UI
        </button>
      </div>
    </div>
  );
} 