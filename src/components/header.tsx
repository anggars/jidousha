'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useProfile } from '@/context/profile-context';
import { isSupabaseConfigured } from '@/lib/supabase';
import { useLanguage } from '@/context/language-context';
import { useTheme } from 'next-themes';
import { AlertCircle, LogOut, LayoutDashboard, FileText, BarChart3, Languages, Sun, Moon, BookOpen, Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const { currentProfile, logout } = useProfile();
  const { globalLang, setGlobalLang, t } = useLanguage();
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const pathname = usePathname();
  const router = useRouter();

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const handleLogout = () => {
    logout();
    router.push('/');
  };

  const closeMenu = () => setIsMobileMenuOpen(false);

  const isSelectionPage = pathname === '/';

  return (
    <header className="border-b border-border bg-background/90 backdrop-blur-md sticky top-0 z-50 w-full">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href={currentProfile ? "/dashboard" : "/"} className="flex flex-col hover:opacity-90 transition-opacity" onClick={closeMenu}>
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
              <Link 
                href="/kotoba" 
                className={`flex items-center gap-1.5 text-sm font-medium transition-colors ${pathname === '/kotoba' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}
              >
                <BookOpen className="w-4 h-4" />
                Kotoba
              </Link>
            </nav>
          )}
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          <div className="hidden sm:flex items-center gap-1.5 bg-secondary border border-border rounded-lg p-0.5">
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
          
          {mounted ? (
            currentProfile ? (
              <div className="flex items-center gap-3 bg-card border border-border rounded-full pl-3 pr-1 py-1">
                <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-xs font-bold text-primary-foreground uppercase">
                  {currentProfile.name.charAt(0)}
                </div>
                <span className="hidden sm:inline text-xs font-medium text-card-foreground pr-1">{currentProfile.name}</span>
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
                className="hidden sm:inline-block text-xs font-medium text-foreground bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors border border-border rounded-full px-4 py-1.5 cursor-pointer shadow-sm"
              >
                {t('playAsGuest')}
              </Link>
            )
          ) : (
            <div className="w-24 h-8 animate-pulse bg-secondary rounded-full border border-border"></div>
          )}

          {!isSelectionPage && (
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-1.5 rounded-md hover:bg-secondary text-muted-foreground transition-colors border border-border"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && !isSelectionPage && (
        <div className="md:hidden bg-background border-b border-border shadow-lg absolute top-16 left-0 w-full z-40 p-4 flex flex-col gap-4 animate-in slide-in-from-top-2">
          <nav className="flex flex-col gap-2">
            {currentProfile && (
              <Link 
                href="/dashboard" 
                onClick={closeMenu}
                className={`flex items-center gap-3 p-3 rounded-lg text-sm font-medium transition-colors ${pathname === '/dashboard' ? 'bg-primary/10 text-primary' : 'text-muted-foreground hover:bg-secondary hover:text-foreground'}`}
              >
                <LayoutDashboard className="w-5 h-5" />
                {t('dashboard')}
              </Link>
            )}
            <Link 
              href="/practice" 
              onClick={closeMenu}
              className={`flex items-center gap-3 p-3 rounded-lg text-sm font-medium transition-colors ${pathname === '/practice' ? 'bg-primary/10 text-primary' : 'text-muted-foreground hover:bg-secondary hover:text-foreground'}`}
            >
              <FileText className="w-5 h-5" />
              {t('practice')}
            </Link>
            {currentProfile && (
              <Link 
                href="/history" 
                onClick={closeMenu}
                className={`flex items-center gap-3 p-3 rounded-lg text-sm font-medium transition-colors ${pathname === '/history' ? 'bg-primary/10 text-primary' : 'text-muted-foreground hover:bg-secondary hover:text-foreground'}`}
              >
                <BarChart3 className="w-5 h-5" />
                {t('leaderboard')}
              </Link>
            )}
            <Link 
              href="/kotoba" 
              onClick={closeMenu}
              className={`flex items-center gap-3 p-3 rounded-lg text-sm font-medium transition-colors ${pathname === '/kotoba' ? 'bg-primary/10 text-primary' : 'text-muted-foreground hover:bg-secondary hover:text-foreground'}`}
            >
              <BookOpen className="w-5 h-5" />
              Kotoba
            </Link>
          </nav>
          <div className="flex items-center gap-2 pt-4 border-t border-border">
            <span className="text-sm font-medium text-muted-foreground flex-1">Bahasa / Language:</span>
            <div className="flex items-center gap-1.5 bg-secondary border border-border rounded-lg p-0.5">
              <button 
                onClick={() => { setGlobalLang('en'); closeMenu(); }} 
                className={`flex items-center gap-1 px-3 py-1.5 rounded text-xs font-bold transition-colors ${
                  globalLang === 'en' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                EN
              </button>
              <button 
                onClick={() => { setGlobalLang('id'); closeMenu(); }} 
                className={`flex items-center gap-1 px-3 py-1.5 rounded text-xs font-bold transition-colors ${
                  globalLang === 'id' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                ID
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

