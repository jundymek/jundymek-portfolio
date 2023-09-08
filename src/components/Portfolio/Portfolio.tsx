import { forwardRef, useContext } from "react"
import { SectionTitle, GreySection, SectionSubtitle } from "../../styles/styledComponents"
import { LanguageContext } from "../../App"
import useWindowSize from "../../customHooks/useWindowSize"
import { Project } from "./Project/Project"
import { Wrapper } from "./Portfolio.styles"
import { ProjectMobile } from "./ProjectMobile/ProjectMobile"
import { Repositories } from "../Repositories/Repositories"
import { TextScrambler } from "../TextScrambler/TextScrambler"

export const Portfolio = forwardRef((_, ref: React.Ref<HTMLElement>) => {
  const windowWidth = useWindowSize().width
  const mobile = windowWidth && windowWidth < 900

  const {
    texts: { projects },
  } = useContext(LanguageContext)

  return (
    <GreySection id="portfolio" ref={ref}>
      <Wrapper>
        <SectionTitle>
          <TextScrambler text={[projects.title]} characters="!@#$%^&*()" duration={1000} />
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
