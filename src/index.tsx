import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { logger } from './util/classes/console-logger'
import ThemeContextProvider from './components/context-providers/theme/theme'
import AppLoadingContextProvider from './components/context-providers/app-loading/app-loading'
import App from './components/app'
import config from './config'
// import reportWebVitals from './report-web-vitals'

if (config.debug) {
  if (import.meta.env.PROD) {
    logger.log('[ENVIRONMENT]: production')
  } else {
    logger.log('[ENVIRONMENT]: development')
  }

  logger.log('[VITE_NODE_ENV]: ', import.meta.env.VITE_NODE_ENV)
  logger.log('[MODE]: ', import.meta.env.MODE)
  logger.log('[BASE_URL]: ', import.meta.env.BASE_URL)
  logger.log('[IS_SSR]: ', import.meta.env.SSR)
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <BrowserRouter>
    <ThemeContextProvider>
      <AppLoadingContextProvider>
        <App />
      </AppLoadingContextProvider>
    </ThemeContextProvider>
  </BrowserRouter>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log)
