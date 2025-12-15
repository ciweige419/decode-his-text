import { getQuoteBySlug, TOXIC_QUOTES } from '@/lib/data';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import ResultCard from '@/components/ResultCard';

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

          {/* Additional psychological analysis */}
          <div className="bg-neutral-900 border border-white/10 rounded-3xl p-8 md:p-10">
            <h3 className="text-2xl font-bold text-purple-400 mb-6">Understanding the Pattern</h3>
            <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
              <p>
                This type of communication pattern often reflects deeper issues in emotional intelligence and relationship readiness.
                The vagueness and ambiguity serve as protective mechanisms that prevent genuine connection while maintaining the appearance of interest.
              </p>
              <p>
                Psychology suggests that individuals who consistently use such phrasing may be struggling with commitment anxiety,
                fear of vulnerability, or may be intentionally maintaining multiple options without clear communication.
              </p>
              <p>
                The impact on the recipient can be particularly damaging, as it creates a state of perpetual uncertainty and emotional limbo,
                making it difficult to make informed decisions about the relationship's future.
              </p>
            </div>
          </div>

          {/* What to do next */}
          <div className="bg-neutral-900 border border-white/10 rounded-3xl p-8 md:p-10">
            <h3 className="text-2xl font-bold text-green-400 mb-6">How to Respond Effectively</h3>
            <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
              <p>
                When faced with this type of communication, it's essential to prioritize clarity and self-respect.
                Direct but compassionate communication often reveals the true nature of the situation.
              </p>
              <p>
                Setting clear boundaries and asking for specific responses can help cut through the ambiguity.
                Remember that your time and emotional energy are valuable resources that deserve honest communication in return.
              </p>
              <p>
                If the pattern continues despite your efforts to establish clear communication, it may be a sign to redirect your energy
                toward relationships that offer the respect and transparency you deserve.
              </p>
            </div>
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

        {/* See Also: Internal Links Section */}
        <div className="pt-10 border-t border-white/10">
           <h3 className="text-gray-500 font-bold uppercase tracking-widest text-sm mb-6">See Also</h3>
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

