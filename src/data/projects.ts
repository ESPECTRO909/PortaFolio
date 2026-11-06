export interface Project {
  title: string;
  category: string;
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
    category: "Backend",
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
  {
    title: "Spring Boot JWT Auth Boilerplate",
    category: "Backend",
    description:
      "Plantilla base para crear APIs REST seguras, con autenticación JWT, gestión de usuarios y control de acceso por roles.",
    highlights: [
      "Registro e inicio de sesión con autenticación sin estado mediante JWT",
      "Control de acceso basado en roles ADMIN y USER",
      "Manejo global de excepciones y separación por capas: controladores, servicios, repositorios y DTOs",
    ],
    tags: [
      "Java 17",
      "Spring Boot 3",
      "Spring Security",
      "JWT",
      "Spring Data JPA",
      "Hibernate",
      "MySQL",
      "PostgreSQL",
    ],
    repoUrl: "https://github.com/ESPECTRO909/spring-boot-jwt-boilerplate",
  },
];

export const clientProjects: Project[] = [
  {
    title: "Hotel El Eden",
    category: "Frontend",
    description:
      "Sitio informativo bilingüe en español e inglés. El formulario prepara una solicitud de reserva por WhatsApp; el huésped debe enviarla y el hotel confirmar la reservación.",
    highlights: [
      "Sitio estático desarrollado con Astro 7, React y Tailwind CSS",
      "Solicitud de reservación enviada por WhatsApp, sin confirmación automática",
    ],
    tags: ["Astro 7", "React", "Tailwind CSS", "Español / Inglés", "WhatsApp"],
    repoUrl: "https://github.com/ESPECTRO909/Hotel_Eden",
    demoUrl: "https://hotel-eden-six.vercel.app/",
  },

  {
    title: "Dolled Up",
    category: "Frontend",
    description:
      "Tienda estática de maquillaje construida con Astro e islas interactivas de React. El catálogo vive en src/products/, los filtros de categorías en src/data/categories.ts, los datos generales en src/data/ y el carrito se mantiene en el navegador. Los pedidos se preparan localmente y se abren en WhatsApp; no hay backend ni cobros.",
    highlights: [
      "Desarrollo con Astro, React y Tailwind CSS",
      "Integración de carrito de compras y proceso de pago mediante WhatsApp",
    ],
    tags: ["Astro 7", "React", "Tailwind CSS", "E-commerce", "WhatsApp"],
    repoUrl: "https://github.com/ESPECTRO909/E-Commerce-Dolled-Up",
    demoUrl: "https://e-commerce-dolled-up.vercel.app/",
  }
];