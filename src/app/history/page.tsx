'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useProfile } from '@/context/profile-context';
import { supabase, isSupabaseConfigured } from '@/lib/supabase';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Trophy, History, Award, Calendar, Activity, Medal, User } from 'lucide-react';
import { useLanguage } from '@/context/language-context';

interface GlobalHistoryItem {
  id: number;
  score: number;
  total_questions: number;
  answered_correctly: number;
  created_at: string;
  profiles: {
    name: string;
  } | null;
}

interface LeaderboardUser {
  name: string;
  avatarLetter: string;
  averageScore: number;
  totalExams: number;
  bestScore: number;
}

const MOCK_GLOBAL_HISTORY: GlobalHistoryItem[] = [];

export default function HistoryPage() {
  const { currentProfile, isLoading: isProfileLoading } = useProfile();
  const { t } = useLanguage();
  const router = useRouter();

  const [globalHistory, setGlobalHistory] = useState<GlobalHistoryItem[]>([]);
  const [leaderboard, setLeaderboard] = useState<LeaderboardUser[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<string>('leaderboard');

  useEffect(() => {
    if (!isProfileLoading && !currentProfile) {
      router.push('/');
    }
  }, [currentProfile, isProfileLoading, router]);

  useEffect(() => {
    const fetchGlobalData = async () => {
      setIsLoading(true);
      if (!isSupabaseConfigured) {
        setGlobalHistory(MOCK_GLOBAL_HISTORY);
        calculateLeaderboard(MOCK_GLOBAL_HISTORY);
        setIsLoading(false);
        return;
      }

      try {
        const { data, error } = await supabase
          .from('practice_history')
          .select(`
            id,
            score,
            total_questions,
            answered_correctly,
            created_at,
            profiles (
              name
            )
          `)
          .order('created_at', { ascending: false });

        if (error) throw error;
        
        const normalized: GlobalHistoryItem[] = (data || []).map((item: any) => ({
          id: item.id,
          score: item.score,
          total_questions: item.total_questions,
          answered_correctly: item.answered_correctly,
          created_at: item.created_at,
          profiles: item.profiles ? { name: item.profiles.name } : null
        }));

        setGlobalHistory(normalized);
        calculateLeaderboard(normalized);
      } catch (err) {
        console.error('Error fetching global history:', err);
        setGlobalHistory(MOCK_GLOBAL_HISTORY);
        calculateLeaderboard(MOCK_GLOBAL_HISTORY);
      } finally {
        setIsLoading(false);
      }
    };

    if (currentProfile) {
      fetchGlobalData();
    }
  }, [currentProfile]);

  const calculateLeaderboard = (historyItems: GlobalHistoryItem[]) => {
    const userStats: { [name: string]: { totalScore: number; count: number; best: number } } = {};
    
    const coreNames = ['Angga', 'Dean', 'Rian', 'Agus', 'Sandriya'];
    coreNames.forEach(name => {
      userStats[name] = { totalScore: 0, count: 0, best: 0 };
    });

    historyItems.forEach(item => {
      const name = item.profiles?.name;
      if (name && userStats[name] !== undefined) {
        userStats[name].totalScore += item.score;
        userStats[name].count += 1;
        if (item.score > userStats[name].best) {
          userStats[name].best = item.score;
        }
      }
    });

    const calculated: LeaderboardUser[] = Object.keys(userStats)
      .filter(name => userStats[name].count > 0)
      .map(name => {
        const stats = userStats[name];
        return {
          name,
          avatarLetter: name.charAt(0),
          averageScore: Math.round(stats.totalScore / stats.count),
          totalExams: stats.count,
          bestScore: stats.best
        };
      });

    const sorted = calculated.sort((a, b) => {
      if (b.averageScore !== a.averageScore) {
        return b.averageScore - a.averageScore;
      }
      return b.totalExams - a.totalExams;
    });

    setLeaderboard(sorted);
  };

  if (isProfileLoading || !currentProfile) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-70px)] bg-black">
        <div className="w-8 h-8 border-2 border-zinc-800 border-t-blue-500 rounded-full animate-spin"></div>
        <p className="mt-4 text-sm text-zinc-400 font-medium">{t('loading')}</p>
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-70px)] bg-black py-8 px-4 sm:px-6 lg:px-8 glow-wrapper">
      <div className="max-w-5xl mx-auto space-y-8 animate-fade-in relative z-10">
        
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-3xl font-extrabold text-zinc-100 tracking-tight flex items-center gap-3">
            <Trophy className="w-8 h-8 text-blue-500" />
            {t('leaderboardActivities')}
          </h1>
          <p className="text-sm text-zinc-400 max-w-2xl">
            {t('leaderboardDesc')}
          </p>
        </div>

        {/* Tabs Control */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="bg-zinc-950 border border-zinc-800 p-1 mb-6">
            <TabsTrigger value="leaderboard" className="flex items-center gap-2">
              <Trophy className="w-4 h-4" />
              {t('leaderboardRankings')}
            </TabsTrigger>
            <TabsTrigger value="timeline" className="flex items-center gap-2">
              <History className="w-4 h-4" />
              {t('recentActivities')}
            </TabsTrigger>
          </TabsList>

          {isLoading ? (
            <div className="flex justify-center items-center py-20">
              <div className="w-8 h-8 border-2 border-zinc-800 border-t-blue-500 rounded-full animate-spin"></div>
            </div>
          ) : (
            <>
              <TabsContent value="leaderboard" className="space-y-8 outline-none">
                {leaderboard.length === 0 ? (
                  <Card className="bg-zinc-950 border-zinc-800 py-12 text-center">
                    <CardContent className="space-y-2">
                      <Trophy className="w-8 h-8 text-zinc-600 mx-auto" />
                      <p className="text-sm text-zinc-500">{t('noData')}</p>
                    </CardContent>
                  </Card>
                ) : (
                  <>
                    <Card className="bg-zinc-950 border-zinc-800 animate-scale-in">
                      <CardHeader className="border-b border-zinc-900 pb-4">
                        <CardTitle className="text-lg font-bold text-zinc-200">{t('topPlayers')}</CardTitle>
                      </CardHeader>
                      <CardContent className="p-0">
                        <div className="divide-y divide-zinc-900">
                          {leaderboard.map((user, idx) => (
                            <div key={user.name} className="flex items-center justify-between p-4 hover:bg-zinc-900/50 transition-colors">
                              <div className="flex items-center gap-4">
                                <span className="text-sm font-bold text-zinc-600 w-4 text-right">#{idx + 1}</span>
                                <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-xs font-bold text-zinc-300">
                                  {user.avatarLetter}
                                </div>
                                <div className="flex flex-col">
                                  <span className="text-sm font-bold text-zinc-200">
                                    {user.name}
                                    {user.name === currentProfile.name && (
                                      <span className="ml-2 text-[9px] bg-blue-900/40 text-blue-400 border border-blue-800/50 px-1.5 py-0.5 rounded-full font-normal">
                                        {t('you')}
                                      </span>
                                    )}
                                  </span>
                                  <span className="text-xs text-zinc-500">{user.totalExams} {t('totalExams').toLowerCase()}</span>
                                </div>
                              </div>
                              <div className="flex items-center gap-4">
                                <div className="flex flex-col items-end">
                                  <span className="text-sm font-bold text-zinc-300">{user.bestScore} {t('correct').toLowerCase()}</span>
                                  <span className="text-[10px] text-zinc-500 uppercase">{t('highestScore')}</span>
                                </div>
                                <div className="w-12 text-right">
                                  <span className="text-sm font-bold text-blue-400">{user.averageScore}%</span>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </>
                )}
              </TabsContent>

              <TabsContent value="timeline" className="space-y-6 outline-none">
                {globalHistory.length === 0 ? (
                  <Card className="bg-zinc-950 border-zinc-800 py-12 text-center">
                    <CardContent className="space-y-2">
                      <History className="w-8 h-8 text-zinc-600 mx-auto" />
                      <p className="text-sm text-zinc-500">{t('noTimelineData')}</p>
                    </CardContent>
                  </Card>
                ) : (
                  <div className="relative border-l border-zinc-800 ml-4 space-y-6">
                    {globalHistory.map((item, index) => {
                      const uName = item.profiles?.name || 'User';
                      const isPass = item.score >= 80;
                      
                      return (
                        <div key={item.id || index} className="relative pl-6 animate-scale-in">
                          {/* Timeline Marker */}
                          <div className="absolute -left-1.5 top-1.5 w-3 h-3 bg-zinc-950 border border-zinc-800 rounded-full flex items-center justify-center">
                            <div className={`w-1.5 h-1.5 rounded-full ${isPass ? 'bg-green-500' : 'bg-red-500'}`}></div>
                          </div>
                          
                          <Card className="bg-zinc-950 border-zinc-800 hover:border-zinc-700 transition-colors">
                            <CardContent className="p-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                              <div className="flex items-center gap-3">
                                <div className="w-9 h-9 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center font-bold text-xs uppercase text-zinc-300">
                                  {uName.charAt(0)}
                                </div>
                                <div className="flex flex-col">
                                  <span className="text-sm font-bold text-zinc-200">{item.profiles?.name || 'Unknown'}</span>
                                  <span className="text-xs text-zinc-500">
                                    {t('answeredCorrectly')} {item.answered_correctly}/{item.total_questions} {t('questions').toLowerCase()}
                                  </span>
                                </div>
                              </div>
                              <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
                                <p className="text-xs text-zinc-400">
                                  {t('correctOf')}: <strong className="text-zinc-200">{item.answered_correctly}</strong> {t('of')} <strong className="text-zinc-200">{item.total_questions}</strong>
                                </p>
                                <span className={`px-2.5 py-1 text-xs font-bold rounded-full border ${
                                  isPass 
                                    ? 'bg-green-950/20 border-green-900/50 text-green-400' 
                                    : 'bg-red-950/20 border-red-900/50 text-red-400'
                                }`}>
                                  {item.score}%
                                </span>
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                      );
                    })}
                  </div>
                )}
              </TabsContent>
            </>
          )}
        </Tabs>
      </div>
    </div>
  );
}

