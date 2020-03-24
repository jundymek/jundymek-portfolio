import React, { useState, useEffect, useContext } from "react";
import { getNumberOfReposInEachTechnology } from "./utils/getNumberOfReposInEachTechnology";
import fetchRepositiories from "./utils/fetchRepositiories";
import { TechnologyObject } from "../../helpers/types";
import styled, { keyframes } from "styled-components";
import { LanguageContext } from "../../App";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 900px;
  @media (min-width: ${props => props.theme.desktop}) {
    width: 80%;
  }
`;

const Title = styled.h3`
  font-size: 22px;
  margin-bottom: 0;
`;

const Subtitle = styled.p`
  font-size: 16px;
  margin-top: 0;
  text-align: center;
  color: ${props => props.theme.primaryGray};
`;

const List = styled.ul`
  list-style: none;
  width: 95%;
  margin: 0;
  padding: 0;
  @media (min-width: ${props => props.theme.desktop}) {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const ListItem = styled.li`
  padding: 6px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  font-size: 14px;
  @media (min-width: ${props => props.theme.desktop}) {
    padding: 10px;
    width: 100%;
    font-size: 18px;
  }
`;

const progress = keyframes`
  from {
    max-width: 0;
  }

  to {
    max-width: 100%;
  }
`;

type Width = {
  width: number | undefined;
};

const Technology = styled.span<Width>`
  background: ${props => props.theme.primaryDark};
  color: white;
  width: ${props => props.width}%;
  max-width: 0;
  animation: ${progress} 1s linear forwards;
  text-align: center;
  padding: 6px;
  border-radius: 2px;
  -webkit-box-shadow: 6px 4px 4px -1px rgba(0, 0, 0, 0.38);
  -moz-box-shadow: 6px 4px 4px -1px rgba(0, 0, 0, 0.38);
  box-shadow: 6px 4px 4px -1px rgba(0, 0, 0, 0.38);
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
  @media (min-width: ${props => props.theme.desktop}) {
    padding: 10px;
  }
`;

function Repositories() {
  const [numberRepos, setNumberRepos] = useState<TechnologyObject[]>();
  const {
    texts: { repositories }
  } = useContext(LanguageContext);

  useEffect(() => {
    fetchRepositiories().then(res => {
      const data = getNumberOfReposInEachTechnology(res.data);
      setNumberRepos(data);
    });
  }, []);

  const maxLength = numberRepos && Object.entries(numberRepos[0])[0][1];
  return (
    <Wrapper>
      <Title>{repositories.title}</Title>
      <Subtitle>{repositories.subtitle}</Subtitle>
      <List>
        {numberRepos &&
          numberRepos.map((item, index) => {
            return Object.keys(item).map((key, index) => (
              <ListItem key={index}>
                <Technology width={maxLength && (item[key] * 100) / maxLength}>
                  {key} - {item[key]}
                </Technology>
              </ListItem>
            ));
          })}
      </List>
    </Wrapper>
  );
}

export default Repositories;
