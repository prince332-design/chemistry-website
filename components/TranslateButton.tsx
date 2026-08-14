'use client'

import { Languages } from 'lucide-react'
import { useState } from 'react'

export default function TranslateButton() {
  const [isTranslated, setIsTranslated] = useState(false)

  const toggleTranslate = () => {
    setIsTranslated(!isTranslated)
    // Google Translate widget toggle logic
    const googleTranslateElement = document.querySelector('.goog-te-combo') as HTMLSelectElement
    if (googleTranslateElement) {
      googleTranslateElement.value = isTranslated ? 'en' : 'ur'
      googleTranslateElement.dispatchEvent(new Event('change'))
    } else {
      // If Google Translate is not loaded, reload page with translation parameter
      window.location.href = isTranslated ? '/' : '/?lang=ur'
    }
  }

  return (
    <button
      onClick={toggleTranslate}
      className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors relative group"
      aria-label="Translate to Urdu/English"
    >
      <Languages className="h-5 w-5 text-slate-700 dark:text-slate-200" />
      <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-slate-800 dark:bg-slate-700 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        {isTranslated ? 'English' : 'Urdu'}
      </span>
    </button>
  )
}
