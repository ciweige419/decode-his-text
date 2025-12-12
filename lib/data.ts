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
  },
  {
    slug: 'not-ready-for-relationship',
    quote: "I'm not ready for a relationship right now, but I really like you.",
    translation: "I am ready for a relationship, just not with YOU. I want to keep you around as a placeholder until I find someone I actually want to commit to.",
    score: 5,
    roast: "The oldest lie in the book. Translation: 'I want all the perks of a girlfriend with none of the responsibility.' Watch him get into a serious relationship with the next girl 2 weeks after you break up.",
    keywords: ["commitment issues", "friendzone", "mixed signals"]
  },
  {
    slug: 'you-are-intimidating',
    quote: "You are just so intimidating.",
    translation: "You have standards and boundaries, and that makes it hard for me to manipulate you.",
    score: 4,
    roast: "He's telling on himself. 'Intimidating' is weak-man code for 'I can't control you.' He wants a woman with low self-esteem who won't call him out on his nonsense. Keep being 'intimidating', queen.",
    keywords: ["negging", "insecure men", "dating red flags"]
  },
  {
    slug: 'just-joking-sensitive',
    quote: "I was just joking, you're too sensitive.",
    translation: "I said something mean to test your boundaries. Now that you got upset, I'm gaslighting you into thinking YOU are the problem.",
    score: 5,
    roast: "Gaslighting 101. If a joke hurts you, it's not a joke, it's an insult. He's not funny, he's just mean. Do not let him minimize your feelings.",
    keywords: ["gaslighting", "emotional abuse", "narcissist"]
  },
  {
    slug: 'hate-drama',
    quote: "I hate drama.",
    translation: "I create chaos everywhere I go, but I refuse to take accountability for it. If you express any negative emotion, I will label you 'crazy'.",
    score: 5,
    roast: "Men who 'hate drama' are usually the conductors of the drama train. He lacks emotional intelligence and will dismiss your valid concerns as 'drama'. Run.",
    keywords: ["toxic relationships", "emotional unavailability", "red flag"]
  },
  {
    slug: 'see-where-night-takes-us',
    quote: "Let's just see where the night takes us.",
    translation: "I am hoping the night takes us to your bedroom. I have zero plans to actually take you on a date.",
    score: 3,
    roast: "Lazy. Low effort. He wants a hookup but is too cowardly to ask directly. If he wanted to take you on a date, he would have made a reservation.",
    keywords: ["hookup culture", "low effort men", "casual dating"]
  },
  {
    slug: 'shes-just-a-friend',
    quote: "Don't worry about her, she's just a friend.",
    translation: "She is my backup plan, or I am currently sleeping with her. Your intuition is right, and I am lying.",
    score: 4,
    roast: "If he has to say 'don't worry', you should worry. Secure friendships don't need defensive explanations. Trust your gut—if it feels weird, it IS weird.",
    keywords: ["cheating signs", "micro-cheating", "jealousy"]
  },
  {
    slug: 'sorry-you-feel-that-way',
    quote: "I'm sorry you feel that way.",
    translation: "I am not sorry for what I did. I am only annoyed that you are reacting to it. This is a non-apology.",
    score: 5,
    roast: "This is NOT an apology. An apology requires accountability ('I'm sorry I did X'). This is just him dismissing your emotions. He lacks empathy.",
    keywords: ["fake apology", "gaslighting", "communication issues"]
  },
  {
    slug: 'not-like-other-guys',
    quote: "I'm not like other guys.",
    translation: "I am exactly like other guys, but with a superiority complex. I will likely disappoint you in a very specific, 'unique' way.",
    score: 3,
    roast: "Any man who has to announce he's a 'nice guy' or 'different' usually isn't. Show, don't tell. This is a 'Pick Me' boy in disguise.",
    keywords: ["nice guy syndrome", "soft boi", "dating cliches"]
  },
  {
    slug: 'crazy-connection',
    quote: "We have such a crazy connection, let's skip the small talk.",
    translation: "I want to rush intimacy to get what I want (sex/validation) before you realize who I really am.",
    score: 4,
    roast: "Slow down. Real connection is built, not found instantly. He's trying to fast-forward the relationship to bypass your vetting process. It's a trap.",
    keywords: ["love bombing", "rushing intimacy", "future faking"]
  },
  {
    slug: 'bad-at-making-plans',
    quote: "I'm terrible at making plans, I'm more spontaneous.",
    translation: "I don't value your time enough to schedule it in advance. I want you to be available whenever I'm bored.",
    score: 3,
    roast: "Spontaneity is cute for a vacation, not for a Tuesday night date. If he can plan a boys' trip or a fantasy football league, he can plan a date. He just chooses not to.",
    keywords: ["low effort", "breadcrumbing", "flaky"]
  },
  {
    slug: 'never-met-anyone-like-you',
    quote: "I've never met anyone like you before.",
    translation: "I am mirroring your personality to make you like me. I will say this to the next girl next month.",
    score: 4,
    roast: "Standard Love Bombing script. He's putting you on a pedestal so high that the fall will break your ankles. Enjoy the compliment, but check his actions.",
    keywords: ["love bombing", "mirroring", "narcissist"]
  },
  {
    slug: 'my-phone-died',
    quote: "Sorry, my phone died.",
    translation: "I saw your text, ignored it, went out, and now I'm back and need attention. I didn't care enough to charge my phone or find a charger.",
    score: 2,
    roast: "In 2025? Who lets their phone die for 12 hours? He has a charger in his car, at his desk, and in his pocket. He just didn't want to talk to you.",
    keywords: ["slow fading", "ghosting", "lying"]
  },
  {
    slug: 'trust-issues',
    quote: "I have trust issues because of my ex.",
    translation: "I will make you pay for crimes you didn't commit. I will check your phone and control who you see, but I will cheat on you.",
    score: 5,
    roast: "He needs a therapist, not a girlfriend. He's setting the stage to be controlling and possessive while playing the victim. Don't try to 'fix' him.",
    keywords: ["controlling behavior", "insecure", "emotional baggage"]
  },
  {
    slug: 'casual-but-exclusive',
    quote: "I want to be exclusive, but not put a label on it.",
    translation: "I want you to be loyal to me, but I want the freedom to leave you without 'technically' breaking up.",
    score: 4,
    roast: "This is a scam. He wants the 'husband package' at the 'stranger price'. If it looks like a duck and quacks like a duck but he refuses to call it a duck, he's playing you.",
    keywords: ["situationship", "fear of commitment", "mixed signals"]
  },
  {
    slug: 'focusing-on-me',
    quote: "I really need to focus on myself right now.",
    translation: "I want to break up (or reject you), but I want to sound noble about it.",
    score: 2,
    roast: "Translation: 'It's not me, it's you... but I'm saying it's me.' Let him focus on himself. Alone. Block him and help him focus.",
    keywords: ["breakup lines", "soft rejection", "emotional unavailability"]
  },
  {
    slug: 'come-over-chill',
    quote: "Do you want to come over and watch a movie?",
    translation: "I want sex. There will be no movie, or a very bad movie that we ignore.",
    score: 3,
    roast: "Netflix and Chill is not a date. If he hasn't taken you out in public yet, you are not dating, you are a hookup. Unless you just want sex too, then go for it.",
    keywords: ["hookup signs", "low effort date", "netflix and chill"]
  },
  {
    slug: 'kind-of-seeing-someone',
    quote: "I'm kind of seeing someone, but it's complicated.",
    translation: "I have a girlfriend, but I'm looking to cheat. I'm testing if you have low enough morals to be the side piece.",
    score: 5,
    roast: "It's not complicated. He's taken. He's fishing for a backup option. If he'll cheat WITH you, he'll cheat ON you. Next.",
    keywords: ["cheating", "emotional affair", "red flag"]
  },
  {
    slug: 'acting-crazy',
    quote: "Why are you acting so crazy?",
    translation: "I pushed you to your breaking point, and now I'm using your reaction to invalidate your valid feelings.",
    score: 5,
    roast: "Reactive Abuse. He pokes you until you explode, then points the finger and says 'Look how crazy she is.' Don't take the bait. Walk away silently.",
    keywords: ["reactive abuse", "gaslighting", "toxic argument"]
  },
  {
    slug: 'good-morning-beautiful',
    quote: "Good morning beautiful (mass text)",
    translation: "I am copy-pasting this to 5 other girls to see who bites. I am fishing for validation.",
    score: 3,
    roast: "Generic. Lazy. Low effort. If it feels like a mass email, it probably is. Check if he actually asks about your day or just wants a generic ego boost.",
    keywords: ["breadcrumbing", "player tactics", "dating apps"]
  }
];

export function getQuoteBySlug(slug: string) {
  return TOXIC_QUOTES.find((q) => q.slug === slug);
}


