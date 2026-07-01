'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, X, FileText } from 'lucide-react';
import { FuriganaText } from '@/components/furigana';
import { Question } from '@/types/quiz';
import { useLanguage } from '@/context/language-context';
import { useProfile } from '@/context/profile-context';

interface QuizResultProps {
  questions: Question[];
  answers: (number | null)[];
  isHistoryView?: boolean;
}

export function QuizResult({ questions, answers, isHistoryView = false }: QuizResultProps) {
  const router = useRouter();
  const { t, globalLang } = useLanguage();
  const { currentProfile } = useProfile();

  const scoreCount: number = answers.reduce((acc: number, ans, idx) => {
    return ans === questions[idx]?.correct_index ? acc + 1 : acc;
  }, 0);
  
  const finalScore = questions.length > 0 ? Math.round((scoreCount / questions.length) * 100) : 0;
  const passed = finalScore >= 80;

  const getTranslatedCategory = (cat: string) => {
    if (globalLang === 'id') {
      return cat;
    } else {
      if (cat.toLowerCase().includes('mesin')) return 'Engine';
      if (cat.toLowerCase().includes('sasis')) return 'Chassis';
      if (cat.toLowerCase().includes('kelistrikan')) return 'Electrical';
      if (cat.toLowerCase().includes('umum')) return 'General';
      return cat;
    }
  };

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
            {!isHistoryView && (
              <Button 
                onClick={() => window.location.reload()}
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold"
              >
                {t('practiceAgain')}
              </Button>
            )}
          </div>
          
          {!currentProfile && !isHistoryView && (
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
              if (!q) return null;
              
              const selected = answers[idx];
              const isCorrect = selected === q.correct_index;
              const ansRecord = { selected: selected !== null && selected !== undefined ? selected : -1, correct: isCorrect };
              
              return (
                <div key={q.id || idx} className="pt-8 first:pt-0 space-y-4">
                  <div className="flex justify-between items-start gap-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider bg-primary/10 border border-primary/20 rounded-full text-primary">
                          {getTranslatedCategory(q.category || '')}
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
                    {q.options_jp && q.options_jp.map((optJp, oIdx) => {
                      const optTranslated = globalLang === 'en' ? (q.options_en ? q.options_en[oIdx] : '') : (q.options_id ? q.options_id[oIdx] : '');
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
                    <p className="text-xs font-medium text-foreground leading-relaxed"><FuriganaText text={q.explanation_jp} /></p>
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
