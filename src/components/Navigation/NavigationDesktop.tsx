import React, { useContext } from "react"
import { LanguageContext } from "../../App"
import { Nav, NavUl, NavLi, NavLinkSpecial, NavLink } from "./NavigationDesktop.styles"

type NavigationDesktopProps = {
  isFixed?: boolean
  visibleSection?: string
  active?: boolean
}

export const NavigationDesktop = ({ isFixed, visibleSection }: NavigationDesktopProps) => {
  const {
    texts: { navigation },
  } = useContext(LanguageContext)

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
            <NavLink data-text={link.title} href={link.url} active={visibleSection === link.section} isFixed={isFixed}>
              {link.title}
            </NavLink>
          </NavLi>
        ))}
      </NavUl>
    </Nav>
  )
}
