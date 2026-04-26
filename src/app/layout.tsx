import type { Metadata } from 'next'
import { Bebas_Neue, DM_Sans, JetBrains_Mono } from 'next/font/google'
import './globals.css'

/* ─── Google Fonts ───────────────────────────────────────────── */
const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
})

/* ─── Metadata ───────────────────────────────────────────────── */
export const metadata: Metadata = {
  metadataBase: new URL('https://www.yukselkt.com'),
  title: {
    default: 'Yüksel Kompozit Teknolojileri | Havacılık Kompozit Parça İmalatı',
    template: '%s | Yüksel Kompozit Teknolojileri',
  },
  description:
    '2010\'dan bu yana AS9100 sertifikalı CFRP & GFRP kompozit parça imalatı. Havacılık, İHA ve savunma sanayii projeleriniz için Ankara\'dan güçlü üretim çözümleri.',
  keywords: [
    'kompozit parça imalatı ankara',
    'havacılık kompozit üretici türkiye',
    'CFRP parça üretimi',
    'İHA kompozit parça',
    'composite parts manufacturer turkey',
    'aerospace composite manufacturing ankara',
  ],
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    alternateLocale: ['en_US'],
    url: 'https://www.yukselkt.com',
    siteName: 'Yüksel Kompozit Teknolojileri',
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://www.yukselkt.com',
    languages: {
      tr: 'https://www.yukselkt.com',
      en: 'https://www.yukselkt.com/en',
    },
  },
}

/* ─── Root Layout ────────────────────────────────────────────── */
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="tr"
      className={`${bebasNeue.variable} ${dmSans.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-primary text-brand-white font-body">
        {children}
      </body>
    </html>
  )
}
