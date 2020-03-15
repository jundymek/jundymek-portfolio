import React from "react";
import Navigation from "./components/Navigation/Navigation";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    font-family: "Lato", sans-serif;
  }
`;

function App() {
  return (
    <div>
      <GlobalStyles />
      <Navigation />
    </div>
  );
}

export default App;
