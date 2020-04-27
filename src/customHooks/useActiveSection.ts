import { useState, useEffect } from "react";

interface Refs {
  section: string;
  ref: React.RefObject<HTMLElement>;
}

function useActiveSection(
  headerRef: React.RefObject<HTMLDivElement>,
  appRef: React.MutableRefObject<HTMLDivElement>,
  sectionRefs: Refs[]
) {
  const [visibleSection, setVisibleSection] = useState<undefined | string>(undefined);

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

  return visibleSection;
}

export default useActiveSection;
