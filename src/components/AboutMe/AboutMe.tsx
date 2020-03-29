import React, { useContext } from "react";
import styled from "styled-components";
import { SectionTitle, GreySection } from "../../styles/styledComponents";
import { useSpring, animated } from "react-spring";
import { LanguageContext } from "../../App";
import { Scrambler } from "react-text-scrambler";

const AboutSection = styled(GreySection)`
  margin-top: 44px;
`

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
  font-size: 18px;
  margin: 0 2px;
  background-color: black;
  color: #f0fff8;
  text-shadow: 0 0 3px #80ffc0, 0 0 10px #00ff66, 0 0 20px #00ff66, 0 0 30px #00ff66;
`

function AboutMe() {

  const props = useSpring({
    to: { opacity: 1, filter: "blur(0px)" },
    from: { opacity: 0, filter: "blur(12px)" },
    config: { duration: 1000 },
    reset: true
  });
  const {
    texts: { aboutMe }
  } = useContext(LanguageContext);


  return (
    <AboutSection id="about">
      <Wrapper style={props}>
        <SectionTitle>
          <Scrambler text={`{ ${aboutMe.title} }`} characters="!@#$%^&*()" />
        </SectionTitle>
        <Paragraph>{aboutMe.paragraph1part1}<Code>{aboutMe.paragraph1code}</Code>{aboutMe.paragraph1part2}</Paragraph>
        <Paragraph>{aboutMe.paragraph2}</Paragraph>
      </Wrapper>
    </AboutSection>
  );
}

export default AboutMe;
