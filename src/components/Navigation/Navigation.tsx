import React, { useEffect, useState } from "react";
import styled from "styled-components";
import useWindowSize from "../../customHooks/useWindowSize";
import { WhiteDiv } from "../../styles/styledComponents";
import { useScrollYPosition } from "react-use-scroll-position";
import NavigationDesktop from "./NavigationDesktop";
import NavigationMobile from "./NavigationMobile";

interface NavProps {
  isVisible?: boolean;
  isFixed?: boolean;
}

const Container = styled(WhiteDiv)<NavProps>`
  padding: ${(props) => (props.isVisible || props.isFixed) && "0"};
`;
export interface Props {
  setLanguage: React.Dispatch<React.SetStateAction<"PL" | "EN">>;
}

function Navigation({ setLanguage }: Props) {
  const [isHamburgerOpen, setisHamburgerOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const scrollY = useScrollYPosition();
  const [lastY, setLastY] = useState(scrollY);
  const width = useWindowSize().width;

  useEffect(() => {
    if (isHamburgerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    width && width >= 900 && setisHamburgerOpen(false);
    setIsMobile(false);
    width && width < 900 && setIsMobile(true);

    scrollY <= 200 && setIsFixed(false);
    if (isMobile) {
      scrollY > 200 && scrollY < lastY - 20 && setIsFixed(true);
      scrollY > 200 && scrollY > lastY + 40 && setIsFixed(false);
    } else {
      scrollY > 200 && setIsFixed(true);
    }
    setLastY(scrollY);
  }, [width, isHamburgerOpen, scrollY, lastY, isMobile]);

  return (
    <Container>
      <NavigationDesktop isFixed={isFixed} />
      <NavigationMobile isFixed={isFixed} setLanguage={setLanguage} />
    </Container>
  );
}

export default Navigation;
