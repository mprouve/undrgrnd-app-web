import styled from 'styled-components'

export const MainContainer = styled.div`
  display: block;
  width: 100%;
  padding: 2rem;
`

export const Heading = styled.p`
  display: block;
  width: 100%;
  text-align: center;
  font-size: 1.4rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.text.body};
`

export const Message = styled.p`
  display: block;
  width: 100%;
  margin-top: 1rem;
  text-align: center;
  font-size: 1rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.text.subheading};
`

export const Button = styled.p`
  display: block;
  width: 100%;
  margin-top: 1rem;
  text-align: center;
  font-size: 1rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.text.body};
  cursor: pointer;
  transform: text-decoration 0.2s ease-in-out;

  &:hover {
    text-decoration: underline;
  }
`
