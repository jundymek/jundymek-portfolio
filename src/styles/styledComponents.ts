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

export const BackgroundMixin = css`
  box-shadow: 6px 4px 4px -1px rgba(0, 0, 0, 0.38);
  background: linear-gradient(
      216deg,
      rgba(77, 77, 77, 0.05) 0%,
      rgba(77, 77, 77, 0.05) 25%,
      rgba(42, 42, 42, 0.05) 25%,
      rgba(42, 42, 42, 0.05) 38%,
      rgba(223, 223, 223, 0.05) 38%,
      rgba(223, 223, 223, 0.05) 75%,
      rgba(36, 36, 36, 0.05) 75%,
      rgba(36, 36, 36, 0.05) 100%
    ),
    linear-gradient(
      44deg,
      rgba(128, 128, 128, 0.05) 0%,
      rgba(128, 128, 128, 0.05) 34%,
      rgba(212, 212, 212, 0.05) 34%,
      rgba(212, 212, 212, 0.05) 57%,
      rgba(25, 25, 25, 0.05) 57%,
      rgba(25, 25, 25, 0.05) 89%,
      rgba(135, 135, 135, 0.05) 89%,
      rgba(135, 135, 135, 0.05) 100%
    ),
    linear-gradient(
      241deg,
      rgba(55, 55, 55, 0.05) 0%,
      rgba(55, 55, 55, 0.05) 14%,
      rgba(209, 209, 209, 0.05) 14%,
      rgba(209, 209, 209, 0.05) 60%,
      rgba(245, 245, 245, 0.05) 60%,
      rgba(245, 245, 245, 0.05) 69%,
      rgba(164, 164, 164, 0.05) 69%,
      rgba(164, 164, 164, 0.05) 100%
    ),
    linear-gradient(
      249deg,
      rgba(248, 248, 248, 0.05) 0%,
      rgba(248, 248, 248, 0.05) 32%,
      rgba(148, 148, 148, 0.05) 32%,
      rgba(148, 148, 148, 0.05) 35%,
      rgba(202, 202, 202, 0.05) 35%,
      rgba(202, 202, 202, 0.05) 51%,
      rgba(181, 181, 181, 0.05) 51%,
      rgba(181, 181, 181, 0.05) 100%
    ),
    linear-gradient(92deg, hsl(214, 0%, 11%), hsl(214, 0%, 11%));
`;
