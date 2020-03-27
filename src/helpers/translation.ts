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
      title: "Projekty na github",
      subtitle: "Posortowane według technologii (skategoryzowane przez githuba)"
    },
    skills:
    {
      title: "Umiejętności",
      paragraph: "Technologie i programy, których używam",
      skills: [
        { img: `${pythonImage}`, alt: "Python", text: "Python", tooltipText: "Zakochałem się w nim po moim pierwszym print 'Hello World' - jeszcze w Pythonie2. Dzięki pythonowi zacząłem naukę programowania i ten język do tej pory uważam za nejprzystępniejszy i po prostu warty wypróbowania." },
        { img: `${djangoImage}`, alt: "Django", text: "Django" },
        { img: `${cssImage}`, alt: "Css3", text: "Css3" },
        { img: `${htmlImage}`, alt: "Html", text: "HTML5" },
        { img: `${gitImage}`, alt: "Git", text: "Git" },
        { img: `${githubImage}`, alt: "GitHub", text: "Github" },
        { img: `${javascriptImage}`, alt: "Javascript", text: "Javascript ES6" },
        { img: `${reactImage}`, alt: "React", text: "React" },
        { img: `${sassImage}`, alt: "Sass", text: "Sass" },
        { img: `${typescriptImage}`, alt: "Typescript", text: "Typescript" },
        { img: `${postgreSQLImage}`, alt: "PostgreSQL", text: "PostgreSQL" },
        { img: `${figmaImage}`, alt: "Figma", text: "Figma" },
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
    header:
    {
      title: "Łukasz Dymek",
      paragraphs: ["Python/Django/React",
        "Simply programmer"]
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
          text: "A simple application written to remind me of Python and Django. My friend gave me an idea and I fell into a Pan Kanapka trap. The app is a connection between Mr. Sandwitch and his customers. Mr. Sandwitch adds to the database new places where he delivers his sandwiches. Customers can sign up for push notifications informing that food will be there in a short time.",
          tech: ["Python", "Django", "Django Rest Framework", "Leaflet", "PostgreSql", "django-rest-auth", "django-push-notifications", "google places api"]
        }
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
        { img: `${pythonImage}`, alt: "Python", text: "Python", tooltipText: "Zakochałem się w nim po moim pierwszym print 'Hello World' - jeszcze w Pythonie2. Dzięki pythonowi zacząłem naukę programowania i ten język do tej pory uważam za nejprzystępniejszy i po prostu warty wypróbowania." },
        { img: `${djangoImage}`, alt: "Django", text: "Django" },
        { img: `${cssImage}`, alt: "Css3", text: "Css3" },
        { img: `${htmlImage}`, alt: "Html", text: "HTML5" },
        { img: `${gitImage}`, alt: "Git", text: "Git" },
        { img: `${githubImage}`, alt: "GitHub", text: "Github" },
        { img: `${javascriptImage}`, alt: "Javascript", text: "Javascript ES6" },
        { img: `${reactImage}`, alt: "React", text: "React" },
        { img: `${sassImage}`, alt: "Sass", text: "Sass" },
        { img: `${typescriptImage}`, alt: "Typescript", text: "Typescript" },
        { img: `${postgreSQLImage}`, alt: "PostgreSQL", text: "PostgreSQL" },
        { img: `${figmaImage}`, alt: "Figma", text: "Figma" },
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
