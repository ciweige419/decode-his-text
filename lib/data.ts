export interface QuoteData {
  slug: string;
  quote: string;
  translation: string;
  score: number; // 1-5
  roast: string;
  keywords: string[];
  psychologyContent: string; // HTML string for SEO content
}

// 去主语的标准化 slug 生成函数
function generateSeoSlug(quote: string): string {
  return quote
    // 去除常见主语开头
    .replace(/^(I'm|I am|He says|She says|He said|She said|I've|I have|Let's|You|We|They|Don't|Can't|Won't)\s+/i, '')
    // 去除标点符号
    .replace(/[.,!?;:'"]/g, '')
    // 转换为小写并用连字符替换空格
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    // 移除多余的连字符
    .replace(/-+/g, '-')
    // 移除开头和结尾的连字符
    .replace(/^-+|-+$/g, '');
}

// 创建基础心理学内容模板
const createBasicPsychologyContent = (quote: string, score: number): string => {
  const highScoreAnalysis = score >= 4 ?
    `<p>This phrase represents a significant relationship red flag that often indicates <strong>avoidant attachment patterns</strong>, <strong>fear of commitment</strong>, or <strong>manipulative behavior</strong>. The person using this language is typically creating emotional distance while maintaining access to intimacy benefits.</p>` :
    `<p>While potentially less severe, this communication pattern still reveals important insights into <strong>emotional availability</strong> and <strong>relationship readiness</strong>. The phrase may indicate varying levels of self-awareness, communication skills, or emotional maturity.</p>`;

  const frameControlAnalysis = score >= 4 ?
    `<p>This language establishes a power imbalance where one person controls relationship terms without mutual investment. It's a form of <strong>frame control</strong> that prevents genuine partnership development.</p>` :
    `<p>The communication style may unintentionally create confusion or unclear expectations, potentially leading to misunderstandings and emotional disconnection.</p>`;

  const breadcrumbingAnalysis = score >= 3 ?
    `<p>Often accompanied by <strong>breadcrumbing behaviors</strong>—providing just enough attention to maintain interest without real investment. This creates anxiety and uncertainty through inconsistent communication patterns.</p>` :
    `<p>This may reflect genuine communication challenges or different relationship expectations that require open discussion and mutual understanding.</p>`;

  return `
    <h3>The Psychology Behind "${quote}"</h3>
    <p>This common dating phrase reveals critical insights into attachment styles, emotional availability, and relationship intentions. Understanding the psychological mechanisms behind these words helps recognize <strong>toxic communication patterns</strong> and make informed dating decisions.</p>

    <h3>Attachment Style Analysis</h3>
    ${highScoreAnalysis}

    <h3>Power Dynamics and Frame Control</h3>
    ${frameControlAnalysis}
    <p>When someone uses vague or non-committal language, they're maintaining <strong>emotional control</strong> while avoiding vulnerability. Healthy relationships require mutual investment and clear communication, not ambiguity that serves one person's convenience.</p>

    <h3>Communication Pattern Recognition</h3>
    ${breadcrumbingAnalysis}
    <p>The pattern of inconsistent or minimal effort often indicates deeper <strong>commitment issues</strong> or emotional wounds. People who are genuinely interested typically demonstrate consistent effort and clear communication.</p>

    <h3>Setting Healthy Boundaries</h3>
    <p>Recognizing these communication patterns enables setting appropriate boundaries and seeking relationships built on mutual respect. Your emotional wellbeing deserves to be prioritized, and clear communication is the foundation of healthy partnership.</p>

    <h3>Relationship Readiness Assessment</h3>
    <p>Adults who are emotionally ready for healthy relationships don't need to create confusion or ambiguity. They communicate clearly, invest consistently, and demonstrate their interest through actions rather than vague statements. Understanding these patterns helps distinguish between <strong>low effort behavior</strong> and genuine relationship potential.</p>
  `;
};

// 原始数据（用于生成新的 SEO slug）
const QUOTE_DATA: Omit<QuoteData, 'slug'>[] = [
  {
    quote: "I'm not looking for anything serious right now.",
    translation: "I want girlfriend benefits without boyfriend duties. Keeping options open for someone 'better'.",
    score: 4,
    roast: "Ah, the classic 'Soft Boi' anthem. He wants to sleep with you and vent about his day, but the second you ask 'what are we?', he'll remind you he 'communicated boundaries'.",
    keywords: ["situationship", "commitment issues", "dating red flags"],
    psychologyContent: `
      <h3>The Psychology Behind "I'm Not Looking for Anything Serious"</h3>
      <p>This phrase represents one of the most common dating red flags in modern relationships. When someone says they're not looking for anything serious, they're typically engaging in avoidant attachment behavior—a defensive mechanism designed to protect themselves from emotional vulnerability and potential rejection.</p>

      <h3>Why Men Use This Phrase</h3>
      <p>Men who consistently use this line often struggle with commitment anxiety and emotional immaturity. The phrase serves multiple psychological purposes: it sets low expectations, removes accountability, and creates an escape route. By establishing these terms upfront, they can enjoy the benefits of emotional and physical intimacy without the perceived burdens of commitment.</p>

      <h3>Power Dynamics and Control</h3>
      <p>This statement immediately establishes a power imbalance in the relationship. One person gets to define all terms while the other must either accept or reject them entirely. It's a form of emotional control that prevents genuine partnership development. The person using this phrase maintains all the power while receiving all the benefits.</p>

      <h3>The Impact on Self-Worth</h3>
      <p>Being on the receiving end of this statement can significantly damage self-esteem. It implicitly communicates that you're not worthy of commitment, that you're "good enough for now but not for forever." This can trigger abandonment issues and create a cycle of seeking validation from emotionally unavailable partners.</p>

      <h3>How to Recognize the Pattern</h3>
      <p>If someone says this but continues to act like your boyfriend—texting daily, introducing you to friends, sharing intimate moments—they're engaging in contradictory behavior. This inconsistency often indicates deeper emotional wounds or narcissistic tendencies. Healthy adults either commit or maintain clear boundaries; they don't create confusion.</p>
    `
  },
  {
    quote: "Let's just go with the flow.",
    translation: "I have no plan to commit. You are a placeholder until I get bored.",
    score: 5,
    roast: "'Flow' implies going down the drain. He's saying, 'I don't like you enough to date you, but I don't hate you enough to block you.' You are a convenience store, and he's browsing.",
    keywords: ["dating advice", "casual dating", "nato dating"],
    psychologyContent: `
      <h3>The Psychology Behind "Let's Just Go With the Flow"</h3>
      <p>Perhaps the most insidious phrase in modern dating, "let's just go with the flow" represents the ultimate commitment-avoidance strategy. This seemingly innocent suggestion actually masks a deep-seated fear of intimacy and unwillingness to invest emotionally in another person.</p>

      <h3>Avoidant Attachment in Action</h3>
      <p>People who consistently suggest "going with the flow" typically exhibit avoidant attachment patterns. They crave intimacy but simultaneously fear it, creating a push-pull dynamic that keeps potential partners emotionally off-balance. By refusing to define the relationship, they maintain emotional distance while still享受ing the benefits of connection.</p>

      <h3>The Illusion of Spontaneity</h3>
      <p>The flow metaphor suggests natural, effortless progression, but in reality, it's carefully manufactured ambiguity. Most successful relationships require intentional planning, communication, and mutual investment. "Going with the flow" removes these requirements while creating the illusion that something meaningful might develop spontaneously.</p>

      <h3>Power and Control Dynamics</h3>
      <p>This phrase immediately establishes a power imbalance where one person gets to maintain complete control over the relationship's direction. They can reap all benefits of partnership without any of the responsibilities. It's emotional freeloading disguised as spiritual openness.</p>

      <h3>Recognition and Response</h3>
      <p>Healthy adults don't fear clarity or definition. When someone resists defining the relationship while wanting all the benefits, they're not "going with the flow"—they're going with their convenience. The appropriate response is to redirect toward clarity or redirect your energy elsewhere.</p>
    `
  },
  {
    quote: "I'm just really busy with work right now.",
    translation: "You are not a priority. If he wanted to, he would.",
    score: 3,
    roast: "Beyoncé is busy. The President is busy. This guy manages a spreadsheet. If he can watch Instagram stories, he can text you back. He's not busy, he's just not that into you.",
    keywords: ["mixed signals", "slow fading", "he takes hours to text"],
    psychologyContent: createBasicPsychologyContent("I'm just really busy with work right now.", 3)
  },
  {
    quote: "My ex was crazy.",
    translation: "I drove her crazy and now I'm playing the victim.",
    score: 5,
    roast: "Red Flag Alert 🚩. If all his exes are 'crazy', the common denominator is HIM. He lacks accountability and will likely call YOU crazy to his next girl.",
    keywords: ["narcissist", "gaslighting", "toxic ex"],
    psychologyContent: createBasicPsychologyContent("My ex was crazy.", 5)
  },
  {
    quote: "I'm bad at texting.",
    translation: "I'm on my phone 24/7, just not for you.",
    score: 2,
    roast: "Lies. He has his phone in his hand right now. He's watching TikToks. 'Bad at texting' translates to 'Low Effort'. Don't settle for crumbs.",
    keywords: ["dry texting", "breadcrumbing"],
    psychologyContent: `
      <h3>The Psychology Behind "I'm Bad at Texting"</h3>
      <p>In the age of smartphones and constant connectivity, claiming to be "bad at texting" has become one of the most transparent and frustrating excuses in modern dating. This statement reveals more about a person's priorities and emotional investment than they realize.</p>

      <h3>Effort vs. Interest</h3>
      <p>Communication patterns directly reflect interest levels. When someone genuinely cares about another person, they find ways to stay connected regardless of their texting "abilities." The "bad at texting" excuse is actually a declaration of low priority—this person isn't important enough to warrant minimal effort.</p>

      <h3>Modern Communication Realities</h3>
      <p>Most adults today spend 4-7 hours daily on their phones. We order food, book appointments, manage work, and maintain friendships through text. Sudden texting incompetence exclusively with romantic interests reveals selective attention, not actual inability.</p>

      <h3>Emotional Avoidance Patterns</h3>
      <p>People who use this excuse often struggle with emotional intimacy. Texting creates a record of conversation and emotional investment that some find threatening. By claiming incompetence, they avoid the vulnerability that comes with consistent, meaningful communication.</p>

      <h3>TheBreadcrumbing Connection</h3>
      <p>"Bad at texting" frequently accompanies breadcrumbing behavior—sending just enough communication to keep someone interested without real investment. These inconsistent communication patterns create anxiety and uncertainty, which some people find psychologically addictive.</p>

      <h3>Healthy Communication Standards</h3>
      <p>Adults in healthy relationships don't make excuses for poor communication. They discuss preferences, find compatible communication styles, and prioritize staying connected. If someone can't maintain basic communication, they're not ready for a relationship.</p>
    `
  },
  {
    quote: "I don't want to ruin our friendship.",
    translation: "I'm not sexually attracted to you, but I like the attention.",
    score: 1,
    roast: "You are firmly in the Friendzone. He values your emotional labor but will never give you the romance you want. Stop hoping, start moving on.",
    keywords: ["friendzone", "unrequited love"],
    psychologyContent: `
      <h3>The Psychology Behind "I Don't Want to Ruin Our Friendship"</h3>
      <p>This classic friendzone statement reveals a fundamental mismatch in romantic interest and emotional intelligence. While often framed as protective of the friendship, it typically serves as a gentle rejection that maintains the benefits of emotional connection without romantic commitment.</p>

      <h3>Emotional Safety vs. Authenticity</h3>
      <p>People who use this phrase often struggle with direct communication and conflict avoidance. Rather than being honest about lack of romantic interest, they create a scenario that sounds caring while actually being self-serving. They want to keep the emotional support without romantic responsibility.</p>

      <h3>Attraction Reality Check</h3>
      <p>When someone is genuinely romantically interested, friendship enhancement is typically viewed as a positive foundation, not a barrier. This phrase almost always indicates lack of physical or romantic attraction, regardless of how much they "value" the friendship.</p>

      <h3>Breaking the Cycle</h3>
      <p>Accepting this statement while hoping for change creates unhealthy relationship patterns. Healthy adults either pursue romantic interest honestly or maintain platonic boundaries clearly. Mixed signals lead to emotional confusion and prolonged disappointment.</p>
    `
  },
  {
    quote: "You deserve better than me.",
    translation: "I am going to hurt you, and this is my pre-emptive fake apology.",
    score: 5,
    roast: "Believe him. He is handing you a permission slip to leave. Take it. He knows he's trash, so let the trash take itself out.",
    keywords: ["low self esteem", "manipulation", "breakup lines"],
    psychologyContent: `
      <h3>The Psychology Behind "You Deserve Better Than Me"</h3>
      <p>This seemingly self-aware statement often masks manipulation and emotional cowardice. While appearing humble and considerate, it's typically a preemptive excuse for poor behavior and a way to avoid taking responsibility for hurting someone.</p>

      <h3>False Humility and Control</h3>
      <p>This phrase puts the responsibility for the breakup on the recipient while making the speaker appear noble. It's a form of emotional manipulation that forces the other person to either argue for the relationship's worth or accept the "generous" offer to leave.</p>

      <h3>Accountability Avoidance</h3>
      <p>By claiming inadequacy upfront, the speaker creates a built-in excuse for future poor behavior. They can always say "I told you so" when things go wrong, avoiding genuine accountability for their actions.</p>

      <h3>Self-Fulfilling Prophecy</h3>
      <p>People who genuinely believe they don't deserve good relationships often sabotage them. This statement may reflect genuine low self-esteem or it may be a calculated manipulation technique.</p>
    `
  },
  {
    quote: "I've never felt this connection with anyone before.",
    translation: "I say this to every girl on the second date to get in her pants.",
    score: 5,
    roast: "Love Bombing 101. If he's planning your wedding after 2 weeks, he's not in love, he's a narcissist seeking supply. Real connection takes time, not a script.",
    keywords: ["love bombing", "moving too fast", "narcissistic patterns"],
    psychologyContent: `
      <h3>The Psychology Behind "I've Never Felt This Connection Before"</h3>
      <p>This classic love bombing technique creates artificial intimacy and urgency. While genuine deep connections do exist, this phrase when used early in dating often signals manipulation tactics designed to override rational decision-making.</p>

      <h3>Love Bombing Pattern</h3>
      <p>Narcissistic individuals use intense emotional language to create dependency quickly. By claiming unprecedented connection, they position themselves as irreplaceable and make targets feel uniquely special.</p>

      <h3>Pace and Intensity</h3>
      <p>Healthy relationships develop gradually. This rush of intensity bypasses normal vetting processes and creates emotional investment before red flags become apparent.</p>
    `
  },
  {
    quote: "I'm not ready for a relationship right now, but I really like you.",
    translation: "I am ready for a relationship, just not with YOU. I want to keep you around as a placeholder until I find someone I actually want to commit to.",
    score: 5,
    roast: "The oldest lie in the book. Translation: 'I want all the perks of a girlfriend with none of the responsibility.' Watch him get into a serious relationship with the next girl 2 weeks after you break up.",
    keywords: ["commitment issues", "friendzone", "mixed signals"],
    psychologyContent: createBasicPsychologyContent("I'm not ready for a relationship right now, but I really like you.", 5)
  },
  {
    quote: "You are just so intimidating.",
    translation: "You have standards and boundaries, and that makes it hard for me to manipulate you.",
    score: 4,
    roast: "He's telling on himself. 'Intimidating' is weak-man code for 'I can't control you.' He wants a woman with low self-esteem who won't call him out on his nonsense. Keep being 'intimidating', queen.",
    keywords: ["negging", "insecure men", "dating red flags"],
    psychologyContent: createBasicPsychologyContent("You are just so intimidating.", 4)
  },
  {
    quote: "I was just joking, you're too sensitive.",
    translation: "I said something mean to test your boundaries. Now that you got upset, I'm gaslighting you into thinking YOU are the problem.",
    score: 5,
    roast: "Gaslighting 101. If a joke hurts you, it's not a joke, it's an insult. He's not funny, he's just mean. Do not let him minimize your feelings.",
    keywords: ["gaslighting", "emotional abuse", "narcissist"],
    psychologyContent: createBasicPsychologyContent("I was just joking, you're too sensitive.", 5)
  },
  {
    quote: "I hate drama.",
    translation: "I create chaos everywhere I go, but I refuse to take accountability for it. If you express any negative emotion, I will label you 'crazy'.",
    score: 5,
    roast: "Men who 'hate drama' are usually the conductors of the drama train. He lacks emotional intelligence and will dismiss your valid concerns as 'drama'. Run.",
    keywords: ["toxic relationships", "emotional unavailability", "red flag"],
    psychologyContent: createBasicPsychologyContent("I hate drama.", 5)
  },
  {
    quote: "Let's just see where the night takes us.",
    translation: "I am hoping the night takes us to your bedroom. I have zero plans to actually take you on a date.",
    score: 3,
    roast: "Lazy. Low effort. He wants a hookup but is too cowardly to ask directly. If he wanted to take you on a date, he would have made a reservation.",
    keywords: ["hookup culture", "low effort men", "casual dating"],
    psychologyContent: createBasicPsychologyContent("Let's just see where the night takes us.", 3)
  },
  {
    quote: "Don't worry about her, she's just a friend.",
    translation: "She is my backup plan, or I am currently sleeping with her. Your intuition is right, and I am lying.",
    score: 4,
    roast: "If he has to say 'don't worry', you should worry. Secure friendships don't need defensive explanations. Trust your gut—if it feels weird, it IS weird.",
    keywords: ["cheating signs", "micro-cheating", "jealousy"],
    psychologyContent: createBasicPsychologyContent("Don't worry about her, she's just a friend.", 4)
  },
  {
    quote: "I'm sorry you feel that way.",
    translation: "I am not sorry for what I did. I am only annoyed that you are reacting to it. This is a non-apology.",
    score: 5,
    roast: "This is NOT an apology. An apology requires accountability ('I'm sorry I did X'). This is just him dismissing your emotions. He lacks empathy.",
    keywords: ["fake apology", "gaslighting", "communication issues"],
    psychologyContent: createBasicPsychologyContent("I'm sorry you feel that way.", 5)
  },
  {
    quote: "I'm not like other guys.",
    translation: "I am exactly like other guys, but with a superiority complex. I will likely disappoint you in a very specific, 'unique' way.",
    score: 3,
    roast: "Any man who has to announce he's a 'nice guy' or 'different' usually isn't. Show, don't tell. This is a 'Pick Me' boy in disguise.",
    keywords: ["nice guy syndrome", "soft boi", "dating cliches"],
    psychologyContent: createBasicPsychologyContent("I'm not like other guys.", 3)
  },
  {
    quote: "We have such a crazy connection, let's skip the small talk.",
    translation: "I want to rush intimacy to get what I want (sex/validation) before you realize who I really am.",
    score: 4,
    roast: "Slow down. Real connection is built, not found instantly. He's trying to fast-forward the relationship to bypass your vetting process. It's a trap.",
    keywords: ["love bombing", "rushing intimacy", "future faking"],
    psychologyContent: createBasicPsychologyContent("We have such a crazy connection, let's skip the small talk.", 4)
  },
  {
    quote: "I'm terrible at making plans, I'm more spontaneous.",
    translation: "I don't value your time enough to schedule it in advance. I want you to be available whenever I'm bored.",
    score: 3,
    roast: "Spontaneity is cute for a vacation, not for a Tuesday night date. If he can plan a boys' trip or a fantasy football league, he can plan a date. He just chooses not to.",
    keywords: ["low effort", "breadcrumbing", "flaky"],
    psychologyContent: createBasicPsychologyContent("I'm terrible at making plans, I'm more spontaneous.", 3)
  },
  {
    quote: "I've never met anyone like you before.",
    translation: "I am mirroring your personality to make you like me. I will say this to the next girl next month.",
    score: 4,
    roast: "Standard Love Bombing script. He's putting you on a pedestal so high that the fall will break your ankles. Enjoy the compliment, but check his actions.",
    keywords: ["love bombing", "mirroring", "narcissist"],
    psychologyContent: createBasicPsychologyContent("I've never met anyone like you before.", 4)
  },
  {
    quote: "Sorry, my phone died.",
    translation: "I saw your text, ignored it, went out, and now I'm back and need attention. I didn't care enough to charge my phone or find a charger.",
    score: 2,
    roast: "In 2025? Who lets their phone die for 12 hours? He has a charger in his car, at his desk, and in his pocket. He just didn't want to talk to you.",
    keywords: ["slow fading", "ghosting", "lying"],
    psychologyContent: createBasicPsychologyContent("Sorry, my phone died.", 2)
  },
  {
    quote: "I have trust issues because of my ex.",
    translation: "I will make you pay for crimes you didn't commit. I will check your phone and control who you see, but I will cheat on you.",
    score: 5,
    roast: "He needs a therapist, not a girlfriend. He's setting the stage to be controlling and possessive while playing the victim. Don't try to 'fix' him.",
    keywords: ["controlling behavior", "insecure", "emotional baggage"],
    psychologyContent: createBasicPsychologyContent("I have trust issues because of my ex.", 5)
  },
  {
    quote: "I want to be exclusive, but not put a label on it.",
    translation: "I want you to be loyal to me, but I want the freedom to leave you without 'technically' breaking up.",
    score: 4,
    roast: "This is a scam. He wants the 'husband package' at the 'stranger price'. If it looks like a duck and quacks like a duck but he refuses to call it a duck, he's playing you.",
    keywords: ["situationship", "fear of commitment", "mixed signals"],
    psychologyContent: createBasicPsychologyContent("I want to be exclusive, but not put a label on it.", 4)
  },
  {
    quote: "I really need to focus on myself right now.",
    translation: "I want to break up (or reject you), but I want to sound noble about it.",
    score: 2,
    roast: "Translation: 'It's not me, it's you... but I'm saying it's me.' Let him focus on himself. Alone. Block him and help him focus.",
    keywords: ["breakup lines", "soft rejection", "emotional unavailability"],
    psychologyContent: createBasicPsychologyContent("I really need to focus on myself right now.", 2)
  },
  {
    quote: "Do you want to come over and watch a movie?",
    translation: "I want sex. There will be no movie, or a very bad movie that we ignore.",
    score: 3,
    roast: "Netflix and Chill is not a date. If he hasn't taken you out in public yet, you are not dating, you are a hookup. Unless you just want sex too, then go for it.",
    keywords: ["hookup signs", "low effort date", "netflix and chill"],
    psychologyContent: createBasicPsychologyContent("Do you want to come over and watch a movie?", 3)
  },
  {
    quote: "I'm kind of seeing someone, but it's complicated.",
    translation: "I have a girlfriend, but I'm looking to cheat. I'm testing if you have low enough morals to be the side piece.",
    score: 5,
    roast: "It's not complicated. He's taken. He's fishing for a backup option. If he'll cheat WITH you, he'll cheat ON you. Next.",
    keywords: ["cheating", "emotional affair", "red flag"],
    psychologyContent: createBasicPsychologyContent("I'm kind of seeing someone, but it's complicated.", 5)
  },
  {
    quote: "Why are you acting so crazy?",
    translation: "I pushed you to your breaking point, and now I'm using your reaction to invalidate your valid feelings.",
    score: 5,
    roast: "Reactive Abuse. He pokes you until you explode, then points the finger and says 'Look how crazy she is.' Don't take the bait. Walk away silently.",
    keywords: ["reactive abuse", "gaslighting", "toxic argument"],
    psychologyContent: createBasicPsychologyContent("Why are you acting so crazy?", 5)
  },
  {
    quote: "Good morning beautiful (mass text)",
    translation: "I am copy-pasting this to 5 other girls to see who bites. I am fishing for validation.",
    score: 3,
    roast: "Generic. Lazy. Low effort. If it feels like a mass email, it probably is. Check if he actually asks about your day or just wants a generic ego boost.",
    keywords: ["breadcrumbing", "player tactics", "dating apps"],
    psychologyContent: createBasicPsychologyContent("Good morning beautiful (mass text)", 3)
  },
  // --- Ghosting & Zombieing Collection (消失与诈尸系列) ---
  {
    quote: "Hey stranger.",
    translation: "I ghosted you 3 months ago, but now I'm bored/horny and my other options fell through. I'm testing if you have low enough self-esteem to reply.",
    score: 5,
    roast: "This is 'Zombie-ing' at its finest. He's rising from the dead not because he misses you, but because he's hungry for attention. Do not engage. Leave him in the grave.",
    keywords: ["zombieing", "he came back", "ghosting"],
    psychologyContent: createBasicPsychologyContent("Hey stranger.", 5)
  },
  {
    quote: "Omg I'm so sorry, I drafted a reply and thought I sent it!",
    translation: "I saw your text, ignored it for 4 days, and now I need something from you. I think you are dumb enough to believe this glitch excuse.",
    score: 3,
    roast: "Unless he is 85 years old using a flip phone, he didn't 'forget' to hit send. We live on our phones. He ignored you. Don't let him insult your intelligence.",
    keywords: ["slow fading", "lying", "bad texter"],
    psychologyContent: createBasicPsychologyContent("Omg I'm so sorry, I drafted a reply and thought I sent it!", 3)
  },
  {
    quote: "Sorry I've been quiet, I deleted the app for a mental health detox.",
    translation: "I moved the conversation to WhatsApp/Snapchat with the girls I actually like. You didn't make the cut.",
    score: 4,
    roast: "Funny how his 'detox' didn't stop him from posting stories on Instagram. He didn't delete the app, he deleted his interest in you. Move on.",
    keywords: ["dating app fatigue", "hinge excuses", "soft ghosting"],
    psychologyContent: createBasicPsychologyContent("Sorry I've been quiet, I deleted the app for a mental health detox.", 4)
  },
  {
    quote: "Work has just been absolutely insane this week.",
    translation: "I have time to poop, eat, and scroll TikTok, but I don't value you enough to send a 5-second text.",
    score: 3,
    roast: "No one is that busy. Elon Musk tweets 50 times a day. If he wanted to talk to you, he would find the time. 'Busy' is just a polite way of saying 'Priority #99'.",
    keywords: ["busy trap", "low effort", "mixed signals"],
    psychologyContent: createBasicPsychologyContent("Work has just been absolutely insane this week.", 3)
  },
  {
    quote: "I promise I'm not ignoring you!",
    translation: "I am definitely ignoring you, but I want to keep you on the hook as a backup option for when I'm free.",
    score: 4,
    roast: "If he has to clarify that he's not ignoring you... he's ignoring you. Secure men just reply; they don't give disclaimers about their silence.",
    keywords: ["breadcrumbing", "manipulation", "gaslighting"],
    psychologyContent: createBasicPsychologyContent("I promise I'm not ignoring you!", 4)
  },
  {
    quote: "I'm just in a weird headspace right now.",
    translation: "I want to ghost you, but I want to sound deep and mysterious about it so you don't get mad.",
    score: 4,
    roast: "Translation: He's emotionally unavailable. Don't try to be his therapist. You can't fix his 'headspace', but you can protect yours by blocking him.",
    keywords: ["emotional unavailability", "soft breakup", "dating excuses"],
    psychologyContent: createBasicPsychologyContent("I'm just in a weird headspace right now.", 4)
  },
  {
    quote: "I miss your face.",
    translation: "I haven't texted you in 2 weeks, but I want to see if I can still get a nude or a hookup tonight.",
    score: 5,
    roast: "Lazy. He doesn't miss *you* (your personality, your mind), he misses *your face* (and body). This is a 2 AM booty call disguised as a compliment.",
    keywords: ["booty call", "breadcrumbing", "hoovering"],
    psychologyContent: createBasicPsychologyContent("I miss your face.", 5)
  },
  {
    quote: "I lost my phone / got a new number.",
    translation: "I blocked you / deleted your number, but now I'm back. I am lying to your face.",
    score: 5,
    roast: "In the age of iCloud? Please. He didn't lose his contacts. He's just hoping you've lost your memory of how badly he treated you last time.",
    keywords: ["lying", "ghosting excuses", "toxic ex"],
    psychologyContent: createBasicPsychologyContent("I lost my phone / got a new number.", 5)
  },
  {
    quote: "I pulled back because I didn't want to lead you on.",
    translation: "I ghosted you instead of having a mature conversation. I'm framing my cowardice as 'protecting you'.",
    score: 4,
    roast: "Ghosting IS leading someone on (to wonder where you went). A mature man says 'I'm not interested'. A coward disappears and calls it 'kindness'.",
    keywords: ["cowardice", "ghosting psychology", "avoidant attachment"],
    psychologyContent: createBasicPsychologyContent("I pulled back because I didn't want to lead you on.", 4)
  },
  {
    quote: "Sorry, had a family emergency.",
    translation: "5% chance it's real, 95% chance it's the 'Get Out of Jail Free' card for disappearing for a week.",
    score: 3,
    roast: "If it's real, fair enough. But if he's back on Bumble 2 days later without explaining, the 'emergency' was just him losing interest. Proceed with extreme caution.",
    keywords: ["lying", "red flags", "excuses"],
    psychologyContent: createBasicPsychologyContent("Sorry, had a family emergency.", 3)
  },
  {
    quote: "I got scared because I like you too much.",
    translation: "I am an Avoidant. I will sabotage this relationship the moment it gets real. Ghosting is my defense mechanism.",
    score: 5,
    roast: "Run. This isn't romantic; it's a warning. He's telling you he will punish you for getting close to him. You are not a rehabilitation center for avoidant men.",
    keywords: ["avoidant attachment", "love bombing", "future faking"],
    psychologyContent: createBasicPsychologyContent("I got scared because I like you too much.", 5)
  },
  {
    quote: "I literally forgot to hit send.",
    translation: "I typed it, got distracted by a better offer, and only remembered you now that I'm bored.",
    score: 2,
    roast: "Once? Maybe. Every time? He's just not that into you. People don't forget to text people they are crazy about.",
    keywords: ["low interest", "bad texter", "slow fade"],
    psychologyContent: createBasicPsychologyContent("I literally forgot to hit send.", 2)
  },
  {
    quote: "My social battery is just drained.",
    translation: "I have energy for my friends and video games, just not for you.",
    score: 3,
    roast: "If you drain his battery, you aren't a match. The right person recharges you. Don't beg for the scraps of his energy.",
    keywords: ["introvert excuses", "lack of interest", "incompatibility"],
    psychologyContent: createBasicPsychologyContent("My social battery is just drained.", 3)
  },
  {
    quote: "Sorry I fell asleep.",
    translation: "Sent at 4 PM the next day. I saw your text, didn't feel like replying, and now I'm doing the bare minimum.",
    score: 2,
    roast: "He fell asleep at 8 PM and woke up at 4 PM? Is he a bear hibernating? No, he just didn't prioritize replying to you in the morning.",
    keywords: ["low effort", "lies", "texting etiquette"],
    psychologyContent: createBasicPsychologyContent("Sorry I fell asleep.", 2)
  },
  {
    quote: "I have my notifications turned off.",
    translation: "I don't want you popping up on my screen when I'm with other people.",
    score: 4,
    roast: "Why does he need to hide his notifications? Usually, it's because he doesn't want the girl he's *actually* dating to see your name.",
    keywords: ["cheating", "hiding phone", "player"],
    psychologyContent: createBasicPsychologyContent("I have my notifications turned off.", 4)
  },
  {
    quote: "Just saw this!",
    translation: "I saw this 3 days ago. I'm replying now because I want something.",
    score: 3,
    roast: "Read receipts exist for a reason. Even if they're off, we know. He's treating you like an option. Treat him like a ghost.",
    keywords: ["breadcrumbing", "stalling", "benching"],
    psychologyContent: createBasicPsychologyContent("Just saw this!", 3)
  },
  {
    quote: "Can we raincheck? (and never reschedules)",
    translation: "I am cancelling on you, and I am ghosting the rescheduling part hoping you'll get the hint.",
    score: 4,
    roast: "A cancellation without a new date proposed is a rejection. He's not busy; he's bailing. Don't ask 'when?'. Just say 'ok' and delete his number.",
    keywords: ["flaky", "cancellation", "soft rejection"],
    psychologyContent: createBasicPsychologyContent("Can we raincheck? (and never reschedules)", 4)
  },
  {
    quote: "U up?",
    translation: "I ghosted you all day, but now it's midnight and I'm lonely/horny.",
    score: 5,
    roast: "The classic booty call. He didn't ask how your day was at noon. He's asking if you're available for service at midnight. Respect yourself and go back to sleep.",
    keywords: ["booty call", "hookup", "disrespect"],
    psychologyContent: createBasicPsychologyContent("U up?", 5)
  },
  {
    quote: "Thinking of you.",
    translation: "I'm sending this exact text to 3 exes to see who gives me attention.",
    score: 3,
    roast: "This is a 'ping'. He's just checking if you're still on the hook. It's low effort and requires zero commitment. Don't give him the validation.",
    keywords: ["orbiting", "hoovering", "breadcrumbing"],
    psychologyContent: createBasicPsychologyContent("Thinking of you.", 3)
  },
  {
    quote: "*Left on Read*",
    translation: "I have read your message and I am choosing not to respond. That IS the message.",
    score: 5,
    roast: "No answer is an answer. It's the loudest answer. He is showing you exactly how much he respects you (he doesn't). Block and bless.",
    keywords: ["ghosting", "disrespect", "closure"],
    psychologyContent: createBasicPsychologyContent("*Left on Read*", 5)
  }
];

// 生成新的 TOXIC_QUOTES 数组，使用 SEO slug
export const TOXIC_QUOTES: QuoteData[] = QUOTE_DATA.map((data) => ({
  ...data,
  slug: generateSeoSlug(data.quote)
}));

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