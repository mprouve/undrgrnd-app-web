import { createContext } from 'react'

// Define Context variable to be able to pass props down the entire tree of child components
const Context = createContext({
  appLoading: true,
  // eslint-disable-next-line
  setAppLoading: (value: boolean) => {}
})

export default Context
