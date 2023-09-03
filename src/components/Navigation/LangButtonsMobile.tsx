import React, { useContext } from "react"
import styled, { css } from "styled-components"
import { LanguageContext } from "../../App"
import { NavigationProps } from "./Navigation"
import { TerminalLookMixin } from "../../styles/styledComponents"

const LangContainer = styled.div`
  display: none;
  position: absolute;
  right: -14px;
  bottom: 70px;
  color: #f0fff8;
  transform: rotate(90deg);
  font-size: 24px;
  line-height: 2;
  font-weight: 800;
  @media (max-width: ${(props) => props.theme.desktop}) {
    display: block;
  }
`

const LangButton = styled.button<{
  $isActive: boolean
}>`
  margin: 0;
  padding: 0;
  cursor: pointer;
  font-size: 24px;
  color: ${(props) => props.$isActive && "#f0fff8"};
  color: #f0fff8;
  text-decoration: none;
  background: none;
  border: none;
  ${(props) =>
    props.$isActive &&
    css`
      ${TerminalLookMixin}
    `}
`

const LangButtonsMobile = ({ setLanguage }: NavigationProps) => {
  const lang = useContext(LanguageContext)
  const handleLangChange = (value: "EN" | "PL") => {
    setLanguage(value)
  }
  return (
    <LangContainer>
      <LangButton $isActive={lang.language === "EN"} onClick={() => handleLangChange("EN")}>
        ENG
      </LangButton>{" "}
      |{" "}
      <LangButton $isActive={lang.language === "PL"} onClick={() => handleLangChange("PL")}>
        PL
      </LangButton>
    </LangContainer>
  )
}

export default LangButtonsMobile
