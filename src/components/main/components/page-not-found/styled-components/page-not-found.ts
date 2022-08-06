import styled from "styled-components"

export const MainContainer = styled.div`
  background-color: #000;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: block;
  width: 100%;
  height: 100%;
`

export const TransparentOverlay = styled.div`
  background-color: #000000aa;
  display: block;
  width: 100%;
  height: 100%;
  position: relative;
`

export const TextContainer = styled.div`
  display: block;
  width: 100%;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(0, -50%);
`

export const Text = styled.h1`
  display: inline-block;
  white-space: pre-line;
  word-break: break-word;
  font-size: 15rem;
  line-height: 15rem;
  color: white;
  position: relative;

  @media (max-width: 1000px) {
    font-size: 12rem;
    line-height: 12rem;
  }

  @media (max-width: 700px) {
    font-size: 9rem;
    line-height: 9rem;
  }

  @media (max-width: 500px) {
    font-size: 7rem;
    line-height: 7rem;
  }
`

export const ReturnContainer = styled.p`
  display: block;
  text-align: center;
`

export const ReturnButton = styled.span`
  display: inline-block;
  border-bottom: 2px solid #ffffff00;
  white-space: pre-line;
  word-break: break-word;
  font-size: 1.1rem;
  line-height: 1.1rem;
  color: white;
  position: relative;
  transition: border-color 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    border-color: #ffffffff;
  }

  @media (max-width: 1000px) {
    font-size: 1.1rem;
    line-height: 1.1rem;
  }

  @media (max-width: 700px) {
    font-size: 1.1rem;
    line-height: 1.1rem;
  }

  @media (max-width: 500px) {
    font-size: 1rem;
    line-height: 1rem;
  }
`
