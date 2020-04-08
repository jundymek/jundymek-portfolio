import React, { useState, useEffect, useRef, useContext } from "react";
import { getNumberOfReposInEachTechnology } from "./utils/getNumberOfReposInEachTechnology";
import fetchRepositiories from "./utils/fetchRepositiories";
import { TechnologyObject } from "../../helpers/types";
import styled, { keyframes } from "styled-components";
import { LanguageContext } from "../../App";
import javascriptImage from "../../images/skills-icons/javascript-icon.svg";
import pythonImage from "../../images/skills-icons/python-icon.svg";
import cssImage from "../../images/skills-icons/css3-icon.svg";
import typescriptImage from "../../images/skills-icons/typescript-icon.svg";
import htmlImage from "../../images/skills-icons/html5-icon.svg";
import otherImage from "../../images/skills-icons/other-icon.svg";
import useOnScreen from "../../customHooks/useOnScreen";
import { SectionSubtitle, BackgroundMixin, TerminalLookMixin } from "../../styles/styledComponents";
import RepositoriesCounter from "./RepositioriesCounter";
import Loader from "../Loader/Loader";

const progress = keyframes`
  from {
    max-width: 0;
  }

  to {
    max-width: 100%;
  }
`;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 900px;
  position: relative;
  @media (min-width: ${props => props.theme.desktop}) {
    width: 80%;
    min-height: 560px;
  }
`;

const Title = styled.h3`
  font-size: 30px;
  margin-bottom: 0;
`;

const Subtitle = styled(SectionSubtitle)`
  font-size: 18px;
  text-align: center;
  padding: 0 10px;
  color: ${props => props.theme.primaryDark};
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

const Technology = styled.span<Width>`
  background: ${props => props.theme.primaryDark};
  color: white;
  width: ${props => props.width}%;
  max-width: 0;
  animation: ${progress} 1s linear forwards;
  text-align: center;
  padding: 6px;
  border-radius: 2px;
  ${BackgroundMixin};
  @media (min-width: ${props => props.theme.desktop}) {
    padding: 10px;
  }
`;

const TechImage = styled.img`
  width: 30px;
  height: 30px;
  margin: 0 10px;
  filter: grayscale(20%);
  transition: filter 1s ease;
  :hover {
    filter: none;
  }
`;

const RepoNumber = styled.span`
  position: absolute;
  right: 10px;
  ${TerminalLookMixin};
  font-size: 40px;
`;

const RepoName = styled.span`
  display: none;
  font-size: 25px;
  @media (min-width: ${props => props.theme.desktop}) {
    display: block;
  }
`;

const BarWrapper = styled.div`
  display: flex;
  position: relative;
  justify-content: flex-start;
  align-items: center;
`;

type Width = {
  width: number | undefined;
};

function Repositories() {
  const [reposByTechnology, setreposByTechnology] = useState<TechnologyObject[]>();
  const [numberOfAllRepos, setNumberOfAllRepos] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const {
    texts: { repositories }
  } = useContext(LanguageContext);
  const ref = useRef(null);
  const onScreen = useOnScreen(ref, "50%");

  useEffect(() => {
    fetchRepositiories()
      .then(res => {
        const reposNumber = getNumberOfReposInEachTechnology(res.data);
        setreposByTechnology(reposNumber);
        setNumberOfAllRepos(res.data.length);
        setIsLoading(false);
      })
      .catch(e => {
        console.warn(e);
        setIsLoading(false);
      });
  }, []);

  interface Images {
    [key: string]: string;
  }

  const techImages: Images = {
    javascript: `${javascriptImage}`,
    python: `${pythonImage}`,
    css: `${cssImage}`,
    typescript: `${typescriptImage}`,
    html: `${htmlImage}`,
    other: `${otherImage}`
  };

  const maxLength = reposByTechnology && Object.entries(reposByTechnology[0])[0][1];
  return (
    <Wrapper ref={ref}>
      <Title>{repositories.title}</Title>
      <Subtitle>{repositories.subtitle}</Subtitle>
      {onScreen && !isLoading ? (
        <>
          <List>
            {reposByTechnology &&
              reposByTechnology.map((item, index) => {
                return Object.keys(item).map((key, index) => (
                  <ListItem key={index}>
                    <Technology width={maxLength && (item[key] * 100) / maxLength}>
                      <BarWrapper>
                        <RepoName>{key}</RepoName>
                        <TechImage src={`${techImages[key.toLowerCase()]}`} alt="" />
                        <RepoNumber>{item[key]}</RepoNumber>
                      </BarWrapper>
                    </Technology>
                  </ListItem>
                ));
              })}
          </List>
          <RepositoriesCounter count={numberOfAllRepos} />
        </>
      ) : (
        <Loader />
      )}
    </Wrapper>
  );
}

export default Repositories;
