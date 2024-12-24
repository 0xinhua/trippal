import { type Metadata } from 'next'
import { Inter } from 'next/font/google'
import clsx from 'clsx'
import Script from 'next/script'

import '@/styles/tailwind.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Complete Travel Guide for First-Time Visitors to China.',
  description:
    'A China Travel Guide book that guides you how to plan your first trip to China.',
  keywords: [
    'China Travel Tips',
    'China Travel Guide',
    'China Travel Guide book',
    'Travel Guide to China pdf',
    'Tips for Traveling to China for business',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={clsx(
        'h-full scroll-smooth bg-white antialiased',
        inter.variable,
      )}
    >
      <head>
        <link
          rel="preconnect"
          href="https://cdn.fontshare.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@800,500,700&display=swap"
        />
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-QSSCV1DY8R"></Script>
        <Script>
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-QSSCV1DY8R');
          `}
        </Script>
      </head>
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  )
}
