"use client"

import { useRouter } from 'next/navigation'

export function LanguageSwitcher() {

  const router = useRouter()
  const locales = [
    { href:'/en', name:'English' },
    { href:'/ja', name:'日本語' },
    { href:'/ko', name:'한국어'}
  
  ] // Define your locales here

  const changeLanguage = (newLocaleHref: string) => {
    router.push(newLocaleHref); // Update the locale in the URL
  }

  return (
    <div className="flex absolute top-0 right-0 sm:right-4 z-10 justify-end sm:gap-2 gap-1 sm:p-4 px-1 py-3 bg-transparent">
      {locales.map((lng) => (
        <button
          key={lng.name}
          onClick={() => changeLanguage(lng.href)}
          className={`p-2 text-blue-600 hover:bg-blue-100 rounded transition duration-200`}
        >
          {lng.name}
        </button>
      ))}
    </div>
  )
}