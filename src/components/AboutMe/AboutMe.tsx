import { forwardRef, useContext } from "react"
import { SectionTitle } from "../../styles/styledComponents"
import { LanguageContext } from "../../App"
import { AboutSection, Wrapper, Paragraph, StrikedParagraph, Code } from "./AboutMe.styles"
import { TextScrambler } from "../TextScrambler/TextScrambler"

export const AboutMe = forwardRef((_, ref: React.Ref<HTMLElement>) => {
  const {
    texts: { aboutMe },
  } = useContext(LanguageContext)

  return (
    <AboutSection id="about" ref={ref}>
      <Wrapper>
        <SectionTitle>
          <TextScrambler text={[aboutMe.title]} />
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
