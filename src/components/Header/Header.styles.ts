import styled from "styled-components"
import { TerminalLookMixin } from "../../styles/styledComponents"

export const StyledHeader = styled.header`
  margin-top: 30px;
  position: relative;

  @media (min-width: ${(props) => props.theme.desktop}) {
  }
`

export const Wrapper = styled.div`
  @media (min-width: ${(props) => props.theme.desktop}) {
    display: flex;
    justify-content: space-between;
    margin-bottom: 34px;
    align-items: flex-end;
  }
`

export const TitleWrapper = styled.div`
  position: relative;
  display: inline-block;
`

export const Title = styled.h1`
  width: 155px;
  height: 100px;
  margin: 0;
  padding: 0;
  font-weight: 400;
  font-size: 47px;
  line-height: 43px;
  margin-bottom: 23px;

  @media (min-width: ${(props) => props.theme.desktop}) {
    line-height: 46px;
  }
`

export const Subtitle = styled.p`
  position: absolute;
  margin: 0;
  bottom: 2px;
  right: -26px;
  font-family: "Over the Rainbow", cursive;

  @media (min-width: ${(props) => props.theme.desktop}) {
    bottom: -5px;
    right: -34px;
  }
`

export const ParagraphWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 32px;
  margin-top: 32px;
  margin-right: 36px;
`

export const Paragraph = styled.p`
  padding: 0;
  margin: 0;
  line-height: 22px;
  font-weight: 400;
`

export const LangContainer = styled.div`
  display: none;
  transform: rotate(-90deg);
  margin-right: -14px;
  align-self: center;

  @media (min-width: ${(props) => props.theme.desktop}) {
    display: block;
  }
`

export const LangButton = styled.button<{
  $isActive: boolean
}>`
  margin: 0;
  padding: 0;
  cursor: pointer;
  font-style: italic;
  font-size: 18px;
  font-family: "VT323", monospace;
  color: ${(props) => !props.$isActive && props.theme.primaryGray};
  font-weight: 500;
  text-decoration: ${(props) => (props.$isActive ? "underline" : "none")};
  background: none;
  border: none;
`

export const CyclerWrapper = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  text-align: center;
  ${TerminalLookMixin};

  @media (min-width: ${(props) => props.theme.desktop}) {
    font-size: 24px;
  }
`
