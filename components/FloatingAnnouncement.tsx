'use client'

import { useState, useRef, useEffect } from 'react'
import { Megaphone } from 'lucide-react'

export default function FloatingAnnouncement() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })
  const [initialPos, setInitialPos] = useState({ x: 0, y: 0 })
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })
  const [showAnnouncement, setShowAnnouncement] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return
    setWindowSize({ width: window.innerWidth, height: window.innerHeight })
    
    const saved = localStorage.getItem('floating-announcement-position')
    if (saved) {
      try {
        const pos = JSON.parse(saved)
        setPosition(pos)
      } catch (e) {}
    } else {
      // ✅ DEFAULT POSITION: upar (WhatsApp se 100px above)
      const defaultX = 16
      const defaultY = window.innerHeight - 240  // WhatsApp se upar
      setPosition({ x: defaultX, y: defaultY })
    }
  }, [])

  const savePosition = (x: number, y: number) => {
    localStorage.setItem('floating-announcement-position', JSON.stringify({ x, y }))
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault()
    setIsDragging(true)
    setDragStart({ x: e.clientX, y: e.clientY })
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect()
      setInitialPos({ x: rect.left, y: rect.top })
    }
  }

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return
    const dx = e.clientX - dragStart.x
    const dy = e.clientY - dragStart.y
    const newX = Math.max(0, Math.min(window.innerWidth - 64, initialPos.x + dx))
    const newY = Math.max(0, Math.min(window.innerHeight - 64, initialPos.y + dy))
    setPosition({ x: newX, y: newY })
  }

  const handleMouseUp = () => {
    if (isDragging) {
      savePosition(position.x, position.y)
      setIsDragging(false)
    }
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0]
    setIsDragging(true)
    setDragStart({ x: touch.clientX, y: touch.clientY })
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect()
      setInitialPos({ x: rect.left, y: rect.top })
    }
  }

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return
    const touch = e.touches[0]
    const dx = touch.clientX - dragStart.x
    const dy = touch.clientY - dragStart.y
    const newX = Math.max(0, Math.min(window.innerWidth - 64, initialPos.x + dx))
    const newY = Math.max(0, Math.min(window.innerHeight - 64, initialPos.y + dy))
    setPosition({ x: newX, y: newY })
  }

  const handleTouchEnd = () => {
    if (isDragging) {
      savePosition(position.x, position.y)
      setIsDragging(false)
    }
  }

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove)
      window.addEventListener('mouseup', handleMouseUp)
      window.addEventListener('touchmove', handleTouchMove as any)
      window.addEventListener('touchend', handleTouchEnd)
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseup', handleMouseUp)
      window.removeEventListener('touchmove', handleTouchMove as any)
      window.removeEventListener('touchend', handleTouchEnd)
    }
  }, [isDragging, dragStart, initialPos, position])

  if (windowSize.width === 0 || windowSize.height === 0) {
    return null
  }

  const left = position.x || 16
  const top = position.y || windowSize.height - 240

  return (
    <>
      <button
        ref={buttonRef}
        onClick={() => setShowAnnouncement(!showAnnouncement)}
        className="fixed z-[999] p-3.5 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group cursor-grab active:cursor-grabbing select-none border border-white/10"
        style={{ left: `${left}px`, top: `${top}px`, transform: 'translate(0,0)' }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        aria-label="Announcements"
      >
        <Megaphone className="h-6 w-6 text-white pointer-events-none" />
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full animate-pulse">NEW</span>
        <span className="absolute left-full ml-3 top-1/2 -translate-y-1/2 bg-slate-800 dark:bg-slate-700 text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
          📢 Announcements
        </span>
      </button>

      {showAnnouncement && (
        <div
          className="fixed inset-0 z-[1000] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setShowAnnouncement(false)}
        >
          <div
            className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl max-w-md w-full p-6 border border-white/10 max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-slate-800 dark:text-white flex items-center gap-2">
                <Megaphone className="h-5 w-5 text-cyan-500" />
                Announcements
              </h3>
              <button onClick={() => setShowAnnouncement(false)} className="p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition">
                <svg className="h-5 w-5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-cyan-500/10 border border-cyan-500/20 rounded-lg">
                <h4 className="font-semibold text-cyan-600 dark:text-cyan-400">🎉 New Chemistry Course!</h4>
                <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">Organic Chemistry Masterclass is now available. Enroll today!</p>
              </div>
              <div className="p-4 bg-purple-500/10 border border-purple-500/20 rounded-lg">
                <h4 className="font-semibold text-purple-600 dark:text-purple-400">📢 Live Session Tomorrow</h4>
                <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">Join our live Q&A session with Dr. Hayatullah Khan at 8 PM.</p>
              </div>
              <div className="p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                <h4 className="font-semibold text-yellow-600 dark:text-yellow-400">📝 Past Papers Updated</h4>
                <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">New past papers for 2025 have been added to the resource section.</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
