import styled, { keyframes } from "styled-components"

export const typing = keyframes`
  from { max-width: 0 }
  to { max-width: 200% }
`

export const Section = styled.section`
  display: block;
  margin: 0 auto;
  max-width: 478px;
  width: 100%;
`

export const Wrapper = styled.div`
  padding: 0 29px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`

export const Paragraph = styled.p<{
  $length: number
}>`
  text-align: center;
  font-size: 18px;
  font-weight: 400;
  line-height: 22px;
  overflow: hidden;
  white-space: nowrap;
  animation: ${typing} 8.5s steps(${(props) => props.$length}, end) infinite;
`

export const List = styled.ul`
  margin-top: 30px;
  padding: 0;
  width: 100%;
  list-style-type: none;
  display: flex;
  justify-content: center;
`

export const Icon = styled.img`
  width: 50px;
  height: 50px;
  padding: 20px;
  transition: transform 1s ease;

  :hover {
    transform: rotate(360deg) scale(1.2);
  }
`

export const HandWrite = styled.p`
  font-family: "Over the Rainbow", cursive;
  font-weight: bold;
  text-decoration: underline;
  margin: 0;

  @media (min-width: ${(props) => props.theme.desktop}) {
    position: absolute;
    right: -100px;
    font-size: 30px;
    transform: rotate(-70deg);
  }
`
