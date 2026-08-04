import { useEffect, useMemo, useState } from 'react'
import { ThemeProvider, CssBaseline } from '@mui/material'
import getTheme from './theme'
import { ThemeModeContext } from './themeContext'

export default function ThemeModeProvider({ children }) {
  const [mode, setMode] = useState(() => {
    if (typeof window === 'undefined') {
      return 'system'
    }

    try {
      return localStorage.getItem('themeMode') || 'system'
    } catch {
      return 'system'
    }
  })

  const [prefersDark, setPrefersDark] = useState(() => {
    if (typeof window === 'undefined' || !window.matchMedia) {
      return false
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) {
      return undefined
    }

    const mql = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = (event) => setPrefersDark(event.matches)

    if (mql.addEventListener) {
      mql.addEventListener('change', handleChange)
    } else {
      mql.addListener(handleChange)
    }

    return () => {
      if (mql.removeEventListener) {
        mql.removeEventListener('change', handleChange)
      } else {
        mql.removeListener(handleChange)
      }
    }
  }, [])

  useEffect(() => {
    try {
      localStorage.setItem('themeMode', mode)
    } catch {
      // ignore write failures
    }
  }, [mode])

  const resolvedMode = mode === 'system' ? (prefersDark ? 'dark' : 'light') : mode
  const theme = useMemo(() => getTheme(resolvedMode), [resolvedMode])

  // Apply theme background/color to document for full-page effect
  useEffect(() => {
    if (typeof window === 'undefined') return
    try {
      const bg = theme.palette?.background?.default || ''
      const text = theme.palette?.text?.primary || ''
      document.documentElement.style.background = bg
      document.body.style.background = bg
      document.body.style.color = text
    } catch {
      // ignore
    }
    return () => {
      // don't revert — leave theme applied
    }
  }, [theme])

  return (
    <ThemeModeContext.Provider value={{ mode, setMode, resolvedMode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeModeContext.Provider>
  )
}
