import React, { useState, useEffect, useContext } from "react";
import { LanguageContext } from "../../App";
import styled, { keyframes, css } from "styled-components";
import github from "../../images/github-icon.svg";

interface Props {
  count: number;
}

const bounce = keyframes`
  0% { transform: scale(1)};
  50% { transform: scale(1.5)};
  100% {transform: scale(1)};
`;

const Container = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  right: 10px;
  bottom: 10px;
  width: 100px;
  height: 100px;
`;

const AllReposSubtitle = styled.p`
  margin: 0;
  text-align: center;
`;

const AllReposLink = styled.a`
  color: ${props => props.theme.primaryDark};
`;

const CounterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Github = styled.img`
  position: relative;
  width: 100px;
  height: 100px;
  animation: ${bounce} 1s;
`;

const Number = styled.span<Props>`
  position: absolute;
  font-size: ${props => `${20 + props.count}px`};
  animation: ${props =>
    props.count === 26
      ? css`
          ${bounce} 1s
        `
      : "none"};
`;

function RepositoriesCounter({ count }: Props) {
  const [currentNumber, setcurrentNumber] = useState(0);

  useEffect(() => {
    if (currentNumber === count) return;

    const intervalId = setInterval(() => {
      setcurrentNumber(currentNumber + 1);
    }, 90 - currentNumber * 10);
    return () => clearInterval(intervalId);
  }, [currentNumber, count]);

  const {
    texts: { contact, repositoriesCounter }
  } = useContext(LanguageContext);

  return (
    <Container>
      <AllReposSubtitle>{repositoriesCounter.subtitle}</AllReposSubtitle>
      <AllReposLink href={contact.social[0].url} title={contact.social[0].title}>
        <CounterWrapper onMouseEnter={() => setcurrentNumber(0)}>
          <Github src={github}></Github>
          <Number count={currentNumber}>{currentNumber}</Number>
        </CounterWrapper>
      </AllReposLink>
    </Container>
  );
}

export default RepositoriesCounter;
