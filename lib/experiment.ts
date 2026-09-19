export type InputSource = 'typed' | 'example';
export type Feedback = 'helpful' | 'not_helpful';
export type Need = 'meaning' | 'reply' | 'context';
export type ExperimentEvent =
  | { name: 'demo_start'; source: InputSource }
  | { name: 'demo_result'; source: InputSource; outcome: 'matched' | 'unmatched' }
  | { name: 'demo_feedback'; source: InputSource; outcome: 'matched' | 'unmatched'; choice: Feedback }
  | { name: 'feature_interest'; source: InputSource; choice: Need };

// Only enumerated experiment fields reach analytics. Never include user text.
export function eventPayload(event: ExperimentEvent) {
  const payload: Record<string, string> = { experiment_id: 'demand_v1', input_source: event.source };
  if ('outcome' in event) payload.match_status = event.outcome;
  if ('choice' in event) payload.choice = event.choice;
  return payload;
}

export function trackExperiment(event: ExperimentEvent) {
  // Preview and local testing must not inflate production demand.
  if (typeof window === 'undefined' || window.location.hostname !== 'www.decodehistext.com') return;
  try { window.gtag?.('event', event.name, eventPayload(event)); } catch { /* Feedback must work without analytics. */ }
}

export function normalizePhrase(text: string) {
  return text.normalize('NFKC').toLowerCase().replace(/[’‘]/g, "'").replace(/[.!?,;:]+$/g, '').trim().replace(/\s+/g, ' ');
}

export function findExactExample<T extends { quote: string }>(text: string, examples: T[]): T | undefined {
  const key = normalizePhrase(text.trim());
  if (!key) return undefined;
  return examples.find(item => normalizePhrase(item.quote) === key);
}
