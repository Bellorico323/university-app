import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Universidade UNO',
    template: '%s | Universidade UNO',
  },
  description:
    'Sistema de gerenciamento de universidades, que simplifica a sua vida',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-neutral-950 antialiased">
          {children}
        </div>
      </body>
    </html>
  )
}
