import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../styles/styledComponents";
import linkedin from "../../images/linkedin-icon.png";
import instagram from "../../images/instagram-icon.png";
import behance from "../../images/behance-icon.png";
import dribble from "../../images/dribble-icon.png";

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

const Button = styled.button`
  background-color: ${props => props.theme.primaryDark};
  border-radius: 50px;
  width: 100%;
  height: 42px;
  color: #fff;
  margin-bottom: 48px;
  font-size: 18px;
  cursor: pointer;
  @media (min-width: ${props => props.theme.desktop}) {
    width: 178px;
  }
`;

const Paragraph = styled.p`
  text-align: center;
  margin-bottom: 44px;
  font-size: 1rem;
  font-weight: 400;
  line-height: 22px;
`;

const List = styled.ul`
  margin: 0;
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
  return (
    <Section id="contact">
      <Wrapper>
        <SectionTitle>Contact</SectionTitle>
        <Paragraph>Want to know more or just chat? You are welcome!</Paragraph>
        <Button>Send message</Button>
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
