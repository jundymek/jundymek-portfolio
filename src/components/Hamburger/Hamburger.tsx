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
  z-index: 2;
  border: none;
  background: transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  outline: ${props => props.isOpen && "none"};
  @media (min-width: ${props => props.theme.desktop}) {
    display: none;
  }
`;

const HamburgerBars = styled.div<NavProps>`
  display: block;
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
        transform: rotate(-314deg) translateX(0px) translateY(0px);
      }

      &::after {
        transform: rotate(-228deg) translateY(0px) translateX(0px);
        border-color: ${props => props.theme.primaryBlack};
      }
    `}
`;

const Label = styled.span<NavProps>`
  margin-top: ${props => (props.isOpen ? "-4px" : "-8px")};
  font-size: 10px;
  color: ${props => props.theme.primaryGray};
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
      <HamburgerBars isOpen={isOpen}></HamburgerBars>
      <Label isOpen={isOpen}>Menu</Label>
    </HamburgerBtn>
  );
}

export default Hamburger;
