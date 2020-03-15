import React from "react";
import styled, { css } from "styled-components";

interface NavProps {
  isOpen: boolean;
}
const HamburgerBtn = styled.button<NavProps>`
  display: block;

  @media (min-width: 800px) {
    display: none;
  }

  position: absolute;
  width: 1.83rem;
  height: 20px;
  right: 7%;
  top: 3.61rem;
  background: transparent;
  border: 0;
  border-top: 4px solid black;
  transition: transform 0.3s linear;
  z-index: 1;
  outline: none;
  &::before,
  &::after {
    position: absolute;
    content: "";
    width: 100%;
    top: 0;
    left: 0;
    border-top: 0.213rem solid black;
    transform: translateY(4px);
  }

  &::after {
    transform: translateY(12px);
  }

  ${props =>
    props.isOpen &&
    css`
      transform: rotate(45deg) scale(0.9);
      border: 0;
      &::before {
        border-color: red;
      }

      &::after {
        transform: rotate(90deg) translateX(5px);
        border-color: red;
      }
    `}
`;

interface Props {
  isOpen: boolean;
  setIsOpen: (value: React.SetStateAction<boolean>) => void;
}

function Hamburger({ isOpen, setIsOpen }: Props) {
  const handleClick = () => {
    setIsOpen(prevState => !prevState);
  };

  return <HamburgerBtn isOpen={isOpen} type="button" onClick={handleClick}></HamburgerBtn>;
}

export default Hamburger;
