import React from 'react';

export const FuriganaText: React.FC<{ text: string; className?: string }> = ({ text, className = '' }) => {
  if (!text) return null;

  // Regex matches Kanji/Katakana (including 々), optionally interleaved with Hiragana okurigana, followed by fullwidth or halfwidth parentheses containing furigana
  const regex = /([\u4E00-\u9FAF\u3005ァ-ヶー]+(?:[ぁ-ん]+[\u4E00-\u9FAF\u3005ァ-ヶー]+)*[ぁ-ん]*)[（(]([ぁ-んァ-ヶー]+)[）)]/g;
  
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  
  let match;
  while ((match = regex.exec(text)) !== null) {
    // Add text before the match
    if (match.index > lastIndex) {
      parts.push(<span key={`text-${lastIndex}`}>{text.slice(lastIndex, match.index)}</span>);
    }
    
    // Add the ruby element
    parts.push(
      <ruby key={`ruby-${match.index}`} className="group relative leading-normal">
        {match[1]}
        <rt className="text-[0.6em] text-muted-foreground">{match[2]}</rt>
      </ruby>
    );
    
    lastIndex = regex.lastIndex;
  }
  
  // Add remaining text
  if (lastIndex < text.length) {
    parts.push(<span key={`text-${lastIndex}`}>{text.slice(lastIndex)}</span>);
  }

  return <span className={`inline-block ${className}`}>{parts.length > 0 ? parts : text}</span>;
};
