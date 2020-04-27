import React, { useContext } from "react";
import styled from "styled-components";
import { LanguageContext } from "../../App";
import useOnScreen from "../../customHooks/useOnScreen";
import HeroImage from "./HeroImage";
import { WhiteDiv, TerminalLookMixin } from "../../styles/styledComponents";
import { Scrambler, Cycler } from "react-text-scrambler";

const StyledHeader = styled.header`
  margin-top: 30px;
  position: relative;
  @media (min-width: ${(props) => props.theme.desktop}) {
  }
`;

const Wrapper = styled.div`
  @media (min-width: ${(props) => props.theme.desktop}) {
    display: flex;
    justify-content: space-between;
    margin-bottom: 34px;
    align-items: flex-end;
  }
`;

const TitleWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const Title = styled.h1`
  width: 155px;
  height: 100px;
  margin: 0;
  padding: 0;
  font-weight: 400;
  font-size: 47px;
  line-height: 43px;
  margin-bottom: 23px;
  @media (min-width: ${(props) => props.theme.desktop}) {
    line-height: 46px;
  }
`;

const Subtitle = styled.p`
  position: absolute;
  margin: 0;
  bottom: 2px;
  right: -26px;
  font-family: "Over the Rainbow", cursive;
  @media (min-width: ${(props) => props.theme.desktop}) {
    bottom: -5px;
    right: -34px;
  }
`;

const ParagraphWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 32px;
  margin-top: 32px;
  margin-right: 36px;
`;

const Paragraph = styled.p`
  padding: 0;
  margin: 0;
  line-height: 22px;
  font-weight: 400;
`;

const LangContainer = styled.div`
  display: none;
  transform: rotate(-90deg);
  margin-right: -14px;
  align-self: center;
  @media (min-width: ${(props) => props.theme.desktop}) {
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
  font-style: italic;
  font-size: 18px;
  font-family: "VT323", monospace;
  color: ${(props) => !props.isActive && props.theme.primaryGray};
  font-weight: 500;
  text-decoration: ${(props) => (props.isActive ? "underline" : "none")};
  background: none;
  border: none;
`;

const CyclerWrapper = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  text-align: center;
  ${TerminalLookMixin};
  @media (min-width: ${(props) => props.theme.desktop}) {
    font-size: 24px;
  }
`;

interface HeaderProps {
  setLanguage: React.Dispatch<React.SetStateAction<"PL" | "EN">>;
}

const Header = React.forwardRef(({ setLanguage }: HeaderProps, ref: React.Ref<HTMLDivElement>) => {
  const lang = useContext(LanguageContext);
  const onScreen = useOnScreen(ref, "-10%");
  const {
    texts: { header },
  } = useContext(LanguageContext);
  const handleClick = (value: "PL" | "EN") => {
    setLanguage(value);
  };

  const strings = [
    "print('Hello World')",
    "console.log('Hello World')",
    "echo 'Hello World'",
    "println('Hello World')",
  ];

  return (
    <WhiteDiv data-testid="title" ref={ref}>
      <StyledHeader>
        <Wrapper>
          <TitleWrapper>
            <Title data-testid="scrambler">
              <Scrambler text={`< ${header.title} />`} renderIn={1000} characters="!@#$%^&*()" />
            </Title>
            <Subtitle>jundymek</Subtitle>
          </TitleWrapper>
          <ParagraphWrapper>
            {header.paragraphs.map((paragraph: string, index) => (
              <Paragraph key={index}>{paragraph}</Paragraph>
            ))}
          </ParagraphWrapper>
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
        {onScreen && (
          <CyclerWrapper>
            <Cycler typewriter={true} strings={strings} />
          </CyclerWrapper>
        )}
      </StyledHeader>
    </WhiteDiv>
  );
});

export default Header;
