import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

import { Geist, Geist_Mono } from "next/font/google";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: 'Jasa Web Tasik | Jasa Pembuatan Website Profesional Tasikmalaya',
  description: 'Jasa pembuatan website profesional untuk UMKM, bisnis lokal, restoran, barbershop, travel, dan company profile di Tasikmalaya. Website modern, cepat, dan mobile-friendly.',
  keywords: 'jasa pembuatan website tasikmalaya, web developer tasik, website umkm, landing page, company profile, toko online',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'Jasa Web Tasik | Jasa Pembuatan Website Profesional',
    description: 'Kami membantu UMKM dan bisnis lokal tampil lebih profesional dengan website cepat, modern, dan mobile-friendly.',
    type: 'website',
    locale: 'id_ID',
  },
}

export const viewport = {
  themeColor: '#3b82f6',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" className="bg-background">
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
