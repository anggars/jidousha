'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Search, BookOpen } from 'lucide-react';
import { KOTOBA_LIST } from '@/lib/kotoba';
import { FuriganaText } from '@/components/furigana';

export default function KotobaPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredKotoba = KOTOBA_LIST.filter(k => 
    k.kanji.toLowerCase().includes(searchQuery.toLowerCase()) ||
    k.romaji.toLowerCase().includes(searchQuery.toLowerCase()) ||
    k.indonesian.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
            Daftar Kotoba
          </h1>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Kumpulan kosa kata (Kotoba) penting untuk ujian Tokutei Ginou SSW Jidousha Seibi. 
            Gunakan fitur pencarian untuk menemukan kata dengan cepat.
          </p>
        </div>

        <Card className="bg-card border-border shadow-sm">
          <CardHeader className="pb-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input 
                type="text" 
                placeholder="Cari kanji, romaji, atau arti..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 bg-background border-border h-11"
              />
            </div>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="text-xs uppercase bg-secondary/50 text-muted-foreground">
                  <tr>
                    <th className="px-6 py-4 font-bold rounded-tl-lg">Kanji</th>
                    <th className="px-6 py-4 font-bold">Romaji</th>
                    <th className="px-6 py-4 font-bold">Arti (Bahasa Indonesia)</th>
                    <th className="px-6 py-4 font-bold rounded-tr-lg">Kategori</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {filteredKotoba.length > 0 ? (
                    filteredKotoba.map((kotoba) => (
                      <tr key={kotoba.id} className="hover:bg-secondary/20 transition-colors">
                        <td className="px-6 py-4 font-bold text-lg text-foreground">
                          {/* If they contain brackets, FuriganaText will parse them. 
                              For simple kanji without brackets, it renders normally. */}
                          <FuriganaText text={kotoba.kanji} />
                        </td>
                        <td className="px-6 py-4 text-muted-foreground font-medium">
                          {kotoba.romaji}
                        </td>
                        <td className="px-6 py-4 text-foreground">
                          {kotoba.indonesian}
                        </td>
                        <td className="px-6 py-4">
                          <span className="bg-secondary px-2.5 py-1 rounded text-xs font-semibold text-muted-foreground border border-border">
                            {kotoba.category}
                          </span>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={4} className="px-6 py-12 text-center text-muted-foreground">
                        Kosa kata tidak ditemukan.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
