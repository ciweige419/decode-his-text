import { getQuoteBySlug, TOXIC_QUOTES } from '@/lib/data';
import { CONTENT_UPDATED, SEARCH_ARTICLES, TOPICS } from '@/lib/search-content';
import { SiteNav, SiteFooter } from '@/components/SiteChrome';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import ShareButton from '@/components/ShareButton';

const SITE_URL = 'https://www.decodehistext.com';
const prose = 'space-y-5 text-lg leading-relaxed text-neutral-300';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const quote = getQuoteBySlug(slug);
  if (!quote) return {};
  const article = SEARCH_ARTICLES[slug];
  const title = article?.title ?? `What Does “${quote.quote}” Mean?`;
  const description = article?.description ?? `Explore what “${quote.quote}” may mean in dating, the context to check, and questions to ask before deciding how to respond.`;
  const url = `${SITE_URL}/analyze/${slug}`;
  return {
    title, description,
    alternates: { canonical: url },
    openGraph: { title, description, type: 'article', url, ...(article ? { modifiedTime: CONTENT_UPDATED } : {}) },
    twitter: { card: 'summary_large_image', title, description },
  };
}

export function generateStaticParams() { return TOXIC_QUOTES.map(({ slug }) => ({ slug })); }

export default async function QuotePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const quote = getQuoteBySlug(slug);
  if (!quote) notFound();
  const article = SEARCH_ARTICLES[slug];
  const topic = TOPICS.find(t => t.id === article?.topic);
  const title = article?.title ?? `What Does “${quote.quote}” Mean?`;
  const related = article
    ? article.related.map(getQuoteBySlug).filter(q => q !== undefined)
    : [...TOXIC_QUOTES].filter(q => q.slug !== slug).sort((a, b) =>
      b.keywords.filter(k => quote.keywords.includes(k)).length - a.keywords.filter(k => quote.keywords.includes(k)).length
    ).slice(0, 3);
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'Article', headline: title, description: article?.description, mainEntityOfPage: `${SITE_URL}/analyze/${slug}`, inLanguage: 'en',
        ...(article ? { dateModified: CONTENT_UPDATED } : {}),
        author: { '@type': 'Organization', name: 'Decode His Text', url: `${SITE_URL}/about-us` },
        publisher: { '@type': 'Organization', name: 'Decode His Text', url: SITE_URL } },
      { '@type': 'BreadcrumbList', itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Phrase library', item: `${SITE_URL}/database` },
        { '@type': 'ListItem', position: 3, name: quote.quote, item: `${SITE_URL}/analyze/${slug}` },
      ] },
    ],
  };

  return <div className="min-h-screen bg-neutral-950 text-white">
    <SiteNav />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }} />
    <main className="mx-auto max-w-3xl space-y-10 px-4 py-8 sm:px-6 sm:py-14">
      <nav aria-label="Breadcrumb" className="flex flex-wrap gap-2 text-sm text-neutral-400"><Link href="/">Home</Link><span aria-hidden="true">/</span><Link href="/database">Phrase library</Link>{topic && <><span aria-hidden="true">/</span><Link href={`/database#${topic.id}`}>{topic.title}</Link></>}</nav>
      <article className="space-y-10">
        <header className="space-y-5"><p className="text-sm font-semibold uppercase tracking-widest text-rose-300">Dating text meanings</p><h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-5xl">{title}</h1><p className="text-neutral-400">By <Link className="underline" href="/about-us">Decode His Text</Link>{article && <> · Updated <time dateTime={CONTENT_UPDATED}>October 27, 2026</time></>}</p><p className="text-sm text-neutral-400">Communication examples, not a personalized assessment.</p></header>
        <section aria-labelledby="short-answer" className="space-y-4 rounded-2xl border border-rose-400/30 bg-rose-400/5 p-5 sm:p-7"><h2 id="short-answer" className="text-xl font-bold">The short answer</h2><p className="text-lg leading-relaxed text-neutral-200">{article?.answer ?? quote.translation}</p>{!article && <p className="text-sm text-neutral-400">This is one editorial interpretation. A single message cannot establish someone’s intentions.</p>}</section>
        <nav aria-label="On this page" className="flex flex-wrap gap-x-5 gap-y-3 text-sm text-rose-300">{article ? <><a href="#meaning">Meaning and context</a><a href="#replies">How to reply</a><a href="#questions">Common questions</a></> : <a href="#meaning">Meaning and context</a>}<a href="#related">Related phrases</a></nav>
        {article ? <>
          <div id="meaning" className="scroll-mt-6 space-y-10">{article.sections.map(section => <section key={section.heading} className={prose}><h2 className="text-2xl font-bold text-white">{section.heading}</h2>{section.paragraphs.map(p => <p key={p}>{p}</p>)}</section>)}</div>
          <section id="replies" className="scroll-mt-6 space-y-5"><h2 className="text-2xl font-bold">How to reply</h2><p className="text-neutral-400">Adapt these examples to what you actually want. They are conversation starters, not ways to guarantee a particular response.</p>{article.replies.map(reply => <div key={reply.situation} className="space-y-3 rounded-2xl border border-white/10 bg-neutral-900 p-5"><h3 className="font-semibold text-rose-300">{reply.situation}</h3><blockquote className="text-lg leading-relaxed text-neutral-200">“{reply.text}”</blockquote></div>)}</section>
          <section id="questions" className="scroll-mt-6 space-y-6"><h2 className="text-2xl font-bold">Common questions</h2>{article.questions.map(q => <section key={q.question} className={prose}><h3 className="text-xl font-semibold text-white">{q.question}</h3><p>{q.answer}</p></section>)}</section>
        </> : <section id="meaning" className="scroll-mt-6 space-y-6"><h2 className="text-2xl font-bold">Meaning and context</h2><p className="text-lg leading-relaxed text-neutral-300">Check what happened before and after this message, whether the behavior repeats, and whether a direct question receives a clear answer. The older editorial example below describes possibilities, rather than findings about your relationship.</p><div className="legacy-content" dangerouslySetInnerHTML={{ __html: quote.psychologyContent }} /></section>}
        {topic?.guide && <aside className="space-y-3 rounded-2xl border border-white/10 p-6"><h2 className="text-xl font-bold">Put the message in context</h2><p className="text-neutral-300">{topic.description}</p><Link className="inline-block py-2 text-rose-300 underline" href={topic.guide}>Read the {topic.title.toLowerCase()} guide →</Link></aside>}
      </article>
      <section id="related" className="scroll-mt-6 space-y-5 border-t border-white/10 pt-8"><h2 className="text-2xl font-bold">Related dating texts</h2><div className="grid gap-4 sm:grid-cols-2">{related.map(q => <Link key={q.slug} href={`/analyze/${q.slug}`} className="rounded-2xl border border-white/10 bg-neutral-900 p-5 text-lg hover:border-rose-400">{SEARCH_ARTICLES[q.slug]?.title ?? `What does “${q.quote}” mean?`}<span className="mt-3 block text-sm text-rose-300">Read meaning and context →</span></Link>)}</div><Link className="inline-block py-2 text-rose-300 underline" href="/database">Browse all dating phrases</Link></section>
      <ShareButton quote={quote.quote} />
    </main>
    <SiteFooter />
  </div>;
}
