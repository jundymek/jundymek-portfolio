import styled, { keyframes } from "styled-components"
import { SectionSubtitle, BackgroundMixin, TerminalLookMixin } from "../../styles/styledComponents"

export const progress = keyframes`
  from {
    max-width: 0;
  }

  to {
    max-width: 100%;
  }
`

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 900px;
  position: relative;
  @media (min-width: ${(props) => props.theme.desktop}) {
    width: 80%;
    min-height: 560px;
  }
`

export const Title = styled.h3`
  font-size: 30px;
  margin-bottom: 0;
`

export const Subtitle = styled(SectionSubtitle)`
  font-size: 18px;
  text-align: center;
  padding: 0 10px;
  color: ${(props) => props.theme.primaryDark};
`

export const List = styled.ul`
  list-style: none;
  width: 95%;
  margin: 0;
  padding: 0;
  @media (min-width: ${(props) => props.theme.desktop}) {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

export const ListItem = styled.li`
  padding: 6px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  font-size: 14px;
  @media (min-width: ${(props) => props.theme.desktop}) {
    padding: 10px;
    width: 100%;
    font-size: 18px;
  }
`

export const Technology = styled.span<{
  width?: number
}>`
  background: ${(props) => props.theme.primaryDark};
  color: white;
  width: ${(props) => props.width}%;
  max-width: 0;
  animation: ${progress} 1s linear forwards;
  text-align: center;
  padding: 6px;
  border-radius: 2px;
  ${BackgroundMixin};
  @media (min-width: ${(props) => props.theme.desktop}) {
    padding: 10px;
  }
`

export const TechImage = styled.img`
  width: 30px;
  height: 30px;
  margin: 0 10px;
  filter: grayscale(20%);
  transition: filter 1s ease;
  :hover {
    filter: none;
  }
`

export const RepoNumber = styled.span`
  position: absolute;
  right: 10px;
  ${TerminalLookMixin};
  font-size: 40px;
`

export const RepoName = styled.span`
  display: none;
  font-size: 25px;
  @media (min-width: ${(props) => props.theme.desktop}) {
    display: block;
  }
`

export const BarWrapper = styled.div`
  display: flex;
  position: relative;
  justify-content: flex-start;
  align-items: center;
`
