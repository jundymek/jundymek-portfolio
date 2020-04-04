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
import { SectionSubtitle } from "../../styles/styledComponents";
import RepositoriesCounter from "./RepositioriesCounter";

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
  font-size: 22px;
  margin-bottom: 0;
`;

const Subtitle = styled(SectionSubtitle)`
  font-size: 18px;
  text-align: center;
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

const TechImage = styled.img`
  width: 30px;
  height: 30px;
  margin: 0 10px;
  filter: grayscale(80%);
  transition: filter 1s ease;
  :hover {
    filter: none;
  }
`;

const RepoNumber = styled.div`
  position: absolute;
  right: -8px;
  width: 60px;
  clip-path: polygon(100% 0, 0% 100%, 100% 100%);
  height: calc(100% + 12px);
  color: white;
  background: ${props => props.theme.primaryGray};
  display: flex;
  font-size: 30px;
  padding-right: 5px;
  justify-content: flex-end;
  align-items: flex-end;
  @media (min-width: ${props => props.theme.desktop}) {
    right: -11px;
    height: calc(100% + 20px);
  }
`;
const RepoName = styled.span`
  display: none;
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
  const {
    texts: { repositories }
  } = useContext(LanguageContext);
  const ref = useRef(null);
  const onScreen = useOnScreen(ref, "50%");

  useEffect(() => {
    fetchRepositiories().then(res => {
      const reposNumber = getNumberOfReposInEachTechnology(res.data);
      setreposByTechnology(reposNumber);
      setNumberOfAllRepos(res.data.length);
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
      {onScreen && (
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
      )}
    </Wrapper>
  );
}

export default Repositories;
