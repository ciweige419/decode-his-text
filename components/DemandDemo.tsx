'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import { TOXIC_QUOTES, type QuoteData } from '@/lib/data';
import { findExactExample, trackExperiment, type Feedback, type InputSource, type Need } from '@/lib/experiment';

type Result = { quote: QuoteData | null; source: InputSource; id: number };
const button = 'min-h-12 rounded-xl border border-white/20 px-4 py-3 text-left hover:border-rose-400 focus-visible:outline-2 focus-visible:outline-rose-400 disabled:opacity-50';

export default function DemandDemo() {
  const [text, setText] = useState('');
  const [source, setSource] = useState<InputSource>('typed');
  const [result, setResult] = useState<Result | null>(null);
  const [feedback, setFeedback] = useState<Feedback | null>(null);
  const [need, setNeed] = useState<Need | null>(null);
  const sequence = useRef(0);
  const submittedText = useRef<string | null>(null);
  const resultRef = useRef<HTMLElement>(null);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!text.trim() || text === submittedText.current) return;
    submittedText.current = text;
    const quote = findExactExample(text, TOXIC_QUOTES) ?? null;
    trackExperiment({ name: 'demo_start', source });
    setResult({ quote, source, id: ++sequence.current });
    setFeedback(null); setNeed(null);
    requestAnimationFrame(() => {
      resultRef.current?.focus({ preventScroll: true });
      resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      trackExperiment({ name: 'demo_result', source, outcome: quote ? 'matched' : 'unmatched' });
    });
  }

  return <div className="grid items-start gap-6 lg:grid-cols-2 lg:gap-8">
    <form onSubmit={submit} className="space-y-4 rounded-2xl border border-white/10 bg-neutral-900 p-4 sm:space-y-5 sm:rounded-3xl sm:p-6">
      <label htmlFor="message" className="block text-xl font-semibold">Try a phrase</label>
      <p id="demo-help" className="text-neutral-400">This free preview looks up exact phrases in our written guide. It does not use AI or analyze a conversation.</p>
      <textarea id="message" aria-describedby="demo-help" value={text} maxLength={2000} rows={4}
        onChange={e => { setText(e.target.value); setSource('typed'); submittedText.current = null; }}
        placeholder="Type a phrase, or choose an example below"
        className="w-full rounded-xl border border-white/20 bg-neutral-950 p-4 text-white focus-visible:outline-2 focus-visible:outline-rose-400" />
      <p className="text-sm text-neutral-400">Your text stays in this page. Please leave out names and other identifying details.</p>
      <button disabled={!text.trim()} className="min-h-12 w-full rounded-xl bg-rose-500 px-6 py-3 font-bold text-white disabled:opacity-40 sm:w-auto">Show example interpretation</button>
      <div className="space-y-3"><p className="text-sm text-neutral-400">Or try a sample:</p>
        {TOXIC_QUOTES.slice(0, 3).map(q => <button key={q.slug} type="button" className={`${button} block w-full text-sm`}
          onClick={() => { setText(q.quote); setSource('example'); submittedText.current = null; }}>{q.quote}</button>)}
      </div>
    </form>
    <section ref={resultRef} tabIndex={-1} aria-label="Example result" className="space-y-6 rounded-2xl border border-white/10 bg-neutral-900 p-4 focus:outline-none sm:rounded-3xl sm:p-6">
      {!result ? <><h2 className="text-2xl font-bold">A starting point, not a verdict</h2><p className="text-neutral-300">A message alone cannot reveal someone&apos;s intentions. Read the context, look for consistent actions, and decide what you need.</p><Link className="text-rose-300 underline" href="/database">Browse the phrase library</Link></> : <>
        <div className="space-y-3" aria-live="polite">
          <p className="text-sm uppercase tracking-widest text-rose-300">{result.quote ? 'Written example · not personalized' : 'No exact example found'}</p>
          <h2 className="text-2xl font-bold">{result.quote ? result.quote.quote : 'This preview cannot interpret that message.'}</h2>
          {result.quote ? <><p className="text-neutral-300">One interpretation in our existing guide:</p><p>{result.quote.translation}</p><p className="text-sm text-neutral-400">This is an editorial possibility, not evidence about your situation. Context can change the meaning.</p><Link href={`/analyze/${result.quote.slug}`} className="inline-block text-rose-300 underline">Read the full example</Link></> : <p className="text-neutral-300">We will not assign a risk score or guess at their intentions. Try a sample or browse the phrase library.</p>}
        </div>
        <div className="border-t border-white/10 pt-5 space-y-3"><h3 className="font-semibold">Was this preview useful?</h3>
          <div className="flex flex-wrap gap-3">{(['helpful', 'not_helpful'] as const).map(choice => <button key={choice} disabled={feedback !== null} aria-pressed={feedback === choice} className={button}
            onClick={() => { if (feedback) return; setFeedback(choice); trackExperiment({ name: 'demo_feedback', source: result.source, outcome: result.quote ? 'matched' : 'unmatched', choice }); }}>{choice === 'helpful' ? 'Helpful' : 'Not yet helpful'}</button>)}</div>
          {feedback && <p role="status" className="text-sm text-neutral-400">Selected: {feedback === 'helpful' ? 'helpful' : 'not yet helpful'}.</p>}
        </div>
        <div className="border-t border-white/10 pt-5 space-y-3"><h3 className="font-semibold">What would help you most next?</h3><p className="text-sm text-neutral-400">These features are being considered; they are not available yet.</p>
          {([{ key: 'meaning', label: 'Compare possible meanings' }, { key: 'reply', label: 'Help me write a reply' }, { key: 'context', label: 'Consider more of the conversation' }] as const).map(option => <button key={option.key} disabled={need !== null} aria-pressed={need === option.key} className={`${button} block w-full`}
            onClick={() => { if (need) return; setNeed(option.key); trackExperiment({ name: 'feature_interest', source: result.source, choice: option.key }); }}>{option.label}</button>)}
          {need && <p role="status" className="text-sm text-neutral-400">Selection noted in this preview. No purchase or signup is involved.</p>}
        </div>
        <p className="text-xs text-neutral-500">When analytics is available, we count button choices to improve this preview. We do not include your message in these events. <Link href="/privacy-policy" className="underline">Privacy details</Link></p>
      </>}
    </section>
  </div>;
}
