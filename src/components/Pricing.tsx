"use client"

import clsx from 'clsx'
import { Button } from '@/components/Button'
import { CheckIcon } from '@/components/CheckIcon'
import { Container } from '@/components/Container'
import { GridPattern } from '@/components/GridPattern'
import { SectionHeading } from '@/components/SectionHeading'
import { useTranslation } from 'react-i18next'

export const surveyUrl = 'https://rsgx3y2b6di4.sg.larksuite.com/share/base/form/shrlgOqrQ98tKevcDXNonmhxVff'

function Plan({
  name,
  description,
  price,
  discountPrice,
  features,
  href,
  featured = false,
}: {
  name: string
  description: string
  price: string
  discountPrice: string
  features: Array<string>
  href: string
  featured?: boolean
}) {
  const { t } = useTranslation()
  return (
    <div
      className={clsx(
        'relative px-4 py-16 sm:rounded-5xl sm:px-10 md:py-12 lg:px-12',
        featured && 'bg-blue-600 sm:shadow-lg',
      )}
    >
      {featured && (
        <div className="absolute inset-0 text-white/10 [mask-image:linear-gradient(white,transparent)]">
          <GridPattern x="50%" y="50%" />
        </div>
      )}
      <div className="relative flex flex-col">
        <h3
          className={clsx(
            'mt-7 text-lg font-semibold tracking-tight',
            featured ? 'text-white' : 'text-slate-900',
          )}
        >
          {name}
        </h3>
        <p
          className={clsx(
            'mt-2 text-lg tracking-tight',
            featured ? 'text-white' : 'text-slate-600',
          )}
        >
          {description}
        </p>
        <p className="order-first flex flex-col font-display font-bold">
          <span
            className={clsx(
              'ml-1 mt-1 text-7xl tracking-tight',
              featured ? 'text-white' : 'text-slate-900',
            )}
          >
            <s>{price}</s>
            {discountPrice && ( // Conditionally render discount price
          <span className='ml-2 text-4xl tracking-tight text-blue-600'>{discountPrice}</span>
        )}
          </span>
          <span className='text-base text-slate-600'>{t("Early bird discount price.")}</span>
        </p>
        <div className="order-last mt-8">
          <ul
            role="list"
            className={clsx(
              '-my-2 divide-y text-base tracking-tight',
              featured
                ? 'divide-white/10 text-white'
                : 'divide-slate-200 text-slate-900',
            )}
          >
            {features.map((feature) => (
              <li key={feature} className="flex py-2">
                <CheckIcon
                  className={clsx(
                    'h-8 w-8 flex-none',
                    featured ? 'fill-white' : 'fill-slate-600',
                  )}
                />
                <span className="ml-4">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        <Button
          href={href}
          color={featured ? 'white' : 'slate'}
          className="mt-8"
          aria-label={`Get started with the ${name} plan for $${price}`}
        >
          {t("Get this ebook")}
        </Button>
      </div>
    </div>
  )
}

export function Pricing() {
  const { t } = useTranslation()
  return (
    <section
      id="pricing"
      aria-labelledby="pricing-title"
      className="scroll-mt-14 pb-8 pt-16 sm:scroll-mt-32 sm:pb-10 sm:pt-20 lg:pb-16 lg:pt-32"
    >
      <Container>
        {/* <p className="mt-8 font-display text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
          Plan your trip
        </p>
        <p className="mt-4 max-w-xl text-lg tracking-tight text-slate-600">
          Plan your trip to China like a pro.
        </p> */}
      </Container>
      <div className="mx-auto mt-16 max-w-5xl lg:px-6">
        <div className="flex justify-center items-center flex-col gap-8">
        <SectionHeading number="2" id="pricing-title">
          {t("Pricing")}
        </SectionHeading>
        <div className="grid bg-slate-50 sm:px-6 sm:pb-16 md:grid-cols-1 md:rounded-6xl md:px-8 md:pt-16 lg:p-20">
          <Plan
            name={t("One-time")}
            description={t("Pay once and future updates included.")}
            price="$19.9"
            discountPrice="$9.9"
            href={surveyUrl}
            features={[
              t("10+ chapters ebook"),
              t('Future updates access'),
            ]}
          />
          {/* <Plan
            featured
            name="Complete"
            description="Everything icon resource you could ever ask for."
            price="229"
            href="#"
            features={[
              'The 240-page ebook',
              'Figma icon templates',
              'Over an hour of screencasts',
              'Weekly icon teardowns',
              'Community access',
            ]}
          /> */}
        </div>
        </div>
      </div>
    </section>
  )
}
