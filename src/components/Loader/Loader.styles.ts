import styled, { keyframes } from "styled-components"
import { BackgroundMixin, TerminalLookMixin } from "../../styles/styledComponents"

export const scaling = keyframes`
  0%   {transform: scaleY(1);}
  100% {transform: scaleY(1.5);}
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  background: black;
  width: 90%;
  ${BackgroundMixin};
  @media (min-width: ${(props) => props.theme.desktop}) {
    width: 100%;
  }
`

export const Paragraph = styled.span``

export const Letter = styled.div`
  display: inline-block;
  ${TerminalLookMixin};
  animation: ${scaling} 1s alternate infinite ease-in;
  &:nth-of-type(1) {
    font-size: ${30 + 15 * Math.random()}px;
  }
  &:nth-of-type(2) {
    font-size: ${30 + 15 * Math.random()}px;
  }
  &:nth-of-type(3) {
    font-size: ${30 + 15 * Math.random()}px;
  }
  &:nth-of-type(4) {
    font-size: ${30 + 15 * Math.random()}px;
  }
  &:nth-of-type(5) {
    font-size: ${30 + 15 * Math.random()}px;
  }
  &:nth-of-type(6) {
    font-size: ${30 + 15 * Math.random()}px;
  }
  &:nth-of-type(7) {
    font-size: ${30 + 15 * Math.random()}px;
  }
  &:nth-of-type(8) {
    animation: none;
  }
  &:nth-of-type(9) {
    animation: none;
  }
  &:nth-of-type(10) {
    animation: none;
  }
`
