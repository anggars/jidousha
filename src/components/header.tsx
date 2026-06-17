'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useProfile } from '@/context/profile-context';
import { isSupabaseConfigured } from '@/lib/supabase';
import { useLanguage } from '@/context/language-context';
import { AlertCircle, LogOut, LayoutDashboard, FileText, BarChart3, Languages } from 'lucide-react';

export const Header: React.FC = () => {
  const { currentProfile, logout } = useProfile();
  const { globalLang, setGlobalLang, t } = useLanguage();
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push('/');
  };

  const isSelectionPage = pathname === '/';

  return (
    <header className="border-b border-zinc-800 bg-black/90 backdrop-blur-md sticky top-0 z-50 w-full">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href={currentProfile ? "/dashboard" : "/"} className="flex flex-col hover:opacity-90 transition-opacity">
            <span className="text-sm font-semibold tracking-wider text-blue-500 font-mono">自動車整備</span>
            <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest -mt-0.5">SSW JIDOUHA SEIBI</span>
          </Link>

          {!isSelectionPage && (
            <nav className="hidden md:flex items-center gap-6">
              {currentProfile && (
                <Link 
                  href="/dashboard" 
                  className={`flex items-center gap-1.5 text-sm font-medium transition-colors ${pathname === '/dashboard' ? 'text-blue-400' : 'text-zinc-400 hover:text-zinc-200'}`}
                >
                  <LayoutDashboard className="w-4 h-4" />
                  {t('dashboard')}
                </Link>
              )}
              <Link 
                href="/practice" 
                className={`flex items-center gap-1.5 text-sm font-medium transition-colors ${pathname === '/practice' ? 'text-blue-400' : 'text-zinc-400 hover:text-zinc-200'}`}
              >
                <FileText className="w-4 h-4" />
                {t('practice')}
              </Link>
              {currentProfile && (
                <Link 
                  href="/history" 
                  className={`flex items-center gap-1.5 text-sm font-medium transition-colors ${pathname === '/history' ? 'text-blue-400' : 'text-zinc-400 hover:text-zinc-200'}`}
                >
                  <BarChart3 className="w-4 h-4" />
                  {t('leaderboard')}
                </Link>
              )}
            </nav>
          )}
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5 bg-zinc-900 border border-zinc-800 rounded-lg p-0.5">
            <button 
              onClick={() => setGlobalLang('en')} 
              className={`flex items-center gap-1 px-2 py-1 rounded text-[10px] font-bold transition-colors ${
                globalLang === 'en' ? 'bg-blue-600 text-white' : 'text-zinc-400 hover:text-zinc-200'
              }`}
              title="English"
            >
              EN
            </button>
            <button 
              onClick={() => setGlobalLang('id')} 
              className={`flex items-center gap-1 px-2 py-1 rounded text-[10px] font-bold transition-colors ${
                globalLang === 'id' ? 'bg-blue-600 text-white' : 'text-zinc-400 hover:text-zinc-200'
              }`}
              title="Indonesia"
            >
              ID
            </button>
          </div>
          {currentProfile ? (
            <div className="flex items-center gap-3 bg-zinc-950 border border-zinc-800 rounded-full pl-3 pr-1 py-1">
              <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-xs font-bold text-white uppercase">
                {currentProfile.name.charAt(0)}
              </div>
              <span className="text-xs font-medium text-zinc-300 pr-1">{currentProfile.name}</span>
              <button 
                onClick={handleLogout} 
                className="p-1.5 rounded-full hover:bg-zinc-900 text-zinc-400 hover:text-red-400 transition-colors"
                title="Sign Out"
              >
                <LogOut className="w-3.5 h-3.5" />
              </button>
            </div>
          ) : (
            <Link 
              href="/practice"
              className="text-xs font-medium text-zinc-300 bg-zinc-900 hover:bg-zinc-800 hover:text-white transition-colors border border-zinc-800 rounded-full px-4 py-1.5 cursor-pointer shadow-[0_0_15px_rgba(59,130,246,0.15)]"
            >
              {t('playAsGuest')}
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

