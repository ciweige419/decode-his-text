'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { AlertTriangle, Search, Flame, HeartCrack, Menu, X, Sparkles } from 'lucide-react';
import { TOXIC_QUOTES } from '@/lib/data';
import ResultCard from '@/components/ResultCard';

export default function Home() {
  const [inputText, setInputText] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showWaitlist, setShowWaitlist] = useState(false);
  const [email, setEmail] = useState('');
  const [isJoined, setIsJoined] = useState(false);
  
  const resultRef = useRef<HTMLDivElement>(null);

  const handleAnalyze = async () => {
    if (!inputText.trim()) return;

    // GA4 event tracking
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'mvp_submit');
    }

    setIsAnalyzing(true);
    setResult(null);

    // 模拟分析过程
    setTimeout(() => {
      // 简单的关键词匹配模拟
      const match = TOXIC_QUOTES.find(item => 
        inputText.toLowerCase().includes(item.quote.toLowerCase().substring(0, 10))
      );

      if (match) {
        setResult(match);
      } else {
        // 通用回复
        setResult({
          translation: "He is likely testing your boundaries or keeping you on the hook. This phrasing is vague on purpose.",
          score: 3,
          roast: "This sounds low-effort. If you have to paste it into an AI decoder to understand it, that's your answer right there. Clarity is kindness, confusion is manipulation.",
          quote: inputText
        });
      }
      setIsAnalyzing(false);
      // 滚动到结果区域
      setTimeout(() => {
        resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 100);
    }, 1500);
  };

  const handleJoinWaitlist = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsJoined(true);
    setTimeout(() => {
      setShowWaitlist(false);
      setIsJoined(false);
      setEmail('');
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-gray-100 font-sans selection:bg-rose-500/30 selection:text-rose-200 overflow-x-hidden relative flex flex-col">
      
      {/* Background Ambience */}
      <div className="fixed top-[-10%] right-[-5%] w-[800px] h-[800px] bg-rose-600/10 rounded-full blur-[128px] pointer-events-none opacity-50"></div>
      <div className="fixed bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-orange-600/10 rounded-full blur-[128px] pointer-events-none opacity-50"></div>

      {/* Navbar */}
      <nav className="border-b border-white/5 bg-neutral-950/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 font-bold text-2xl tracking-tighter cursor-pointer">
            <div className="bg-gradient-to-br from-rose-600 to-orange-600 text-white p-2 rounded-xl shadow-lg shadow-rose-900/20">
              <AlertTriangle size={20} fill="currentColor" />
            </div>
            <span className="text-white hidden sm:inline">Decode<span className="text-rose-500">His</span>Text</span>
          </Link>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
            <Link href="/database" className="hover:text-white transition">Red Flags DB</Link>
            <button onClick={() => setShowWaitlist(true)} className="bg-white text-black px-5 py-2 rounded-full font-bold hover:bg-gray-200 transition">
              Get App
            </button>
          </div>

          <button className="md:hidden text-gray-300" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden border-t border-white/5 bg-neutral-900 p-4 space-y-4">
            <Link href="/database" className="block text-gray-400 hover:text-white">Red Flags DB</Link>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow w-full max-w-7xl mx-auto px-6 py-12 md:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column: Input */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-500/10 text-rose-400 text-xs font-bold border border-rose-500/20 uppercase tracking-wide">
                <Flame size={12} />
                <span>#1 AI Tool for Dating Safety</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white leading-[0.95]">
                Translate <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-orange-400">Mixed Signals</span> <br/>
                into Truth.
              </h1>
              <p className="text-gray-400 text-lg font-light max-w-lg">
                Stop screenshotting to the group chat. Our <b>Toxic Bestie AI</b> analyzes his texts to detect gaslighting and commitment issues instantly.
              </p>
            </div>

            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-rose-600 to-orange-600 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative bg-neutral-900 rounded-3xl p-2 border border-white/10 shadow-2xl">
                <textarea
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder='Paste the confusing text here... (e.g. "I feel safe with you but I am not ready")'
                  className="w-full bg-transparent text-white placeholder-neutral-600 p-6 min-h-[180px] resize-none focus:outline-none text-xl rounded-2xl font-medium"
                />
                <div className="flex justify-between items-center px-4 pb-4">
                  <span className="text-xs text-neutral-500 font-medium uppercase tracking-widest">AI Model Ready</span>
                  <button 
                    onClick={handleAnalyze}
                    disabled={isAnalyzing || !inputText}
                    className={`px-8 py-3.5 rounded-xl font-bold text-white flex items-center gap-2 transition-all active:scale-95 text-lg ${isAnalyzing || !inputText ? 'bg-neutral-800 text-neutral-600' : 'bg-gradient-to-r from-rose-600 to-orange-600 hover:shadow-lg'}`}
                  >
                    {isAnalyzing ? 'Analyzing...' : <>Decode Text <Sparkles size={18} /></>}
                  </button>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-6 text-neutral-500 text-sm font-medium pt-4">
              <div className="flex -space-x-2">
                 {[...Array(4)].map((_,i) => (
                   <div key={i} className="w-8 h-8 rounded-full bg-neutral-800 border-2 border-neutral-950 flex items-center justify-center text-xs">👀</div>
                 ))}
              </div>
              <p>Used by 12,000+ people this week</p>
            </div>
          </div>

          {/* Right Column: Results & Trending */}
          <div className="relative lg:pt-10">
            {result && !isAnalyzing ? (
              <div ref={resultRef}>
                <ResultCard
                  result={result}
                  onUnlockClick={() => setShowWaitlist(true)}
                />
              </div>
            ) : (
              <div className="space-y-6">
                 <div className="flex items-center justify-between">
                    <h3 className="text-neutral-400 font-bold uppercase tracking-widest text-sm">Trending Searches</h3>
                    <Link href="/database" className="text-xs text-rose-500 font-medium hover:underline">View All</Link>
                 </div>
                 <div className="grid sm:grid-cols-2 gap-4">
                    {TOXIC_QUOTES.slice(0, 6).map((item) => (
                      <Link 
                        href={`/decode/${item.slug}`}
                        key={item.slug}
                        className="bg-neutral-900/50 hover:bg-neutral-800 border border-white/5 hover:border-rose-500/30 p-5 rounded-2xl transition-all group block"
                      >
                         <p className="text-rose-100 font-medium line-clamp-2 mb-3 group-hover:text-white transition">"{item.quote}"</p>
                         <div className="flex items-center justify-between text-xs text-neutral-500">
                            <span>Read Analysis</span>
                            <span className="group-hover:translate-x-1 transition-transform">→</span>
                         </div>
                      </Link>
                    ))}
                 </div>
              </div>
            )}
          </div>
        </div>
      </main>

      <footer className="border-t border-white/5 py-12 bg-neutral-950 text-center text-neutral-600 text-sm">
        <p>&copy; 2025 DecodeHisText.com • For entertainment only.</p>
      </footer>

      {showWaitlist && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setShowWaitlist(false)}></div>
          <div className="bg-neutral-900 border border-white/10 rounded-3xl p-8 max-w-md w-full relative shadow-2xl animate-in zoom-in-95 duration-200">
            <button onClick={() => setShowWaitlist(false)} className="absolute top-4 right-4 text-gray-500 hover:text-white"><X size={20} /></button>
            {!isJoined ? (
              <div className="text-center space-y-6">
                <div className="mx-auto w-16 h-16 bg-rose-500/10 rounded-full flex items-center justify-center text-rose-500 mb-4"><Flame size={32} /></div>
                <div><h3 className="text-2xl font-black text-white mb-2">High Demand Alert!</h3><p className="text-gray-400">Servers at capacity. Join waitlist for <b>50% OFF</b>.</p></div>
                <form onSubmit={handleJoinWaitlist} className="space-y-3">
                  <input type="email" required placeholder="Enter your email..." value={email} onChange={(e) => setEmail(e.target.value)} className="w-full bg-neutral-950 border border-neutral-700 rounded-xl px-4 py-3 text-white focus:border-rose-500 focus:outline-none" />
                  <button type="submit" className="w-full bg-white hover:bg-neutral-200 text-black font-bold py-3 rounded-xl">Join Waitlist</button>
                </form>
              </div>
            ) : (
              <div className="text-center py-8 space-y-4">
                <div className="mx-auto w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center text-green-500"><CheckCircle2 size={32} /></div>
                <h3 className="text-2xl font-bold text-white">You're on the list!</h3>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}