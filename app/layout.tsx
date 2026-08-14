import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import { Toaster } from '@/components/ui/sonner'
import { GoogleAnalytics } from '@next/third-parties/google'
import { Analytics } from '@vercel/analytics/react'
import WhatsAppButton from '@/components/WhatsAppButton'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ChemLab Academy - Master Chemistry with Confidence',
  description: 'Interactive chemistry courses, live labs, and expert mentors for O/A-Levels, FSc, and University students.',
  keywords: 'chemistry, online courses, O-Level, A-Level, FSc, chemistry tutor, interactive learning',
  authors: [{ name: 'ChemLab Academy' }],
  openGraph: {
    title: 'ChemLab Academy - Master Chemistry with Confidence',
    description: 'Interactive chemistry courses, live labs, and expert mentors',
    url: 'https://chemlab.academy',
    siteName: 'ChemLab Academy',
    images: [
      {
        url: 'https://chemlab.academy/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ChemLab Academy - Master Chemistry with Confidence',
    description: 'Interactive chemistry courses, live labs, and expert mentors',
    images: ['https://chemlab.academy/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta
          name="google-site-verification"
          content={process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || ''}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
        <Analytics />
        <WhatsAppButton />
      </body>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || ''} />
    </html>
  )
}
