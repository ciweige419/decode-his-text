import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    // 定义旧 slug 到新 slug 的映射关系
    const slugMappings: Array<{ old: string; quote: string }> = [
      {
        old: 'im-not-looking-for-anything-serious-right-now',
        quote: "I'm not looking for anything serious right now.",
      },
      {
        old: 'im-bad-at-texting',
        quote: "I'm bad at texting.",
      },
      {
        old: 'im-just-really-busy-with-work-right-now',
        quote: "I'm just really busy with work right now.",
      },
      {
        old: 'ive-never-felt-this-connection-with-anyone-before',
        quote: "I've never felt this connection with anyone before.",
      },
      {
        old: 'im-not-ready-for-a-relationship-right-now-but-i-really-like-you',
        quote: "I'm not ready for a relationship right now, but I really like you.",
      },
      {
        old: 'im-sorry-you-feel-that-way',
        quote: "I'm sorry you feel that way.",
      },
      {
        old: 'im-not-like-other-guys',
        quote: "I'm not like other guys.",
      },
      {
        old: 'im-terrible-at-making-plans-im-more-spontaneous',
        quote: "I'm terrible at making plans, I'm more spontaneous.",
      },
      {
        old: 'ive-never-met-anyone-like-you-before',
        quote: "I've never met anyone like you before.",
      },
      {
        old: 'im-kind-of-seeing-someone-but-its-complicated',
        quote: "I'm kind of seeing someone, but it's complicated.",
      },
      {
        old: 'im-just-in-a-weird-headspace-right-now',
        quote: "I'm just in a weird headspace right now.",
      },
      {
        old: 'i-literally-forgot-to-hit-send',
        quote: "I literally forgot to hit send.",
      },
      {
        old: 'my-social-battery-is-just-drained',
        quote: "My social battery is just drained.",
      },
      {
        old: 'i-have-my-notifications-turned-off',
        quote: "I have my notifications turned off.",
      },
      {
        old: 'ive-been-quiet-i-deleted-the-app-for-a-mental-health-detox',
        quote: "Sorry I've been quiet, I deleted the app for a mental health detox.",
      },
      {
        old: 'work-has-just-been-absolutely-insane-this-week',
        quote: "Work has just been absolutely insane this week.",
      },
      {
        old: 'i-promise-im-not-ignoring-you',
        quote: "I promise I'm not ignoring you!",
      },
      {
        old: 'i-miss-your-face',
        quote: "I miss your face.",
      },
      {
        old: 'i-lost-my-phone-or-got-a-new-number',
        quote: "I lost my phone / got a new number.",
      },
      {
        old: 'i-pulled-back-because-i-didnt-want-to-lead-you-on',
        quote: "I pulled back because I didn't want to lead you on.",
      },
      {
        old: 'i-got-scared-because-i-like-you-too-much',
        quote: "I got scared because I like you too much.",
      },
      {
        old: 'sorry-i-fell-asleep',
        quote: "Sorry I fell asleep.",
      }
    ];

    // 生成重定向数组
    return slugMappings.map(({ old, quote }) => ({
      source: `/decode/${old}`,
      destination: `/analyze/${generateSeoSlug(quote)}`,
      permanent: true,
    }));
  },
};

// 生成 SEO slug 的辅助函数
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

export default nextConfig;
