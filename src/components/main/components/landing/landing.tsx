import {
  MainContainer,
  TransparentOverlay,
  LogoImg,
  // Name,
  // SecondaryName,
  // PrimaryName,
} from "./styled-components/landing"

const Landing = (): JSX.Element => {
  return (
    <MainContainer
      style={{
        backgroundImage: `url(https://res.cloudinary.com/marco-prouve/image/upload/v1659817984/undrgrnd/backgrounds/graffiti-bw_hdrsl9.webp)`,
      }}>
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
