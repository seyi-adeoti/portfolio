'use client';

import { useEffect, useState } from 'react';

interface TerminalProps {
  lines: string[];
  title?: string;
  typingSpeed?: number;
}

export function Terminal({ lines, title = 'terminal', typingSpeed = 30 }: TerminalProps) {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), 600);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!started || currentLine >= lines.length) return;

    const line = lines[currentLine];
    if (currentChar < line.length) {
      const timer = setTimeout(() => {
        setDisplayedLines((prev) => {
          const updated = [...prev];
          updated[currentLine] = line.slice(0, currentChar + 1);
          return updated;
        });
        setCurrentChar((c) => c + 1);
      }, typingSpeed);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setCurrentLine((l) => l + 1);
        setCurrentChar(0);
        setDisplayedLines((prev) => [...prev, '']);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [started, currentLine, currentChar, lines, typingSpeed]);

  return (
    <div className="overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0a0a0a] shadow-[0_20px_80px_rgba(0,0,0,0.5)]">
      {/* Title bar */}
      <div className="flex items-center gap-3 border-b border-white/[0.06] px-4 py-3">
        <div className="flex gap-1.5">
          <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
          <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        </div>
        <span className="text-xs text-slate-500 font-medium">{title}</span>
      </div>
      {/* Terminal content */}
      <div className="p-5 font-mono text-[0.82rem] leading-7">
        {displayedLines.map((line, i) => (
          <div key={i} className="flex">
            {line.startsWith('$') ? (
              <>
                <span className="text-accent mr-2 select-none">$</span>
                <span className="text-slate-200">{line.slice(2)}</span>
              </>
            ) : line.startsWith('//') ? (
              <span className="text-slate-600">{line}</span>
            ) : (
              <span className="text-slate-400">{line}</span>
            )}
            {i === currentLine && currentLine < lines.length && (
              <span className="ml-0.5 inline-block h-4 w-1.5 animate-pulse bg-accent/70 translate-y-1" />
            )}
          </div>
        ))}
        {currentLine >= lines.length && (
          <div className="flex mt-1">
            <span className="text-accent mr-2 select-none">$</span>
            <span className="inline-block h-4 w-1.5 animate-pulse bg-accent/70 translate-y-1" />
          </div>
        )}
      </div>
    </div>
  );
}
