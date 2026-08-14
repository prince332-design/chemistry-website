'use client'

import { Facebook, Twitter, WhatsApp } from 'lucide-react'

interface ShareButtonsProps {
  url: string
  title: string
}

export default function ShareButtons({ url, title }: ShareButtonsProps) {
  const shareUrl = encodeURIComponent(url)
  const shareTitle = encodeURIComponent(title)

  const shareLinks = [
    {
      name: 'Facebook',
      icon: Facebook,
      href: `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`,
      color: 'hover:text-blue-600',
    },
    {
      name: 'WhatsApp',
      icon: WhatsApp,
      href: `https://wa.me/?text=${shareTitle}%20${shareUrl}`,
      color: 'hover:text-green-500',
    },
  ]

  return (
    <div className="flex items-center gap-2 mt-4">
      <span className="text-sm text-slate-500 dark:text-slate-400">Share:</span>
      {shareLinks.map((link) => (
        <a
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`text-slate-400 ${link.color} transition-colors p-1.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800`}
          aria-label={`Share on ${link.name}`}
        >
          <link.icon className="h-4 w-4" />
        </a>
      ))}
    </div>
  )
}
