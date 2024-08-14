'use client'

import { useTheme } from 'next-themes'
import SwitcherSunAndMoon from './SwitcherSunAndMoon/SwitcherSunAndMoon'

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()
  function alterTheme() {
    if (theme === 'dark') {
      setTheme('light')
    } else {
      setTheme('dark')
    }
  }

  return <SwitcherSunAndMoon onChange={alterTheme} />
}
