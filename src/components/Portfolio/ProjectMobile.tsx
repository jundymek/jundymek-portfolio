import React, { useState } from "react";
import styled from "styled-components";
import { ProjectProps } from "./Portfolio";
import { Button } from "../Button/Button";
import flipIcon from "../../images/flip-icon.svg";

type Props = {
  image?: string;
  isFlipped: boolean;
};

const Front = styled.div<Props>`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 385px;
  border: 1px solid ${props => props.theme.primaryGray};
  backface-visibility: hidden;
  background-image: url(${props => props.image});
  background-size: cover;
  transform: ${props => (props.isFlipped ? "rotateY(-180deg)" : "none")};
  transition: 1s;
  position: relative;
  -webkit-box-shadow: 6px 4px 4px -1px rgba(0, 0, 0, 0.38);
  -moz-box-shadow: 6px 4px 4px -1px rgba(0, 0, 0, 0.38);
  box-shadow: 6px 4px 4px -1px rgba(0, 0, 0, 0.38);
`;

const Back = styled.div<Props>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  height: 385px;
  background: linear-gradient(
      216deg,
      rgba(77, 77, 77, 0.05) 0%,
      rgba(77, 77, 77, 0.05) 25%,
      rgba(42, 42, 42, 0.05) 25%,
      rgba(42, 42, 42, 0.05) 38%,
      rgba(223, 223, 223, 0.05) 38%,
      rgba(223, 223, 223, 0.05) 75%,
      rgba(36, 36, 36, 0.05) 75%,
      rgba(36, 36, 36, 0.05) 100%
    ),
    linear-gradient(
      44deg,
      rgba(128, 128, 128, 0.05) 0%,
      rgba(128, 128, 128, 0.05) 34%,
      rgba(212, 212, 212, 0.05) 34%,
      rgba(212, 212, 212, 0.05) 57%,
      rgba(25, 25, 25, 0.05) 57%,
      rgba(25, 25, 25, 0.05) 89%,
      rgba(135, 135, 135, 0.05) 89%,
      rgba(135, 135, 135, 0.05) 100%
    ),
    linear-gradient(
      241deg,
      rgba(55, 55, 55, 0.05) 0%,
      rgba(55, 55, 55, 0.05) 14%,
      rgba(209, 209, 209, 0.05) 14%,
      rgba(209, 209, 209, 0.05) 60%,
      rgba(245, 245, 245, 0.05) 60%,
      rgba(245, 245, 245, 0.05) 69%,
      rgba(164, 164, 164, 0.05) 69%,
      rgba(164, 164, 164, 0.05) 100%
    ),
    linear-gradient(
      249deg,
      rgba(248, 248, 248, 0.05) 0%,
      rgba(248, 248, 248, 0.05) 32%,
      rgba(148, 148, 148, 0.05) 32%,
      rgba(148, 148, 148, 0.05) 35%,
      rgba(202, 202, 202, 0.05) 35%,
      rgba(202, 202, 202, 0.05) 51%,
      rgba(181, 181, 181, 0.05) 51%,
      rgba(181, 181, 181, 0.05) 100%
    ),
    linear-gradient(92deg, hsl(214, 0%, 11%), hsl(214, 0%, 11%));
  backface-visibility: hidden;
  transform: ${props => (!props.isFlipped ? "rotateY(180deg)" : "none")};
  transition: 1s;
  border: 1px solid ${props => props.theme.primaryDark};
  -webkit-box-shadow: 6px 4px 4px -1px rgba(0, 0, 0, 0.38);
  -moz-box-shadow: 6px 4px 4px -1px rgba(0, 0, 0, 0.38);
  box-shadow: 6px 4px 4px -1px rgba(0, 0, 0, 0.38);
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  perspective: 1000px;
  height: 385px;
  margin-bottom: 20px;
  transform-style: preserve-3d;
`;

const Text = styled.p`
  font-size: 18px;
  line-height: 22px;
  text-align: justify;
  color: white;
