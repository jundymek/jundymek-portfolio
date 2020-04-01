import React, { useEffect, useState, useContext } from "react";
import styled, { css } from "styled-components";
import { LanguageContext } from "../../App";
import useWindowSize from "../../customHooks/useWindowSize";
import Hamburger from "../Hamburger/Hamburger";
import LangButtonsMobile from "./LangButtonsMobile";
import { WhiteDiv } from "../../styles/styledComponents";
import { useScrollYPosition } from "react-use-scroll-position";
import { flicker } from "./styles/animations";

interface NavProps {
  isVisible?: boolean;
  isFixed?: boolean;
}

const Container = styled(WhiteDiv)<NavProps>`
  padding: ${props => (props.isVisible || props.isFixed) && "0"};
`;

const Nav = styled.nav<NavProps>`
  display: flex;
  transform: ${props => (props.isVisible ? "translateX(0)" : "translateX(-100%)")};
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  height: ${props => (props.isVisible ? "100vh" : "0")};
  width: 100%;
  max-width: 1440px;
  transition: ${props => (props.isVisible ? "transform 0.2s ease-out" : "None")};
  @media (min-width: ${props => props.theme.desktop}) {
    transform: none;
    display: block;
    width: 100%;
    height: auto;
    z-index: 0;
    ${props =>
      props.isFixed &&
      css`
        position: fixed;
        top: 0;
        left: 0;
        max-width: 100vw;
        width: 100vw;
        background: white;
        z-index: 1;
      `}
  }
`;

const NavUl = styled.ul<NavProps>`
  list-style-type: none;
  margin-left: 10%;
  margin-top: 10%;
  padding: 0;
  & li:nth-child(5n + 1) a:before {
    background: #81ecec;
  }
  & li:nth-child(5n + 2) a:before {
    background: #ff7675;
  }
  & li:nth-child(5n + 3) a:before {
    background: #55efc4;
  }
  & li:nth-child(5n + 4) a:before {
    background: #a29bfe;
  }
  & li:nth-child(5n + 5) a:before {
    background: #fd79a8;
  }
  @media (min-width: ${props => props.theme.desktop}) {
    margin: 0 auto;
    padding: 0;
    display: flex;
    max-width: 1440px;
    width: 100%;
    justify-content: ${props => (props.isFixed ? "space-around" : "space-between")};
    padding-bottom: 22px;
    border-bottom: 1px solid ${props => props.theme.primaryGray};
    margin-top: 50px;
  }
  @media (orientation: landscape, max-width: ${props => props.theme.desktop}) {
    margin-top: 6%;
  }
`;

const NavLi = styled.li`
  font-weight: 700;
  font-size: 34px;
  line-height: 40px;
  @media (orientation: landscape) {
    line-height: 5px;
  }
  &:not(:first-child) {
    margin-top: 60px;
  }
  @media (min-width: ${props => props.theme.desktop}) {
    font-size: 20px;
    margin-top: 0;
    padding: 0;
    &:not(:first-child) {
      margin-top: 0;
    }
  }
`;

const NavLink = styled.a<NavProps>`
  text-decoration: none;
  display: inline-flex;
  font-weight: 700;
  transition: 0.5s;
  height: 100%;
  color: ${props => props.theme.primaryGray};
  &:hover {
    background: rgba(255, 255, 255, 1);
    color: ${props => props.theme.primaryDark};
    ${props =>
      props.isVisible &&
      css`
        &:before {
          content: attr(data-text);
          opacity: 1;
          left: 50%;
          letter-spacing: 5px;
          width: 100%;
          height: 100%;
          @media (orientation: landscape) {
            letter-spacing: 50px;
          }
        }
      `}
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

const NavLinkSpecial = styled.a`
  text-decoration: underline;
  display: inline-flex;
  font-family: "Over the Rainbow", cursive;
  font-size: 22px;
  padding-bottom: 10px;
  height: 100%;
  color: ${props => props.theme.primaryGray};
  animation: ${flicker} 1s linear both;
`;

export interface Props {
  setLanguage: React.Dispatch<React.SetStateAction<"PL" | "EN">>;
}

function Navigation({ setLanguage }: Props) {
  const [isHamburgerOpen, setisHamburgerOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const width = useWindowSize().width;
  const scrollY = useScrollYPosition();

  useEffect(() => {
    if (isHamburgerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    width && width > 900 && setisHamburgerOpen(false);
    scrollY > 200 && setIsFixed(true);
    scrollY <= 200 && setIsFixed(false);
  }, [width, isHamburgerOpen, scrollY]);

  const {
    texts: { navigation }
  } = useContext(LanguageContext);

  const handleClick = () => {
    setisHamburgerOpen(false);
  };

  return (
    <Container isVisible={isHamburgerOpen} isFixed={isFixed}>
      <Hamburger isOpen={isHamburgerOpen} setIsOpen={setisHamburgerOpen} />
      <Nav isVisible={isHamburgerOpen} isFixed={isFixed}>
        <NavUl isFixed={isFixed}>
          <NavLi>
            {isFixed ? (
              <NavLinkSpecial onClick={handleClick} href="#">
                jundymek
              </NavLinkSpecial>
            ) : (
              <NavLink onClick={handleClick} isVisible={isHamburgerOpen} href="#">
                Home
              </NavLink>
            )}
          </NavLi>
          {navigation.links.map((link, index) => (
            <NavLi key={index}>
              <NavLink onClick={handleClick} isVisible={isHamburgerOpen} data-text={link.title} href={link.url}>
                {link.title}
              </NavLink>
            </NavLi>
          ))}
        </NavUl>
        <LangButtonsMobile setLanguage={setLanguage} />
      </Nav>
    </Container>
  );
}

export default Navigation;
