'use client';

import React, { useEffect, useState, Suspense } from 'react';
import { useRouter } from 'next/navigation';
import { supabase, isSupabaseConfigured } from '@/lib/supabase';
import { QuizResult } from '@/components/quiz-result';
import { Question } from '@/types/quiz';
import { useLanguage } from '@/context/language-context';

import { ALL_QUESTIONS as FREE_QUESTIONS_RAW } from '@/lib/questions';
import { REGULAR_QUESTIONS as REGULAR_QUESTIONS_RAW } from '@/lib/questions-regular';

function HistoryDetailContent({ sessionId }: { sessionId: string }) {
  const router = useRouter();
  const { t } = useLanguage();
  
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
    return (
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-70px)] bg-background">
        <p className="text-muted-foreground font-bold">Detail soal tidak ditemukan dalam riwayat ini.</p>
        <button 
          onClick={() => router.push('/dashboard')}
          className="mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-md font-bold"
        >
          Kembali ke Dashboard
        </button>
      </div>
    );
  }

  return <QuizResult questions={questions} answers={answers} isHistoryView={true} />;
}

export default function HistoryDetailPage({ params }: { params: { session_id: string } }) {
  return (
    <Suspense fallback={
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-70px)] bg-background">
        <div className="w-8 h-8 border-2 border-border border-t-primary rounded-full animate-spin"></div>
      </div>
    }>
      <HistoryDetailContent sessionId={params.session_id} />
    </Suspense>
  );
}
