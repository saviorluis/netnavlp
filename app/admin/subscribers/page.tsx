'use client';

import React, { useEffect, useState } from 'react';

interface Subscriber {
  email: string;
  subscribed_at: string;
}

export default function SubscribersPage() {
  const [subscribers, setSubscribers] = useState<Subscriber[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchSubscribers() {
      try {
        const response = await fetch('/api/subscribers');
        
        if (!response.ok) {
          throw new Error('Failed to fetch subscribers');
        }
        
        const data = await response.json();
        setSubscribers(data.subscribers);
      } catch (err) {
        console.error('Error fetching subscribers:', err);
        setError('Failed to load subscribers. Please try again later.');
      } finally {
        setLoading(false);
      }
    }
    
    fetchSubscribers();
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Email Subscribers</h1>
          <a 
            href="/"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors"
          >
            Back to Home
          </a>
        </div>
        
        {loading ? (
          <div className="flex justify-center items-center py-10">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : error ? (
          <div className="bg-red-900/50 text-red-200 p-4 rounded-md">
            {error}
          </div>
        ) : subscribers.length === 0 ? (
          <div className="bg-gray-800 rounded-md p-6 text-center">
            <p className="text-gray-400">No subscribers yet.</p>
          </div>
        ) : (
          <div className="bg-gray-800 rounded-md overflow-hidden">
            <table className="min-w-full divide-y divide-gray-700">
              <thead className="bg-gray-700">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    Email
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    Subscribed At
                  </th>
                </tr>
              </thead>
              <tbody className="bg-gray-800 divide-y divide-gray-700">
                {subscribers.map((subscriber, index) => (
                  <tr key={index} className="hover:bg-gray-700">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-white">{subscriber.email}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-300">
                        {new Date(subscriber.subscribed_at).toLocaleString()}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        
        <div className="mt-6 text-center text-sm text-gray-500">
          Total subscribers: {subscribers.length}
        </div>
      </div>
    </div>
  );
} 