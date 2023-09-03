import React from "react"
import useWindowSize from "../../customHooks/useWindowSize"
import heroBig from "../../images/hero/hero-image-big-min.png"
import heroSmall from "../../images/hero/hero-image-small-min.png"
import { ImageWrapper, StyledImage } from "./HeroImage.styles"

export const HeroImage = () => {
  const windowWidth = useWindowSize().width
  return (
    <ImageWrapper $image={windowWidth && windowWidth > 600 ? heroBig : heroSmall}>
      {windowWidth && windowWidth > 600 ? (
        <StyledImage src={heroBig} alt="Łukasz Dymek" />
      ) : (
        <StyledImage src={heroSmall} alt="Łukasz Dymek" />
      )}
    </ImageWrapper>
  )
}
