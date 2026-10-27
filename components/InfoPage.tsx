import Link from 'next/link';
import { SiteNav, SiteFooter } from './SiteChrome';
export default function InfoPage({ title, children }: { title: string; children: React.ReactNode }) {
  return <div className="min-h-screen bg-neutral-950 text-white"><SiteNav /><main className="mx-auto max-w-3xl space-y-7 px-6 py-12 text-lg leading-relaxed text-neutral-200"><Link href="/" className="text-rose-300 underline">Back to home</Link><h1 className="text-4xl font-bold text-white">{title}</h1>{children}</main><SiteFooter /></div>;
}
