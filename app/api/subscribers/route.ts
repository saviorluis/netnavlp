import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

// Path to subscribers JSON file
const subscribersPath = path.join(process.cwd(), 'data', 'subscribers.json');

// Ensure the data directory exists
const ensureDirectoryExists = () => {
  const dataDir = path.join(process.cwd(), 'data');
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
  
  if (!fs.existsSync(subscribersPath)) {
    fs.writeFileSync(subscribersPath, JSON.stringify([], null, 2));
  }
};

export async function GET() {
  try {
    // Ensure directory and file exist
    ensureDirectoryExists();
    
    // Read subscribers from file
    const subscribers = JSON.parse(fs.readFileSync(subscribersPath, 'utf-8'));
    
    // Sort by subscription date (newest first)
    subscribers.sort((a: any, b: any) => {
      return new Date(b.subscribed_at).getTime() - new Date(a.subscribed_at).getTime();
    });
    
    // Return the subscribers
    return NextResponse.json(
      { success: true, subscribers },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error fetching subscribers:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to fetch subscribers', subscribers: [] },
      { status: 500 }
    );
  }
} 