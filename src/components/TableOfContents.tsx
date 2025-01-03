"use client"

import { Container } from '@/components/Container'
import {
  Expandable,
  ExpandableButton,
  ExpandableItems,
} from '@/components/Expandable'
import { SectionHeading } from '@/components/SectionHeading'
import { useTranslation } from 'next-i18next'

const tableOfContents = {
  'Getting Started': {
    'Introduction to Traveling in China': 1,
    'Understanding Transit Policies': 5,
    'How to Obtain a Visa': 10,
  },
  'Transportation': {
    'Using Public Transport': 15,
    'Booking Taxis and Ride-Sharing Apps': 20,
    'Navigating the Subway System': 25,
  },
  'Essential Apps': {
    'Downloading Useful Travel Apps': 30,
    "Using AliPay for Payment": 33,
    'Using Meituan for Food Delivery': 36,
    'Using Didi for Rides': 40,
  },
  'Tourist Attractions': {
    'Top Attractions in Beijing': 45,
    'Exploring Shanghai': 50,
    'Visiting Chengdu and More': 55,
  },
}

export function TableOfContents() {
  const { t } = useTranslation()
  return (
    <section
      id="table-of-contents"
      aria-labelledby="table-of-contents-title"
      className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
    >
      <Container>
        <SectionHeading number="1" id="table-of-contents-title">
        {t("Table of contents")}
        </SectionHeading>
        <p className="mt-8 font-display text-4xl font-bold tracking-tight text-slate-900">
        {t("table of contents title")}
        </p>
        <p className="mt-4 text-lg tracking-tight text-slate-700">
        {t("table of contents description")}
        </p>
        <Expandable>
          <ol role="list" className="mt-16 space-y-10 sm:space-y-16">
            <ExpandableItems>
              {Object.entries(tableOfContents).map(([title, pages]) => (
                <li key={title}>
                  <h3 className="font-display text-3xl font-bold tracking-tight text-slate-900">
                    {t(title)}
                  </h3>
                  <ol
                    role="list"
                    className="mt-8 divide-y divide-slate-300/30 rounded-2xl bg-slate-50 px-6 py-3 text-base tracking-tight sm:px-8 sm:py-7"
                  >
                    {Object.entries(pages).map(([title, pageNumber]) => (
                      <li
                        key={title}
                        className="flex justify-between py-3"
                        aria-label={`${title} on page ${pageNumber}`}
                      >
                        <span
                          className="font-medium text-slate-900"
                          aria-hidden="true"
                        >
                          {t(title)}
                        </span>
                        <span
                          className="font-mono text-slate-400"
                          aria-hidden="true"
                        >
                          {pageNumber}
                        </span>
                      </li>
                    ))}
                  </ol>
                </li>
              ))}
            </ExpandableItems>
          </ol>
          <ExpandableButton>{t('See more')}</ExpandableButton>
        </Expandable>
      </Container>
    </section>
  )
}
