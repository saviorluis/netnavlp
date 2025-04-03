"use client";

/**
 * Real Magic UI MCP Client
 * This implementation connects to the actual 21st.dev Magic MCP server
 */

class RealMCPClient {
  constructor(config) {
    this.config = config;
    this.isConnected = false;
    this.components = {};
    this.serverUrl = `http://localhost:${config.port || 3210}`;
    console.log('Real MCP Client initialized with config:', config);
  }

  async connect() {
    console.log('Attempting to connect to Magic UI MCP server at', this.serverUrl);
    
    try {
      const response = await fetch(`${this.serverUrl}/api/status`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      if (!response.ok) {
        throw new Error(`Failed to connect to MCP server: ${response.statusText}`);
      }
      
      const data = await response.json();
      this.isConnected = data.status === 'online';
      console.log('MCP Server Status:', data);
      
      if (this.isConnected) {
        console.log('Successfully connected to MCP server');
        return true;
      } else {
        console.error('MCP server is not online');
        return false;
      }
    } catch (error) {
      console.error('Error connecting to MCP server:', error);
      this.isConnected = false;
      return false;
    }
  }

  async disconnect() {
    this.isConnected = false;
    console.log('MCP Client disconnected');
    return true;
  }

  async getComponent(componentName) {
    if (!this.isConnected) {
      throw new Error('Not connected to Magic UI server');
    }
    
    try {
      console.log(`Fetching component: ${componentName}`);
      
      const response = await fetch(`${this.serverUrl}/api/components/${componentName}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'X-API-Key': this.config.apiKey || '',
        },
      });
      
      if (!response.ok) {
        throw new Error(`Failed to fetch component ${componentName}: ${response.statusText}`);
      }
      
      const component = await response.json();
      console.log(`Component ${componentName} fetched successfully`);
      
      // Cache the component
      this.components[componentName] = component;
      
      return component;
    } catch (error) {
      console.error(`Error fetching component ${componentName}:`, error);
      throw error;
    }
  }
  
  // Additional methods for working with components
  
  async renderComponent(componentName, props = {}) {
    const component = await this.getComponent(componentName);
    // Implement component rendering logic here
    return {
      component,
      props
    };
  }
  
  async listAvailableComponents() {
    if (!this.isConnected) {
      throw new Error('Not connected to Magic UI server');
    }
    
    try {
      const response = await fetch(`${this.serverUrl}/api/components`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'X-API-Key': this.config.apiKey || '',
        },
      });
      
      if (!response.ok) {
        throw new Error(`Failed to fetch component list: ${response.statusText}`);
      }
      
      const componentList = await response.json();
      console.log('Available components:', componentList);
      
      return componentList;
    } catch (error) {
      console.error('Error fetching component list:', error);
      throw error;
    }
  }
}

// Export the real client implementation
export const MCPClient = RealMCPClient; 