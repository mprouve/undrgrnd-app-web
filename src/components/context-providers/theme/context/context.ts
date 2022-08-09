import { createContext } from 'react'

type Theme = 'light' | 'dark'

// Define Context variable to be able to pass props down the entire tree of child components
const Context = createContext({
  theme: 'dark',
  setTheme: (value: Theme) => {}
})

export default Context
