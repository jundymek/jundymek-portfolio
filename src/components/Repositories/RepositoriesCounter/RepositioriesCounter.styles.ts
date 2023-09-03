import styled, { keyframes, css } from "styled-components"

export const bounce = keyframes`
  0% { transform: scale(1)};
  50% { transform: scale(1.5)};
  100% {transform: scale(1)};
`

export const Container = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  right: 10px;
  bottom: 10px;
  width: 100px;
  height: 100px;
`

export const AllReposSubtitle = styled.p`
  margin: 0;
  text-align: center;
`

export const AllReposLink = styled.a`
  color: ${(props) => props.theme.primaryDark};
`

export const CounterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Github = styled.img`
  position: relative;
  width: 100px;
  height: 100px;
  animation: ${bounce} 1s;
`

export const StyledNumber = styled.span<{
  count: number
}>`
  position: absolute;
  font-size: ${(props) => `${20 + props.count}px`};
  animation: ${(props) =>
    props.count === 26
      ? css`
          ${bounce} 1s
        `
      : "none"};
`
