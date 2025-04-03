import './globals.css'
import type { Metadata } from 'next'
import Script from 'next/script'
import { Inter, Poppins } from 'next/font/google'
import dynamic from 'next/dynamic'

// Use dynamic import for client components
const SidebarMenuWrapper = dynamic(
  () => import('./components/SidebarWrapper'),
  { ssr: false }
)

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
})

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'Network Navigator',
  description: 'Your professional digital presence',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} scroll-smooth`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <style dangerouslySetInnerHTML={{ __html: `
          /* Ensure basic styles are applied */
          body {
            margin: 0;
            padding: 0;
            font-family: var(--font-inter), sans-serif;
          }
          .main-font {
            font-family: var(--font-inter), sans-serif;
          }
          .heading-font {
            font-family: var(--font-poppins), sans-serif;
          }
        ` }} />
      </head>
      <body className="min-h-screen font-sans antialiased">
        <SidebarMenuWrapper>
          {children}
        </SidebarMenuWrapper>
        <Script id="debug-script" src="/debug.js" strategy="beforeInteractive" />
      </body>
    </html>
  )
} 