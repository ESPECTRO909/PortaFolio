import {
  siApachemaven,
  siAstro,
  siC,
  siCss,
  siDocker,
  siGit,
  siGithub,
  siGradle,
  siHibernate,
  siHtml5,
  siJavascript,
  siMongodb,
  siMysql,
  siNodedotjs,
  siOpenjdk,
  siPostgresql,
  siPostman,
  siPython,
  siReact,
  siSpring,
  siSpringboot,
  siVercel,
} from "simple-icons";
import portrait from "../assets/me.jpg";

export const profile = {
  name: "Sinuhe Alvarez",
  role: "Desarrollador Backend | Estudiante de Ingeniería en Computación",
  location: "Morelia, Michoacán, México",
  photo: portrait,
  bio: [
    { text: "Me llamo " },
    { text: "Sinuhe Alvarez", highlight: true },
    { text: ". Soy un apasionado por el desarrollo de software y el diseño de arquitecturas escalables, así como por la creación de soluciones empresariales y de negocio. Me especializo en " },
    { text: "backend", highlight: true },
    { text: ", con un fuerte enfoque en " },
    { text: "Java y Spring Boot", highlight: true },
    { text: ", y también tengo conocimientos de lenguajes y frameworks para el desarrollo " },
    { text: "frontend", highlight: true },
    { text: ". Actualmente curso la " },
    { text: "licenciatura en Ingeniería en Computación", highlight: true },
    { text: " en la " },
    { text: "Facultad de Ingeniería Eléctrica", highlight: true },
    { text: " de la " },
    { text: "Universidad Michoacana de San Nicolás de Hidalgo", highlight: true },
    { text: ". A la par, trabajo con un equipo de desarrollo de software para negocios." },
  ],
  email: "sinuefernando73@gmail.com",
  whatsappNumber: "523521297591",
  linkedinUrl: "https://www.linkedin.com/in/sinue-alvarez",
  githubUrl: "https://github.com/ESPECTRO909",
};

export const technologyGroups = [
  {
    title: "Lenguajes",
    items: [
      { name: "Java", icon: siOpenjdk, url: "https://dev.java/" },
      { name: "C", icon: siC, url: "https://en.cppreference.com/w/c/language.html" },
      { name: "Python", icon: siPython, url: "https://www.python.org/" },
      { name: "SQL", icon: "database", url: "https://www.w3schools.com/sql/" },
      { name: "HTML", icon: siHtml5, url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
      { name: "CSS", icon: siCss, url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
      { name: "JavaScript", icon: siJavascript, url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    ],
  },
  {
    title: "Frameworks",
    items: [
      { name: "Spring Boot", icon: siSpringboot, url: "https://spring.io/projects/spring-boot" },
      { name: "Spring Framework", icon: siSpring, url: "https://spring.io/projects/spring-framework" },
      { name: "JPA / Hibernate", icon: siHibernate, url: "https://hibernate.org/orm/" },
      { name: "React", icon: siReact, url: "https://react.dev/" },
    ],
  },
  {
    title: "Bases de datos",
    items: [
      { name: "MySQL", icon: siMysql, url: "https://www.mysql.com/" },
      { name: "PostgreSQL", icon: siPostgresql, url: "https://www.postgresql.org/" },
      { name: "MongoDB", icon: siMongodb, url: "https://www.mongodb.com/" },
    ],
  },
  {
    title: "Herramientas",
    items: [
      { name: "Git", icon: siGit, url: "https://git-scm.com/" },
      { name: "GitHub", icon: siGithub, url: "https://github.com/" },
      { name: "Docker", icon: siDocker, url: "https://www.docker.com/" },
      { name: "Visual Studio Code", icon: "code", url: "https://code.visualstudio.com/" },
      { name: "Maven", icon: siApachemaven, url: "https://maven.apache.org/" },
      { name: "Gradle", icon: siGradle, url: "https://gradle.org/" },
      { name: "Astro", icon: siAstro, url: "https://astro.build/" },
      { name: "Vercel", icon: siVercel, url: "https://vercel.com/" },
      { name: "Node.js", icon: siNodedotjs, url: "https://nodejs.org/" },
      { name: "Postman", icon: siPostman, url: "https://www.postman.com/" },
    ],
  },
];

export const services = [
  "Soluciones de software robustas y eficientes",
  "Aplicaciones empresariales",
  "Desarrollo de software a medida para negocios",
  "Diseño y consumo de APIs RESTful",
  "Seguridad en aplicaciones",
];