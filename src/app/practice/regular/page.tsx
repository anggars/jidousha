'use client';

import React, { useEffect, useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useProfile } from '@/context/profile-context';
import { useLanguage } from '@/context/language-context';
import { supabase, isSupabaseConfigured } from '@/lib/supabase';
import Image from 'next/image';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, X, AlertCircle, ArrowLeft, ArrowRight, Languages, Activity, Eye, EyeOff, FileText } from 'lucide-react';

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
  options_id: q.options.map(opt => opt === 'O' ? 'Benar' : (opt === 'X' ? 'Salah' : opt)),
  options_en: q.options.map(opt => opt === 'O' ? 'True' : (opt === 'X' ? 'False' : opt)),
  option_images: q.optionImages || null,
  correct_index: q.correctAnswer,
  explanation_jp: q.explanationJp || '',
  explanation_id: q.explanationId || '',
  explanation_en: q.explanationEn || '',
  image_url: q.imageUrl || null,
  category: 'Latihan'
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
  
  // Translation Language State (default is English)
  const { globalLang, t } = useLanguage();
  const [showTranslation, setShowTranslation] = useState(false);

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
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-70px)] bg-black">
        <div className="w-8 h-8 border-2 border-zinc-800 border-t-blue-500 rounded-full animate-spin"></div>
        <p className="mt-4 text-sm text-zinc-400 font-medium">{t('generatingPractice')}</p>
      </div>
    );
  }

  if (questions.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-70px)] bg-black px-4 text-center">
        <AlertCircle className="w-12 h-12 text-red-500 mb-4" />
        <h2 className="text-xl font-bold text-zinc-100 mb-2">{t('noQuestions')}</h2>
        <p className="text-sm text-zinc-400 max-w-md mb-6">{t('noQuestionsDesc')}</p>
        <Button onClick={() => router.push('/dashboard')} className="bg-blue-600 hover:bg-blue-500 text-white font-semibold">
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
      <div className="min-h-[calc(100vh-70px)] bg-black py-8 px-4 sm:px-6 lg:px-8 glow-wrapper">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in relative z-10">
          
          <Card className="bg-zinc-950 border-zinc-800 p-8 text-center space-y-6">
            <div className="flex justify-center">
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold border uppercase tracking-widest ${
                passed 
                  ? 'bg-green-950/30 border-green-900/50 text-green-400' 
                  : 'bg-red-950/30 border-red-900/50 text-red-400'
              }`}>
                {passed ? 'Passed' : 'Needs Practice'}
              </span>
            </div>
            
            <div className="space-y-2">
              <h1 className="text-3xl font-extrabold text-zinc-100 tracking-tight">
                {t('sessionCompleted')}
              </h1>
              <p className="text-sm text-zinc-400">
                {t('sessionDesc')}
              </p>
            </div>

            <div className="flex justify-center py-4">
              <div className={`w-32 h-32 rounded-full border-4 flex flex-col items-center justify-center ${
                passed ? 'border-green-600 bg-green-950/10' : 'border-red-600 bg-red-950/10'
              }`}>
                <span className="text-3xl font-bold text-zinc-100">{finalScore}%</span>
                <span className="text-[10px] text-zinc-400 uppercase font-semibold">{t('finalScore')}</span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 max-w-md mx-auto py-2">
              <div className="bg-zinc-900/40 border border-zinc-900 rounded-lg p-3">
                <span className="block text-lg font-bold text-zinc-200">{questions.length}</span>
                <span className="text-[10px] text-zinc-500 uppercase">{t('totalQuestions')}</span>
              </div>
              <div className="bg-zinc-900/40 border border-zinc-900 rounded-lg p-3">
                <span className="block text-lg font-bold text-green-400">{scoreCount}</span>
                <span className="text-[10px] text-zinc-500 uppercase">{t('correct')}</span>
              </div>
              <div className="bg-zinc-900/40 border border-zinc-900 rounded-lg p-3">
                <span className="block text-lg font-bold text-red-400">{questions.length - scoreCount}</span>
                <span className="text-[10px] text-zinc-500 uppercase">{t('incorrect')}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              {currentProfile ? (
                <Button 
                  variant="outline" 
                  onClick={() => router.push('/dashboard')}
                  className="border-zinc-800 text-zinc-300 hover:text-white"
                >
                  {t('goToDashboard')}
                </Button>
              ) : (
                <Button 
                  variant="outline" 
                  onClick={() => window.open('https://t.me/Angga', '_blank')}
                  className="border-blue-800 text-blue-400 hover:text-blue-300 hover:bg-blue-950/30"
                >
                  {t('requestAccess')}
                </Button>
              )}
              <Button 
                onClick={() => window.location.reload()}
                className="bg-blue-600 hover:bg-blue-500 text-white font-bold"
              >
                {t('practiceAgain')}
              </Button>
            </div>
            
            {!currentProfile && (
              <div className="pt-2 text-sm text-zinc-400">
                {t('guestEndMsg')}
                <br/>
                {t('contactAdminMsg')}
              </div>
            )}
          </Card>

          {/* Detailed Question Review Section */}
          <Card className="bg-zinc-950 border-zinc-800 p-6 sm:p-8 space-y-6 animate-scale-in">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-4 border-b border-zinc-800">
              <div>
                <h2 className="text-xl font-bold text-zinc-100 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-blue-500" />
                  {t('detailedReview')}
                </h2>
                <p className="text-xs text-zinc-400">
                  {globalLang === 'en' ? 'Study the details and translations for each question to improve.' : 'Pelajari detail dan terjemahan setiap pertanyaan untuk meningkat.'}
                </p>
              </div>
              
              <div className="flex items-center gap-2 bg-zinc-950 border border-zinc-800 rounded-lg p-1">
                <span className="text-xs text-zinc-500 font-semibold px-2">Global Language: {globalLang.toUpperCase()}</span>
              </div>
            </div>

            <div className="divide-y divide-zinc-900 space-y-8">
              {questions.map((q, idx) => {
                const ansRecord = userAnswers.find(a => a.question_id === q.id) || { selected: -1, correct: false };
                const qTranslated = globalLang === 'en' ? q.question_en : q.question_id;
                
                return (
                  <div key={q.id} className="pt-8 first:pt-0 space-y-4">
                    <div className="flex justify-between items-start gap-4">
                      <div className="space-y-1">
                        <h4 className="text-xs font-bold text-zinc-500">QUESTION {idx + 1}</h4>
                        <p className="text-sm font-semibold text-zinc-100">{q.question_jp}</p>
                        <p className="text-xs text-zinc-450 italic font-normal leading-relaxed">{qTranslated}</p>
                      </div>
                      <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold shrink-0 ${
                        ansRecord.correct 
                          ? 'bg-green-950/20 text-green-400 border border-green-900/30' 
                          : 'bg-red-950/20 text-red-400 border border-red-900/30'
                      }`}>
                        {ansRecord.correct ? <Check className="w-3 h-3" /> : <X className="w-3 h-3" />}
                        {ansRecord.correct ? 'Correct' : 'Incorrect'}
                      </span>
                    </div>

                    {q.image_url && (
                      <div className="border border-zinc-700/50 rounded-xl overflow-hidden bg-zinc-200 p-2 max-w-xs shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                        <Image 
                          src={q.image_url} 
                          alt={`Question ${idx + 1}`} 
                          width={300} 
                          height={200} 
                          className="object-contain w-full h-auto mix-blend-multiply"
                          unoptimized
                        />
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {q.options_jp.map((optJp, oIdx) => {
                        const optTranslated = globalLang === 'en' ? q.options_en[oIdx] : q.options_id[oIdx];
                        const isCorrectOpt = oIdx === q.correct_index;
                        const isSelectedOpt = oIdx === ansRecord.selected;
                        
                        let borderStyle = 'border-zinc-900 bg-zinc-950/25';
                        let textStyle = 'text-zinc-400';
                        
                        if (isCorrectOpt) {
                          borderStyle = 'border-green-600/30 bg-green-950/10 text-green-300';
                          textStyle = 'text-green-300';
                        } else if (isSelectedOpt) {
                          borderStyle = 'border-red-600/30 bg-red-950/10 text-red-300';
                          textStyle = 'text-red-300';
                        }
                        
                        return (
                          <div key={oIdx} className={`p-3 border rounded-lg flex items-start gap-2.5 ${borderStyle}`}>
                            <span className="text-xs font-bold opacity-60">{String.fromCharCode(65 + oIdx)}.</span>
                            <div className="flex flex-col gap-0.5">
                              <span className="text-xs font-semibold text-zinc-300">{optJp}</span>
                              <span className="text-[10px] text-zinc-550 italic font-normal leading-relaxed">{optTranslated}</span>
                              {q.option_images && q.option_images[oIdx] && (
                                <div className="mt-2 border border-zinc-700/50 rounded-lg overflow-hidden bg-zinc-200 p-2 max-w-[200px] shadow-[0_0_10px_rgba(255,255,255,0.05)]">
                                  <Image 
                                    src={q.option_images[oIdx]} 
                                    alt={`Option ${oIdx + 1}`} 
                                    width={200} 
                                    height={150} 
                                    className="object-contain w-full h-auto mix-blend-multiply"
                                    unoptimized
                                  />
                                </div>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    <div className="bg-zinc-900/30 border border-zinc-900 p-4 rounded-xl space-y-1.5">
                      <span className="block text-[10px] font-bold uppercase tracking-wider text-zinc-500">{t('explanation')}</span>
                      <p className="text-xs font-medium text-zinc-300 leading-relaxed">{q.explanation_jp}</p>
                      <p className="text-[11px] text-zinc-400 italic leading-relaxed">
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
    <div className="min-h-[calc(100vh-70px)] bg-black py-8 px-4 sm:px-6 lg:px-8 glow-wrapper">
      <div className="max-w-3xl mx-auto animate-fade-in relative z-10">
        
        {/* Quiz panel */}
        <div className="space-y-6">
          <Card className="bg-zinc-950 border-zinc-800 p-6 sm:p-8 space-y-6">
            
            {/* Header info / language toggles */}
            <div className="flex justify-between items-center pb-4 border-b border-zinc-900 gap-4">
              <div className="space-y-0.5">
                <span className="px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-blue-950/40 border border-blue-900/40 rounded-full text-blue-400">
                  {currentQuestion.category}
                </span>
                <p className="text-xs text-zinc-500 font-medium mt-1">
                  {t('questionNum')} {currentIdx + 1} {t('of')} {questions.length}
                </p>
              </div>

              {/* Translation toggler */}
              <div className="flex items-center gap-1.5 bg-zinc-900 border border-zinc-800 rounded-lg p-0.5">
                <button 
                  onClick={() => setShowTranslation(true)} 
                  className={`flex items-center gap-1 px-2.5 py-1 rounded text-xs font-semibold transition-colors ${
                    showTranslation ? 'bg-blue-600 text-white' : 'text-zinc-400 hover:text-zinc-200'
                  }`}
                  title={t('show')}
                >
                  <Eye className="w-3.5 h-3.5" />
                  {t('show')}
                </button>
                <button 
                  onClick={() => setShowTranslation(false)} 
                  className={`flex items-center gap-1 px-2.5 py-1 rounded text-xs font-semibold transition-colors ${
                    !showTranslation ? 'bg-zinc-700 text-white' : 'text-zinc-400 hover:text-zinc-200'
                  }`}
                  title={t('hide')}
                >
                  <EyeOff className="w-3.5 h-3.5" />
                  {t('hide')}
                </button>
              </div>
            </div>

            {/* Question Text */}
            <div className="space-y-2">
              <h2 className="text-lg font-bold text-zinc-150 leading-snug">{currentQuestion.question_jp}</h2>
              {showTranslation && (
                <p className="text-sm text-zinc-400 font-normal leading-relaxed italic">{qTranslated}</p>
              )}
            </div>

            {/* Diagram Image */}
            {currentQuestion.image_url && (
              <div className="border border-zinc-700/50 rounded-xl overflow-hidden bg-zinc-200 p-2 max-w-xs mx-auto shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                <Image 
                  src={currentQuestion.image_url} 
                  alt="Question Diagram" 
                  width={250} 
                  height={180} 
                  className="object-contain w-full h-auto animate-fade-in mix-blend-multiply"
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
                
                let borderClass = 'border-zinc-800 bg-zinc-950/40 hover:bg-zinc-900/30';
                let textClass = 'text-zinc-300';
                
                if (isSelected) {
                  borderClass = 'border-blue-500 bg-blue-950/10';
                  textClass = 'text-blue-300';
                }

                return (
                  <div 
                    key={index} 
                    onClick={() => handleSelectOption(index)}
                    className={`flex items-start gap-4 p-4 border rounded-xl cursor-pointer transition-all ${borderClass}`}
                  >
                    <div className="flex flex-col gap-0.5">
                      <span className={`text-sm font-semibold ${textClass}`}>{optJp}</span>
                      {optTranslated && showTranslation && (
                        <span className="text-xs text-zinc-500 font-normal leading-relaxed italic">{optTranslated}</span>
                      )}
                      {currentQuestion.option_images && currentQuestion.option_images[index] && (
                        <div className="mt-2 border border-zinc-700/50 rounded-lg overflow-hidden bg-zinc-200 p-2 max-w-[200px] shadow-[0_0_10px_rgba(255,255,255,0.05)]">
                          <Image 
                            src={currentQuestion.option_images[index]} 
                            alt={`Option ${index + 1}`} 
                            width={200} 
                            height={150} 
                            className="object-contain w-full h-auto mix-blend-multiply"
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
              <div className="pt-4 border-t border-zinc-900 flex justify-end">
                <Button 
                  onClick={handleNext}
                  disabled={selectedAnswer === null}
                  className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-6 h-10 flex items-center gap-1.5"
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
  );
}

export default function PracticeQuiz() {
  return (
    <Suspense fallback={
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-70px)] bg-black">
        <div className="w-8 h-8 border-2 border-zinc-800 border-t-blue-500 rounded-full animate-spin"></div>
        <p className="mt-4 text-sm text-zinc-400 font-medium">Loading practice...</p>
      </div>
    }>
      <PracticeQuizContent />
    </Suspense>
  );
}

