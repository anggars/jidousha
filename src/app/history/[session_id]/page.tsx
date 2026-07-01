'use client';

import React, { useEffect, useState, Suspense } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { supabase, isSupabaseConfigured } from '@/lib/supabase';
import { QuizResult } from '@/components/quiz-result';
import { Question } from '@/types/quiz';
import { useLanguage } from '@/context/language-context';

import { ALL_QUESTIONS as FREE_QUESTIONS_RAW } from '@/lib/questions';
import { REGULAR_QUESTIONS as REGULAR_QUESTIONS_RAW } from '@/lib/questions-regular';

function HistoryDetailContent() {
  const router = useRouter();
  const { t } = useLanguage();
  const params = useParams();
  const sessionId = params.session_id as string;
  
  const [isLoading, setIsLoading] = useState(true);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [answers, setAnswers] = useState<(number | null)[]>([]);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    const fetchHistory = async () => {
      if (!isSupabaseConfigured) {
        setErrorMsg('Database tidak dikonfigurasi.');
        setIsLoading(false);
        return;
      }

      try {
        const { data, error } = await supabase
          .from('practice_history')
          .select('*')
          .eq('session_id', sessionId)
          .single();

        if (error) throw error;
        if (!data) {
          setErrorMsg('Riwayat tidak ditemukan.');
          setIsLoading(false);
          return;
        }

        if (data.session_id?.startsWith('KOTOBA')) {
          // Instead of failing to find questions, we just set empty questions
          // We can use a custom state, but it's easier to just handle it in the render
          setQuestions([]);
          setAnswers([]);
          setIsLoading(false);
          // We can attach the data score directly to state if we need it
          // Or just render a custom component if questions.length === 0 and session_id starts with KOTOBA
          return;
        }

        const totalQ = data.total_questions;
        const answersJson: any[] = typeof data.answers_json === 'string' ? JSON.parse(data.answers_json) : (data.answers_json || []);

        // Determine which bank to use
        const rawBank = totalQ === 100 ? REGULAR_QUESTIONS_RAW : FREE_QUESTIONS_RAW;
        
        // Map raw bank to Question interface matching indices (idx + 1)
        const bank: Question[] = rawBank.map((q, idx) => ({
          id: idx + 1,
          question_jp: q.japanese,
          question_id: q.indonesian,
          question_en: q.english,
          options_jp: q.options,
          options_id: q.optionsIndonesian || [],
          options_en: q.optionsEnglish || [],
          option_images: q.optionImages || null,
          correct_index: q.correctAnswer,
          explanation_jp: q.explanationJp,
          explanation_id: q.explanationId,
          explanation_en: q.explanationEn,
          image_url: q.imageUrl || null,
          category: 'Umum' // Category isn't heavily used in raw except for UI coloring
        }));

        const reconstructedQuestions: Question[] = [];
        const reconstructedAnswers: (number | null)[] = [];

        for (const ans of answersJson) {
          const qId = ans.question_id;
          const found = bank.find(q => q.id === qId);
          if (found) {
            reconstructedQuestions.push(found);
            reconstructedAnswers.push(ans.selected === -1 ? null : ans.selected);
          }
        }

        setQuestions(reconstructedQuestions);
        setAnswers(reconstructedAnswers);
      } catch (err: any) {
        console.error('Failed to load history:', err);
        setErrorMsg('Gagal memuat riwayat ujian.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchHistory();
  }, [sessionId]);

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-70px)] bg-background">
        <div className="w-8 h-8 border-2 border-border border-t-primary rounded-full animate-spin"></div>
        <p className="mt-4 text-sm text-muted-foreground font-medium">{t('loading')}</p>
      </div>
    );
  }

  if (errorMsg) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-70px)] bg-background">
        <p className="text-destructive font-bold">{errorMsg}</p>
        <button 
          onClick={() => router.push('/dashboard')}
          className="mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-md font-bold"
        >
          {t('goToDashboard')}
        </button>
      </div>
    );
  }

  if (questions.length === 0) {
    if (sessionId.startsWith('KOTOBA')) {
      return (
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-70px)] bg-background p-4">
          <div className="w-full max-w-md p-8 text-center bg-card border border-border shadow-xl rounded-xl space-y-6 animate-scale-in">
            <div className="mx-auto w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center border-4 border-primary/20">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-foreground">Riwayat Hafalan Kotoba</h2>
              <p className="text-muted-foreground text-sm">Ini adalah riwayat untuk sesi hafalan Active Recall Kosakata Bahasa Jepang.</p>
            </div>
            <div className="pt-4 border-t border-border space-y-3">
              <button 
                onClick={() => router.push('/kotoba')}
                className="w-full font-bold h-12 bg-primary hover:bg-primary/90 text-primary-foreground rounded-md transition-colors"
              >
                Mulai Hafalan Baru
              </button>
              <button 
                onClick={() => router.push('/dashboard')}
                className="w-full font-bold h-12 border border-border bg-background hover:bg-secondary text-foreground rounded-md transition-colors"
              >
                Kembali ke Dashboard
              </button>
            </div>
          </div>
        </div>
      );
    }
    
    return (
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-70px)] bg-background">
        <p className="text-sm font-semibold text-foreground mb-4">Detail soal tidak ditemukan dalam riwayat ini.</p>
        <button 
          onClick={() => router.push('/dashboard')}
          className="px-4 py-2 bg-primary text-primary-foreground font-bold rounded hover:bg-primary/90 transition-colors"
        >
          Kembali ke Dashboard
        </button>
      </div>
    );
  }

  return <QuizResult questions={questions} answers={answers} isHistoryView={true} />;
}

export default function HistoryDetailPage() {
  return (
    <Suspense fallback={
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-70px)] bg-background">
        <div className="w-8 h-8 border-2 border-border border-t-primary rounded-full animate-spin"></div>
      </div>
    }>
      <HistoryDetailContent />
    </Suspense>
  );
}
