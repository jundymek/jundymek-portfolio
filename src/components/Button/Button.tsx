import React from "react";
import styled from "styled-components";

const Btn = styled.button`
  background-color: ${props => props.theme.primaryDark};
  border-radius: 50px;
  width: auto;
  height: 42px;
  color: #fff;
  font-size: 16px;
  margin: 0 20px 20px 20px;
  border: 2px solid black;
  text-transform: uppercase;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  z-index: 1;
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    color: ${props => props.theme.primaryDark};
    border-radius: 50px;
    border: 2px solid black;
    z-index: -2;
  }
  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    min-width: 0;
    height: 100%;
    color: ${props => props.theme.primaryDark};
    background-color: white;
    border-radius: 50px;
    border: 2px solid black;
    transition: all 0.3s;
    z-index: -1;
  }
  &:hover {
    color: ${props => props.theme.primaryDark};
    &::before {
      min-width: 100%;
    }
  }
  @media (min-width: ${props => props.theme.desktop}) {
    width: 178px;
  }
`;

interface Props {
  label: string;
  onClick?: () => void;
}

function Button({label, onClick}:Props) {
  return <Btn>{label}</Btn>;
}

export default Button;
