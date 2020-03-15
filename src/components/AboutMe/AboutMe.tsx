import React from "react";
import styled from "styled-components";
import { SectionTitle, GreySection } from "../../styles/styledComponents";

const Wrapper = styled.div`
  padding: 0 29px;
  max-width: 478px;
`;

const Paragraph = styled.p`
  text-align: center;
  margin-bottom: 38px;
  font-size: 18px;
  font-weight: 400;
  line-height: 20px;
`;

function AboutMe() {
  return (
    <GreySection>
      <Wrapper>
        <SectionTitle>About me</SectionTitle>
        <Paragraph>
          Hi, I'm Denis – UX/UI designer from Minsk. I'm interested in design and everything connected with it.
        </Paragraph>
        <Paragraph>I'm studying at courses "Web and mobile design interfaces" in IT-Academy.</Paragraph>
        <Paragraph>Ready to implement excellent projects with wonderful people.</Paragraph>
      </Wrapper>
    </GreySection>
  );
}

export default AboutMe;
