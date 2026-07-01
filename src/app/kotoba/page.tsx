'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Search, BookOpen, LayoutList, GalleryHorizontalEnd, ChevronLeft, ChevronRight } from 'lucide-react';
import { KOTOBA_LIST } from '@/lib/kotoba';
import { FuriganaText } from '@/components/furigana';
import { useLanguage } from '@/context/language-context';
import { Flashcard } from '@/components/flashcard';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const categoryMapEN: Record<string, string> = {
  "Umum": "General",
  "Suku Cadang": "Parts",
  "Tindakan": "Action",
  "Alat": "Tool",
  "Cairan": "Fluid",
  "Kondisi": "Condition",
  "Kata Kerja": "Verb",
  "Kata Keterangan": "Adverb"
};

export default function KotobaPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'table' | 'flashcard'>('flashcard');
  const [currentIndex, setCurrentIndex] = useState(0);
  const { t, globalLang } = useLanguage();

  const filteredKotoba = KOTOBA_LIST.filter(k => {
    const meaning = globalLang === 'en' ? k.english : k.indonesian;
    return (
      k.kanji.toLowerCase().includes(searchQuery.toLowerCase()) ||
      k.romaji.toLowerCase().includes(searchQuery.toLowerCase()) ||
      meaning.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  // Ensure index is within bounds if search changes
  React.useEffect(() => {
    setCurrentIndex(0);
  }, [searchQuery]);

  const handleNext = () => {
    if (currentIndex < filteredKotoba.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const translateCategory = (cat?: string) => {
    if (!cat) return '';
    return globalLang === 'en' ? (categoryMapEN[cat] || cat) : cat;
  };

  return (
    <div className="min-h-[calc(100vh-70px)] bg-background py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8 animate-fade-in relative z-10">
        
        <div className="text-center space-y-4">
          <div className="flex justify-center mb-2">
            <div className="bg-primary/10 p-3 rounded-full border border-primary/20">
              <BookOpen className="w-8 h-8 text-primary" />
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground">
            {t('kotobaList')}
          </h1>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            {t('kotobaDesc')}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between bg-card p-4 rounded-xl border border-border shadow-sm">
          <div className="relative w-full sm:max-w-xs">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input 
              type="text" 
              placeholder={t('searchKotoba')} 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 bg-background border-border h-10 w-full"
            />
          </div>
          <div className="flex bg-secondary p-1 rounded-lg">
            <button
              onClick={() => setViewMode('flashcard')}
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-md text-sm font-semibold transition-all",
                viewMode === 'flashcard' ? "bg-background text-foreground shadow" : "text-muted-foreground hover:text-foreground"
              )}
            >
              <GalleryHorizontalEnd className="w-4 h-4" />
              Flashcard
            </button>
            <button
              onClick={() => setViewMode('table')}
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-md text-sm font-semibold transition-all",
                viewMode === 'table' ? "bg-background text-foreground shadow" : "text-muted-foreground hover:text-foreground"
              )}
            >
              <LayoutList className="w-4 h-4" />
              Table
            </button>
          </div>
        </div>

        {filteredKotoba.length === 0 ? (
          <Card className="bg-card border-border shadow-sm p-12 text-center text-muted-foreground">
            {t('noKotobaFound')}
          </Card>
        ) : viewMode === 'flashcard' ? (
          <div className="space-y-6 animate-scale-in py-8">
            <Flashcard kotoba={{ ...filteredKotoba[currentIndex], category: translateCategory(filteredKotoba[currentIndex].category) }} />
            
            <div className="flex items-center justify-center gap-6 mt-8">
              <Button 
                variant="outline" 
                size="icon" 
                onClick={handlePrev} 
                disabled={currentIndex === 0}
                className="rounded-full w-12 h-12 border-2"
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>
              
              <div className="text-sm font-semibold text-muted-foreground min-w-20 text-center">
                {currentIndex + 1} / {filteredKotoba.length}
              </div>

              <Button 
                variant="outline" 
                size="icon" 
                onClick={handleNext} 
                disabled={currentIndex === filteredKotoba.length - 1}
                className="rounded-full w-12 h-12 border-2"
              >
                <ChevronRight className="w-6 h-6" />
              </Button>
            </div>
          </div>
        ) : (
          <Card className="bg-card border-border shadow-sm animate-fade-in">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="text-xs uppercase bg-secondary/50 text-muted-foreground">
                    <tr>
                      <th className="px-6 py-4 font-bold rounded-tl-lg">Kanji</th>
                      <th className="px-6 py-4 font-bold">Romaji</th>
                      <th className="px-6 py-4 font-bold">{t('meaning')}</th>
                      <th className="px-6 py-4 font-bold rounded-tr-lg">{t('category')}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {filteredKotoba.map((kotoba) => (
                      <tr key={kotoba.id} className="hover:bg-secondary/20 transition-colors">
                        <td className="px-6 py-4 font-bold text-lg text-foreground">
                          <FuriganaText text={kotoba.kanji} />
                        </td>
                        <td className="px-6 py-4 text-muted-foreground font-medium">
                          {kotoba.romaji}
                        </td>
                        <td className="px-6 py-4 text-foreground">
                          {globalLang === 'en' ? kotoba.english : kotoba.indonesian}
                        </td>
                        <td className="px-6 py-4">
                          <span className="bg-secondary px-2.5 py-1 rounded text-xs font-semibold text-muted-foreground border border-border whitespace-nowrap">
                            {translateCategory(kotoba.category)}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
