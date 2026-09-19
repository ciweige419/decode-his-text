// 去主语的标准化 slug 生成函数
export function generateSeoSlug(quote: string): string {
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
