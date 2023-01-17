import React, { Dispatch, SetStateAction } from 'react'

export type Message = {
  id: string
  message: string
  created_at: number
  username: string
  profilePic: string
  email: string
}

export type ThemeContextType = {
  theme: string
  setTheme: Dispatch<SetStateAction<string>>
}

export type ThemeProviderProps = {
  initialTheme?: string
  children: React.ReactNode
}
