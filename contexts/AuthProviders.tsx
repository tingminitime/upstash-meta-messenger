'use client'
import React from 'react'
import { SessionProvider } from 'next-auth/react'

export function AuthProviders({ session, children }: any) {
  return <SessionProvider session={session}>{children}</SessionProvider>
}
