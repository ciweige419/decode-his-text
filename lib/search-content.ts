export type SearchArticle = {
  title: string;
  description: string;
  answer: string;
  topic: 'slow-replies' | 'relationship-intentions' | 'difficult-conversations';
  sections: { heading: string; paragraphs: string[] }[];
  replies: { situation: string; text: string }[];
  questions: { question: string; answer: string }[];
  related: string[];
};

// Dates refer to substantive editorial changes, never to a build or a crawl.
export const CONTENT_UPDATED = '2026-10-27';
export const SEARCH_ARTICLES: Record<string, SearchArticle> = {
  'my-notifications-turned-off': {
    title: 'He Has Notifications Turned Off: Meaning & How to Reply',
    description: 'He says his notifications are turned off. See what that can mean, how it differs from hiding messages, and what to say about slow replies.',
    answer: 'Having notifications turned off means a phone or app may not alert him when a message arrives. It does not tell you why he chose that setting or how interested he is. Look at whether he checks in, answers practical questions, and follows through on plans.',
    topic: 'slow-replies',
    sections: [
      { heading: 'Muted alerts, hidden previews, and blocked messages are different', paragraphs: ['A person can silence an app, use a focus mode, or hide message previews while still receiving messages. Those settings do different things. Unless you have discussed the setting, “notifications off” is too vague to establish what is happening.', 'You do not need access to someone’s phone to ask for reliable communication. The useful question is how you will reach each other when an answer matters, rather than whether you can inspect their settings.'] },
      { heading: 'When it is a workable explanation', paragraphs: ['For example, someone who checks a dating app after work, gives considered replies, and confirms a date can still be making a consistent effort. That is different from agreeing to meet and remaining unreachable when you need to settle a time.', 'These are illustrative situations, not tests that prove attraction. Different people have different routines; what matters is whether the arrangement works for both of you.'] },
      { heading: 'When the pattern needs a conversation', paragraphs: ['Repeatedly missing plans, answering only when convenient, or refusing to discuss a basic check-in arrangement is a practical communication problem. You can address that without concluding that he is cheating or intentionally hiding you.', 'Ask for something observable: confirmation by an agreed time, a call for urgent changes, or a clear answer about whether a plan is happening. If that request repeatedly goes unmet, decide whether this pace works for you.'] },
    ],
    replies: [
      { situation: 'You are getting to know each other', text: 'No problem. When do you usually check messages? I’d like to find a rhythm that works for both of us.' },
      { situation: 'You need to confirm a date', text: 'Can you confirm Friday by tomorrow evening? If I don’t hear back, I’ll make other plans.' },
      { situation: 'Slow replies keep disrupting plans', text: 'I don’t need instant replies, but I do need us to confirm plans reliably. Is that something you can do?' },
    ],
    questions: [
      { question: 'Does turning notifications off mean he is hiding something?', answer: 'The setting alone cannot establish that. Privacy preferences, distraction, work, and app habits are possible explanations. Discuss the behavior affecting you rather than treating a phone setting as proof.' },
      { question: 'Should I send more messages if he has notifications off?', answer: 'More messages may not make an alert appear. For a specific plan, send one clear question and a reasonable confirmation time. Avoid repeatedly chasing an answer that the other person has not agreed to provide.' },
    ],
    related: ['bad-at-texting', 'sorry-i-fell-asleep', 'just-really-busy-with-work-right-now'],
  },
  'not-looking-for-anything-serious-right-now': {
    title: '“Not Looking for Anything Serious”: Meaning & Replies',
    description: 'What does “not looking for anything serious” mean? Understand casual dating, mixed signals, and replies for when you want different things.',
    answer: '“I’m not looking for anything serious right now” means you should not assume this person is offering a committed relationship. They may like you and still want something casual. Treat the present statement as useful information, rather than a promise that patience will change their mind.',
    topic: 'relationship-intentions',
    sections: [
      { heading: 'Interest and commitment are separate questions', paragraphs: ['Someone can enjoy dates, affection, or regular texting without agreeing to exclusivity or a shared future. Warm behavior does not automatically cancel a direct statement about wanting something casual.', 'The statement is not, by itself, proof of manipulation or a judgment of your worth. A clearer distinction is whether both people understand and freely accept the same arrangement.'] },
      { heading: 'Ask what “casual” includes', paragraphs: ['Before continuing, clarify the parts that affect your choices: whether you are seeing other people, what kinds of contact you want, and whether either person is hoping for a relationship. You do not have to accept an arrangement simply because it has been disclosed.', 'For example, daily affectionate messages combined with a clear agreement to date casually can be consistent. Asking you to act exclusive while refusing to discuss their own expectations is a different issue that needs a specific conversation.'] },
      { heading: 'What if you want a relationship?', paragraphs: ['Say what you want without trying to negotiate someone into wanting it too. Continuing while privately hoping to change the arrangement can leave an important mismatch unresolved.', 'There is no reliable waiting period after which “right now” becomes commitment. If they later want something different, that requires a new conversation and a clear mutual agreement. Make your current decision using the offer actually on the table.'] },
    ],
    replies: [
      { situation: 'You want a committed relationship', text: 'Thanks for being clear. I’m looking for a relationship, so I don’t think casual dating is the right fit for me.' },
      { situation: 'You are also comfortable with casual dating', text: 'I’m open to casual dating too. Can we be clear about exclusivity and what we each expect?' },
      { situation: 'Their affection is confusing you', text: 'I enjoy being with you. When you say nothing serious, should I understand that a relationship is off the table?' },
    ],
    questions: [
      { question: 'Does it mean “not with you”?', answer: 'You cannot tell from that sentence. The practical information is that a committed relationship is not currently being offered. You do not need to discover a hidden reason before deciding whether that works for you.' },
      { question: 'Can someone change their mind later?', answer: 'Yes, but there is no way to predict or secure that change. Do not treat a possible future change as an existing agreement.' },
    ],
    related: ['just-go-with-the-flow', 'not-ready-for-a-relationship-right-now-but-i-really-like-you', 'i-really-need-to-focus-on-myself-right-now'],
  },
  'bad-at-texting': {
    title: '“I’m Bad at Texting”: Meaning, Interest & What to Reply',
    description: 'Does “I’m bad at texting” mean low interest? Compare texting habits with follow-through, and find replies for slow messages and unclear plans.',
    answer: '“I’m bad at texting” can describe a real communication preference or an attempt to lower expectations. The sentence alone cannot distinguish them. Check whether the person offers another way to connect and reliably follows through when you make plans.',
    topic: 'slow-replies',
    sections: [
      { heading: 'Reply speed is only one part of communication', paragraphs: ['Some people prefer calls, forget to check an app, or avoid long conversations during the day. A slow reply can coexist with interest. Equally, fast replies do not establish that someone wants the relationship you want.', 'Instead of timing every message, look at whether conversations are reciprocal, practical questions receive answers, and plans actually happen. Those observations tell you more about the communication you can expect.'] },
      { heading: 'Compare an alternative with an excuse', paragraphs: ['For example: “I’m not on here much; would you like a call on Thursday?” offers a workable alternative. “I’m bad at texting” followed by repeated unanswered invitations leaves you without one. These examples illustrate different behaviors; neither proves a hidden motive.', 'You can ask which channel works best. You are also allowed to need more regular contact than the other person prefers. A mismatch does not require either person to be diagnosed or blamed.'] },
      { heading: 'Make a concrete request', paragraphs: ['A request such as “Can we confirm tomorrow’s plan tonight?” is easier to answer than “Why are you always like this?” Explain the communication you need and ask whether they can offer it.', 'If nothing changes after a clear conversation, you can decide based on the repeated experience. You do not need to prove whether they are genuinely bad at texting before deciding the arrangement is not working.'] },
    ],
    replies: [
      { situation: 'You are open to another channel', text: 'Are calls easier for you? I’d like to find a way to stay in touch that works for both of us.' },
      { situation: 'You want consistency', text: 'I don’t need constant texting, but I do value consistent contact. What feels realistic for you?' },
      { situation: 'A date is unconfirmed', text: 'Are we still on for Saturday? Please let me know by Friday so I can plan my weekend.' },
    ],
    questions: [
      { question: 'Can he like me and still be bad at texting?', answer: 'Yes. Interest and texting preferences are different. Look for reciprocal effort through a channel that works for both of you, rather than assuming either interest or rejection from response time alone.' },
      { question: 'How long should I wait for a reply?', answer: 'There is no universal number of hours. An urgent plan, an ordinary conversation, and a new dating-app match create different expectations. Agree on practical deadlines when an answer affects your plans.' },
    ],
    related: ['my-notifications-turned-off', 'sorry-i-fell-asleep', 'just-really-busy-with-work-right-now'],
  },
  'just-go-with-the-flow': {
    title: '“Go With the Flow” in Dating: Meaning & How to Reply',
    description: 'He wants to “go with the flow.” See how taking things slowly differs from avoiding clarity, with questions and replies about commitment.',
    answer: '“Let’s go with the flow” usually leaves the pace or direction of dating undefined. It may mean taking time to get acquainted, preferring casual dating, or postponing a commitment discussion. Ask what it means in practice before assuming you share the same expectations.',
    topic: 'relationship-intentions',
    sections: [
      { heading: 'Taking things slowly can still include clarity', paragraphs: ['You do not need to promise a relationship after an early date to be clear about your intentions. Someone can say they are open to a relationship while wanting more time to see whether you fit.', 'Useful clarity includes whether you are dating other people, what each person is looking for, and how you will revisit the conversation. A relaxed pace and mutual expectations can exist together.'] },
      { heading: 'Notice what stays undefined', paragraphs: ['For example, “I’m interested in a relationship eventually, but I want to get to know you” gives you something to discuss. Repeating “just go with the flow” whenever you ask about exclusivity does not answer the same question.', 'The concern is not the phrase itself. It is whether one person is investing under assumptions that the other person has never agreed to. Regular intimacy or affectionate messages do not replace that agreement.'] },
      { heading: 'Decide whether the current arrangement suits you', paragraphs: ['Ask a direct question about the part that matters to you. You might be comfortable taking time but uncomfortable being exclusive without a mutual commitment.', 'If their answer remains vague, you can choose a boundary based on that uncertainty. You do not need to label them a bad person or offer an ultimatum to say that an undefined arrangement is not right for you.'] },
    ],
    replies: [
      { situation: 'You are happy to take it slowly', text: 'I’m comfortable taking things slowly. Are you open to a relationship if we keep getting along?' },
      { situation: 'You need to clarify exclusivity', text: 'When you say go with the flow, does that mean we’re both still dating other people?' },
      { situation: 'You want a clearer direction', text: 'I’ve enjoyed this, but an undefined arrangement isn’t working for me. I’m looking for something with a shared direction.' },
    ],
    questions: [
      { question: 'Is “go with the flow” a red flag?', answer: 'Not automatically. Early uncertainty can be reasonable. Repeatedly dismissing your questions or expecting commitment you have not mutually agreed to is a separate behavior to address.' },
      { question: 'How do I ask without sounding demanding?', answer: 'State your preference and ask about theirs. “I’m looking for a relationship; what are you hoping for?” asks for information, rather than demanding a particular answer.' },
    ],
    related: ['not-looking-for-anything-serious-right-now', 'not-ready-for-a-relationship-right-now-but-i-really-like-you', 'i-really-need-to-focus-on-myself-right-now'],
  },
  'not-ready-for-a-relationship-right-now-but-i-really-like-you': {
    title: '“Not Ready for a Relationship, but I Like You”: What It Means',
    description: 'He likes you but says he is not ready for a relationship. Separate affection from availability, clarify expectations, and decide how to reply.',
    answer: 'Someone can like you and still be unwilling or unable to enter a relationship. “I like you” describes a feeling; “I’m not ready” describes what they are currently offering. Do not assume affection is a commitment or a promise to become ready later.',
    topic: 'relationship-intentions',
    sections: [
      { heading: 'Both parts of the message can be true', paragraphs: ['The sentence may feel contradictory because it combines closeness with a limit. Attraction, affection, time, and willingness to commit are different things. You cannot infer the full reason from one message.', 'You do not need to decide whether the reason is completely sincere before deciding what you want. The immediate question is whether the available arrangement matches your own needs.'] },
      { heading: 'Clarify what continuing would mean', paragraphs: ['Ask whether they mean friendship, casual dating, a pause, or ending romantic contact. Those options carry different expectations. If you continue, discuss exclusivity and contact rather than silently filling in the gaps.', 'For example, someone who wants friendship may need different boundaries from someone who wants casual dates. A person saying they are not ready has not automatically asked you to wait or agreed to become your partner.'] },
      { heading: 'Waiting is a choice, not a way to guarantee a relationship', paragraphs: ['No amount of patience can create a commitment that someone has not chosen. If waiting keeps you attached to an uncertain outcome, it is reasonable to step back.', 'If you both choose to revisit the question, agree on what happens in the meantime. Revisit it because a conversation is useful, not because a particular number of weeks can prove that someone should now be ready.'] },
    ],
    replies: [
      { situation: 'You need a relationship', text: 'I like you too, but I’m looking for a relationship. I need to step back if that isn’t something you can offer.' },
      { situation: 'You need to understand the proposal', text: 'When you say you’re not ready, are you suggesting friendship, casual dating, or taking a break?' },
      { situation: 'You would prefer friendship', text: 'I understand. I’m happy to be friends, but I’d like us to stop the romantic side so the boundary is clear.' },
    ],
    questions: [
      { question: 'Should I wait until he is ready?', answer: 'Only if the actual arrangement works for you without a promised outcome. Waiting does not guarantee a future relationship, and you can change your mind if the uncertainty becomes painful.' },
      { question: 'Does this mean he is emotionally unavailable?', answer: 'It tells you he is not offering a relationship now. It does not provide enough information to assign a psychological label or explain why.' },
    ],
    related: ['not-looking-for-anything-serious-right-now', 'just-go-with-the-flow', 'i-really-need-to-focus-on-myself-right-now'],
  },
  'sorry-i-fell-asleep': {
    title: '“Sorry, I Fell Asleep”: What It Means & How to Reply',
    description: 'Is “sorry, I fell asleep” an excuse or an ordinary late reply? Consider timing, follow-through, and simple replies without guessing motives.',
    answer: '“Sorry, I fell asleep” may be a straightforward explanation for a missed message, especially late at night. One delayed reply is not evidence of low interest. Notice whether the person resumes the conversation and follows through on anything you were arranging.',
    topic: 'slow-replies',
    sections: [
      { heading: 'Distinguish a conversation from an agreed plan', paragraphs: ['A casual conversation ending at bedtime is different from missing an agreed call without explanation. Ask yourself whether an expectation was actually shared or only assumed.', 'For example, falling asleep during an open-ended chat may need no repair. Missing a planned call can reasonably call for an apology and a new time. The difference is the agreement, not whether the wording sounds convincing.'] },
      { heading: 'Repeated explanations do not replace follow-through', paragraphs: ['If this happens repeatedly, focus on the effect. Are you losing sleep waiting, or repeatedly rearranging your evening? You can change the timing of calls or stop treating a late-night chat as a confirmed plan.', 'An alternative such as talking earlier can solve a scheduling mismatch. If no workable alternative is offered, decide whether the pattern meets your needs without trying to prove what happened each night.'] },
      { heading: 'You can respond without investigating', paragraphs: ['A short, warm response is enough when nothing important was missed. If a plan was affected, say so directly and suggest a practical change.', 'Avoid treating online status or activity in another app as conclusive proof. The clearer discussion is what you agreed to and what you need next time.'] },
    ],
    replies: [
      { situation: 'It was an ordinary late-night conversation', text: 'No worries, hope you slept well. How’s your morning going?' },
      { situation: 'You missed a planned call', text: 'I was waiting for our call. Could we pick an earlier time next time?' },
      { situation: 'Late-night plans keep falling through', text: 'Evenings don’t seem to be working for us. Would a weekend call be more realistic?' },
    ],
    questions: [
      { question: 'Does “I fell asleep” mean he is not interested?', answer: 'Not by itself. The conversation he resumes and the plans he follows through on are more useful information than one missed reply.' },
      { question: 'Should I ignore him back?', answer: 'You can reply when it suits you. Deliberately copying a delay does not clarify the original problem; a concrete request is more direct when an agreement was missed.' },
    ],
    related: ['bad-at-texting', 'my-notifications-turned-off', 'just-really-busy-with-work-right-now'],
  },
  'trust-issues-because-of-my-ex': {
    title: '“I Have Trust Issues Because of My Ex”: Meaning & Replies',
    description: 'What to say when someone has trust issues from a past relationship. Offer empathy, clarify boundaries, and distinguish reassurance from control.',
    answer: 'This phrase says that a previous relationship is affecting how someone experiences trust now. It can be an honest disclosure, but it does not tell you what they need or excuse controlling behavior. Ask what trust would look like in your current relationship.',
    topic: 'difficult-conversations',
    sections: [
      { heading: 'Ask about the present, not for a full history', paragraphs: ['You do not need every detail about an ex to have a useful conversation. Ask which situations are difficult and what respectful support would look like. Let them decide what personal history they want to share.', 'For example, requesting a heads-up when plans change is different from demanding constant location access. The first can be negotiated; the second can cross a boundary even when the fear behind it is real.'] },
      { heading: 'Empathy does not require surrendering privacy', paragraphs: ['You can acknowledge hurt without agreeing to password checks, accusations, or restrictions on friendships. Reassurance should be something you can freely offer, rather than a test you must repeatedly pass.', 'Past experiences may help explain a reaction, but they do not make you responsible for another person’s choices. If a particular request feels uncomfortable, name it and propose a boundary you can actually keep.'] },
      { heading: 'Look for shared responsibility', paragraphs: ['A useful conversation includes what each person can do: communicate changes, ask rather than accuse, and pause a conversation when it escalates. You cannot build trust by doing all of the accommodating yourself.', 'If you feel frightened or controlled, focus on your own safety and seek support from someone you trust. This guide cannot assess the relationship from one sentence or diagnose either person.'] },
    ],
    replies: [
      { situation: 'They are sharing a difficult experience', text: 'I’m sorry that happened. What would supportive, respectful communication look like for us now?' },
      { situation: 'You want to set a privacy boundary', text: 'I’m happy to talk about concerns, but I’m not comfortable sharing passwords or having my phone checked.' },
      { situation: 'You are being compared with the ex', text: 'I understand the past affected you. I’d like us to talk about what I actually did, rather than assume I’ll act the same way.' },
    ],
    questions: [
      { question: 'Can I fix their trust issues?', answer: 'You can offer consistent behavior and discuss expectations, but you cannot promise to remove someone’s fear or do their personal work for them.' },
      { question: 'Is mentioning trust issues a red flag?', answer: 'The disclosure alone is not enough to judge. How someone handles fear, respects boundaries, and takes responsibility is more informative.' },
    ],
    related: ['my-ex-was-crazy', 'why-are-you-acting-so-crazy', 'not-ready-for-a-relationship-right-now-but-i-really-like-you'],
  },
  'i-really-need-to-focus-on-myself-right-now': {
    title: '“I Need to Focus on Myself”: Meaning & How to Respond',
    description: 'He says he needs to focus on himself. Clarify whether he means space, a pause, or a breakup, and find replies that respect your own needs.',
    answer: '“I need to focus on myself” means someone wants to direct attention away from the current dating arrangement. It may mean less contact, a pause, or ending things. Ask which one they mean rather than treating it as either a hidden promise or a definite explanation of their feelings.',
    topic: 'relationship-intentions',
    sections: [
      { heading: 'Clarify the arrangement before the reason', paragraphs: ['You may never know every reason someone wants space. You can still ask the practical questions: Are we breaking up? Should we stop romantic contact? Are we both free to date other people?', 'A reason such as work, personal priorities, or recovery from a breakup does not by itself answer those questions. Clear boundaries make it easier for both people to understand what happens next.'] },
      { heading: 'Space and a relationship pause need shared expectations', paragraphs: ['For example, reducing weekday messaging while keeping a weekly date is different from indefinite silence. A pause also needs a conversation about contact and exclusivity if either person expects those commitments to continue.', 'You do not have to agree to wait in an undefined arrangement. Respecting someone’s need for space can coexist with choosing to end your own romantic involvement.'] },
      { heading: 'Let the next step be concrete', paragraphs: ['If you choose to revisit the conversation, agree on when and what you are reviewing. That check-in is an opportunity to talk, not a deadline by which someone must feel differently.', 'If they end the relationship, acknowledge it rather than trying to decode occasional later messages as a reversal. Restarting requires an explicit conversation about what has changed and what you both want now.'] },
    ],
    replies: [
      { situation: 'You need clarity', text: 'I respect that. Are you asking for less contact, a pause in dating, or to end the relationship?' },
      { situation: 'You do not want to wait', text: 'I understand you need to focus on yourself. I don’t want an open-ended pause, so I’m going to move on.' },
      { situation: 'You both want a defined check-in', text: 'Let’s agree on what contact looks like until we check in, so neither of us is guessing.' },
    ],
    questions: [
      { question: 'Does focusing on himself mean he will come back?', answer: 'It does not promise a return. Make decisions based on the boundary being expressed now, rather than a hoped-for future change.' },
      { question: 'Should I keep checking on him?', answer: 'Ask what contact is welcome and decide what is healthy for you. If someone has asked for no contact, respect that request.' },
    ],
    related: ['not-ready-for-a-relationship-right-now-but-i-really-like-you', 'not-looking-for-anything-serious-right-now', 'just-go-with-the-flow'],
  },
  'my-ex-was-crazy': {
    title: 'When He Says “My Ex Was Crazy”: What to Ask Next',
    description: 'Someone calling an ex “crazy” gives you a label, not the full story. Learn what to ask about conflict, accountability, and respectful communication.',
    answer: '“My ex was crazy” is a negative label, not a clear description of what happened. It may reflect anger, a difficult experience, or an unwillingness to explain a conflict. Ask about specific behavior and how the person handled it before drawing conclusions.',
    topic: 'difficult-conversations',
    sections: [
      { heading: 'A label leaves out important information', paragraphs: ['The word “crazy” can mean very different things to different people. It does not tell you whether someone was hurt, whether boundaries were crossed, or whether either person took responsibility.', 'You do not need to investigate the ex or decide who was right. You are learning how the person in front of you describes disagreements and what they have learned from a previous relationship.'] },
      { heading: 'Ask about behavior and accountability', paragraphs: ['A useful follow-up is “What happened, and how did you handle it?” Listen for specific events, boundaries, and reflection rather than expecting a particular scripted answer.', 'For example, saying a relationship involved repeated arguments and explaining a decision to leave gives more context than dismissing every former partner with the same insult. Neither example is enough to diagnose someone or establish the whole history.'] },
      { heading: 'Notice how disagreements with you are handled', paragraphs: ['The most relevant pattern is how they respond when you express a different view. Can they discuss the issue without insults? Can you both acknowledge mistakes and set boundaries?', 'If they use the same label to dismiss your concerns, bring the conversation back to the specific behavior. You can stop a conversation that becomes insulting without proving anything about the previous relationship.'] },
    ],
    replies: [
      { situation: 'You want more context', text: 'That sounds like a difficult relationship. What happened, and what did you learn from it?' },
      { situation: 'The label makes you uncomfortable', text: 'I’d rather understand the behavior than use a label. What was the actual disagreement?' },
      { situation: 'They start labeling you too', text: 'I’m willing to discuss what happened, but I’m not willing to be called names.' },
    ],
    questions: [
      { question: 'Does this mean he is a narcissist?', answer: 'No. One statement cannot establish a diagnosis. Focus on specific behavior, respect, and responsibility rather than trying to identify a disorder.' },
      { question: 'Should I ask his ex for the truth?', answer: 'You do not need to contact a third party to set your own boundaries. Consider what you observe in the current relationship and avoid treating a stranger’s private history as something you are entitled to investigate.' },
    ],
    related: ['trust-issues-because-of-my-ex', 'why-are-you-acting-so-crazy', 'not-ready-for-a-relationship-right-now-but-i-really-like-you'],
  },
  'why-are-you-acting-so-crazy': {
    title: '“Why Are You Acting So Crazy?”: How to Respond',
    description: 'How to respond when someone calls you “crazy” in an argument. Set a boundary around insults and bring the discussion back to specific behavior.',
    answer: 'Calling you “crazy” shifts attention from a specific disagreement to a label about you. You can ask for a respectful discussion and decline to continue while being insulted. The sentence alone does not establish gaslighting, a diagnosis, or the whole pattern of a relationship.',
    topic: 'difficult-conversations',
    sections: [
      { heading: 'Separate the issue from the insult', paragraphs: ['There may be a real disagreement worth discussing, and the label can still be unhelpful. Ask what specific behavior they want to address, without agreeing that the insult is an accurate description of you.', 'For example, “You called several times while I was working” identifies something you can discuss. “You’re crazy” does not describe what needs to change or how either person can repair the conversation.'] },
      { heading: 'Set a boundary you can act on', paragraphs: ['You might say you are willing to talk when you can both avoid name-calling. If the conversation keeps escalating, pause it if you can safely do so. You do not have to win the argument before taking a break.', 'A boundary describes your next step, rather than a way to control someone’s response. “I’ll stop this conversation if the insults continue” is clearer than trying to force an apology in the moment.'] },
      { heading: 'Look at what happens after the conflict', paragraphs: ['Does the person acknowledge the insult and discuss the original issue, or does the same pattern keep repeating? Repair and changed behavior matter more than a perfect explanation of why the word was used.', 'If you feel unsafe, prioritize getting to a safer situation and support from someone you trust. This article offers communication examples; it cannot determine whether a particular confrontation is safe to continue.'] },
    ],
    replies: [
      { situation: 'You can continue calmly', text: 'Please describe the behavior you want to discuss without calling me names.' },
      { situation: 'You need a pause', text: 'I want to address this, but I’m not continuing while we’re insulting each other. Let’s pause.' },
      { situation: 'You revisit the conversation later', text: 'I’m willing to discuss the disagreement. I also need us to agree that name-calling is not how we handle conflict.' },
    ],
    questions: [
      { question: 'Is calling someone crazy gaslighting?', answer: 'It can be dismissive, but a single insult does not establish the broader pattern implied by that term. Describe what happened and its effects rather than relying on a label to settle the issue.' },
      { question: 'What if I also behaved badly?', answer: 'You can take responsibility for a specific action while maintaining a boundary around insults. Accountability does not require accepting name-calling.' },
    ],
    related: ['my-ex-was-crazy', 'trust-issues-because-of-my-ex', 'bad-at-texting'],
  },
};

export const TOPICS = [
  { id: 'slow-replies', title: 'Slow replies and texting habits', description: 'Separate response time from reliability, and make plans without chasing a reply.', guide: '/guides/slow-replies', slugs: ['my-notifications-turned-off', 'bad-at-texting', 'sorry-i-fell-asleep'] },
  { id: 'relationship-intentions', title: 'Commitment and mixed signals', description: 'Clarify casual dating, taking it slowly, and what someone is actually offering.', guide: '/guides/relationship-intentions', slugs: ['not-looking-for-anything-serious-right-now', 'just-go-with-the-flow', 'not-ready-for-a-relationship-right-now-but-i-really-like-you', 'i-really-need-to-focus-on-myself-right-now'] },
  { id: 'difficult-conversations', title: 'Exes, trust, and difficult conversations', description: 'Ask about specific behavior and set boundaries without diagnosing someone.', guide: null, slugs: ['my-ex-was-crazy', 'trust-issues-because-of-my-ex', 'why-are-you-acting-so-crazy'] },
] as const;
