import styled from "styled-components"

export const Wrapper = styled.div`
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
