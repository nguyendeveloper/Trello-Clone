'use client'

import type { ReactNode } from 'react'

import ThemeProvider from '@/core/provider/theme-provider'

interface Props {
  children: ReactNode
}

export default function RootProvider({ children }: Props) {
  return (
    <ThemeProvider disableTransitionOnChange defaultTheme="light" attribute="class" enableSystem>
      {children}
    </ThemeProvider>
  )
}
