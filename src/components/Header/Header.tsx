import React from "react";
import styled from "styled-components";
import heroBig from "../../images/hero-image-big.jpg";
import heroSmall from "../../images/hero-image-small.jpg";

const StyledHeader = styled.header`
  margin-top: 30px;
  padding: 0 7%;
  @media (min-width: ${props => props.theme.desktop}) {
    padding: 0 17%;
  }
`;

const Wrapper = styled.div`
  @media (min-width: ${props => props.theme.desktop}) {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.72rem;
    align-items: flex-end;
  }
`;

const Title = styled.h1`
  width: 155px;
  margin: 0;
  padding: 0;
  font-weight: 400;
  font-size: 47px;
  line-height: 3.11rem;
  margin-bottom: 1.27rem;
  @media (min-width: ${props => props.theme.desktop}) {
    font-size: $title-font-size;
    line-height: 3.18rem;
    color: #070707;
  }
`;

const Paragraph = styled.p`
  padding: 0;
  margin: 0;
  font-size: $default-font-size;
  line-height: 1.22rem;
  font-weight: 400;
  width: 175px;
  margin-bottom: 2.11rem;
  @media (min-width: ${props => props.theme.desktop}) {
    margin-bottom: 2.11rem;
    margin-right: 2rem;
  }
`;

const LangContainer = styled.div`
  display: none;
  @media (min-width: ${props => props.theme.desktop}) {
    display: block;
  }
  transform: rotate(-90deg);
  height: 1rem;
  margin-bottom: 48px;
  margin-right: -1rem;
`;

const LangButton = styled.button`
  margin: 0;
  padding: 0;
  cursor: pointer;
  font-style: italic;
  font-size: 18px;
  font-weight: 400;
  text-decoration: none;
  background: none;
  border: none;
`;

const Image = styled.img`
  width: 100%;
`;

function Header() {
  return (
    <StyledHeader>
      <Wrapper>
        <Title>Łukasz Dymek</Title>
        <Paragraph>
          UX|UI designer <br />
          37 years old, Warsaw
        </Paragraph>
        <LangContainer>
          <LangButton>EN</LangButton> | <LangButton>PL</LangButton>
        </LangContainer>
      </Wrapper>
      <picture>
        <source media="(min-width: 600px)" srcSet={heroBig} />
        <Image src={heroSmall} alt="Łukasz Dymek" />
      </picture>
    </StyledHeader>
  );
}

export default Header;
