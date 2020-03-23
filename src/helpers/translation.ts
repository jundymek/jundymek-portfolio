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
      title: "jundymek",
      paragraphs: ["UX|UI designer",
        "Too old, Warsawsss"]
    },
    aboutMe:
    {
      title: "O mnie",
      paragraphs: [
        "Hi, I'm Denis – UX/UI designer from Minsk. I'm interested in design and everything connected with it.",
        "I'm studying at courses 'Web and mobile design interfaces' in IT-Academy.",
        "Ready to implement excellent projects with wonderful people.",
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
      paragraph: "I work in such programs as",
      skills: [
        { img: `${pythonImage}`, alt: "Python", text: "Python" },
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
      title: "jundymek",
      paragraphs: ["UX|UI designer",
        "Too old, Warsaw"]
    },
    aboutMe:
    {
      title: "About me",
      paragraphs: [
        "Hi, I'm Denis – UX/UI designer from Minsk. I'm interested in design and everything connected with it.",
        "I'm studying at courses 'Web and mobile design interfaces' in IT-Academy.",
        "Ready to implement excellent projects with wonderful people.",
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
      paragraph: "I work in such programs as",
      skills: [
        { img: `${pythonImage}`, alt: "Python", text: "Python" },
        { img: `${djangoImage}`, alt: "Django", text: "Django" },
        { img: `${cssImage}`, alt: "Css3", text: "Css3" },
        { img: `${gitImage}`, alt: "Git", text: "Git" },
        { img: `${githubImage}`, alt: "GitHub", text: "Github" },
        { img: `${javascriptImage}`, alt: "Javascript", text: "Javascript ES6" },
        { img: `${sassImage}`, alt: "Sass", text: "Sass" },
        { img: `${typescriptImage}`, alt: "Typescript", text: "Typescript" },
        { img: `${figmaImage}`, alt: "Figma", text: "Figma" },
      ]
    }
  }
}
