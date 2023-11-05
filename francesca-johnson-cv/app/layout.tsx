import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navigation from '@/components/Navigation/Navigation' 
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Francesca Johnson CV App',
  description: 'Learn about my skills and experiences.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}><Navigation title = {"Francesca Johnson: CV"} pages={['Home', 'About', 'Work', 'CV', 'Contact']}/>{children}</body>
    </html>
  )
}
