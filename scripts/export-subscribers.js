#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Path to subscribers JSON file
const subscribersPath = path.join(process.cwd(), 'data', 'subscribers.json');
const exportPath = path.join(process.cwd(), 'data', 'subscribers-export.csv');

// Ensure the subscribers file exists
if (!fs.existsSync(subscribersPath)) {
  console.error('Error: Subscribers file not found. No subscribers yet?');
  process.exit(1);
}

try {
  // Read subscribers from file
  const subscribers = JSON.parse(fs.readFileSync(subscribersPath, 'utf-8'));
  
  if (subscribers.length === 0) {
    console.log('No subscribers found to export.');
    process.exit(0);
  }
  
  // Create CSV header
  let csv = 'Email,Subscribed At\n';
  
  // Add each subscriber to CSV
  subscribers.forEach(subscriber => {
    const email = subscriber.email.replace(/"/g, '""'); // Escape quotes in email
    const subscribed_at = subscriber.subscribed_at;
    csv += `"${email}","${subscribed_at}"\n`;
  });
  
  // Write to file
  fs.writeFileSync(exportPath, csv);
  
  console.log(`Exported ${subscribers.length} subscribers to ${exportPath}`);
} catch (error) {
  console.error('Error exporting subscribers:', error);
  process.exit(1);
} 