import React, { useContext } from "react";
import styled from "styled-components";
import { LanguageContext } from "../../App";
import HeroImage from "./HeroImage";
import { WhiteDiv } from "../../styles/styledComponents";

const StyledHeader = styled.header`
  margin-top: 30px;
  @media (min-width: ${props => props.theme.desktop}) {
  }
`;

const Wrapper = styled.div`
  @media (min-width: ${props => props.theme.desktop}) {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.72rem;
    align-items: flex-end;
  }
`;

const Title = styled.h1`
  width: 155px;
  margin: 0;
  padding: 0;
  font-weight: 400;
  font-size: 47px;
  line-height: 3.11rem;
  margin-bottom: 1.27rem;
  @media (min-width: ${props => props.theme.desktop}) {
    font-size: $title-font-size;
    line-height: 3.18rem;
    color: #070707;
  }
`;

const Paragraph = styled.p`
  padding: 0;
  margin: 0;
  font-size: $default-font-size;
  line-height: 1.22rem;
  font-weight: 400;
  width: 175px;
  margin-bottom: 2.11rem;
  @media (min-width: ${props => props.theme.desktop}) {
    margin-bottom: 2.11rem;
    margin-right: 2rem;
  }
`;

const LangContainer = styled.div`
  display: none;
  @media (min-width: ${props => props.theme.desktop}) {
    display: block;
  }
  transform: rotate(-90deg);
  height: 1rem;
  margin-bottom: 48px;
  margin-right: -1rem;
`;

interface Lang {
  isActive?: boolean;
}

const LangButton = styled.button<Lang>`
  margin: 0;
  padding: 0;
  cursor: pointer;
  font-style: italic;
  font-size: 18px;
  color: ${props => !props.isActive && props.theme.primaryGray};
  font-weight: 500;
  text-decoration: ${props => (props.isActive ? "underline" : "none")};
  background: none;
  border: none;
`;

interface Props {
  setLanguage: React.Dispatch<React.SetStateAction<string>>;
}

function Header({ setLanguage }: Props) {
  const lang = useContext(LanguageContext);
  const handleClick = (value: string) => {
    setLanguage(value);
  };

  return (
    <WhiteDiv>
      <StyledHeader>
        <Wrapper>
          <Title>Łukasz Dymek</Title>
          <Paragraph>
            UX|UI designer <br />
            37 years old, Warsaw
          </Paragraph>
          <LangContainer>
            <LangButton isActive={lang.language === "EN"} onClick={() => handleClick("EN")}>
              EN
            </LangButton>{" "}
            |{" "}
            <LangButton isActive={lang.language === "PL"} onClick={() => handleClick("PL")}>
              PL
            </LangButton>
          </LangContainer>
        </Wrapper>
        <HeroImage />
      </StyledHeader>
    </WhiteDiv>
  );
}

export default Header;
