import React from "react";
import styled from "styled-components";
import { SectionTitle, GreySection } from "../../styles/styledComponents";
import image1 from "../../images/project1-desktop.png";
import image2 from "../../images/project2-desktop.png";
import image3 from "../../images/project3-desktop.png";
import image4 from "../../images/netkat-project.png";
import useWindowSize from "../../customHooks/useWindowSize";

const Wrapper = styled.div`
  max-width: 478px;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: ${props => props.theme.desktop}) {
    max-width: 923px;
  }
`;

const Image = styled.img`
  width: 95%;
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
  // { img: `${image1}`, alt: "Project", title: "", text: "Online fashion store - Homepage" },
  // { img: `${image2}`, alt: "Project", title: "", text: "Reebok Store - Concept" },
  // { img: `${image3}`, alt: "Project", title: "", text: "Braun Landing Page - Concept" },
  {
    img: `${image4}`,
    alt: "Project",
    title: "Netkat - katalog stron",
    text:
      "Skrypt katalogu stron internetowych napisany w Pythonie/Django. Jest to mój pierwszy większy projekt, który pisałem ucząc się wymienionych technologii.",
    tech: ["Python", "Django", "Django rest framework"]
  }
];

function Portfolio() {
  const windowWidth = useWindowSize().width;
  const mobile = windowWidth && windowWidth < 800;
  return (
    <GreySection id="portfolio">
      <Wrapper>
        <SectionTitle>Portfolio</SectionTitle>
        {!mobile
          ? projects.map((project, index) => <Project project={project} index={index} />)
          : projects.map((project, index) => (
              <div key={index}>
                <Image src={project.img} alt={project.alt} />
                <Link href="#">{project.text}</Link>
              </div>
            ))}
      </Wrapper>
    </GreySection>
  );
}

export default Portfolio;

interface Project {
  img: string;
  alt: string;
  title: string;
  text: string;
  tech?: string[];
}
interface ProjectProps {
  project: Project;
  index: number;
}

const ImageContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: inherit;
  clip-path: polygon(0% 0%, 100% 0, 100% 51%, 100% 100%, 0 100%);
  transition: 0.5s;
`;

const Title = styled.h2`
  opacity: 0;
  transition: 0.5s;
  transform: translateY(-20px);
`;

const Paragraph = styled.p`
  opacity: 0;
  transition: 0.5s;
  transform: translateY(-20px);
  font-size: 18px;
  width: 100%;
  text-align: justify;
  margin: 0 auto;
  margin-bottom: 10px;
`;

const List = styled.ul`
  list-style-type: none;
  transform: translateY(-20px);
  opacity: 0;
  font-size: 18px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  justify-self: flex-end;
  margin-top: 20px;
  opacity: 0;
  bottom: 0;
  transform: translateY(-20px);
`;

const Box = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 95%;
  height: 600px;
  margin: 20px 0;
  box-sizing: content-box;
  overflow: hidden;
  &:hover ${ImageContainer} {
    clip-path: polygon(0% 0%, 0 0, 35% 51%, 0 100%, 0% 100%);
  }
  &:hover ${Title} {
    opacity: 1;
    transform: translateY(0);
    transition-delay: 0.5s;
  }
  &:hover ${Paragraph} {
    opacity: 1;
    transform: translateY(0);
    transition-delay: 1s;
  }
  &:hover ${List} {
    opacity: 1;
    transform: translateY(0);
    transition-delay: 1.5s;
  }
  &:hover ${ButtonWrapper} {
    opacity: 1;
    transform: translateY(0);
    transition-delay: 2s;
  }
`;

const ProjectImage = styled.img`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const Content = styled.div`
  position: absolute;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 60%;
  height: 100%;
  box-sizing: border-box;
  text-align: center;
`;

const ListItem = styled.li`
  margin: 0;
  padding: 2px;
  position: relative;
  display: table;
  &:before {
    position: absolute;
    content: "✓";
    left: -15px;
    top: 2px;
  }
  &:after {
    position: absolute;
    display: block;
    content: "";
    bottom: 0;
    width: 0;
    max-width: 0;
    height: 1px;
    background: ${props => props.theme.primaryDark};
    transition: 1s ease;
  }
  &:hover::after {
    width: 100%;
    max-width: 100%;
  }
`;

const Button = styled.button`
  background-color: ${props => props.theme.primaryDark};
  border-radius: 50px;
  width: 100%;
  height: 42px;
  color: #fff;
  margin-bottom: 48px;
  font-size: 18px;
  margin: 20px;
  cursor: pointer;
  @media (min-width: ${props => props.theme.desktop}) {
    width: 178px;
  }
`;

function Project({ project, index }: ProjectProps) {
  return (
    <Box>
      <ImageContainer>
        <ProjectImage src={project.img} alt="" />
      </ImageContainer>
      <Content>
        <Title>{project.title}</Title>
        <Paragraph>{project.text}</Paragraph>
        <Paragraph>
          Użyte technologie{" "}               
          <span role="img" aria-label="technologie">
            🚀
          </span>
        </Paragraph>
        <List>
          {project.tech && project.tech.map((technology, index) => <ListItem key={index}>{technology}</ListItem>)}
        </List>
        <ButtonWrapper>
          <Button>Github</Button>
          <Button>Live</Button>
        </ButtonWrapper>
      </Content>
    </Box>
  );
}
