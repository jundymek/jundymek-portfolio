import { useState, useEffect } from "react"

type Refs = {
  section: string
  ref: React.RefObject<HTMLElement | null>
}

type Dimensions = {
  height: number
  offsetTop: number
  offsetBottom: number
}

export const useActiveSection = (appRef: React.MutableRefObject<HTMLElement>, sectionRefs: Refs[]) => {
  const [visibleSection, setVisibleSection] = useState<undefined | string>(undefined)

  const getDimensions = (element: HTMLElement | null): Dimensions => {
    if (element) {
      const { height } = element.getBoundingClientRect()
      const offsetTop = element.offsetTop
      const offsetBottom = offsetTop + height
      return {
        height,
        offsetTop,
        offsetBottom,
      }
    }
    return { height: 0, offsetTop: 0, offsetBottom: 0 }
  }

  useEffect(() => {
    const containerHeight = appRef.current.clientHeight

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 300

      const selected = sectionRefs.find(({ section, ref }) => {
        const element = ref.current
        if (element) {
          const { offsetBottom, offsetTop } = getDimensions(element)
          return scrollPosition > offsetTop && scrollPosition < offsetBottom
        }
        return false
      })
      if (scrollPosition + window.innerHeight >= containerHeight) {
        setVisibleSection("Contact")
      } else if (selected && selected.section !== visibleSection) {
        setVisibleSection(selected.section)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [visibleSection, appRef, sectionRefs])

  return visibleSection
}
