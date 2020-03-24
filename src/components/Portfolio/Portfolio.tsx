import React, { useRef, useContext } from "react";
import styled from "styled-components";
import { SectionTitle, GreySection, SectionSubtitle } from "../../styles/styledComponents";
import { LanguageContext } from "../../App";
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

function Portfolio() {
  const windowWidth = useWindowSize().width;
  const mobile = windowWidth && windowWidth < 900;
  const ref = useRef(null);
  useOnScreen(ref, "0px");
  const {
    texts: { projects }
  } = useContext(LanguageContext);
  return (
    <GreySection ref={ref} id="portfolio">
      <Wrapper>
        <SectionTitle>{projects.title}</SectionTitle>
        <SectionSubtitle>{projects.subtitle}</SectionSubtitle>
        {!mobile
          ? projects.projects.map((project, index) => <Project key={index} project={project} />)
          : projects.projects.map((project, index) => <ProjectMobile key={index} project={project} />)}
      </Wrapper>
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
  /* transform: translateY(-20px); */
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0;
  padding: 0;
  opacity: 0;
  text-align: left;
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
  height: 100%;
  margin: 20px 0;
  padding: 10px;
  border: 1px solid ${props => props.theme.primaryGray};
  -webkit-box-shadow: 6px 4px 4px -1px rgba(0, 0, 0, 0.38);
  -moz-box-shadow: 6px 4px 4px -1px rgba(0, 0, 0, 0.38);
  box-shadow: 6px 4px 4px -1px rgba(0, 0, 0, 0.38);
  height: inherit;
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
  height: inherit;
  box-sizing: border-box;
  text-align: center;
`;

const ListItem = styled.li`
  margin: 0;
  padding: 2px;
  position: relative;
  &:before {
    position: absolute;
    content: "✓";
    left: -15px;
    top: 2px;
  }
`;

const TechItem = styled.span`
  width: auto;
  position: relative;
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
  font-size: 18px;
  margin: 20px;
  border: 2px solid black;
  text-transform: uppercase;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  z-index: 1;
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    color: ${props => props.theme.primaryDark};
    border-radius: 50px;
    border: 2px solid black;
    z-index: -2;
  }
  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    min-width: 0;
    height: 100%;
    color: ${props => props.theme.primaryDark};
    background-color: white;
    border-radius: 50px;
    border: 2px solid black;
    transition: all 0.3s;
    z-index: -1;
  }
  &:hover {
    color: ${props => props.theme.primaryDark};
    &::before {
      min-width: 100%;
    }
  }
  @media (min-width: ${props => props.theme.desktop}) {
    width: 178px;
  }
`;

function Project({ project }: ProjectProps) {
  const {
    texts: { projects }
  } = useContext(LanguageContext);
  return (
    <Box>
      <ImageContainer>
        <ProjectImage src={project.img} alt="" />
      </ImageContainer>
      <Content>
        <Title>{project.title}</Title>
        <Paragraph>{project.text}</Paragraph>
        <Paragraph>
          {projects.paragraph}{" "}
          <span role="img" aria-label="technologie">
            🚀
          </span>
        </Paragraph>
        <List>
          {project.tech &&
            project.tech.map((technology, index) => (
              <ListItem key={index}>
                <TechItem>{technology}</TechItem>
              </ListItem>
            ))}
        </List>
        <ButtonWrapper>
          <Button>Github</Button>
          <Button>Live</Button>
        </ButtonWrapper>
      </Content>
    </Box>
  );
}
