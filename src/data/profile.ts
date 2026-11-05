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
      { name: "Java", icon: siOpenjdk },
      { name: "C", icon: siC },
      { name: "Python", icon: siPython },
      { name: "SQL", icon: "database" },
      { name: "HTML", icon: siHtml5 },
      { name: "CSS", icon: siCss },
      { name: "JavaScript", icon: siJavascript },
    ],
  },
  {
    title: "Frameworks",
    items: [
      { name: "Spring Boot", icon: siSpringboot },
      { name: "Spring Framework", icon: siSpring },
      { name: "JPA / Hibernate", icon: siHibernate },
      { name: "React", icon: siReact },
    ],
  },
  {
    title: "Bases de datos",
    items: [
      { name: "MySQL", icon: siMysql },
      { name: "PostgreSQL", icon: siPostgresql },
      { name: "MongoDB", icon: siMongodb },
    ],
  },
  {
    title: "Herramientas",
    items: [
      { name: "Git", icon: siGit },
      { name: "GitHub", icon: siGithub },
      { name: "Docker", icon: siDocker },
      { name: "Visual Studio Code", icon: "code" },
      { name: "Maven", icon: siApachemaven },
      { name: "Gradle", icon: siGradle },
      { name: "Astro", icon: siAstro },
      { name: "Vercel", icon: siVercel },
      { name: "Node.js", icon: siNodedotjs },
      { name: "Postman", icon: siPostman },
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