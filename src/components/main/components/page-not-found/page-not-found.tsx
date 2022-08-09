import { useNavigate } from 'react-router-dom'
import {
  MainContainer,
  TransparentOverlay,
  TextContainer,
  Text,
  ReturnContainer,
  ReturnButton
} from './styled-components/page-not-found'
import './scss/glitch-2.scss'

const PageNotFound = (): JSX.Element => {
  const navigate = useNavigate()

  const handleClickReturn = (): void => {
    navigate('/')
  }

  return (
    <MainContainer
      className="glitch-404"
      // style={{
      //   backgroundImage: `url(https://res.cloudinary.com/marco-prouve/image/upload/v1659817984/undrgrnd/backgrounds/graffiti-bw_hdrsl9.webp)`,
      // }}
    >
      <div className="glitch-item-404" />
      <div className="glitch-item-404" />
      <div className="glitch-item-404" />
      <div className="glitch-item-404" />
      <div className="glitch-item-404" />

      <TransparentOverlay>
        <TextContainer>
          <Text className="glitch-404" data-text="404">
            404
          </Text>

          <ReturnContainer>
            <ReturnButton onClick={handleClickReturn}>Return Home</ReturnButton>
          </ReturnContainer>
        </TextContainer>
      </TransparentOverlay>
    </MainContainer>
  )
}

export default PageNotFound
