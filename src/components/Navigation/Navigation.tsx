import React, { useEffect, useState } from "react";
import styled from "styled-components";
import useWindowSize from "../../customHooks/useWindowSize";
import Hamburger from "../Hamburger/Hamburger";

interface NavProps {
  readonly isVisible: boolean;
}

const NavWrapper = styled.div`
  padding: 0 7%;
  @media (min-width: ${props => props.theme.desktop}) {
    padding: 0 17%;
  }
`;

const Nav = styled.nav<NavProps>`
  display: flex;
  transform: ${props => (props.isVisible ? "translateX(0)" : "translateX(-100%)")};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  transition: ${props => (props.isVisible ? "transform 0.2s ease-out" : "None")};
  @media (min-width: 800px) {
    transform: none;
    margin-top: 34px;
    display: block;
    width: 100%;
    height: auto;
  }
`;

const NavUl = styled.ul`
  list-style-type: none;
  padding: 0;
  @media (min-width: 800px) {
    margin: 0;
    padding: 0;
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding-bottom: 22px;
    border-bottom: 1px solid ${props => props.theme.primaryGray};
  }
`;

const NavLi = styled.li`
  font-weight: 700;
  font-size: 34px;
  line-height: 41px;
  &:not(:first-child) {
    margin-top: 60px;
  }
  @media (min-width: ${props => props.theme.desktop}) {
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
  color: ${props => props.theme.primaryGray};
  &:hover {
    color: ${props => props.theme.primaryDark};
  }
`;

function Navigation() {
  const [isHamburgerOpen, setisHamburgerOpen] = useState(false);

  const links = [
    { url: "#", title: "Home" },
    { url: "#about", title: "About me" },
    { url: "#skills", title: "Skills" },
    { url: "#portfolio", title: "Projects" },
    { url: "#contact", title: "Contact" }
  ];

  const width = useWindowSize().width;
  useEffect(() => {
    width && width > 800 && setisHamburgerOpen(false);
  }, [width]);

  return (
    <NavWrapper>
      <Hamburger isOpen={isHamburgerOpen} setIsOpen={setisHamburgerOpen} />
      <Nav isVisible={isHamburgerOpen}>
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
