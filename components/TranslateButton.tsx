'use client'

import { Languages } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function TranslateButton() {
  const [isUrdu, setIsUrdu] = useState(false)

  // Check current language on load
  useEffect(() => {
    const checkLang = () => {
      const select = document.querySelector('.goog-te-combo') as HTMLSelectElement
      if (select) {
        setIsUrdu(select.value === 'ur')
      }
    }
    // Check after Google Translate loads
    const interval = setInterval(checkLang, 1000)
    return () => clearInterval(interval)
  }, [])

  const toggleTranslate = () => {
    const select = document.querySelector('.goog-te-combo') as HTMLSelectElement
    if (select) {
      // Toggle between English and Urdu
      select.value = isUrdu ? 'en' : 'ur'
      select.dispatchEvent(new Event('change'))
      setIsUrdu(!isUrdu)
    } else {
      // Fallback: reload with lang param
      const currentUrl = new URL(window.location.href)
      if (isUrdu) {
        currentUrl.searchParams.delete('lang')
      } else {
        currentUrl.searchParams.set('lang', 'ur')
      }
      window.location.href = currentUrl.toString()
    }
  }

  return (
    <button
      onClick={toggleTranslate}
      className="p-2 rounded-lg hover:bg-white/10 transition-colors relative group"
      aria-label="Translate to Urdu/English"
    >
      <Languages className="h-5 w-5 text-white/80 group-hover:text-white" />
      <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        {isUrdu ? 'English' : 'Urdu'}
      </span>
    </button>
  )
}
