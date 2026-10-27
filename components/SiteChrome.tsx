import Link from 'next/link';

export function SiteNav() {
  return <nav aria-label="Main navigation" className="border-b border-white/10"><div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-6 px-4 py-4 sm:px-6"><Link href="/" className="py-2 text-lg font-bold">Decode<span className="text-rose-400">His</span>Text</Link><div className="flex gap-5 text-sm text-neutral-300"><Link className="py-3 hover:text-white" href="/database">Phrase library</Link><Link className="py-3 hover:text-white" href="/about-us">How we write</Link></div></div></nav>;
}

export function SiteFooter() {
  return <footer className="mx-auto max-w-6xl space-y-4 border-t border-white/10 px-4 py-8 text-sm leading-relaxed text-neutral-400 sm:px-6"><div className="flex flex-wrap gap-x-5 gap-y-3"><Link href="/database">All dating phrases</Link><Link href="/guides/slow-replies">Slow replies guide</Link><Link href="/guides/relationship-intentions">Relationship intentions guide</Link><Link href="/about-us">About & editorial approach</Link><Link href="/contact-us">Contact</Link><Link href="/privacy-policy">Privacy</Link><Link href="/terms-of-service">Terms</Link></div><p>Written examples for reflection. A message alone cannot establish intentions or diagnose a person.</p><p>© {new Date().getFullYear()} Decode His Text</p></footer>;
}
