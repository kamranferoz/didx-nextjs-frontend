import { Raleway } from 'next/font/google'
import './globals.css'

const raleway = Raleway({
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})
 
export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}
 
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={raleway.className}>
      <body>
        {children}
      </body>
    </html>
  )
}
