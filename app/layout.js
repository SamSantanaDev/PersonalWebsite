import './globals.css'
import Navbar from '@/components/Navbar'
import { Inter } from 'next/font/google'
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Sam Santana | Software Engineer',
  
  
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
      <link rel="icon"  href="/logo_black.png"/>
      </Head>
      <body className={inter.className}>

        {children}</body>

    </html>
  )
}
