import React, { useContext } from "react";
import styled, { css } from "styled-components";
import { LanguageContext } from "../../App";
import { TerminalLookMixin } from "../../styles/styledComponents";

interface NavProps {
  isFixed?: boolean;
}

const Nav = styled.nav<NavProps>`
  height: 100%;
  max-width: 1440px;
  background: white;
  display: block;
  width: 100%;
  margin: 0 auto;
  height: auto;
  @media (max-width: ${(props) => props.theme.desktop}) {
    display: none;
  }
  ${(props) =>
    props.isFixed &&
    css`
      position: fixed;
      top: 0;
      left: 0;
      max-width: 100vw;
      background: #F6F6F6;
      z-index: 1;
    `}
`;

const NavUl = styled.ul<NavProps>`
  list-style-type: none;
  padding: 0;
  margin: 0 auto;
  display: flex;
  max-width: 1440px;
  width: 100%;
  line-height: 20px;
  justify-content: ${(props) => (props.isFixed ? "space-around" : "space-between")};
  padding-bottom: 22px;
  border-bottom: 1px solid ${(props) => props.theme.primaryGray};
  margin-top: 38px;
`;

const NavLi = styled.li`
  font-weight: 700;
  font-size: 34px;
  
  @media (orientation: landscape) {
    line-height: 5px;
  }
  font-size: 20px;
  margin-top: 0;
  padding: 0;
  &:not(:first-child) {
    margin-top: 0;
  }
`;

const NavLink = styled.a<NavProps>`
  text-decoration: none;
  display: inline-flex;
  height: 100%;
  ${TerminalLookMixin};
  color: ${(props) => props.theme.primaryGray};
  text-shadow: unset;
  &:hover {
    color: ${(props) => props.theme.primaryDark};
  }
  &:before {
    content: "";
    position: absolute;
    top: 50%;
    left: 40%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 8vh;
    color: rgba(0, 0, 0, 0.1);
    z-index: -1;
    opacity: 0;
    font-weight: 900;
    writing-mode: vertical-rl;
    text-orientation: upright;
    -webkit-text-orientation: upright;
    text-transform: uppercase;
    letter-spacing: 500px;
    transition: letter-spacing 0.5s, top 0.5s, opacity 0.5s;
    @media (orientation: landscape) {
      text-orientation: unset;
      writing-mode: horizontal-tb;
    }
  }
`;

const NavLinkSpecial = styled.a<NavProps>`
  text-decoration: underline;
  font-family: "Over the Rainbow", cursive;
  font-size: 22px;
  padding-bottom: 10px;
  ${TerminalLookMixin};
  margin-left: ${(props) => props.isFixed && "30px"};
  display: inline-flex;
  color: ${(props) => props.theme.primaryDark};
`;

function NavigationDesktop({ isFixed }: NavProps) {
  const {
    texts: { navigation },
  } = useContext(LanguageContext);

  return (
    <Nav isFixed={isFixed}>
      <NavUl isFixed={isFixed}>
        <NavLi>
          {isFixed ? (
            <NavLinkSpecial href="#">jundymek</NavLinkSpecial>
          ) : (
            <NavLink data-text="Home" href="#">
              Home
            </NavLink>
          )}
        </NavLi>
        {navigation.links.map((link, index) => (
          <NavLi key={index}>
            <NavLink data-text={link.title} href={link.url}>
              {link.title}
            </NavLink>
          </NavLi>
        ))}
      </NavUl>
    </Nav>
  );
}

export default NavigationDesktop;
