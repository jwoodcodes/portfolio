import './globals.css'
import { Analytics } from "@vercel/analytics/react";
import { Roboto } from 'next/font/google'


const roboto = Roboto({ subsets: ['latin'], display: 'swap', weight: '100'})



export const metadata = {
  title: 'Jay Wood Dev',
  description: 'Jay Wood Developer Portfilio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        {children}
        <Analytics />
        </body>
    </html>
  )
}
