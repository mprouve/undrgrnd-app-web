import React, { useState } from 'react'
import Context from './context/context'

type Props = {
  children?: React.ReactNode
}

// Props:
// children --> (Child JSX Elements
const AppLoadingContextProvider = ({ children }: Props): JSX.Element => {
  const [appLoading, setAppLoading] = useState(false)

  return <Context.Provider value={{ appLoading, setAppLoading }}>{children}</Context.Provider>
}

export default AppLoadingContextProvider
