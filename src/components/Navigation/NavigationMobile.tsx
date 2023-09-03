import React, { useEffect, useState, useContext } from "react"

import { LanguageContext } from "../../App"
import LangButtonsMobile from "./LangButtonsMobile"
import { Container, HamburgerWrapper, Nav, NavLi, NavLink, NavLinkSpecial, NavUl } from "./NavigationMobile.styles"
import { Hamburger } from "../Hamburger/Hamburger"

export type NavigationMobileProps = {
  setLanguage: React.Dispatch<React.SetStateAction<"PL" | "EN">>
  isFixed: boolean
}

export const NavigationMobile = ({ isFixed = false, setLanguage }: NavigationMobileProps) => {
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
