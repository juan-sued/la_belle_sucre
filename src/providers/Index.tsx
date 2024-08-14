'use client'
import { IntlProvider } from 'react-intl'

import { ThemeProvider } from 'next-themes'
import { ReactNode } from 'react'

export default function Providers({ children }: { children: ReactNode }) {
  console.error = (message) => {
    if (message.includes('Extra attributes from the server: class, style')) {
      // Ignore
    }
  }
  return (
    <ThemeProvider defaultTheme="light" attribute="class">
      <IntlProvider locale="pt-BR" defaultLocale="pt-BR">
        {children}
      </IntlProvider>
    </ThemeProvider>
  )
}
