import photoImage from "../images/photoshop-icon-mobile.png";
import aiImage from "../images/ilustrator-icon-mobile.png";
import adobeAeImage from "../images/aftereffects-icon-mobile.png";
import figmaImage from "../images/figma-icon-mobile.png";

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
        { img: `${photoImage}`, alt: "Photoshop", text: "Adobe Photoshop" },
        { img: `${aiImage}`, alt: "Adobe ilustrator", text: "Adobe ilustrator" },
        { img: `${adobeAeImage}`, alt: "Adobe after effects", text: "Adobe after effects" },
        { img: `${figmaImage}`, alt: "Figma", text: "Figma" }
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
        { img: `${photoImage}`, alt: "Photoshop", text: "Adobe Photoshop" },
        { img: `${aiImage}`, alt: "Adobe ilustrator", text: "Adobe ilustrator" },
        { img: `${adobeAeImage}`, alt: "Adobe after effects", text: "Adobe after effects" },
        { img: `${figmaImage}`, alt: "Figma", text: "Figma" }
      ]
    }
  }
}
