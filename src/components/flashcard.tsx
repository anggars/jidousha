'use client';

import React, { useState } from 'react';
import * as LucideIcons from 'lucide-react';
import { Kotoba } from '@/lib/kotoba';
import { FuriganaText } from '@/components/furigana';
import { useLanguage } from '@/context/language-context';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface FlashcardProps {
  kotoba: Kotoba;
}

export function Flashcard({ kotoba }: FlashcardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const { globalLang } = useLanguage();

  // Dynamically get the Lucide icon
  const IconComponent = kotoba.iconName ? (LucideIcons as any)[kotoba.iconName] : LucideIcons.HelpCircle;

  return (
    <div 
      className="relative w-full max-w-sm mx-auto aspect-3/4 cursor-pointer perspective-1000"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div 
        className={cn(
          "w-full h-full duration-500 preserve-3d relative transition-transform",
          isFlipped ? "rotate-y-180" : ""
        )}
      >
        {/* Front of card */}
        <Card className="absolute w-full h-full backface-hidden bg-card border-border flex flex-col items-center justify-center p-6 shadow-md hover:shadow-lg transition-shadow">
          <div className="absolute top-4 right-4 bg-primary/10 text-primary p-3 rounded-full">
            {IconComponent && <IconComponent className="w-8 h-8" />}
          </div>
          
          <div className="flex-1 flex flex-col items-center justify-center space-y-6 w-full text-center">
            <h2 className="text-5xl md:text-6xl font-black text-foreground tracking-widest leading-normal py-4">
              <FuriganaText text={kotoba.kanji} />
            </h2>
            <div className="space-y-1">
              <p className="text-2xl font-semibold text-muted-foreground">{kotoba.hiragana || kotoba.romaji}</p>
              <p className="text-sm font-semibold text-primary/70 uppercase tracking-widest mt-6">Tap to flip</p>
            </div>
          </div>
        </Card>

        {/* Back of card */}
        <Card className="absolute w-full h-full backface-hidden rotate-y-180 bg-card border-2 border-primary/40 flex flex-col items-center justify-center p-6 shadow-xl">
          <div className="flex-1 flex flex-col items-center justify-center space-y-6 w-full text-center">
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
          <div className="mt-auto pt-4">
            <p className="text-sm font-semibold text-primary/70 uppercase tracking-widest">Tap to flip back</p>
          </div>
        </Card>
      </div>
    </div>
  );
}
