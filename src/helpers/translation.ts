// skills
import figmaImage from "../images/skills-icons/figma-icon-mobile.png"
import djangoImage from "../images/skills-icons/django-icon.svg"
import reactImage from "../images/skills-icons/react-icon.svg"
import cssImage from "../images/skills-icons/css3-icon.svg"
import gitImage from "../images/skills-icons/git-icon.svg"
import githubImage from "../images/skills-icons/github-icon.svg"
import javascriptImage from "../images/skills-icons/javascript-icon.svg"
import pythonImage from "../images/skills-icons/python-icon.svg"
import typescriptImage from "../images/skills-icons/typescript-icon.svg"
import htmlImage from "../images/skills-icons/html5-icon.svg"
import postgreSQLImage from "../images/skills-icons/postgresql-icon.svg"
import vueImage from "../images/skills-icons/vue.svg"

//portfolio projects
import project1Image from "../images/projects/free_proxy.gif"
import project2Image from "../images/projects/netkat-project.png"
import project3Image from "../images/projects/pan-kanapka-project.png"
import project4Image from "../images/projects/crypto-portfolio.jpg"

// contact social icons
import github from "../images/github-icon.svg"
import codewars from "../images/codewars-icon.svg"
import linkedin from "../images/linkedin-icon.svg"

