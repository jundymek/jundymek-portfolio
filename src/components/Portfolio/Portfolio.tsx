import React, { useContext } from "react"
import { SectionTitle, GreySection, SectionSubtitle } from "../../styles/styledComponents"
import { LanguageContext } from "../../App"
import { Scrambler } from "react-text-scrambler"
import useWindowSize from "../../customHooks/useWindowSize"
import useOnScreen from "../../customHooks/useOnScreen"
import Project from "./Project/Project"
import { Wrapper } from "./Portfolio.styles"
import { ProjectMobile } from "./ProjectMobile/ProjectMobile"
import { Repositories } from "../Repositories/Repositories"

export const Portfolio = React.forwardRef((_, ref: React.Ref<HTMLElement>) => {
  const windowWidth = useWindowSize().width
  const mobile = windowWidth && windowWidth < 900

  useOnScreen(ref, "0px")
  const {
    texts: { projects },
  } = useContext(LanguageContext)

  return (
    <GreySection ref={ref} id="portfolio">
      <Wrapper>
        <SectionTitle>
          <Scrambler text={`{ ${projects.title} }`} characters="!@#$%^&*()" renderIn={1000} />
        </SectionTitle>
        <SectionSubtitle>{projects.subtitle}</SectionSubtitle>
        {!mobile
          ? projects.projects.map((project, index) => <Project key={index} project={project} />)
          : projects.projects.map((project, index) => <ProjectMobile key={index} project={project} />)}
      </Wrapper>
      <Repositories />
    </GreySection>
  )
})
