import React, { useContext } from "react"
import { SectionTitle, SectionSubtitle } from "../../styles/styledComponents"
import { useTrail } from "react-spring"
import useOnScreen from "../../customHooks/useOnScreen"
import { LanguageContext } from "../../App"
import { Scrambler } from "react-text-scrambler"
import usePrevious from "../../customHooks/usePrevious"
import {
  List,
  ListItem,
  MyTooltip,
  Section,
  SkillBox,
  SkillSubtitle,
  TooltipItem,
  TooltipList,
  StyledImage,
} from "./Skills.styles"

export const Skills = React.forwardRef((_, ref: React.Ref<HTMLElement>) => {
  const skillsOnScreen = useOnScreen(ref, "0%").toString()
  const prevSkillsOnScreen = usePrevious(skillsOnScreen)
  const {
    texts: { skills },
  } = useContext(LanguageContext)

  const trail = useTrail(skills.skills.length, {
    config: { duration: 800 },
    reset: skillsOnScreen === "true" && prevSkillsOnScreen === "false" ? true : false,
    from: { marginLeft: -50, opacity: 0, transform: "translate3d(0px, -90px, -500px)" },
    to: { marginLeft: 0, opacity: 1, transform: "translate3d(0,0px,0)" },
  })

  return (
    <Section ref={ref} id="skills">
      <SectionTitle>
        <Scrambler text={`{ ${skills.title} }`} characters="!@#$%^&*()" renderIn={1000} />
      </SectionTitle>
      <SectionSubtitle>{skills.paragraph}</SectionSubtitle>
      <List>
        {trail.map((props, index) => (
          <ListItem key={index} style={props}>
            <SkillBox>
              <StyledImage
                src={skills.skills[index].img}
                alt={skills.skills[index].alt}
                data-tip
                data-for={index}
                data-place="top"
                data-effect="solid"
              />
              <SkillSubtitle>{skills.skills[index].text}</SkillSubtitle>
              {skills.skills[index].tooltipText.length > 0 && (
                <MyTooltip id={`${index}`}>
                  <TooltipList>
                    {skills.skills[index].tooltipText &&
                      skills.skills[index].tooltipText.map((item, index) => (
                        <TooltipItem key={index}>{item}</TooltipItem>
                      ))}
                  </TooltipList>
                </MyTooltip>
              )}
            </SkillBox>
          </ListItem>
        ))}
      </List>
    </Section>
  )
})
