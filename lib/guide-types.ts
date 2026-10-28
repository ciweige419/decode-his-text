export type Guide = {
  title: string;
  description: string;
  intro: string;
  updatedAt?: string;
  publishedAt?: string;
  rows: [string, string, string][];
  sections: { heading: string; paragraphs: string[] }[];
  articleSlugs: string[];
  nextGuide: string;
  replies?: { situation: string; text: string }[];
  questions?: { question: string; answer: string }[];
  relatedGuides?: string[];
  sources?: { title: string; url: string }[];
};

export const formatGuideDate = (date: string) => new Date(date + 'T00:00:00Z').toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });
