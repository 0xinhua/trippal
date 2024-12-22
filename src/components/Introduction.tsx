import Link from 'next/link'

import { CheckIcon } from '@/components/CheckIcon'
import { Container } from '@/components/Container'

export function Introduction() {
  return (
    <section
      id="introduction"
      aria-label="Introduction"
      className="pb-16 pt-20 sm:pb-20 md:pt-36 lg:py-32"
    >
      <Container className="text-lg tracking-tight text-slate-700">
        <p className="font-display text-4xl font-bold tracking-tight text-slate-900">
        “Travel to China Like a Local” is an e-book that serves as a comprehensive guide for planning your trip to China, including everything you need to prepare, such as policies, entry requirements, downloading and using essential apps, and how to book tickets.
        </p>
        <p className="mt-4">
        This guide also introduces popular tourist attractions in major cities like Beijing, Shanghai, Hong Kong, Chengdu, and more. This section will be updated regularly to reflect any changes in attractions or new recommendations based on the latest travel trends and experiences.
        </p>
        <ul role="list" className="mt-8 space-y-3">
          {[
            'Understanding visa requirements and application processes',
            'How to navigate public transportation in major cities',
            'Tips for booking accommodations and finding the best deals',
            'Cultural etiquette and local customs to be aware of',
            'Essential apps for travel planning and communication',
            'Popular dishes to try and food safety tips',
          ].map((feature) => (
            <li key={feature} className="flex">
              <CheckIcon className="h-8 w-8 flex-none fill-blue-500" />
              <span className="ml-4">{feature}</span>
            </li>
          ))}
        </ul>
        <p className="mt-8">
          By the end of the book, you’ll have all the confidence you need to plan your trip to China.
        </p>
        <p className="mt-10">
          <Link
            href="#free-chapters"
            className="text-base font-medium text-blue-600 hover:text-blue-800"
          >
            Get two free chapters straight to your inbox{' '}
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </p>
      </Container>
    </section>
  )
}
