'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function PracticeRedirect() {
  const router = useRouter();

  useEffect(() => {
    // Generate a random session id (lowercase)
    const sessionId = Math.random().toString(36).substring(2, 8);
    router.replace(`/practice/${sessionId}`);
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-70px)] bg-background">
      <div className="w-8 h-8 border-2 border-border border-t-primary rounded-full animate-spin"></div>
      <p className="mt-4 text-sm text-muted-foreground font-medium">Memulai Sesi...</p>
    </div>
  );
}
