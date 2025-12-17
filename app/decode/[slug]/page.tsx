import { getQuoteBySlug, TOXIC_QUOTES } from '@/lib/data';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Flame } from 'lucide-react';
import ResultCard from '@/components/ResultCard';
import ShareButton from '@/components/ShareButton';


// 1. 自动生成 SEO 标题
export async function generateMetadata(props: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const params = await props.params;
  const quote = getQuoteBySlug(params.slug);
  if (!quote) return {};

  return {
    title: `"${quote.quote}" Meaning? - Red Flag Score & Psychology Analysis`,
    description: `He sent "${quote.quote}"? Read the brutal translation, psychological analysis, and get 3 strategic copy-paste replies to take back control.`,
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

  // 获取相关推荐 - 基于关键词匹配或随机选择
  const getRelatedQuotes = (currentQuote: any, allQuotes: any[]) => {
    const otherQuotes = allQuotes.filter(q => q.slug !== currentQuote.slug);

    // 尝试找到有共同关键词的引用
    const relatedByKeywords = otherQuotes.filter(quote =>
      quote.keywords.some((keyword: string) =>
        currentQuote.keywords.includes(keyword)
      )
    );

    // 如果有共同关键词的引用，使用它们，否则使用随机引用
    const relatedQuotes = relatedByKeywords.length > 0 ? relatedByKeywords : otherQuotes;

    // 随机选择最多3个
    return relatedQuotes
      .sort(() => Math.random() - 0.5)
      .slice(0, 3);
  };

  const related = getRelatedQuotes(quote, TOXIC_QUOTES);

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

        {/* RESULT CARD - MOVED TO TOP (ABOVE THE FOLD) */}
        <div className="space-y-8">
          <ResultCard
            result={{
              score: quote.score,
              translation: quote.translation,
              roast: quote.roast,
              quote: quote.quote
            }}
            showShareButton={true}
            isSeoPage={true}
          />
        </div>

        {/* SECTION: The Psychology Behind This Text */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold text-white text-center mb-8">The Psychology Behind This Text</h2>

          {/* Why this is a red flag */}
          <div className="bg-neutral-900 border border-white/10 rounded-3xl p-8 md:p-10">
            <h3 className="text-2xl font-bold text-yellow-400 mb-6">Why this is a red flag</h3>
            <ul className="space-y-3">
              {quote.keywords.map((keyword, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">•</span>
                  <span className="text-lg text-gray-300">{keyword}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Dynamic psychology content from data.ts */}
          <div className="bg-neutral-900 border border-white/10 rounded-3xl p-8 md:p-10">
            <style>{`
              .psychology-content h3 {
                color: #c084fc;
                font-size: 1.5rem;
                font-weight: 700;
                margin-top: 2rem;
                margin-bottom: 1rem;
              }
              .psychology-content h4 {
                color: #f472b6;
                font-size: 1.25rem;
                font-weight: 700;
                margin-top: 2rem;
                margin-bottom: 0.75rem;
              }
              .psychology-content strong {
                color: white;
                font-weight: 700;
              }
              .psychology-content p {
                font-size: 1.125rem;
                color: #d1d5db;
                line-height: 1.75;
                margin-bottom: 1rem;
              }
              .psychology-content ul {
                margin-bottom: 1rem;
              }
              .psychology-content li {
                color: #d1d5db;
              }
            `}</style>
            <div
              className="psychology-content prose prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: quote.psychologyContent }}
            />
          </div>
        </section>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-rose-600 to-orange-600 text-white p-8 rounded-3xl text-center space-y-6 shadow-lg">
           <h3 className="text-2xl font-black">Got a confusing text?</h3>
           <p className="text-rose-100 font-medium">Don't second-guess yourself. Get instant clarity with our AI decoder.</p>
           <Link href="/" className="inline-block bg-white text-rose-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition shadow-md">
             Decode My Text Now
           </Link>
        </div>

        {/* Share this Red Flag CTA */}
        <div className="text-center space-y-4">
           <h3 className="text-xl font-bold text-white">Know someone who needs to see this?</h3>
           <ShareButton quote={quote.quote} />
        </div>

        {/* Related Red Flags Section */}
        <div className="pt-10 border-t border-white/10">
           <h3 className="text-gray-500 font-bold uppercase tracking-widest text-sm mb-6">Related Red Flags</h3>
           <div className="grid md:grid-cols-3 gap-6">
              {related.map(r => (
                <Link href={`/decode/${r.slug}`} key={r.slug} className="block bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-all group">
                   {/* Quote Text */}
                   <p className="text-white font-medium text-sm leading-relaxed mb-4 line-clamp-3 group-hover:text-rose-200 transition">
                     "{r.quote.length > 100 ? r.quote.substring(0, 100) + '...' : r.quote}"
                   </p>

                   {/* Danger Score */}
                   <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                         <Flame className="text-red-500" size={16} />
                         <span className="text-red-400 font-bold text-sm">Danger Score</span>
                      </div>
                      <div className="flex items-center gap-1">
                         {[...Array(5)].map((_, i) => (
                            <Flame
                              key={i}
                              className={`${i < r.score ? 'text-red-500' : 'text-gray-700'}`}
                              size={14}
                            />
                         ))}
                      </div>
                   </div>

                   {/* Read Analysis Button */}
                   <div className="flex items-center justify-center">
                      <button className="text-rose-500 hover:text-rose-400 font-medium text-sm flex items-center gap-2 transition-colors">
                         Read Analysis
                         <ArrowLeft className="rotate-180" size={14} />
                      </button>
                   </div>
                </Link>
              ))}
           </div>
        </div>

      </div>
    </div>
  );
}

