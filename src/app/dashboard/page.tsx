'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useProfile } from '@/context/profile-context';
import { supabase, isSupabaseConfigured } from '@/lib/supabase';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Settings, BarChart2, Award, Percent, Key, LogOut } from 'lucide-react';
import { useLanguage } from '@/context/language-context';

interface HistoryItem {
  id: number;
  score: number;
  total_questions: number;
  answered_correctly: number;
  created_at: string;
}

export default function Dashboard() {
  const { currentProfile, isLoading: isProfileLoading, logout, changePassword } = useProfile();
  const { t, globalLang } = useLanguage();
  const router = useRouter();
  
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [isLoadingHistory, setIsLoadingHistory] = useState(true);

  // Settings / Password Modal State
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [passwordSuccess, setPasswordSuccess] = useState<string | null>(null);
  const [isSavingPassword, setIsSavingPassword] = useState(false);

  // Local mock history for testing when Supabase is offline
  const mockHistory: HistoryItem[] = [];

  useEffect(() => {
    if (!isProfileLoading && !currentProfile) {
      router.push('/');
    }
  }, [currentProfile, isProfileLoading, router]);

  useEffect(() => {
    if (!currentProfile) return;

    const fetchHistory = async () => {
      setIsLoadingHistory(true);
      if (!isSupabaseConfigured) {
        setHistory(mockHistory);
        setIsLoadingHistory(false);
        return;
      }

      try {
        const { data, error } = await supabase
          .from('practice_history')
          .select('id, score, total_questions, answered_correctly, created_at')
          .eq('profile_id', currentProfile.id)
          .order('created_at', { ascending: false });

        if (error) throw error;
        setHistory(data || []);
      } catch (err) {
        console.error('Error fetching practice history:', err);
        setHistory(mockHistory);
      } finally {
        setIsLoadingHistory(false);
      }
    };

    fetchHistory();
  }, [currentProfile]);

  const handleLogout = () => {
    logout();
    router.push('/');
  };

  const handleSavePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPassword.trim() || newPassword.length < 4) {
      setPasswordError('Password must be at least 4 characters long.');
      return;
    }

    try {
      setIsSavingPassword(true);
      setPasswordError(null);
      setPasswordSuccess(null);

      const res = await changePassword(newPassword);
      if (!res.success) {
        setPasswordError(res.error || 'Failed to change password.');
      } else {
        setPasswordSuccess('Password successfully updated.');
        setNewPassword('');
        setTimeout(() => {
          setIsSettingsOpen(false);
          setPasswordSuccess(null);
        }, 1500);
      }
    } catch (err) {
      console.error('Password change error:', err);
      setPasswordError('An unexpected error occurred.');
    } finally {
      setIsSavingPassword(false);
    }
  };

  if (isProfileLoading || !currentProfile) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-70px)] bg-black">
        <div className="w-8 h-8 border-2 border-zinc-800 border-t-blue-500 rounded-full animate-spin"></div>
        <p className="mt-4 text-sm text-zinc-400 font-medium">{t('loading')}</p>
      </div>
    );
  }

  const averageScore = history.length > 0
    ? Math.round(history.reduce((acc, curr) => acc + curr.score, 0) / history.length)
    : 0;

  const highestScore = history.length > 0
    ? Math.max(...history.map(h => h.score))
    : 0;

  const totalCorrect = history.reduce((acc, curr) => acc + curr.answered_correctly, 0);
  const totalAnswered = history.reduce((acc, curr) => acc + curr.total_questions, 0);
  const accuracy = totalAnswered > 0
    ? Math.round((totalCorrect / totalAnswered) * 100)
    : 0;

  const startSelectedQuiz = () => {
    router.push('/practice');
  };

  const startRegularQuiz = () => {
    router.push('/practice/regular');
  };

  return (
    <div className="min-h-[calc(100vh-70px)] bg-black py-8 px-4 sm:px-6 lg:px-8 glow-wrapper">
      <div className="max-w-5xl mx-auto space-y-8 animate-fade-in relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 bg-zinc-950/50 p-6 rounded-2xl border border-zinc-900">
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 rounded-full bg-zinc-900 border-2 border-zinc-800 flex items-center justify-center text-3xl font-bold text-zinc-300 uppercase shadow-[0_0_30px_rgba(59,130,246,0.15)] relative">
              {currentProfile.name.charAt(0)}
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-4 border-black"></div>
            </div>
            <div>
              <p className="text-sm font-medium text-blue-500 mb-1">{t('welcome')},</p>
              <h1 className="text-3xl font-extrabold text-zinc-100 tracking-tight">{currentProfile.name}</h1>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <Button 
              variant="outline" 
              onClick={() => setIsSettingsOpen(true)}
              className="border-zinc-800 text-zinc-300 hover:text-white bg-zinc-950 hover:bg-zinc-900 h-10"
            >
              <Settings className="w-4 h-4 mr-2" />
              {t('settings')}
            </Button>
            <Button 
              variant="outline" 
              onClick={handleLogout}
              className="border-red-950/50 text-red-400 hover:text-red-300 bg-red-950/20 hover:bg-red-950/40 h-10"
            >
              <LogOut className="w-4 h-4 mr-2" />
              {t('signOut')}
            </Button>
          </div>
        </div>

        {/* Stats Overview */}
        <div>
          <h2 className="text-lg font-bold text-zinc-200 mb-4 flex items-center gap-2">
            <BarChart2 className="w-5 h-5 text-blue-500" />
            {t('performanceOverview')}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <Card className="bg-zinc-950 border-zinc-800">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <span className="text-sm font-semibold text-zinc-400 uppercase tracking-wider">Total Attempts</span>
                <BarChart2 className="w-4 h-4 text-blue-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-zinc-100">{history.length}</div>
                <p className="text-xs text-zinc-500 mt-1">{t('examsCompleted')}</p>
              </CardContent>
            </Card>
            
            <Card className="bg-zinc-950 border-zinc-800">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <span className="text-sm font-semibold text-zinc-400 uppercase tracking-wider">Average Score</span>
                <Award className="w-4 h-4 text-blue-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-zinc-100">{averageScore}%</div>
                <p className="text-xs text-zinc-500 mt-1">{t('avgCorrectness')}</p>
              </CardContent>
            </Card>

            <Card className="bg-zinc-950 border-zinc-800">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <span className="text-sm font-semibold text-zinc-400 uppercase tracking-wider">Accuracy</span>
                <Percent className="w-4 h-4 text-blue-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-zinc-100">{accuracy}%</div>
                <p className="text-xs text-zinc-500 mt-1">{t('accuracyRate')}</p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Action Area */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="bg-zinc-950 border-zinc-800 p-6">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-zinc-100">{t('practiceSession')}</h2>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {t('selectPackageDesc')}
                </p>
                <div className="border border-zinc-900 rounded-lg p-4 bg-zinc-950/20 text-xs text-zinc-400 leading-relaxed">
                  {t('practiceNote')}
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                  <div className="border border-zinc-800 rounded-xl p-5 bg-zinc-900/20 hover:bg-zinc-900/40 transition-colors flex flex-col justify-between h-full gap-4">
                    <div>
                      <h3 className="font-bold text-lg text-blue-400 mb-1">{t('packageSelectedTitle')}</h3>
                      <p className="text-xs text-zinc-400">{t('packageSelectedDesc')}</p>
                    </div>
                    <Button 
                      onClick={startSelectedQuiz} 
                      className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold h-10"
                    >
                      {t('startSelected')}
                    </Button>
                  </div>
                  
                  <div className="border border-zinc-800 rounded-xl p-5 bg-zinc-900/20 hover:bg-zinc-900/40 transition-colors flex flex-col justify-between h-full gap-4">
                    <div>
                      <h3 className="font-bold text-lg text-purple-400 mb-1">{t('packageRegularTitle')}</h3>
                      <p className="text-xs text-zinc-400">{t('packageRegularDesc')}</p>
                    </div>
                    <Button 
                      onClick={startRegularQuiz} 
                      className="w-full bg-purple-600 hover:bg-purple-500 text-white font-bold h-10"
                    >
                      {t('startRegular')}
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* History Column */}
          <div className="space-y-6">
            <Card className="bg-zinc-950 border-zinc-800 p-6 flex flex-col h-full">
              <div className="space-y-4 flex-1">
                <h2 className="text-xl font-bold text-zinc-100">Recent History</h2>
                
                {isLoadingHistory ? (
                  <div className="flex justify-center py-8">
                    <div className="w-5 h-5 border-2 border-zinc-800 border-t-blue-500 rounded-full animate-spin"></div>
                  </div>
                ) : history.length === 0 ? (
                  <div className="text-center py-8 border border-dashed border-zinc-900 rounded-lg">
                    <p className="text-sm text-zinc-500">No practice history found.</p>
                  </div>
                ) : (
                  <div className="space-y-3 max-h-[300px] overflow-y-auto pr-1">
                    {history.map((item) => {
                      const statusColor = item.score >= 80 
                        ? 'bg-green-950/20 border-green-900/50 text-green-400' 
                        : 'bg-red-950/20 border-red-900/50 text-red-400';
                      
                      return (
                        <div key={item.id} className="flex flex-col sm:flex-row sm:items-center justify-between p-6 hover:bg-zinc-900/40 transition-colors gap-4">
                          <div className="flex flex-col gap-1">
                            <span className="text-sm font-bold text-zinc-200">
                              {new Date(item.created_at).toLocaleDateString(globalLang === 'id' ? 'id-ID' : 'en-US', {
                                weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
                                hour: '2-digit', minute: '2-digit'
                              })}
                            </span>
                            <span className="text-xs text-zinc-500">
                              {item.answered_correctly} / {item.total_questions} {t('correct').toLowerCase()}
                            </span>
                          </div>
                          <div className="flex items-center gap-4">
                            <div className={`px-4 py-1.5 rounded-full border text-sm font-bold w-24 text-center ${statusColor}`}>
                              {item.score}%
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </Card>
          </div>
        </div>

        {/* Change Password Dialog */}
        <Dialog open={isSettingsOpen} onOpenChange={setIsSettingsOpen}>
          <DialogContent className="bg-zinc-950 border-zinc-800 text-zinc-100 sm:max-w-md">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2 text-xl">
                <Settings className="w-5 h-5 text-blue-500" />
                {t('settings')}
              </DialogTitle>
              <DialogDescription className="text-zinc-400">
                {t('changePasswordDesc')}
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSavePassword} className="space-y-4 mt-4">
              {passwordError && (
                <div className="p-3 rounded-md bg-red-950/30 border border-red-900/50 text-xs text-red-400 font-medium animate-fade-in">
                  {passwordError}
                </div>
              )}
              {passwordSuccess && (
                <div className="p-3 rounded-md bg-green-950/30 border border-green-900/50 text-xs text-green-400 font-medium animate-fade-in">
                  {passwordSuccess}
                </div>
              )}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-zinc-400 flex items-center gap-1.5">
                  <Key className="w-3.5 h-3.5" />
                  {t('newPassword')}
                </label>
                <Input
                  type="password"
                  placeholder={t('minChars')}
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  disabled={isSavingPassword}
                  className="bg-black border-zinc-800 text-zinc-200"
                />
              </div>
              <DialogFooter className="mt-6">
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={() => setIsSettingsOpen(false)}
                  disabled={isSavingPassword}
                  className="border-zinc-800 text-zinc-300 hover:text-white"
                >
                  {t('cancel')}
                </Button>
                <Button 
                  type="submit"
                  disabled={isSavingPassword}
                  className="bg-blue-600 hover:bg-blue-500 text-white font-semibold"
                >
                  {isSavingPassword ? t('saving') : t('saveChanges')}
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
