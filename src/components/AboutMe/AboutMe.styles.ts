import styled from "styled-components"
import { GreySection, TerminalLookMixin } from "../../styles/styledComponents"

export const AboutSection = styled(GreySection)`
  margin-top: 44px;
  @media (min-width: ${(props) => props.theme.desktop}) {
    min-height: 460px;
    scroll-margin-top: 400px;
  }
`

export const Wrapper = styled.div`
  padding: 0 29px;
  max-width: 600px;
  position: relative;
`

export const Paragraph = styled.p`
  text-align: center;
  margin-bottom: 38px;
  font-size: 20px;
  font-weight: 400;
  line-height: 20px;
  font-family: "Notable", sans-serif;
  font-family: "VT323", monospace;
`

export const StrikedParagraph = styled.span`
  text-decoration: line-through;
`

export const Code = styled.code`
  font-size: 14px;
  margin: 0 10px;
  background-color: black;
  ${TerminalLookMixin}
`
