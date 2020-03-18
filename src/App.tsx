import React, { useEffect, useState, useRef } from "react";
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

const GlobalStyles = createGlobalStyle`
  body {
    font-family: "Lato", sans-serif;
  }
  html {
    scroll-behavior: smooth;
  }
`;

interface LanguageContextProps {
  language: string;
}

export const LanguageContext = React.createContext({} as LanguageContextProps);

function App() {
  const [language, setLanguage] = useState(navigator.language.slice(0, 2) === "en" ? "EN" : "PL");
  const ref = useRef(null);
  const prevLang = usePrevious(language);
  useEffect(() => {}, [language]);

  const props = useSpring({
    to: { opacity: 1, filter: "blur(0px)" },
    from: { opacity: 0, filter: "blur(5px)" },
    config: { duration: 1000 },
    reset: true
  });

  return (
    <ThemeProvider theme={theme}>
      <LanguageContext.Provider value={{ language }}>
        <GlobalStyles />
        <animated.div ref={ref} style={prevLang && language !== prevLang ? props : undefined}>
          <Navigation setLanguage={setLanguage} />
          <Header setLanguage={setLanguage} />
          <AboutMe />
          <Skills />
          <Portfolio />
          <Contact />
          <Footer />
        </animated.div>
      </LanguageContext.Provider>
    </ThemeProvider>
  );
}

export default App;
