import { useNavigate } from "react-router-dom"
import {
  MainContainer,
  TextContainer,
  Text,
  ReturnContainer,
  ReturnButton,
} from "./styled-components/page-not-found"
import "./scss/glitch-1.scss"

const PageNotFound = (): JSX.Element => {
  const navigate = useNavigate()

  const handleClickReturn = (): void => {
    navigate("/")
  }

  return (
    <MainContainer>
      <TextContainer>
        <Text className="glitch" data-text="404">
          404
        </Text>

        <ReturnContainer>
          <ReturnButton onClick={handleClickReturn}>Return Home</ReturnButton>
        </ReturnContainer>
      </TextContainer>
    </MainContainer>
  )
}

export default PageNotFound
