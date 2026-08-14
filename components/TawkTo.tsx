'use client'

import { useEffect } from 'react'

export default function TawkTo() {
  useEffect(() => {
    // Tawk.to script
    const script = document.createElement('script')
    script.async = true
    script.src = 'https://embed.tawk.to/6a7f4f357425c450ced33fa6/1k00kqqhb'
    script.charset = 'UTF-8'
    script.setAttribute('crossorigin', '*')
    document.body.appendChild(script)

    return () => {
      // Cleanup
      const scripts = document.querySelectorAll('script[src*="tawk.to"]')
      scripts.forEach((s) => s.remove())
    }
  }, [])

  return null
}
