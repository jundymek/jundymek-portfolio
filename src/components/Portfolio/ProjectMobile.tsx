import React from "react";
import styled from "styled-components";
import { ProjectProps } from "./Portfolio";
import Button from "../Button/Button";

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
`;

const Title1 = styled.h2``;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5px;
  border: 1px solid ${props => props.theme.primaryDark};
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 20px;
`;

function ProjectMobile({ project }: ProjectProps) {
  return (
    <Container>
      <Title1>{project.title}</Title1>
      <Wrapper>
        <Image src={project.img} alt={project.alt} />
        <Text>{project.text}</Text>
        <ButtonWrapper>
          <Button label="Github" />
          <Button label="Live" />
        </ButtonWrapper>
      </Wrapper>
    </Container>
  );
}

export default ProjectMobile;
