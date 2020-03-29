import React, { useRef, useContext } from "react";
import styled from "styled-components";
import { SectionTitle, GreySection } from "../../styles/styledComponents";
import useOnScreen from "../../customHooks/useOnScreen";
import { useSpring, animated } from "react-spring";
import { LanguageContext } from "../../App";
import { Scrambler, Cycler } from "react-text-scrambler";
import useWindowSize from "../../customHooks/useWindowSize";

const Wrapper = styled(animated.div)`
  padding: 0 29px;
  max-width: 478px;
  position: relative;
`;

const CyclerWrapper = styled.div`
  position: absolute;
  left: -180px;
  top: 50%;
  width: 230px;
  background-color: black;
  color: #f0fff8;
  text-shadow: 0 0 3px #80ffc0, 0 0 10px #00ff66, 0 0 20px #00ff66, 0 0 30px #00ff66;
  transform: rotate(-50deg);
`;

const Paragraph = styled.p`
  text-align: center;
  margin-bottom: 38px;
  font-size: 20px;
  font-weight: 400;
  line-height: 20px;
  font-family: "Notable", sans-serif;
  font-family: "VT323", monospace;
`;

function AboutMe() {
  const ref = useRef(null);
  const onScreen = useOnScreen(ref, "-10%");

  const props = useSpring({
    to: { opacity: 1, filter: "blur(0px)" },
    from: { opacity: 0, filter: "blur(12px)" },
    config: { duration: 1000 },
    reset: true
  });
  const {
    texts: { aboutMe }
  } = useContext(LanguageContext);

  const width = useWindowSize().width;

  const strings = [
    "print('Hello World')",
    "console.log('Hello World')",
    "echo 'Hello World'",
    "println('Hello, world!')"
  ];

  return (
    <GreySection id="about">
      <Wrapper ref={ref} style={props}>
        {width && width >= 900 && onScreen && (
          <CyclerWrapper>
            <Cycler typewriter={true} strings={strings} />
          </CyclerWrapper>
        )}
        <SectionTitle>
          <Scrambler text={`{ ${aboutMe.title} }`} characters="!@#$%^&*()" />
        </SectionTitle>
        {aboutMe.paragraphs.map((paragraph, index) => (
          <Paragraph key={index}>{paragraph}</Paragraph>
        ))}
      </Wrapper>
    </GreySection>
  );
}

export default AboutMe;
