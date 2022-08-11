// import config from '../../config'
import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary'
import ErrorFallback from './components/error-fallback/error-fallback'

interface PropsInterface {
  children: JSX.Element
}

const ErrorBoundary = ({ children }: PropsInterface): JSX.Element => {
  return (
    <ReactErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => {}}
      onError={() => {}}
      resetKeys={[]}>
      {children}
    </ReactErrorBoundary>
  )
}

export default ErrorBoundary
