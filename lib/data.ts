import { generateSeoSlug } from './slug';
import { PHRASE_LIST } from './phrases';
import { SEARCH_ARTICLES } from './search-content';

export interface QuoteData {
  slug: string;
  quote: string;
  translation: string;
  score: number;
  roast: string;
  keywords: string[];
  psychologyContent: string;
}

export const TOXIC_QUOTES: QuoteData[] = PHRASE_LIST.map(phrase => {
  const article = SEARCH_ARTICLES[phrase.slug];
  if (!article) throw new Error(`Missing editorial content for ${phrase.slug}`);
  return { ...phrase, translation: article.answer, roast: article.sections[0].paragraphs[0], psychologyContent: '' };
});

// 旧 slug 到新 slug 的映射（用于重定向）
export const SLUG_REDIRECTS: Record<string, string> = {
  'not-looking-for-serious': generateSeoSlug("I'm not looking for anything serious right now."),
  'go-with-the-flow': generateSeoSlug("Let's just go with the flow."),
  'busy-with-work': generateSeoSlug("I'm just really busy with work right now."),
  'my-ex-was-crazy': generateSeoSlug("My ex was crazy."),
  'bad-at-texting': generateSeoSlug("I'm bad at texting."),
  'dont-want-to-ruin-friendship': generateSeoSlug("I don't want to ruin our friendship."),
  'you-deserve-better': generateSeoSlug("You deserve better than me."),
  'never-felt-this-way': generateSeoSlug("I've never felt this connection with anyone before."),
  'not-ready-for-relationship': generateSeoSlug("I'm not ready for a relationship right now, but I really like you."),
  'you-are-intimidating': generateSeoSlug("You are just so intimidating."),
  'just-joking-sensitive': generateSeoSlug("I was just joking, you're too sensitive."),
  'hate-drama': generateSeoSlug("I hate drama."),
  'see-where-night-takes-us': generateSeoSlug("Let's just see where the night takes us."),
  'shes-just-a-friend': generateSeoSlug("Don't worry about her, she's just a friend."),
  'sorry-you-feel-that-way': generateSeoSlug("I'm sorry you feel that way."),
  'not-like-other-guys': generateSeoSlug("I'm not like other guys."),
  'crazy-connection': generateSeoSlug("We have such a crazy connection, let's skip the small talk."),
  'bad-at-making-plans': generateSeoSlug("I'm terrible at making plans, I'm more spontaneous."),
  'never-met-anyone-like-you': generateSeoSlug("I've never met anyone like you before."),
  'my-phone-died': generateSeoSlug("Sorry, my phone died."),
  'trust-issues': generateSeoSlug("I have trust issues because of my ex."),
  'casual-but-exclusive': generateSeoSlug("I want to be exclusive, but not put a label on it."),
  'focusing-on-me': generateSeoSlug("I really need to focus on myself right now."),
  'come-over-chill': generateSeoSlug("Do you want to come over and watch a movie?"),
  'kind-of-seeing-someone': generateSeoSlug("I'm kind of seeing someone, but it's complicated."),
  'acting-crazy': generateSeoSlug("Why are you acting so crazy?"),
  'good-morning-beautiful': generateSeoSlug("Good morning beautiful (mass text)"),
  'hey-stranger': generateSeoSlug("Hey stranger."),
  'i-thought-i-replied': generateSeoSlug("Omg I'm so sorry, I drafted a reply and thought I sent it!"),
  'deleted-the-app': generateSeoSlug("Sorry I've been quiet, I deleted the app for a mental health detox."),
  'work-has-been-insane': generateSeoSlug("Work has just been absolutely insane this week."),
  'not-ignoring-you': generateSeoSlug("I promise I'm not ignoring you!"),
  'bad-headspace': generateSeoSlug("I'm just in a weird headspace right now."),
  'miss-your-face': generateSeoSlug("I miss your face."),
  'lost-my-phone': generateSeoSlug("I lost my phone / got a new number."),
  'didnt-want-to-lead-on': generateSeoSlug("I pulled back because I didn't want to lead you on."),
  'family-emergency': generateSeoSlug("Sorry, had a family emergency."),
  'scared-of-how-much-like': generateSeoSlug("I got scared because I like you too much."),
  'forgot-to-hit-send': generateSeoSlug("I literally forgot to hit send."),
  'social-battery-drained': generateSeoSlug("My social battery is just drained."),
  'fell-asleep': generateSeoSlug("Sorry I fell asleep."),
  'notifications-off': generateSeoSlug("I have my notifications turned off."),
  'just-saw-this': generateSeoSlug("Just saw this!"),
  'raincheck-ghost': generateSeoSlug("Can we raincheck? (and never reschedules)"),
  'u-up': generateSeoSlug("U up?"),
  'thinking-of-you': generateSeoSlug("Thinking of you."),
  'left-on-read': generateSeoSlug("*Left on Read*")
};

export function getQuoteBySlug(slug: string) {
  return TOXIC_QUOTES.find((q) => q.slug === slug);
}

export function getRedirectSlug(oldSlug: string) {
  return SLUG_REDIRECTS[oldSlug];
}
