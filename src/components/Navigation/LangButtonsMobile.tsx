import React, { useContext } from "react";
import styled from "styled-components";
import { LanguageContext } from "../../App";
import { Props } from "./Navigation";

const LangContainer = styled.div`
  display: none;
  position: absolute;
  right: -30px;
  bottom: 120px;
  transform: rotate(90deg);
  font-size: 34px;
  line-height: 2;
  font-weight: 800;
  @media (max-width: ${props => props.theme.desktop}) {
    display: block;
  }
`;

interface Lang {
  isActive?: boolean;
}

const LangButton = styled.button<Lang>`
  margin: 0;
  padding: 0;
  cursor: pointer;
  font-size: 34px;
  color: ${props => !props.isActive && props.theme.primaryGray};
  text-decoration: none;
  background: none;
  border: none;
`;

function LangButtonsMobile({ setLanguage }: Props) {
  const lang = useContext(LanguageContext);
  const handleLangChange = (value: "EN" | "PL") => {
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
