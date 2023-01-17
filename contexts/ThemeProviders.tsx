'use client'
import React, { createContext, useContext, useEffect, useState } from 'react'
import { ThemeContextType, ThemeProviderProps } from '@/typing'

function getInitialTheme(): string {
  if (typeof window !== 'undefined' && window?.localStorage) {
    const themeFromLocalStorage = localStorage.getItem('theme')
    if (typeof themeFromLocalStorage === 'string') {
      return themeFromLocalStorage
    }

    const userPrefersColorScheme = window.matchMedia(
      '(prefers-color-scheme: dark)'
    )
    if (userPrefersColorScheme.matches) {
      return 'dark'
    }
  }

  return 'light'
}

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
)

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  initialTheme,
  children,
}) => {
  const [theme, setTheme] = useState(getInitialTheme)

  const rawSetTheme = (rawTheme: string) => {
    const root = window.document.documentElement
    const isDark = rawTheme === 'dark'

    root.classList.remove(isDark ? 'light' : 'dark')
    root.classList.add(rawTheme)

    localStorage.setItem('theme', rawTheme)
  }

  if (initialTheme) rawSetTheme(initialTheme)

  useEffect(() => {
    rawSetTheme(theme)
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  return useContext(ThemeContext) || { theme: '', setTheme: () => {} }
}
