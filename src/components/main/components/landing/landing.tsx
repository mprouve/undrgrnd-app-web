import { MainContainer, Name, SecondaryName, PrimaryName } from './styled-components/landing'
import './scss/glitch-1.scss'

const Landing = () => {
  return (
    <MainContainer>
      <Name>
        <PrimaryName className="glitch" data-text="UNDRGRND">
          <SecondaryName className="glitch" data-text="THE">
            THE
          </SecondaryName>
          UNDRGRND
        </PrimaryName>
      </Name>
    </MainContainer>
  )
}

export default Landing
