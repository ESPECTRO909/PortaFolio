export interface Project {
  title: string;
  description: string;
  highlights?: string[];
  tags: string[];
  repoUrl: string;
  demoUrl?: string;
  image?: string;
}

export const projects: Project[] = [
  {
    title: "SUD · Sistema Universitario de Denuncias",
    description:
      "Plataforma web de la UMSNH que centraliza y da seguimiento seguro a denuncias de violencia, acoso o discriminación mediante folios únicos.",
    highlights: [
      "Arquitectura por capas, validación de datos, contraseñas encriptadas y control de acceso por tres roles (Estudiante, Secretario, Administrador)",
      "Seguimiento del estado de cada denuncia: Pendiente, En Proceso, Resuelta o Rechazada",
      "Correos automáticos con cambios de estado y avisos de citas, más tareas programadas",
      "Generación dinámica de PDF para imprimir las denuncias",
    ],
    tags: [
      "Java 21",
      "Spring Boot",
      "Spring Security",
      "Spring Data JPA",
      "Spring Mail",
      "Quartz",
      "iText7",
      "MySQL",
    ],
    repoUrl: "TODO: https://github.com/<usuario>/<repo>",
  },
];