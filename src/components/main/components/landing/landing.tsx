import {
  MainContainer,
  TransparentOverlay,
  LogoImg,
  // Name,
  // SecondaryName,
  // PrimaryName,
} from "./styled-components/landing"
import "./scss/glitch-2.scss"

const Landing = (): JSX.Element => {
  return (
    <MainContainer
      className="glitch"
      // style={{
      //   backgroundImage: `url(https://res.cloudinary.com/marco-prouve/image/upload/v1659817984/undrgrnd/backgrounds/graffiti-bw_hdrsl9.webp)`,
      // }}
    >
      <div className="glitch__item" />
      <div className="glitch__item" />
      <div className="glitch__item" />
      <div className="glitch__item" />
      <div className="glitch__item" />

      <TransparentOverlay>
        <LogoImg
          src="https://res.cloudinary.com/marco-prouve/image/upload/v1659820387/undrgrnd/logo/undrgrnd-logo-transparent-1300-641_x8f7zn.webp"
          alt="UNDRGRND Logo"
          width="1300"
          height="641"
          loading="lazy"
        />

        {/* <Name>
          <PrimaryName className="glitch-landing" data-text="UNDRGRND">
            <SecondaryName className="glitch-landing" data-text="THE">
              THE
            </SecondaryName>
            UNDRGRND
          </PrimaryName>
        </Name> */}
      </TransparentOverlay>
    </MainContainer>
  )
}

export default Landing
