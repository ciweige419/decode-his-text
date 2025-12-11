export interface QuoteData {
  slug: string;
  quote: string;
  translation: string;
  score: number; // 1-5
  roast: string;
  keywords: string[];
}

export const TOXIC_QUOTES: QuoteData[] = [
  {
    slug: 'not-looking-for-serious',
    quote: "I'm not looking for anything serious right now.",
    translation: "I want girlfriend benefits without boyfriend duties. Keeping options open for someone 'better'.",
    score: 4,
    roast: "Ah, the classic 'Soft Boi' anthem. He wants to sleep with you and vent about his day, but the second you ask 'what are we?', he'll remind you he 'communicated boundaries'.",
    keywords: ["situationship", "commitment issues", "dating red flags"]
  },
  {
    slug: 'go-with-the-flow',
    quote: "Let's just go with the flow.",
    translation: "I have no plan to commit. You are a placeholder until I get bored.",
    score: 5,
    roast: "'Flow' implies going down the drain. He's saying, 'I don't like you enough to date you, but I don't hate you enough to block you.' You are a convenience store, and he's browsing.",
    keywords: ["dating advice", "casual dating", "nato dating"]
  },
  {
    slug: 'busy-with-work',
    quote: "I'm just really busy with work right now.",
    translation: "You are not a priority. If he wanted to, he would.",
    score: 3,
    roast: "Beyoncé is busy. The President is busy. This guy manages a spreadsheet. If he can watch Instagram stories, he can text you back. He's not busy, he's just not that into you.",
    keywords: ["mixed signals", "slow fading", "he takes hours to text"]
  },
  {
    slug: 'my-ex-was-crazy',
    quote: "My ex was crazy.",
    translation: "I drove her crazy and now I'm playing the victim.",
    score: 5,
    roast: "Red Flag Alert 🚩. If all his exes are 'crazy', the common denominator is HIM. He lacks accountability and will likely call YOU crazy to his next girl.",
    keywords: ["narcissist", "gaslighting", "toxic ex"]
  },
  {
    slug: 'bad-at-texting',
    quote: "I'm bad at texting.",
    translation: "I'm on my phone 24/7, just not for you.",
    score: 2,
    roast: "Lies. He has his phone in his hand right now. He's watching TikToks. 'Bad at texting' translates to 'Low Effort'. Don't settle for crumbs.",
    keywords: ["dry texting", "breadcrumbing"]
  },
  {
    slug: 'dont-want-to-ruin-friendship',
    quote: "I don't want to ruin our friendship.",
    translation: "I'm not sexually attracted to you, but I like the attention.",
    score: 1,
    roast: "You are firmly in the Friendzone. He values your emotional labor but will never give you the romance you want. Stop hoping, start moving on.",
    keywords: ["friendzone", "unrequited love"]
  },
  {
    slug: 'you-deserve-better',
    quote: "You deserve better than me.",
    translation: "I am going to hurt you, and this is my pre-emptive fake apology.",
    score: 5,
    roast: "Believe him. He is handing you a permission slip to leave. Take it. He knows he's trash, so let the trash take itself out.",
    keywords: ["low self esteem", "manipulation", "breakup lines"]
  },
  {
    slug: 'never-felt-this-way',
    quote: "I've never felt this connection with anyone before.",
    translation: "I say this to every girl on the second date to get in her pants.",
    score: 5,
    roast: "Love Bombing 101. If he's planning your wedding after 2 weeks, he's not in love, he's a narcissist seeking supply. Real connection takes time, not a script.",
    keywords: ["love bombing", "moving too fast", "narcissistic patterns"]
  }
];

export function getQuoteBySlug(slug: string) {
  return TOXIC_QUOTES.find((q) => q.slug === slug);
}

