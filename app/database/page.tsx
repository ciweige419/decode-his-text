import Link from 'next/link';
import { TOXIC_QUOTES } from '@/lib/data';
import { ArrowLeft, Database } from 'lucide-react';

export const metadata = {
  title: 'Red Flag Database - DecodeHisText',
  description: 'The complete directory of toxic dating phrases and their meanings.',
};

export default function DatabasePage() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white p-6 md:p-20 font-sans">
      <div className="max-w-4xl mx-auto space-y-10">
        
        {/* 返回首页 */}
        <Link href="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-white transition">
          <ArrowLeft size={20} /> Back to Tool
        </Link>

        {/* 标题 */}
        <div className="flex items-center gap-4 border-b border-white/10 pb-8">
           <div className="p-4 bg-rose-600 rounded-2xl shadow-lg shadow-rose-900/20">
             <Database size={32} />
           </div>
           <div>
             <h1 className="text-4xl md:text-5xl font-black tracking-tight">Dating Red Flag Phrases Explained</h1>
             <p className="text-gray-400 mt-2"> A database of common texts and phrases men use that often signal mixed intentions, emotional unavailability, or commitment issues.</p>
           </div>
        </div>

        <section>
  <p>
    This page contains a curated database of common dating phrases frequently used
    in text messages and conversations. These phrases often appear harmless on the
    surface, but can signal deeper patterns such as mixed intentions, emotional
    unavailability, avoidance of commitment, or low relationship investment.
  </p>

  <p>
    Each phrase in this database is explained in a clear and practical way, focusing
    on behavioral meaning rather than guesswork. The goal is to help readers
    understand what these messages often imply in real dating contexts, so they can
    make more informed emotional and relational decisions.
  </p>
</section>


        {/* 列表区域 */}
        <div className="grid gap-4">
          {TOXIC_QUOTES.map((item) => (
            <Link 
              key={item.slug} 
              href={`/analyze/${item.slug}`}
              className="group flex items-center justify-between p-6 bg-neutral-900/50 border border-white/5 hover:border-rose-500/50 hover:bg-neutral-900 rounded-2xl transition-all"
            >
              <div className="space-y-2">
                <p className="text-lg md:text-xl font-bold text-gray-200 group-hover:text-white transition">"{item.quote}"</p>
                <div className="flex flex-wrap gap-2">
                  {item.keywords.map(k => (
                    <span key={k} className="text-xs px-2 py-1 rounded bg-white/5 text-gray-500 uppercase tracking-wider font-medium">{k}</span>
                  ))}
                </div>
              </div>
              <div className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-white/5 group-hover:bg-rose-600 text-gray-400 group-hover:text-white transition">
                <ArrowLeft className="rotate-180" size={20} />
              </div>
            </Link>
          ))}
        </div>

        {/* 底部提示 */}
        <div className="text-center pt-10 text-gray-500 text-sm">
          Updated for 2025 Dating Market • <Link href="/" className="underline hover:text-rose-500">Submit a new phrase</Link>
        </div>

      </div>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2.5 font-bold text-xl tracking-tighter mb-4">
                <div className="bg-gradient-to-br from-rose-600 to-orange-600 text-white p-2 rounded-xl shadow-lg shadow-rose-900/20">
                  <Database size={16} fill="currentColor" />
                </div>
                <span className="text-white">Decode<span className="text-rose-500">His</span>Text</span>
              </div>
              <p className="text-neutral-500 text-sm">
                AI-powered relationship insights for healthier communication dynamics.
              </p>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/database" className="text-neutral-500 hover:text-white transition">
                    Red Flags Database
                  </Link>
                </li>
                <li>
                  <Link href="/about-us" className="text-neutral-500 hover:text-white transition">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact-us" className="text-neutral-500 hover:text-white transition">
                    Contact Support
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/privacy-policy" className="text-neutral-500 hover:text-white transition">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms-of-service" className="text-neutral-500 hover:text-white transition">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/5 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-neutral-600 text-sm text-center md:text-left">
                &copy; 2025 DecodeHisText.com • For entertainment and educational purposes only.
              </p>
              <div className="flex items-center gap-6 text-neutral-600 text-sm">
                <span>GDPR & CCPA Compliant</span>
                <span>•</span>
                <span>Privacy-First</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

