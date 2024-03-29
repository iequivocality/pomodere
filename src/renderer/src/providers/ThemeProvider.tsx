import { createContext, FC, useState, type ReactNode } from 'react'

export type Theme = 'light' | 'dark'

export interface ThemeContextType {
  scheme: Theme
  changeScheme: (scheme: Theme) => void
}

export const ThemeContext = createContext<ThemeContextType>({
  scheme: 'light',
  changeScheme: () => {}
})

interface ThemeProviderProps {
  children: ReactNode
}

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const [Theme, setTheme] = useState<Theme>('light')

  return (
    <ThemeContext.Provider
      value={{
        scheme: Theme,
        changeScheme: (scheme: Theme) => {
          setTheme(scheme)
        }
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}
