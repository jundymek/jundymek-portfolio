import styled, { css } from "styled-components"
import { HamburgerMixin } from "../../styles/styledComponents"

export const HamburgerBtn = styled.button<{
  isFixed: boolean
  isOpen: boolean
}>`
  position: ${(props) => (props.isFixed && !props.isOpen ? "static" : "absolute")};
  margin: 0;
  padding: 10px 0 0 0;
  width: 44px;
  height: 50px;
  right: 14px;
  top: 10px;
  z-index: 2;
  border: none;
  margin-right: ${(props) => (props.isFixed && !props.isOpen ? "10px" : "0")};
  background: transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  outline: ${(props) => props.isOpen && "none"};

  @media (min-width: ${(props) => props.theme.desktop}) {
    display: none;
  }
`

export const HamburgerBars = styled.div<{
  isFixed: boolean
  isOpen: boolean
}>`
  display: block;
  position: relative;
  width: 30px;
  height: 20px;
  border-top: 4px solid ${(props) => props.isFixed && !props.isOpen && "white"};
  transition: transform 0.3s linear;
  &::before,
  &::after {
    position: absolute;
    content: "";
    width: 100%;
    top: 0;
    left: 0;
    border-top: 4px solid ${(props) => props.isFixed && !props.isOpen && "white"};
    transform: translateY(4px);
    transition: all 1s ease;
  }

  &::after {
    transform: translateY(-12px);
  }

  ${(props) =>
    props.isOpen &&
    css`
      transform: translateX(0px);
      border: 0;
      &::before {
        transform: rotate(-314deg) translateX(0px) translateY(0px);
        ${HamburgerMixin}
      }

      &::after {
        transform: rotate(-228deg) translateY(0px) translateX(0px);
        ${HamburgerMixin}
      }
    `}
`
