import styled from "styled-components"

export const ImageWrapper = styled.div<{
  $image: string
}>`
  position: relative;
  background: url(${(props) => props.$image});
  background-size: cover;
  background-repeat: no-repeat;
  margin: 0 auto;
  align-items: center;
  &:hover:before {
    animation: animate 0.2s linear;
  }
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(${(props) => props.$image});
    background-size: cover;
    background-repeat: no-repeat;
    opacity: 0.5;
    mix-blend-mode: hard-light;
  }

  @keyframes animate {
    0% {
      background-position: 0 0;
      filter: hue-rotate(0deg);
    }
    10% {
      background-position: 5px 0;
    }
    20% {
      background-position: -5px 0;
    }
    30% {
      background-position: 15px 0;
    }
    40% {
      background-position: -5px 0;
    }
    50% {
      background-position: -25px 0;
    }
    60% {
      background-position: -50px 0;
    }
    70% {
      background-position: 0 -20px;
    }
    80% {
      background-position: -60px -20px;
    }
    81% {
      background-position: 0 0;
    }
    100% {
      background-position: 0 0;
      filter: hue-rotate(360deg);
    }
  }
`

export const StyledImage = styled.img`
  width: 100%;
`
