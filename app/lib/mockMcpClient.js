"use client";

/**
 * Mock Magic UI MCP Client
 * This is a simplified mock implementation for demonstration purposes
 */

export class MockMCPClient {
  constructor(config) {
    this.config = config;
    this.isConnected = false;
    this.components = {};
    console.log('Mock MCP Client initialized with config:', config);
  }

  async connect() {
    console.log('Attempting to connect to Magic UI MCP server...');
    
    return new Promise((resolve) => {
      // Simulate network delay and successful connection
      setTimeout(() => {
        this.isConnected = true;
        console.log('Mock MCP Client connected successfully');
        resolve(true);
      }, 1000);
    });
  }

  async disconnect() {
    this.isConnected = false;
    console.log('Mock MCP Client disconnected');
    return true;
  }

  async getComponent(componentName) {
    if (!this.isConnected) {
      throw new Error('Not connected to Magic UI server');
    }
    
    console.log(`Getting component: ${componentName}`);
    
    // Return a mock component placeholder
    return {
      name: componentName,
      type: 'ui-component',
      render: (props) => {
        return {
          type: 'div',
          props: {
            className: 'mcp-component',
            children: `Magic UI Component: ${componentName}`
          }
        };
      }
    };
  }
}

// For compatibility with the expected import
export const MCPClient = MockMCPClient; 