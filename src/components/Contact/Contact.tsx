import { forwardRef, useContext } from "react"
import { LanguageContext } from "../../App"
import { SectionTitle } from "../../styles/styledComponents"
import { Button } from "../Button/Button"
import { Section, Wrapper, Paragraph, List, Icon, HandWrite } from "./Contact.styles"
import { TextScrambler } from "../TextScrambler/TextScrambler"

export const Contact = forwardRef((_, ref: React.Ref<HTMLElement>) => {
  const {
    texts: { contact },
  } = useContext(LanguageContext)

  return (
    <Section id="contact" ref={ref}>
      <Wrapper>
        <SectionTitle>
          <TextScrambler text={[contact.title]} />
        </SectionTitle>
        <Paragraph $length={contact.paragraph.length}>{contact.paragraph}</Paragraph>
        <Button href={`mailto:lukasz@gdzietylkochce.com`}>{contact.buttonLabel}</Button>
        <List>
          {contact.social.map((icon, index) => (
            <li key={index}>
              <a href={icon.url} title={icon.title}>
                <Icon src={icon.img} alt={icon.title} />
              </a>
            </li>
          ))}
        </List>
        <HandWrite>jundymek</HandWrite>
      </Wrapper>
    </Section>
  )
})
