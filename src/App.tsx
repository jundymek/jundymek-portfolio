import React, { useEffect, useState, useRef } from "react"
import styled from "styled-components"
import Navigation from "./components/Navigation/Navigation"
import { createGlobalStyle } from "styled-components"
import { ThemeProvider } from "styled-components"
import { theme } from "./styles/theme"
import { useSpring, animated } from "react-spring"
import usePrevious from "./customHooks/usePrevious"
import { translation } from "./helpers/translation"
import { Header } from "./components/Header/Header"
import { AboutMe } from "./components/AboutMe/AboutMe"
import { Contact } from "./components/Contact/Contact"
import { Footer } from "./components/Footer/Footer"
import { Skills } from "./components/Skills/Skills"
import { Portfolio } from "./components/Portfolio/Portfolio"
import { useActiveSection } from "./customHooks/useActiveSection"

const GlobalStyles = createGlobalStyle`

  body {
    font-family: 'VT323', monospace;
    font-size: 20px;
  }
  html {
    scroll-behavior: smooth;
    margin: 0 auto
  }
  
`

const AppWrapper = styled.div`
  margin: 0 auto;
`

const lang = navigator.language.slice(0, 2) === "pl" ? "PL" : "EN"
export const LanguageContext = React.createContext({ language: lang, texts: translation[lang] })

function App() {
  const [language, setLanguage] = useState<"PL" | "EN">(lang)
  const [texts, setTexts] = useState(translation[language])
  const ref = useRef(null)
  const prevLang = usePrevious(language)
  useEffect(() => {
    setTexts(translation[language])
  }, [language])

  const props = useSpring({
    to: { opacity: prevLang && prevLang !== language ? 0 : 1 },
    from: { opacity: 0 },
    config: { duration: 1000 },
    reset: prevLang && prevLang === language ? false : true,
  })

  const appRef = useRef(document.createElement("div"))
  const aboutSectionRef = useRef<HTMLElement | null>(null)
  const skillsSectionRef = useRef<HTMLElement | null>(null)
  const portfolioSectionRef = useRef<HTMLElement | null>(null)
  const contactSectionRef = useRef<HTMLElement | null>(null)

  const sectionRefs = [
    { section: "About", ref: aboutSectionRef },
    { section: "Skills", ref: skillsSectionRef },
    { section: "Portfolio", ref: portfolioSectionRef },
    { section: "Contact", ref: contactSectionRef },
  ]

  const activeSection = useActiveSection(appRef, sectionRefs)

  return (
    <ThemeProvider theme={theme}>
      <LanguageContext.Provider value={{ language, texts }}>
        <GlobalStyles />
        <animated.div ref={ref} style={prevLang && language === prevLang ? props : undefined}>
          <AppWrapper ref={appRef}>
            <Navigation setLanguage={setLanguage} visibleSection={activeSection} />
            <Header setLanguage={setLanguage} />
            <AboutMe ref={aboutSectionRef} />
            <Skills ref={skillsSectionRef} />
            <Portfolio ref={portfolioSectionRef} />
            <Contact ref={contactSectionRef} />
            <Footer />
          </AppWrapper>
        </animated.div>
      </LanguageContext.Provider>
    </ThemeProvider>
  )
}

export default App
