// import config from '../../../../config'
import { MainContainer, Heading, Message, Button } from './styled-components/error-fallback'

interface PropsInterface {
  error: Error
  resetErrorBoundary: any
}

const ErrorFallback = ({ error, resetErrorBoundary }: PropsInterface): JSX.Element => {
  return (
    <MainContainer role="alert">
      <Heading>Something Went Wrong</Heading>
      <Message>{error.message}</Message>
      <Button onClick={resetErrorBoundary}>Try Again</Button>
    </MainContainer>
  )
}

export default ErrorFallback
