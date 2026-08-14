'use client'

import { useState, useEffect } from 'react'
import { X, Megaphone } from 'lucide-react'

export default function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const dismissed = localStorage.getItem('announcement-dismissed')
    if (dismissed === 'true') {
      setIsVisible(false)
    }
  }, [])

  const dismiss = () => {
    setIsVisible(false)
    localStorage.setItem('announcement-dismissed', 'true')
  }

  if (!isVisible) return null

  return (
    <div className="relative bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-2 px-4 text-center text-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-2">
        <Megaphone className="h-4 w-4 flex-shrink-0" />
        <span>
          📢 New Chemistry Course Launched!{' '}
          <a href="/courses" className="underline font-semibold hover:opacity-80">
            Enroll Now →
          </a>
        </span>
      </div>
      <button
        onClick={dismiss}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition-colors"
        aria-label="Dismiss announcement"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  )
}
