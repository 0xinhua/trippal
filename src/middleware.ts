import { i18nRouter } from 'next-i18n-router'
import i18nConfig from '../i18nConfig'
import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {

  const response = i18nRouter(request, i18nConfig)

  // if (request.nextUrl.pathname === '/') {
  //   return NextResponse.redirect(new URL('/en', request.url));
  // }

  return response
}


// Applies this middleware only to files in the app directory
export const config = {
  matcher: '/((?!api|static|.*\\..*|_next).*)',
}