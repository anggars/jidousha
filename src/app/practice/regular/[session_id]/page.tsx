'use client';

import React, { useEffect, useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useProfile } from '@/context/profile-context';
import { useLanguage } from '@/context/language-context';
import { supabase, isSupabaseConfigured } from '@/lib/supabase';
import Image from 'next/image';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, X, AlertCircle, ArrowLeft, ArrowRight, Languages, Activity, Timer, FileText, Menu } from 'lucide-react';
import { FuriganaText } from '@/components/furigana';
import { QuizResult } from '@/components/quiz-result';

import { REGULAR_QUESTIONS as ALL_QUESTIONS } from '@/lib/questions-regular';

import { Question } from '@/types/quiz';

const DEFAULT_QUESTIONS: Question[] = ALL_QUESTIONS.map((q, idx) => ({
  id: idx + 1,
  question_jp: q.japanese,
  question_id: q.indonesian,
  question_en: q.english || '',
  options_jp: q.options,
  options_id: q.optionsIndonesian || q.options.map(opt => opt === 'O' ? 'Benar' : (opt === 'X' ? 'Salah' : opt)),
  options_en: q.optionsEnglish || q.options.map(opt => opt === 'O' ? 'True' : (opt === 'X' ? 'False' : opt)),
  option_images: q.optionImages || null,
  correct_index: q.correctAnswer,
  explanation_jp: q.explanationJp || '',
  explanation_id: q.explanationId || '',
  explanation_en: q.explanationEn || '',
  image_url: q.imageUrl || null,
  category: (q.options.length === 2 && q.options[0] === 'O' && q.options[1] === 'X') ? 'Teori (Gakka)' : 'Praktek (Jitsugi)'
}));

