import React, { useContext, useRef } from "react"
import { LanguageContext } from "../../App"
import useOnScreen from "../../customHooks/useOnScreen"
import { WhiteDiv } from "../../styles/styledComponents"
import {
  StyledHeader,
  Wrapper,
  TitleWrapper,
  Title,
  Subtitle,
  ParagraphWrapper,
  Paragraph,
  LangContainer,
  LangButton,
  CyclerWrapper,
} from "./Header.styles"
import { HeroImage } from "./HeroImage"
import { TextScrambler } from "../TextScrambler/TextScrambler"

type HeaderProps = {
  setLanguage?: React.Dispatch<React.SetStateAction<"PL" | "EN">>
}

export const Header = ({ setLanguage }: HeaderProps) => {
  const ref = useRef(null)
  const lang = useContext(LanguageContext)
  const onScreen = useOnScreen(ref, "-10%")
  const {
    texts: { header },
  } = useContext(LanguageContext)
  const handleClick = (value: "PL" | "EN") => {
    setLanguage?.(value)
  }

  const strings = ["print('Hello World')", "console.log('Hello World')", "echo 'Hello World'", "println('Hello World')"]

  return (
    <WhiteDiv data-testid="title" ref={ref}>
      <StyledHeader>
        <Wrapper>
          <TitleWrapper>
            <Title data-testid="scrambler">
              <TextScrambler text={[`< ${header.title} />`]} />
            </Title>
            <Subtitle>jundymek</Subtitle>
          </TitleWrapper>
          <ParagraphWrapper>
            {header.paragraphs.map((paragraph: string, index) => (
              <Paragraph key={index}>{paragraph}</Paragraph>
            ))}
          </ParagraphWrapper>
          <LangContainer>
            <LangButton $isActive={lang.language === "EN"} onClick={() => handleClick("EN")}>
              EN
            </LangButton>{" "}
            |{" "}
            <LangButton $isActive={lang.language === "PL"} onClick={() => handleClick("PL")}>
              PL
            </LangButton>
          </LangContainer>
        </Wrapper>
        <HeroImage />
        {onScreen && (
          <CyclerWrapper>
            <TextScrambler text={strings} />
          </CyclerWrapper>
        )}
      </StyledHeader>
    </WhiteDiv>
  )
}
