import React, { useContext } from "react"
import styled from "styled-components"
import { LanguageContext } from "../../App"
import { Button } from "../Button/Button"

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  background: inherit;
  clip-path: polygon(0% 0%, 100% 0, 100% 51%, 100% 100%, 0 100%);
  transition: 0.5s;
`

const ProjectImage = styled.img`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
`

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
`

const Title = styled.h2`
  opacity: 0;
  transform: translateY(-20px);
  margin-bottom: 30px;
`

const Paragraph = styled.p`
  opacity: 0;
  transform: translateY(-20px);
  font-size: 18px;
  width: 100%;
  font-family: "VT323", monospace;
  text-align: justify;
  margin: 0 auto;
  margin-bottom: 10px;
`

const List = styled.ul`
  list-style-type: none;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0;
  padding: 0;
  opacity: 0;
  text-align: left;
  font-size: 18px;
`

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
`

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
    background: ${(props) => props.theme.primaryDark};
    transition: 1s ease;
  }
  &:hover::after {
    width: 100%;
    max-width: 100%;
  }
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  justify-self: flex-end;
  margin-top: 20px;
  opacity: 0;
  bottom: 0;
  transform: translateY(-20px);
`

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
  border: 1px solid ${(props) => props.theme.primaryGray};
  -webkit-box-shadow: 6px 4px 4px -1px rgba(0, 0, 0, 0.38);
  -moz-box-shadow: 6px 4px 4px -1px rgba(0, 0, 0, 0.38);
  box-shadow: 6px 4px 4px -1px rgba(0, 0, 0, 0.38);
  height: inherit;
  &:hover ${ImageContainer} {
    clip-path: polygon(0% 0%, 0 0, 35% 51%, 0 100%, 0% 100%);
  }
  &:hover ${Title} {
    opacity: 1;
    transition: 0.2s;
    transform: translateY(0);
    transition-delay: 0.2s;
  }
  &:hover ${Paragraph} {
    opacity: 1;
    transition: 0.2s;
    transform: translateY(0);
    transition-delay: 0.4s;
  }
  &:hover ${List} {
    opacity: 1;
    transition: 0.2s;
    transform: translateY(0);
    transition-delay: 0.6s;
  }
  &:hover ${ButtonWrapper} {
    opacity: 1;
    transition: 0.2s;
    transform: translateY(0);
    transition-delay: 0.8s;
  }
`

export type ProjectType = {
  img: string
  alt: string
  title: string
  text: string
  tech?: string[]
  githubUrl: string
  liveUrl: string | null
}

type ProjectProps = {
  project: ProjectType
}

const Project = ({ project }: ProjectProps) => {
  const {
    texts: { projects },
  } = useContext(LanguageContext)
  return (
    <Box>
      <ImageContainer>
        <ProjectImage src={project.img} alt={project.title} />
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
          <Button href={project.githubUrl}>Github</Button>
          {project.liveUrl && <Button href={project.liveUrl}>Live</Button>}
        </ButtonWrapper>
      </Content>
    </Box>
  )
}

export default Project
