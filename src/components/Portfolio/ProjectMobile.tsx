import React from "react";
import styled from "styled-components";
import { ProjectProps } from "./Portfolio";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
`;

const Image = styled.img`
  width: 100%;
`;

const Text = styled.p`
  font-size: 18px;
  line-height: 22px;
  text-align: justify;
  color: ${props => props.theme.primaryDark};
`

const Title1 = styled.h2``;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5px;
  border: 1px solid ${props => props.theme.primaryDark};
`

function ProjectMobile({ project }: ProjectProps) {
  return (
    <Container>
      <Title1>{project.title}</Title1>
      <Wrapper>
        <Image src={project.img} alt={project.alt} />
        <Text>{project.text}</Text>
      </Wrapper>
    </Container>
  );
}

export default ProjectMobile;
