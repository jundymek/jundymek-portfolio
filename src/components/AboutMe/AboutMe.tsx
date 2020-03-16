import React, { useRef } from "react";
import styled from "styled-components";
import { SectionTitle, GreySection } from "../../styles/styledComponents";
import useOnScreen from "../../customHooks/useOnScreen";
import { useSpring, animated } from "react-spring";

const Wrapper = styled(animated.div)`
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
  const ref = useRef(null);
  const onScreen = useOnScreen(ref, "0px");
  
  const props = useSpring({
    to: { opacity: 1, filter: "blur(0px)" },
    from: { opacity: 0, filter: "blur(12px)" },
    config: { duration: 1000 },
    reset: true
  });
  
  return (
    <GreySection ref={ref} id="about">
      {onScreen && (
        <Wrapper style={props}>
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
