import React, { useContext } from "react";
import styled from "styled-components";
import { SectionTitle, SectionSubtitle } from "../../styles/styledComponents";
import { useTrail, animated } from "react-spring";
import useOnScreen from "../../customHooks/useOnScreen";
import { LanguageContext } from "../../App";
import ReactTooltip from "react-tooltip";
import { Scrambler } from "react-text-scrambler";
import usePrevious from "../../customHooks/usePrevious";

const Section = styled.section`
  display: block;
  margin: 0 auto;
  max-width: 1440px;
  @media (min-width: ${(props) => props.theme.desktop}) {
    scroll-margin-top: 300px;
  }
`;

const List = styled.ul`
  display: grid;
  margin: 0;
  padding: 0;
  list-style-type: none;
  grid-template-columns: 1fr 1fr;
  row-gap: 40px;
  text-align: center;
  justify-items: center;
  @media (min-width: ${(props) => props.theme.desktop}) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    column-gap: 10%;
    padding: 0 100px;
  }
`;

const ListItem = styled(animated.li)`
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SkillBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: 90px;
  height: 90px;
  filter: grayscale(50%);
  transition: filter 1s linear;
  &:hover {
    filter: none;
  }
`;

const SkillSubtitle = styled.p`
  font-size: 14px;
  font-style: italic;
  color: ${(props) => props.theme.primaryGray};
  max-width: 80%;
`;

const MyTooltip = styled(ReactTooltip)`
  top: 0;
  left: 0;
  max-width: 80vw;
  font-size: 18px;
  position: absolute;
  @media (min-width: ${(props) => props.theme.desktop}) {
    min-width: 200px;
  }
`;

const TooltipList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  opacity: 1;
`;

const TooltipItem = styled.li`
  padding: 5px;
`;

const Skills = React.forwardRef((props, ref: React.Ref<HTMLElement>) => {
  const skillsOnScreen = useOnScreen(ref, "0%").toString();
  const prevSkillsOnScreen = usePrevious(skillsOnScreen)
  const {
    texts: { skills },
  } = useContext(LanguageContext);

  const trail = useTrail(skills.skills.length, {
    config: { duration: 800 },
    reset: skillsOnScreen === "true" && prevSkillsOnScreen === "false" ? true : false,
    from: { marginLeft: -50, opacity: 0, transform: "translate3d(0px, -90px, -500px)" },
    to: { marginLeft: 0, opacity: 1, transform: "translate3d(0,0px,0)" },
  });

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
              <Image
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
  );
});

export default Skills;
