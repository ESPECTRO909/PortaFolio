# Portafolio de Sinuhe Alvarez

Sitio personal de una sola página, construido con Astro, TypeScript, Tailwind CSS 4 y una isla React para el interruptor de tema. El contenido se genera estáticamente y no requiere backend.

## Requisitos

- Node.js 22.23.4 o superior
- npm

## Desarrollo

```sh
npm install
npm run dev
```

El servidor local queda disponible normalmente en `http://localhost:4321`.

```sh
npm run build
npm run preview
```

La compilación de producción se genera en `dist/`.

## Contenido

- Edita `src/data/profile.ts` para cambiar presentación, ubicación, contacto y tecnologías.
- Agrega o actualiza proyectos en `src/data/projects.ts`; las tarjetas se generan desde ese archivo.
- Reemplaza `src/assets/me.svg` por la fotografía real y actualiza el import en `src/data/profile.ts`.
- Sustituye los valores `TODO` por la ubicación, el usuario de GitHub y la URL real del repositorio. La tarjeta no enlaza a un repositorio hasta que se indique una dirección válida. El botón Demo aparece solo cuando se define `demoUrl`.

## Despliegue

El proyecto usa salida estática estándar de Astro. Para publicarlo en Vercel, importa el repositorio y conserva el comando de compilación `npm run build` y el directorio de salida `dist`. En Netlify, configura esos mismos valores como build command y publish directory. No requiere adaptador de servidor.

Para GitHub Pages, configura `site` y `base` en `astro.config.mjs` con los datos reales del repositorio antes de publicar.
