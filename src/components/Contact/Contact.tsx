import React, {useContext} from "react";
import styled from "styled-components";
import { LanguageContext } from "../../App";
import { SectionTitle } from "../../styles/styledComponents";
import linkedin from "../../images/linkedin-icon.png";
import instagram from "../../images/instagram-icon.png";
import behance from "../../images/behance-icon.png";
import dribble from "../../images/dribble-icon.png";
import Button from "../Button/Button";

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

const Paragraph = styled.p`
  text-align: center;
  font-size: 18px;
  font-weight: 400;
  line-height: 22px;
`;

const List = styled.ul`
  margin-top: 30px;
  padding: 0;
  width: 100%;
  list-style-type: none;
  display: flex;
  justify-content: space-between;
`;

const icons = [
  { img: `${linkedin}`, url: "" },
  { img: `${instagram}`, url: "" },
  { img: `${behance}`, url: "" },
  { img: `${dribble}`, url: "" }
];

function Contact() {
  const {
    texts: { contact }
  } = useContext(LanguageContext);
  return (
    <Section id="contact">
      <Wrapper>
        <SectionTitle>Contact</SectionTitle>
        <Paragraph>Want to know more or just chat? You are welcome!</Paragraph>
        <Button label={contact.buttonLabel} />
        <List>
          {icons.map((icon, index) => (
            <li key={index}>
              <img src={icon.img} alt="" />
            </li>
          ))}
        </List>
      </Wrapper>
    </Section>
  );
}

export default Contact;
