import { useState } from "react"
import { ProjectType } from "../Project/Project"
import {
  Container,
  Front,
  FrontWrapper,
  TitleFront,
  FrontButton,
  FlipImg,
  Back,
  Content,
  Title,
  ButtonWrapper,
  BackButton,
  BackButtonFlip,
  StyledText,
} from "./ProjectMobile.styles"

type ProjectMobileProps = {
  project: ProjectType
}

export const ProjectMobile = ({ project }: ProjectMobileProps) => {
  const [isFlipped, setIsFlipped] = useState(false)

  const handleFlip = () => {
    console.log("Flipped")
    setIsFlipped((prevState) => !prevState)
  }

  return (
    <Container>
      <Front image={project.img} isFlipped={isFlipped}>
        <FrontWrapper>
          <TitleFront>{project.title}</TitleFront>
          <FrontButton onClick={handleFlip}>
            <FlipImg />
          </FrontButton>
        </FrontWrapper>
      </Front>
      <Back isFlipped={isFlipped}>
        <Content>
          <Title>{project.title}</Title>
          <StyledText>{project.text}</StyledText>
          <ButtonWrapper>
            <BackButton href={project.githubUrl}>Github</BackButton>
            {project.liveUrl && <BackButton href={project.liveUrl}>Live</BackButton>}
          </ButtonWrapper>
          <BackButtonFlip onClick={() => handleFlip()}>
            <FlipImg />
          </BackButtonFlip>
        </Content>
      </Back>
    </Container>
  )
}
