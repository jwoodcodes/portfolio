import './globals.css'
import { Analytics } from "@vercel/analytics/react";
import { Manrope, Roboto } from 'next/font/google'


const roboto = Roboto({ subsets: ['latin'], display: 'swap', weight: '100'})
const manrope = Manrope({ subsets: ['latin'], display: 'swap', weight: '200'})



export const metadata = {
  title: 'Jay Wood Dev',
  description: 'Jay Wood Developer Portfilio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        {children}
        <Analytics />
        </body>
    </html>
  )
}
