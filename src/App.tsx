import React, { useEffect, useState } from "react";
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
  useEffect(() => {}, [language]);

  return (
    <ThemeProvider theme={theme}>
      <LanguageContext.Provider value={{ language }}>
        <GlobalStyles />
        <Navigation />
        <Header setLanguage={setLanguage} />
        <AboutMe />
        <Skills />
        <Portfolio />
        <Contact />
        <Footer />
      </LanguageContext.Provider>
    </ThemeProvider>
  );
}

export default App;
