import { animated } from "react-spring"
import { Tooltip as ReactTooltip } from "react-tooltip"
import styled from "styled-components"

export const Section = styled.section`
  display: block;
  margin: 0 auto;
  max-width: 1440px;
  @media (min-width: ${(props) => props.theme.desktop}) {
    scroll-margin-top: 300px;
  }
`

export const List = styled.ul`
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
`

export const ListItem = styled(animated.li)`
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const SkillBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const StyledImage = styled.img`
  width: 90px;
  height: 90px;
  filter: grayscale(50%);
  transition: filter 1s linear;
  &:hover {
    filter: none;
  }
`

export const SkillSubtitle = styled.p`
  font-size: 14px;
  font-style: italic;
  color: ${(props) => props.theme.primaryGray};
  max-width: 80%;
`

export const MyTooltip = styled(ReactTooltip)`
  top: 0;
  left: 0;
  max-width: 80vw;
  font-size: 18px;
  position: absolute;
  @media (min-width: ${(props) => props.theme.desktop}) {
    min-width: 200px;
  }
`

export const TooltipList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  opacity: 1;
`

export const TooltipItem = styled.li`
  padding: 5px;
`
