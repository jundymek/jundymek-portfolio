import styled from "styled-components";

export const Button = styled.button`
  background-color: ${props => props.theme.primaryDark};
  min-width: 100px;
  height: 42px;
  color: #fff;
  font-size: 16px;
  margin: 0 20px;
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
    left: -2px;
    width: calc(100% - 2px);
    height: calc(100% - 4px);
    color: ${props => props.theme.primaryDark};
    border: 2px solid white;
    z-index: -2;
  }
  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: -2px;
    min-width: 0;
    max-width: calc(100% - 2px);
    height: calc(100% - 4px);
    color: ${props => props.theme.primaryDark};
    background-color: white;
    border: 2px solid white;
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

