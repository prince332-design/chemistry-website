'use client'

import { useState, useRef, useEffect } from 'react'

export default function WhatsAppButton() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })
  const [initialPos, setInitialPos] = useState({ x: 0, y: 0 })
  const buttonRef = useRef<HTMLAnchorElement>(null)

  const phoneNumber = '923058411027'
  const message = 'Hi! I need help with chemistry.'
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  // Load saved position from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('whatsapp-position')
    if (saved) {
      try {
        const pos = JSON.parse(saved)
        setPosition(pos)
      } catch (e) {}
    }
  }, [])

  // Save position to localStorage
  const savePosition = (x: number, y: number) => {
    localStorage.setItem('whatsapp-position', JSON.stringify({ x, y }))
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

  // Touch events for mobile
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

  // Mouse event listeners
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

  // Calculate position
  const left = position.x || window.innerWidth - 80
  const top = position.y || window.innerHeight - 140

  return (
    <a
      ref={buttonRef}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed z-[999] p-3.5 bg-[#25D366] hover:bg-[#1ebe5a] rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group cursor-grab active:cursor-grabbing select-none"
      style={{
        left: `${left}px`,
        top: `${top}px`,
        transform: 'translate(0, 0)',
      }}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
      aria-label="Chat on WhatsApp"
    >
      <svg
        className="h-7 w-7 text-white pointer-events-none"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>

      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-slate-800 dark:bg-slate-700 text-white text-sm px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
        Chat on WhatsApp
      </span>
    </a>
  )
}
