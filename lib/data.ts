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
    // 去除标点符号和URL非法字符
    .replace(/[.,!?;:'"\/#?&=@%$<>{}[\]|\\^`~]/g, '')
    // 转换为小写并用连字符替换空格
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    // 移除多余的连字符
    .replace(/-+/g, '-')
    // 移除开头和结尾的连字符
    .replace(/^-+|-+$/g, '');
}


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
      <p>People who consistently suggest "going with the flow" typically exhibit avoidant attachment patterns. They crave intimacy but simultaneously fear it, creating a push-pull dynamic that keeps potential partners emotionally off-balance. By refusing to define the relationship, they maintain emotional distance while still enjoying the benefits of connection.</p>

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
    psychologyContent: `
    <article class="psychology-analysis" aria-labelledby="psychology-i-m-just-really-busy-with-work-right-now">
      <header>
        <h3 id="psychology-i-m-just-really-busy-with-work-right-now">The Psychology Behind "I'm just really busy with work right now."</h3>
      </header>

      <section class="introductory-analysis">
        <p>This common dating expression reveals crucial insights regarding attachment styles, emotional availability, and relationship intentions. Comprehending the psychological mechanisms underlying these expressions enables recognition of <strong class="emphasis-toxic">concerning communication patterns</strong> and facilitates informed relationship decision-making.</p>
      </section>

      <section class="attachment-analysis">
        <h4>Attachment Style Assessment</h4>
        <p>While potentially less concerning, this communication pattern still provides valuable insights into <strong class="emphasis-attachment">emotional availability</strong> and <strong class="emphasis-attachment">relationship readiness</strong>. The statement may indicate varying levels of self-awareness, communication proficiency, or emotional maturity.</p>
      </section>

      <section class="power-dynamics">
        <h4>Relational Dynamics and Control Patterns</h4>
        <p>The communication approach may inadvertently create confusion or ambiguous expectations, potentially resulting in misunderstandings and emotional disconnection between parties.</p>
        <p>When individuals employ vague or non-committal language, they frequently maintain <strong class="emphasis-control">emotional control</strong> while avoiding genuine vulnerability. Healthy relationships necessitate mutual investment and transparent communication, rather than ambiguity that primarily serves one party's convenience.</p>
      </section>

      <section class="communication-patterns">
        <h4>Communication Behavior Analysis</h4>
        <p>Often accompanied by <strong class="emphasis-pattern">breadcrumbing behaviors</strong>—providing minimal attention to maintain interest without substantial investment. This pattern generates anxiety and uncertainty through inconsistent communication rhythms and unpredictable engagement.</p>
        <p>The tendency toward inconsistent or minimal effort often indicates deeper <strong class="emphasis-pattern">commitment challenges</strong> or unresolved emotional concerns. Individuals who are genuinely interested typically demonstrate consistent effort and maintain clear communication patterns.</p>
      </section>

      <section class="boundaries">
        <h4>Establishing Healthy Relational Boundaries</h4>
        <p>Recognizing these communication patterns enables appropriate boundary establishment and seeking relationships constructed upon mutual respect. Your emotional wellbeing warrants prioritization, and transparent communication forms the foundation of healthy partnership dynamics.</p>
      </section>

      <section class="relationship-readiness">
        <h4>Relationship Readiness Evaluation</h4>
        <p>Adults who are emotionally prepared for healthy relationships do not require confusion or ambiguity. They communicate transparently, invest consistently, and demonstrate their interest through actions rather than ambiguous statements. Understanding these patterns assists in distinguishing between <strong class="emphasis-readiness">minimal investment behavior</strong> and authentic relationship potential.</p>
      </section>
    </article>
    `
  },
  {
    quote: "My ex was crazy.",
    translation: "I drove her crazy and now I'm playing the victim.",
    score: 5,
    roast: "Red Flag Alert 🚩. If all his exes are 'crazy', the common denominator is HIM. He lacks accountability and will likely call YOU crazy to his next girl.",
    keywords: ["narcissist", "gaslighting", "toxic ex"],
    psychologyContent: `
    <article class="psychology-analysis" aria-labelledby="psychology-my-ex-was-crazy">
      <header>
        <h3 id="psychology-my-ex-was-crazy">The Psychology Behind "My ex was crazy."</h3>
      </header>

      <section class="introductory-analysis">
        <p>This common dating expression reveals crucial insights regarding attachment styles, emotional availability, and relationship intentions. Comprehending the psychological mechanisms underlying these expressions enables recognition of <strong class="emphasis-toxic">concerning communication patterns</strong> and facilitates informed relationship decision-making.</p>
      </section>

      <section class="attachment-analysis">
        <h4>Attachment Style Assessment</h4>
        <p>This phrase represents a significant relationship indicator that often reflects <strong class="emphasis-attachment">avoidant attachment patterns</strong>, <strong class="emphasis-attachment">fear of commitment</strong>, or <strong class="emphasis-attachment">manipulative communication behavior</strong>. The individual employing this language typically creates emotional distance while maintaining access to intimacy benefits without reciprocal investment.</p>
      </section>

      <section class="power-dynamics">
        <h4>Relational Dynamics and Control Patterns</h4>
        <p>This language establishes an imbalanced dynamic where one party controls relationship terms without mutual investment. It functions as a form of <strong class="emphasis-control">frame control</strong> that inhibits genuine partnership development and creates unequal power distribution.</p>
        <p>When individuals employ vague or non-committal language, they frequently maintain <strong class="emphasis-control">emotional control</strong> while avoiding genuine vulnerability. Healthy relationships necessitate mutual investment and transparent communication, rather than ambiguity that primarily serves one party's convenience.</p>
      </section>

      <section class="communication-patterns">
        <h4>Communication Behavior Analysis</h4>
        <p>Frequently accompanied by <strong class="emphasis-pattern">breadcrumbing behaviors</strong>—providing minimal attention to maintain interest without substantial investment. This pattern generates anxiety and uncertainty through inconsistent communication rhythms and unpredictable engagement.</p>
        <p>The tendency toward inconsistent or minimal effort often indicates deeper <strong class="emphasis-pattern">commitment challenges</strong> or unresolved emotional concerns. Individuals who are genuinely interested typically demonstrate consistent effort and maintain clear communication patterns.</p>
      </section>

      <section class="boundaries">
        <h4>Establishing Healthy Relational Boundaries</h4>
        <p>Recognizing these communication patterns enables appropriate boundary establishment and seeking relationships constructed upon mutual respect. Your emotional wellbeing warrants prioritization, and transparent communication forms the foundation of healthy partnership dynamics.</p>
      </section>

      <section class="relationship-readiness">
        <h4>Relationship Readiness Evaluation</h4>
        <p>Adults who are emotionally prepared for healthy relationships do not require confusion or ambiguity. They communicate transparently, invest consistently, and demonstrate their interest through actions rather than ambiguous statements. Understanding these patterns assists in distinguishing between <strong class="emphasis-readiness">minimal investment behavior</strong> and authentic relationship potential.</p>
      </section>
    </article>
    `
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
    psychologyContent: `
    <article class="psychology-analysis" aria-labelledby="psychology-i-m-not-ready-for-a-relationship-right-now-but-i-really-like-you">
      <header>
        <h3 id="psychology-i-m-not-ready-for-a-relationship-right-now-but-i-really-like-you">The Psychology Behind "I'm not ready for a relationship right now, but I really like you."</h3>
      </header>

      <section class="introductory-analysis">
        <p>This common dating expression reveals crucial insights regarding attachment styles, emotional availability, and relationship intentions. Comprehending the psychological mechanisms underlying these expressions enables recognition of <strong class="emphasis-toxic">concerning communication patterns</strong> and facilitates informed relationship decision-making.</p>
      </section>

      <section class="attachment-analysis">
        <h4>Attachment Style Assessment</h4>
        <p>This phrase represents a significant relationship indicator that often reflects <strong class="emphasis-attachment">avoidant attachment patterns</strong>, <strong class="emphasis-attachment">fear of commitment</strong>, or <strong class="emphasis-attachment">manipulative communication behavior</strong>. The individual employing this language typically creates emotional distance while maintaining access to intimacy benefits without reciprocal investment.</p>
      </section>

      <section class="power-dynamics">
        <h4>Relational Dynamics and Control Patterns</h4>
        <p>This language establishes an imbalanced dynamic where one party controls relationship terms without mutual investment. It functions as a form of <strong class="emphasis-control">frame control</strong> that inhibits genuine partnership development and creates unequal power distribution.</p>
        <p>When individuals employ vague or non-committal language, they frequently maintain <strong class="emphasis-control">emotional control</strong> while avoiding genuine vulnerability. Healthy relationships necessitate mutual investment and transparent communication, rather than ambiguity that primarily serves one party's convenience.</p>
      </section>

      <section class="communication-patterns">
        <h4>Communication Behavior Analysis</h4>
        <p>Frequently accompanied by <strong class="emphasis-pattern">breadcrumbing behaviors</strong>—providing minimal attention to maintain interest without substantial investment. This pattern generates anxiety and uncertainty through inconsistent communication rhythms and unpredictable engagement.</p>
        <p>The tendency toward inconsistent or minimal effort often indicates deeper <strong class="emphasis-pattern">commitment challenges</strong> or unresolved emotional concerns. Individuals who are genuinely interested typically demonstrate consistent effort and maintain clear communication patterns.</p>
      </section>

      <section class="boundaries">
        <h4>Establishing Healthy Relational Boundaries</h4>
        <p>Recognizing these communication patterns enables appropriate boundary establishment and seeking relationships constructed upon mutual respect. Your emotional wellbeing warrants prioritization, and transparent communication forms the foundation of healthy partnership dynamics.</p>
      </section>

      <section class="relationship-readiness">
        <h4>Relationship Readiness Evaluation</h4>
        <p>Adults who are emotionally prepared for healthy relationships do not require confusion or ambiguity. They communicate transparently, invest consistently, and demonstrate their interest through actions rather than ambiguous statements. Understanding these patterns assists in distinguishing between <strong class="emphasis-readiness">minimal investment behavior</strong> and authentic relationship potential.</p>
      </section>
    </article>
    `
  },
  {
    quote: "You are just so intimidating.",
    translation: "You have standards and boundaries, and that makes it hard for me to manipulate you.",
    score: 4,
    roast: "He's telling on himself. 'Intimidating' is weak-man code for 'I can't control you.' He wants a woman with low self-esteem who won't call him out on his nonsense. Keep being 'intimidating', queen.",
    keywords: ["negging", "insecure men", "dating red flags"],
    psychologyContent: `
    <article class="psychology-analysis" aria-labelledby="psychology-you-are-just-so-intimidating">
      <header>
        <h3 id="psychology-you-are-just-so-intimidating">The Psychology Behind "You are just so intimidating."</h3>
      </header>

      <section class="introductory-analysis">
        <p>This common dating expression reveals crucial insights regarding attachment styles, emotional availability, and relationship intentions. Comprehending the psychological mechanisms underlying these expressions enables recognition of <strong class="emphasis-toxic">concerning communication patterns</strong> and facilitates informed relationship decision-making.</p>
      </section>

      <section class="attachment-analysis">
        <h4>Attachment Style Assessment</h4>
        <p>This phrase represents a significant relationship indicator that often reflects <strong class="emphasis-attachment">avoidant attachment patterns</strong>, <strong class="emphasis-attachment">fear of commitment</strong>, or <strong class="emphasis-attachment">manipulative communication behavior</strong>. The individual employing this language typically creates emotional distance while maintaining access to intimacy benefits without reciprocal investment.</p>
      </section>

      <section class="power-dynamics">
        <h4>Relational Dynamics and Control Patterns</h4>
        <p>This language establishes an imbalanced dynamic where one party controls relationship terms without mutual investment. It functions as a form of <strong class="emphasis-control">frame control</strong> that inhibits genuine partnership development and creates unequal power distribution.</p>
        <p>When individuals employ vague or non-committal language, they frequently maintain <strong class="emphasis-control">emotional control</strong> while avoiding genuine vulnerability. Healthy relationships necessitate mutual investment and transparent communication, rather than ambiguity that primarily serves one party's convenience.</p>
      </section>

      <section class="communication-patterns">
        <h4>Communication Behavior Analysis</h4>
        <p>Frequently accompanied by <strong class="emphasis-pattern">breadcrumbing behaviors</strong>—providing minimal attention to maintain interest without substantial investment. This pattern generates anxiety and uncertainty through inconsistent communication rhythms and unpredictable engagement.</p>
        <p>The tendency toward inconsistent or minimal effort often indicates deeper <strong class="emphasis-pattern">commitment challenges</strong> or unresolved emotional concerns. Individuals who are genuinely interested typically demonstrate consistent effort and maintain clear communication patterns.</p>
      </section>

      <section class="boundaries">
        <h4>Establishing Healthy Relational Boundaries</h4>
        <p>Recognizing these communication patterns enables appropriate boundary establishment and seeking relationships constructed upon mutual respect. Your emotional wellbeing warrants prioritization, and transparent communication forms the foundation of healthy partnership dynamics.</p>
      </section>

      <section class="relationship-readiness">
        <h4>Relationship Readiness Evaluation</h4>
        <p>Adults who are emotionally prepared for healthy relationships do not require confusion or ambiguity. They communicate transparently, invest consistently, and demonstrate their interest through actions rather than ambiguous statements. Understanding these patterns assists in distinguishing between <strong class="emphasis-readiness">minimal investment behavior</strong> and authentic relationship potential.</p>
      </section>
    </article>
    `
  },
  {
    quote: "I was just joking, you're too sensitive.",
    translation: "I said something mean to test your boundaries. Now that you got upset, I'm gaslighting you into thinking YOU are the problem.",
    score: 5,
    roast: "Gaslighting 101. If a joke hurts you, it's not a joke, it's an insult. He's not funny, he's just mean. Do not let him minimize your feelings.",
    keywords: ["gaslighting", "emotional abuse", "narcissist"],
    psychologyContent: `
    <article class="psychology-analysis" aria-labelledby="psychology-i-was-just-joking-youre-too-sensitive">
      <header>
        <h3 id="psychology-i-was-just-joking-youre-too-sensitive">The Psychology Behind "I was just joking, you're too sensitive"</h3>
      </header>

      <section class="introductory-analysis">
        <p>This common dating expression reveals crucial insights regarding attachment styles, emotional availability, and relationship intentions. Comprehending the psychological mechanisms underlying these expressions enables recognition of <strong class="emphasis-toxic">concerning communication patterns</strong> and facilitates informed relationship decision-making.</p>
      </section>

      <section class="attachment-analysis">
        <h4>Attachment Style Assessment</h4>
        <p>This phrase represents a significant relationship indicator that often reflects <strong class="emphasis-attachment">avoidant attachment patterns</strong>, <strong class="emphasis-attachment">fear of commitment</strong>, or <strong class="emphasis-attachment">manipulative communication behavior</strong>. The individual employing this language typically creates emotional distance while maintaining access to intimacy benefits without reciprocal investment.</p>
      </section>

      <section class="power-dynamics">
        <h4>Relational Dynamics and Control Patterns</h4>
        <p>This language establishes an imbalanced dynamic where one party controls relationship terms without mutual investment. It functions as a form of <strong class="emphasis-control">frame control</strong> that inhibits genuine partnership development and creates unequal power distribution.</p>
        <p>When individuals employ vague or non-committal language, they frequently maintain <strong class="emphasis-control">emotional control</strong> while avoiding genuine vulnerability. Healthy relationships necessitate mutual investment and transparent communication, rather than ambiguity that primarily serves one party's convenience.</p>
      </section>

      <section class="communication-patterns">
        <h4>Communication Behavior Analysis</h4>
        <p>Frequently accompanied by <strong class="emphasis-pattern">breadcrumbing behaviors</strong>—providing minimal attention to maintain interest without substantial investment. This pattern generates anxiety and uncertainty through inconsistent communication rhythms and unpredictable engagement.</p>
        <p>The tendency toward inconsistent or minimal effort often indicates deeper <strong class="emphasis-pattern">commitment challenges</strong> or unresolved emotional concerns. Individuals who are genuinely interested typically demonstrate consistent effort and maintain clear communication patterns.</p>
      </section>

      <section class="boundaries">
        <h4>Establishing Healthy Relational Boundaries</h4>
        <p>Recognizing these communication patterns enables appropriate boundary establishment and seeking relationships constructed upon mutual respect. Your emotional wellbeing warrants prioritization, and transparent communication forms the foundation of healthy partnership dynamics.</p>
      </section>

      <section class="relationship-readiness">
        <h4>Relationship Readiness Evaluation</h4>
        <p>Adults who are emotionally prepared for healthy relationships do not require confusion or ambiguity. They communicate transparently, invest consistently, and demonstrate their interest through actions rather than ambiguous statements. Understanding these patterns assists in distinguishing between <strong class="emphasis-readiness">minimal investment behavior</strong> and authentic relationship potential.</p>
      </section>
    </article>
    `
  },
  {
    quote: "I hate drama.",
    translation: "I create chaos everywhere I go, but I refuse to take accountability for it. If you express any negative emotion, I will label you 'crazy'.",
    score: 5,
    roast: "Men who 'hate drama' are usually the conductors of the drama train. He lacks emotional intelligence and will dismiss your valid concerns as 'drama'. Run.",
    keywords: ["toxic relationships", "emotional unavailability", "red flag"],
    psychologyContent: `
    <article class="psychology-analysis" aria-labelledby="psychology-i-hate-drama">
      <header>
        <h3 id="psychology-i-hate-drama">The Psychology Behind "I hate drama"</h3>
      </header>

      <section class="introductory-analysis">
        <p>This common dating expression reveals crucial insights regarding attachment styles, emotional availability, and relationship intentions. Comprehending the psychological mechanisms underlying these expressions enables recognition of <strong class="emphasis-toxic">concerning communication patterns</strong> and facilitates informed relationship decision-making.</p>
      </section>

      <section class="attachment-analysis">
        <h4>Attachment Style Assessment</h4>
        <p>This phrase represents a significant relationship indicator that often reflects <strong class="emphasis-attachment">avoidant attachment patterns</strong>, <strong class="emphasis-attachment">fear of commitment</strong>, or <strong class="emphasis-attachment">manipulative communication behavior</strong>. The individual employing this language typically creates emotional distance while maintaining access to intimacy benefits without reciprocal investment.</p>
      </section>

      <section class="power-dynamics">
        <h4>Relational Dynamics and Control Patterns</h4>
        <p>This language establishes an imbalanced dynamic where one party controls relationship terms without mutual investment. It functions as a form of <strong class="emphasis-control">frame control</strong> that inhibits genuine partnership development and creates unequal power distribution.</p>
        <p>When individuals employ vague or non-committal language, they frequently maintain <strong class="emphasis-control">emotional control</strong> while avoiding genuine vulnerability. Healthy relationships necessitate mutual investment and transparent communication, rather than ambiguity that primarily serves one party's convenience.</p>
      </section>

      <section class="communication-patterns">
        <h4>Communication Behavior Analysis</h4>
        <p>Frequently accompanied by <strong class="emphasis-pattern">breadcrumbing behaviors</strong>—providing minimal attention to maintain interest without substantial investment. This pattern generates anxiety and uncertainty through inconsistent communication rhythms and unpredictable engagement.</p>
        <p>The tendency toward inconsistent or minimal effort often indicates deeper <strong class="emphasis-pattern">commitment challenges</strong> or unresolved emotional concerns. Individuals who are genuinely interested typically demonstrate consistent effort and maintain clear communication patterns.</p>
      </section>

      <section class="boundaries">
        <h4>Establishing Healthy Relational Boundaries</h4>
        <p>Recognizing these communication patterns enables appropriate boundary establishment and seeking relationships constructed upon mutual respect. Your emotional wellbeing warrants prioritization, and transparent communication forms the foundation of healthy partnership dynamics.</p>
      </section>

      <section class="relationship-readiness">
        <h4>Relationship Readiness Evaluation</h4>
        <p>Adults who are emotionally prepared for healthy relationships do not require confusion or ambiguity. They communicate transparently, invest consistently, and demonstrate their interest through actions rather than ambiguous statements. Understanding these patterns assists in distinguishing between <strong class="emphasis-readiness">minimal investment behavior</strong> and authentic relationship potential.</p>
      </section>
    </article>
    `
  },
  {
    quote: "Let's just see where the night takes us.",
    translation: "I am hoping the night takes us to your bedroom. I have zero plans to actually take you on a date.",
    score: 3,
    roast: "Lazy. Low effort. He wants a hookup but is too cowardly to ask directly. If he wanted to take you on a date, he would have made a reservation.",
    keywords: ["hookup culture", "low effort men", "casual dating"],
    psychologyContent: `
    <article class="psychology-analysis" aria-labelledby="psychology-lets-just-see-where-the-night-takes-us">
      <header>
        <h3 id="psychology-lets-just-see-where-the-night-takes-us">The Psychology Behind "Let's just see where the night takes us"</h3>
      </header>

      <section class="introductory-analysis">
        <p>This common dating expression reveals crucial insights regarding attachment styles, emotional availability, and relationship intentions. Comprehending the psychological mechanisms underlying these expressions enables recognition of <strong class="emphasis-toxic">concerning communication patterns</strong> and facilitates informed relationship decision-making.</p>
      </section>

      <section class="attachment-analysis">
        <h4>Attachment Style Assessment</h4>
        <p>While potentially less concerning, this communication pattern still provides valuable insights into <strong class="emphasis-attachment">emotional availability</strong> and <strong class="emphasis-attachment">relationship readiness</strong>. The statement may indicate varying levels of self-awareness, communication proficiency, or emotional maturity.</p>
      </section>

      <section class="power-dynamics">
        <h4>Relational Dynamics and Control Patterns</h4>
        <p>This language establishes an imbalanced dynamic where one party controls relationship terms without mutual investment. It functions as a form of <strong class="emphasis-control">frame control</strong> that inhibits genuine partnership development and creates unequal power distribution.</p>
        <p>When individuals employ vague or non-committal language, they frequently maintain <strong class="emphasis-control">emotional control</strong> while avoiding genuine vulnerability. Healthy relationships necessitate mutual investment and transparent communication, rather than ambiguity that primarily serves one party's convenience.</p>
      </section>

      <section class="communication-patterns">
        <h4>Communication Behavior Analysis</h4>
        <p>Frequently accompanied by <strong class="emphasis-pattern">breadcrumbing behaviors</strong>—providing minimal attention to maintain interest without substantial investment. This pattern generates anxiety and uncertainty through inconsistent communication rhythms and unpredictable engagement.</p>
        <p>The tendency toward inconsistent or minimal effort often indicates deeper <strong class="emphasis-pattern">commitment challenges</strong> or unresolved emotional concerns. Individuals who are genuinely interested typically demonstrate consistent effort and maintain clear communication patterns.</p>
      </section>

      <section class="boundaries">
        <h4>Establishing Healthy Relational Boundaries</h4>
        <p>Recognizing these communication patterns enables appropriate boundary establishment and seeking relationships constructed upon mutual respect. Your emotional wellbeing warrants prioritization, and transparent communication forms the foundation of healthy partnership dynamics.</p>
      </section>

      <section class="relationship-readiness">
        <h4>Relationship Readiness Evaluation</h4>
        <p>Adults who are emotionally prepared for healthy relationships do not require confusion or ambiguity. They communicate transparently, invest consistently, and demonstrate their interest through actions rather than ambiguous statements. Understanding these patterns assists in distinguishing between <strong class="emphasis-readiness">minimal investment behavior</strong> and authentic relationship potential.</p>
      </section>
    </article>
    `
  },
  {
    quote: "Don't worry about her, she's just a friend.",
    translation: "She is my backup plan, or I am currently sleeping with her. Your intuition is right, and I am lying.",
    score: 4,
    roast: "If he has to say 'don't worry', you should worry. Secure friendships don't need defensive explanations. Trust your gut—if it feels weird, it IS weird.",
    keywords: ["cheating signs", "micro-cheating", "jealousy"],
    psychologyContent: `
    <article class="psychology-analysis" aria-labelledby="psychology-dont-worry-about-her-shes-just-a-friend">
      <header>
        <h3 id="psychology-dont-worry-about-her-shes-just-a-friend">The Psychology Behind "Don't worry about her, she's just a friend"</h3>
      </header>

      <section class="introductory-analysis">
        <p>This common dating expression reveals crucial insights regarding attachment styles, emotional availability, and relationship intentions. Comprehending the psychological mechanisms underlying these expressions enables recognition of <strong class="emphasis-toxic">concerning communication patterns</strong> and facilitates informed relationship decision-making.</p>
      </section>

      <section class="attachment-analysis">
        <h4>Attachment Style Assessment</h4>
        <p>This phrase represents a significant relationship indicator that often reflects <strong class="emphasis-attachment">avoidant attachment patterns</strong>, <strong class="emphasis-attachment">fear of commitment</strong>, or <strong class="emphasis-attachment">manipulative communication behavior</strong>. The individual employing this language typically creates emotional distance while maintaining access to intimacy benefits without reciprocal investment.</p>
      </section>

      <section class="power-dynamics">
        <h4>Relational Dynamics and Control Patterns</h4>
        <p>This language establishes an imbalanced dynamic where one party controls relationship terms without mutual investment. It functions as a form of <strong class="emphasis-control">frame control</strong> that inhibits genuine partnership development and creates unequal power distribution.</p>
        <p>When individuals employ vague or non-committal language, they frequently maintain <strong class="emphasis-control">emotional control</strong> while avoiding genuine vulnerability. Healthy relationships necessitate mutual investment and transparent communication, rather than ambiguity that primarily serves one party's convenience.</p>
      </section>

      <section class="communication-patterns">
        <h4>Communication Behavior Analysis</h4>
        <p>Frequently accompanied by <strong class="emphasis-pattern">breadcrumbing behaviors</strong>—providing minimal attention to maintain interest without substantial investment. This pattern generates anxiety and uncertainty through inconsistent communication rhythms and unpredictable engagement.</p>
        <p>The tendency toward inconsistent or minimal effort often indicates deeper <strong class="emphasis-pattern">commitment challenges</strong> or unresolved emotional concerns. Individuals who are genuinely interested typically demonstrate consistent effort and maintain clear communication patterns.</p>
      </section>

      <section class="boundaries">
        <h4>Establishing Healthy Relational Boundaries</h4>
        <p>Recognizing these communication patterns enables appropriate boundary establishment and seeking relationships constructed upon mutual respect. Your emotional wellbeing warrants prioritization, and transparent communication forms the foundation of healthy partnership dynamics.</p>
      </section>

      <section class="relationship-readiness">
        <h4>Relationship Readiness Evaluation</h4>
        <p>Adults who are emotionally prepared for healthy relationships do not require confusion or ambiguity. They communicate transparently, invest consistently, and demonstrate their interest through actions rather than ambiguous statements. Understanding these patterns assists in distinguishing between <strong class="emphasis-readiness">minimal investment behavior</strong> and authentic relationship potential.</p>
      </section>
    </article>
    `
  },
  {
    quote: "I'm sorry you feel that way.",
    translation: "I am not sorry for what I did. I am only annoyed that you are reacting to it. This is a non-apology.",
    score: 5,
    roast: "This is NOT an apology. An apology requires accountability ('I'm sorry I did X'). This is just him dismissing your emotions. He lacks empathy.",
    keywords: ["fake apology", "gaslighting", "communication issues"],
    psychologyContent: `
    <article class="psychology-analysis" aria-labelledby="psychology-im-sorry-you-feel-that-way">
      <header>
        <h3 id="psychology-im-sorry-you-feel-that-way">The Psychology Behind "I'm sorry you feel that way"</h3>
      </header>

      <section class="introductory-analysis">
        <p>This common dating expression reveals crucial insights regarding attachment styles, emotional availability, and relationship intentions. Comprehending the psychological mechanisms underlying these expressions enables recognition of <strong class="emphasis-toxic">concerning communication patterns</strong> and facilitates informed relationship decision-making.</p>
      </section>

      <section class="attachment-analysis">
        <h4>Attachment Style Assessment</h4>
        <p>This phrase represents a significant relationship indicator that often reflects <strong class="emphasis-attachment">avoidant attachment patterns</strong>, <strong class="emphasis-attachment">fear of commitment</strong>, or <strong class="emphasis-attachment">manipulative communication behavior</strong>. The individual employing this language typically creates emotional distance while maintaining access to intimacy benefits without reciprocal investment.</p>
      </section>

      <section class="power-dynamics">
        <h4>Relational Dynamics and Control Patterns</h4>
        <p>This language establishes an imbalanced dynamic where one party controls relationship terms without mutual investment. It functions as a form of <strong class="emphasis-control">frame control</strong> that inhibits genuine partnership development and creates unequal power distribution.</p>
        <p>When individuals employ vague or non-committal language, they frequently maintain <strong class="emphasis-control">emotional control</strong> while avoiding genuine vulnerability. Healthy relationships necessitate mutual investment and transparent communication, rather than ambiguity that primarily serves one party's convenience.</p>
      </section>

      <section class="communication-patterns">
        <h4>Communication Behavior Analysis</h4>
        <p>Frequently accompanied by <strong class="emphasis-pattern">breadcrumbing behaviors</strong>—providing minimal attention to maintain interest without substantial investment. This pattern generates anxiety and uncertainty through inconsistent communication rhythms and unpredictable engagement.</p>
        <p>The tendency toward inconsistent or minimal effort often indicates deeper <strong class="emphasis-pattern">commitment challenges</strong> or unresolved emotional concerns. Individuals who are genuinely interested typically demonstrate consistent effort and maintain clear communication patterns.</p>
      </section>

      <section class="boundaries">
        <h4>Establishing Healthy Relational Boundaries</h4>
        <p>Recognizing these communication patterns enables appropriate boundary establishment and seeking relationships constructed upon mutual respect. Your emotional wellbeing warrants prioritization, and transparent communication forms the foundation of healthy partnership dynamics.</p>
      </section>

      <section class="relationship-readiness">
        <h4>Relationship Readiness Evaluation</h4>
        <p>Adults who are emotionally prepared for healthy relationships do not require confusion or ambiguity. They communicate transparently, invest consistently, and demonstrate their interest through actions rather than ambiguous statements. Understanding these patterns assists in distinguishing between <strong class="emphasis-readiness">minimal investment behavior</strong> and authentic relationship potential.</p>
      </section>
    </article>
    `
  },
  {
    quote: "I'm not like other guys.",
    translation: "I am exactly like other guys, but with a superiority complex. I will likely disappoint you in a very specific, 'unique' way.",
    score: 3,
    roast: "Any man who has to announce he's a 'nice guy' or 'different' usually isn't. Show, don't tell. This is a 'Pick Me' boy in disguise.",
    keywords: ["nice guy syndrome", "soft boi", "dating cliches"],
    psychologyContent: `
    <article class="psychology-analysis" aria-labelledby="psychology-im-not-like-other-guys">
      <header>
        <h3 id="psychology-im-not-like-other-guys">The Psychology Behind "I'm not like other guys"</h3>
      </header>

      <section class="introductory-analysis">
        <p>This common dating expression reveals crucial insights regarding attachment styles, emotional availability, and relationship intentions. Comprehending the psychological mechanisms underlying these expressions enables recognition of <strong class="emphasis-toxic">concerning communication patterns</strong> and facilitates informed relationship decision-making.</p>
      </section>

      <section class="attachment-analysis">
        <h4>Attachment Style Assessment</h4>
        <p>While potentially less concerning, this communication pattern still provides valuable insights into <strong class="emphasis-attachment">emotional availability</strong> and <strong class="emphasis-attachment">relationship readiness</strong>. The statement may indicate varying levels of self-awareness, communication proficiency, or emotional maturity.</p>
      </section>

      <section class="power-dynamics">
        <h4>Relational Dynamics and Control Patterns</h4>
        <p>This language establishes an imbalanced dynamic where one party controls relationship terms without mutual investment. It functions as a form of <strong class="emphasis-control">frame control</strong> that inhibits genuine partnership development and creates unequal power distribution.</p>
        <p>When individuals employ vague or non-committal language, they frequently maintain <strong class="emphasis-control">emotional control</strong> while avoiding genuine vulnerability. Healthy relationships necessitate mutual investment and transparent communication, rather than ambiguity that primarily serves one party's convenience.</p>
      </section>

      <section class="communication-patterns">
        <h4>Communication Behavior Analysis</h4>
        <p>Frequently accompanied by <strong class="emphasis-pattern">breadcrumbing behaviors</strong>—providing minimal attention to maintain interest without substantial investment. This pattern generates anxiety and uncertainty through inconsistent communication rhythms and unpredictable engagement.</p>
        <p>The tendency toward inconsistent or minimal effort often indicates deeper <strong class="emphasis-pattern">commitment challenges</strong> or unresolved emotional concerns. Individuals who are genuinely interested typically demonstrate consistent effort and maintain clear communication patterns.</p>
      </section>

      <section class="boundaries">
        <h4>Establishing Healthy Relational Boundaries</h4>
        <p>Recognizing these communication patterns enables appropriate boundary establishment and seeking relationships constructed upon mutual respect. Your emotional wellbeing warrants prioritization, and transparent communication forms the foundation of healthy partnership dynamics.</p>
      </section>

      <section class="relationship-readiness">
        <h4>Relationship Readiness Evaluation</h4>
        <p>Adults who are emotionally prepared for healthy relationships do not require confusion or ambiguity. They communicate transparently, invest consistently, and demonstrate their interest through actions rather than ambiguous statements. Understanding these patterns assists in distinguishing between <strong class="emphasis-readiness">minimal investment behavior</strong> and authentic relationship potential.</p>
      </section>
    </article>
    `
  },
  {
    quote: "We have such a crazy connection, let's skip the small talk.",
    translation: "I want to rush intimacy to get what I want (sex/validation) before you realize who I really am.",
    score: 4,
    roast: "Slow down. Real connection is built, not found instantly. He's trying to fast-forward the relationship to bypass your vetting process. It's a trap.",
    keywords: ["love bombing", "rushing intimacy", "future faking"],
    psychologyContent: `
    <article class="psychology-analysis" aria-labelledby="psychology-we-have-such-a-crazy-connection-lets-skip-the-small-talk">
      <header>
        <h3 id="psychology-we-have-such-a-crazy-connection-lets-skip-the-small-talk">The Psychology Behind "We have such a crazy connection, let's skip the small talk"</h3>
      </header>

      <section class="introductory-analysis">
        <p>This common dating expression reveals crucial insights regarding attachment styles, emotional availability, and relationship intentions. Comprehending the psychological mechanisms underlying these expressions enables recognition of <strong class="emphasis-toxic">concerning communication patterns</strong> and facilitates informed relationship decision-making.</p>
      </section>

      <section class="attachment-analysis">
        <h4>Attachment Style Assessment</h4>
        <p>This phrase represents a significant relationship indicator that often reflects <strong class="emphasis-attachment">avoidant attachment patterns</strong>, <strong class="emphasis-attachment">fear of commitment</strong>, or <strong class="emphasis-attachment">manipulative communication behavior</strong>. The individual employing this language typically creates emotional distance while maintaining access to intimacy benefits without reciprocal investment.</p>
      </section>

      <section class="power-dynamics">
        <h4>Relational Dynamics and Control Patterns</h4>
        <p>This language establishes an imbalanced dynamic where one party controls relationship terms without mutual investment. It functions as a form of <strong class="emphasis-control">frame control</strong> that inhibits genuine partnership development and creates unequal power distribution.</p>
        <p>When individuals employ vague or non-committal language, they frequently maintain <strong class="emphasis-control">emotional control</strong> while avoiding genuine vulnerability. Healthy relationships necessitate mutual investment and transparent communication, rather than ambiguity that primarily serves one party's convenience.</p>
      </section>

      <section class="communication-patterns">
        <h4>Communication Behavior Analysis</h4>
        <p>Frequently accompanied by <strong class="emphasis-pattern">breadcrumbing behaviors</strong>—providing minimal attention to maintain interest without substantial investment. This pattern generates anxiety and uncertainty through inconsistent communication rhythms and unpredictable engagement.</p>
        <p>The tendency toward inconsistent or minimal effort often indicates deeper <strong class="emphasis-pattern">commitment challenges</strong> or unresolved emotional concerns. Individuals who are genuinely interested typically demonstrate consistent effort and maintain clear communication patterns.</p>
      </section>

      <section class="boundaries">
        <h4>Establishing Healthy Relational Boundaries</h4>
        <p>Recognizing these communication patterns enables appropriate boundary establishment and seeking relationships constructed upon mutual respect. Your emotional wellbeing warrants prioritization, and transparent communication forms the foundation of healthy partnership dynamics.</p>
      </section>

      <section class="relationship-readiness">
        <h4>Relationship Readiness Evaluation</h4>
        <p>Adults who are emotionally prepared for healthy relationships do not require confusion or ambiguity. They communicate transparently, invest consistently, and demonstrate their interest through actions rather than ambiguous statements. Understanding these patterns assists in distinguishing between <strong class="emphasis-readiness">minimal investment behavior</strong> and authentic relationship potential.</p>
      </section>
    </article>
    `
  },
  {
    quote: "I'm terrible at making plans, I'm more spontaneous.",
    translation: "I don't value your time enough to schedule it in advance. I want you to be available whenever I'm bored.",
    score: 3,
    roast: "Spontaneity is cute for a vacation, not for a Tuesday night date. If he can plan a boys' trip or a fantasy football league, he can plan a date. He just chooses not to.",
    keywords: ["low effort", "breadcrumbing", "flaky"],
    psychologyContent: `
    <article class="psychology-analysis" aria-labelledby="psychology-im-terrible-at-making-plans-im-more-spontaneous">
      <header>
        <h3 id="psychology-im-terrible-at-making-plans-im-more-spontaneous">The Psychology Behind "I'm terrible at making plans, I'm more spontaneous"</h3>
      </header>

      <section class="introductory-analysis">
        <p>This common dating expression reveals crucial insights regarding attachment styles, emotional availability, and relationship intentions. Comprehending the psychological mechanisms underlying these expressions enables recognition of <strong class="emphasis-toxic">concerning communication patterns</strong> and facilitates informed relationship decision-making.</p>
      </section>

      <section class="attachment-analysis">
        <h4>Attachment Style Assessment</h4>
        <p>While potentially less concerning, this communication pattern still provides valuable insights into <strong class="emphasis-attachment">emotional availability</strong> and <strong class="emphasis-attachment">relationship readiness</strong>. The statement may indicate varying levels of self-awareness, communication proficiency, or emotional maturity.</p>
      </section>

      <section class="power-dynamics">
        <h4>Relational Dynamics and Control Patterns</h4>
        <p>This language establishes an imbalanced dynamic where one party controls relationship terms without mutual investment. It functions as a form of <strong class="emphasis-control">frame control</strong> that inhibits genuine partnership development and creates unequal power distribution.</p>
        <p>When individuals employ vague or non-committal language, they frequently maintain <strong class="emphasis-control">emotional control</strong> while avoiding genuine vulnerability. Healthy relationships necessitate mutual investment and transparent communication, rather than ambiguity that primarily serves one party's convenience.</p>
      </section>

      <section class="communication-patterns">
        <h4>Communication Behavior Analysis</h4>
        <p>Frequently accompanied by <strong class="emphasis-pattern">breadcrumbing behaviors</strong>—providing minimal attention to maintain interest without substantial investment. This pattern generates anxiety and uncertainty through inconsistent communication rhythms and unpredictable engagement.</p>
        <p>The tendency toward inconsistent or minimal effort often indicates deeper <strong class="emphasis-pattern">commitment challenges</strong> or unresolved emotional concerns. Individuals who are genuinely interested typically demonstrate consistent effort and maintain clear communication patterns.</p>
      </section>

      <section class="boundaries">
        <h4>Establishing Healthy Relational Boundaries</h4>
        <p>Recognizing these communication patterns enables appropriate boundary establishment and seeking relationships constructed upon mutual respect. Your emotional wellbeing warrants prioritization, and transparent communication forms the foundation of healthy partnership dynamics.</p>
      </section>

      <section class="relationship-readiness">
        <h4>Relationship Readiness Evaluation</h4>
        <p>Adults who are emotionally prepared for healthy relationships do not require confusion or ambiguity. They communicate transparently, invest consistently, and demonstrate their interest through actions rather than ambiguous statements. Understanding these patterns assists in distinguishing between <strong class="emphasis-readiness">minimal investment behavior</strong> and authentic relationship potential.</p>
      </section>
    </article>
    `
  },
  {
    quote: "I've never met anyone like you before.",
    translation: "I am mirroring your personality to make you like me. I will say this to the next girl next month.",
    score: 4,
    roast: "Standard Love Bombing script. He's putting you on a pedestal so high that the fall will break your ankles. Enjoy the compliment, but check his actions.",
    keywords: ["love bombing", "mirroring", "narcissist"],
    psychologyContent: `
    <article class="psychology-analysis" aria-labelledby="psychology-i-ve-never-met-anyone-like-you-before">
      <header>
        <h3 id="psychology-i-ve-never-met-anyone-like-you-before">The Psychology Behind "I've never met anyone like you before."</h3>
      </header>

      <section class="introductory-analysis">
        <p>This common dating expression reveals crucial insights regarding attachment styles, emotional availability, and relationship intentions. Comprehending the psychological mechanisms underlying these expressions enables recognition of <strong class="emphasis-toxic">concerning communication patterns</strong> and facilitates informed relationship decision-making.</p>
      </section>

      <section class="attachment-analysis">
        <h4>Attachment Style Assessment</h4>
        <p>This phrase represents a significant relationship indicator that often reflects <strong class="emphasis-attachment">avoidant attachment patterns</strong>, <strong class="emphasis-attachment">fear of commitment</strong>, or <strong class="emphasis-attachment">manipulative communication behavior</strong>. The individual employing this language typically creates emotional distance while maintaining access to intimacy benefits without reciprocal investment.</p>
      </section>

      <section class="power-dynamics">
        <h4>Relational Dynamics and Control Patterns</h4>
        <p>This language establishes an imbalanced dynamic where one party controls relationship terms without mutual investment. It functions as a form of <strong class="emphasis-control">frame control</strong> that inhibits genuine partnership development and creates unequal power distribution.</p>
        <p>When individuals employ vague or non-committal language, they frequently maintain <strong class="emphasis-control">emotional control</strong> while avoiding genuine vulnerability. Healthy relationships necessitate mutual investment and transparent communication, rather than ambiguity that primarily serves one party's convenience.</p>
      </section>

      <section class="communication-patterns">
        <h4>Communication Behavior Analysis</h4>
        <p>Frequently accompanied by <strong class="emphasis-pattern">breadcrumbing behaviors</strong>—providing minimal attention to maintain interest without substantial investment. This pattern generates anxiety and uncertainty through inconsistent communication rhythms and unpredictable engagement.</p>
        <p>The tendency toward inconsistent or minimal effort often indicates deeper <strong class="emphasis-pattern">commitment challenges</strong> or unresolved emotional concerns. Individuals who are genuinely interested typically demonstrate consistent effort and maintain clear communication patterns.</p>
      </section>

      <section class="boundaries">
        <h4>Establishing Healthy Relational Boundaries</h4>
        <p>Recognizing these communication patterns enables appropriate boundary establishment and seeking relationships constructed upon mutual respect. Your emotional wellbeing warrants prioritization, and transparent communication forms the foundation of healthy partnership dynamics.</p>
      </section>

      <section class="relationship-readiness">
        <h4>Relationship Readiness Evaluation</h4>
        <p>Adults who are emotionally prepared for healthy relationships do not require confusion or ambiguity. They communicate transparently, invest consistently, and demonstrate their interest through actions rather than ambiguous statements. Understanding these patterns assists in distinguishing between <strong class="emphasis-readiness">minimal investment behavior</strong> and authentic relationship potential.</p>
      </section>
    </article>
    `
  },
  {
    quote: "Sorry, my phone died.",
    translation: "I saw your text, ignored it, went out, and now I'm back and need attention. I didn't care enough to charge my phone or find a charger.",
    score: 2,
    roast: "In 2025? Who lets their phone die for 12 hours? He has a charger in his car, at his desk, and in his pocket. He just didn't want to talk to you.",
    keywords: ["slow fading", "ghosting", "lying"],
    psychologyContent: `
    <article class="psychology-analysis" aria-labelledby="psychology-sorry-my-phone-died">
      <header>
        <h3 id="psychology-sorry-my-phone-died">The Psychology Behind "Sorry, my phone died."</h3>
      </header>

      <section class="introductory-analysis">
        <p>This common dating expression reveals crucial insights regarding attachment styles, emotional availability, and relationship intentions. Comprehending the psychological mechanisms underlying these expressions enables recognition of <strong class="emphasis-toxic">concerning communication patterns</strong> and facilitates informed relationship decision-making.</p>
      </section>

      <section class="attachment-analysis">
        <h4>Attachment Style Assessment</h4>
        <p>While potentially less concerning, this communication pattern still provides valuable insights into <strong class="emphasis-attachment">emotional availability</strong> and <strong class="emphasis-attachment">relationship readiness</strong>. The statement may indicate varying levels of self-awareness, communication proficiency, or emotional maturity.</p>
      </section>

      <section class="power-dynamics">
        <h4>Relational Dynamics and Control Patterns</h4>
        <p>The communication approach may inadvertently create confusion or ambiguous expectations, potentially resulting in misunderstandings and emotional disconnection between parties.</p>
        <p>When individuals employ vague or non-committal language, they frequently maintain <strong class="emphasis-control">emotional control</strong> while avoiding genuine vulnerability. Healthy relationships necessitate mutual investment and transparent communication, rather than ambiguity that primarily serves one party's convenience.</p>
      </section>

      <section class="communication-patterns">
        <h4>Communication Behavior Analysis</h4>
        <p>This may reflect authentic communication challenges or differing relationship expectations that necessitate open discussion and mutual understanding to resolve effectively.</p>
        <p>The tendency toward inconsistent or minimal effort often indicates deeper <strong class="emphasis-pattern">commitment challenges</strong> or unresolved emotional concerns. Individuals who are genuinely interested typically demonstrate consistent effort and maintain clear communication patterns.</p>
      </section>

      <section class="boundaries">
        <h4>Establishing Healthy Relational Boundaries</h4>
        <p>Recognizing these communication patterns enables appropriate boundary establishment and seeking relationships constructed upon mutual respect. Your emotional wellbeing warrants prioritization, and transparent communication forms the foundation of healthy partnership dynamics.</p>
      </section>

      <section class="relationship-readiness">
        <h4>Relationship Readiness Evaluation</h4>
        <p>Adults who are emotionally prepared for healthy relationships do not require confusion or ambiguity. They communicate transparently, invest consistently, and demonstrate their interest through actions rather than ambiguous statements. Understanding these patterns assists in distinguishing between <strong class="emphasis-readiness">minimal investment behavior</strong> and authentic relationship potential.</p>
      </section>
    </article>
    `
  },
  {
    quote: "I have trust issues because of my ex.",
    translation: "I will make you pay for crimes you didn't commit. I will check your phone and control who you see, but I will cheat on you.",
    score: 5,
    roast: "He needs a therapist, not a girlfriend. He's setting the stage to be controlling and possessive while playing the victim. Don't try to 'fix' him.",
    keywords: ["controlling behavior", "insecure", "emotional baggage"],
    psychologyContent: `
    <article class="psychology-analysis" aria-labelledby="psychology-trust-issues">
      <header>
        <h3 id="psychology-trust-issues">The Psychology Behind "I have trust issues because of my ex."</h3>
      </header>

      <section class="introductory-analysis">
        <p>This common dating phrase reveals critical insights into attachment styles, emotional availability, and relationship intentions. Understanding the psychological mechanisms behind these words helps recognize <strong class="emphasis-toxic">toxic communication patterns</strong> and make informed dating decisions.</p>
      </section>

      <section class="attachment-analysis">
        <h4>Attachment Style Analysis</h4>
        <p>This phrase represents a significant relationship red flag that often indicates <strong class="emphasis-attachment">avoidant attachment patterns</strong>, <strong class="emphasis-attachment">fear of commitment</strong>, or <strong class="emphasis-attachment">manipulative behavior</strong>. The person using this language is typically creating emotional distance while maintaining access to intimacy benefits.</p>
      </section>

      <section class="power-dynamics">
        <h4>Power Dynamics and Frame Control</h4>
        <p>This language establishes a power imbalance where one person controls relationship terms without mutual investment. It's a form of <strong class="emphasis-control">frame control</strong> that prevents genuine partnership development.</p>
        <p>When someone uses vague or non-committal language, they're maintaining <strong class="emphasis-control">emotional control</strong> while avoiding vulnerability. Healthy relationships require mutual investment and clear communication, not ambiguity that serves one person's convenience.</p>
      </section>

      <section class="communication-patterns">
        <h4>Communication Pattern Recognition</h4>
        <p>Often accompanied by <strong class="emphasis-pattern">breadcrumbing behaviors</strong>—providing just enough attention to maintain interest without real investment. This creates anxiety and uncertainty through inconsistent communication patterns.</p>
        <p>The pattern of inconsistent or minimal effort often indicates deeper <strong class="emphasis-pattern">commitment issues</strong> or emotional wounds. People who are genuinely interested typically demonstrate consistent effort and clear communication.</p>
      </section>

      <section class="boundaries">
        <h4>Setting Healthy Boundaries</h4>
        <p>Recognizing these communication patterns enables setting appropriate boundaries and seeking relationships built on mutual respect. Your emotional wellbeing deserves to be prioritized, and clear communication is the foundation of healthy partnership.</p>
      </section>

      <section class="relationship-readiness">
        <h4>Relationship Readiness Assessment</h4>
        <p>Adults who are emotionally ready for healthy relationships don't need to create confusion or ambiguity. They communicate clearly, invest consistently, and demonstrate their interest through actions rather than vague statements. Understanding these patterns helps distinguish between <strong class="emphasis-readiness">low effort behavior</strong> and genuine relationship potential.</p>
      </section>
    </article>
    `
  },
  {
    quote: "I want to be exclusive, but not put a label on it.",
    translation: "I want you to be loyal to me, but I want the freedom to leave you without 'technically' breaking up.",
    score: 4,
    roast: "This is a scam. He wants the 'husband package' at the 'stranger price'. If it looks like a duck and quacks like a duck but he refuses to call it a duck, he's playing you.",
    keywords: ["situationship", "fear of commitment", "mixed signals"],
    psychologyContent: `
    <article class="psychology-analysis" aria-labelledby="psychology-exclusive-no-label">
      <header>
        <h3 id="psychology-exclusive-no-label">The Psychology Behind "I want to be exclusive, but not put a label on it."</h3>
      </header>

      <section class="introductory-analysis">
        <p>This common dating phrase reveals critical insights into attachment styles, emotional availability, and relationship intentions. Understanding the psychological mechanisms behind these words helps recognize <strong class="emphasis-toxic">toxic communication patterns</strong> and make informed dating decisions.</p>
      </section>

      <section class="attachment-analysis">
        <h4>Attachment Style Analysis</h4>
        <p>This phrase represents a significant relationship red flag that often indicates <strong class="emphasis-attachment">avoidant attachment patterns</strong>, <strong class="emphasis-attachment">fear of commitment</strong>, or <strong class="emphasis-attachment">manipulative behavior</strong>. The person using this language is typically creating emotional distance while maintaining access to intimacy benefits.</p>
      </section>

      <section class="power-dynamics">
        <h4>Power Dynamics and Frame Control</h4>
        <p>This language establishes a power imbalance where one person controls relationship terms without mutual investment. It's a form of <strong class="emphasis-control">frame control</strong> that prevents genuine partnership development.</p>
        <p>When someone uses vague or non-committal language, they're maintaining <strong class="emphasis-control">emotional control</strong> while avoiding vulnerability. Healthy relationships require mutual investment and clear communication, not ambiguity that serves one person's convenience.</p>
      </section>

      <section class="communication-patterns">
        <h4>Communication Pattern Recognition</h4>
        <p>Often accompanied by <strong class="emphasis-pattern">breadcrumbing behaviors</strong>—providing just enough attention to maintain interest without real investment. This creates anxiety and uncertainty through inconsistent communication patterns.</p>
        <p>The pattern of inconsistent or minimal effort often indicates deeper <strong class="emphasis-pattern">commitment issues</strong> or emotional wounds. People who are genuinely interested typically demonstrate consistent effort and clear communication.</p>
      </section>

      <section class="boundaries">
        <h4>Setting Healthy Boundaries</h4>
        <p>Recognizing these communication patterns enables setting appropriate boundaries and seeking relationships built on mutual respect. Your emotional wellbeing deserves to be prioritized, and clear communication is the foundation of healthy partnership.</p>
      </section>

      <section class="relationship-readiness">
        <h4>Relationship Readiness Assessment</h4>
        <p>Adults who are emotionally ready for healthy relationships don't need to create confusion or ambiguity. They communicate clearly, invest consistently, and demonstrate their interest through actions rather than vague statements. Understanding these patterns helps distinguish between <strong class="emphasis-readiness">low effort behavior</strong> and genuine relationship potential.</p>
      </section>
    </article>
    `
  },
  {
    quote: "I really need to focus on myself right now.",
    translation: "I want to break up (or reject you), but I want to sound noble about it.",
    score: 2,
    roast: "Translation: 'It's not me, it's you... but I'm saying it's me.' Let him focus on himself. Alone. Block him and help him focus.",
    keywords: ["breakup lines", "soft rejection", "emotional unavailability"],
    psychologyContent: `
    <article class="psychology-analysis" aria-labelledby="psychology-focus-myself">
      <header>
        <h3 id="psychology-focus-myself">The Psychology Behind "I really need to focus on myself right now."</h3>
      </header>

      <section class="introductory-analysis">
        <p>This common dating phrase reveals critical insights into attachment styles, emotional availability, and relationship intentions. Understanding the psychological mechanisms behind these words helps recognize <strong class="emphasis-toxic">toxic communication patterns</strong> and make informed dating decisions.</p>
      </section>

      <section class="attachment-analysis">
        <h4>Attachment Style Analysis</h4>
        <p>While potentially less severe, this communication pattern still reveals important insights into <strong class="emphasis-attachment">emotional availability</strong> and <strong class="emphasis-attachment">relationship readiness</strong>. The phrase may indicate varying levels of self-awareness, communication skills, or emotional maturity.</p>
      </section>

      <section class="power-dynamics">
        <h4>Power Dynamics and Frame Control</h4>
        <p>The communication style may unintentionally create confusion or unclear expectations, potentially leading to misunderstandings and emotional disconnection.</p>
        <p>When someone uses vague or non-committal language, they're maintaining <strong class="emphasis-control">emotional control</strong> while avoiding vulnerability. Healthy relationships require mutual investment and clear communication, not ambiguity that serves one person's convenience.</p>
      </section>

      <section class="communication-patterns">
        <h4>Communication Pattern Recognition</h4>
        <p>This may reflect genuine communication challenges or different relationship expectations that require open discussion and mutual understanding.</p>
        <p>The pattern of inconsistent or minimal effort often indicates deeper <strong class="emphasis-pattern">commitment issues</strong> or emotional wounds. People who are genuinely interested typically demonstrate consistent effort and clear communication.</p>
      </section>

      <section class="boundaries">
        <h4>Setting Healthy Boundaries</h4>
        <p>Recognizing these communication patterns enables setting appropriate boundaries and seeking relationships built on mutual respect. Your emotional wellbeing deserves to be prioritized, and clear communication is the foundation of healthy partnership.</p>
      </section>

      <section class="relationship-readiness">
        <h4>Relationship Readiness Assessment</h4>
        <p>Adults who are emotionally ready for healthy relationships don't need to create confusion or ambiguity. They communicate clearly, invest consistently, and demonstrate their interest through actions rather than vague statements. Understanding these patterns helps distinguish between <strong class="emphasis-readiness">low effort behavior</strong> and genuine relationship potential.</p>
      </section>
    </article>
    `
  },
  {
    quote: "Do you want to come over and watch a movie?",
    translation: "I want sex. There will be no movie, or a very bad movie that we ignore.",
    score: 3,
    roast: "Netflix and Chill is not a date. If he hasn't taken you out in public yet, you are not dating, you are a hookup. Unless you just want sex too, then go for it.",
    keywords: ["hookup signs", "low effort date", "netflix and chill"],
    psychologyContent: `
    <article class="psychology-analysis" aria-labelledby="psychology-watch-movie">
      <header>
        <h3 id="psychology-watch-movie">The Psychology Behind "Do you want to come over and watch a movie?"</h3>
      </header>

      <section class="introductory-analysis">
        <p>This common dating phrase reveals critical insights into attachment styles, emotional availability, and relationship intentions. Understanding the psychological mechanisms behind these words helps recognize <strong class="emphasis-toxic">toxic communication patterns</strong> and make informed dating decisions.</p>
      </section>

      <section class="attachment-analysis">
        <h4>Attachment Style Analysis</h4>
        <p>While potentially less severe, this communication pattern still reveals important insights into <strong class="emphasis-attachment">emotional availability</strong> and <strong class="emphasis-attachment">relationship readiness</strong>. The phrase may indicate varying levels of self-awareness, communication skills, or emotional maturity.</p>
      </section>

      <section class="power-dynamics">
        <h4>Power Dynamics and Frame Control</h4>
        <p>The communication style may unintentionally create confusion or unclear expectations, potentially leading to misunderstandings and emotional disconnection.</p>
        <p>When someone uses vague or non-committal language, they're maintaining <strong class="emphasis-control">emotional control</strong> while avoiding vulnerability. Healthy relationships require mutual investment and clear communication, not ambiguity that serves one person's convenience.</p>
      </section>

      <section class="communication-patterns">
        <h4>Communication Pattern Recognition</h4>
        <p>Often accompanied by <strong class="emphasis-pattern">breadcrumbing behaviors</strong>—providing just enough attention to maintain interest without real investment. This creates anxiety and uncertainty through inconsistent communication patterns.</p>
        <p>The pattern of inconsistent or minimal effort often indicates deeper <strong class="emphasis-pattern">commitment issues</strong> or emotional wounds. People who are genuinely interested typically demonstrate consistent effort and clear communication.</p>
      </section>

      <section class="boundaries">
        <h4>Setting Healthy Boundaries</h4>
        <p>Recognizing these communication patterns enables setting appropriate boundaries and seeking relationships built on mutual respect. Your emotional wellbeing deserves to be prioritized, and clear communication is the foundation of healthy partnership.</p>
      </section>

      <section class="relationship-readiness">
        <h4>Relationship Readiness Assessment</h4>
        <p>Adults who are emotionally ready for healthy relationships don't need to create confusion or ambiguity. They communicate clearly, invest consistently, and demonstrate their interest through actions rather than vague statements. Understanding these patterns helps distinguish between <strong class="emphasis-readiness">low effort behavior</strong> and genuine relationship potential.</p>
      </section>
    </article>
    `
  },
  {
    quote: "I'm kind of seeing someone, but it's complicated.",
    translation: "I have a girlfriend, but I'm looking to cheat. I'm testing if you have low enough morals to be the side piece.",
    score: 5,
    roast: "It's not complicated. He's taken. He's fishing for a backup option. If he'll cheat WITH you, he'll cheat ON you. Next.",
    keywords: ["cheating", "emotional affair", "red flag"],
    psychologyContent: `
    <article class="psychology-analysis" aria-labelledby="psychology-complicated-seeing">
      <header>
        <h3 id="psychology-complicated-seeing">The Psychology Behind "I'm kind of seeing someone, but it's complicated."</h3>
      </header>

      <section class="introductory-analysis">
        <p>This common dating phrase reveals critical insights into attachment styles, emotional availability, and relationship intentions. Understanding the psychological mechanisms behind these words helps recognize <strong class="emphasis-toxic">toxic communication patterns</strong> and make informed dating decisions.</p>
      </section>

      <section class="attachment-analysis">
        <h4>Attachment Style Analysis</h4>
        <p>This phrase represents a significant relationship red flag that often indicates <strong class="emphasis-attachment">avoidant attachment patterns</strong>, <strong class="emphasis-attachment">fear of commitment</strong>, or <strong class="emphasis-attachment">manipulative behavior</strong>. The person using this language is typically creating emotional distance while maintaining access to intimacy benefits.</p>
      </section>

      <section class="power-dynamics">
        <h4>Power Dynamics and Frame Control</h4>
        <p>This language establishes a power imbalance where one person controls relationship terms without mutual investment. It's a form of <strong class="emphasis-control">frame control</strong> that prevents genuine partnership development.</p>
        <p>When someone uses vague or non-committal language, they're maintaining <strong class="emphasis-control">emotional control</strong> while avoiding vulnerability. Healthy relationships require mutual investment and clear communication, not ambiguity that serves one person's convenience.</p>
      </section>

      <section class="communication-patterns">
        <h4>Communication Pattern Recognition</h4>
        <p>Often accompanied by <strong class="emphasis-pattern">breadcrumbing behaviors</strong>—providing just enough attention to maintain interest without real investment. This creates anxiety and uncertainty through inconsistent communication patterns.</p>
        <p>The pattern of inconsistent or minimal effort often indicates deeper <strong class="emphasis-pattern">commitment issues</strong> or emotional wounds. People who are genuinely interested typically demonstrate consistent effort and clear communication.</p>
      </section>

      <section class="boundaries">
        <h4>Setting Healthy Boundaries</h4>
        <p>Recognizing these communication patterns enables setting appropriate boundaries and seeking relationships built on mutual respect. Your emotional wellbeing deserves to be prioritized, and clear communication is the foundation of healthy partnership.</p>
      </section>

      <section class="relationship-readiness">
        <h4>Relationship Readiness Assessment</h4>
        <p>Adults who are emotionally ready for healthy relationships don't need to create confusion or ambiguity. They communicate clearly, invest consistently, and demonstrate their interest through actions rather than vague statements. Understanding these patterns helps distinguish between <strong class="emphasis-readiness">low effort behavior</strong> and genuine relationship potential.</p>
      </section>
    </article>
    `
  },
  {
    quote: "Why are you acting so crazy?",
    translation: "I pushed you to your breaking point, and now I'm using your reaction to invalidate your valid feelings.",
    score: 5,
    roast: "Reactive Abuse. He pokes you until you explode, then points the finger and says 'Look how crazy she is.' Don't take the bait. Walk away silently.",
    keywords: ["reactive abuse", "gaslighting", "toxic argument"],
    psychologyContent: `
    <article class="psychology-analysis" aria-labelledby="psychology-why-are-you-acting-so-crazy">
      <header>
        <h3 id="psychology-why-are-you-acting-so-crazy">The Psychology Behind "Why are you acting so crazy?"</h3>
      </header>

      <section class="introductory-analysis">
        <p>This common dating expression reveals crucial insights regarding attachment styles, emotional availability, and relationship intentions. Comprehending the psychological mechanisms underlying these expressions enables recognition of <strong class="emphasis-toxic">concerning communication patterns</strong> and facilitates informed relationship decision-making.</p>
      </section>

      <section class="attachment-analysis">
        <h4>Attachment Style Assessment</h4>
        <p>This phrase represents a significant relationship indicator that often reflects <strong class="emphasis-attachment">avoidant attachment patterns</strong>, <strong class="emphasis-attachment">fear of commitment</strong>, or <strong class="emphasis-attachment">manipulative communication behavior</strong>. The individual employing this language typically creates emotional distance while maintaining access to intimacy benefits without reciprocal investment.</p>
      </section>

      <section class="power-dynamics">
        <h4>Relational Dynamics and Control Patterns</h4>
        <p>This language establishes an imbalanced dynamic where one party controls relationship terms without mutual investment. It functions as a form of <strong class="emphasis-control">frame control</strong> that inhibits genuine partnership development and creates unequal power distribution.</p>
        <p>When individuals employ vague or non-committal language, they frequently maintain <strong class="emphasis-control">emotional control</strong> while avoiding genuine vulnerability. Healthy relationships necessitate mutual investment and transparent communication, rather than ambiguity that primarily serves one party's convenience.</p>
      </section>

      <section class="communication-patterns">
        <h4>Communication Behavior Analysis</h4>
        <p>Frequently accompanied by <strong class="emphasis-pattern">breadcrumbing behaviors</strong>—providing minimal attention to maintain interest without substantial investment. This pattern generates anxiety and uncertainty through inconsistent communication rhythms and unpredictable engagement.</p>
        <p>The tendency toward inconsistent or minimal effort often indicates deeper <strong class="emphasis-pattern">commitment challenges</strong> or unresolved emotional concerns. Individuals who are genuinely interested typically demonstrate consistent effort and maintain clear communication patterns.</p>
      </section>

      <section class="boundaries">
        <h4>Establishing Healthy Relational Boundaries</h4>
        <p>Recognizing these communication patterns enables appropriate boundary establishment and seeking relationships constructed upon mutual respect. Your emotional wellbeing warrants prioritization, and transparent communication forms the foundation of healthy partnership dynamics.</p>
      </section>

      <section class="relationship-readiness">
        <h4>Relationship Readiness Evaluation</h4>
        <p>Adults who are emotionally prepared for healthy relationships do not require confusion or ambiguity. They communicate transparently, invest consistently, and demonstrate their interest through actions rather than ambiguous statements. Understanding these patterns assists in distinguishing between <strong class="emphasis-readiness">minimal investment behavior</strong> and authentic relationship potential.</p>
      </section>
    </article>
    `
  },
  {
    quote: "Good morning beautiful (mass text)",
    translation: "I am copy-pasting this to 5 other girls to see who bites. I am fishing for validation.",
    score: 3,
    roast: "Generic. Lazy. Low effort. If it feels like a mass email, it probably is. Check if he actually asks about your day or just wants a generic ego boost.",
    keywords: ["breadcrumbing", "player tactics", "dating apps"],
    psychologyContent: `
    <article class="psychology-analysis" aria-labelledby="psychology-good-morning-beautiful-mass-text">
      <header>
        <h3 id="psychology-good-morning-beautiful-mass-text">The Psychology Behind "Good morning beautiful (mass text)"</h3>
      </header>

      <section class="introductory-analysis">
        <p>This common dating expression reveals crucial insights regarding attachment styles, emotional availability, and relationship intentions. Comprehending the psychological mechanisms underlying these expressions enables recognition of <strong class="emphasis-toxic">concerning communication patterns</strong> and facilitates informed relationship decision-making.</p>
      </section>

      <section class="attachment-analysis">
        <h4>Attachment Style Assessment</h4>
        <p>This phrase represents a significant relationship indicator that often reflects <strong class="emphasis-attachment">avoidant attachment patterns</strong>, <strong class="emphasis-attachment">fear of commitment</strong>, or <strong class="emphasis-attachment">manipulative communication behavior</strong>. The individual employing this language typically creates emotional distance while maintaining access to intimacy benefits without reciprocal investment.</p>
      </section>

      <section class="power-dynamics">
        <h4>Relational Dynamics and Control Patterns</h4>
        <p>This language establishes an imbalanced dynamic where one party controls relationship terms without mutual investment. It functions as a form of <strong class="emphasis-control">frame control</strong> that inhibits genuine partnership development and creates unequal power distribution.</p>
        <p>When individuals employ vague or non-committal language, they frequently maintain <strong class="emphasis-control">emotional control</strong> while avoiding genuine vulnerability. Healthy relationships necessitate mutual investment and transparent communication, rather than ambiguity that primarily serves one party's convenience.</p>
      </section>

      <section class="communication-patterns">
        <h4>Communication Behavior Analysis</h4>
        <p>Frequently accompanied by <strong class="emphasis-pattern">breadcrumbing behaviors</strong>—providing minimal attention to maintain interest without substantial investment. This pattern generates anxiety and uncertainty through inconsistent communication rhythms and unpredictable engagement.</p>
        <p>The tendency toward inconsistent or minimal effort often indicates deeper <strong class="emphasis-pattern">commitment challenges</strong> or unresolved emotional concerns. Individuals who are genuinely interested typically demonstrate consistent effort and maintain clear communication patterns.</p>
      </section>

      <section class="boundaries">
        <h4>Establishing Healthy Relational Boundaries</h4>
        <p>Recognizing these communication patterns enables appropriate boundary establishment and seeking relationships constructed upon mutual respect. Your emotional wellbeing warrants prioritization, and transparent communication forms the foundation of healthy partnership dynamics.</p>
      </section>

      <section class="relationship-readiness">
        <h4>Relationship Readiness Evaluation</h4>
        <p>Adults who are emotionally prepared for healthy relationships do not require confusion or ambiguity. They communicate transparently, invest consistently, and demonstrate their interest through actions rather than ambiguous statements. Understanding these patterns assists in distinguishing between <strong class="emphasis-readiness">minimal investment behavior</strong> and authentic relationship potential.</p>
      </section>
    </article>
    `
  },
  // --- Ghosting & Zombieing Collection (消失与诈尸系列) ---
  {
    quote: "Hey stranger.",
    translation: "I ghosted you 3 months ago, but now I'm bored/horny and my other options fell through. I'm testing if you have low enough self-esteem to reply.",
    score: 5,
    roast: "This is 'Zombie-ing' at its finest. He's rising from the dead not because he misses you, but because he's hungry for attention. Do not engage. Leave him in the grave.",
    keywords: ["zombieing", "he came back", "ghosting"],
    psychologyContent: `
    <article class="psychology-analysis" aria-labelledby="psychology-hey-stranger">
      <header>
        <h3 id="psychology-hey-stranger">The Psychology Behind "Hey stranger"</h3>
      </header>

      <section class="introductory-analysis">
        <p>This common dating expression reveals crucial insights regarding attachment styles, emotional availability, and relationship intentions. Comprehending the psychological mechanisms underlying these expressions enables recognition of <strong class="emphasis-toxic">concerning communication patterns</strong> and facilitates informed relationship decision-making.</p>
      </section>

      <section class="attachment-analysis">
        <h4>Attachment Style Assessment</h4>
        <p>This phrase represents a significant relationship indicator that often reflects <strong class="emphasis-attachment">avoidant attachment patterns</strong>, <strong class="emphasis-attachment">fear of commitment</strong>, or <strong class="emphasis-attachment">manipulative communication behavior</strong>. The individual employing this language typically creates emotional distance while maintaining access to intimacy benefits without reciprocal investment.</p>
      </section>

      <section class="power-dynamics">
        <h4>Relational Dynamics and Control Patterns</h4>
        <p>This language establishes an imbalanced dynamic where one party controls relationship terms without mutual investment. It functions as a form of <strong class="emphasis-control">frame control</strong> that inhibits genuine partnership development and creates unequal power distribution.</p>
        <p>When individuals employ vague or non-committal language, they frequently maintain <strong class="emphasis-control">emotional control</strong> while avoiding genuine vulnerability. Healthy relationships necessitate mutual investment and transparent communication, rather than ambiguity that primarily serves one party's convenience.</p>
      </section>

      <section class="communication-patterns">
        <h4>Communication Behavior Analysis</h4>
        <p>Frequently accompanied by <strong class="emphasis-pattern">breadcrumbing behaviors</strong>—providing minimal attention to maintain interest without substantial investment. This pattern generates anxiety and uncertainty through inconsistent communication rhythms and unpredictable engagement.</p>
        <p>The tendency toward inconsistent or minimal effort often indicates deeper <strong class="emphasis-pattern">commitment challenges</strong> or unresolved emotional concerns. Individuals who are genuinely interested typically demonstrate consistent effort and maintain clear communication patterns.</p>
      </section>

      <section class="boundaries">
        <h4>Establishing Healthy Relational Boundaries</h4>
        <p>Recognizing these communication patterns enables appropriate boundary establishment and seeking relationships constructed upon mutual respect. Your emotional wellbeing warrants prioritization, and transparent communication forms the foundation of healthy partnership dynamics.</p>
      </section>

      <section class="relationship-readiness">
        <h4>Relationship Readiness Evaluation</h4>
        <p>Adults who are emotionally prepared for healthy relationships do not require confusion or ambiguity. They communicate transparently, invest consistently, and demonstrate their interest through actions rather than ambiguous statements. Understanding these patterns assists in distinguishing between <strong class="emphasis-readiness">minimal investment behavior</strong> and authentic relationship potential.</p>
      </section>
    </article>
    `
  },
  {
    quote: "Omg I'm so sorry, I drafted a reply and thought I sent it!",
    translation: "I saw your text, ignored it for 4 days, and now I need something from you. I think you are dumb enough to believe this glitch excuse.",
    score: 3,
    roast: "Unless he is 85 years old using a flip phone, he didn't 'forget' to hit send. We live on our phones. He ignored you. Don't let him insult your intelligence.",
    keywords: ["slow fading", "lying", "bad texter"],
    psychologyContent: `
    <article class="psychology-analysis" aria-labelledby="psychology-omg-im-so-sorry-i-drafted-a-reply-and-thought-i-sent-it">
      <header>
        <h3 id="psychology-omg-im-so-sorry-i-drafted-a-reply-and-thought-i-sent-it">The Psychology Behind "Omg I'm so sorry, I drafted a reply and thought I sent it!"</h3>
      </header>

      <section class="introductory-analysis">
        <p>This common dating expression reveals crucial insights regarding attachment styles, emotional availability, and relationship intentions. Comprehending the psychological mechanisms underlying these expressions enables recognition of <strong class="emphasis-toxic">concerning communication patterns</strong> and facilitates informed relationship decision-making.</p>
      </section>

      <section class="attachment-analysis">
        <h4>Attachment Style Assessment</h4>
        <p>While potentially less concerning, this communication pattern still provides valuable insights into <strong class="emphasis-attachment">emotional availability</strong> and <strong class="emphasis-attachment">relationship readiness</strong>. The statement may indicate varying levels of self-awareness, communication proficiency, or emotional maturity.</p>
      </section>

      <section class="power-dynamics">
        <h4>Relational Dynamics and Control Patterns</h4>
        <p>This language establishes an imbalanced dynamic where one party controls relationship terms without mutual investment. It functions as a form of <strong class="emphasis-control">frame control</strong> that inhibits genuine partnership development and creates unequal power distribution.</p>
        <p>When individuals employ vague or non-committal language, they frequently maintain <strong class="emphasis-control">emotional control</strong> while avoiding genuine vulnerability. Healthy relationships necessitate mutual investment and transparent communication, rather than ambiguity that primarily serves one party's convenience.</p>
      </section>

      <section class="communication-patterns">
        <h4>Communication Behavior Analysis</h4>
        <p>Frequently accompanied by <strong class="emphasis-pattern">breadcrumbing behaviors</strong>—providing minimal attention to maintain interest without substantial investment. This pattern generates anxiety and uncertainty through inconsistent communication rhythms and unpredictable engagement.</p>
        <p>The tendency toward inconsistent or minimal effort often indicates deeper <strong class="emphasis-pattern">commitment challenges</strong> or unresolved emotional concerns. Individuals who are genuinely interested typically demonstrate consistent effort and maintain clear communication patterns.</p>
      </section>

      <section class="boundaries">
        <h4>Establishing Healthy Relational Boundaries</h4>
        <p>Recognizing these communication patterns enables appropriate boundary establishment and seeking relationships constructed upon mutual respect. Your emotional wellbeing warrants prioritization, and transparent communication forms the foundation of healthy partnership dynamics.</p>
      </section>

      <section class="relationship-readiness">
        <h4>Relationship Readiness Evaluation</h4>
        <p>Adults who are emotionally prepared for healthy relationships do not require confusion or ambiguity. They communicate transparently, invest consistently, and demonstrate their interest through actions rather than ambiguous statements. Understanding these patterns assists in distinguishing between <strong class="emphasis-readiness">minimal investment behavior</strong> and authentic relationship potential.</p>
      </section>
    </article>
    `
  },
  {
    quote: "Sorry I've been quiet, I deleted the app for a mental health detox.",
    translation: "I moved the conversation to WhatsApp/Snapchat with the girls I actually like. You didn't make the cut.",
    score: 4,
    roast: "Funny how his 'detox' didn't stop him from posting stories on Instagram. He didn't delete the app, he deleted his interest in you. Move on.",
    keywords: ["dating app fatigue", "hinge excuses", "soft ghosting"],
    psychologyContent: `
    <article class="psychology-analysis" aria-labelledby="psychology-sorry-ive-been-quiet-i-deleted-the-app-for-a-mental-health-detox">
      <header>
        <h3 id="psychology-sorry-ive-been-quiet-i-deleted-the-app-for-a-mental-health-detox">The Psychology Behind "Sorry I've been quiet, I deleted the app for a mental health detox"</h3>
      </header>

      <section class="introductory-analysis">
        <p>This common dating expression reveals crucial insights regarding attachment styles, emotional availability, and relationship intentions. Comprehending the psychological mechanisms underlying these expressions enables recognition of <strong class="emphasis-toxic">concerning communication patterns</strong> and facilitates informed relationship decision-making.</p>
      </section>

      <section class="attachment-analysis">
        <h4>Attachment Style Assessment</h4>
        <p>This phrase represents a significant relationship indicator that often reflects <strong class="emphasis-attachment">avoidant attachment patterns</strong>, <strong class="emphasis-attachment">fear of commitment</strong>, or <strong class="emphasis-attachment">manipulative communication behavior</strong>. The individual employing this language typically creates emotional distance while maintaining access to intimacy benefits without reciprocal investment.</p>
      </section>

      <section class="power-dynamics">
        <h4>Relational Dynamics and Control Patterns</h4>
        <p>This language establishes an imbalanced dynamic where one party controls relationship terms without mutual investment. It functions as a form of <strong class="emphasis-control">frame control</strong> that inhibits genuine partnership development and creates unequal power distribution.</p>
        <p>When individuals employ vague or non-committal language, they frequently maintain <strong class="emphasis-control">emotional control</strong> while avoiding genuine vulnerability. Healthy relationships necessitate mutual investment and transparent communication, rather than ambiguity that primarily serves one party's convenience.</p>
      </section>

      <section class="communication-patterns">
        <h4>Communication Behavior Analysis</h4>
        <p>Frequently accompanied by <strong class="emphasis-pattern">breadcrumbing behaviors</strong>—providing minimal attention to maintain interest without substantial investment. This pattern generates anxiety and uncertainty through inconsistent communication rhythms and unpredictable engagement.</p>
        <p>The tendency toward inconsistent or minimal effort often indicates deeper <strong class="emphasis-pattern">commitment challenges</strong> or unresolved emotional concerns. Individuals who are genuinely interested typically demonstrate consistent effort and maintain clear communication patterns.</p>
      </section>

      <section class="boundaries">
        <h4>Establishing Healthy Relational Boundaries</h4>
        <p>Recognizing these communication patterns enables appropriate boundary establishment and seeking relationships constructed upon mutual respect. Your emotional wellbeing warrants prioritization, and transparent communication forms the foundation of healthy partnership dynamics.</p>
      </section>

      <section class="relationship-readiness">
        <h4>Relationship Readiness Evaluation</h4>
        <p>Adults who are emotionally prepared for healthy relationships do not require confusion or ambiguity. They communicate transparently, invest consistently, and demonstrate their interest through actions rather than ambiguous statements. Understanding these patterns assists in distinguishing between <strong class="emphasis-readiness">minimal investment behavior</strong> and authentic relationship potential.</p>
      </section>
    </article>
    `
  },
  {
    quote: "Work has just been absolutely insane this week.",
    translation: "I have time to poop, eat, and scroll TikTok, but I don't value you enough to send a 5-second text.",
    score: 3,
    roast: "No one is that busy. Elon Musk tweets 50 times a day. If he wanted to talk to you, he would find the time. 'Busy' is just a polite way of saying 'Priority #99'.",
    keywords: ["busy trap", "low effort", "mixed signals"],
    psychologyContent: `
    <article class="psychology-analysis" aria-labelledby="psychology-work-has-just-been-absolutely-insane-this-week">
      <header>
        <h3 id="psychology-work-has-just-been-absolutely-insane-this-week">The Psychology Behind "Work has just been absolutely insane this week"</h3>
      </header>

      <section class="introductory-analysis">
        <p>This common dating expression reveals crucial insights regarding attachment styles, emotional availability, and relationship intentions. Comprehending the psychological mechanisms underlying these expressions enables recognition of <strong class="emphasis-toxic">concerning communication patterns</strong> and facilitates informed relationship decision-making.</p>
      </section>

      <section class="attachment-analysis">
        <h4>Attachment Style Assessment</h4>
        <p>While potentially less concerning, this communication pattern still provides valuable insights into <strong class="emphasis-attachment">emotional availability</strong> and <strong class="emphasis-attachment">relationship readiness</strong>. The statement may indicate varying levels of self-awareness, communication proficiency, or emotional maturity.</p>
      </section>

      <section class="power-dynamics">
        <h4>Relational Dynamics and Control Patterns</h4>
        <p>This language establishes an imbalanced dynamic where one party controls relationship terms without mutual investment. It functions as a form of <strong class="emphasis-control">frame control</strong> that inhibits genuine partnership development and creates unequal power distribution.</p>
        <p>When individuals employ vague or non-committal language, they frequently maintain <strong class="emphasis-control">emotional control</strong> while avoiding genuine vulnerability. Healthy relationships necessitate mutual investment and transparent communication, rather than ambiguity that primarily serves one party's convenience.</p>
      </section>

      <section class="communication-patterns">
        <h4>Communication Behavior Analysis</h4>
        <p>Frequently accompanied by <strong class="emphasis-pattern">breadcrumbing behaviors</strong>—providing minimal attention to maintain interest without substantial investment. This pattern generates anxiety and uncertainty through inconsistent communication rhythms and unpredictable engagement.</p>
        <p>The tendency toward inconsistent or minimal effort often indicates deeper <strong class="emphasis-pattern">commitment challenges</strong> or unresolved emotional concerns. Individuals who are genuinely interested typically demonstrate consistent effort and maintain clear communication patterns.</p>
      </section>

      <section class="boundaries">
        <h4>Establishing Healthy Relational Boundaries</h4>
        <p>Recognizing these communication patterns enables appropriate boundary establishment and seeking relationships constructed upon mutual respect. Your emotional wellbeing warrants prioritization, and transparent communication forms the foundation of healthy partnership dynamics.</p>
      </section>

      <section class="relationship-readiness">
        <h4>Relationship Readiness Evaluation</h4>
        <p>Adults who are emotionally prepared for healthy relationships do not require confusion or ambiguity. They communicate transparently, invest consistently, and demonstrate their interest through actions rather than ambiguous statements. Understanding these patterns assists in distinguishing between <strong class="emphasis-readiness">minimal investment behavior</strong> and authentic relationship potential.</p>
      </section>
    </article>
    `
  },
  {
    quote: "I promise I'm not ignoring you!",
    translation: "I am definitely ignoring you, but I want to keep you on the hook as a backup option for when I'm free.",
    score: 4,
    roast: "If he has to clarify that he's not ignoring you... he's ignoring you. Secure men just reply; they don't give disclaimers about their silence.",
    keywords: ["breadcrumbing", "manipulation", "gaslighting"],
    psychologyContent: `
    <article class="psychology-analysis" aria-labelledby="psychology-i-promise-im-not-ignoring-you">
      <header>
        <h3 id="psychology-i-promise-im-not-ignoring-you">The Psychology Behind "I promise I'm not ignoring you!"</h3>
      </header>

      <section class="introductory-analysis">
        <p>This common dating expression reveals crucial insights regarding attachment styles, emotional availability, and relationship intentions. Comprehending the psychological mechanisms underlying these expressions enables recognition of <strong class="emphasis-toxic">concerning communication patterns</strong> and facilitates informed relationship decision-making.</p>
      </section>

      <section class="attachment-analysis">
        <h4>Attachment Style Assessment</h4>
        <p>This phrase represents a significant relationship indicator that often reflects <strong class="emphasis-attachment">avoidant attachment patterns</strong>, <strong class="emphasis-attachment">fear of commitment</strong>, or <strong class="emphasis-attachment">manipulative communication behavior</strong>. The individual employing this language typically creates emotional distance while maintaining access to intimacy benefits without reciprocal investment.</p>
      </section>

      <section class="power-dynamics">
        <h4>Relational Dynamics and Control Patterns</h4>
        <p>This language establishes an imbalanced dynamic where one party controls relationship terms without mutual investment. It functions as a form of <strong class="emphasis-control">frame control</strong> that inhibits genuine partnership development and creates unequal power distribution.</p>
        <p>When individuals employ vague or non-committal language, they frequently maintain <strong class="emphasis-control">emotional control</strong> while avoiding genuine vulnerability. Healthy relationships necessitate mutual investment and transparent communication, rather than ambiguity that primarily serves one party's convenience.</p>
      </section>

      <section class="communication-patterns">
        <h4>Communication Behavior Analysis</h4>
        <p>Frequently accompanied by <strong class="emphasis-pattern">breadcrumbing behaviors</strong>—providing minimal attention to maintain interest without substantial investment. This pattern generates anxiety and uncertainty through inconsistent communication rhythms and unpredictable engagement.</p>
        <p>The tendency toward inconsistent or minimal effort often indicates deeper <strong class="emphasis-pattern">commitment challenges</strong> or unresolved emotional concerns. Individuals who are genuinely interested typically demonstrate consistent effort and maintain clear communication patterns.</p>
      </section>

      <section class="boundaries">
        <h4>Establishing Healthy Relational Boundaries</h4>
        <p>Recognizing these communication patterns enables appropriate boundary establishment and seeking relationships constructed upon mutual respect. Your emotional wellbeing warrants prioritization, and transparent communication forms the foundation of healthy partnership dynamics.</p>
      </section>

      <section class="relationship-readiness">
        <h4>Relationship Readiness Evaluation</h4>
        <p>Adults who are emotionally prepared for healthy relationships do not require confusion or ambiguity. They communicate transparently, invest consistently, and demonstrate their interest through actions rather than ambiguous statements. Understanding these patterns assists in distinguishing between <strong class="emphasis-readiness">minimal investment behavior</strong> and authentic relationship potential.</p>
      </section>
    </article>
    `
  },
  {
    quote: "I'm just in a weird headspace right now.",
    translation: "I want to ghost you, but I want to sound deep and mysterious about it so you don't get mad.",
    score: 4,
    roast: "Translation: He's emotionally unavailable. Don't try to be his therapist. You can't fix his 'headspace', but you can protect yours by blocking him.",
    keywords: ["emotional unavailability", "soft breakup", "dating excuses"],
    psychologyContent: `
    <article class="psychology-analysis" aria-labelledby="psychology-i-m-just-in-a-weird-headspace-right-now">
      <header>
        <h3 id="psychology-i-m-just-in-a-weird-headspace-right-now">The Psychology Behind "I'm just in a weird headspace right now."</h3>
      </header>

      <section class="introductory-analysis">
        <p>This common dating expression reveals crucial insights regarding attachment styles, emotional availability, and relationship intentions. Comprehending the psychological mechanisms underlying these expressions enables recognition of <strong class="emphasis-toxic">concerning communication patterns</strong> and facilitates informed relationship decision-making.</p>
      </section>

      <section class="attachment-analysis">
        <h4>Attachment Style Assessment</h4>
        <p>This phrase represents a significant relationship indicator that often reflects <strong class="emphasis-attachment">avoidant attachment patterns</strong>, <strong class="emphasis-attachment">fear of commitment</strong>, or <strong class="emphasis-attachment">manipulative communication behavior</strong>. The individual employing this language typically creates emotional distance while maintaining access to intimacy benefits without reciprocal investment.</p>
      </section>

      <section class="power-dynamics">
        <h4>Relational Dynamics and Control Patterns</h4>
        <p>This language establishes an imbalanced dynamic where one party controls relationship terms without mutual investment. It functions as a form of <strong class="emphasis-control">frame control</strong> that inhibits genuine partnership development and creates unequal power distribution.</p>
        <p>When individuals employ vague or non-committal language, they frequently maintain <strong class="emphasis-control">emotional control</strong> while avoiding genuine vulnerability. Healthy relationships necessitate mutual investment and transparent communication, rather than ambiguity that primarily serves one party's convenience.</p>
      </section>

      <section class="communication-patterns">
        <h4>Communication Behavior Analysis</h4>
        <p>Frequently accompanied by <strong class="emphasis-pattern">breadcrumbing behaviors</strong>—providing minimal attention to maintain interest without substantial investment. This pattern generates anxiety and uncertainty through inconsistent communication rhythms and unpredictable engagement.</p>
        <p>The tendency toward inconsistent or minimal effort often indicates deeper <strong class="emphasis-pattern">commitment challenges</strong> or unresolved emotional concerns. Individuals who are genuinely interested typically demonstrate consistent effort and maintain clear communication patterns.</p>
      </section>

      <section class="boundaries">
        <h4>Establishing Healthy Relational Boundaries</h4>
        <p>Recognizing these communication patterns enables appropriate boundary establishment and seeking relationships constructed upon mutual respect. Your emotional wellbeing warrants prioritization, and transparent communication forms the foundation of healthy partnership dynamics.</p>
      </section>

      <section class="relationship-readiness">
        <h4>Relationship Readiness Evaluation</h4>
        <p>Adults who are emotionally prepared for healthy relationships do not require confusion or ambiguity. They communicate transparently, invest consistently, and demonstrate their interest through actions rather than ambiguous statements. Understanding these patterns assists in distinguishing between <strong class="emphasis-readiness">minimal investment behavior</strong> and authentic relationship potential.</p>
      </section>
    </article>
    `
  },
  {
    quote: "I miss your face.",
    translation: "I haven't texted you in 2 weeks, but I want to see if I can still get a nude or a hookup tonight.",
    score: 5,
    roast: "Lazy. He doesn't miss *you* (your personality, your mind), he misses *your face* (and body). This is a 2 AM booty call disguised as a compliment.",
    keywords: ["booty call", "breadcrumbing", "hoovering"],
    psychologyContent: `
    <article class="psychology-analysis" aria-labelledby="psychology-i-miss-your-face">
      <header>
        <h3 id="psychology-i-miss-your-face">The Psychology Behind "I miss your face."</h3>
      </header>

      <section class="introductory-analysis">
        <p>This common dating expression reveals crucial insights regarding attachment styles, emotional availability, and relationship intentions. Comprehending the psychological mechanisms underlying these expressions enables recognition of <strong class="emphasis-toxic">concerning communication patterns</strong> and facilitates informed relationship decision-making.</p>
      </section>

      <section class="attachment-analysis">
        <h4>Attachment Style Assessment</h4>
        <p>This phrase represents a significant relationship indicator that often reflects <strong class="emphasis-attachment">avoidant attachment patterns</strong>, <strong class="emphasis-attachment">fear of commitment</strong>, or <strong class="emphasis-attachment">manipulative communication behavior</strong>. The individual employing this language typically creates emotional distance while maintaining access to intimacy benefits without reciprocal investment.</p>
      </section>

      <section class="power-dynamics">
        <h4>Relational Dynamics and Control Patterns</h4>
        <p>This language establishes an imbalanced dynamic where one party controls relationship terms without mutual investment. It functions as a form of <strong class="emphasis-control">frame control</strong> that inhibits genuine partnership development and creates unequal power distribution.</p>
        <p>When individuals employ vague or non-committal language, they frequently maintain <strong class="emphasis-control">emotional control</strong> while avoiding genuine vulnerability. Healthy relationships necessitate mutual investment and transparent communication, rather than ambiguity that primarily serves one party's convenience.</p>
      </section>

      <section class="communication-patterns">
        <h4>Communication Behavior Analysis</h4>
        <p>Frequently accompanied by <strong class="emphasis-pattern">breadcrumbing behaviors</strong>—providing minimal attention to maintain interest without substantial investment. This pattern generates anxiety and uncertainty through inconsistent communication rhythms and unpredictable engagement.</p>
        <p>The tendency toward inconsistent or minimal effort often indicates deeper <strong class="emphasis-pattern">commitment challenges</strong> or unresolved emotional concerns. Individuals who are genuinely interested typically demonstrate consistent effort and maintain clear communication patterns.</p>
      </section>

      <section class="boundaries">
        <h4>Establishing Healthy Relational Boundaries</h4>
        <p>Recognizing these communication patterns enables appropriate boundary establishment and seeking relationships constructed upon mutual respect. Your emotional wellbeing warrants prioritization, and transparent communication forms the foundation of healthy partnership dynamics.</p>
      </section>

      <section class="relationship-readiness">
        <h4>Relationship Readiness Evaluation</h4>
        <p>Adults who are emotionally prepared for healthy relationships do not require confusion or ambiguity. They communicate transparently, invest consistently, and demonstrate their interest through actions rather than ambiguous statements. Understanding these patterns assists in distinguishing between <strong class="emphasis-readiness">minimal investment behavior</strong> and authentic relationship potential.</p>
      </section>
    </article>
    `
  },
  {
    quote: "I lost my phone / got a new number.",
    translation: "I blocked you / deleted your number, but now I'm back. I am lying to your face.",
    score: 5,
    roast: "In the age of iCloud? Please. He didn't lose his contacts. He's just hoping you've lost your memory of how badly he treated you last time.",
    keywords: ["lying", "ghosting excuses", "toxic ex"],
    psychologyContent: `
    <article class="psychology-analysis" aria-labelledby="psychology-i-lost-my-phone-got-a-new-number">
      <header>
        <h3 id="psychology-i-lost-my-phone-got-a-new-number">The Psychology Behind "I lost my phone / got a new number."</h3>
      </header>

      <section class="introductory-analysis">
        <p>This common dating expression reveals crucial insights regarding attachment styles, emotional availability, and relationship intentions. Comprehending the psychological mechanisms underlying these expressions enables recognition of <strong class="emphasis-toxic">concerning communication patterns</strong> and facilitates informed relationship decision-making.</p>
      </section>

      <section class="attachment-analysis">
        <h4>Attachment Style Assessment</h4>
        <p>This phrase represents a significant relationship indicator that often reflects <strong class="emphasis-attachment">avoidant attachment patterns</strong>, <strong class="emphasis-attachment">fear of commitment</strong>, or <strong class="emphasis-attachment">manipulative communication behavior</strong>. The individual employing this language typically creates emotional distance while maintaining access to intimacy benefits without reciprocal investment.</p>
      </section>

      <section class="power-dynamics">
        <h4>Relational Dynamics and Control Patterns</h4>
        <p>This language establishes an imbalanced dynamic where one party controls relationship terms without mutual investment. It functions as a form of <strong class="emphasis-control">frame control</strong> that inhibits genuine partnership development and creates unequal power distribution.</p>
        <p>When individuals employ vague or non-committal language, they frequently maintain <strong class="emphasis-control">emotional control</strong> while avoiding genuine vulnerability. Healthy relationships necessitate mutual investment and transparent communication, rather than ambiguity that primarily serves one party's convenience.</p>
      </section>

      <section class="communication-patterns">
        <h4>Communication Behavior Analysis</h4>
        <p>Frequently accompanied by <strong class="emphasis-pattern">breadcrumbing behaviors</strong>—providing minimal attention to maintain interest without substantial investment. This pattern generates anxiety and uncertainty through inconsistent communication rhythms and unpredictable engagement.</p>
        <p>The tendency toward inconsistent or minimal effort often indicates deeper <strong class="emphasis-pattern">commitment challenges</strong> or unresolved emotional concerns. Individuals who are genuinely interested typically demonstrate consistent effort and maintain clear communication patterns.</p>
      </section>

      <section class="boundaries">
        <h4>Establishing Healthy Relational Boundaries</h4>
        <p>Recognizing these communication patterns enables appropriate boundary establishment and seeking relationships constructed upon mutual respect. Your emotional wellbeing warrants prioritization, and transparent communication forms the foundation of healthy partnership dynamics.</p>
      </section>

      <section class="relationship-readiness">
        <h4>Relationship Readiness Evaluation</h4>
        <p>Adults who are emotionally prepared for healthy relationships do not require confusion or ambiguity. They communicate transparently, invest consistently, and demonstrate their interest through actions rather than ambiguous statements. Understanding these patterns assists in distinguishing between <strong class="emphasis-readiness">minimal investment behavior</strong> and authentic relationship potential.</p>
      </section>
    </article>
    `
  },
  {
    quote: "I pulled back because I didn't want to lead you on.",
    translation: "I ghosted you instead of having a mature conversation. I'm framing my cowardice as 'protecting you'.",
    score: 4,
    roast: "Ghosting IS leading someone on (to wonder where you went). A mature man says 'I'm not interested'. A coward disappears and calls it 'kindness'.",
    keywords: ["cowardice", "ghosting psychology", "avoidant attachment"],
    psychologyContent: `
    <article class="psychology-analysis" aria-labelledby="psychology-i-pulled-back-because-i-didn-t-want-to-lead-you-on">
      <header>
        <h3 id="psychology-i-pulled-back-because-i-didn-t-want-to-lead-you-on">The Psychology Behind "I pulled back because I didn't want to lead you on."</h3>
      </header>

      <section class="introductory-analysis">
        <p>This common dating expression reveals crucial insights regarding attachment styles, emotional availability, and relationship intentions. Comprehending the psychological mechanisms underlying these expressions enables recognition of <strong class="emphasis-toxic">concerning communication patterns</strong> and facilitates informed relationship decision-making.</p>
      </section>

      <section class="attachment-analysis">
        <h4>Attachment Style Assessment</h4>
        <p>This phrase represents a significant relationship indicator that often reflects <strong class="emphasis-attachment">avoidant attachment patterns</strong>, <strong class="emphasis-attachment">fear of commitment</strong>, or <strong class="emphasis-attachment">manipulative communication behavior</strong>. The individual employing this language typically creates emotional distance while maintaining access to intimacy benefits without reciprocal investment.</p>
      </section>

      <section class="power-dynamics">
        <h4>Relational Dynamics and Control Patterns</h4>
        <p>This language establishes an imbalanced dynamic where one party controls relationship terms without mutual investment. It functions as a form of <strong class="emphasis-control">frame control</strong> that inhibits genuine partnership development and creates unequal power distribution.</p>
        <p>When individuals employ vague or non-committal language, they frequently maintain <strong class="emphasis-control">emotional control</strong> while avoiding genuine vulnerability. Healthy relationships necessitate mutual investment and transparent communication, rather than ambiguity that primarily serves one party's convenience.</p>
      </section>

      <section class="communication-patterns">
        <h4>Communication Behavior Analysis</h4>
        <p>Frequently accompanied by <strong class="emphasis-pattern">breadcrumbing behaviors</strong>—providing minimal attention to maintain interest without substantial investment. This pattern generates anxiety and uncertainty through inconsistent communication rhythms and unpredictable engagement.</p>
        <p>The tendency toward inconsistent or minimal effort often indicates deeper <strong class="emphasis-pattern">commitment challenges</strong> or unresolved emotional concerns. Individuals who are genuinely interested typically demonstrate consistent effort and maintain clear communication patterns.</p>
      </section>

      <section class="boundaries">
        <h4>Establishing Healthy Relational Boundaries</h4>
        <p>Recognizing these communication patterns enables appropriate boundary establishment and seeking relationships constructed upon mutual respect. Your emotional wellbeing warrants prioritization, and transparent communication forms the foundation of healthy partnership dynamics.</p>
      </section>

      <section class="relationship-readiness">
        <h4>Relationship Readiness Evaluation</h4>
        <p>Adults who are emotionally prepared for healthy relationships do not require confusion or ambiguity. They communicate transparently, invest consistently, and demonstrate their interest through actions rather than ambiguous statements. Understanding these patterns assists in distinguishing between <strong class="emphasis-readiness">minimal investment behavior</strong> and authentic relationship potential.</p>
      </section>
    </article>
    `
  },
  {
    quote: "Sorry, had a family emergency.",
    translation: "5% chance it's real, 95% chance it's the 'Get Out of Jail Free' card for disappearing for a week.",
    score: 3,
    roast: "If it's real, fair enough. But if he's back on Bumble 2 days later without explaining, the 'emergency' was just him losing interest. Proceed with extreme caution.",
    keywords: ["lying", "red flags", "excuses"],
    psychologyContent: `
    <article class="psychology-analysis" aria-labelledby="psychology-sorry-had-a-family-emergency">
      <header>
        <h3 id="psychology-sorry-had-a-family-emergency">The Psychology Behind "Sorry, had a family emergency."</h3>
      </header>

      <section class="introductory-analysis">
        <p>This common dating expression reveals crucial insights regarding attachment styles, emotional availability, and relationship intentions. Comprehending the psychological mechanisms underlying these expressions enables recognition of <strong class="emphasis-toxic">concerning communication patterns</strong> and facilitates informed relationship decision-making.</p>
      </section>

      <section class="attachment-analysis">
        <h4>Attachment Style Assessment</h4>
        <p>This phrase represents a significant relationship indicator that often reflects <strong class="emphasis-attachment">avoidant attachment patterns</strong>, <strong class="emphasis-attachment">fear of commitment</strong>, or <strong class="emphasis-attachment">manipulative communication behavior</strong>. The individual employing this language typically creates emotional distance while maintaining access to intimacy benefits without reciprocal investment.</p>
      </section>

      <section class="power-dynamics">
        <h4>Relational Dynamics and Control Patterns</h4>
        <p>This language establishes an imbalanced dynamic where one party controls relationship terms without mutual investment. It functions as a form of <strong class="emphasis-control">frame control</strong> that inhibits genuine partnership development and creates unequal power distribution.</p>
        <p>When individuals employ vague or non-committal language, they frequently maintain <strong class="emphasis-control">emotional control</strong> while avoiding genuine vulnerability. Healthy relationships necessitate mutual investment and transparent communication, rather than ambiguity that primarily serves one party's convenience.</p>
      </section>

      <section class="communication-patterns">
        <h4>Communication Behavior Analysis</h4>
        <p>Frequently accompanied by <strong class="emphasis-pattern">breadcrumbing behaviors</strong>—providing minimal attention to maintain interest without substantial investment. This pattern generates anxiety and uncertainty through inconsistent communication rhythms and unpredictable engagement.</p>
        <p>The tendency toward inconsistent or minimal effort often indicates deeper <strong class="emphasis-pattern">commitment challenges</strong> or unresolved emotional concerns. Individuals who are genuinely interested typically demonstrate consistent effort and maintain clear communication patterns.</p>
      </section>

      <section class="boundaries">
        <h4>Establishing Healthy Relational Boundaries</h4>
        <p>Recognizing these communication patterns enables appropriate boundary establishment and seeking relationships constructed upon mutual respect. Your emotional wellbeing warrants prioritization, and transparent communication forms the foundation of healthy partnership dynamics.</p>
      </section>

      <section class="relationship-readiness">
        <h4>Relationship Readiness Evaluation</h4>
        <p>Adults who are emotionally prepared for healthy relationships do not require confusion or ambiguity. They communicate transparently, invest consistently, and demonstrate their interest through actions rather than ambiguous statements. Understanding these patterns assists in distinguishing between <strong class="emphasis-readiness">minimal investment behavior</strong> and authentic relationship potential.</p>
      </section>
    </article>
    `
  },
  {
    quote: "I got scared because I like you too much.",
    translation: "I am an Avoidant. I will sabotage this relationship the moment it gets real. Ghosting is my defense mechanism.",
    score: 5,
    roast: "Run. This isn't romantic; it's a warning. He's telling you he will punish you for getting close to him. You are not a rehabilitation center for avoidant men.",
    keywords: ["avoidant attachment", "love bombing", "future faking"],
    psychologyContent: `
    <article class="psychology-analysis" aria-labelledby="psychology-i-got-scared-because-i-like-you-too-much">
      <header>
        <h3 id="psychology-i-got-scared-because-i-like-you-too-much">The Psychology Behind "I got scared because I like you too much."</h3>
      </header>

      <section class="introductory-analysis">
        <p>This common dating expression reveals crucial insights regarding attachment styles, emotional availability, and relationship intentions. Comprehending the psychological mechanisms underlying these expressions enables recognition of <strong class="emphasis-toxic">concerning communication patterns</strong> and facilitates informed relationship decision-making.</p>
      </section>

      <section class="attachment-analysis">
        <h4>Attachment Style Assessment</h4>
        <p>This phrase represents a significant relationship indicator that often reflects <strong class="emphasis-attachment">avoidant attachment patterns</strong>, <strong class="emphasis-attachment">fear of commitment</strong>, or <strong class="emphasis-attachment">manipulative communication behavior</strong>. The individual employing this language typically creates emotional distance while maintaining access to intimacy benefits without reciprocal investment.</p>
      </section>

      <section class="power-dynamics">
        <h4>Relational Dynamics and Control Patterns</h4>
        <p>This language establishes an imbalanced dynamic where one party controls relationship terms without mutual investment. It functions as a form of <strong class="emphasis-control">frame control</strong> that inhibits genuine partnership development and creates unequal power distribution.</p>
        <p>When individuals employ vague or non-committal language, they frequently maintain <strong class="emphasis-control">emotional control</strong> while avoiding genuine vulnerability. Healthy relationships necessitate mutual investment and transparent communication, rather than ambiguity that primarily serves one party's convenience.</p>
      </section>

      <section class="communication-patterns">
        <h4>Communication Behavior Analysis</h4>
        <p>Frequently accompanied by <strong class="emphasis-pattern">breadcrumbing behaviors</strong>—providing minimal attention to maintain interest without substantial investment. This pattern generates anxiety and uncertainty through inconsistent communication rhythms and unpredictable engagement.</p>
        <p>The tendency toward inconsistent or minimal effort often indicates deeper <strong class="emphasis-pattern">commitment challenges</strong> or unresolved emotional concerns. Individuals who are genuinely interested typically demonstrate consistent effort and maintain clear communication patterns.</p>
      </section>

      <section class="boundaries">
        <h4>Establishing Healthy Relational Boundaries</h4>
        <p>Recognizing these communication patterns enables appropriate boundary establishment and seeking relationships constructed upon mutual respect. Your emotional wellbeing warrants prioritization, and transparent communication forms the foundation of healthy partnership dynamics.</p>
      </section>

      <section class="relationship-readiness">
        <h4>Relationship Readiness Evaluation</h4>
        <p>Adults who are emotionally prepared for healthy relationships do not require confusion or ambiguity. They communicate transparently, invest consistently, and demonstrate their interest through actions rather than ambiguous statements. Understanding these patterns assists in distinguishing between <strong class="emphasis-readiness">minimal investment behavior</strong> and authentic relationship potential.</p>
      </section>
    </article>
    `
  },
  {
    quote: "I literally forgot to hit send.",
    translation: "I typed it, got distracted by a better offer, and only remembered you now that I'm bored.",
    score: 2,
    roast: "Once? Maybe. Every time? He's just not that into you. People don't forget to text people they are crazy about.",
    keywords: ["low interest", "bad texter", "slow fade"],
    psychologyContent: `
    <article class="psychology-analysis" aria-labelledby="psychology-forgot-send">
      <header>
        <h3 id="psychology-forgot-send">The Psychology Behind "I literally forgot to hit send."</h3>
      </header>

      <section class="introductory-analysis">
        <p>This common dating phrase reveals critical insights into attachment styles, emotional availability, and relationship intentions. Understanding the psychological mechanisms behind these words helps recognize <strong class="emphasis-toxic">toxic communication patterns</strong> and make informed dating decisions.</p>
      </section>

      <section class="attachment-analysis">
        <h4>Attachment Style Analysis</h4>
        <p>While potentially less severe, this communication pattern still reveals important insights into <strong class="emphasis-attachment">emotional availability</strong> and <strong class="emphasis-attachment">relationship readiness</strong>. The phrase may indicate varying levels of self-awareness, communication skills, or emotional maturity.</p>
      </section>

      <section class="power-dynamics">
        <h4>Power Dynamics and Frame Control</h4>
        <p>The communication style may unintentionally create confusion or unclear expectations, potentially leading to misunderstandings and emotional disconnection.</p>
        <p>When someone uses vague or non-committal language, they're maintaining <strong class="emphasis-control">emotional control</strong> while avoiding vulnerability. Healthy relationships require mutual investment and clear communication, not ambiguity that serves one person's convenience.</p>
      </section>

      <section class="communication-patterns">
        <h4>Communication Pattern Recognition</h4>
        <p>This may reflect genuine communication challenges or different relationship expectations that require open discussion and mutual understanding.</p>
        <p>The pattern of inconsistent or minimal effort often indicates deeper <strong class="emphasis-pattern">commitment issues</strong> or emotional wounds. People who are genuinely interested typically demonstrate consistent effort and clear communication.</p>
      </section>

      <section class="boundaries">
        <h4>Setting Healthy Boundaries</h4>
        <p>Recognizing these communication patterns enables setting appropriate boundaries and seeking relationships built on mutual respect. Your emotional wellbeing deserves to be prioritized, and clear communication is the foundation of healthy partnership.</p>
      </section>

      <section class="relationship-readiness">
        <h4>Relationship Readiness Assessment</h4>
        <p>Adults who are emotionally ready for healthy relationships don't need to create confusion or ambiguity. They communicate clearly, invest consistently, and demonstrate their interest through actions rather than vague statements. Understanding these patterns helps distinguish between <strong class="emphasis-readiness">low effort behavior</strong> and genuine relationship potential.</p>
      </section>
    </article>
    `
  },
  {
    quote: "My social battery is just drained.",
    translation: "I have energy for my friends and video games, just not for you.",
    score: 3,
    roast: "If you drain his battery, you aren't a match. The right person recharges you. Don't beg for the scraps of his energy.",
    keywords: ["introvert excuses", "lack of interest", "incompatibility"],
    psychologyContent: `
    <article class="psychology-analysis" aria-labelledby="psychology-social-battery">
      <header>
        <h3 id="psychology-social-battery">The Psychology Behind "My social battery is just drained."</h3>
      </header>

      <section class="introductory-analysis">
        <p>This common dating phrase reveals critical insights into attachment styles, emotional availability, and relationship intentions. Understanding the psychological mechanisms behind these words helps recognize <strong class="emphasis-toxic">toxic communication patterns</strong> and make informed dating decisions.</p>
      </section>

      <section class="attachment-analysis">
        <h4>Attachment Style Analysis</h4>
        <p>While potentially less severe, this communication pattern still reveals important insights into <strong class="emphasis-attachment">emotional availability</strong> and <strong class="emphasis-attachment">relationship readiness</strong>. The phrase may indicate varying levels of self-awareness, communication skills, or emotional maturity.</p>
      </section>

      <section class="power-dynamics">
        <h4>Power Dynamics and Frame Control</h4>
        <p>The communication style may unintentionally create confusion or unclear expectations, potentially leading to misunderstandings and emotional disconnection.</p>
        <p>When someone uses vague or non-committal language, they're maintaining <strong class="emphasis-control">emotional control</strong> while avoiding vulnerability. Healthy relationships require mutual investment and clear communication, not ambiguity that serves one person's convenience.</p>
      </section>

      <section class="communication-patterns">
        <h4>Communication Pattern Recognition</h4>
        <p>Often accompanied by <strong class="emphasis-pattern">breadcrumbing behaviors</strong>—providing just enough attention to maintain interest without real investment. This creates anxiety and uncertainty through inconsistent communication patterns.</p>
        <p>The pattern of inconsistent or minimal effort often indicates deeper <strong class="emphasis-pattern">commitment issues</strong> or emotional wounds. People who are genuinely interested typically demonstrate consistent effort and clear communication.</p>
      </section>

      <section class="boundaries">
        <h4>Setting Healthy Boundaries</h4>
        <p>Recognizing these communication patterns enables setting appropriate boundaries and seeking relationships built on mutual respect. Your emotional wellbeing deserves to be prioritized, and clear communication is the foundation of healthy partnership.</p>
      </section>

      <section class="relationship-readiness">
        <h4>Relationship Readiness Assessment</h4>
        <p>Adults who are emotionally ready for healthy relationships don't need to create confusion or ambiguity. They communicate clearly, invest consistently, and demonstrate their interest through actions rather than vague statements. Understanding these patterns helps distinguish between <strong class="emphasis-readiness">low effort behavior</strong> and genuine relationship potential.</p>
      </section>
    </article>
    `
  },
  {
    quote: "Sorry I fell asleep.",
    translation: "Sent at 4 PM the next day. I saw your text, didn't feel like replying, and now I'm doing the bare minimum.",
    score: 2,
    roast: "He fell asleep at 8 PM and woke up at 4 PM? Is he a bear hibernating? No, he just didn't prioritize replying to you in the morning.",
    keywords: ["low effort", "lies", "texting etiquette"],
    psychologyContent: `
    <article class="psychology-analysis" aria-labelledby="psychology-sorry-i-fell-asleep">
      <header>
        <h3 id="psychology-sorry-i-fell-asleep">The Psychology Behind "Sorry I fell asleep."</h3>
      </header>

      <section class="introductory-analysis">
        <p>This common dating expression reveals crucial insights regarding attachment styles, emotional availability, and relationship intentions. Comprehending the psychological mechanisms underlying these expressions enables recognition of <strong class="emphasis-toxic">concerning communication patterns</strong> and facilitates informed relationship decision-making.</p>
      </section>

      <section class="attachment-analysis">
        <h4>Attachment Style Assessment</h4>
        <p>While potentially less concerning, this communication pattern still provides valuable insights into <strong class="emphasis-attachment">emotional availability</strong> and <strong class="emphasis-attachment">relationship readiness</strong>. The statement may indicate varying levels of self-awareness, communication proficiency, or emotional maturity.</p>
      </section>

      <section class="power-dynamics">
        <h4>Relational Dynamics and Control Patterns</h4>
        <p>The communication approach may inadvertently create confusion or ambiguous expectations, potentially resulting in misunderstandings and emotional disconnection between parties.</p>
        <p>When individuals employ vague or non-committal language, they frequently maintain <strong class="emphasis-control">emotional control</strong> while avoiding genuine vulnerability. Healthy relationships necessitate mutual investment and transparent communication, rather than ambiguity that primarily serves one party's convenience.</p>
      </section>

      <section class="communication-patterns">
        <h4>Communication Behavior Analysis</h4>
        <p>This may reflect authentic communication challenges or differing relationship expectations that necessitate open discussion and mutual understanding to resolve effectively.</p>
        <p>The tendency toward inconsistent or minimal effort often indicates deeper <strong class="emphasis-pattern">commitment challenges</strong> or unresolved emotional concerns. Individuals who are genuinely interested typically demonstrate consistent effort and maintain clear communication patterns.</p>
      </section>

      <section class="boundaries">
        <h4>Establishing Healthy Relational Boundaries</h4>
        <p>Recognizing these communication patterns enables appropriate boundary establishment and seeking relationships constructed upon mutual respect. Your emotional wellbeing warrants prioritization, and transparent communication forms the foundation of healthy partnership dynamics.</p>
      </section>

      <section class="relationship-readiness">
        <h4>Relationship Readiness Evaluation</h4>
        <p>Adults who are emotionally prepared for healthy relationships do not require confusion or ambiguity. They communicate transparently, invest consistently, and demonstrate their interest through actions rather than ambiguous statements. Understanding these patterns assists in distinguishing between <strong class="emphasis-readiness">minimal investment behavior</strong> and authentic relationship potential.</p>
      </section>
    </article>
    `
  },
  {
    quote: "I have my notifications turned off.",
    translation: "I don't want you popping up on my screen when I'm with other people.",
    score: 4,
    roast: "Why does he need to hide his notifications? Usually, it's because he doesn't want the girl he's *actually* dating to see your name.",
    keywords: ["cheating", "hiding phone", "player"],
    psychologyContent: `
    <article class="psychology-analysis" aria-labelledby="psychology-i-have-my-notifications-turned-off">
      <header>
        <h3 id="psychology-i-have-my-notifications-turned-off">The Psychology Behind "I have my notifications turned off."</h3>
      </header>

      <section class="introductory-analysis">
        <p>This common dating expression reveals crucial insights regarding attachment styles, emotional availability, and relationship intentions. Comprehending the psychological mechanisms underlying these expressions enables recognition of <strong class="emphasis-toxic">concerning communication patterns</strong> and facilitates informed relationship decision-making.</p>
      </section>

      <section class="attachment-analysis">
        <h4>Attachment Style Assessment</h4>
        <p>This phrase represents a significant relationship indicator that often reflects <strong class="emphasis-attachment">avoidant attachment patterns</strong>, <strong class="emphasis-attachment">fear of commitment</strong>, or <strong class="emphasis-attachment">manipulative communication behavior</strong>. The individual employing this language typically creates emotional distance while maintaining access to intimacy benefits without reciprocal investment.</p>
      </section>

      <section class="power-dynamics">
        <h4>Relational Dynamics and Control Patterns</h4>
        <p>This language establishes an imbalanced dynamic where one party controls relationship terms without mutual investment. It functions as a form of <strong class="emphasis-control">frame control</strong> that inhibits genuine partnership development and creates unequal power distribution.</p>
        <p>When individuals employ vague or non-committal language, they frequently maintain <strong class="emphasis-control">emotional control</strong> while avoiding genuine vulnerability. Healthy relationships necessitate mutual investment and transparent communication, rather than ambiguity that primarily serves one party's convenience.</p>
      </section>

      <section class="communication-patterns">
        <h4>Communication Behavior Analysis</h4>
        <p>Frequently accompanied by <strong class="emphasis-pattern">breadcrumbing behaviors</strong>—providing minimal attention to maintain interest without substantial investment. This pattern generates anxiety and uncertainty through inconsistent communication rhythms and unpredictable engagement.</p>
        <p>The tendency toward inconsistent or minimal effort often indicates deeper <strong class="emphasis-pattern">commitment challenges</strong> or unresolved emotional concerns. Individuals who are genuinely interested typically demonstrate consistent effort and maintain clear communication patterns.</p>
      </section>

      <section class="boundaries">
        <h4>Establishing Healthy Relational Boundaries</h4>
        <p>Recognizing these communication patterns enables appropriate boundary establishment and seeking relationships constructed upon mutual respect. Your emotional wellbeing warrants prioritization, and transparent communication forms the foundation of healthy partnership dynamics.</p>
      </section>

      <section class="relationship-readiness">
        <h4>Relationship Readiness Evaluation</h4>
        <p>Adults who are emotionally prepared for healthy relationships do not require confusion or ambiguity. They communicate transparently, invest consistently, and demonstrate their interest through actions rather than ambiguous statements. Understanding these patterns assists in distinguishing between <strong class="emphasis-readiness">minimal investment behavior</strong> and authentic relationship potential.</p>
      </section>
    </article>
    `
  },
  {
    quote: "Just saw this!",
    translation: "I saw this 3 days ago. I'm replying now because I want something.",
    score: 3,
    roast: "Read receipts exist for a reason. Even if they're off, we know. He's treating you like an option. Treat him like a ghost.",
    keywords: ["breadcrumbing", "stalling", "benching"],
    psychologyContent: `
    <article class="psychology-analysis" aria-labelledby="psychology-just-saw-this">
      <header>
        <h3 id="psychology-just-saw-this">The Psychology Behind "Just saw this!"</h3>
      </header>

      <section class="introductory-analysis">
        <p>This common dating expression reveals crucial insights regarding attachment styles, emotional availability, and relationship intentions. Comprehending the psychological mechanisms underlying these expressions enables recognition of <strong class="emphasis-toxic">concerning communication patterns</strong> and facilitates informed relationship decision-making.</p>
      </section>

      <section class="attachment-analysis">
        <h4>Attachment Style Assessment</h4>
        <p>This phrase represents a significant relationship indicator that often reflects <strong class="emphasis-attachment">avoidant attachment patterns</strong>, <strong class="emphasis-attachment">fear of commitment</strong>, or <strong class="emphasis-attachment">manipulative communication behavior</strong>. The individual employing this language typically creates emotional distance while maintaining access to intimacy benefits without reciprocal investment.</p>
      </section>

      <section class="power-dynamics">
        <h4>Relational Dynamics and Control Patterns</h4>
        <p>This language establishes an imbalanced dynamic where one party controls relationship terms without mutual investment. It functions as a form of <strong class="emphasis-control">frame control</strong> that inhibits genuine partnership development and creates unequal power distribution.</p>
        <p>When individuals employ vague or non-committal language, they frequently maintain <strong class="emphasis-control">emotional control</strong> while avoiding genuine vulnerability. Healthy relationships necessitate mutual investment and transparent communication, rather than ambiguity that primarily serves one party's convenience.</p>
      </section>

      <section class="communication-patterns">
        <h4>Communication Behavior Analysis</h4>
        <p>Frequently accompanied by <strong class="emphasis-pattern">breadcrumbing behaviors</strong>—providing minimal attention to maintain interest without substantial investment. This pattern generates anxiety and uncertainty through inconsistent communication rhythms and unpredictable engagement.</p>
        <p>The tendency toward inconsistent or minimal effort often indicates deeper <strong class="emphasis-pattern">commitment challenges</strong> or unresolved emotional concerns. Individuals who are genuinely interested typically demonstrate consistent effort and maintain clear communication patterns.</p>
      </section>

      <section class="boundaries">
        <h4>Establishing Healthy Relational Boundaries</h4>
        <p>Recognizing these communication patterns enables appropriate boundary establishment and seeking relationships constructed upon mutual respect. Your emotional wellbeing warrants prioritization, and transparent communication forms the foundation of healthy partnership dynamics.</p>
      </section>

      <section class="relationship-readiness">
        <h4>Relationship Readiness Evaluation</h4>
        <p>Adults who are emotionally prepared for healthy relationships do not require confusion or ambiguity. They communicate transparently, invest consistently, and demonstrate their interest through actions rather than ambiguous statements. Understanding these patterns assists in distinguishing between <strong class="emphasis-readiness">minimal investment behavior</strong> and authentic relationship potential.</p>
      </section>
    </article>
    `
  },
  {
    quote: "Can we raincheck? (and never reschedules)",
    translation: "I am cancelling on you, and I am ghosting the rescheduling part hoping you'll get the hint.",
    score: 4,
    roast: "A cancellation without a new date proposed is a rejection. He's not busy; he's bailing. Don't ask 'when?'. Just say 'ok' and delete his number.",
    keywords: ["flaky", "cancellation", "soft rejection"],
    psychologyContent: `
    <article class="psychology-analysis" aria-labelledby="psychology-can-we-raincheck-and-never-reschedules">
      <header>
        <h3 id="psychology-can-we-raincheck-and-never-reschedules">The Psychology Behind "Can we raincheck? (and never reschedules)"</h3>
      </header>

      <section class="introductory-analysis">
        <p>This common dating expression reveals crucial insights regarding attachment styles, emotional availability, and relationship intentions. Comprehending the psychological mechanisms underlying these expressions enables recognition of <strong class="emphasis-toxic">concerning communication patterns</strong> and facilitates informed relationship decision-making.</p>
      </section>

      <section class="attachment-analysis">
        <h4>Attachment Style Assessment</h4>
        <p>This phrase represents a significant relationship indicator that often reflects <strong class="emphasis-attachment">avoidant attachment patterns</strong>, <strong class="emphasis-attachment">fear of commitment</strong>, or <strong class="emphasis-attachment">manipulative communication behavior</strong>. The individual employing this language typically creates emotional distance while maintaining access to intimacy benefits without reciprocal investment.</p>
      </section>

      <section class="power-dynamics">
        <h4>Relational Dynamics and Control Patterns</h4>
        <p>This language establishes an imbalanced dynamic where one party controls relationship terms without mutual investment. It functions as a form of <strong class="emphasis-control">frame control</strong> that inhibits genuine partnership development and creates unequal power distribution.</p>
        <p>When individuals employ vague or non-committal language, they frequently maintain <strong class="emphasis-control">emotional control</strong> while avoiding genuine vulnerability. Healthy relationships necessitate mutual investment and transparent communication, rather than ambiguity that primarily serves one party's convenience.</p>
      </section>

      <section class="communication-patterns">
        <h4>Communication Behavior Analysis</h4>
        <p>Frequently accompanied by <strong class="emphasis-pattern">breadcrumbing behaviors</strong>—providing minimal attention to maintain interest without substantial investment. This pattern generates anxiety and uncertainty through inconsistent communication rhythms and unpredictable engagement.</p>
        <p>The tendency toward inconsistent or minimal effort often indicates deeper <strong class="emphasis-pattern">commitment challenges</strong> or unresolved emotional concerns. Individuals who are genuinely interested typically demonstrate consistent effort and maintain clear communication patterns.</p>
      </section>

      <section class="boundaries">
        <h4>Establishing Healthy Relational Boundaries</h4>
        <p>Recognizing these communication patterns enables appropriate boundary establishment and seeking relationships constructed upon mutual respect. Your emotional wellbeing warrants prioritization, and transparent communication forms the foundation of healthy partnership dynamics.</p>
      </section>

      <section class="relationship-readiness">
        <h4>Relationship Readiness Evaluation</h4>
        <p>Adults who are emotionally prepared for healthy relationships do not require confusion or ambiguity. They communicate transparently, invest consistently, and demonstrate their interest through actions rather than ambiguous statements. Understanding these patterns assists in distinguishing between <strong class="emphasis-readiness">minimal investment behavior</strong> and authentic relationship potential.</p>
      </section>
    </article>
    `
  },
  {
    quote: "U up?",
    translation: "I ghosted you all day, but now it's midnight and I'm lonely/horny.",
    score: 5,
    roast: "The classic booty call. He didn't ask how your day was at noon. He's asking if you're available for service at midnight. Respect yourself and go back to sleep.",
    keywords: ["booty call", "hookup", "disrespect"],
    psychologyContent: `
    <article class="psychology-analysis" aria-labelledby="psychology-u-up">
      <header>
        <h3 id="psychology-u-up">The Psychology Behind "U up?"</h3>
      </header>

      <section class="introductory-analysis">
        <p>This common dating expression reveals crucial insights regarding attachment styles, emotional availability, and relationship intentions. Comprehending the psychological mechanisms underlying these expressions enables recognition of <strong class="emphasis-toxic">concerning communication patterns</strong> and facilitates informed relationship decision-making.</p>
      </section>

      <section class="attachment-analysis">
        <h4>Attachment Style Assessment</h4>
        <p>This phrase represents a significant relationship indicator that often reflects <strong class="emphasis-attachment">avoidant attachment patterns</strong>, <strong class="emphasis-attachment">fear of commitment</strong>, or <strong class="emphasis-attachment">manipulative communication behavior</strong>. The individual employing this language typically creates emotional distance while maintaining access to intimacy benefits without reciprocal investment.</p>
      </section>

      <section class="power-dynamics">
        <h4>Relational Dynamics and Control Patterns</h4>
        <p>This language establishes an imbalanced dynamic where one party controls relationship terms without mutual investment. It functions as a form of <strong class="emphasis-control">frame control</strong> that inhibits genuine partnership development and creates unequal power distribution.</p>
        <p>When individuals employ vague or non-committal language, they frequently maintain <strong class="emphasis-control">emotional control</strong> while avoiding genuine vulnerability. Healthy relationships necessitate mutual investment and transparent communication, rather than ambiguity that primarily serves one party's convenience.</p>
      </section>

      <section class="communication-patterns">
        <h4>Communication Behavior Analysis</h4>
        <p>Frequently accompanied by <strong class="emphasis-pattern">breadcrumbing behaviors</strong>—providing minimal attention to maintain interest without substantial investment. This pattern generates anxiety and uncertainty through inconsistent communication rhythms and unpredictable engagement.</p>
        <p>The tendency toward inconsistent or minimal effort often indicates deeper <strong class="emphasis-pattern">commitment challenges</strong> or unresolved emotional concerns. Individuals who are genuinely interested typically demonstrate consistent effort and maintain clear communication patterns.</p>
      </section>

      <section class="boundaries">
        <h4>Establishing Healthy Relational Boundaries</h4>
        <p>Recognizing these communication patterns enables appropriate boundary establishment and seeking relationships constructed upon mutual respect. Your emotional wellbeing warrants prioritization, and transparent communication forms the foundation of healthy partnership dynamics.</p>
      </section>

      <section class="relationship-readiness">
        <h4>Relationship Readiness Evaluation</h4>
        <p>Adults who are emotionally prepared for healthy relationships do not require confusion or ambiguity. They communicate transparently, invest consistently, and demonstrate their interest through actions rather than ambiguous statements. Understanding these patterns assists in distinguishing between <strong class="emphasis-readiness">minimal investment behavior</strong> and authentic relationship potential.</p>
      </section>
    </article>
    `
  },
  {
    quote: "Thinking of you.",
    translation: "I'm sending this exact text to 3 exes to see who gives me attention.",
    score: 3,
    roast: "This is a 'ping'. He's just checking if you're still on the hook. It's low effort and requires zero commitment. Don't give him the validation.",
    keywords: ["orbiting", "hoovering", "breadcrumbing"],
    psychologyContent: `
    <article class="psychology-analysis" aria-labelledby="psychology-thinking-of-you">
      <header>
        <h3 id="psychology-thinking-of-you">The Psychology Behind "Thinking of you."</h3>
      </header>

      <section class="introductory-analysis">
        <p>This common dating expression reveals crucial insights regarding attachment styles, emotional availability, and relationship intentions. Comprehending the psychological mechanisms underlying these expressions enables recognition of <strong class="emphasis-toxic">concerning communication patterns</strong> and facilitates informed relationship decision-making.</p>
      </section>

      <section class="attachment-analysis">
        <h4>Attachment Style Assessment</h4>
        <p>This phrase represents a significant relationship indicator that often reflects <strong class="emphasis-attachment">avoidant attachment patterns</strong>, <strong class="emphasis-attachment">fear of commitment</strong>, or <strong class="emphasis-attachment">manipulative communication behavior</strong>. The individual employing this language typically creates emotional distance while maintaining access to intimacy benefits without reciprocal investment.</p>
      </section>

      <section class="power-dynamics">
        <h4>Relational Dynamics and Control Patterns</h4>
        <p>This language establishes an imbalanced dynamic where one party controls relationship terms without mutual investment. It functions as a form of <strong class="emphasis-control">frame control</strong> that inhibits genuine partnership development and creates unequal power distribution.</p>
        <p>When individuals employ vague or non-committal language, they frequently maintain <strong class="emphasis-control">emotional control</strong> while avoiding genuine vulnerability. Healthy relationships necessitate mutual investment and transparent communication, rather than ambiguity that primarily serves one party's convenience.</p>
      </section>

      <section class="communication-patterns">
        <h4>Communication Behavior Analysis</h4>
        <p>Frequently accompanied by <strong class="emphasis-pattern">breadcrumbing behaviors</strong>—providing minimal attention to maintain interest without substantial investment. This pattern generates anxiety and uncertainty through inconsistent communication rhythms and unpredictable engagement.</p>
        <p>The tendency toward inconsistent or minimal effort often indicates deeper <strong class="emphasis-pattern">commitment challenges</strong> or unresolved emotional concerns. Individuals who are genuinely interested typically demonstrate consistent effort and maintain clear communication patterns.</p>
      </section>

      <section class="boundaries">
        <h4>Establishing Healthy Relational Boundaries</h4>
        <p>Recognizing these communication patterns enables appropriate boundary establishment and seeking relationships constructed upon mutual respect. Your emotional wellbeing warrants prioritization, and transparent communication forms the foundation of healthy partnership dynamics.</p>
      </section>

      <section class="relationship-readiness">
        <h4>Relationship Readiness Evaluation</h4>
        <p>Adults who are emotionally prepared for healthy relationships do not require confusion or ambiguity. They communicate transparently, invest consistently, and demonstrate their interest through actions rather than ambiguous statements. Understanding these patterns assists in distinguishing between <strong class="emphasis-readiness">minimal investment behavior</strong> and authentic relationship potential.</p>
      </section>
    </article>
    `
  },
  {
    quote: "*Left on Read*",
    translation: "I have read your message and I am choosing not to respond. That IS the message.",
    score: 5,
    roast: "No answer is an answer. It's the loudest answer. He is showing you exactly how much he respects you (he doesn't). Block and bless.",
    keywords: ["ghosting", "disrespect", "closure"],
    psychologyContent: `
    <article class="psychology-analysis" aria-labelledby="psychology-left-on-read">
      <header>
        <h3 id="psychology-left-on-read">The Psychology Behind "*Left on Read*"</h3>
      </header>

      <section class="introductory-analysis">
        <p>This common dating expression reveals crucial insights regarding attachment styles, emotional availability, and relationship intentions. Comprehending the psychological mechanisms underlying these expressions enables recognition of <strong class="emphasis-toxic">concerning communication patterns</strong> and facilitates informed relationship decision-making.</p>
      </section>

      <section class="attachment-analysis">
        <h4>Attachment Style Assessment</h4>
        <p>This phrase represents a significant relationship indicator that often reflects <strong class="emphasis-attachment">avoidant attachment patterns</strong>, <strong class="emphasis-attachment">fear of commitment</strong>, or <strong class="emphasis-attachment">manipulative communication behavior</strong>. The individual employing this language typically creates emotional distance while maintaining access to intimacy benefits without reciprocal investment.</p>
      </section>

      <section class="power-dynamics">
        <h4>Relational Dynamics and Control Patterns</h4>
        <p>This language establishes an imbalanced dynamic where one party controls relationship terms without mutual investment. It functions as a form of <strong class="emphasis-control">frame control</strong> that inhibits genuine partnership development and creates unequal power distribution.</p>
        <p>When individuals employ vague or non-committal language, they frequently maintain <strong class="emphasis-control">emotional control</strong> while avoiding genuine vulnerability. Healthy relationships necessitate mutual investment and transparent communication, rather than ambiguity that primarily serves one party's convenience.</p>
      </section>

      <section class="communication-patterns">
        <h4>Communication Behavior Analysis</h4>
        <p>Frequently accompanied by <strong class="emphasis-pattern">breadcrumbing behaviors</strong>—providing minimal attention to maintain interest without substantial investment. This pattern generates anxiety and uncertainty through inconsistent communication rhythms and unpredictable engagement.</p>
        <p>The tendency toward inconsistent or minimal effort often indicates deeper <strong class="emphasis-pattern">commitment challenges</strong> or unresolved emotional concerns. Individuals who are genuinely interested typically demonstrate consistent effort and maintain clear communication patterns.</p>
      </section>

      <section class="boundaries">
        <h4>Establishing Healthy Relational Boundaries</h4>
        <p>Recognizing these communication patterns enables appropriate boundary establishment and seeking relationships constructed upon mutual respect. Your emotional wellbeing warrants prioritization, and transparent communication forms the foundation of healthy partnership dynamics.</p>
      </section>

      <section class="relationship-readiness">
        <h4>Relationship Readiness Evaluation</h4>
        <p>Adults who are emotionally prepared for healthy relationships do not require confusion or ambiguity. They communicate transparently, invest consistently, and demonstrate their interest through actions rather than ambiguous statements. Understanding these patterns assists in distinguishing between <strong class="emphasis-readiness">minimal investment behavior</strong> and authentic relationship potential.</p>
      </section>
    </article>
    `
  },
  {
    quote: "I'll text you back later.",
    translation: "I'm never going to text you back.",
    roast: "Classic ghosting preview. They're already emotionally checked out and too cowardly to say it directly.",
    score: 4,
    keywords: ["breadcrumbing", "ghosting", "avoidance", "low effort"],
    psychologyContent: `
      <article>
        <h3>The Psychology Behind "I'll text you back later."</h3>
        <p>This vague promise represents one of the most common forms of dating communication avoidance. By refusing to provide a specific timeframe, the speaker maintains control while creating false hope. This pattern typically indicates <strong class="emphasis-avoidance">emotional unavailability</strong> and a fundamental inability or unwillingness to engage in direct communication.</p>

        <h4>The Power Dynamics of Vague Promises</h4>
        <p>When someone uses this phrase, they're employing a strategic communication technique that keeps the recipient emotionally invested while requiring minimal effort from themselves. This creates an imbalanced power dynamic where one person holds all the control over communication frequency and intensity. The recipient is left in a state of perpetual anticipation, checking their phone and waiting for fulfillment of a promise that may never materialize.</p>

        <h4>Attachment Patterns and Communication Avoidance</h4>
        <p>This behavior is frequently associated with <strong class="emphasis-patterns">avoidant attachment styles</strong>, where individuals struggle with intimacy and fear vulnerability. By making vague promises about future communication, they can maintain the appearance of interest without actually investing emotional energy. The phrase serves as a protective mechanism that allows them to keep options open while avoiding genuine connection.</p>

        <h4>The Psychological Impact on Recipients</h4>
        <p>For the recipient, this communication pattern creates significant emotional distress. The uncertainty activates the brain's reward system, creating anticipation and hope that are repeatedly disappointed. Over time, this can lead to decreased self-esteem, anxiety about communication, and a distorted understanding of healthy relationship dynamics. The recipient may begin to believe that such inconsistent communication is normal or acceptable.</p>

        <section>
          <h4>Recognizing the Pattern</h4>
          <p>This phrase is often part of a broader pattern of <strong class="emphasis-recognition">communication inconsistency</strong>. Other related behaviors include irregular texting patterns, avoidance of making concrete plans, and emotional distance during interactions. Recognizing these patterns early is crucial for maintaining emotional well-being and establishing healthy communication boundaries.</p>
        </section>
      </article>
    `
  },
  {
    quote: "I'm just really bad at communicating.",
    translation: "I'm intentionally keeping you at arm's length and refuse to put in effort.",
    roast: "The ultimate excuse for being a terrible partner. Communication is a skill, not a genetic disability.",
    score: 5,
    keywords: ["communication avoidance", "emotional unavailability", "self-sabotage", "excuses"],
    psychologyContent: `
      <article>
        <h3>The Psychology Behind "I'm just really bad at communicating."</h3>
        <p>This statement represents a sophisticated form of emotional self-protection disguised as self-awareness. By preemptively claiming poor communication skills, the individual creates a blanket excuse for any future emotional neglect or inconsistency. This is not an admission of weakness but rather a strategic defense mechanism that <strong class="emphasis-defense">absolves responsibility</strong> for emotional investment.</p>

        <h4>The False Vulnerability Tactic</h4>
        <p>What appears to be self-aware vulnerability is actually a calculated move to lower expectations. By admitting to being "bad at communicating," the speaker effectively gives themselves permission to be inconsistent, unavailable, or emotionally distant. This creates a scenario where the recipient feels guilty for expecting normal communication patterns, essentially gaslighting them into accepting subpar treatment.</p>

        <h4>Emotional Immaturity vs. Strategic Avoidance</h4>
        <p>While some people genuinely struggle with communication, this phrase is often used by those who are fully capable of communicating effectively but choose not to. It's a favorite tactic of individuals who want the benefits of emotional connection without the associated responsibilities. The statement places the burden on the recipient to either accept poor communication or leave the relationship entirely.</p>

        <h4>The Impact on Healthy Relationship Development</h4>
        <p>Healthy relationships require consistent, honest communication. When someone identifies as "bad at communicating," they're essentially announcing their inability to participate in the fundamental building blocks of intimacy. This often masks deeper issues such as <strong class="emphasis-issues">fear of vulnerability</strong>, commitment phobia, or emotional unavailability that needs to be addressed before any meaningful connection can develop.</p>

        <section>
          <h4>Red Flag Recognition</h4>
          <p>This statement, combined with other avoidance behaviors, typically indicates a pattern of emotional self-sabotage. It's often accompanied by inconsistency, emotional distance, and an unwillingness to engage in difficult conversations. Recognizing this as a permanent characteristic rather than a temporary challenge is crucial for making informed relationship decisions.</p>
        </section>
      </article>
    `
  },
  {
    quote: "I don't know what I want right now.",
    translation: "I want all the benefits of a relationship without any of the commitment or responsibility.",
    roast: "Translation: I want all the benefits without any commitment. This person knows exactly what they want - zero responsibility.",
    score: 4,
    keywords: ["commitment avoidance", "situationship", "ambiguity", "emotional immaturity"],
    psychologyContent: `
      <article>
        <h3>The Psychology Behind "I don't know what I want right now."</h3>
        <p>This statement represents the quintessential evasion technique in modern dating. By claiming uncertainty about their desires, the individual creates a permanent state of limbo that benefits their needs while exploiting the emotional investment of others. This is not genuine confusion but rather a <strong class="emphasis-strategy">strategic ambiguity</strong> designed to maintain maximum flexibility with minimum accountability.</p>

        <h4>The Illusion of Honesty</h4>
        <p>What appears to be vulnerable honesty about uncertainty is actually a sophisticated control mechanism. By claiming not to know what they want, the speaker simultaneously:
- Eliminates pressure for commitment
- Maintains the option to explore other people
- Keeps the current person emotionally available
- Avoids taking responsibility for emotional consequences

This creates a power imbalance where one person holds all the cards while claiming helplessness.</p>

        <h4>Adult Emotional Development vs. Avoidance</h4>
        <p>Emotionally mature adults typically have a clear understanding of their relationship needs and goals. While some uncertainty is normal in certain contexts, persistent "I don't know" statements often indicate <strong class="emphasis-avoidance">avoidant attachment patterns</strong> or a fundamental unwillingness to engage in the vulnerability required for genuine connection.</p>

        <h4>The Psychological Cost to Recipients</h4>
        <p>For the person on the receiving end, this statement triggers a cycle of hope and disappointment. The brain's reward system becomes activated by the possibility that certainty will eventually come, leading to continued emotional investment in an inherently uncertain situation. This can result in:
- Decreased self-esteem from waiting for validation
- Anxiety about the relationship's future
- Distorted understanding of healthy communication
- Emotional exhaustion from constant uncertainty</p>

        <section>
          <h4>Recognizing Permanent vs. Temporary Uncertainty</h4>
          <p>Genuine uncertainty about relationship goals is typically temporary and accompanied by active exploration. Chronic uncertainty that serves to maintain the status quo is usually a sign of commitment avoidance or emotional unavailability. Learning to distinguish between these patterns is essential for emotional well-being.</p>
        </section>
      </article>
    `
  },
  {
    quote: "Let's keep things casual.",
    translation: "I want all the physical and emotional benefits without any commitment, effort, or responsibility.",
    roast: "Translation: I want all the physical and emotional benefits without any commitment. Classic situationship bait.",
    score: 5,
    keywords: ["situationship", "commitment phobia", "ambiguity", "emotional exploitation"],
    psychologyContent: `
      <article>
        <h3>The Psychology Behind "Let's keep things casual."</h3>
        <p>This statement represents one of the most effective strategies for obtaining relationship benefits while avoiding relationship responsibilities. By proposing "casual" as the default mode, the speaker creates a framework where they receive emotional support, physical intimacy, and companionship without any obligation to reciprocate commitment or invest in long-term emotional growth.</p>

        <h4>The Asymmetrical Benefits of Casual</h4>
        <p>The concept of "casual" in modern dating rarely benefits both parties equally. Typically, one person (the proposer) seeks:
- Physical intimacy without emotional investment
- Companionship without obligation
- Support without reciprocity
- Freedom without consequences

While the other person often hopes the "casual" phase will evolve into something more meaningful, despite no indication that this is the intention.</p>

        <h4>Emotional Maturity and Communication</h4>
        <p>Emotionally mature individuals are typically clear about their intentions and respectful of others' emotional needs. When someone initiates a "casual" arrangement without discussing boundaries, expectations, or emotional compatibility, they're often prioritizing their own needs over potential emotional harm to their partner. This can indicate <strong class="emphasis-immaturity">emotional immaturity</strong> or a pattern of avoiding genuine intimacy.</p>

        <h4>The Hidden Costs of Casual Arrangements</h4>
        <p>What begins as supposedly casual often creates significant emotional complications:
- One person typically develops deeper feelings
- Emotional boundaries become blurred
- Power imbalances emerge as feelings deepen
- The casual label becomes weaponized to avoid difficult conversations

The person who suggested casual maintains control by using the original agreement to dismiss any emotional needs that arise.</p>

        <section>
          <h4>Healthy Casual vs. Exploitation</h4>
          <p>Genuinely casual arrangements require explicit communication, mutual boundaries, and regular check-ins to ensure both parties remain aligned. When casual is used as a way to obtain benefits without accountability, it becomes a form of emotional exploitation rather than a mutually understood arrangement.</p>
        </section>
      </article>
    `
  },
  {
    quote: "I need some space right now.",
    translation: "I want to distance myself without officially breaking up so I can explore other options.",
    roast: "Translation: I'm slowly backing away without having to do the difficult thing of actually breaking up.",
    score: 4,
    keywords: ["avoidance", "pre-ghosting", "emotional distance", "backup plan"],
    psychologyContent: `
      <article>
        <h3>The Psychology Behind "I need some space right now."</h3>
        <p>This request for space often serves as a strategic buffer period rather than a genuine need for solitude. It's a sophisticated way to create emotional distance while keeping the door slightly ajar for potential return. This allows the speaker to explore other options or simply disengage without the finality of an official breakup.</p>

        <h4>Strategic Ambiguity and Control</h4>
        <p>The request for "space" creates a state of suspended relationship animation where:
- The speaker maintains the option to return
- The recipient is left in emotional limbo
- No final decision needs to be made
- Other relationship opportunities can be explored guilt-free

This ambiguity serves the speaker's needs while creating significant emotional distress for the recipient.</p>

        <h4>Genuine Need vs. Avoidance Strategy</h4>
        <p>While some people genuinely need alone time for personal processing, this request is often a precursor to ghosting or a way to avoid difficult conversations. Key indicators that this might be strategic rather than genuine include:
- Refusal to discuss what "space" specifically means
- No timeline for reconnection
- Complete communication shutdown
- Lack of clarity about relationship status during the "space"</p>

        <h4>Emotional Impact on Recipients</h4>
        <p>The person asked to give space experiences significant psychological stress:
- Anxiety about the relationship's future
- Self-doubt and questioning their own behavior
- Hope for reconciliation despite contrary evidence
- Difficulty moving forward due to uncertainty

This creates an <strong class="emphasis-imbalance">emotional power imbalance</strong> where one person maintains control while the other waits passively.</p>

        <section>
          <h4>Healthy Boundaries vs. Strategic Distance</h4>
          <p>Healthy requests for space include clear boundaries, communication guidelines, and mutual understanding. Strategic use of "space" as a way to avoid commitment or facilitate exit lacks these elements and typically serves only one person's needs at the expense of the other's emotional well-being.</p>
        </section>
      </article>
    `
  },
  {
    quote: "I'm talking to other people.",
    translation: "I want to make you jealous and keep you competing for my attention.",
    roast: "This person is emotionally unavailable and not ready for a healthy relationship.",
    score: 5,
    keywords: ["manipulation", "jealousy", "competition", "power dynamics"],
    psychologyContent: `
      <article>
        <h3>The Psychology Behind "I'm talking to other people."</h3>
        <p>This statement is rarely about transparency and more about creating insecurity and competition. By announcing other romantic prospects, the speaker aims to trigger the recipient's fear of loss, potentially increasing their investment and tolerance for poor treatment. This is a classic <strong class="emphasis-manipulation">competitive anxiety</strong> tactic.</p>

        <h4>The Strategy of Manufactured Scarcity</h4>
        <p>By implying that other people are interested, the speaker creates artificial scarcity and competition. This psychological tactic:
- Increases the recipient's perceived value of the relationship
- Triggers fear of loss and abandonment
- Encourages greater investment to "win" the competition
- Lowers standards for acceptable behavior

The recipient begins to view the relationship as a prize to be won rather than a connection to be nurtured.</p>

        <h4>Power Dynamics and Control</h4>
        <p>This announcement fundamentally alters the relationship power structure. The speaker positions themselves as the coveted prize while the recipient becomes the competitor. This creates a dynamic where the recipient may tolerate poor behavior, invest more emotionally, and lower their standards out of fear of losing to these mysterious "other people."</p>

        <h4>Healthy Communication vs. Manipulation</h4>
        <p>Healthy communication about dating other people typically occurs in the context of established relationship agreements and mutual understanding. When used as a tool to create jealousy or insecurity, it becomes manipulative. Key differences include:
- Timing and context of the disclosure
- Whether it's framed as a threat or fact
- The emotional impact on the recipient
- Whether it serves to clarify or confuse relationship status</p>

        <section>
          <h4>Recognizing Competition-Based Manipulation</h4>
          <p>When someone consistently mentions others to create insecurity, they're employing a well-documented manipulation tactic. Healthy relationships are built on trust and security, not fear of loss and competition. Recognizing this pattern is crucial for maintaining emotional well-being and avoiding toxic dynamics.</p>
        </section>
      </article>
    `
  },
  {
    quote: "I just got out of a bad relationship.",
    translation: "I'm using my past as an excuse to avoid commitment and keep you at arm's length.",
    roast: "This person is emotionally unavailable and not ready for a healthy relationship.",
    score: 4,
    keywords: ["excuses", "commitment avoidance", "emotional baggage", "red flag"],
    psychologyContent: `
      <article>
        <h3>The Psychology Behind "I just got out of a bad relationship."</h3>
        <p>This statement often serves as a preemptive excuse for emotional unavailability and poor relationship behavior. While sometimes genuine, it's frequently used to create expectations that the speaker will be inconsistent, emotionally distant, or unwilling to commit. It's a way to <strong class="excuse-frame">frame future poor behavior</strong> as understandable rather than unacceptable.</p>

        <h4>The Excuse Framework</h4>
        <p>By citing a recent bad relationship, the speaker establishes a narrative where:
- Inconsistent communication is expected and understandable
- Emotional distance is justified
- Commitment discussions are premature
- The recipient should be patient and understanding

This creates a situation where normal relationship expectations become unreasonable requests.</p>

        <h4>Genuine Healing vs. Strategic Avoidance</h4>
        <p>People genuinely healing from bad relationships typically demonstrate:
- Clear communication about their readiness
- Specific boundaries and needs
- Gradual emotional opening
- Honesty about their capabilities

When used as an excuse, the statement is vague,永恒, and serves to avoid responsibility rather than facilitate healing.</p>

        <h4>Impact on Relationship Dynamics</h4>
        <p>This announcement creates several problematic dynamics:
- The recipient feels guilty for having normal relationship expectations
- Poor behavior becomes excused or minimized
- Emotional investment becomes unequal
- The speaker maintains control through manufactured vulnerability</p>

        <section>
          <h4>Recognizing Excuse Patterns</h4>
          <p>When past relationship trauma is consistently used to explain away present behavior, it's often less about healing and more about avoidance. Healthy adults take responsibility for their current actions and capabilities rather than hiding behind past experiences.</p>
        </section>
      </article>
    `
  },
  {
    quote: "I have a lot going on right now.",
    translation: "You're not a priority and I don't want to invest time or effort into this relationship.",
    roast: "This person is emotionally unavailable and not ready for a healthy relationship.",
    score: 4,
    keywords: ["priorities", "excuses", "low investment", "avoidance"],
    psychologyContent: `
      <article>
        <h3>The Psychology Behind "I have a lot going on right now."</h3>
        <p>This vague statement serves as a catch-all excuse for emotional unavailability and inconsistent behavior. By claiming to be overwhelmed, the speaker creates a situation where their poor treatment becomes understandable rather than unacceptable. It's a <strong class="priority-excuse">priority management strategy</strong> that effectively communicates the recipient's low position in their life.</p>

        <h4>The Ambiguity Advantage</h4>
        <p>The statement's vagueness is its strength. "A lot going on" could mean:
- Work stress
- Family issues
- Personal problems
- Simply not being interested

This ambiguity prevents the recipient from addressing specific issues while allowing the speaker to maintain control over the relationship's pace and intensity.</p>

        <h4>Healthy Priority Management vs. Avoidance</h4>
        <p>People genuinely dealing with overwhelming circumstances typically:
- Communicate specific limitations
- Suggest alternative connection methods
- Express genuine regret about reduced availability
- Demonstrate effort to maintain the relationship when possible

When used as an excuse, the statement is accompanied by complete withdrawal and no effort to adapt or maintain connection.</p>

        <h4>The Priority Message</h4>
        <p>This statement fundamentally communicates that the recipient is not a priority. While everyone has busy periods, consistently using "too much going on" as a reason for emotional distance indicates that the relationship has been categorized as optional rather than essential.</p>

        <section>
          <h4>Recognizing Priority Excuses</h4>
          <p>When someone consistently claims to be overwhelmed but never makes time for the relationship, they're communicating disinterest through manufactured busyness. Actions consistently demonstrate true priorities more effectively than words about circumstances.</p>
        </section>
      </article>
    `
  },
  {
    quote: "I don't want to put a label on it.",
    translation: "I want all the benefits without any commitment, and I want to keep my options open.",
    roast: "This person is emotionally unavailable and not ready for a healthy relationship.",
    score: 5,
    keywords: ["situationship", "commitment avoidance", "ambiguity", "exploitation"],
    psychologyContent: `
      <article>
        <h3>The Psychology Behind "I don't want to put a label on it."</h3>
        <p>This statement represents the ultimate strategy for maintaining relationship benefits without accepting relationship responsibilities. By rejecting labels, the speaker creates a state of permanent ambiguity where they receive emotional support, physical intimacy, and companionship while maintaining complete freedom to pursue other options without any guilt or consequence.</p>

        <h4>The Freedom Without Consequences Strategy</h4>
        <p>Rejecting labels provides several advantages to the speaker:
- No accountability for emotional expectations
- Freedom to date multiple people
- Ability to end the relationship without "breaking up"
- Avoidance of difficult conversations about the future

This creates a scenario where one person gets all the benefits while the other bears all the emotional risks.</p>

        <h4>Label Avoidance and Emotional Safety</h4>
        <p>People who consistently reject relationship labels often fear:
- Being "tied down" or losing freedom
- The expectations that come with defined relationships
- The vulnerability required for genuine commitment
- Having to prioritize another person's needs

This avoidance typically stems from deeper issues with intimacy or past relationship trauma.</p>

        <h4>The Impact on Emotional Health</h4>
        <p>For the person wanting clarity, this creates significant emotional stress:
- Constant uncertainty about relationship status
- Inability to plan for the future
- Feeling used for emotional or physical benefits
- Self-doubt about needing clarity being "needy"</p>

        <section>
          <h4>Healthy Communication vs. Strategic Ambiguity</h4>
        <p>Genuine hesitation about labels is usually temporary and accompanied by discussion about individual needs and fears. Consistent label avoidance that serves to maintain options and avoid accountability is typically a sign of commitment issues or emotional unavailability.</p>
        </section>
      </article>
    `
  },
  {
    quote: "I'm not ready for a relationship.",
    translation: "I don't want a relationship WITH YOU, but I want to keep you available for attention/validation.",
    roast: "This person is emotionally unavailable and not ready for a healthy relationship.",
    score: 4,
    keywords: ["rejection", "mixed signals", "emotional unavailability", "friendzone"],
    psychologyContent: `
      <article>
        <h3>The Psychology Behind "I'm not ready for a relationship."</h3>
        <p>This statement often serves as a gentle rejection that maintains hope for future connection. By claiming unreadiness rather than lack of interest, the speaker can continue receiving emotional support and attention while avoiding commitment. It's a <strong class="gentle-rejection">soft rejection strategy</strong> that keeps the door slightly ajar for future benefits.</p>

        <h4>The Not You, It's Me Defense</h4>
        <p>This classic rejection technique serves multiple purposes:
- Spares the recipient's feelings initially
- Maintains the possibility of future connection
- Allows continued emotional support and attention
- Avoids direct confrontation about lack of chemistry

The recipient often interprets this as temporary rather than permanent, leading to continued emotional investment.</p>

        <h4>Strategic Timing and Context</h4>
        <p>This statement is particularly damaging when:
- Made after emotional or physical intimacy
- Used to explain inconsistent behavior
- Followed by continued relationship-like behavior
- Never updated even when circumstances change

The timing reveals whether it's genuine or strategic.</p>

        <h4>The Hope Maintenance Strategy</h4>
        <p>By claiming unreadiness rather than disinterest, the speaker:
- Keeps the recipient emotionally available
- Maintains access to attention and support
- Creates possibility for future reconciliation
- Avoids the finality of direct rejection

This creates prolonged emotional uncertainty for the recipient.</p>

        <section>
          <h4>Recognizing Soft Rejections</h4>
          <p>When someone claims they're "not ready" but continues relationship behaviors, they typically want the benefits without the commitment. Genuine readiness issues are accompanied by clear boundaries and consistent behavior, not mixed signals and continued intimacy.</p>
        </section>
      </article>
    `
  },
  {
    quote: "You're too good for me.",
    translation: "I'm about to hurt you and this is my preemptive excuse/way to manage guilt.",
    roast: "This person is emotionally unavailable and not ready for a healthy relationship.",
    score: 5,
    keywords: ["manipulation", "preemptive rejection", "guilt management", "red flag"],
    psychologyContent: `
      <article>
        <h3>The Psychology Behind "You're too good for me."</h3>
        <p>This statement represents a sophisticated form of manipulation and preemptive rejection. By positioning the recipient as superior, the speaker can justify their own poor behavior and potential abandonment while appearing humble and self-aware. It's a <strong class="manipulation-humility">false humility tactic</strong> that serves to manage the speaker's guilt while controlling the narrative.</p>

        <h4>The Guilt Management Strategy</h4>
        <p>This statement accomplishes several psychological goals:
- Preemptively explains future poor treatment
- Positions the speaker as the victim of their own inadequacy
- Makes it difficult for the recipient to argue
- Creates a narrative where the speaker is "doing the right thing" by leaving

This allows the speaker to abandon the relationship while maintaining a positive self-image.</p>

        <h4>False Modesty and Control</h4>
        <p>What appears to be self-aware humility is actually a control mechanism. By declaring the recipient "too good," the speaker:
- Prevents the recipient from expressing their own needs
- Makes it impossible to argue for the relationship's worth
- Positions themselves as making a noble sacrifice
- Eliminates the recipient's agency in the decision</p>

        <h4>Self-Sabotage vs. Manipulation</h4>
        <p>Genuine feelings of inadequacy typically involve:
- Willingness to work on self-improvement
- Communication about specific insecurities
- Effort to meet the relationship's demands
- Honesty about personal limitations

When used as manipulation, the statement is absolute and serves to end the relationship rather than work through issues.</p>

        <section>
          <h4>Recognizing Manipulative Humility</h4>
          <p>When someone declares you "too good for them" without any willingness to work on themselves or the relationship, they're typically ending things while managing their own guilt. This statement removes your agency and makes it nearly impossible to argue for the relationship's continuation.</p>
        </section>
      </article>
    `
  },
  {
    quote: "I need to focus on myself right now.",
    translation: "You are not a priority and I'm ending this relationship without having to take responsibility.",
    roast: "This person is emotionally unavailable and not ready for a healthy relationship.",
    score: 4,
    keywords: ["rejection", "self-prioritization", "avoidance", "accountability dodge"],
    psychologyContent: `
      <article>
        <h3>The Psychology Behind "I need to focus on myself right now."</h3>
        <p>This statement represents one of the most socially acceptable ways to end a relationship while maintaining moral high ground. By framing the decision as self-care rather than rejection, the speaker can abandon the relationship without appearing selfish or cruel. It's a <strong class="moral-frame">moral positioning strategy</strong> that makes disagreement seem selfish.</p>

        <h4 The Unassailable Position</h4>
        <p>Who can argue against self-improvement and self-care? This statement positions the speaker in an unassailable position where:
- Arguing against their decision seems selfish
- Questioning their timing seems unsupportive
- Expressing hurt needs seems like lack of understanding
- The recipient is forced to appear supportive of their own abandonment</p>

        <h4>Genuine Growth vs. Relationship Avoidance</h4>
        <p>Legitimate needs for self-focus typically include:
- Specific goals or challenges
- Discussion of how this affects the relationship
- Suggested timelines or check-ins
- Effort to maintain some form of connection

When used to end relationships, the statement is absolute and serves to create distance rather than facilitate growth.</p>

        <h4>The Timing Significance</h4>
        <p>This statement is particularly revealing based on timing:
- After conflicts or demands for commitment
- During periods of relationship stress
- When the relationship requires more investment
- As a response to difficult conversations

The context reveals whether it's genuine growth or strategic exit.</p>

        <section>
          <h4>Recognizing Strategic Self-Focus</h4>
          <p>When self-focus becomes a reason to end a relationship rather than work through challenges, it's often about avoiding difficulty rather than genuine growth. Healthy self-improvement doesn't typically require abandoning supportive relationships.</p>
        </section>
      </article>
    `
  },
  {
    quote: "Maybe we can hang out sometime.",
    translation: "I have no intention of ever making plans with you but want to keep you on the hook.",
    roast: "This person is emotionally unavailable and not ready for a healthy relationship.",
    score: 5,
    keywords: ["breadcrumbing", "vague plans", "low effort", "stringing along"],
    psychologyContent: `
      <article>
        <h3>The Psychology Behind "Maybe we can hang out sometime."</h3>
        <p>This statement represents the epitome of low-effort communication that maintains hope without requiring any actual commitment. The use of "maybe" and "sometime" creates maximum ambiguity with minimum investment. It's a classic <strong class="breadcrumb-tactic">breadcrumbing technique</strong> that keeps potential connections warm with zero intention of follow-through.</p>

        <h4>The Anatomy of Vague Promises</h4>
        <p>This phrase contains multiple escape hatches:
- "Maybe" provides plausible deniability
- "Sometime" eliminates any timeline pressure
- "Hang out" downgrades the potential connection
- The absence of follow-up questions shows lack of interest

Each word serves to minimize commitment while maintaining the possibility of connection.</p>

        <h4>Effort vs. Interest Communication</h4>
        <p>Genuinely interested people typically:
- Suggest specific activities or times
- Ask about the recipient's availability
- Follow up with concrete plans
- Demonstrate enthusiasm for meeting

The vague promise without follow-up clearly indicates lack of real interest.</p>

        <h4>The Psychology of Hope Maintenance</h4>
        <p>For the recipient, these breadcrumbs:
- Activate the brain's reward system with possibility
- Create anxiety about potentially missing out
- Encourage continued emotional investment
- Make it difficult to move on completely

The speaker maintains attention and validation with zero actual investment.</p>

        <section>
          <h4>Recognizing Breadcrumbing Patterns</h4>
          <p>When someone consistently makes vague plans without follow-through, they're maintaining options without investment. Genuine connection requires concrete action, not ambiguous suggestions that never materialize.</p>
        </section>
      </article>
    `
  },
  {
    quote: "I'm really busy this week, but let's definitely do something next week.",
    translation: "I'm avoiding you this week and will use the exact same excuse next week when you follow up.",
    roast: "This person is emotionally unavailable and not ready for a healthy relationship.",
    score: 5,
    keywords: ["procrastination", "avoidance", "broken promises", "stringing along"],
    psychologyContent: `
      <article>
        <h3>The Psychology Behind "I'm really busy this week, but let's definitely do something next week."</h3>
        <p>This statement represents the eternal postponement strategy used to maintain connections without actually engaging in them. By acknowledging the current unavailability while promising future availability, the speaker creates a cycle of deferral that can continue indefinitely. It's a <strong class="postponement-cycle">delay tactic</strong> that manages expectations while avoiding actual commitment.</p>

        <h4>The Promise Pattern</h4>
        <p>This statement follows a predictable pattern:
1. Acknowledge current unavailability (legitimate)
2. Promise future availability (speculative)
3. Use definitive language ("definitely")
4. Never initiate follow-up or scheduling

The definite language creates hope despite the lack of actual planning.</p>

        <h4>Genuine Scheduling vs. Strategic Deferral</h4>
        <p>Actually busy people typically:
- Suggest specific alternative times
- Ask about the recipient's availability
- Provide contact information for follow-up
- Demonstrate enthusiasm for rescheduling

The strategic deferral lacks these concrete follow-through behaviors.</p>

        <h4>The Perpetual Next Week Cycle</h4>
        <p>This creates a predictable cycle:
- Recipient waits for "next week"
- Follow-up communication occurs
- New excuse emerges (also busy)
- Promise of "next week" repeats

This can continue for weeks or months with no actual meeting.</p>

        <section>
          <h4>Recognizing Perpetual Postponement</h4>
          <p>When someone consistently reschedules without ever providing concrete plans, they're maintaining the relationship in theory rather than practice. Actions (or lack thereof) consistently demonstrate true intentions more effectively than words about future availability.</p>
        </section>
      </article>
    `
  },
  {
    quote: "I never said that, you are imagining things.",
    translation: "I'm actively rewriting reality to make you doubt your own memory and sanity.",
    roast: "This person thinks they're the sole author of reality and your memories are just rough drafts.",
    score: 95,
    keywords: ["gaslighting", "manipulation", "toxic", "narcissist"],
    psychologyContent: `
      <article>
        <h3>The Psychology Behind "I never said that, you are imagining things."</h3>
        <p><strong>The Psychology:</strong> This is the textbook definition of <em>Gaslighting</em>. By flatly denying reality, he is attacking your perception of sanity.</p>
        <p><strong>Subconscious Intent:</strong> He isn't just defending himself; he is actively trying to rewrite history.</p>

        <section>
          <h4>How to Respond</h4>
          <p>Do not argue about facts. Simply state: 'I know what I heard.' Then, start documenting conversations (screenshots/notes) immediately. Trust your memory.</p>
        </section>
      </article>
    `
  },
  {
    quote: "You are just being too sensitive.",
    translation: "I'm deflecting from my bad behavior by attacking your emotional response instead of taking responsibility.",
    roast: "This person has a PhD in Emotional Invalidation and thinks your feelings are 'user error'.",
    score: 95,
    keywords: ["gaslighting", "emotional-invalidation", "red-flag"],
    psychologyContent: `
      <article>
        <h3>The Psychology Behind "You are just being too sensitive."</h3>
        <p><strong>The Psychology:</strong> This is a minimization tactic known as <em>Emotional Invalidation</em>.</p>
        <p><strong>Subconscious Intent:</strong> He wants to avoid accountability by labeling you as 'crazy'.</p>

        <section>
          <h4>How to Respond</h4>
          <p>Refuse to accept the label. Respond with: 'My feelings are valid reactions to your behavior.' Do not let him pathologize your normal human emotions.</p>
        </section>
      </article>
    `
  },
  {
    quote: "Relax, it was just a joke. Can't you take a joke?",
    translation: "I said something hurtful and now I'm pretending it was humor to avoid accountability.",
    roast: "This person's humor is like their personality - nonexistent and only funny to them.",
    score: 95,
    keywords: ["gaslighting", "covert-aggression", "negging"],
    psychologyContent: `
      <article>
        <h3>The Psychology Behind "Relax, it was just a joke. Can't you take a joke?"</h3>
        <p><strong>The Psychology:</strong> This is often called <em>Schrödinger's Joke</em>: It's an insult when you get upset, but a 'joke' if you call him out.</p>
        <p><strong>Subconscious Intent:</strong> This is a test of your boundaries. He is seeing how much disrespect you will tolerate under the guise of humor.</p>

        <section>
          <h4>How to Respond</h4>
          <p>Stop laughing. Look him dead in the eye and ask: 'Explain the funny part to me. I don't get it.' Making him explain the insult strips away the disguise of humor.</p>
        </section>
      </article>
    `
  },
  {
    quote: "I'm sorry you feel that way.",
    translation: "I'm not actually sorry for what I did, I'm just sorry you're upset about it.",
    roast: "This person mastered the art of apologizing without apologizing - it's a verbal magic trick!",
    score: 95,
    keywords: ["non-apology", "gaslighting", "deflection"],
    psychologyContent: `
      <article>
        <h3>The Psychology Behind "I'm sorry you feel that way."</h3>
        <p><strong>The Psychology:</strong> This is a <em>Non-Apology</em>. He is apologizing for <em>your feelings</em>, not for <em>his actions</em>.</p>
        <p><strong>Subconscious Intent:</strong> To shut down the conversation and look like the 'good guy' who apologized, without actually admitting any wrongdoing or changing his behavior.</p>

        <section>
          <h4>How to Respond</h4>
          <p>Call out the syntax. Say: 'That is an apology for my feelings, not your actions. I need you to take responsibility for what you did, not for how I reacted to it.'</p>
        </section>
      </article>
    `
  },
  {
    quote: "Look what you made me do. If you hadn't..., I wouldn't have...",
    translation: "I refuse to take responsibility for my own choices and blame you for my bad behavior.",
    roast: "This person has the emotional maturity of a toddler who thinks breaking your toy is your fault.",
    score: 95,
    keywords: ["victim-blaming", "abuse-cycle", "danger-zone"],
    psychologyContent: `
      <article>
        <h3>The Psychology Behind "Look what you made me do."</h3>
        <p><strong>The Psychology:</strong> This is <em>Externalization of Blame</em>. In his mind, he is a helpless victim of your actions. This is a major precursor to emotional or physical abuse.</p>
        <p><strong>Subconscious Intent:</strong> To condition you to walk on eggshells. He wants you to believe that <em>you</em> are in control of <em>his</em> bad behavior.</p>

        <section>
          <h4>DANGER: How to Respond</h4>
          <p><strong>DANGER:</strong> This is a high-level red flag. Remove yourself from the situation. You are never responsible for another adult's choices or actions.</p>
        </section>
      </article>
    `
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