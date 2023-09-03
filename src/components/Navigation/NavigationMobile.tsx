import React, { useEffect, useState, useContext } from "react"
import styled, { css } from "styled-components"
import { LanguageContext } from "../../App"
import Hamburger from "../Hamburger/Hamburger"
import LangButtonsMobile from "./LangButtonsMobile"
import { WhiteDiv, TerminalLookMixin } from "../../styles/styledComponents"

interface NavProps {
  isFixed?: boolean
  isVisible?: boolean
  isOpen?: boolean
}

const Container = styled(WhiteDiv)<{
  isVisible?: boolean
  isFixed?: boolean
}>`
  padding: ${(props) => (props.isVisible || props.isFixed) && "0"};
  @media (min-width: ${(props) => props.theme.desktop}) {
    display: none;
  }
`

const Nav = styled.nav<{
  isFixed?: boolean
  isVisible?: boolean
}>`
  display: flex;
  transform: ${(props) => (props.isVisible ? "translateX(0)" : "translateX(-100%)")};
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  max-width: 1440px;
  transition: ${(props) => (props.isVisible ? "transform 0.4s ease-out" : "None")};
  position: fixed;
  background: rgba(0, 0, 0, 0.94);
  z-index: 1;
`

const NavUl = styled.ul<{
  isFixed?: boolean
}>`
  list-style-type: none;
  margin-left: 10%;
  /* margin-top: 10%; */
  padding: 0;
  & li:nth-child(5n + 1) a:before {
    background: #5b5b5b;
    color: white;
  }
  & li:nth-child(5n + 2) a:before {
    background: #191987;
  }
  & li:nth-child(5n + 3) a:before {
    background: #0b0707;
  }
  & li:nth-child(5n + 4) a:before {
    background: #071407;
  }
  & li:nth-child(5n + 5) a:before {
    background: #2b2008;
  }
`

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
`

const NavLink = styled.a<{
  isVisible?: boolean
}>`
  text-decoration: none;
  display: inline-flex;
  height: 100%;
  ${TerminalLookMixin};
  &:hover {
    color: ${(props) => props.theme.primaryDark};
    ${(props) =>
      props.isVisible &&
      css`
        &:before {
          content: attr(data-text);
          opacity: 1;
          left: 50%;
          letter-spacing: 5px;
          width: 100%;
          height: 100%;
          ${TerminalLookMixin};
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
`

const NavLinkSpecial = styled.a<{
  isFixed?: boolean
  isOpen?: boolean
}>`
  text-decoration: underline;
  display: ${(props) => (props.isFixed && !props.isOpen ? "inline-flex" : "none")};
  font-family: "Over the Rainbow", cursive;
  font-size: 22px;
  padding-bottom: 10px;
  ${TerminalLookMixin};
  margin-left: ${(props) => props.isFixed && "30px"};
`

const HamburgerWrapper = styled.div<{
  isFixed?: boolean
  isOpen?: boolean
}>`
  display: flex;
  width: ${(props) => (props.isOpen ? "20%" : "100%")};
  justify-content: space-between;
  align-items: center;
  z-index: 2;
  height: ${(props) => props.isFixed && "70px"};
  margin: 0 auto;
  position: ${(props) => props.isFixed && "fixed"};
  top: 0;
  right: 0;
  background: ${(props) => props.isFixed && !props.isOpen && props.theme.primaryDark};
  opacity: ${(props) => (props.isFixed && !props.isOpen ? ".90" : "1")};
  transition: 1s ease;
`

export type NavigationMobileProps = {
  setLanguage: React.Dispatch<React.SetStateAction<"PL" | "EN">>
  isFixed: boolean
}

const NavigationMobile = ({ isFixed = false, setLanguage }: NavigationMobileProps) => {
  const [isHamburgerOpen, setisHamburgerOpen] = useState(false)

  useEffect(() => {
    if (isHamburgerOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
  }, [isHamburgerOpen])

  const {
    texts: { navigation },
  } = useContext(LanguageContext)

  const handleClick = () => {
    setisHamburgerOpen(false)
  }
  return (
    <Container isVisible={isHamburgerOpen}>
      <HamburgerWrapper isFixed={isFixed} isOpen={isHamburgerOpen}>
        <NavLinkSpecial isFixed={isFixed} isOpen={isHamburgerOpen} href="#">
          jundymek
        </NavLinkSpecial>
        <Hamburger isOpen={isHamburgerOpen} setIsOpen={setisHamburgerOpen} isFixed={isFixed} />
      </HamburgerWrapper>
      <Nav isVisible={isHamburgerOpen} isFixed={isFixed}>
        <NavUl isFixed={isFixed}>
          <NavLi>
            {isFixed && !isHamburgerOpen ? (
              <NavLinkSpecial href="#">jundymek</NavLinkSpecial>
            ) : (
              <NavLink onClick={handleClick} isVisible={isHamburgerOpen} data-text="Home" href="#">
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
  )
}

export default NavigationMobile
