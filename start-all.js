#!/usr/bin/env node

const { spawn } = require('child_process');
const path = require('path');

// Start the MCP server
console.log('Starting Magic MCP server...');
const mcpProcess = spawn('node', ['.mcp/start.js'], { 
  stdio: 'inherit',
  shell: true
});

mcpProcess.on('error', (error) => {
  console.error('Failed to start MCP server:', error);
});

// Start the Next.js development server
console.log('Starting Next.js development server...');
setTimeout(() => {
  const nextProcess = spawn('npm', ['run', 'dev'], { 
    stdio: 'inherit',
    shell: true
  });
  
  nextProcess.on('error', (error) => {
    console.error('Failed to start Next.js server:', error);
  });
  
  nextProcess.on('close', (code) => {
    if (code !== 0) {
      console.error(`Next.js process exited with code ${code}`);
    }
    // When Next.js server stops, kill the MCP server as well
    mcpProcess.kill();
  });
}, 3000); // Give the MCP server a few seconds to start up

// Handle process termination
process.on('SIGINT', () => {
  console.log('Stopping servers...');
  mcpProcess.kill();
  process.exit();
}); 