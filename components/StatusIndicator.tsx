'use client'

import { useState, useEffect } from 'react'

export default function StatusIndicator() {
  const [isOnline, setIsOnline] = useState(true)

  useEffect(() => {
    const handleOnline = () => setIsOnline(true)
    const handleOffline = () => setIsOnline(false)

    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)

    return () => {
      window.removeEventListener('online', handleOnline)
      window.removeEventListener('offline', handleOffline)
    }
  }, [])

  return (
    <div className="flex items-center gap-1.5 text-xs">
      <span className={`relative flex h-2.5 w-2.5`}>
        <span
          className={`animate-ping absolute inline-flex h-full w-full rounded-full ${
            isOnline ? 'bg-green-400' : 'bg-red-400'
          } opacity-75`}
        />
        <span
          className={`relative inline-flex rounded-full h-2.5 w-2.5 ${
            isOnline ? 'bg-green-500' : 'bg-red-500'
          }`}
        />
      </span>
      <span className="text-slate-500 dark:text-slate-400">
        {isOnline ? 'Online' : 'Offline'}
      </span>
    </div>
  )
}
