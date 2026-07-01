'use client';

import React, { useState, useEffect } from 'react';
import * as LucideIcons from 'lucide-react';
import { Kotoba } from '@/lib/kotoba';
import { FuriganaText } from '@/components/furigana';
import { useLanguage } from '@/context/language-context';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Check, X } from 'lucide-react';

interface FlashcardProps {
  kotoba: Kotoba;
  onKnow?: () => void;
  onForgot?: () => void;
}

export function Flashcard({ kotoba, onKnow, onForgot }: FlashcardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const { globalLang } = useLanguage();

  // Reset flipped state when kotoba changes (e.g. moving to next card)
  useEffect(() => {
    setIsFlipped(false);
  }, [kotoba.id]);

  // Dynamically get the Lucide icon
  const IconComponent = kotoba.iconName ? (LucideIcons as any)[kotoba.iconName] : LucideIcons.HelpCircle;

  return (
    <div 
      className="relative w-full max-w-sm mx-auto aspect-3/4 cursor-pointer perspective-1000 group"
    >
      <div 
        className={cn(
          "w-full h-full duration-500 preserve-3d relative transition-transform",
          isFlipped ? "rotate-y-180" : ""
        )}
      >
        {/* Front of card */}
        <Card 
          onClick={() => setIsFlipped(true)}
          className="absolute w-full h-full backface-hidden bg-card border-border flex flex-col items-center justify-center p-6 shadow-md hover:shadow-lg transition-shadow"
        >
          <div className="absolute top-4 right-4 bg-primary/10 text-primary p-3 rounded-full">
            {IconComponent && <IconComponent className="w-8 h-8" />}
          </div>
          
          <div className="flex-1 flex flex-col items-center justify-center space-y-6 w-full text-center">
            <h2 className="text-5xl md:text-6xl font-black text-foreground tracking-widest leading-normal py-4">
              <FuriganaText text={kotoba.kanji} />
            </h2>
            <div className="space-y-1">
              <p className="text-2xl font-semibold text-muted-foreground">{kotoba.hiragana || kotoba.romaji}</p>
              <p className="text-sm font-semibold text-primary/70 uppercase tracking-widest mt-6 animate-pulse">{globalLang === 'en' ? 'Tap to flip' : 'Ketuk untuk membalik'}</p>
            </div>
          </div>
        </Card>

        {/* Back of card */}
        <Card className="absolute w-full h-full backface-hidden rotate-y-180 bg-card border-2 border-primary/40 flex flex-col p-6 shadow-xl">
          <div 
            onClick={() => setIsFlipped(false)}
            className="flex-1 flex flex-col items-center justify-center space-y-6 w-full text-center"
          >
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-primary opacity-90 uppercase tracking-widest">{globalLang === 'en' ? 'Meaning' : 'Arti'}</h3>
              <p className="text-3xl md:text-4xl font-extrabold leading-tight text-foreground">
                {globalLang === 'en' ? kotoba.english : kotoba.indonesian}
              </p>
            </div>
            
            <div className="bg-primary/10 px-4 py-2 rounded-full mt-4 border border-primary/20">
              <span className="text-sm font-semibold tracking-wide text-primary">
                {kotoba.category}
              </span>
            </div>
          </div>

          <div className="mt-auto pt-6 w-full space-y-3">
            {onKnow && onForgot ? (
              <div className="flex items-center gap-3 w-full">
                <Button 
                  onClick={(e) => { e.stopPropagation(); onForgot(); }}
                  variant="outline" 
                  className="flex-1 h-12 border-destructive/30 bg-destructive/5 hover:bg-destructive/10 text-destructive hover:text-destructive"
                >
                  <X className="w-5 h-5 mr-1.5" />
                  {globalLang === 'en' ? 'Forgot' : 'Lupa'}
                </Button>
                <Button 
                  onClick={(e) => { e.stopPropagation(); onKnow(); }}
                  className="flex-1 h-12 bg-primary hover:bg-primary/90 text-primary-foreground shadow-md border-0"
                >
                  <Check className="w-5 h-5 mr-1.5" />
                  {globalLang === 'en' ? 'Know' : 'Hafal'}
                </Button>
              </div>
            ) : (
              <div className="text-center" onClick={() => setIsFlipped(false)}>
                <p className="text-sm font-semibold text-primary/70 uppercase tracking-widest">{globalLang === 'en' ? 'Tap to flip back' : 'Ketuk untuk membalik'}</p>
              </div>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
}
