'use client'
import React from 'react'
import { SessionProvider } from 'next-auth/react'
import { Session } from 'next-auth'

type AuthProviderProps = {
  session: Session | null
  children: React.ReactNode
}

export function AuthProviders({ session, children }: AuthProviderProps) {
  return <SessionProvider session={session}>{children}</SessionProvider>
}
