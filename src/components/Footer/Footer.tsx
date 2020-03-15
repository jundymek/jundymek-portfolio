import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  margin: 48px 0;
`;

const Paragraph = styled.p`
  font-size: 18px;
  line-height: 8px;
  text-align: center;
  color: ${props => props.theme.primaryGray};
`;

function Footer() {
  return (
    <FooterContainer>
      <Paragraph>Like me on</Paragraph>
      <Paragraph>LinkedIn, Instagram, Behance, Dribble</Paragraph>
    </FooterContainer>
  );
}

export default Footer;
