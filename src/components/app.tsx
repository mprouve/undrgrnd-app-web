import { useContext } from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '../res/global-styles'
import { lightTheme, darkTheme } from '../res/theme'
import AppLoadingContext from './context-providers/app-loading/context/context'
import ThemeContext from './context-providers/theme/context/context'
import Main from './main/main'

const App = (): JSX.Element => {
  const { appLoading } = useContext(AppLoadingContext)
  const { theme } = useContext(ThemeContext)
  const selectedTheme = theme === 'light' ? lightTheme : darkTheme

  return (
    <ThemeProvider theme={selectedTheme}>
      <GlobalStyles />

      {/* <Loader /> */}

      {!appLoading && <Main />}
    </ThemeProvider>
  )
}

export default App
