import React from "react"
import { useState, useEffect } from "react"
import useOnScreen from "../../customHooks/useOnScreen"

type TextScramblerProps = {
  text: string[]
  characters?: string
  duration?: number
  typewriter?: boolean
}

export const TextScrambler = ({
  text,
  characters = "!@#$%^&*()",
  duration = 800,
  typewriter = false,
}: TextScramblerProps) => {
  const [currentText, setCurrentText] = useState(0)
  const [displayedText, setDisplayedText] = useState(text[currentText])
  const ref = React.useRef<HTMLSpanElement>(null)
  const isOnScreen = useOnScreen(ref, "0px")

  useEffect(() => {
    if (isOnScreen) {
      let intervalDuration = 100
      let spins = duration / intervalDuration
      let counter = 0
      setTimeout(() => {
        const interval = setInterval(() => {
          let scrambled = text[currentText].substring(0, counter)
          if (!typewriter) {
            scrambled += Array.from(text[currentText].substring(counter))
              .map(() => {
                return characters.charAt(Math.floor(Math.random() * characters.length))
              })
              .join("")
          }

          setDisplayedText(scrambled)
          counter++

          if (counter > text[currentText].length) {
            clearInterval(interval)
            setCurrentText((currentText + 1) % text.length)
            setDisplayedText(text[currentText])
          }
        }, intervalDuration)
        return () => clearInterval(interval)
      }, 1000)
    }
  }, [text, characters, duration, isOnScreen, currentText])

  return <span ref={ref}>{displayedText}</span>
}
