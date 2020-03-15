import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../styles/styledComponents";
import photoImage from "../../images/photoshop-icon-mobile.png";
import aiImage from "../../images/ilustrator-icon-mobile.png";
import adobeAeImage from "../../images/aftereffects-icon-mobile.png";
import figmaImage from "../../images/figma-icon-mobile.png";

const Section = styled.section`
  display: block;
  margin: 0 auto;
  @media (min-width: ${props => props.theme.desktop}) {
    width: 50%;
  }
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
  row-gap: 80px;
  text-align: center;
  @media (min-width: ${props => props.theme.desktop}) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    column-gap: 10%;
  }
  
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

const skills = [
  { img: `${photoImage}`, alt: "Photoshop", text: "Adobe Photoshop" },
  { img: `${aiImage}`, alt: "Adobe ilustrator", text: "Adobe ilustrator" },
  { img: `${adobeAeImage}`, alt: "Adobe after effects", text: "Adobe after effects" },
  { img: `${figmaImage}`, alt: "Figma", text: "Figma" },
];

function Skills() {
  return (
    <Section>
      <SectionTitle>Skills</SectionTitle>
      <Paragraph>I work in such programs as</Paragraph>
      <List>
        {skills.map((skill, index) => (
          <li key={index}>
            <SkillBox>
              <img src={skill.img} alt={skill.alt} />
            <SkillSubtitle>{skill.text}</SkillSubtitle>
            </SkillBox>
          </li>
        ))}
      </List>
    </Section>
  );
}

export default Skills;
