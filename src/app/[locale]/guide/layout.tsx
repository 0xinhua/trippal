import { type ReactNode } from 'react'
import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: 'China Visa-Free Transit Policy - 144-hour visa-free transit in China',
  description: 'Comprehensive information on China\'s visa-free transit policy, including eligibility, requirements, and a list of countries and ports of entry.',
  keywords: [
    'China Visa-Free Transit Policy',
    'visa-free China',
    'China visa-free',
    '144-hour visa-free transit in china',
    'China visa-free Australia',
    'china visa-free 15 days',
  ],
  openGraph: {
    title: 'China Visa-Free Transit Policy - Stay Up to 144 Hours Without a Visa',
    description: 'Comprehensive information on China\'s visa-free transit policy, including eligibility, requirements, and a list of countries and ports of entry.',
    type: 'article',
  },
}

export default function GuideLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-white">
      <main className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
        {/* Article Header */}
        <header className="mb-8">
          <nav className="flex items-center justify-between">
            <a 
              href="/"
              className="text-sm font-medium text-gray-500 hover:text-gray-900"
            >
              ← Back to TripPal
            </a>
          </nav>
        </header>

        {/* Article Content */}
        <article className="prose prose-slate max-w-none prose-headings:font-semibold prose-a:text-blue-600 prose-img:rounded-lg dark:prose-invert">
          {children}
        </article>

        {/* Article Footer */}
        <footer className="mt-16 border-t border-gray-200 pt-8">
          <div className="flex flex-col sm:flex-row justify-between text-sm text-gray-500 gap-4">
            <div className="flex items-center space-x-2">
              <span>Last updated:</span>
              <time dateTime={new Date().toISOString()}>
                {new Date().toLocaleDateString()}
              </time>
            </div>
            <div>
              <a 
                href="#top" 
                className="hover:text-gray-900 inline-flex items-center"
                aria-label="Scroll to top"
              >
                Back to top ↑
              </a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
} 