import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Ravinairayen PG Guesthouse - Premium Accommodation in Haryana',
  description: 'Affordable and comfortable PG accommodation in Jhajjar, Haryana. Single and sharing rooms from ₹5,500/month. Wi-Fi, RO water, security, laundry, and food service included.',
  keywords: 'PG, guesthouse, accommodation, Haryana, Jhajjar, affordable rooms, students, professionals',
  generator: 'v0.app',
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    title: 'Ravinairayen PG Guesthouse',
    description: 'Premium PG accommodation with world-class amenities',
    type: 'website',
    images: [{ url: '/logo.png' }],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
