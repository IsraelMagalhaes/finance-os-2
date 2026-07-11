import PropTypes from 'prop-types'
import { useEffect, useMemo, useState } from 'react'

const THEME_STORAGE_KEY = 'finance-os:theme'
const validThemes = new Set(['dark', 'light', 'system'])

import { ThemeContext } from './theme-context.js'

function getStoredTheme() {
  if (typeof window === 'undefined') return 'dark'

  const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY)
  return validThemes.has(storedTheme) ? storedTheme : 'dark'
}

function resolveTheme(theme) {
  if (theme !== 'system') return theme

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getStoredTheme)
  const [resolvedTheme, setResolvedTheme] = useState(() => resolveTheme(getStoredTheme()))

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

    const applyTheme = () => {
      const nextResolvedTheme = resolveTheme(theme)
      document.documentElement.dataset.theme = nextResolvedTheme
      setResolvedTheme(nextResolvedTheme)
      window.localStorage.setItem(THEME_STORAGE_KEY, theme)
    }

    applyTheme()
    mediaQuery.addEventListener('change', applyTheme)

    return () => mediaQuery.removeEventListener('change', applyTheme)
  }, [theme])

  const value = useMemo(
    () => ({
      theme,
      resolvedTheme,
      setTheme,
    }),
    [resolvedTheme, theme],
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
}