`;

const Title = styled.h2`
  color: white;
  margin: 10px;
`;

const TitleFront = styled(Title)`
  font-size: 20px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-bottom: 10px;
`;

const Content = styled.div`
  padding: 10px;
  height: calc(100% - 10px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const FrontWrapper = styled.div`
  width: 100%;
  background: linear-gradient(
      216deg,
      rgba(77, 77, 77, 0.05) 0%,
      rgba(77, 77, 77, 0.05) 25%,
      rgba(42, 42, 42, 0.05) 25%,
      rgba(42, 42, 42, 0.05) 38%,
      rgba(223, 223, 223, 0.05) 38%,
      rgba(223, 223, 223, 0.05) 75%,
      rgba(36, 36, 36, 0.05) 75%,
      rgba(36, 36, 36, 0.05) 100%
    ),
    linear-gradient(
      44deg,
      rgba(128, 128, 128, 0.05) 0%,
      rgba(128, 128, 128, 0.05) 34%,
      rgba(212, 212, 212, 0.05) 34%,
      rgba(212, 212, 212, 0.05) 57%,
      rgba(25, 25, 25, 0.05) 57%,
      rgba(25, 25, 25, 0.05) 89%,
      rgba(135, 135, 135, 0.05) 89%,
      rgba(135, 135, 135, 0.05) 100%
    ),
    linear-gradient(
      241deg,
      rgba(55, 55, 55, 0.05) 0%,
      rgba(55, 55, 55, 0.05) 14%,
      rgba(209, 209, 209, 0.05) 14%,
      rgba(209, 209, 209, 0.05) 60%,
      rgba(245, 245, 245, 0.05) 60%,
      rgba(245, 245, 245, 0.05) 69%,
      rgba(164, 164, 164, 0.05) 69%,
      rgba(164, 164, 164, 0.05) 100%
    ),
    linear-gradient(
      249deg,
      rgba(248, 248, 248, 0.05) 0%,
      rgba(248, 248, 248, 0.05) 32%,
      rgba(148, 148, 148, 0.05) 32%,
      rgba(148, 148, 148, 0.05) 35%,
      rgba(202, 202, 202, 0.05) 35%,
      rgba(202, 202, 202, 0.05) 51%,
      rgba(181, 181, 181, 0.05) 51%,
      rgba(181, 181, 181, 0.05) 100%
    ),
    linear-gradient(92deg, hsl(214, 0%, 11%), hsl(214, 0%, 11%));
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
`;

const FrontButton = styled.button`
  margin: 0;
  padding: 0;
  border: none;
  background-color: transparent;
  position: absolute;
  right: 10px;
  z-index: 1;
  cursor: pointer;
`;

const BackButtonFlip = styled(FrontButton)`
  bottom: 5px;
`;

const FlipImg = styled.img`
  width: 30px;
  height: 30px;
`;

const BackButton = styled(Button)`
  border: none;
  &:hover {
    border: 2px solid black;
  }
`;

function ProjectMobile({ project }: ProjectProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  console.log(isFlipped);

  const handleFlip = () => {
    console.log("Flipped");
    setIsFlipped(prevState => !prevState);
  };

  return (
    <Container>
      <Front image={project.img} isFlipped={isFlipped}>
        <FrontWrapper>
          <TitleFront>{project.title}</TitleFront>
          <FrontButton onClick={handleFlip}>
            <FlipImg src={flipIcon} alt="flip"></FlipImg>
          </FrontButton>
        </FrontWrapper>
      </Front>
      <Back isFlipped={isFlipped}>
        <Content>
          <Title>{project.title}</Title>
          <Text>{project.text}</Text>
          <ButtonWrapper>
            <BackButton>Github</BackButton>
            <BackButton>Live</BackButton>
          </ButtonWrapper>
          <BackButtonFlip onClick={() => handleFlip()}>
            <FlipImg src={flipIcon} alt="flip"></FlipImg>
          </BackButtonFlip>
        </Content>
      </Back>
    </Container>
  );
}

export default ProjectMobile;
