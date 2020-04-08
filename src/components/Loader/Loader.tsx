import React from "react";
import styled, { keyframes } from "styled-components";
import { TerminalLookMixin } from "../../styles/styledComponents";

export const scaling = keyframes`
  0%   {transform: scaleY(1);}
  100% {transform: scaleY(1.5);}
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  background: black;
  width: 90%;
  box-shadow: 6px 4px 4px -1px rgba(0, 0, 0, 0.38);
  background: linear-gradient(
      216deg,
      rgba(77, 77, 77, 0.05) 0%,
      rgba(77, 77, 77, 0.05) 25%,
      rgba(42, 42, 42, 0.05) 25%,
      rgba(42, 42, 42, 0.05) 38%,
      rgba(223, 223, 223, 0.05) 38%,
      rgba(223, 223, 223, 0.05) 75%,
      rgba(36, 36, 36, 0.05) 75%,
      rgba(36, 36, 36, 0.05) 100%
    ),
    linear-gradient(
      44deg,
      rgba(128, 128, 128, 0.05) 0%,
      rgba(128, 128, 128, 0.05) 34%,
      rgba(212, 212, 212, 0.05) 34%,
      rgba(212, 212, 212, 0.05) 57%,
      rgba(25, 25, 25, 0.05) 57%,
      rgba(25, 25, 25, 0.05) 89%,
      rgba(135, 135, 135, 0.05) 89%,
      rgba(135, 135, 135, 0.05) 100%
    ),
    linear-gradient(
      241deg,
      rgba(55, 55, 55, 0.05) 0%,
      rgba(55, 55, 55, 0.05) 14%,
      rgba(209, 209, 209, 0.05) 14%,
      rgba(209, 209, 209, 0.05) 60%,
      rgba(245, 245, 245, 0.05) 60%,
      rgba(245, 245, 245, 0.05) 69%,
      rgba(164, 164, 164, 0.05) 69%,
      rgba(164, 164, 164, 0.05) 100%
    ),
    linear-gradient(
      249deg,
      rgba(248, 248, 248, 0.05) 0%,
      rgba(248, 248, 248, 0.05) 32%,
      rgba(148, 148, 148, 0.05) 32%,
      rgba(148, 148, 148, 0.05) 35%,
      rgba(202, 202, 202, 0.05) 35%,
      rgba(202, 202, 202, 0.05) 51%,
      rgba(181, 181, 181, 0.05) 51%,
      rgba(181, 181, 181, 0.05) 100%
    ),
    linear-gradient(92deg, hsl(214, 0%, 11%), hsl(214, 0%, 11%));
  @media (min-width: ${props => props.theme.desktop}) {
    width: 100%;
  }
`;

const Paragraph = styled.span``;

const Letter = styled.div`
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
`;

function Loader() {
  return (
    <Wrapper>
      <Paragraph>
        <Letter>L</Letter>
        <Letter>O</Letter>
        <Letter>A</Letter>
        <Letter>D</Letter>
        <Letter>I</Letter>
        <Letter>N</Letter>
        <Letter>G</Letter>
        <Letter>.</Letter>
        <Letter>.</Letter>
        <Letter>.</Letter>
      </Paragraph>
    </Wrapper>
  );
}

export default Loader;
