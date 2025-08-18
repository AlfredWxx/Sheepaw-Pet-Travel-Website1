import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { locales, defaultLocale } from './lib/i18n'

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  
  // 只处理根路径，避免重复重定向
  if (pathname !== '/') {
    return NextResponse.next()
  }
  
  // 获取用户的首选语言
  const locale = getLocale(request)
  
  // 重定向到带有语言代码的路径
  const newUrl = new URL(`/${locale}`, request.url)
  return NextResponse.redirect(newUrl)
}

function getLocale(request: NextRequest): string {
  // 从 Accept-Language 头中获取首选语言
  const acceptLanguage = request.headers.get('accept-language')
  
  if (acceptLanguage) {
    // 解析 Accept-Language 头
    const languages = acceptLanguage
      .split(',')
      .map(lang => lang.split(';')[0].trim().toLowerCase())
    
    // 查找匹配的语言
    for (const lang of languages) {
      // 检查完整匹配
      if (locales.includes(lang as any)) {
        return lang
      }
      // 检查部分匹配（如 zh-CN -> zh）
      const shortLang = lang.split('-')[0]
      if (locales.includes(shortLang as any)) {
        return shortLang
      }
    }
  }
  
  return defaultLocale
}

export const config = {
  matcher: [
    // 只匹配根路径
    '/',
  ],
}
