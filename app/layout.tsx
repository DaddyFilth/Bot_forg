import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'BotForge AI - No-Code Sales Chatbots | Book More Leads',
  description: 'Deploy enterprise-grade AI sales chatbots in 60 seconds. Perfect B2B lead qualification, meeting booking, and 24/7 sales automation. Trusted by 1,200+ B2B teams.',
  keywords: ['AI chatbot', 'sales automation', 'lead qualification', 'B2B', 'Voiceflow', 'no-code'],
  authors: [{ name: 'BotForge AI' }],
  openGraph: {
    title: 'BotForge AI - No-Code Sales Chatbots',
    description: 'Deploy enterprise-grade AI sales chatbots in 60 seconds. Book 3x more leads.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#667eea',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased bg-gray-50`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
