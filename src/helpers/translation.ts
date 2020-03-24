import figmaImage from "../images/figma-icon-mobile.png";
import djangoImage from "../images/skills-icons/django-icon.svg";
import reactImage from "../images/skills-icons/react-icon.svg";
import cssImage from "../images/skills-icons/css3-icon.svg";
import gitImage from "../images/skills-icons/git-icon.svg";
import githubImage from "../images/skills-icons/github-icon.svg";
import javascriptImage from "../images/skills-icons/javascript-icon.svg";
import pythonImage from "../images/skills-icons/python-icon.svg";
import sassImage from "../images/skills-icons/sass-icon.svg";
import typescriptImage from "../images/skills-icons/typescript-icon.svg";

export const translation = {
  PL: {
    header:
    {
      title: "Łukasz Dymek",
      paragraphs: ["Python/Django/React",
        "Po prostu programista"]
    },
    aboutMe:
    {
      title: "O mnie",
      paragraphs: [
        "Cześć - jestem Łukasz. Obecnie Policjant 👮🏻‍♂️, w przyszłości... developer. Od kilku lat wszystkie wolne chwile poświęcam kodowaniu. Zaczynałem od Pythona, aktualnie zgłębiam tajniki frontendu. Obecnie próbuję opanować Reacta.",
        "Nie deklaruję się po którejkolwiek stronie. Front i back podobają mi się jednakowo - najważniejsze jest frajda z pisania kodu. Chciałbym robić to w pełnym wymiarze czasu.",
        "Czy jest taka szansa? Czy nie jest za późno? NIEEEEE. Już tyle osób powiedziało mi, że nigdy nie jest za późno na kodowanie…",
      ]

    },
    repositories:
    {
      title: "Projekty na github",
      subtitle: "Posortowane według technologii (skategoryzowane przez githuba)"
    },
    skills:
    {
      title: "Umiejętności",
      paragraph: "Technologie i programy, których używam",
      skills: [
        { img: `${pythonImage}`, alt: "Python", text: "Python", tooltipText: "Zakochałem się w nim po moim pierwszym print 'Hello World' - jeszcze w Pythonie2. Dzięki pythonowi zacząłem naukę programowania i ten język do tej pory uważam za nejprzystępniejszy i po prostu warty wypróbowania."   },
        { img: `${djangoImage}`, alt: "Django", text: "Django" },
        { img: `${cssImage}`, alt: "Css3", text: "Css3" },
        { img: `${gitImage}`, alt: "Git", text: "Git" },
        { img: `${githubImage}`, alt: "GitHub", text: "Github" },
        { img: `${javascriptImage}`, alt: "Javascript", text: "Javascript ES6" },
        { img: `${reactImage}`, alt: "React", text: "React" },
        { img: `${sassImage}`, alt: "Sass", text: "Sass" },
        { img: `${typescriptImage}`, alt: "Typescript", text: "Typescript" },
        { img: `${figmaImage}`, alt: "Figma", text: "Figma" },
      ]
    }
  },
  EN: {
    header:
    {
      title: "Łukasz Dymek",
      paragraphs: ["Python/Django/React",
        "Simpy developer"]
    },
    aboutMe:
    {
      title: "About me",
      paragraphs: [
        "Hi - my name is Łukasz. Currently a Cop👮🏻‍♂️, in future… developer. For the last couple of years, I spend my all free time coding. My programming adventure started when I first wrote print “Hello World” in Python (yes - 2.0). Currently, I dove into the frontend. Nowadays I spend time mostly writing React code.",
        "I am not declaring myself on any side. I like frontend and backend the same. Most important is real fun when writing code. I dream about work as a programmer full time.",
        "Is it possible? Isn’t it too late for that? NOOOO. So many people told mi that for coding never is too late..."
      ]
    },
    repositories:
    {
      title: "Projekty na github",
      subtitle: "Posortowane według technologii (skategoryzowane przez githuba)"
    },
    skills:
    {
      title: "Skills",
      paragraph: "Technologies and tools I use",
      skills: [
        { img: `${pythonImage}`, alt: "Python", text: "Python", tooltipText: "Zakochałem się w nim po moim pierwszym print 'Hello World' - jeszcze w Pythonie2. Dzięki pythonowi zacząłem naukę programowania i ten język do tej pory uważam za nejprzystępniejszy i po prostu warty wypróbowania."   },
        { img: `${djangoImage}`, alt: "Django", text: "Django" },
        { img: `${cssImage}`, alt: "Css3", text: "Css3" },
        { img: `${gitImage}`, alt: "Git", text: "Git" },
        { img: `${githubImage}`, alt: "GitHub", text: "Github" },
        { img: `${javascriptImage}`, alt: "Javascript", text: "Javascript ES6" },
        { img: `${reactImage}`, alt: "React", text: "React" },
        { img: `${sassImage}`, alt: "Sass", text: "Sass" },
        { img: `${typescriptImage}`, alt: "Typescript", text: "Typescript" },
        { img: `${figmaImage}`, alt: "Figma", text: "Figma" },
      ]
    }
  }
}
