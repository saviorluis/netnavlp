#!/usr/bin/env node

const { spawn, execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const http = require('http');

const REPO_URL = 'https://github.com/21st-dev/magic-mcp.git';
const REPO_DIR = path.join(__dirname, 'magic-mcp');
const CONFIG_FILE = path.join(__dirname, 'config.json');

// Check if the config file exists
if (!fs.existsSync(CONFIG_FILE)) {
  console.error('Error: Config file not found at', CONFIG_FILE);
  process.exit(1);
}

// Read the config
let config;
try {
  config = JSON.parse(fs.readFileSync(CONFIG_FILE, 'utf8'));
} catch (error) {
  console.error('Error reading config file:', error);
  process.exit(1);
}

console.log('Starting Magic MCP server with config:', CONFIG_FILE);

// Clone the repo if it doesn't exist
if (!fs.existsSync(REPO_DIR)) {
  console.log('Cloning Magic MCP repository...');
  try {
    execSync(`git clone ${REPO_URL} ${REPO_DIR}`, { stdio: 'inherit' });
  } catch (error) {
    console.error('Error cloning repository:', error);
    process.exit(1);
  }
}

// Check if node_modules exists in the repo directory
if (!fs.existsSync(path.join(REPO_DIR, 'node_modules'))) {
  console.log('Installing dependencies...');
  try {
    execSync('npm install', { cwd: REPO_DIR, stdio: 'inherit' });
  } catch (error) {
    console.error('Error installing dependencies:', error);
    process.exit(1);
  }
}

// Start the MCP server
console.log('Starting Magic MCP server...');
const port = config.settings?.port || 3210;

// Check if the port is already in use
function isPortInUse(port) {
  return new Promise((resolve) => {
    const server = http.createServer();
    server.once('error', (err) => {
      if (err.code === 'EADDRINUSE') {
        resolve(true);
      } else {
        resolve(false);
      }
    });
    server.once('listening', () => {
      server.close();
      resolve(false);
    });
    server.listen(port);
  });
}

async function startServer() {
  const portInUse = await isPortInUse(port);
  if (portInUse) {
    console.log(`Port ${port} is already in use. Assuming MCP server is already running.`);
    console.log(`Magic MCP Server should be available at http://localhost:${port}`);
    return;
  }

  const serverProcess = spawn('npm', ['start'], { 
    cwd: REPO_DIR, 
    stdio: 'inherit',
    env: {
      ...process.env,
      MCP_CONFIG: CONFIG_FILE
    }
  });

  serverProcess.on('error', (error) => {
    console.error('Failed to start MCP server:', error);
  });

  serverProcess.on('close', (code) => {
    if (code !== 0) {
      console.error(`MCP server process exited with code ${code}`);
    }
  });
  
  console.log(`Magic MCP Server should be available at http://localhost:${port}`);
}

startServer(); 