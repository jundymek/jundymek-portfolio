import { useContext } from "react"
import { LanguageContext } from "../../../App"
import { Button } from "../../Button/Button"
import {
  Box,
  ImageContainer,
  ProjectImage,
  Content,
  Title,
  Paragraph,
  List,
  ListItem,
  TechItem,
  ButtonWrapper,
} from "./Project.styles"

export type ProjectType = {
  img: string
  alt: string
  title: string
  text: string
  githubUrl: string
  liveUrl: string | null
  tech?: string[]
}

type ProjectProps = {
  project: ProjectType
}

export const Project = ({ project }: ProjectProps) => {
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
