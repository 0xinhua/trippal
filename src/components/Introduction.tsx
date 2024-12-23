"use client"

import Link from 'next/link'

import { CheckIcon } from '@/components/CheckIcon'
import { Container } from '@/components/Container'
import { useTranslation } from 'react-i18next'

export function Introduction() {
  const { t } = useTranslation()

  return (
    <section
      id="introduction"
      aria-label="Introduction"
      className="pb-16 pt-20 sm:pb-20 md:pt-36 lg:py-32"
    >
      <Container className="text-lg tracking-tight text-slate-700">
        <p className="font-display text-4xl font-bold tracking-tight text-slate-900">
          {t("Introduction title")}
        </p>
        <p className="mt-4">
          {t("Introduction description")}
        </p>
        <ul role="list" className="mt-8 space-y-3">
          {[
            t("Introduction section visa"),
            t("Introduction section transportation"),
            t("Introduction section booking"),
            t("Introduction section cultural"),
            t("Introduction section apps"),
            t("Introduction section food"),
          ].map((feature) => (
            <li key={feature} className="flex">
              <CheckIcon className="h-8 w-8 flex-none fill-blue-500" />
              <span className="ml-4">{feature}</span>
            </li>
          ))}
        </ul>
        <p className="mt-8">
          {t("Introduction end section")}
        </p>
        <p className="mt-10">
          <Link
            href="#free-chapters"
            className="text-base font-medium text-blue-600 hover:text-blue-800"
          >
            {t("Introduction link text")}
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </p>
      </Container>
    </section>
  )
}
