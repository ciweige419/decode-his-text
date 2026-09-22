import { getQuoteBySlug, TOXIC_QUOTES, type QuoteData } from '@/lib/data';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Flame, MessageCircle } from 'lucide-react';
import ShareButton from '@/components/ShareButton';

const SITE_URL = 'https://www.decodehistext.com';

function shorten(value: string, maxLength: number) {
  if (value.length <= maxLength) return value;
  return `${value.slice(0, maxLength - 1).trimEnd()}…`;
}

function pageDescription(quote: QuoteData) {
  const phrase = shorten(quote.quote, 72);
  return `What might “${phrase}” mean in dating? Review a possible interpretation, context clues, and communication patterns before deciding how to respond.`;
}

// 1. 自动生成 SEO 标题
export async function generateMetadata(props: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const params = await props.params;
  const quote = getQuoteBySlug(params.slug);
  if (!quote) return {};

  const titlePhrase = shorten(quote.quote, 48);
  const description = pageDescription(quote);
  const url = `${SITE_URL}/analyze/${quote.slug}`;

  return {
    title: `What Does “${titlePhrase}” Mean?`,
    description,
    keywords: [...quote.keywords, 'dating red flags', 'relationship advice', 'text analysis', 'psychology', 'dating apps'],
    robots: { index: true, follow: true },
    openGraph: {
      title: `What Does “${titlePhrase}” Mean?`,
      description,
      type: 'article',
      url,
      images: [
        {
          url: 'https://www.decodehistext.com/opengraph-image',
          width: 1200,
          height: 630,
          alt: 'Red Flag Text Analysis',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `What Does “${titlePhrase}” Mean?`,
      description,
      images: ['https://www.decodehistext.com/opengraph-image'],
    },
    alternates: {
      canonical: url,
    },
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

  // AUTO-CLEAN: Remove any Chinese characters from psychology content
  const cleanedPsychologyContent = quote.psychologyContent.replace(/[\u4e00-\u9fa5]/g, '');

  // 获取相关推荐 - 基于关键词匹配或随机选择
  const getRelatedQuotes = (currentQuote: QuoteData, allQuotes: QuoteData[]) => {
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
      .slice(0, 3);
  };

  const related = getRelatedQuotes(quote, TOXIC_QUOTES);
  const url = `${SITE_URL}/analyze/${quote.slug}`;
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: `What Does “${quote.quote}” Mean?`,
        description: pageDescription(quote),
        mainEntityOfPage: url,
        inLanguage: 'en',
        author: { '@type': 'Organization', name: 'Decode His Text' },
        publisher: { '@type': 'Organization', name: 'Decode His Text', url: SITE_URL },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: 'Phrase library', item: `${SITE_URL}/database` },
          { '@type': 'ListItem', position: 3, name: quote.quote, item: url },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-white p-6 md:p-20 font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }}
      />
      <div className="max-w-3xl mx-auto space-y-12">

        {/* 顶部导航 */}
        <Link href="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-white transition mb-8">
          <ArrowLeft size={20} /> Back to Decoder
        </Link>

        {/* H1: match the question people search for */}
        <h1 className="text-4xl md:text-6xl font-black leading-tight text-center">
          What Does &quot;{quote.quote}&quot; Mean?
        </h1>

        <p className="rounded-xl border border-white/10 p-4 text-neutral-300">This is a written example, not a personalized analysis. Ratings are editorial labels, not measured risk. A single message does not establish intentions or diagnose a person.</p>

        {/* RESULT CARD - BASIC ANALYSIS ONLY */}
        <div className="bg-neutral-900 border border-white/10 rounded-3xl p-8 shadow-2xl animate-in fade-in slide-in-from-bottom-8 duration-500 ring-1 ring-rose-500/20">
          <div className="flex items-center justify-between mb-8">
             <div>
               <p className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-1">Editorial concern rating</p>
               <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className={`h-2 w-8 rounded-full ${i < quote.score ? (quote.score >= 4 ? 'bg-red-500' : 'bg-yellow-500') : 'bg-neutral-800'}`}></div>
                  ))}
                  <span className={`ml-3 text-2xl font-black ${quote.score >= 4 ? 'text-red-500' : 'text-yellow-500'}`}>{quote.score}/5</span>
               </div>
             </div>
          </div>

          <div className="space-y-8">
            <div className="pl-6 border-l-2 border-rose-500/30">
               <p className="text-xs font-bold text-rose-400 uppercase tracking-wider mb-2">One possible interpretation</p>
               <p className="text-2xl text-white font-medium">&quot;{quote.translation}&quot;</p>
            </div>

            <div className="bg-neutral-800/50 rounded-2xl p-6 border border-white/5">
              <p className="text-xs font-bold text-orange-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                 <MessageCircle size={14}/> A candid take
              </p>
              <p className="text-neutral-300 font-light text-lg">{quote.roast}</p>
            </div>
          </div>
        </div>

        <section className="rounded-3xl border border-white/10 bg-neutral-900 p-8 md:p-10">
          <h2 className="mb-5 text-2xl font-bold text-white">Context to check before you decide</h2>
          <ul className="space-y-4 text-lg leading-relaxed text-neutral-300">
            <li><strong className="text-white">Pattern:</strong> Is this a one-time message or part of repeated behavior?</li>
            <li><strong className="text-white">Follow-through:</strong> Do their actions match what they said afterward?</li>
            <li><strong className="text-white">Clarity:</strong> When you ask a direct question, do they answer it directly?</li>
          </ul>
          <p className="mt-6 text-neutral-400">A single text can have several explanations. Repeated behavior and willingness to communicate usually provide more useful evidence than wording alone.</p>
        </section>

        {/* PSYCHOLOGY ANALYSIS - FIRST (Value-First Approach) */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold text-white text-center mb-8">The Psychology Behind This Text</h2>

          {/* Themes connected to this phrase */}
          <div className="bg-neutral-900 border border-white/10 rounded-3xl p-8 md:p-10">
            <h3 className="text-2xl font-bold text-yellow-400 mb-6">Patterns to consider</h3>
            <ul className="space-y-3">
              {quote.keywords.map((keyword, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">•</span>
                  <span className="text-lg text-gray-300">{keyword}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Dynamic psychology content with FORCED STYLING and AUTO-CLEAN */}
          <div className="bg-neutral-900 border border-white/10 rounded-3xl p-8 md:p-10">
            <style>{`
              /* FORCE STYLING: Override any messy HTML structure from data.ts */
              .psychology-content h1,
              .psychology-content h2,
              .psychology-content h3,
              .psychology-content h4 {
                color: #c084fc !important;
                font-weight: 700 !important;
                font-size: 1.5rem !important;
                margin-top: 2rem;
                margin-bottom: 1rem;
              }

              /* FORCE strong text to white for psychological terms */
              .psychology-content strong {
                color: white !important;
                font-weight: 700 !important;
              }

              /* Consistent paragraph spacing */
              .psychology-content p {
                font-size: 1.125rem;
                color: #d1d5db;
                line-height: 1.75;
                margin-bottom: 1.5rem !important;
              }

              /* List styling */
              .psychology-content ul,
              .psychology-content ol {
                margin-bottom: 1.5rem;
                padding-left: 1.5rem;
              }
              .psychology-content li {
                color: #d1d5db;
                margin-bottom: 0.5rem;
              }

              /* Override any prose defaults completely */
              .psychology-content.prose h1,
              .psychology-content.prose h2,
              .psychology-content.prose h3,
              .psychology-content.prose h4 {
                color: #c084fc !important;
                font-weight: 700 !important;
                font-size: 1.5rem !important;
              }
              .psychology-content.prose strong {
                color: white !important;
                font-weight: 700 !important;
              }
              .psychology-content.prose p {
                margin-bottom: 1.5rem !important;
              }
            `}</style>
            <div
              className="psychology-content prose prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: cleanedPsychologyContent }}
            />
          </div>
        </section>

        {/* CTA HOOK - Professional transition to Premium */}
        <div className="text-center my-8">
          <p className="italic text-gray-400 text-lg max-w-2xl mx-auto">
            Understanding the trap is step one. Escaping it is step two. Knowing the psychology gives you the upper hand, but how you respond determines the power dynamic.
          </p>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-rose-600 to-orange-600 text-white p-8 rounded-3xl text-center space-y-6 shadow-lg">
           <h3 className="text-2xl font-black">Got a confusing text?</h3>
           <p className="text-rose-100 font-medium">Try the written examples and tell us what would help you next.</p>
           <Link href="/" className="inline-block bg-white text-rose-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition shadow-md">
             Try the Free Preview
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
                <Link href={`/analyze/${r.slug}`} key={r.slug} className="block bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-all group">
                   {/* Quote Text */}
                   <p className="text-white font-medium text-sm leading-relaxed mb-4 line-clamp-3 group-hover:text-rose-200 transition">
                     &quot;{r.quote.length > 100 ? r.quote.substring(0, 100) + '...' : r.quote}&quot;
                   </p>

                   {/* Editorial rating */}
                   <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                         <Flame className="text-red-500" size={16} />
                         <span className="text-red-400 font-bold text-sm">Editorial rating</span>
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

      {/* Footer */}
      <footer className="border-t border-white/5 py-12 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2.5 font-bold text-xl tracking-tighter mb-4">
                <div className="bg-gradient-to-br from-rose-600 to-orange-600 text-white p-2 rounded-xl shadow-lg shadow-rose-900/20">
                  <Flame size={16} fill="currentColor" />
                </div>
                <span className="text-white">Decode<span className="text-rose-500">His</span>Text</span>
              </div>
              <p className="text-neutral-500 text-sm">
                Written examples for reflecting on communication.
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
                <span>Free example preview</span>
                <span>•</span>
                <span>No paid features</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
