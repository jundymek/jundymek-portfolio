import { useState, useEffect } from "react";

interface Refs {
  section: string;
  ref: React.RefObject<HTMLElement>;
}

interface Dimensions {
  height: number;
  offsetTop: number;
  offsetBottom: number;
}

function useActiveSection(
  headerRef: React.RefObject<HTMLDivElement>,
  appRef: React.MutableRefObject<HTMLDivElement>,
  sectionRefs: Refs[]
) {
  const [visibleSection, setVisibleSection] = useState<undefined | string>(undefined);

  const getDimensions = (element: HTMLElement | null): Dimensions => {
    if (element) {
      const { height } = element.getBoundingClientRect();
      const offsetTop = element.offsetTop;
      const offsetBottom = offsetTop + height;
      return {
        height,
        offsetTop,
        offsetBottom,
      };
    }
    return { height: 0, offsetTop: 0, offsetBottom: 0 };
  };

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
        return null;
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

  return visibleSection;
}

export default useActiveSection;
