import React, { useState, useEffect, useRef, useContext } from "react"
import { getNumberOfReposInEachTechnology } from "./utils/getNumberOfReposInEachTechnology"
import fetchRepositiories from "./utils/fetchRepositiories"
import { TechnologyObject } from "../../helpers/types"
import { LanguageContext } from "../../App"
import javascriptImage from "../../images/skills-icons/javascript-icon.svg"
import pythonImage from "../../images/skills-icons/python-icon.svg"
import cssImage from "../../images/skills-icons/css3-icon.svg"
import typescriptImage from "../../images/skills-icons/typescript-icon.svg"
import htmlImage from "../../images/skills-icons/html5-icon.svg"
import vueImage from "../../images/skills-icons/vue.svg"
import otherImage from "../../images/skills-icons/other-icon.svg"
import useOnScreen from "../../customHooks/useOnScreen"

import {
  BarWrapper,
  List,
  ListItem,
  RepoName,
  RepoNumber,
  Subtitle,
  TechImage,
  Technology,
  Title,
  Wrapper,
} from "./Repositories.styles"
import { Loader } from "../Loader/Loader"
import { RepositoriesCounter } from "./RepositoriesCounter/RepositioriesCounter"

export const Repositories = () => {
  const [reposByTechnology, setreposByTechnology] = useState<TechnologyObject[]>()
  const [numberOfAllRepos, setNumberOfAllRepos] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const {
    texts: { repositories },
  } = useContext(LanguageContext)
  const ref = useRef(null)
  const onScreen = useOnScreen(ref, "50%")

  useEffect(() => {
    fetchRepositiories()
      .then((res) => {
        const reposNumber = getNumberOfReposInEachTechnology(res.data)
        setreposByTechnology(reposNumber)
        setNumberOfAllRepos(res.data.length)
        setIsLoading(false)
      })
      .catch((e) => {
        console.warn(e)
        setIsLoading(false)
      })
  }, [])

  interface Images {
    [key: string]: string
  }

  const techImages: Images = {
    javascript: `${javascriptImage}`,
    python: `${pythonImage}`,
    css: `${cssImage}`,
    typescript: `${typescriptImage}`,
    html: `${htmlImage}`,
    vue: `${vueImage}`,
    other: `${otherImage}`,
  }

  const maxLength = reposByTechnology && Object.entries(reposByTechnology[0])[0][1]
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
                ))
              })}
          </List>
          <RepositoriesCounter count={numberOfAllRepos} />
        </>
      ) : (
        <Loader />
      )}
    </Wrapper>
  )
}
