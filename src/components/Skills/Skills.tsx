import React, { useRef, useContext } from "react";
import styled from "styled-components";
import { SectionTitle } from "../../styles/styledComponents";
import { useTrail, animated } from "react-spring";
import useOnScreen from "../../customHooks/useOnScreen";
import { LanguageContext } from "../../App";
import ReactTooltip from "react-tooltip";

const Section = styled.section`
  display: block;
  margin: 0 auto;
  max-width: 1440px;
`;

const Paragraph = styled.p`
  font-size: 18px;
  margin-bottom: 70px;
  text-align: center;
`;

const List = styled.ul`
  display: grid;
  margin: 0;
  padding: 0;
  list-style-type: none;
  grid-template-columns: 1fr;
  row-gap: 40px;
  text-align: center;
  justify-items: center;
  @media (min-width: ${props => props.theme.desktop}) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    column-gap: 10%;
    padding: 0 100px;
  }
`;

const ListItem = styled(animated.li)`
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SkillBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: 90px;
  height: 90px;
  filter: grayscale(100%);
  transition: filter 1s linear;
  &:hover {
    filter: none;
  }
`;

const SkillSubtitle = styled.p`
  font-size: 0.77rem;
  font-style: italic;
  font-weight: 500;
  line-height: 1rem;
  max-width: 4.2rem;
  color: ${props => props.theme.primaryGray};
`;

const MyTooltip = styled(ReactTooltip)`
  top: 0;
  left: 0;
  min-width: 300px;
  max-width: 80vw;
  font-size: 18px;
  @media (min-width: ${props => props.theme.desktop}) {
    min-width: 200px;
  }
`;

function Skills() {
  const ref = useRef(null);
  useOnScreen(ref, "10%");
  const {
    texts: { skills: texts }
  } = useContext(LanguageContext);

  const trail = useTrail(texts.skills.length, {
    config: { duration: 1000 },
    reset: true,
    from: { marginLeft: -50, opacity: 0, transform: "translate3d(0px, -90px, -500px)" },
    to: { marginLeft: 0, opacity: 1, transform: "translate3d(0,0px,0)" }
  });

  return (
    <Section ref={ref} id="skills">
      <SectionTitle>{texts.title}</SectionTitle>
      <Paragraph>{texts.paragraph}</Paragraph>
      <List>
        {trail.map((props, index) => (
          <ListItem key={index} style={props}>
            <SkillBox>
              <Image
                src={texts.skills[index].img}
                alt={texts.skills[index].alt}
                data-tip
                data-for={index}
                data-place="top"
                data-effect="solid"
              />
              <SkillSubtitle>{texts.skills[index].text}</SkillSubtitle>
              <MyTooltip id={`${index}`} effect="solid">
                <h2>Show sad face</h2>
                <p>{texts.skills[index].tooltipText && texts.skills[index].tooltipText}</p>
                <p>
                  Właśnie napisałem <code style={{ color: "red" }}>print "Hello World"</code>
                </p>
                <ul>
                  <li>
                    <a href="http://www.onet.pl">Netkat</a>
                  </li>
                  <li>Pan Kanapka</li>
                  <li>Site down checker</li>
                  <li>Dupa blada</li>
                </ul>
              </MyTooltip>
            </SkillBox>
          </ListItem>
        ))}
      </List>
    </Section>
  );
}

export default Skills;
