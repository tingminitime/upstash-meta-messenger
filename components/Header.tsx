import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import LogoutButton from '@/components/LogoutButton'
import { unstable_getServerSession } from 'next-auth'
// import { Session } from 'next-auth'

// type Props = {
//   session: Session | null
// }

// async function Header({ session }: Props) {
async function Header() {
  const session = await unstable_getServerSession()
  console.log('[Header]session:', session)

  if (session) {
    return (
      <header className="sticky top-0 z-50 flex items-center justify-between bg-white p-10 shadow-sm">
        <div className="flex space-x-2">
          <Image
            className="mx-2 rounded-full object-contain"
            height={10}
            width={50}
            src={session.user?.image || '/meta-logo.webp'}
            alt="Profile avatar"
          ></Image>

          <div>
            <p className="text-blue-400">Logged in as:</p>
            <p className="text-lg font-bold">{session.user?.name}</p>
          </div>
        </div>

        <LogoutButton></LogoutButton>
      </header>
    )
  } else {
    return (
      <header className="sticky top-0 z-50 flex items-center justify-center bg-white p-10 shadow-sm">
        <div className="flex flex-col items-center space-y-5">
          <div className="flex items-center space-x-2">
            <Image
              src="https://1000logos.net/wp-content/uploads/2021/10/logo-Meta.png"
              height={10}
              width={50}
              alt="meta logo"
            ></Image>
            <p className="text-blue-400">Welcome to Meta Messenger</p>
          </div>
          <Link
            href="/auth/signin"
            className="rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700"
          >
            Sign In
          </Link>
        </div>
      </header>
    )
  }
}

export default Header
