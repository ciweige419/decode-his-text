import Link from 'next/link';
export default function InfoPage({ title, children }: { title: string; children: React.ReactNode }) {
  return <main className="mx-auto max-w-3xl space-y-7 px-6 py-16 text-neutral-200"><Link href="/" className="text-rose-300 underline">Back to preview</Link><h1 className="text-4xl font-bold text-white">{title}</h1>{children}</main>;
}
