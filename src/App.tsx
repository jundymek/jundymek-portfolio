import React from "react";
import Navigation from "./components/Navigation/Navigation";
import { createGlobalStyle } from "styled-components";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import Header from "./components/Header/Header";
import AboutMe from "./components/AboutMe/AboutMe";
import Skills from "./components/Skills/Skills";

const GlobalStyles = createGlobalStyle`
  body {
    font-family: "Lato", sans-serif;
  }
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Navigation />
        <Header />
        <AboutMe />
        <Skills />
      </>
    </ThemeProvider>
  );
}

export default App;
