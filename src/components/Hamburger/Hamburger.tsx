import React from "react";
import styled, { css } from "styled-components";

interface NavProps {
  isOpen: boolean;
}

const HamburgerBtn = styled.button<NavProps>`
  position: absolute;
  width: 44px;
  height: 50px;
  right: 10px;
  top: 40px;
  z-index: 1;
  border: none;
  background: transparent;
  cursor: pointer;
  outline: ${props => props.isOpen && "none"};
`;

const HamburgerBars = styled.div<NavProps>`
  display: block;
  @media (min-width: ${props => props.theme.desktop}) {
    display: none;
  }

  position: relative;
  width: 30px;
  height: 20px;
  border-top: 4px solid black;
  transition: transform 0.3s linear;
  &::before,
  &::after {
    position: absolute;
    content: "";
    width: 100%;
    top: 0;
    left: 0;
    border-top: 4px solid black;
    transform: translateY(4px);
    transition: all 1s ease;
  }

  &::after {
    transform: translateY(-12px);
  }

  ${props =>
    props.isOpen &&
    css`
      transform: translateX(0px);
      border: 0;
      &::before {
        transform: rotate(-314deg) translateX(-4px) translateY(0px);
      }

      &::after {
        transform: rotate(-228deg) translateY(4px) translateX(0px);
        border-color: ${props => props.theme.primaryBlack};
      }
    `}
`;

const Label = styled.span<NavProps>`
  position: absolute;
  margin: 0;
  padding: 0;
  top: 12px;
  right: ${props => (props.isOpen ? "4px" : "2px")};
`;

interface Props {
  isOpen: boolean;
  setIsOpen: (value: React.SetStateAction<boolean>) => void;
}

function Hamburger({ isOpen, setIsOpen }: Props) {
  const handleClick = () => {
    setIsOpen(prevState => !prevState);
  };

  return (
    <HamburgerBtn isOpen={isOpen} type="button" onClick={handleClick}>
      <HamburgerBars isOpen={isOpen}>
        <Label isOpen={isOpen}>Menu</Label>
      </HamburgerBars>
    </HamburgerBtn>
  );
}

export default Hamburger;
