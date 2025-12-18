import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getRedirectSlug } from '@/lib/data';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const pathname = url.pathname;

  // 检查是否是 quote 详情页的旧 URL
  if (pathname.startsWith('/decode/')) {
    const oldSlug = pathname.split('/')[2];

    if (oldSlug) {
      const newSlug = getRedirectSlug(oldSlug);

      // 如果找到重定向映射，执行 301 重定向到新的 /analyze 路径
      if (newSlug && newSlug !== oldSlug) {
        const newUrl = new URL(`/analyze/${newSlug}`, request.url);

        // 返回 301 永久重定向
        return NextResponse.redirect(newUrl, {
          status: 301,
          headers: {
            'Cache-Control': 'public, max-age=31536000, immutable',
          },
        });
      } else {
        // 如果没有找到重定向映射，直接重定向到 /analyze 路径
        const newUrl = new URL(`/analyze/${oldSlug}`, request.url);

        // 返回 301 永久重定向
        return NextResponse.redirect(newUrl, {
          status: 301,
          headers: {
            'Cache-Control': 'public, max-age=31536000, immutable',
          },
        });
      }
    }
  }

  // 继续正常处理
  return NextResponse.next();
}

// 配置 middleware 匹配的路径
export const config = {
  matcher: ['/decode/:path*'],
};