import styled from "styled-components"
import { WhiteDiv } from "../../styles/styledComponents"

export const Container = styled(WhiteDiv)<{
  isVisible?: boolean
  isFixed?: boolean
}>`
  padding: ${(props) => (props.isVisible || props.isFixed) && "0"};
`
