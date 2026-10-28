import { NEW_GUIDES } from './new-guides';
import type { Guide } from './guide-types';

export const GUIDE_LIST_UPDATED = '2026-10-28';
export const GUIDES: Record<string, Guide> = {
  ...NEW_GUIDES,
  'slow-replies': {
    title: 'Slow Replies in Dating: What to Check Before You Assume',
    description: 'A practical guide to slow dating replies: distinguish communication habits, missed plans, and mismatched expectations, with clear questions to ask.',
    intro: 'A slow reply tells you when someone answered. It does not, on its own, tell you why. Start with the kind of message you sent and whether the two of you had an agreement about a response.',
    rows: [
      ['An open-ended chat pauses', 'No practical decision is waiting', 'Reply when it suits you; discuss preferences if the rhythm bothers you.'],
      ['A date needs confirmation', 'Your time depends on an answer', 'Ask one clear question and give a confirmation time that works for your plans.'],
      ['An agreed call is missed', 'A shared expectation was not met', 'Ask what happened and agree on a more workable time.'],
      ['The same problem repeats after a conversation', 'Your request has not led to a workable arrangement', 'Decide whether the actual communication meets your needs.'],
    ],
    sections: [
      { heading: '1. Separate observation from interpretation', paragraphs: ['“They answered the next morning” is an observation. “They wanted to punish me” is an interpretation. Both can feel equally convincing when you are anxious about a reply, but only the first is established by the message history.', 'Write down the practical question you need answered. Often it is not “How interested are they?” but “Are we meeting tomorrow?” or “Can we agree on a way to keep in touch?” Those questions give the other person something concrete to respond to.'] },
      { heading: '2. Ask whether an alternative exists', paragraphs: ['A person who dislikes messaging may prefer a short call or in-person plans. You can be open to that without agreeing to an arrangement in which all contact happens on their terms.', 'For example, checking an app once a day and reliably confirming dates can work if both people understand the routine. Saying “I barely use this app” while leaving every plan unsettled creates a different practical problem. The distinction is follow-through, not a hidden personality type.'] },
      { heading: '3. Make expectations mutual', paragraphs: ['Try: “I don’t need instant replies. When we make a plan, I’d like us to confirm it the day before. Would that work for you?” Then listen to what they can realistically offer.', 'There is no universal reply-time rule that can settle compatibility. A new match, an established relationship, and an urgent change of plans have different contexts. A routine you both choose is more useful than an unspoken test of how many minutes a reply takes.'] },
      { heading: '4. Choose a next step based on the pattern', paragraphs: ['If a clear request leads to a workable routine, the original delay may no longer need decoding. If the pattern continues, decide whether to reduce your investment or stop making open-ended plans.', 'Avoid creating a second guessing game by deliberately delaying replies as a punishment. You can protect your time directly: “If we haven’t confirmed by Friday evening, I’ll assume the plan is off.” That describes what you will do without claiming to know what the other person feels.'] },
    ],
    articleSlugs: ['my-notifications-turned-off', 'bad-at-texting', 'sorry-i-fell-asleep'],
    relatedGuides: ['he-only-texts-at-night', 'hot-and-cold-texting', 'he-texts-every-day-but-never-makes-plans'],
    nextGuide: 'relationship-intentions',
  },
  'relationship-intentions': {
    title: 'Mixed Signals in Dating: Clarify Intentions and Commitment',
    description: 'Separate attraction, availability, and commitment when dating feels unclear. Compare common phrases and ask specific questions about what happens next.',
    intro: 'Mixed signals often combine two different things: affection in the moment and uncertainty about the relationship. Instead of trying to decode which signal is “real,” ask what arrangement is actually being offered and whether it suits you.',
    rows: [
      ['“I’m not looking for anything serious”', 'A committed relationship is not being offered now', 'What does casual dating include for each of us?'],
      ['“Let’s go with the flow”', 'The direction or pace is undefined', 'Are you open to a relationship, or do you want to keep this casual?'],
      ['“I like you, but I’m not ready”', 'Affection and availability may differ', 'Are you suggesting friendship, casual dating, or a pause?'],
      ['“I need to focus on myself”', 'The present arrangement may need to change', 'Do you mean less contact, a break, or ending things?'],
    ],
    sections: [
      { heading: '1. Distinguish interest from a shared agreement', paragraphs: ['Someone can enjoy your company, send affectionate messages, and still not want exclusivity. Those actions can feel romantic without answering what kind of relationship they are choosing.', 'Conversely, a person can be clear about wanting a relationship while preferring a slower pace. The helpful distinction is between a direction you both understand and a future one person is privately assuming.'] },
      { heading: '2. Ask about the decision that affects you', paragraphs: ['“What are we?” can be a starting point, but a more specific question may uncover the actual mismatch. Do you want exclusivity? A plan to keep dating? Less romantic contact if friendship is all that is available?', 'Try: “I’m interested in dating toward a relationship. Is that something you are open to?” Asking for information is different from requiring someone to want the same thing. An honest mismatch can still hurt, but it gives you a clearer choice.'] },
      { heading: '3. Treat the current answer as the current answer', paragraphs: ['“Not now” can change, but it is not a commitment to change. If you continue, decide whether the arrangement works without assuming a future upgrade.', 'For example, choosing casual dating because you also want it is different from accepting it while hoping enough patience will earn a relationship. You do not need to criticize someone’s preference to say it does not match your own.'] },
      { heading: '4. Choose a boundary instead of a decoding contest', paragraphs: ['A boundary might be declining exclusivity without a mutual agreement, pausing romantic contact while deciding what you want, or ending an arrangement that leaves you continually uncertain.', 'If you both want to revisit the conversation, agree on contact and expectations in the meantime. A check-in creates another chance to talk; it does not guarantee that either person will have different feelings. Repeated vagueness is information about the clarity currently available, even when the hidden reason remains unknown.'] },
    ],
    articleSlugs: ['not-looking-for-anything-serious-right-now', 'just-go-with-the-flow', 'not-ready-for-a-relationship-right-now-but-i-really-like-you', 'i-really-need-to-focus-on-myself-right-now'],
    relatedGuides: ['he-texts-every-day-but-never-makes-plans', 'hot-and-cold-texting'],
    nextGuide: 'slow-replies',
  },
};

export type GuideSlug = keyof typeof GUIDES;
export function getGuide(slug: string) { return Object.prototype.hasOwnProperty.call(GUIDES, slug) ? GUIDES[slug] : undefined; }
