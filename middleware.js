import { i18nRouter } from 'next-i18n-router';
import i18nConfig from './i18nConfig';
import { NextResponse } from 'next/server';

export function middleware(request) {
  console.log('Request URL:', request.nextUrl.pathname);
  console.log('Current Locale:', request.nextUrl.locale);

  const response = i18nRouter(request, i18nConfig)
  return response;
}

// Applies this middleware only to files in the app directory
export const config = {
  matcher: '/((?!api|static|.*\\..*|_next).*)',
};