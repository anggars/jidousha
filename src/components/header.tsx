'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useProfile } from '@/context/profile-context';
import { isSupabaseConfigured } from '@/lib/supabase';
import { useLanguage } from '@/context/language-context';
import { useTheme } from 'next-themes';
import { AlertCircle, LogOut, LayoutDashboard, FileText, BarChart3, Languages, Sun, Moon } from 'lucide-react';

export const Header: React.FC = () => {
  const { currentProfile, logout } = useProfile();
  const { globalLang, setGlobalLang, t } = useLanguage();
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  const pathname = usePathname();
  const router = useRouter();

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const handleLogout = () => {
    logout();
    router.push('/');
  };

  const isSelectionPage = pathname === '/';

  return (
    <header className="border-b border-border bg-background/90 backdrop-blur-md sticky top-0 z-50 w-full">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href={currentProfile ? "/dashboard" : "/"} className="flex flex-col hover:opacity-90 transition-opacity">
            <span className="text-sm font-semibold tracking-wider text-primary font-mono">自動車整備</span>
            <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest -mt-0.5">SSW JIDOUHA SEIBI</span>
          </Link>

          {!isSelectionPage && (
            <nav className="hidden md:flex items-center gap-6">
              {currentProfile && (
                <Link 
                  href="/dashboard" 
                  className={`flex items-center gap-1.5 text-sm font-medium transition-colors ${pathname === '/dashboard' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}
                >
                  <LayoutDashboard className="w-4 h-4" />
                  {t('dashboard')}
                </Link>
              )}
              <Link 
                href="/practice" 
                className={`flex items-center gap-1.5 text-sm font-medium transition-colors ${pathname === '/practice' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}
              >
                <FileText className="w-4 h-4" />
                {t('practice')}
              </Link>
              {currentProfile && (
                <Link 
                  href="/history" 
                  className={`flex items-center gap-1.5 text-sm font-medium transition-colors ${pathname === '/history' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}
                >
                  <BarChart3 className="w-4 h-4" />
                  {t('leaderboard')}
                </Link>
              )}
            </nav>
          )}
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5 bg-secondary border border-border rounded-lg p-0.5">
            <button 
              onClick={() => setGlobalLang('en')} 
              className={`flex items-center gap-1 px-2 py-1 rounded text-[10px] font-bold transition-colors ${
                globalLang === 'en' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'
              }`}
              title="English"
            >
              EN
            </button>
            <button 
              onClick={() => setGlobalLang('id')} 
              className={`flex items-center gap-1 px-2 py-1 rounded text-[10px] font-bold transition-colors ${
                globalLang === 'id' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'
              }`}
              title="Indonesia"
            >
              ID
            </button>
          </div>
          
          <button
            onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
            className="p-1.5 rounded-full hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors border border-border"
            title="Toggle theme"
          >
            {mounted && resolvedTheme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          
          {currentProfile ? (
            <div className="flex items-center gap-3 bg-card border border-border rounded-full pl-3 pr-1 py-1">
              <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-xs font-bold text-primary-foreground uppercase">
                {currentProfile.name.charAt(0)}
              </div>
              <span className="text-xs font-medium text-card-foreground pr-1">{currentProfile.name}</span>
              <button 
                onClick={handleLogout} 
                className="p-1.5 rounded-full hover:bg-secondary text-muted-foreground hover:text-destructive transition-colors"
                title="Sign Out"
              >
                <LogOut className="w-3.5 h-3.5" />
              </button>
            </div>
          ) : (
            <Link 
              href="/practice"
              className="text-xs font-medium text-foreground bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors border border-border rounded-full px-4 py-1.5 cursor-pointer shadow-sm"
            >
              {t('playAsGuest')}
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

