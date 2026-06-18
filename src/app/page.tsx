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
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-70px)] bg-background">
        <div className="w-8 h-8 border-2 border-border border-t-primary rounded-full animate-spin"></div>
        <p className="mt-4 text-sm text-muted-foreground font-medium">Loading session...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-70px)] bg-background px-4 glow-wrapper">
      <div className="w-full max-w-md animate-fade-in z-10 py-4">
        <div className="text-center mb-6">
          <span className="inline-block px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-xs font-bold text-primary uppercase tracking-widest mb-3">
            Tokutei Ginou
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight mb-2">
            SSW Jidousha Seibi
          </h1>
          <p className="text-sm text-muted-foreground">
            {t('portalDesc')}
          </p>
        </div>

        <Card className="border-border bg-card">
          <CardHeader className="space-y-1 pb-4">
            <CardTitle className="text-xl font-bold text-foreground">{t('signIn')}</CardTitle>
            <CardDescription className="text-muted-foreground text-xs sm:text-sm">
              {t('credentialsDesc')}
            </CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-3 pb-4">
              {errorMsg && (
                <div className="p-3 rounded-md bg-destructive/10 border border-destructive/20 text-sm text-destructive font-medium animate-fade-in">
                  {errorMsg}
                </div>
              )}
              
              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  {t('username')}
                </label>
                <Input
                  type="text"
                  placeholder={t('enterUsername')}
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  disabled={isSubmitting}
                  className="bg-background border-border text-foreground h-10"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  {t('password')}
                </label>
                <Input
                  type="password"
                  placeholder={t('enterPassword')}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={isSubmitting}
                  className="bg-background border-border text-foreground h-10"
                />
              </div>

            </CardContent>
            
            <CardFooter>
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-10"
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
