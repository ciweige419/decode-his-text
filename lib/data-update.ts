// 这是一个辅助脚本，用于快速更新所有剩余话术的心理学内容
// 在实际使用中，这些内容应该被仔细定制

const generatePsychologyContent = (quote: string, score: number): string => {
  const baseContent = `
    <h3>The Psychology Behind "${quote}"</h3>
    <p>This common dating phrase reveals important insights into communication patterns, emotional availability, and relationship intentions. Understanding the psychological meaning behind these words can help you recognize red flags and make better dating decisions.</p>

    <h3>Communication Patterns and Intent</h3>
    <p>When someone uses this phrase, they're often revealing their attachment style, emotional maturity, and true relationship intentions. ${score >= 4 ? 'This typically indicates avoidant attachment patterns or manipulation.' : 'This suggests varying levels of emotional awareness and communication skills.'}</p>

    <h3>Red Flag Recognition</h3>
    <p>Learning to identify these communication patterns helps protect your emotional wellbeing. Healthy relationships involve direct, honest communication rather than vague or misleading statements that create confusion.</p>

    <h3>Setting Healthy Boundaries</h3>
    <p>Recognizing these patterns enables you to set appropriate boundaries and seek relationships built on mutual respect and clear communication. Your time and emotional energy deserve to be invested in people who value genuine connection.</p>
  `;

  return baseContent;
};

// 示例应用
export const updatedDataTemplate = {
  quote: "",
  translation: "",
  score: 0,
  roast: "",
  keywords: [],
  psychologyContent: "" // 使用 generatePsychologyContent(quote, score) 生成
};