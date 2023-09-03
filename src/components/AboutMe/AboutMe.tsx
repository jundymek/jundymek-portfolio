import React, { useContext } from "react"
import styled from "styled-components"
import { SectionTitle, GreySection, TerminalLookMixin } from "../../styles/styledComponents"
import { LanguageContext } from "../../App"
import { Scrambler } from "react-text-scrambler"
import useOnScreen from "../../customHooks/useOnScreen"

const AboutSection = styled(GreySection)`
  margin-top: 44px;
  @media (min-width: ${(props) => props.theme.desktop}) {
    min-height: 460px;
    scroll-margin-top: 400px;
  }
`

const Wrapper = styled.div`
  padding: 0 29px;
  max-width: 600px;
  position: relative;
`

const Paragraph = styled.p`
  text-align: center;
  margin-bottom: 38px;
  font-size: 20px;
  font-weight: 400;
  line-height: 20px;
  font-family: "Notable", sans-serif;
  font-family: "VT323", monospace;
`

const StrikedParagraph = styled.span`
  text-decoration: line-through;
`

const Code = styled.code`
  font-size: 14px;
  margin: 0 10px;
  background-color: black;
  ${TerminalLookMixin}
`

const AboutMe = React.forwardRef((_, ref: React.Ref<HTMLElement>) => {
  const {
    texts: { aboutMe },
  } = useContext(LanguageContext)

  useOnScreen(ref, "0%")

  return (
    <AboutSection id="about" ref={ref}>
      <Wrapper>
        <SectionTitle>
          <Scrambler text={`{ ${aboutMe.title} }`} characters="!@#$%^&*()" renderIn={1000} />
        </SectionTitle>
        <Paragraph>
          {aboutMe.paragraph1part1Hello}
          <StrikedParagraph>{aboutMe.paragraph1part1StrikeThrough}</StrikedParagraph>
          {aboutMe.paragraph1part1End}
          <Code>{aboutMe.paragraph1code}</Code>
          {aboutMe.paragraph1part2}
        </Paragraph>
        <Paragraph>{aboutMe.paragraph2}</Paragraph>
      </Wrapper>
    </AboutSection>
  )
})

export default AboutMe
