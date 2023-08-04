import './globals.css'
import type { Metadata } from 'next'
import { inter } from './fonts'

export const metadata: Metadata = {
  title: 'FBO MOVIES | Info About Your Favorite Movies',
  description: 'FBO movies gives you info about your favorite movies',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
