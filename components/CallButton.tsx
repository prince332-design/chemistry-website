'use client'

import { Phone } from 'lucide-react'

export default function CallButton() {
  const phoneNumber = '+923058411027'
  const url = `tel:${phoneNumber}`

  return (
    <a
      href={url}
      className="fixed bottom-24 sm:bottom-28 right-6 z-50 p-4 bg-blue-600 hover:bg-blue-700 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
      aria-label="Call us"
    >
      <Phone className="h-6 w-6 text-white" />
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-slate-800 dark:bg-slate-700 text-white text-sm px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        Call Now
      </span>
    </a>
  )
}
