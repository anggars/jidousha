'use client';

import React, { useEffect, useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useProfile } from '@/context/profile-context';
import { useLanguage } from '@/context/language-context';
import { supabase, isSupabaseConfigured } from '@/lib/supabase';
import Image from 'next/image';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, X, AlertCircle, ArrowLeft, ArrowRight, Languages, Activity, Timer, FileText } from 'lucide-react';
import { FuriganaText } from '@/components/furigana';

import { REGULAR_QUESTIONS as ALL_QUESTIONS } from '@/lib/questions-regular';

interface Question {
  id: number;
  question_jp: string;
  question_id: string;
  question_en: string;
  options_jp: string[];
  options_id: string[];
  options_en: string[];
  option_images: string[] | null;
  correct_index: number;
  explanation_jp: string;
  explanation_id: string;
  explanation_en: string;
  image_url: string | null;
  category: string;
}

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
  category: idx < 30 ? 'Teori (Gakka)' : 'Praktek (Jitsugi)'
}));

export function PracticeQuizContent() {
  const { currentProfile, isLoading: isProfileLoading } = useProfile();
  const router = useRouter();
  const searchParams = useSearchParams();

  const categoryParam = searchParams.get('category') || 'Semua';

  const [questions, setQuestions] = useState<Question[]>([]);
  const [isLoadingQuestions, setIsLoadingQuestions] = useState(true);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [scoreCount, setScoreCount] = useState(0);
  const [userAnswers, setUserAnswers] = useState<{ question_id: number; selected: number; correct: boolean }[]>([]);
  const [isSavingHistory, setIsSavingHistory] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60 * 60); // 60 minutes in seconds
  
  // Translation Language State (default is English)
  const { globalLang, t } = useLanguage();
  const [showTranslation, setShowTranslation] = useState(false);

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
          setQuizFinished(true);
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
    setSelectedAnswer(index);
  };

  const handleNext = async () => {
    if (selectedAnswer === null) return;

    const isCorrect = selectedAnswer === currentQuestion.correct_index;
    const newScore = isCorrect ? scoreCount + 1 : scoreCount;
    
    if (isCorrect) {
      setScoreCount(newScore);
    }

    const newAnswers = [
      ...userAnswers,
      {
        question_id: currentQuestion.id,
        selected: selectedAnswer,
        correct: isCorrect
      }
    ];
    setUserAnswers(newAnswers);

    if (currentIdx + 1 < questions.length) {
      setCurrentIdx(prev => prev + 1);
      setSelectedAnswer(null);
    } else {
      setQuizFinished(true);
      await saveQuizHistory(newScore, newAnswers);
    }
  };

  const saveQuizHistory = async (finalScore: number, finalAnswers: any[]) => {
    if (!currentProfile) return;
    
    setIsSavingHistory(true);
    const finalScorePct = Math.round((finalScore / questions.length) * 100);

    if (!isSupabaseConfigured) {
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
          score: finalScorePct,
          total_questions: questions.length,
          answered_correctly: finalScore,
          answers_json: finalAnswers
        });
        
      if (error) {
        throw error;
      }
    } catch (err) {
      console.error('Error saving history to Supabase:', err);
    } finally {
      setIsSavingHistory(false);
    }
  };

  // Render Result Screen with detailed question review
  if (quizFinished) {
    const finalScore = Math.round((scoreCount / questions.length) * 100);
    const passed = finalScore >= 80;

    return (
      <div className="flex flex-col justify-center min-h-[calc(100vh-70px)] bg-background py-8 px-4 sm:px-6 lg:px-8 glow-wrapper">
        <div className="max-w-4xl w-full mx-auto space-y-8 animate-fade-in relative z-10">
          
          <Card className="bg-card border-border p-8 text-center space-y-6">
            <div className="flex justify-center">
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold border uppercase tracking-widest ${
                passed 
                  ? 'bg-green-500/10 border-green-500/20 text-green-500 dark:text-green-400' 
                  : 'bg-destructive/10 border-destructive/20 text-destructive dark:text-red-400'
              }`}>
                {passed ? 'Passed' : 'Needs Practice'}
              </span>
            </div>
            
            <div className="space-y-2">
              <h1 className="text-3xl font-extrabold text-foreground tracking-tight">
                {t('sessionCompleted')}
              </h1>
              <p className="text-sm text-muted-foreground">
                {t('sessionDesc')}
              </p>
            </div>

            <div className="flex justify-center py-4">
              <div className={`w-32 h-32 rounded-full border-4 flex flex-col items-center justify-center ${
                passed ? 'border-green-500 bg-green-500/5' : 'border-destructive bg-destructive/5'
              }`}>
                <span className="text-3xl font-bold text-foreground">{finalScore}%</span>
                <span className="text-[10px] text-muted-foreground uppercase font-semibold">{t('finalScore')}</span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 max-w-md mx-auto py-2">
              <div className="bg-secondary/50 border border-border rounded-lg p-3">
                <span className="block text-lg font-bold text-foreground">{questions.length}</span>
                <span className="text-[10px] text-muted-foreground uppercase">{t('totalQuestions')}</span>
              </div>
              <div className="bg-secondary/50 border border-border rounded-lg p-3">
                <span className="block text-lg font-bold text-green-500 dark:text-green-400">{scoreCount}</span>
                <span className="text-[10px] text-muted-foreground uppercase">{t('correct')}</span>
              </div>
              <div className="bg-secondary/50 border border-border rounded-lg p-3">
                <span className="block text-lg font-bold text-destructive dark:text-red-400">{questions.length - scoreCount}</span>
                <span className="text-[10px] text-muted-foreground uppercase">{t('incorrect')}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              {currentProfile ? (
                <Button 
                  variant="outline" 
                  onClick={() => router.push('/dashboard')}
                  className="border-border text-foreground hover:bg-secondary"
                >
                  {t('goToDashboard')}
                </Button>
              ) : (
                <Button 
                  variant="outline" 
                  onClick={() => window.location.href = 'mailto:anggarnts@gmail.com'}
                  className="border-primary/50 text-primary hover:bg-primary/10"
                >
                  {t('requestAccess')}
                </Button>
              )}
              <Button 
                onClick={() => window.location.reload()}
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold"
              >
                {t('practiceAgain')}
              </Button>
            </div>
            
            {!currentProfile && (
              <div className="pt-2 text-sm text-muted-foreground">
                {t('guestEndMsg')}
                <br/>
                {t('contactAdminMsg')}
              </div>
            )}
          </Card>

          {/* Detailed Question Review Section */}
          <Card className="bg-card border-border p-6 sm:p-8 space-y-6 animate-scale-in">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-4 border-b border-border">
              <div>
                <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
                  <FileText className="w-5 h-5 text-primary" />
                  {t('detailedReview')}
                </h2>
                <p className="text-xs text-muted-foreground">
                  {globalLang === 'en' ? 'Study the details and translations for each question to improve.' : 'Pelajari detail dan terjemahan setiap pertanyaan untuk meningkat.'}
                </p>
              </div>
              
              <div className="flex items-center gap-2 bg-secondary border border-border rounded-lg p-1">
                <span className="text-xs text-muted-foreground font-semibold px-2">
                  {globalLang === 'en' ? 'Language' : 'Bahasa'}: {globalLang.toUpperCase()}
                </span>
              </div>
            </div>

            <div className="divide-y divide-border space-y-8">
              {questions.map((q, idx) => {
                const ansRecord = userAnswers.find(a => a.question_id === q.id) || { selected: -1, correct: false };
                const qTranslated = globalLang === 'en' ? q.question_en : q.question_id;
                
                return (
                  <div key={q.id} className="pt-8 first:pt-0 space-y-4">
                    <div className="flex justify-between items-start gap-4">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider bg-primary/10 border border-primary/20 rounded-full text-primary">
                            {getTranslatedCategory(q.category)}
                          </span>
                          <h4 className="text-xs font-bold text-muted-foreground">{t('questionNum').toUpperCase()} {idx + 1}</h4>
                        </div>
                        <h3 className="font-bold text-base text-foreground mb-1"><FuriganaText text={q.question_jp} /></h3>
                        <p className="text-sm text-muted-foreground italic">{globalLang === 'en' ? q.question_en : q.question_id}</p>
                      </div>
                      <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold shrink-0 ${
                        ansRecord.correct 
                          ? 'bg-green-500/10 text-green-600 dark:text-green-400 border border-green-500/20' 
                          : 'bg-destructive/10 text-destructive dark:text-red-400 border border-destructive/20'
                      }`}>
                        {ansRecord.correct ? <Check className="w-3 h-3" /> : <X className="w-3 h-3" />}
                        {ansRecord.correct ? 'Correct' : 'Incorrect'}
                      </span>
                    </div>

                    {q.image_url && (
                      <div className="border border-border/50 rounded-xl overflow-hidden bg-white p-2 max-w-xs shadow-sm">
                        <Image 
                          src={q.image_url} 
                          alt={`Question ${idx + 1}`} 
                          width={300} 
                          height={200} 
                          className="object-contain w-full h-auto"
                          unoptimized
                        />
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {q.options_jp.map((optJp, oIdx) => {
                        const optTranslated = globalLang === 'en' ? q.options_en[oIdx] : q.options_id[oIdx];
                        const isCorrectOpt = oIdx === q.correct_index;
                        const isSelectedOpt = oIdx === ansRecord.selected;
                        
                        let borderStyle = 'border-border bg-secondary/30';
                        let textStyle = 'text-muted-foreground';
                        
                        if (isCorrectOpt) {
                          borderStyle = 'border-green-500/30 bg-green-500/10 text-green-600 dark:text-green-400';
                          textStyle = 'text-green-600 dark:text-green-400';
                        } else if (isSelectedOpt) {
                          borderStyle = 'border-destructive/30 bg-destructive/10 text-destructive dark:text-red-400';
                          textStyle = 'text-destructive dark:text-red-400';
                        }
                        
                        return (
                          <div key={oIdx} className={`p-3 border rounded-lg flex items-start gap-2.5 ${borderStyle}`}>
                            <span className="text-xs font-bold opacity-60">{String.fromCharCode(65 + oIdx)}.</span>
                            <div className="flex flex-col gap-0.5">
                              <span className={`text-sm font-bold ${textStyle}`}><FuriganaText text={optJp} /></span>
                              <span className="text-xs text-muted-foreground italic font-normal leading-relaxed">{optTranslated}</span>
                              {q.option_images && q.option_images[oIdx] && (
                                <div className="mt-2 border border-border rounded-lg overflow-hidden bg-white p-2 max-w-[200px] shadow-sm">
                                  <Image 
                                    src={q.option_images[oIdx]} 
                                    alt={`Option ${oIdx + 1}`} 
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

                    <div className="bg-secondary/50 border border-border p-4 rounded-xl space-y-1.5">
                      <span className="block text-[10px] font-bold uppercase tracking-wider text-muted-foreground">{t('explanation')}</span>
                      <p className="text-xs font-medium text-foreground leading-relaxed">{q.explanation_jp}</p>
                      <p className="text-[11px] text-muted-foreground italic leading-relaxed">
                        {globalLang === 'en' ? q.explanation_en : q.explanation_id}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Card>
        </div>
      </div>
    );
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
                
                const isSelected = selectedAnswer === index;
                
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
              <div className="pt-4 border-t border-border flex justify-end">
                <Button 
                  onClick={handleNext}
                  disabled={selectedAnswer === null}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-6 h-10 flex items-center gap-1.5"
                >
                  {currentIdx + 1 < questions.length ? (
                    <>
                      {t('nextQuestion')}
                      <ArrowRight className="w-4 h-4" />
                    </>
                  ) : (
                    t('submitPractice')
                  )}
                </Button>
            </div>
          </Card>
        </div>
      </div>
      </div>
    </>
  );
}

export default function PracticeQuiz() {
  return (
    <Suspense fallback={
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-70px)] bg-background">
        <div className="w-8 h-8 border-2 border-border border-t-primary rounded-full animate-spin"></div>
        <p className="mt-4 text-sm text-muted-foreground font-medium">Loading practice...</p>
      </div>
    }>
      <PracticeQuizContent />
    </Suspense>
  );
}

