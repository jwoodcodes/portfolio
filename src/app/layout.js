import './globals.css'
import { Analytics } from "@vercel/analytics/react";
import { Inter } from 'next/font/google'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata = {
  title: 'Jay Wood | Full Stack Developer',
  description: 'Portfolio of Jay Wood, a Full Stack Developer specializing in modern web applications.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
