import './globals.css'
import type { Metadata } from 'next'
import { inter } from './fonts'
import Header from './_components/Header'
import Footer from './_components/Footer'
import 'node_modules/@splidejs/react-splide/dist/css/themes/splide-default.min.css'

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
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
