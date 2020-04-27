import React, { useContext, useRef } from "react";
import styled from "styled-components";
import { SectionTitle, GreySection, TerminalLookMixin } from "../../styles/styledComponents";
import { useSpring, animated } from "react-spring";
import useOnScreen from "../../customHooks/useOnScreen";
import { LanguageContext } from "../../App";
import { Scrambler } from "react-text-scrambler";

const AboutSection = styled(GreySection)`
  margin-top: 44px;
  @media (min-width: ${(props) => props.theme.desktop}) {
    min-height: 460px;
    scroll-margin-top: 400px;
  }
`;

const Wrapper = styled(animated.div)`
  padding: 0 29px;
  max-width: 600px;
  position: relative;
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

const Code = styled.code`
  font-size: 14px;
  margin: 0 10px;
  background-color: black;
  ${TerminalLookMixin}
`;

const AboutMe = React.forwardRef((props, ref: React.Ref<HTMLElement>) => {
  const props1 = useSpring({
    to: { opacity: 1, filter: "blur(0px)" },
    from: { opacity: 0, filter: "blur(12px)" },
    config: { duration: 1000 },
    reset: true,
  });
  const {
    texts: { aboutMe },
  } = useContext(LanguageContext);

  const ref1 = useRef(null);
  useOnScreen(ref1, "0%");

  return (
      <AboutSection id="about" ref={ref}>
        <Wrapper  >
          <SectionTitle>
            <Scrambler text={`{ ${aboutMe.title} }`} characters="!@#$%^&*()" renderIn={1000} />
          </SectionTitle>
          <Paragraph>
            {aboutMe.paragraph1part1}
            <Code>{aboutMe.paragraph1code}</Code>
            {aboutMe.paragraph1part2}
          </Paragraph>
          <Paragraph>{aboutMe.paragraph2}</Paragraph>
        </Wrapper>
      </AboutSection>
  );
});

export default AboutMe;
