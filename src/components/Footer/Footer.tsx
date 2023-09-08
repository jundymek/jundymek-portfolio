import { useContext } from "react"
import { LanguageContext } from "../../App"
import { FooterContainer, Paragraph } from "./Footer.styles"

export const Footer = () => {
  const {
    texts: { footer },
  } = useContext(LanguageContext)

  return (
    <FooterContainer>
      <Paragraph>
        {footer.paragraph1part1}{" "}
        <span role="img" aria-label="heart">
          ❤️
        </span>{" "}
        {footer.paragraph1part2}
      </Paragraph>
      <Paragraph>{footer.paragraph2}</Paragraph>
    </FooterContainer>
  )
}
