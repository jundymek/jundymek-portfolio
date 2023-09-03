import React, { useState, useEffect, useContext } from "react"
import { LanguageContext } from "../../../App"
import github from "../../../images/github-icon.svg"
import {
  AllReposLink,
  AllReposSubtitle,
  Container,
  CounterWrapper,
  Github,
  StyledNumber,
} from "./RepositioriesCounter.styles"

type RepositoriesCounterProps = {
  count: number
}

export const RepositoriesCounter = ({ count }: RepositoriesCounterProps) => {
  const [currentNumber, setcurrentNumber] = useState(0)

  useEffect(() => {
    if (currentNumber === count) return

    const intervalId = setInterval(() => {
      setcurrentNumber(currentNumber + 1)
    }, 90 - currentNumber * 10)
    return () => clearInterval(intervalId)
  }, [currentNumber, count])

  const {
    texts: { contact, repositoriesCounter },
  } = useContext(LanguageContext)

  return (
    <Container>
      <AllReposSubtitle>{repositoriesCounter.subtitle}</AllReposSubtitle>
      <AllReposLink href={contact.social[0].url} title={contact.social[0].title}>
        <CounterWrapper onMouseEnter={() => setcurrentNumber(0)}>
          <Github src={github}></Github>
          <StyledNumber count={currentNumber}>{currentNumber}</StyledNumber>
        </CounterWrapper>
      </AllReposLink>
    </Container>
  )
}
