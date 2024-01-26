"use client"
import './globals.css'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Script from 'next/script'
import Provider from '@/components/Provider'
import { inter } from '@/helpers/font'

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='w-fit'>
      <head>
        <Script src="https://accounts.google.com/gsi/client" />
      </head>

      <Provider>
        <body className={`${inter.className} relative`} style={{ overflowX: 'hidden' }} suppressHydrationWarning={true}>

          <Navbar />
          <div>
            {children}
          </div>
          <Footer />

        </body>
      </Provider>



    </html >
  )
}
