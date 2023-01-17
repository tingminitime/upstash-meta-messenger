import './globals.css'
import Header from '@/components/Header'
import { ThemeProvider } from '@/contexts/ThemeProviders'

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body className="dark:bg-slate-900">
        <ThemeProvider>
          <Header></Header>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
