// 这个脚本可以帮助快速更新所有话术添加psychologyContent字段
const fs = require('fs');

const basicTemplate = (quote, score) => `
  <h3>The Psychology Behind "${quote}"</h3>
  <p>This common dating phrase reveals important insights into communication patterns, emotional availability, and relationship intentions. Understanding the psychological meaning behind these words helps recognize red flags and make better dating decisions.</p>

  <h3>Communication Patterns and Intent</h3>
  <p>When someone uses this phrase, they're revealing their attachment style and relationship intentions. ${score >= 4 ? 'This typically indicates significant red flags including avoidant attachment, manipulation, or emotional unavailability.' : 'This suggests varying levels of emotional awareness and communication challenges that warrant attention.'}</p>

  <h3>Setting Healthy Boundaries</h3>
  <p>Recognizing these communication patterns enables setting appropriate boundaries and seeking relationships built on mutual respect and clear communication. Your emotional wellbeing deserves to be prioritized.</p>
`;

console.log('Template function ready. Use this to update remaining entries.');
console.log('Example: psychologyContent: basicTemplate("your quote here", score)');