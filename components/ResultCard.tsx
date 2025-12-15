'use client';

import React from 'react';
import { AlertTriangle, MessageCircle, Share2, Sparkles, Lock, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

interface ResultCardProps {
  result: {
    score: number;
    translation: string;
    roast: string;
    quote: string;
  };
  onUnlockClick?: () => void;
  showShareButton?: boolean;
  isSeoPage?: boolean;
}

export default function ResultCard({ result, onUnlockClick, showShareButton = true, isSeoPage = false }: ResultCardProps) {
  return (
    <div className="bg-neutral-900 border border-white/10 rounded-3xl p-8 shadow-2xl animate-in fade-in slide-in-from-bottom-8 duration-500 ring-1 ring-rose-500/20">
      <div className="flex items-center justify-between mb-8">
         <div>
           <p className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-1">Red Flag Score</p>
           <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <div key={i} className={`h-2 w-8 rounded-full ${i < result.score ? (result.score >= 4 ? 'bg-red-500' : 'bg-yellow-500') : 'bg-neutral-800'}`}></div>
              ))}
              <span className={`ml-3 text-2xl font-black ${result.score >= 4 ? 'text-red-500' : 'text-yellow-500'}`}>{result.score}/5</span>
           </div>
         </div>
         {showShareButton && (
           <div className="bg-neutral-800 p-3 rounded-full">
             <Share2 size={20} className="text-neutral-400 hover:text-white cursor-pointer transition"/>
           </div>
         )}
      </div>

      <div className="space-y-8">
        <div className="pl-6 border-l-2 border-rose-500/30">
           <p className="text-xs font-bold text-rose-400 uppercase tracking-wider mb-2">Translation</p>
           <p className="text-2xl text-white font-medium">"{result.translation}"</p>
        </div>

        <div className="bg-neutral-800/50 rounded-2xl p-6 border border-white/5">
          <p className="text-xs font-bold text-orange-400 uppercase tracking-wider mb-3 flex items-center gap-2">
             <MessageCircle size={14}/> The Roast
          </p>
          <p className="text-neutral-300 font-light text-lg">{result.roast}</p>
        </div>

        {/* PREMIUM STRATEGY KIT SECTION */}
        <div className="bg-gradient-to-br from-purple-900/20 to-rose-900/20 rounded-2xl p-6 border border-purple-500/20">
          <p className="text-xs font-bold text-purple-400 uppercase tracking-wider mb-6 flex items-center gap-2">
             <Sparkles size={14}/> Premium Strategy Kit
          </p>

          {/* Strategy Options - Visible Titles + Blurred Content */}
          <div className="space-y-6 mb-8">
            {[
              {
                title: "Option 1: The High-Value Frame",
                content: "This strategic response positions you as a high-value individual who refuses to engage in ambiguity. It communicates that you have clear boundaries and standards, making it clear that vague communication is unacceptable..."
              },
              {
                title: "Option 2: Mirroring Power Reset",
                content: "This psychological technique mirrors their energy back to them, forcing them to confront their own communication patterns. It creates a powerful dynamic where they must either step up or step away..."
              },
              {
                title: "Option 3: Low-Demand Termination",
                content: "This approach demonstrates complete emotional independence and confidence. It shows that their vague messaging has no impact on your state of mind, making you appear more attractive and less needy..."
              }
            ].map((option, index) => (
              <div key={index} className="relative">
                {/* Visible Title */}
                <h4 className="text-white font-bold text-lg mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 bg-gradient-to-r from-purple-600 to-rose-600 rounded-full flex items-center justify-center text-xs text-white font-black">
                    {index + 1}
                  </span>
                  {option.title}
                </h4>

                {/* Blurred Content */}
                <div className="p-4 bg-neutral-900/50 rounded-xl border border-white/5 relative overflow-hidden">
                  <p className="text-neutral-300 font-medium leading-relaxed" style={{ filter: 'blur(6px)' }}>
                    {option.content}
                  </p>

                  {/* Individual Option Lock Overlay */}
                  <div className="absolute inset-0 bg-black/40 rounded-xl flex items-center justify-center">
                    <Lock size={16} className="text-white/60" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Central CTA Section */}
          <div className="bg-neutral-900/50 rounded-2xl p-6 border border-white/10 text-center relative overflow-hidden">
            {/* Light overlay background */}
            <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px]"></div>

            {/* Content */}
            <div className="relative z-10">
              <Lock size={28} className="text-white/80 mx-auto mb-3" />
              {isSeoPage ? (
                <Link
                  href="/"
                  className="inline-block bg-gradient-to-r from-purple-600 to-rose-600 hover:from-purple-700 hover:to-rose-700 text-white font-bold px-8 py-3 rounded-xl text-lg transition-all transform hover:scale-105 active:scale-95 shadow-xl mb-4"
                >
                  Unlock Full Strategy Kit ($2.99)
                </Link>
              ) : (
                <button
                  onClick={onUnlockClick}
                  className="bg-gradient-to-r from-purple-600 to-rose-600 hover:from-purple-700 hover:to-rose-700 text-white font-bold px-8 py-3 rounded-xl text-lg transition-all transform hover:scale-105 active:scale-95 shadow-xl mb-4"
                >
                  Unlock Full Strategy Kit ($2.99)
                </button>
              )}

              {/* Value Props */}
              <div className="space-y-2 text-left max-w-xs mx-auto">
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle2 size={16} className="text-green-400" />
                  <span className="text-white">3 Strategic Replies (Copy-Paste)</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle2 size={16} className="text-green-400" />
                  <span className="text-white">Psychological Power Analysis</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle2 size={16} className="text-green-400" />
                  <span className="text-white">His Likely Reaction Forecast</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}