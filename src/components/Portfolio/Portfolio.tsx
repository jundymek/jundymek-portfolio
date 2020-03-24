import React, { useRef } from "react";
import styled from "styled-components";
import { SectionTitle, GreySection } from "../../styles/styledComponents";
import image1 from "../../images/free_proxy.gif";
import image4 from "../../images/netkat-project.png";
import useWindowSize from "../../customHooks/useWindowSize";
import ProjectMobile from "./ProjectMobile";
import Repositories from "../Repositories/Repositories";
import useOnScreen from "../../customHooks/useOnScreen";

const Wrapper = styled.div`
  max-width: 478px;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: ${props => props.theme.desktop}) {
    max-width: 880px;
  }
`;

const projects = [
  {
    img: `${image1}`,
    alt: "Free proxy",
    title: "Free proxy",
    text: "Prosty scraper darmowych proxy. Skrypt pobiera listę proxy ze strony https://www.sslproxies.org/",
    tech: ["Python"]
  },
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
  const mobile = windowWidth && windowWidth < 900;
  const ref = useRef(null);
  const onScreen = useOnScreen(ref, "0px");
  return (
    <GreySection ref={ref} id="portfolio">
      {onScreen && (
        <Wrapper>
          <SectionTitle>Portfolio</SectionTitle>
          {!mobile
            ? projects.map((project, index) => <Project key={index} project={project} />)
            : projects.map((project, index) => <ProjectMobile key={index} project={project} />)}
        </Wrapper>
      )}
      <Repositories />
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
export interface ProjectProps {
  project: Project;
}

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  background: inherit;
  clip-path: polygon(0% 0%, 100% 0, 100% 51%, 100% 100%, 0 100%);
  transition: 0.5s;
`;

const Title = styled.h2`
  opacity: 0;
  transform: translateY(-20px);
  margin-bottom: 30px;
`;

const Paragraph = styled.p`
  opacity: 0;
  transform: translateY(-20px);
  font-size: 18px;
  width: 100%;
  font-family: "VT323", monospace;
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
  width: 100%;
  height: 400px;
  margin: 20px 0;
  padding: 10px;
  border: 1px solid ${props => props.theme.primaryGray};
  -webkit-box-shadow: 6px 4px 4px -1px rgba(0, 0, 0, 0.38);
  -moz-box-shadow: 6px 4px 4px -1px rgba(0, 0, 0, 0.38);
  box-shadow: 6px 4px 4px -1px rgba(0, 0, 0, 0.38);
  &:hover ${ImageContainer} {
    clip-path: polygon(0% 0%, 0 0, 35% 51%, 0 100%, 0% 100%);
  }
  &:hover ${Title} {
    opacity: 1;
    transition: 0.5s;
    transform: translateY(0);
    transition-delay: 0.5s;
  }
  &:hover ${Paragraph} {
    opacity: 1;
    transition: 0.5s;
    transform: translateY(0);
    transition-delay: 1s;
  }
  &:hover ${List} {
    opacity: 1;
    transition: 0.5s;
    transform: translateY(0);
    transition-delay: 1.5s;
  }
  &:hover ${ButtonWrapper} {
    opacity: 1;
    transition: 0.5s;
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
  padding-right: 20px;
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

function Project({ project }: ProjectProps) {
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
