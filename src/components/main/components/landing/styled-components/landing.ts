import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.background.primary};
  // background-repeat: no-repeat;
  // background-position: center;
  // background-size: cover;
  display: block;
  width: 100%;
  height: 100%;
  position: relative;
`

export const TransparentOverlay = styled.div`
  background-color: #000000aa;
  display: block;
  width: 100%;
  height: 100%;
  position: relative;
`

export const LogoImg = styled.img`
  display: block;
  width: 75%;
  max-width: 1000px;
  height: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

// export const Name = styled.div`
//   display: block;
//   width: 100%;
//   text-align: center;
//   position: absolute;
//   top: 50%;
//   left: 0;
//   transform: translate(0, -50%);
// `

// export const SecondaryName = styled.span`
//   display: inline-block;
//   text-align: center;
//   white-space: pre-line;
//   word-break: break-word;
//   font-size: 3rem;
//   line-height: 3rem;
//   color: white;
//   position: absolute;
//   top: -2rem;
//   left: 0.7rem;

//   @media (max-width: 1300px) {
//     font-size: 2.4rem;
//     line-height: 2.4rem;
//     top: -1.5rem;
//     left: 0.6rem;
//   }

//   @media (max-width: 1000px) {
//     font-size: 1.8rem;
//     line-height: 1.8rem;
//     top: -1rem;
//     left: 0.4rem;
//   }

//   @media (max-width: 800px) {
//     font-size: 1.2rem;
//     line-height: 1.2rem;
//     top: -0.8rem;
//     left: 0.3rem;
//   }

//   @media (max-width: 500px) {
//     font-size: 1.1rem;
//     line-height: 1.1rem;
//     top: -0.8rem;
//     left: 0.2rem;
//   }
// `

// export const PrimaryName = styled.h1`
//   display: inline-block;
//   white-space: pre-line;
//   word-break: break-word;
//   font-size: 15rem;
//   line-height: 15rem;
//   color: white;
//   position: relative;

//   @media (max-width: 1300px) {
//     font-size: 12rem;
//     line-height: 12rem;
//   }

//   @media (max-width: 1000px) {
//     font-size: 9rem;
//     line-height: 9rem;
//   }

//   @media (max-width: 800px) {
//     font-size: 6rem;
//     line-height: 6rem;
//   }

//   @media (max-width: 500px) {
//     font-size: 4rem;
//     line-height: 4rem;
//   }
// `
