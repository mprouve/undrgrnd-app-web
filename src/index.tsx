import ReactDOM from 'react-dom/client'
import { GlobalStyles } from './res/global-styles'
import AppLoadingContextProvider from './components/context-providers/app-loading/app-loading.js'
import App from './components/app'
// import reportWebVitals from './report-web-vitals'
import config from './config'

config.debug && console.log('[VITE_NODE_ENV]: ', import.meta.env.VITE_NODE_ENV)
config.debug
  ? import.meta.env.PROD
    ? console.log('[ENVIRONMENT]: production')
    : console.log('[ENVIRONMENT]: development')
  : null
config.debug && console.log('[MODE]: ', import.meta.env.MODE)
config.debug && console.log('[BASE_URL]: ', import.meta.env.BASE_URL)
config.debug && console.log('[IS_SSR]: ', import.meta.env.SSR)

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <AppLoadingContextProvider>
    <GlobalStyles />
    <App />
  </AppLoadingContextProvider>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log)