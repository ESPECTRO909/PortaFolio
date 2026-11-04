import portrait from "../assets/me.svg";

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
      { name: "Java", icon: "devicon-java-plain" },
      { name: "C", icon: "devicon-c-plain" },
      { name: "Python", icon: "devicon-python-plain" },
      { name: "SQL", icon: "database" },
      { name: "HTML", icon: "devicon-html5-plain" },
      { name: "CSS", icon: "devicon-css3-plain" },
      { name: "JavaScript", icon: "devicon-javascript-plain" },
    ],
  },
  {
    title: "Frameworks",
    items: [
      { name: "Spring Boot", icon: "devicon-spring-original" },
      { name: "Spring Framework", icon: "devicon-spring-original" },
      { name: "JPA / Hibernate", icon: "devicon-hibernate-plain" },
      { name: "React", icon: "devicon-react-plain" },
    ],
  },
  {
    title: "Bases de datos",
    items: [
      { name: "MySQL", icon: "devicon-mysql-plain" },
      { name: "PostgreSQL", icon: "devicon-postgresql-plain" },
      { name: "MongoDB", icon: "devicon-mongodb-plain" },
    ],
  },
  {
    title: "Herramientas",
    items: [
      { name: "Git", icon: "devicon-git-plain" },
      { name: "GitHub", icon: "devicon-github-original" },
      { name: "Docker", icon: "devicon-docker-plain" },
      { name: "Visual Studio Code", icon: "devicon-vscode-plain" },
      { name: "Maven", icon: "devicon-maven-plain" },
      { name: "Gradle", icon: "devicon-gradle-plain" },
      { name: "Astro", icon: "devicon-astro-plain" },
      { name: "Vercel", icon: "devicon-vercel-original" },
      { name: "Node.js", icon: "devicon-nodejs-plain" },
      { name: "Postman", icon: "devicon-postman-plain" },
    ],
  },
];

export const services = [
  "Soluciones de software robustas y eficientes",
  "Arquitecturas de microservicios y persistencia políglota",
  "Aplicaciones empresariales",
  "Diseño y consumo de APIs RESTful",
  "Seguridad en aplicaciones",
];