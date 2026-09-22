import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

// 修正后的 GA4 ID (G-XFSSKRVGMZ)
const GA_MEASUREMENT_ID = "G-XFSSKRVGMZ"; 

export const metadata: Metadata = {
  metadataBase: new URL("https://www.decodehistext.com"),
  title: {
    default: "Decode His Text: What Does His Message Mean?",
    template: "%s | Decode His Text",
  },
  description: "Explore what common dating texts may mean, the context clues that matter, and clearer ways to respond to mixed signals.",
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
      <body>{children}
      {process.env.VERCEL_ENV === 'production' && <>
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

      </>}
      </body>
    </html>
  );
}
