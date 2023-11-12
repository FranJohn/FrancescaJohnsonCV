import type { Metadata } from 'next'
import { Saira } from 'next/font/google'
import Navigation from '@/components/Navigation/Navigation' 
import './globals.css'


const inter = Saira({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Francesca Johnson CV',
  description: 'Learn about my skills and experiences.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/images/favicon.ico" />
      </head>
      <body className={inter.className}>
        <div className="navigation_padding"></div>
        <Navigation title={'Francesca Johnson'} pages={['Home', 'About', 'Work', 'CV', 'Contact']} />
        {children}
      </body>
    </html>
  )
}
