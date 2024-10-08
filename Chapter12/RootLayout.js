import './globals.css'
import { Dosis } from 'next/font/google'
import StyledComponentsRegistry from './lib/registry'

const dosis = Dosis({ subsets: ['latin'] })

export const metadata = {
  title: 'Resturant App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <StyledComponentsRegistry>
        <body className={dosis.className}>{children}</body>
      </StyledComponentsRegistry>
    </html>
  )
}
