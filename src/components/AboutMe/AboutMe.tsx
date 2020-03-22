import React, { useRef, useContext } from "react";
import styled from "styled-components";
import { SectionTitle, GreySection } from "../../styles/styledComponents";
import useOnScreen from "../../customHooks/useOnScreen";
import { useSpring, animated } from "react-spring";
import { LanguageContext } from "../../App";

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
  font-family: "Notable", sans-serif;
`;

function AboutMe() {
  const ref = useRef(null);
  const onScreen = useOnScreen(ref, "-100px");

  const props = useSpring({
    to: { opacity: 1, filter: "blur(0px)" },
    from: { opacity: 0, filter: "blur(12px)" },
    config: { duration: 1000 },
    reset: true
  });
  const {
    texts: { aboutMe }
  } = useContext(LanguageContext);

  console.log(useContext(LanguageContext))

  return (
    <GreySection id="about">
      <Wrapper ref={ref} style={onScreen ? props : undefined}>
        <SectionTitle>{aboutMe.title}</SectionTitle>
        {aboutMe.paragraphs.map((paragraph:any) => (
          <Paragraph>{paragraph}</Paragraph>
        ))}
      </Wrapper>
    </GreySection>
  );
}

export default AboutMe;
