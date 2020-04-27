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
    font-family: 'VT323', monospace;
    font-size: 20px;
  }
  html {
    scroll-behavior: smooth;
    max-width: 1440px;
    margin: 0 auto
  }
  
`;

const AppWrapper = styled.div`
  margin: 0 auto;
`;

const lang = navigator.language.slice(0, 2) === "pl" ? "PL" : "EN";
export const LanguageContext = React.createContext({ language: lang, texts: translation[lang] });

function App() {
  const [language, setLanguage] = useState<"PL" | "EN">(lang);
  const [texts, setTexts] = useState(translation[language]);
  const [visibleSection, setVisibleSection] = useState<undefined | string>(undefined);
  const ref = useRef(null);
  const prevLang = usePrevious(language);
  useEffect(() => {
    setTexts(translation[language]);
  }, [language]);

  const props = useSpring({
    to: { opacity: prevLang !== language ? 0 : 1 },
    from: { opacity: 0 },
    config: { duration: 1000 },
    reset: true,
  });

  useEffect(() => {
    const containerHeight = appRef.current.offsetHeight;

    const handleScroll = () => {
      const { height: headerHeight } = getDimensions(headerRef.current);
      const scrollPosition = window.scrollY + headerHeight;

      const selected = sectionRefs.find(({ section, ref }) => {
        const element = ref.current;
        if (element) {
          const { offsetBottom, offsetTop } = getDimensions(element);
          return scrollPosition > offsetTop && scrollPosition < offsetBottom;
        }
      });

      if (scrollPosition + 800 >= containerHeight) {
        setVisibleSection("Contact");
      } else if (selected && selected.section !== visibleSection) {
        setVisibleSection(selected.section);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [visibleSection]);

  const appRef = useRef(document.createElement("div"));
  const headerRef = React.createRef<HTMLDivElement>();
  const aboutSectionRef = React.createRef<HTMLElement>();
  const skillsSectionRef = React.createRef<HTMLElement>();
  const portfolioSectionRef = React.createRef<HTMLElement>();
  const contactSectionRef = React.createRef<HTMLElement>();

  const sectionRefs = [
    { section: "About", ref: aboutSectionRef },
    { section: "Skills", ref: skillsSectionRef },
    { section: "Portfolio", ref: portfolioSectionRef },
    { section: "Contact", ref: contactSectionRef },
  ];

  const getDimensions = (e: any) => {
    const { height } = e.getBoundingClientRect();
    const offsetTop = e.offsetTop;
    const offsetBottom = offsetTop + height;
    return {
      height,
      offsetTop,
      offsetBottom,
    };
  };

  return (
    <ThemeProvider theme={theme}>
      <LanguageContext.Provider value={{ language, texts }}>
        <GlobalStyles />
        <animated.div ref={ref} style={prevLang && language !== prevLang ? props : undefined}>
          <AppWrapper ref={appRef}>
            <Navigation setLanguage={setLanguage} visibleSection={visibleSection} />
            <Header ref={headerRef} setLanguage={setLanguage} />
            <AboutMe ref={aboutSectionRef} />
            <Skills ref={skillsSectionRef} />
            <Portfolio ref={portfolioSectionRef} />
            <Contact ref={contactSectionRef} />
            <Footer />
          </AppWrapper>
        </animated.div>
      </LanguageContext.Provider>
    </ThemeProvider>
  );
}

export default App;
