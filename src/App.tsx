import React from "react";
import Navigation from "./components/Navigation/Navigation";
import { createGlobalStyle } from "styled-components";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";

const GlobalStyles = createGlobalStyle`
  body {
    font-family: "Lato", sans-serif;
  }
`;

function App() {
  return (
    <ThemeProvider theme={theme} >
      <div>
        <GlobalStyles />
        <Navigation />
      </div>
    </ThemeProvider>
  );
}

export default App;
