import React, { useContext } from "react"
import styled from "styled-components"
import { SectionTitle, GreySection, SectionSubtitle } from "../../styles/styledComponents"
import { LanguageContext } from "../../App"
import { Scrambler } from "react-text-scrambler"
import useWindowSize from "../../customHooks/useWindowSize"
import ProjectMobile from "./ProjectMobile"
import Repositories from "../Repositories/Repositories"
import useOnScreen from "../../customHooks/useOnScreen"
import Project from "./Project"

const Wrapper = styled.div`
  /* max-width: 478px; */
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: ${(props) => props.theme.desktop}) {
    max-width: 880px;
  }
`

// export type ProjectType = {
//   img: string
//   alt: string
//   title: string
//   text: string
//   githubUrl: string
//   liveUrl: string | null
//   tech?: string[]
// }
// export interface ProjectProps {
//   project?: ProjectType
// }

const Portfolio = React.forwardRef((_, ref: React.Ref<HTMLElement>) => {
  const windowWidth = useWindowSize().width
  const mobile = windowWidth && windowWidth < 900
  // const ref = useRef(null);
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

export default Portfolio
