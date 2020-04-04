import styled, { css } from "styled-components";

export const SectionTitle = styled.h2`
  padding: 0;
  font-weight: 600;
  font-size: 46px;
  margin-top: 30px;
  margin-bottom: 0;
  text-align: center;
  line-height: 41px;
  min-height: 46px;
`;

export const SectionSubtitle = styled.p`
  font-size: 18px;
  margin-bottom: 30px;
  text-align: center;
`;

export const WhiteDiv = styled.div`
  padding: 0 20px;
  margin: 0 auto;
  max-width: 1440px;
  @media (min-width: ${props => props.theme.desktop}) {
    scroll-margin-top: 100px;
  }
`;

export const GreySection = styled.section`
  width: 100%;
  background: #f6f6f6;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 83px;
  padding-bottom: 28px;
  @media (min-width: ${props => props.theme.desktop}) {
    scroll-margin-top: 100px;
  }
`;

export const TerminalLookMixin = css`
  color: #f0fff8;
  text-shadow: 0 0 3px #80ffc0, 0 0 10px #00ff66, 0 0 20px #00ff66, 0 0 30px #00ff66;
`;

export const HamburgerMixin = css`
  border-color: #f0fff8;
  box-shadow: 0 0 3px #80ffc0, 0 0 10px #00ff66, 0 0 20px #00ff66, 0 0 30px #00ff66;
`;
