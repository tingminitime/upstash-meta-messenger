import './globals.css'
import Header from '@/components/Header'
// import { unstable_getServerSession } from 'next-auth'

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // const session = unstable_getServerSession()

  return (
    <html lang="en">
      <head />
      <body>
        {/* <Header session={session}></Header> */}
        <Header></Header>
        {children}
      </body>
    </html>
  )
}
