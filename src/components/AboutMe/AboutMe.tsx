import React, { useRef, useContext } from "react";
import styled from "styled-components";
import { SectionTitle, GreySection } from "../../styles/styledComponents";
import useOnScreen from "../../customHooks/useOnScreen";
import { useSpring, animated } from "react-spring";
import { LanguageContext } from "../../App";
import { Scrambler, Cycler } from "react-text-scrambler";




const Wrapper = styled(animated.div)`
  padding: 0 29px;
  max-width: 478px;
  position: relative;
`;

const CyclerWrapper = styled.div`
  position: absolute;
  left: -180px;
  top: 50%;
  transform: rotate(-20deg);
`

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
  useOnScreen(ref, "-100px");

  const props = useSpring({
    to: { opacity: 1, filter: "blur(0px)" },
    from: { opacity: 0, filter: "blur(12px)" },
    config: { duration: 1000 },
    reset: true
  });
  const {
    texts: { aboutMe }
  } = useContext(LanguageContext);

  const strings = ["print('Hello World')", "console.log('Hello World')", "echo 'Hello World'", "println('Hello, world!')"];

  return (
    <GreySection id="about">
        <Wrapper ref={ref} style={props}>
        <CyclerWrapper>
          <Cycler
              // duration={ 3000 }
              typewriter={true}
              strings={ strings } />
        </CyclerWrapper>
          <SectionTitle>
            <Scrambler
              text={`< ${aboutMe.title} />`}
              // characters="!@#$%^&*()"
              typewriter={true}
            />
          </SectionTitle>
          {aboutMe.paragraphs.map((paragraph, index) => (
            <Paragraph key={index}>{paragraph}</Paragraph>
          ))}
        </Wrapper>
    </GreySection>
  );
}

export default AboutMe;
