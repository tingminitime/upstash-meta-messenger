import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import LogoutButton from '@/components/LogoutButton'
import { unstable_getServerSession } from 'next-auth'
import ThemeSwitcher from './ThemeSwitcher'

async function Header() {
  const session = await unstable_getServerSession()

  if (session) {
    return (
      <header className="sticky top-0 z-50 flex items-center justify-between bg-white p-10 shadow-sm dark:bg-slate-800">
        <div className="flex items-center gap-x-4">
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
              <p className="text-lg font-bold dark:text-white">
                {session.user?.name}
              </p>
            </div>
          </div>

          <LogoutButton></LogoutButton>
        </div>

        <ThemeSwitcher></ThemeSwitcher>
      </header>
    )
  } else {
    return (
      <header className="sticky top-0 z-50 flex items-center justify-center bg-white p-10 shadow-sm dark:border-b dark:border-white dark:bg-slate-800">
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

        <div className="absolute right-6 top-1/2 -translate-y-1/2">
          <ThemeSwitcher></ThemeSwitcher>
        </div>
      </header>
    )
  }
}

export default Header
