import React, { useRef } from "react";
import styled from "styled-components";
import { SectionTitle, GreySection } from "../../styles/styledComponents";
import useOnScreen from "../../customHooks/useOnScreen";

interface NavProps {
  readonly isVisible: boolean;
}

const Wrapper = styled.div<NavProps>`
  padding: 0 29px;
  max-width: 478px;
  animation: text-focus-in 0.4s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
  @-webkit-keyframes text-focus-in {
    0% {
      -webkit-filter: blur(12px);
      filter: blur(12px);
      opacity: 0;
    }
    100% {
      -webkit-filter: blur(0px);
      filter: blur(0px);
      opacity: 1;
    }
  }
  @keyframes text-focus-in {
    0% {
      -webkit-filter: blur(12px);
      filter: blur(12px);
      opacity: 0;
    }
    100% {
      -webkit-filter: blur(0px);
      filter: blur(0px);
      opacity: 1;
    }
  }
`;

const Paragraph = styled.p`
  text-align: center;
  margin-bottom: 38px;
  font-size: 18px;
  font-weight: 400;
  line-height: 20px;
`;

function AboutMe() {
  const ref = useRef(null);
  const onScreen = useOnScreen(ref, "0px");
  console.log(onScreen);
  return (
    <GreySection ref={ref} id="about">
      {onScreen && (
        <Wrapper isVisible={onScreen}>
          <SectionTitle>About me</SectionTitle>
          <Paragraph>
            Hi, I'm Denis – UX/UI designer from Minsk. I'm interested in design and everything connected with it.
          </Paragraph>
          <Paragraph>I'm studying at courses "Web and mobile design interfaces" in IT-Academy.</Paragraph>
          <Paragraph>Ready to implement excellent projects with wonderful people.</Paragraph>
        </Wrapper>
      )}
    </GreySection>
  );
}

export default AboutMe;
