import React from "react";
import styled from "styled-components";
import { colors, mediaBreakpoints } from "../styles/variables";

const NavWrapper = styled.div`
  padding: 0 7%;
  @media (min-width: mediaBreakpoints.desktop) {
    padding: 0 17%;
  }
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  margin-top: 34px;
  position: relative;
  transition: transform 0.2s ease-in;
`;

const NavUl = styled.ul`
  list-style-type: none;
  padding: 0;
  @media (min-width: ${mediaBreakpoints.desktop}) {
    margin: 0;
    padding: 0;
    list-style-type: none;
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding-bottom: 22px;
    border-bottom: 1px solid ${colors.gray};
  }
`;

const NavLi = styled.li`
  font-weight: 700;
  font-size: 34px;
  line-height: 41px;
  &:not(:first-child) {
    margin-top: 60px;
  }
  @media (min-width: ${mediaBreakpoints.desktop}) {
    font-size: 18px;
    margin-top: 0;
    padding: 0;
    &:not(:first-child) {
      margin-top: 0;
    }
  }
`;

const NavLink = styled.a`
  text-decoration: none;
  color: ${colors.gray};
  &:hover {
    color: ${colors.codGray};
  }
`;

function Navigation() {
  const links = [
    { url: "#", title: "Home" },
    { url: "#about", title: "About me" },
    { url: "#skills", title: "Skills" },
    { url: "#portfolio", title: "Projects" },
    { url: "#contact", title: "Contact" }
  ];

  return (
    <NavWrapper>
      <Nav>
        <NavUl>
          {links.map((link, index) => (
            <NavLi key={index}>
              <NavLink href={link.url}>{link.title}</NavLink>
            </NavLi>
          ))}
        </NavUl>
      </Nav>
    </NavWrapper>
  );
}

export default Navigation;