export const translation = {
  PL: {
    navigation: {
      links: [
        { url: "#about", title: "O mnie", section: "About" },
        { url: "#skills", title: "Umiejętności", section: "Skills" },
        { url: "#portfolio", title: "Projekty", section: "Portfolio" },
        { url: "#contact", title: "Kontakt", section: "Contact" },
      ],
    },
    header: {
      title: "Łukasz Dymek",
      paragraphs: ["Python/Django/React", "Po prostu programista"],
    },
    aboutMe: {
      title: "O mnie",
      paragraph1part1Hello: "Cześć - jestem Łukasz. ",
      paragraph1part1StrikeThrough: "Obecnie Policjant 👮🏻‍♂️, w przyszłości... programista.",
      paragraph1part1End:
        " Od kilku lat wszystkie wolne chwile poświęcam kodowaniu. Moja przygoda 'na poważnie' z programowaniem zaczęła się kiedy napisałem pierwsze",
      paragraph1code: "print 'Hello World'",
      paragraph1part2:
        "w Pythonie (tak - w Pythonie 2). Aktualnie zgłębiam tajniki frontendu i próbuję opanować Reacta.",
      paragraph2:
        "Nie deklaruję się po którejkolwiek ze stron. Front i back podobają mi się jednakowo - najważniejsza jest frajda z pisania kodu. Marzyłem o pracy jako programista na pełen etat i jestem niesamowicie wdzięczny, że mogę robić to, co kocham. ❤️",
    },
    projects: {
      title: "Projekty",
      subtitle: "Wybrane projekty mojego autorstwa",
      paragraph: "Użyte technologie / biblioteki",
      projects: [
        {
          img: `${project4Image}`,
          alt: "Simplest cryptocurrency portfolio",
          title: "Simplest cryptocurrency portfolio",
          text: "Bardzo proste portfolio kryptowalut pozwalające w czasie rzeczywistym śledzenie zawartości własnego portfela. Aplikacja korzysta z publicznego API Bitbay, skąd na bierząco pobierane są aktualne kursy. Użytkonicy mogą zakładać prywatne konta i tworzyć własne portfele. Wszystko zapisywane jest w bazie danych PostgreSQL.",
          tech: [
            "React",
            "NextJs",
            "Typescript",
            "Lerna",
            "Tailwind css",
            "Styled-components",
            "Hapi",
            "Prisma",
            "PostgreSQL",
          ],
          githubUrl: "https://github.com/jundymek/next-cryptocurrency",
          liveUrl: null,
        },
        {
          img: `${project1Image}`,
          alt: "Free proxy",
          title: "Free proxy",
          text: "Moja pierwsza biblioteka umieszczona na PyPI. Jest to prosty skrypt scrapujący stronę https://www.sslproxies.org/ i pobiearający z niej proxy do dalszego wykorzystania. Program sprawdza na bieżąco czy proxy działają i zwraca proxy, które można w danej chwili wykorzystać. Zwraca proxy w formie stringa. Biblioteka została napisana w trakcie pisania pewnego bota, do którego potrzebowałem proxy. Jako, że nie mogłem znaleźć nic działającego z biblioteką selenium postanowiłem sam napisać coś odpowiedniego. Tak powstało free-proxy.",
          tech: ["Python", "Requests library"],
          githubUrl: "https://github.com/jundymek/free-proxy",
          liveUrl: "https://pypi.org/project/free-proxy/",
        },
        {
          img: `${project2Image}`,
          alt: "Netkat",
          title: "Netkat - katalog stron",
          text: "Mój pierwszy większy projekt programistyczny. Napisany w Pythonie/Django działający katalog stron internetowych. Kiedyś zajmowałem się SEO i stwierdziłem, że jak mam się uczyć django to warto napisać cokolwiek sensownego zamiast setnego tutoriala todo. Tak powstał pisany nocami netkat - wyniośle nazwałem go “skrypt katalogu stron internetowych”, ale jestem mega dumny z tego projektu. ",
          tech: ["Python", "Django", "PostgreSQL"],
          githubUrl: "https://github.com/jundymek/netkat",
          liveUrl: null,
        },
        {
          img: `${project3Image}`,
          alt: "Pan Kanapka",
          title: "Pan Kanapka",
          text: "Prosta aplikacja napisana w ramach nauki przypomnienia Django. Znajomy rzucił pomysł i tak wpadłem w sidła Pana Kanapki…:) Aplikacja to taki łącznik pomiędzy Panem Kanapką i jego klientami. Pan Kanapka dodaje do bazy lokalizacje, gdzie rozwozi kanapki, natomiast klient może się zapisać na powiadomienia push, informujące, że niedługo zjawi się jedzenie. ",
          tech: [
            "Python",
            "Django",
            "Django Rest Framework",
            "Leaflet",
            "PostgreSql",
            "django-rest-auth",
            "django-push-notifications",
            "google places api",
          ],
          githubUrl: "https://github.com/jundymek/pan-kanapka-front",
          liveUrl: null,
        },
      ],
    },

    repositories: {
      title: "Projekty na GitHub",
      subtitle: "Posortowane według technologii (skategoryzowane przez GitHuba)",
    },
    repositoriesCounter: {
      subtitle: "Wszystkie publiczne repozytoria",
    },
    skills: {
      title: "Skills",
      paragraph: "Technologies and tools I use",
      skills: [
        { img: `${htmlImage}`, alt: "Html", text: "HTML5", tooltipText: ["semantic html", "PWA"] },
        {
          img: `${cssImage}`,
          alt: "Css3",
          text: "Css3",
          tooltipText: ["sass", "BEM", "flexbox", "grid", "transitions", "animations"],
        },
        { img: `${javascriptImage}`, alt: "Javascript", text: "Javascript ES6", tooltipText: ["es6"] },
        { img: `${typescriptImage}`, alt: "Typescript", text: "Typescript", tooltipText: [] },
        {
          img: `${reactImage}`,
          alt: "React",
          text: "React",
          tooltipText: ["hooks", "styled-components", "redux", "context-api"],
        },
        { img: `${vueImage}`, alt: "Vue", text: "Vue", tooltipText: ["Vue2", "Vue3"] },
        {
          img: `${pythonImage}`,
          alt: "Python",
          text: "Python",
          tooltipText: ["django", "django-rest-framework", "beautifulsoup", "requests", "scrapy"],
        },
        { img: `${djangoImage}`, alt: "Django", text: "Django", tooltipText: ["django", "django-rest-framework"] },
        {
          img: `${gitImage}`,
          alt: "Git",
          text: "Git",
          tooltipText: ["git commit", "git merge", "git branch", "git push", "git pull", "..."],
        },
        { img: `${githubImage}`, alt: "GitHub", text: "Github", tooltipText: ["above 20 remote repositories"] },
        { img: `${postgreSQLImage}`, alt: "PostgreSQL", text: "PostgreSQL", tooltipText: [] },
        { img: `${figmaImage}`, alt: "Figma", text: "Figma", tooltipText: [] },
      ],
    },
    contact: {
      title: "Kontakt",
      paragraph: "Zatrudnij mnie!",
      buttonLabel: "Wyślij wiadomość",
      social: [
        { title: "Github", img: `${github}`, url: "https://github.com/jundymek" },
        { title: "Linkedin", img: `${linkedin}`, url: "https://www.linkedin.com/in/lukasz-dymek/" },
        { title: "Codewars", img: `${codewars}`, url: "https://www.codewars.com/users/jundymek" },
      ],
    },
    footer: {
      paragraph1part1: "Wykonano całym",
      paragraph1part2: "używając",
      paragraph2: "Typescript, React (z Hookami), styled-components, react-spring, axios i wielu innych...",
    },
  },
  EN: {
    navigation: {
      links: [
        { url: "#about", title: "About me", section: "About" },
        { url: "#skills", title: "Skills", section: "Skills" },
        { url: "#portfolio", title: "Projects", section: "Portfolio" },
        { url: "#contact", title: "Contact", section: "Contact" },
      ],
    },
    header: {
      title: "Łukasz Dymek",
      paragraphs: ["Python/Django/React", "Simply a programmer"],
    },
    aboutMe: {
      title: "About me",
      paragraph1part1Hello: "Hi - my name is Łukasz. ",
      paragraph1part1StrikeThrough: "Currently a Cop👮🏻‍♂️, in the future… programmer.",
      paragraph1part1End:
        " For the last couple of years, I spend all of my free time coding. My programming adventure started when I first wrote",
      paragraph1code: "print 'Hello World'",
      paragraph1part2:
        "in Python (yes - Python 2). Lately, I've delved into frontend development. Nowadays, I mostly spend my time writing React code.",
      paragraph2:
        "I am not taking sides. I equally enjoy frontend and backend development. What's most important to me is genuinely enjoying the coding process. I dreamed of working as a full-time programmer, and I am incredibly grateful to be doing what I love. ❤️",
    },
    projects: {
      title: "Projects",
      subtitle: "Choosen projects I made",
      paragraph: "Technologies / libraries used",
      projects: [
        {
          img: `${project4Image}`,
          alt: "Simplest cryptocurrency portfolio",
          title: "Simplest cryptocurrency portfolio",
          text: "Simplest Bitcoin & cryptocurrency portfolio tracker. No redundant options. Every portfolio app is full of redundant options and I thought that I could write my own simple portfolio app. And here it is. As simple as possible but fulfilling its role.",
          tech: [
            "React",
            "NextJs",
            "Typescript",
            "Lerna",
            "Tailwind css",
            "Styled-components",
            "Hapi",
            "Prisma",
            "PostgreSQL",
          ],
          githubUrl: "https://github.com/jundymek/next-cryptocurrency",
          liveUrl: null,
        },
        {
          img: `${project1Image}`,
          alt: "Free proxy",
          title: "Free proxy",
          text: "My first python library placed on PyPI. It is a simple script which scrapes https://www.sslproxies.org/  site for proxy for further use. Program checks on the fly whether the proxy is working and gives the first working proxy. It returns proxy as a string. The library was written when I was writing a bot in python. I needed proxy and because I couldn’t find anything working with selenium library I decided to create something from scratch.",
          tech: ["Python", "Requests Library"],
          githubUrl: "https://github.com/jundymek/free-proxy",
          liveUrl: "https://pypi.org/project/free-proxy/",
        },
        {
          img: `${project2Image}`,
          alt: "Netkat",
          title: "Netkat - site dictionary",
          text: "My first big programming project. Written in Python/Django, working site dictionary. I used to make some SEO in the past and decided to write something related. I didn’t want to reproduce another todo app. And here it is - NETKAT - “site dictionary script”. I am proud of it.",
          tech: ["Python", "Django", "PostgreSQL"],
          githubUrl: "https://github.com/jundymek/netkat",
          liveUrl: null,
        },
        {
          img: `${project3Image}`,
          alt: "Pan Kanapka",
          title: "Pan Kanapka",
          text: "A simple application written to remind me Python and Django. My friend gave me an idea and I fell into a Pan Kanapka trap. The app is a connection between Mr. Sandwitch and his customers. Mr. Sandwitch adds to the database new places where he delivers his sandwiches. Customers can sign up for push notifications informing that food will be there in a short time.",
          tech: [
            "Python",
            "Django",
            "Django Rest Framework",
            "Leaflet",
            "PostgreSql",
            "django-rest-auth",
            "django-push-notifications",
            "google places api",
          ],
          githubUrl: "https://github.com/jundymek/pan-kanapka-front",
          liveUrl: null,
        },
      ],
    },
    repositories: {
      title: "GitHub repositories",
      subtitle: "Sorted by technology (categorized by GitHub)",
    },
    repositoriesCounter: {
      subtitle: "All puplic repos",
    },
    skills: {
      title: "Skills",
      paragraph: "Technologies and tools I use",
      skills: [
        { img: `${htmlImage}`, alt: "Html", text: "HTML5", tooltipText: ["semantic html", "PWA"] },
        {
          img: `${cssImage}`,
          alt: "Css3",
          text: "Css3",
          tooltipText: ["sass", "BEM", "flexbox", "grid", "transitions", "animations"],
        },
        { img: `${javascriptImage}`, alt: "Javascript", text: "Javascript ES6", tooltipText: ["es6"] },
        { img: `${typescriptImage}`, alt: "Typescript", text: "Typescript", tooltipText: [] },
        {
          img: `${reactImage}`,
          alt: "React",
          text: "React",
          tooltipText: ["hooks", "styled-components", "redux", "context-api"],
        },
        { img: `${vueImage}`, alt: "Vue", text: "Vue", tooltipText: ["Vue2", "Vue3"] },
        {
          img: `${pythonImage}`,
          alt: "Python",
          text: "Python",
          tooltipText: ["django", "django-rest-framework", "beautifulsoup", "requests", "scrapy"],
        },
        { img: `${djangoImage}`, alt: "Django", text: "Django", tooltipText: ["django", "django-rest-framework"] },
        {
          img: `${gitImage}`,
          alt: "Git",
          text: "Git",
          tooltipText: ["git commit", "git merge", "git branch", "git push", "git pull", "..."],
        },
        { img: `${githubImage}`, alt: "GitHub", text: "Github", tooltipText: ["above 20 remote repositories"] },
        { img: `${postgreSQLImage}`, alt: "PostgreSQL", text: "PostgreSQL", tooltipText: [] },
        { img: `${figmaImage}`, alt: "Figma", text: "Figma", tooltipText: [] },
      ],
    },
    contact: {
      title: "Contact",
      paragraph: "Hire me if You want!",
      buttonLabel: "Send a message",
      social: [
        { title: "Github", img: `${github}`, url: "https://github.com/jundymek" },
        { title: "Linkedin", img: `${linkedin}`, url: "https://www.linkedin.com/in/lukasz-dymek/" },
        { title: "Codewars", img: `${codewars}`, url: "https://www.codewars.com/users/jundymek" },
      ],
    },
    footer: {
      paragraph1part1: "Made with",
      paragraph1part2: "using",
      paragraph2: "Typescript, React (with Hooks), styled-components, react-spring, axios and many more...",
    },
  },
}
