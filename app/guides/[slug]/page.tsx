import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { GUIDES, getGuide } from '@/lib/guides';
import { SEARCH_ARTICLES, CONTENT_UPDATED } from '@/lib/search-content';
import { SiteNav, SiteFooter } from '@/components/SiteChrome';

const base = 'https://www.decodehistext.com';
export function generateStaticParams() { return Object.keys(GUIDES).map(slug => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return {};
  return { title: guide.title, description: guide.description, alternates: { canonical: `${base}/guides/${slug}` }, openGraph: { title: guide.title, description: guide.description, url: `${base}/guides/${slug}`, type: 'article', modifiedTime: CONTENT_UPDATED } };
}
export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();
  const schema = { '@context': 'https://schema.org', '@graph': [
    { '@type': 'Article', headline: guide.title, description: guide.description, mainEntityOfPage: `${base}/guides/${slug}`, dateModified: CONTENT_UPDATED, inLanguage: 'en', author: { '@type': 'Organization', name: 'Decode His Text', url: `${base}/about-us` }, publisher: { '@type': 'Organization', name: 'Decode His Text', url: base } },
    { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: base }, { '@type': 'ListItem', position: 2, name: 'Phrase library', item: `${base}/database` }, { '@type': 'ListItem', position: 3, name: guide.title, item: `${base}/guides/${slug}` }] },
  ] };
  return <div className="min-h-screen bg-neutral-950 text-white"><SiteNav /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }} /><main className="mx-auto max-w-3xl space-y-10 px-4 py-8 sm:px-6 sm:py-14"><nav aria-label="Breadcrumb" className="flex gap-3 text-sm text-neutral-400"><Link href="/">Home</Link><span>/</span><Link href="/database">Phrase library</Link><span>/</span><span>Guide</span></nav><article className="space-y-10"><header className="space-y-5"><p className="text-sm uppercase tracking-widest text-rose-300">Dating communication guide</p><h1 className="text-3xl font-bold leading-tight sm:text-5xl">{guide.title}</h1><p className="text-neutral-400">By <Link className="underline" href="/about-us">Decode His Text</Link> · Updated <time dateTime={CONTENT_UPDATED}>October 27, 2026</time></p><p className="text-xl leading-relaxed text-neutral-200">{guide.intro}</p></header><section className="space-y-5"><h2 className="text-2xl font-bold">Start with the situation</h2><div className="space-y-4">{guide.rows.map(([situation, meaning, next]) => <div key={situation} className="space-y-3 rounded-2xl border border-white/10 bg-neutral-900 p-5"><h3 className="text-lg font-semibold text-rose-300">{situation}</h3><p className="text-neutral-300">{meaning}</p><p className="leading-relaxed"><strong>Next step:</strong> {next}</p></div>)}</div></section>{guide.sections.map(section => <section key={section.heading} className="space-y-4 text-lg leading-relaxed text-neutral-300"><h2 className="text-2xl font-bold text-white">{section.heading}</h2>{section.paragraphs.map(p => <p key={p}>{p}</p>)}</section>)}<p className="border-t border-white/10 pt-6 text-sm leading-relaxed text-neutral-400">These are illustrative communication examples, not findings about your situation. A single message does not reveal intentions or establish a psychological diagnosis.</p></article><section className="space-y-4"><h2 className="text-2xl font-bold">Read the exact phrase</h2>{guide.articleSlugs.map(s => <Link className="block rounded-xl border border-white/10 p-5 text-lg text-rose-300 hover:border-rose-400" key={s} href={`/analyze/${s}`}>{SEARCH_ARTICLES[s].title} →</Link>)}</section><Link href={`/guides/${guide.nextGuide}`} className="block rounded-2xl border border-white/10 p-6 text-rose-300">Next guide: {GUIDES[guide.nextGuide].title} →</Link></main><SiteFooter /></div>;
}
