'use client'
import React from 'react'
import { signOut } from 'next-auth/react'

function LogoutButton() {
  return (
    <button
      type="button"
      className="rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700"
      onClick={() => signOut()}
    >
      Sign Out
    </button>
  )
}

export default LogoutButton
