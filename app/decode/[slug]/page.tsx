import { getQuoteBySlug, TOXIC_QUOTES } from '@/lib/data';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, AlertTriangle } from 'lucide-react';

// 1. 自动生成 SEO 标题
export async function generateMetadata(props: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const params = await props.params;
  const quote = getQuoteBySlug(params.slug);
  if (!quote) return {};
  
  return {
    title: `Meaning of "${quote.quote}" - Red Flag Analysis (2025)`,
    description: `When he says "${quote.quote}", it usually means: ${quote.translation}. Red Flag Score: ${quote.score}/5.`,
  };
}

// 2. 静态生成所有页面
export async function generateStaticParams() {
  return TOXIC_QUOTES.map((quote) => ({
    slug: quote.slug,
  }));
}

export default async function QuotePage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const quote = getQuoteBySlug(params.slug);
  
  if (!quote) notFound();

  // 获取相关推荐
  const related = TOXIC_QUOTES.filter(q => q.slug !== params.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-neutral-950 text-white p-6 md:p-20 font-sans">
      <div className="max-w-3xl mx-auto space-y-12">
        
        {/* 顶部导航 */}
        <Link href="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-white transition mb-8">
          <ArrowLeft size={20} /> Back to Decoder
        </Link>

        {/* 标题区 */}
        <div className="space-y-4">
           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 text-rose-400 text-xs font-bold border border-rose-500/20 uppercase">
              2025 Updated Analysis
           </div>
           <h1 className="text-4xl md:text-6xl font-black leading-tight">
             When He Says: <br/>
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-orange-400">"{quote.quote}"</span>
           </h1>
        </div>

        {/* 核心分析卡片 */}
        <div className="bg-neutral-900 border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl relative overflow-hidden">
           {/* 背景大图标装饰 */}
           <div className="absolute top-0 right-0 p-6 opacity-20 pointer-events-none">
             <AlertTriangle size={100} className={quote.score >= 4 ? "text-red-500" : "text-yellow-500"} />
           </div>

           <div className="relative z-10 space-y-8">
             {/* 红旗指数 */}
             <div>
                <p className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-2">Red Flag Score</p>
                <div className="text-3xl font-black text-white flex items-center gap-3">
                  {quote.score}/5 
                  <span className="text-2xl">{quote.score >= 4 ? '🚩' : '⚠️'}</span>
                </div>
             </div>

             {/* 翻译 */}
             <div className="pl-6 border-l-4 border-rose-600">
                <p className="text-sm font-bold text-rose-400 uppercase mb-2">The Translation</p>
                <p className="text-2xl font-medium leading-relaxed">"{quote.translation}"</p>
             </div>

             {/* 毒舌点评 */}
             <div className="bg-black/30 p-6 rounded-xl border border-white/5">
                <p className="text-sm font-bold text-orange-400 uppercase mb-2">Toxic Bestie's Roast</p>
                <p className="text-gray-300 text-lg leading-relaxed">{quote.roast}</p>
             </div>
           </div>
        </div>

        {/* 导流按钮 (Call to Action) */}
        <div className="bg-gradient-to-r from-rose-600 to-orange-600 text-white p-8 rounded-3xl text-center space-y-6 shadow-lg">
           <h3 className="text-2xl font-black">Got a text like this?</h3>
           <p className="text-rose-100 font-medium">Don't rely on guessing. Use our AI to decode the hidden meaning instantly.</p>
           <Link href="/" className="inline-block bg-white text-rose-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition shadow-md">
             Decode My Text Now
           </Link>
        </div>

        {/* 底部相关推荐 (内链闭环) */}
        <div className="pt-10 border-t border-white/10">
           <h3 className="text-gray-500 font-bold uppercase tracking-widest text-sm mb-6">Related Red Flags</h3>
           <div className="grid md:grid-cols-3 gap-4">
              {related.map(r => (
                <Link href={`/decode/${r.slug}`} key={r.slug} className="block bg-neutral-900/50 p-5 rounded-xl border border-white/5 hover:border-rose-500/50 transition group">
                   <p className="text-sm font-bold text-rose-200 line-clamp-2 group-hover:text-white transition">"{r.quote}"</p>
                   <p className="text-xs text-gray-500 mt-3 flex items-center gap-1">Read Analysis <ArrowLeft className="rotate-180" size={12}/></p>
                </Link>
              ))}
           </div>
        </div>

      </div>
    </div>
  );
}

