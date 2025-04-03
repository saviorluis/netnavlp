import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

// Simple file-based storage since we don't have a database yet
// In production, you would use Prisma with a real database as in your netnav repo
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

export async function POST(request: Request) {
  try {
    const { email } = await request.json();
    
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { success: false, message: 'Valid email is required' },
        { status: 400 }
      );
    }
    
    // Ensure directory and file exist
    ensureDirectoryExists();
    
    // Read existing subscribers
    const subscribers = JSON.parse(fs.readFileSync(subscribersPath, 'utf-8'));
    
    // Check if email already exists
    if (subscribers.some((sub: { email: string }) => sub.email === email)) {
      return NextResponse.json(
        { success: false, message: 'Email already subscribed' },
        { status: 409 }
      );
    }
    
    // Add new subscriber
    subscribers.push({
      email,
      subscribed_at: new Date().toISOString(),
    });
    
    // Save updated list
    fs.writeFileSync(subscribersPath, JSON.stringify(subscribers, null, 2));
    
    return NextResponse.json(
      { success: true, message: 'Subscription successful' },
      { status: 201 }
    );
  } catch (error) {
    console.error('Subscription error:', error);
    return NextResponse.json(
      { success: false, message: 'Server error' },
      { status: 500 }
    );
  }
} 