import React, { useContext } from "react"
import { LanguageContext } from "../../App"
import styled from "styled-components"

const FooterContainer = styled.footer`
  margin: 48px 0;
`

const Paragraph = styled.p`
  font-size: 18px;
  line-height: 18px;
  margin: 5px;
  text-align: center;
  color: ${(props) => props.theme.primaryGray};
`

const Footer = () => {
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

export default Footer
