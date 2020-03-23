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

  console.log(numberRepos);
  const maxLength = numberRepos && Object.entries(numberRepos[0])[0][1];
  console.log(maxLength);
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
