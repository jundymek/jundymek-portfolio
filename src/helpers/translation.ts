// skills 
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
import htmlImage from "../images/skills-icons/html5-icon.svg";
import postgreSQLImage from "../images/skills-icons/postgresql-icon.svg";

//portfolio projects
import project1Image from "../images/free_proxy.gif";
import project2Image from "../images/netkat-project.png";
import project3Image from "../images/pan-kanapka-project.png";

// contact social icons
import github from "../images/github-icon.svg";
import codewars from "../images/codewars-icon.svg"
import linkedin from "../images/linkedin-icon.svg";

export const translation = {
  PL: {
    navigation: {
      links: [
        { url: "#", title: "Home" },
        { url: "#about", title: "O mnie" },
        { url: "#skills", title: "Umiejętności" },
        { url: "#portfolio", title: "Projekty" },
        { url: "#contact", title: "Kontakt" }
      ]
    },
    header:
    {
      title: "Łukasz Dymek",
      paragraphs: ["Python/Django/React",
        "Po prostu programista"]
    },
    aboutMe:
    {
      title: "O mnie",
      paragraph1part1: "Cześć - jestem Łukasz. Obecnie Policjant 👮🏻‍♂️, w przyszłości... programista. Od kilku lat wszystkie wolne chwile poświęcam kodowaniu. Moja przygoda 'na poważnie' z programowaniem zaczęła kiedy napisałem pierwsze",
      paragraph1code: "print 'Hello World'",
      paragraph1part2: "w Pythonie (tak - w Pythonie 2). Aktualnie zgłębiam tajniki frontendu. Obecnie próbuję opanować Reacta.",
      paragraph2: "Nie deklaruję się po którejkolwiek stronie. Front i back podobają mi się jednakowo - najważniejsze jest frajda z pisania kodu. Chciałbym robić to w pełnym wymiarze czasu.",
    },
    projects:
    {
      title: "Portfolio",
      subtitle: "Wybrane projekty mojego autorstwa",
      paragraph: "Użyte technologie / biblioteki",
      projects: [
        {
          img: `${project1Image}`,
          alt: "Free proxy",
          title: "Free proxy",
          text: "Moja pierwsza biblioteka umieszczona na PyPI. Jest to prosty skrypt scrapujący stronę https://www.sslproxies.org/ i pobiearający z niej proxy do dalszego wykorzystania. Program sprawdza na bieżąco czy proxy działają i zwraca proxy, które można w danej chwili wykorzystać. Zwraca proxy w formie stringa. Biblioteka została napisana w trakcie pisania pewnego bota, do którego potrzebowałem proxy. Jako, że nie mogłem znaleźć nic działającego z biblioteką selenium postanowiłem sam napisać coś odpowiedniego. Tak powstało free-proxy.",
          tech: ["Python", "Requests library"]
        },
        {
          img: `${project2Image}`,
          alt: "Netkat",
          title: "Netkat - katalog stron",
          text:
            "Mój pierwszy większy projekt programistyczny. Napisany w Pythonie/Django działający katalog stron internetowych. Kiedyś zajmowałem się SEO i stwierdziłem, że jak mam się uczyć django to warto napisać cokolwiek sensownego zamiast setnego tutoriala todo. Tak powstał pisany nocami netkat - wyniośle nazwałem go “skrypt katalogu stron internetowych”, ale jestem mega dumny z tego projektu. ",
          tech: ["Python", "Django", "PostgreSQL"]
        },
        {
          img: `${project3Image}`,
          alt: "Pan Kanapka",
          title: "Pan Kanapka",
          text: "Prosta aplikacja napisana w ramach nauki przypomnienia Django. Znajomy rzucił pomysł i tak wpadłem w sidła Pana Kanapki…:) Aplikacja to taki łącznik pomiędzy Panem Kanapką i jego klientami. Pan Kanapka dodaje do bazy lokalizacje, gdzie rozwozi kanapki, natomiast klient może się zapisać na powiadomienia push, informujące, że niedługo zjawi się jedzenie. ",
          tech: ["Python", "Django", "Django Rest Framework", "Leaflet", "PostgreSql", "django-rest-auth", "django-push-notifications", "google places api"]
        }
      ]
    },

    repositories:
    {
      title: "Projekty na GitHub",
      subtitle: "Posortowane według technologii (skategoryzowane przez GitHuba)"
    },
    repositoriesCounter: 
    {
      subtitle: "Wszystkie repozytoria",
    },
    skills:
    {
      title: "Umiejętności",
      paragraph: "Technologie i programy, których używam",
      skills: [
        { img: `${pythonImage}`, alt: "Python", text: "Python", tooltipText: ["django", "django-rest-framework", "beautifulsoup", "requests", "scrapy"] },
        { img: `${djangoImage}`, alt: "Django", text: "Django", tooltipText: ["django", "django-rest-framework"] },
        { img: `${cssImage}`, alt: "Css3", text: "Css3", tooltipText: ["sass", "BEM", "flexbox", "grid", "transitions", "animations"] },
        { img: `${htmlImage}`, alt: "Html", text: "HTML5", tooltipText: ["semantyczny html", "PWA"] },
        { img: `${gitImage}`, alt: "Git", text: "Git", tooltipText: ["git commit", "git merge", "git branch", "git push", "git pull", "..."] },
        { img: `${githubImage}`, alt: "GitHub", text: "Github", tooltipText: ["ponad 20 zdalnych repozytoriów"] },
        { img: `${javascriptImage}`, alt: "Javascript", text: "Javascript ES6", tooltipText: ["es6"] },
        { img: `${reactImage}`, alt: "React", text: "React", tooltipText: ["hooks", "styled-components", "redux", "context-api"] },
        { img: `${sassImage}`, alt: "Sass", text: "Sass", tooltipText: ["BEM", "mixins", "variables"] },
        { img: `${typescriptImage}`, alt: "Typescript", text: "Typescript", tooltipText: [] },
        { img: `${postgreSQLImage}`, alt: "PostgreSQL", text: "PostgreSQL", tooltipText: [] },
        { img: `${figmaImage}`, alt: "Figma", text: "Figma", tooltipText: [] },
      ]
    },
    contact:
    {
      title: "Kontakt",
      paragraph: "Zatrudnij mnie!",
      buttonLabel: "Wyślij wiadomość",
      social: [
        { title: "Github", img: `${github}`, url: "https://github.com/jundymek" },
        { title: "Linkedin", img: `${linkedin}`, url: "https://www.linkedin.com/in/lukasz-dymek/" },
        { title: "Codewars", img: `${codewars}`, url: "https://www.codewars.com/users/jundymek" },
      ]
    },
    footer:
    {
      paragraph1part1: "Wykonano całym",
      paragraph1part2: "używając",
      paragraph2: "Typescript, React (z Hookami), styled-components, react-spring, axios..."
    }
  },
  EN: {
    navigation: {
      links: [
        { url: "#", title: "Home" },
        { url: "#about", title: "About me" },
        { url: "#skills", title: "Skills" },
        { url: "#portfolio", title: "Projects" },
        { url: "#contact", title: "Contact" }
      ]
    },
    header:
    {
      title: "Łukasz Dymek",
      paragraphs: ["Python/Django/React",
        "Simply programmer"]
    },
    aboutMe:
    {
      title: "About me",
      paragraph1part1: "Hi - my name is Łukasz. Currently a Cop👮🏻‍♂️, in the future… developer. For the last couple of years, I spend my all free time coding. My programming adventure started when I first wrote",
      paragraph1code: "print 'Hello World'",
      paragraph1part2: "in Python (yes - Python 2). Currently, I dove into the frontend. Nowadays I spend time mostly writing React code.",
      paragraph2: "I am not declaring myself on any side. I like frontend and backend the same. Most important is real fun when writing code. I dream about work as a programmer full time.",
    },
    projects:
    {
      title: "Portfolio",
      subtitle: "Choosen projects I made",
      paragraph: "Technologies / libraries used",
      projects: [
        {
          img: `${project1Image}`,
          alt: "Free proxy",
          title: "Free proxy",
          text: "My first python library placed on PyPI. It is a simple script which scrapes https://www.sslproxies.org/  site for proxy for further use. Program checks on the fly whether the proxy is working and gives the first working proxy. It returns proxy as a string. The library was written when I was writing a bot in python. I needed proxy and because I couldn’t find anything working with selenium library I decided to create something from scratch.",
          tech: ["Python", "Requests Library"]
        },
        {
          img: `${project2Image}`,
          alt: "Netkat",
          title: "Netkat - site dictionary",
          text: "My first big programming project. Written in Python/Django, working site dictionary. I used to make some SEO in the past and decided to write something related. I didn’t want to reproduce another todo app. And here it is - NETKAT - “site dictionary script”. I am proud of it.",
          tech: ["Python", "Django", "PostgreSQL"]
        },
        {
          img: `${project3Image}`,
          alt: "Pan Kanapka",
          title: "Pan Kanapka",
          text: "A simple application written to remind me Python and Django. My friend gave me an idea and I fell into a Pan Kanapka trap. The app is a connection between Mr. Sandwitch and his customers. Mr. Sandwitch adds to the database new places where he delivers his sandwiches. Customers can sign up for push notifications informing that food will be there in a short time.",
          tech: ["Python", "Django", "Django Rest Framework", "Leaflet", "PostgreSql", "django-rest-auth", "django-push-notifications", "google places api"]
        }
      ]
    },
    repositories:
    {
      title: "GitHub repositories",
      subtitle: "Sorted by technology (categorized by GitHub)"
    },
    repositoriesCounter: 
    {
      subtitle: "All repos",
    },
    skills:
    {
      title: "Skills",
      paragraph: "Technologies and tools I use",
      skills: [
        { img: `${pythonImage}`, alt: "Python", text: "Python", tooltipText: ["django", "django-rest-framework", "beautifulsoup", "requests", "scrapy"] },
        { img: `${djangoImage}`, alt: "Django", text: "Django", tooltipText: ["django", "django-rest-framework"] },
        { img: `${cssImage}`, alt: "Css3", text: "Css3", tooltipText: ["sass", "BEM", "flexbox", "grid", "transitions", "animations"] },
        { img: `${htmlImage}`, alt: "Html", text: "HTML5", tooltipText: ["semantic html", "PWA"] },
        { img: `${gitImage}`, alt: "Git", text: "Git", tooltipText: ["git commit", "git merge", "git branch", "git push", "git pull", "..."] },
        { img: `${githubImage}`, alt: "GitHub", text: "Github", tooltipText: ["above 20 remote repositories"] },
        { img: `${javascriptImage}`, alt: "Javascript", text: "Javascript ES6", tooltipText: ["es6"] },
        { img: `${reactImage}`, alt: "React", text: "React", tooltipText: ["hooks", "styled-components", "redux", "context-api"] },
        { img: `${sassImage}`, alt: "Sass", text: "Sass", tooltipText: ["BEM", "mixins", "variables"] },
        { img: `${typescriptImage}`, alt: "Typescript", text: "Typescript", tooltipText: [] },
        { img: `${postgreSQLImage}`, alt: "PostgreSQL", text: "PostgreSQL", tooltipText: [] },
        { img: `${figmaImage}`, alt: "Figma", text: "Figma", tooltipText: [] },
      ]
    },
    contact:
    {
      title: "Contact",
      paragraph: "Hire me if You want!",
      buttonLabel: "Send a message",
      social: [
        { title: "Github", img: `${github}`, url: "https://github.com/jundymek" },
        { title: "Linkedin", img: `${linkedin}`, url: "https://www.linkedin.com/in/lukasz-dymek/" },
        { title: "Codewars", img: `${codewars}`, url: "https://www.codewars.com/users/jundymek" },
      ]
    },
    footer:
    {
      paragraph1part1: "Made with",
      paragraph1part2: "using",
      paragraph2: "Typescript, React (with Hooks), styled-components, react-spring, axios and many more..."
    }
  }
}
