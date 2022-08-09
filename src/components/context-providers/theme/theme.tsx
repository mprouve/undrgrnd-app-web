import React, { useState } from 'react'
import Context from './context/context'

type Props = {
  children?: React.ReactNode
}

// Props:
// children --> (Child JSX Elements
const ThemeContextProvider = ({ children }: Props): JSX.Element => {
  const [theme, setTheme] = useState('dark')

  return <Context.Provider value={{ theme, setTheme }}>{children}</Context.Provider>
}

export default ThemeContextProvider
