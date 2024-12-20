import Navigation from '@/Components/Navigation'
import '../globals.css'
import { Merriweather } from 'next/font/google'
// import localFont from 'next/font/local'
import Provider from '@/Components/Provider'
import { AppContexProvider } from '../contex/store';
import FeedBack from '@/Components/FeedBack';
import Link from 'next/link';
import { Analytics } from "@vercel/analytics/react"
const merrweather = Merriweather({
  weight: ['300', '400', '700', '900'],
  subsets: ['latin'],
  variable: '--font-charter-itc'
})


export const metadata = {
  title: 'reedboss | Empowering Writers',
  description: 'Discover a powerful and intuitive blogging platform that empowers writers to share their ideas with the world. Our application provides a seamless user experience, advanced collaboration features, and a thriving community. Join our waitlist today and be the first to experience the future of blogging.',
  alternates: {
    canonical: `${process.env.APP_URL}`
  },
  twitter: {
    card: 'summary_large_image',
    title: "reedboss | Empowering Writers",
    description: 'Discover a powerful and intuitive blogging platform that empowers writers to share their ideas with the world. Our application provides a seamless user experience, advanced collaboration features, and a thriving community. Join our waitlist today and be the first to experience the future of blogging.',
    siteId: '1467726470533754880',
    creator: '@myreedboss',
    creatorId: '1467726470533754880',
    images: [
      {
        url: 'https://reedboss.s3.us-east-2.amazonaws.com/branding/brand_logo_black.png',
        alt: 'reedboss | Empowering Writers'
      }
    ],
  },
  openGraph: {
    title: 'reedboss | Empowering Writers',
    description: 'Discover a powerful and intuitive blogging platform that empowers writers to share their ideas with the world. Our application provides a seamless user experience, advanced collaboration features, and a thriving community. Join our waitlist today and be the first to experience the future of blogging.',
    url: `${process.env.APP_URL}`,
    siteName: "reedboss",
    images: [
      {
        url: 'https://reedboss.s3.us-east-2.amazonaws.com/branding/brand_logo_black.png',
        alt: 'reedboss'
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{position: 'relative'}} className={merrweather.className}>
      <Link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
<Link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
<Link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <AppContexProvider>
        <Provider>
        <Navigation />
        {/* <FeedBack /> */}
        {children}
        <Analytics />
        </Provider>
        </AppContexProvider>
        </body>
    </html>
  )
}
