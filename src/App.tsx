import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import Navigation from "./components/Navigation/Navigation";
import { createGlobalStyle } from "styled-components";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import Header from "./components/Header/Header";
import AboutMe from "./components/AboutMe/AboutMe";
import Skills from "./components/Skills/Skills";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { useSpring, animated } from "react-spring";
import usePrevious from "./customHooks/usePrevious";
import { translation } from "./helpers/translation";

const GlobalStyles = createGlobalStyle`

  body {
    font-family: "Lato", sans-serif;
  }
  html {
    scroll-behavior: smooth;
  }
`;

const AppWrapper = styled.div`
  margin: 0 auto;
`;

const lang = navigator.language.slice(0, 2) === "en" ? "EN" : "PL";
export const LanguageContext = React.createContext({ language: lang, texts: translation[lang] });

function App() {
  const [language, setLanguage] = useState<"PL" | "EN">(lang);
  const [texts, setTexts] = useState(translation[language]);
  const ref = useRef(null);
  const prevLang = usePrevious(language);
  useEffect(() => {
    setTexts(translation[language]);
  }, [language]);

  const props = useSpring({
    to: { opacity: prevLang !==language? 0:1, filter: prevLang !==language ? "blur(5px)": "blur(0px)" },
    from: { opacity: 0, filter: "blur(5px)" },
    config: { duration: 1000 },
    reset: true
  });

  return (
    <ThemeProvider theme={theme}>
      <LanguageContext.Provider value={{ language, texts }}>
        <GlobalStyles />
        <animated.div ref={ref} style={prevLang && language === prevLang ? props : undefined}>
          <AppWrapper>
            <Navigation setLanguage={setLanguage} />
            <Header setLanguage={setLanguage} />
            <AboutMe />
            <Skills />
            <Portfolio />
            <Contact />
            <Footer />
          </AppWrapper>
        </animated.div>
      </LanguageContext.Provider>
    </ThemeProvider>
  );
}

export default App;
