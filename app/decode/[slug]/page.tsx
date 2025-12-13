import { getQuoteBySlug, TOXIC_QUOTES } from '@/lib/data';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

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

        {/* H1: 原始完整用户句子 */}
        <h1 className="text-4xl md:text-6xl font-black leading-tight text-center">
          "{quote.quote}"
        </h1>

        {/* Section 1: What this really means */}
        <section className="bg-neutral-900 border border-white/10 rounded-3xl p-8 md:p-10">
          <h2 className="text-2xl font-bold text-rose-400 mb-4">What this really means</h2>
          <p className="text-xl leading-relaxed text-gray-300">{quote.translation}</p>
        </section>

        {/* Section 2: Red flag score */}
        <section className="bg-neutral-900 border border-white/10 rounded-3xl p-8 md:p-10">
          <h2 className="text-2xl font-bold text-red-500 mb-4">Red flag score</h2>
          <div className="flex items-center gap-4">
            <span className="text-4xl font-black text-white">{quote.score}/5</span>
            <span className="text-2xl">{quote.score >= 4 ? '🚩' : '⚠️'}</span>
          </div>
          <p className="text-lg text-gray-300 mt-4">
            {quote.score >= 4 ? "This is a major red flag indicating serious relationship issues." :
             quote.score >= 3 ? "This is concerning behavior that warrants careful consideration." :
             "This shows poor communication but may be manageable."}
          </p>
        </section>

        {/* Section 3: Toxic bestie take */}
        <section className="bg-neutral-900 border border-white/10 rounded-3xl p-8 md:p-10">
          <h2 className="text-2xl font-bold text-orange-400 mb-4">Toxic bestie take</h2>
          <p className="text-lg leading-relaxed text-gray-300 italic">"{quote.roast}"</p>
        </section>

        {/* Section 4: Why this is a red flag */}
        <section className="bg-neutral-900 border border-white/10 rounded-3xl p-8 md:p-10">
          <h2 className="text-2xl font-bold text-yellow-400 mb-6">Why this is a red flag</h2>
          <ul className="space-y-3">
            {quote.keywords.map((keyword, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-red-500 mt-1">•</span>
                <span className="text-lg text-gray-300">{keyword}</span>
              </li>
            ))}
          </ul>
        </section>

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

