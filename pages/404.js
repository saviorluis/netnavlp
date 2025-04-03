import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Custom404() {
  const router = useRouter();
  
  useEffect(() => {
    // Redirect to the homepage in the App Router
    router.replace('/');
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <h1 className="text-xl font-bold">Redirecting...</h1>
    </div>
  );
} 