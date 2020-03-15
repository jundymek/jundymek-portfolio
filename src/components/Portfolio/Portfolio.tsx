import React from "react";
import styled from "styled-components";
import { SectionTitle, GreySection } from "../../styles/styledComponents";
import image1 from "../../images/project1-desktop.png";
import image2 from "../../images/project2-desktop.png";
import image3 from "../../images/project3-desktop.png";

const Wrapper = styled.div`
  padding: 0 29px;
  max-width: 478px;
  @media (min-width: ${props => props.theme.desktop}) {
    max-width: 923px;
  }
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Link = styled.a`
  display: block;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  text-decoration-line: underline;
  text-align: center;
  margin: 32px 0 76px 0;
  color: ${props => props.theme.primaryDark};
`;

const projects = [
  { img: `${image1}`, alt: "Project", text: "Online fashion store - Homepage" },
  { img: `${image2}`, alt: "Project", text: "Reebok Store - Concept" },
  { img: `${image3}`, alt: "Project", text: "Braun Landing Page - Concept" }
];

function Portfolio() {
  return (
    <GreySection>
      <Wrapper>
        <SectionTitle>Portfolio</SectionTitle>
        {projects.map((project, index) => (
          <>
            <img src={project.img} alt={project.alt} />
            <Link href="#">{project.text}</Link>
          </>
        ))}
      </Wrapper>
    </GreySection>
  );
}

export default Portfolio;
