import React, { useEffect, useState, useContext } from "react";
import styled, { css } from "styled-components";
import useWindowSize from "../../customHooks/useWindowSize";
import Hamburger from "../Hamburger/Hamburger";
import { LanguageContext } from "../../App";

interface NavProps {
  readonly isVisible: boolean;
}

interface Props {
  setLanguage: React.Dispatch<React.SetStateAction<string>>;
}

const NavWrapper = styled.div`
  @media (min-width: ${props => props.theme.desktop}) {
    padding: 0 17%;
  }
`;

const Nav = styled.nav<NavProps>`
  display: flex;
  transform: ${props => (props.isVisible ? "translateX(0)" : "translateX(-100%)")};
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  height: ${props => (props.isVisible ? "105vh" : "0")};
  width: 100%;
  transition: ${props => (props.isVisible ? "transform 0.2s ease-out" : "None")};
  @media (min-width: ${props => props.theme.desktop}) {
    transform: none;
    margin-top: 34px;
    display: block;
    width: 100%;
    height: auto;
  }
`;

const NavUl = styled.ul`
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
  line-height: 40px;
  @media (orientation: landscape) {
    line-height: 5px;
  }
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

const LangContainer = styled.div`
  display: none;
  @media (max-width: ${props => props.theme.desktop}) {
    display: block;
  }
  position: absolute;
  right: -30px;
  bottom: 100px;
  transform: rotate(90deg);
  font-size: 34px;
  font-weight: 800;
`;

interface Lang {
  isActive?: boolean;
}

const LangButton = styled.button<Lang>`
  margin: 0;
  padding: 0;
  cursor: pointer;
  font-size: 34px;
  font-weight: 400;
  color: ${props => !props.isActive && props.theme.primaryGray};
  text-decoration: none;
  background: none;
  border: none;
`;

function Navigation({ setLanguage }: Props) {
  const [isHamburgerOpen, setisHamburgerOpen] = useState(false);
  const lang = useContext(LanguageContext);

  const links = [
    { url: "#", title: "Home" },
    { url: "#about", title: "About me" },
    { url: "#skills", title: "Skills" },
    { url: "#portfolio", title: "Projects" },
    { url: "#contact", title: "Contact" }
  ];

  const width = useWindowSize().width;
  useEffect(() => {
    if (isHamburgerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    width && width > 900 && setisHamburgerOpen(false);
  }, [width, isHamburgerOpen]);

  const handleClick = () => {
    setisHamburgerOpen(false);
  };

  const handleLangChange = (value: string) => {
    setLanguage(value);
  };

  return (
    <NavWrapper>
      <Hamburger isOpen={isHamburgerOpen} setIsOpen={setisHamburgerOpen} />
      <Nav isVisible={isHamburgerOpen}>
        <NavUl>
          {links.map((link, index) => (
            <NavLi key={index}>
              <NavLink onClick={handleClick} isVisible={isHamburgerOpen} data-text={link.title} href={link.url}>
                {link.title}
              </NavLink>
            </NavLi>
          ))}
        </NavUl>
        <LangContainer>
          <LangButton isActive={lang.language === "EN"} onClick={() => handleLangChange("EN")}>
            ENG
          </LangButton>{" "}
          |{" "}
          <LangButton isActive={lang.language === "PL"} onClick={() => handleLangChange("PL")}>
            PL
          </LangButton>
        </LangContainer>
      </Nav>
    </NavWrapper>
  );
}

export default Navigation;
