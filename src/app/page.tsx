'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useProfile } from '@/context/profile-context';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/language-context';

export default function Home() {
  const { currentProfile, login, isLoading } = useProfile();
  const { t } = useLanguage();
  const router = useRouter();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Auto-redirect if profile exists
  useEffect(() => {
    if (currentProfile) {
      router.push('/dashboard');
    }
  }, [currentProfile, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!username.trim() || !password) {
      setErrorMsg('Please enter both username and password.');
      return;
    }

    try {
      setIsSubmitting(true);
      setErrorMsg(null);
      
      const res = await login(username, password);
      
      if (!res.success) {
        setErrorMsg(res.error || 'Invalid username or password.');
      } else {
        router.push('/dashboard');
      }
    } catch (err) {
      console.error('Login error:', err);
      setErrorMsg('An unexpected error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-70px)] bg-black">
        <div className="w-8 h-8 border-2 border-zinc-800 border-t-blue-500 rounded-full animate-spin"></div>
        <p className="mt-4 text-sm text-zinc-400 font-medium">Loading session...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-70px)] bg-black px-4 glow-wrapper">
      <div className="w-full max-w-md animate-fade-in z-10">
        <div className="text-center mb-8">
          <span className="inline-block px-3 py-1 bg-blue-950/40 border border-blue-900/50 rounded-full text-xs font-bold text-blue-400 uppercase tracking-widest mb-3">
            Tokutei Ginou
          </span>
          <h1 className="text-3xl font-extrabold text-zinc-100 tracking-tight mb-2">
            SSW Jidousha Seibi
          </h1>
          <p className="text-sm text-zinc-400">
            {t('portalDesc')}
          </p>
        </div>

        <Card className="border-zinc-800 bg-zinc-950">
          <CardHeader className="space-y-1">
            <CardTitle className="text-xl font-bold text-zinc-100">{t('signIn')}</CardTitle>
            <CardDescription className="text-zinc-500">
              {t('credentialsDesc')}
            </CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-4">
              {errorMsg && (
                <div className="p-3 rounded-md bg-red-950/30 border border-red-900/50 text-sm text-red-400 font-medium animate-fade-in">
                  {errorMsg}
                </div>
              )}
              
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                  {t('username')}
                </label>
                <Input
                  type="text"
                  placeholder={t('enterUsername')}
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  disabled={isSubmitting}
                  className="bg-black border-zinc-800 text-zinc-200"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                  {t('password')}
                </label>
                <Input
                  type="password"
                  placeholder={t('enterPassword')}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={isSubmitting}
                  className="bg-black border-zinc-800 text-zinc-200"
                />
              </div>

            </CardContent>
            
            <CardFooter>
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-500 text-white"
              >
                {isSubmitting ? t('signingIn') : t('signIn')}
              </Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  );
}
