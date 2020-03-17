import React, { useContext } from "react";
import styled from "styled-components";
import { LanguageContext } from "../../App";
import { Props } from "./Navigation";

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
  font-weight: 600;
  color: ${props => !props.isActive && props.theme.primaryGray};
  text-decoration: none;
  background: none;
  border: none;
`;

function LangButtonsMobile({ setLanguage }: Props) {
  const lang = useContext(LanguageContext);
  const handleLangChange = (value: string) => {
    setLanguage(value);
  };
  return (
    <LangContainer>
      <LangButton isActive={lang.language === "EN"} onClick={() => handleLangChange("EN")}>
        ENG
      </LangButton>{" "}
      |{" "}
      <LangButton isActive={lang.language === "PL"} onClick={() => handleLangChange("PL")}>
        PL
      </LangButton>
    </LangContainer>
  );
}

export default LangButtonsMobile;
