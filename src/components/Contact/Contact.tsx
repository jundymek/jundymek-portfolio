import React, { useContext } from "react"
import { LanguageContext } from "../../App"
import { SectionTitle } from "../../styles/styledComponents"
import useOnScreen from "../../customHooks/useOnScreen"
import { Button } from "../Button/Button"
import { Scrambler } from "react-text-scrambler"
import { Section, Wrapper, Paragraph, List, Icon, HandWrite } from "./Contact.styles"

export const Contact = React.forwardRef((_, ref: React.Ref<HTMLElement>) => {
  const {
    texts: { contact },
  } = useContext(LanguageContext)

  useOnScreen(ref, "0%")

  return (
    <Section id="contact" ref={ref}>
      <Wrapper>
        <SectionTitle>
          <Scrambler text={`{ ${contact.title} }`} characters="!@#$%^&*()" renderIn={1000} />
        </SectionTitle>
        <Paragraph length={contact.paragraph.length}>{contact.paragraph}</Paragraph>
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
