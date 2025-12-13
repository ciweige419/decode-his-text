import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

// 修正后的 GA4 ID (G-XFSSKRVGMZ)
const GA_MEASUREMENT_ID = "G-XFSSKRVGMZ"; 

export const metadata: Metadata = {
  title: "Decode His Text - AI Toxic Text Translator",
  description: "Stop overthinking. Use AI to decode mixed signals, red flags, and toxic texts from men. The #1 dating safety tool for 2025.",
  // GSC 验证标签 (已集成)
  verification: {
    google: "th5gX4Qxjeyi8G3i5SPTGSUxLvKKlMCiarYm6zX2J9U",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Google Analytics 脚本
        strategy="afterInteractive" 确保在页面内容加载后尽快加载，但不阻塞渲染
      */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="google-analytics-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />

      {/* 这里的 body 会自动应用 globals.css 里的黑色背景 */}
      <body>{children}</body>
    </html>
  );
}