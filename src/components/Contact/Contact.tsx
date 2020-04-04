import React, { useContext, useRef } from "react";
import styled, { keyframes } from "styled-components";
import { LanguageContext } from "../../App";
import { SectionTitle } from "../../styles/styledComponents";
import useOnScreen from "../../customHooks/useOnScreen";
import { Button } from "../Button/Button";
import { Scrambler } from "react-text-scrambler";

const typing = keyframes`
  from { max-width: 0 }
  to { max-width: 200% }
`;

const Section = styled.section`
  display: block;
  margin: 0 auto;
  max-width: 478px;
  width: 100%;
`;

const Wrapper = styled.div`
  padding: 0 29px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Paragraph = styled.p<Length>`
  text-align: center;
  font-size: 18px;
  font-weight: 400;
  line-height: 22px;
  overflow: hidden;
  white-space: nowrap;
  animation: ${typing} 8.5s steps(${props => props.length}, end) infinite;
`;

const List = styled.ul`
  margin-top: 30px;
  padding: 0;
  width: 100%;
  list-style-type: none;
  display: flex;
  justify-content: center;
`;

const Icon = styled.img`
  width: 50px;
  height: 50px;
  padding: 20px;
  transition: transform 1s ease;
  :hover {
    transform: rotate(360deg) scale(1.2);
  }
`;

const HandWrite = styled.p`
  font-family: "Over the Rainbow", cursive;
  font-weight: bold;
  text-decoration: underline;
  @media (min-width: ${props => props.theme.desktop}) {
    position: absolute;
    right: -150px;
    font-size: 30px;
    transform: rotate(-70deg);
  }
`;
interface Length {
  length: number;
}

function Contact() {
  const {
    texts: { contact }
  } = useContext(LanguageContext);

  const ref = useRef(null);
  useOnScreen(ref, "0%");

  return (
    <Section id="contact">
      <Wrapper ref={ref}>
        <SectionTitle>
          <Scrambler text={`{ ${contact.title} }`} characters="!@#$%^&*()" renderIn={1000} />
        </SectionTitle>
        <Paragraph length={contact.paragraph.length}>{contact.paragraph}</Paragraph>
        <Button href={`mailto:lukasz@gdzietylkochce.com`}>{contact.buttonLabel}</Button>
        <List>
          {contact.social.map((icon, index) => (
            <li key={index}>
              <a href={icon.url} title={icon.title}>
                <Icon src={icon.img} alt={icon.title} />
              </a>
            </li>
          ))}
        </List>
        <HandWrite>jundymek</HandWrite>
      </Wrapper>
    </Section>
  );
}

export default Contact;
