'use client'
import React, { useEffect, useState } from 'react'
import { useTheme } from '@/contexts/ThemeProviders'
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md'

function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()
  const [isSSR, setIsSSR] = useState(true)
  console.log('theme', theme)

  useEffect(() => {
    setIsSSR(false)
  }, [])

  return (
    <button
      type="button"
      className="h-10 w-10 rounded-full bg-slate-100 p-2 transition-all hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-700"
      onClick={() => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
      }}
    >
      {!isSSR && theme === 'light' && (
        <MdOutlineLightMode className="h-6 w-6 fill-slate-900"></MdOutlineLightMode>
      )}
      {!isSSR && theme === 'dark' && (
        <MdOutlineDarkMode className="h-6 w-6 fill-slate-100"></MdOutlineDarkMode>
      )}
    </button>
  )
}

export default ThemeSwitcher
