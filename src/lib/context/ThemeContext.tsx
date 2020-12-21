import React from 'react'
import defaultTheme from '../themes/default'

interface ThemeContextInterface {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  theme: any
}

export const ThemeContext = React.createContext<ThemeContextInterface>({ theme: defaultTheme })

interface ThemeProviderProps {
  children: React.ReactNode
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value?: any
}

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children, value }) => <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
