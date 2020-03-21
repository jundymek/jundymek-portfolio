import React, { useRef } from "react";
import styled from "styled-components";
import { SectionTitle } from "../../styles/styledComponents";
import photoImage from "../../images/photoshop-icon-mobile.png";
import aiImage from "../../images/ilustrator-icon-mobile.png";
import adobeAeImage from "../../images/aftereffects-icon-mobile.png";
import figmaImage from "../../images/figma-icon-mobile.png";
import { useTrail, animated } from "react-spring";
import useOnScreen from "../../customHooks/useOnScreen";

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

const SkillSubtitle = styled.p`
  font-size: 0.77rem;
  font-style: italic;
  font-weight: 500;
  line-height: 1rem;
  max-width: 4.2rem;
  color: ${props => props.theme.primaryGray};
`;

const items = [
  { img: `${photoImage}`, alt: "Photoshop", text: "Adobe Photoshop" },
  { img: `${aiImage}`, alt: "Adobe ilustrator", text: "Adobe ilustrator" },
  { img: `${adobeAeImage}`, alt: "Adobe after effects", text: "Adobe after effects" },
  { img: `${figmaImage}`, alt: "Figma", text: "Figma" }
];

function Skills() {
  const ref = useRef(null);
  const onScreen = useOnScreen(ref, "0%");

  const trail = useTrail(items.length, {
    config: { duration: 1000 },
    reset: false,
    from: { marginLeft: -50, opacity: 0, transform: "translate3d(0px, -90px, -500px)" },
    to: { marginLeft: 0, opacity: 1, transform: "translate3d(0,0px,0)" }
  });

  return (
    <div ref={ref} id="skills">
      {onScreen && (
        <Section>
          <SectionTitle>Skills</SectionTitle>
          <Paragraph>I work in such programs as</Paragraph>
          <List>
            {trail.map((props, index) => (
              <ListItem key={index} style={props}>
                <SkillBox>
                  <img src={items[index].img} alt={items[index].alt} />
                  <SkillSubtitle>{items[index].text}</SkillSubtitle>
                </SkillBox>
              </ListItem>
            ))}
          </List>
        </Section>
      )}
    </div>
  );
}

export default Skills;