export function PracticeQuizContent({ sessionId }: { sessionId?: string }) {
  const { currentProfile, isLoading: isProfileLoading } = useProfile();
  const router = useRouter();
  const searchParams = useSearchParams();

  const categoryParam = searchParams.get('category') || 'Semua';

  const [questions, setQuestions] = useState<Question[]>([]);
  const [isLoadingQuestions, setIsLoadingQuestions] = useState(true);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>([]);
  const [isSavingHistory, setIsSavingHistory] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);
  const [timeIsUp, setTimeIsUp] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60 * 60); // 60 minutes in seconds
  
  // Translation Language State (default is English)
  const { globalLang, t } = useLanguage();
  const [showTranslation, setShowTranslation] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const getTranslatedCategory = (cat: string) => {
    if (cat === 'Teori (Gakka)') return globalLang === 'en' ? 'Theory (Gakka)' : 'Teori (Gakka)';
    if (cat === 'Praktek (Jitsugi)') return globalLang === 'en' ? 'Practical (Jitsugi)' : 'Praktek (Jitsugi)';
    return cat;
  };

  // Timer logic
  useEffect(() => {
    if (quizFinished || isLoadingQuestions || questions.length === 0) return;
    
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setTimeIsUp(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [quizFinished, isLoadingQuestions, questions.length]);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  // Removed the redirection on !currentProfile so guests can access practice
  useEffect(() => {
    // We allow guests to stay on this page
  }, [currentProfile, isProfileLoading]);

  // Handle time up
  useEffect(() => {
    if (timeIsUp && !quizFinished) {
      handleFinish();
    }
  }, [timeIsUp]);

  useEffect(() => {
    const fetchQuestions = async () => {
      setIsLoadingQuestions(true);
      let fetched: Question[] = [...DEFAULT_QUESTIONS];

      // Load all questions sequentially according to their original ID order
      fetched.sort((a, b) => a.id - b.id);
      
      if (!currentProfile) {
        fetched = fetched.slice(0, 5);
      }
      
      setQuestions(fetched);
      setAnswers(Array(fetched.length).fill(null));
      setIsLoadingQuestions(false);
    };

    if (!isProfileLoading) {
      fetchQuestions();
    }
  }, [currentProfile, categoryParam, isProfileLoading]);

  if (isProfileLoading || isLoadingQuestions) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-70px)] bg-background">
        <div className="w-8 h-8 border-2 border-border border-t-primary rounded-full animate-spin"></div>
        <p className="mt-4 text-sm text-muted-foreground font-medium">{t('generatingPractice')}</p>
      </div>
    );
  }

  if (questions.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-70px)] bg-background px-4 text-center">
        <AlertCircle className="w-12 h-12 text-destructive mb-4" />
        <h2 className="text-xl font-bold text-foreground mb-2">{t('noQuestions')}</h2>
        <p className="text-sm text-muted-foreground max-w-md mb-6">{t('noQuestionsDesc')}</p>
        <Button onClick={() => router.push('/dashboard')} className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
          {t('backToDashboard')}
        </Button>
      </div>
    );
  }

  const currentQuestion = questions[currentIdx];

  const handleSelectOption = (index: number) => {
    setAnswers(prev => {
      const newAnswers = [...prev];
      newAnswers[currentIdx] = index;
      return newAnswers;
    });
  };

  const handleNext = () => {
    if (currentIdx + 1 < questions.length) {
      setCurrentIdx(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIdx > 0) {
      setCurrentIdx(prev => prev - 1);
    }
  };

  const handleFinish = async () => {
    setQuizFinished(true);
    let finalScore = 0;
    const finalAnswersData = questions.map((q, idx) => {
      const selected = answers[idx];
      const isCorrect = selected === q.correct_index;
      if (isCorrect) finalScore++;
      return {
        question_id: q.id,
        selected: selected !== null ? selected : -1,
        correct: isCorrect
      };
    });
    
    await saveQuizHistory(finalScore, finalAnswersData);
  };

  const saveQuizHistory = async (finalScore: number, finalAnswers: any[]) => {
    if (!currentProfile) return;
    
    setIsSavingHistory(true);
    const finalScorePct = Math.round((finalScore / questions.length) * 100);

    if (!isSupabaseConfigured) {
      alert('Database tidak terhubung (isSupabaseConfigured = false). Cek Environment Variables di Vercel.');
      setTimeout(() => {
        setIsSavingHistory(false);
      }, 500);
      return;
    }

    try {
      const { error } = await supabase
        .from('practice_history')
        .insert({
          profile_id: currentProfile.id,
          session_id: sessionId || null,
          score: finalScorePct,
          total_questions: questions.length,
          answered_correctly: finalScore,
          answers_json: finalAnswers
        });
        
      if (error) {
        alert('Gagal menyimpan ke database! Error: ' + error.message);
        throw error;
      }
    } catch (err: any) {
      console.error('Error saving history to Supabase:', err);
      alert('Terjadi kesalahan saat menghubungi database: ' + (err.message || String(err)));
    } finally {
      setIsSavingHistory(false);
    }
  };

  // Render Result Screen with detailed question review
  if (quizFinished) {
    return <QuizResult questions={questions} answers={answers} />;
  }

  const qTranslated = globalLang === 'en' ? currentQuestion.question_en : currentQuestion.question_id;

  return (
    <>
      {/* Progress Bar Timer under navbar */}
      {!quizFinished && !isLoadingQuestions && questions.length > 0 && (
        <div className="fixed top-16 left-0 w-full h-1.5 bg-secondary z-40">
          <div 
            className={`h-full transition-all duration-1000 ease-linear ${timeLeft < 300 ? 'bg-destructive' : 'bg-primary'}`}
            style={{ width: `${(timeLeft / 3600) * 100}%` }}
          ></div>
        </div>
      )}
      
      <div className="flex flex-col justify-center min-h-[calc(100vh-70px)] bg-background py-8 px-4 sm:px-6 lg:px-8 glow-wrapper mt-1.5">
      <div className="max-w-3xl w-full mx-auto animate-fade-in relative z-10">
        
        {/* Quiz panel */}
        <div className="space-y-6">
          <Card className="bg-card border-border p-6 sm:p-8 space-y-6">
            
              {/* Header info / language toggles */}
              <div className="flex justify-between items-center pb-4 border-b border-border gap-4">
                <div className="space-y-0.5">
                  <span className={`px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider border rounded-full ${
                    currentQuestion.category.includes('Teori') 
                      ? 'bg-blue-500/10 border-blue-500/20 text-blue-600 dark:text-blue-400' 
                      : 'bg-orange-500/10 border-orange-500/20 text-orange-600 dark:text-orange-400'
                  }`}>
                    {getTranslatedCategory(currentQuestion.category)}
                  </span>
                  <p className="text-sm text-muted-foreground font-medium mt-1">
                    {t('questionNum')} {currentIdx + 1} {t('of')} {questions.length}
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  {/* Timer Text */}
                  <div className={`flex items-center gap-1.5 px-3 py-1 rounded-full border text-sm font-bold ${
                    timeLeft < 300 ? 'bg-destructive/10 border-destructive/20 text-destructive' : 'bg-secondary border-border text-foreground'
                  }`}>
                    <Timer className="w-4 h-4" />
                    <span className="w-12 text-center">{formatTime(timeLeft)}</span>
                  </div>

                  {/* Translation toggler */}
                  <button 
                    onClick={() => setShowTranslation(!showTranslation)} 
                    className={`flex items-center justify-center w-9 h-9 rounded-full transition-colors ${
                      showTranslation ? 'bg-primary text-primary-foreground shadow-sm' : 'bg-secondary text-muted-foreground hover:text-foreground border border-border'
                    }`}
                    title={showTranslation ? t('hide') : t('show')}
                  >
                    <Languages className="w-4 h-4" />
                  </button>
                  
                  {/* Sidebar toggler */}
                  <button 
                    onClick={() => setIsSidebarOpen(true)} 
                    className="flex items-center justify-center w-9 h-9 rounded-full transition-colors bg-secondary text-muted-foreground hover:text-foreground border border-border"
                    title="Menu Navigasi"
                  >
                    <Menu className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Question Text */}
              <div className="space-y-3">
                <h2 className="text-xl sm:text-2xl font-bold text-foreground leading-snug"><FuriganaText text={currentQuestion.question_jp} /></h2>
              {showTranslation && (
                <p className="text-base text-muted-foreground font-normal leading-relaxed italic">{qTranslated}</p>
              )}
              </div>

            {/* Diagram Image */}
            {currentQuestion.image_url && (
              <div className="border border-border rounded-xl overflow-hidden bg-white p-2 max-w-xs mx-auto shadow-sm">
                <Image 
                  src={currentQuestion.image_url} 
                  alt="Question Diagram" 
                  width={250} 
                  height={180} 
                  className="object-contain w-full h-auto animate-fade-in"
                  unoptimized
                />
              </div>
            )}
            
            {/* Options List */}
            <div className="space-y-3 pt-2">
              {currentQuestion.options_jp.map((optJp, index) => {
                const optTranslated = globalLang === 'en' 
                  ? currentQuestion.options_en[index] 
                  : currentQuestion.options_id[index];
                
                const isSelected = answers[currentIdx] === index;
                
                let borderClass = 'border-border bg-secondary/40 hover:bg-secondary/60';
                let textClass = 'text-foreground';
                
                if (isSelected) {
                  borderClass = 'border-primary bg-primary/10';
                  textClass = 'text-primary';
                }

                return (
                  <div 
                    key={index} 
                    onClick={() => handleSelectOption(index)}
                    className={`flex items-start gap-4 p-4 border rounded-xl cursor-pointer transition-all ${borderClass}`}
                  >
                    <div className="flex flex-col gap-1">
                      <span className={`text-base sm:text-lg font-bold ${textClass}`}><FuriganaText text={optJp} /></span>
                      {optTranslated && showTranslation && (
                        <span className="text-sm text-muted-foreground font-normal leading-relaxed italic">{optTranslated}</span>
                      )}
                      {currentQuestion.option_images && currentQuestion.option_images[index] && (
                        <div className="mt-2 border border-border rounded-lg overflow-hidden bg-secondary/30 p-2 max-w-[200px] shadow-sm">
                          <Image 
                            src={currentQuestion.option_images[index]} 
                            alt={`Option ${index + 1}`} 
                            width={200} 
                            height={150} 
                            className="object-contain w-full h-auto"
                            unoptimized
                          />
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Action Buttons */}
              <div className="pt-4 border-t border-border flex justify-between items-center">
                <Button 
                  onClick={handlePrev}
                  disabled={currentIdx === 0}
                  variant="outline"
                  className="font-bold px-4 h-10 flex items-center gap-1.5"
                >
                  <ArrowLeft className="w-4 h-4" />
                  {globalLang === 'en' ? 'Previous' : 'Sebelumnya'}
                </Button>

                {currentIdx + 1 < questions.length ? (
                  <Button 
                    onClick={handleNext}
                    className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-6 h-10 flex items-center gap-1.5"
                  >
                    {t('nextQuestion') || 'Selanjutnya'}
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                ) : (
                  <Button 
                    onClick={handleFinish}
                    className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-6 h-10 flex items-center gap-1.5"
                  >
                    {t('submitPractice') || 'Selesai'}
                  </Button>
                )}
            </div>
          </Card>
        </div>
      </div>
      </div>

      {/* Sidebar Overlay */}
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 transition-opacity" onClick={() => setIsSidebarOpen(false)} />
      )}
      
      {/* Sidebar Panel */}
      <div className={`fixed top-0 right-0 h-full w-72 bg-card border-l border-border z-50 transform transition-transform duration-300 ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'} flex flex-col shadow-2xl`}>
        <div className="p-4 border-b border-border flex justify-between items-center bg-secondary/30">
          <h3 className="font-bold text-foreground">Navigasi Soal</h3>
          <Button variant="ghost" size="icon" onClick={() => setIsSidebarOpen(false)} className="h-8 w-8 rounded-full">
            <X className="w-4 h-4" />
          </Button>
        </div>
        
        <div className="p-4 overflow-y-auto flex-1 grid grid-cols-5 gap-2 content-start">
          {questions.map((_, i) => (
            <button
              key={i}
              onClick={() => { setCurrentIdx(i); setIsSidebarOpen(false); }}
              className={`h-10 w-full rounded-md text-sm font-bold border transition-colors flex items-center justify-center ${
                currentIdx === i ? 'border-primary ring-2 ring-primary ring-offset-2 ring-offset-background bg-primary text-primary-foreground' :
                answers[i] !== null ? 'bg-primary/20 border-primary/30 text-primary' : 'bg-secondary border-border text-foreground hover:bg-secondary/80'
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
        
        <div className="p-4 border-t border-border bg-secondary/30">
          <Button className="w-full font-bold h-11" onClick={() => { setIsSidebarOpen(false); handleFinish(); }}>
            {t('submitPractice') || 'Selesai & Kumpulkan'}
          </Button>
        </div>
      </div>
    </>
  );
}

export default function PracticeQuiz({ params }: { params: { session_id: string } }) {
  return (
    <Suspense fallback={
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-70px)] bg-background">
        <div className="w-8 h-8 border-2 border-border border-t-primary rounded-full animate-spin"></div>
        <p className="mt-4 text-sm text-muted-foreground font-medium">Loading practice...</p>
      </div>
    }>
      <PracticeQuizContent sessionId={params.session_id} />
    </Suspense>
  );
}

