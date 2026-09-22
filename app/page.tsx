import Link from 'next/link';
import DemandDemo from '@/components/DemandDemo';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Decode His Text: What Does His Message Mean?',
  description: 'Decode common dating texts and mixed signals with written examples, context checks, and practical communication guidance.',
  alternates: { canonical: 'https://www.decodehistext.com/' },
  openGraph: {
    title: 'Decode His Text: What Does His Message Mean?',
    description: 'Explore possible meanings behind common dating texts and the context clues that matter.',
    url: 'https://www.decodehistext.com/',
    type: 'website',
  },
};

export default function Home() {
  return <div className="min-h-screen bg-neutral-950 text-white">
    <nav className="border-b border-white/10"><div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 sm:py-6"><Link href="/" className="text-lg font-bold sm:text-xl">Decode<span className="text-rose-400">His</span>Text</Link><Link href="/database" className="flex min-h-12 items-center text-sm text-neutral-300 hover:text-white">Phrase library</Link></div></nav>
    <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12 md:py-20">
      <header className="mb-6 max-w-3xl space-y-3 sm:mb-10 sm:space-y-5"><p className="text-xs uppercase tracking-widest text-rose-400 sm:text-sm">Free dating text examples</p><h1 className="text-4xl font-bold leading-tight tracking-tight md:text-6xl">What does his text mean?</h1><p className="text-lg leading-relaxed text-neutral-300 sm:text-xl">Explore possible meanings behind common dating texts, check the context that matters, and decide what to ask next.</p></header>
      <DemandDemo />
    </main>
    <footer className="mx-auto max-w-6xl space-y-5 border-t border-white/10 px-4 py-8 text-sm text-neutral-400 sm:px-6"><div className="flex flex-wrap gap-x-5 gap-y-2"><Link href="/about-us">About</Link><Link href="/contact-us">Contact</Link><Link href="/privacy-policy">Privacy</Link><Link href="/terms-of-service">Terms</Link></div><p>Written examples for reflection. Not a psychological assessment or a way to determine another person&apos;s intentions.</p></footer>
  </div>;
}
