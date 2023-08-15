import Header from './layout-components/Header'
import Footer from './layout-components/Footer'
import Head from 'next/head'
import './globals.css'
import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core"

config.autoAddCss = false
 
export const metadata = {
  title: 'Global Virtual Phone Numbers with - DIDX',
  description: 'Generated by create next app',
}
 
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:opsz,wght@6..12,300;6..12,400;6..12,500;6..12,600;6..12,700;6..12,800;6..12,900&family=Raleway:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
