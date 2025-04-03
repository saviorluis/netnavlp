"use client";

/**
 * Magic UI MCP Client initializer
 * This file handles the connection to the Magic UI MCP server
 * It tries to use the real implementation first, and falls back to the mock one if needed
 */

// Try to import the real implementation first
let MCPClientImplementation;
try {
  // Dynamic import to avoid errors during server-side rendering
  if (typeof window !== 'undefined') {
    import('./realMcpClient').then(module => {
      MCPClientImplementation = module.MCPClient;
      console.log('Using real MCP client implementation');
    }).catch(error => {
      console.warn('Failed to load real MCP client, falling back to mock:', error);
      import('./mockMcpClient').then(module => {
        MCPClientImplementation = module.MCPClient;
        console.log('Using mock MCP client implementation');
      });
    });
  }
} catch (error) {
  console.warn('Error importing MCP client implementation:', error);
}

// Use mock implementation as a fallback
import { MCPClient as MockMCPClient } from './mockMcpClient';

let mcpClient = null;

export async function initMcpClient() {
  if (typeof window === 'undefined') return null;
  
  if (!mcpClient) {
    try {
      const ClientClass = MCPClientImplementation || MockMCPClient;
      
      mcpClient = new ClientClass({
        provider: '21st.dev',
        repository: '21st-dev/magic-mcp',
        apiKey: '3d5d5aee7a9f542f6d115e1ddb8e0ea3912156958b219ce4f6d7b2b4d1ba2c40',
        port: 3210,
        autoConnect: true
      });
      
      await mcpClient.connect();
      console.log('Magic UI MCP client connected successfully');
      
      return mcpClient;
    } catch (error) {
      console.error('Failed to initialize Magic UI MCP client:', error);
      return null;
    }
  }
  
  return mcpClient;
}

export function getMcpClient() {
  return mcpClient;
}

// Auto-initialize on client side
if (typeof window !== 'undefined') {
  // Delay initialization to ensure implementations are loaded
  setTimeout(() => {
    initMcpClient();
  }, 500);
} 