# Web Psicología Infantil

Sitio web estático construido con [Astro](https://astro.build) y [Tailwind CSS](https://tailwindcss.com) para promocionar una consulta de psicología infantil.

## Empezar

```bash
npm install
npm run dev
```

Abre [http://localhost:4321](http://localhost:4321) en el navegador.

## Comandos

| Comando | Acción |
|---|---|
| `npm install` | Instala las dependencias |
| `npm run dev` | Servidor de desarrollo en `localhost:4321` |
| `npm run build` | Genera el sitio estático en `./dist/` |
| `npm run preview` | Sirve la build localmente para revisarla |

## ¿Qué editar para personalizar la web?

### 1. Datos de contacto y configuración → [src/data/site.ts](src/data/site.ts)

Es el archivo más importante. Contiene nombre, teléfono, email, WhatsApp, dirección, URL de Calendly y endpoint de Formspree. **Cambiando este archivo se actualiza todo el sitio.**

### 2. Servicios, proceso y FAQ → [src/data/content.ts](src/data/content.ts)

Lista de servicios (con icono y descripción), pasos del proceso terapéutico y preguntas frecuentes.

### 3. Textos largos de las páginas

Los textos más extensos viven dentro de los archivos `.astro`. Busca los marcadores `[ENTRE CORCHETES]` — son los huecos pendientes de rellenar:

- [src/components/Hero.astro](src/components/Hero.astro) — Slogan principal y números destacados
- [src/components/AboutSection.astro](src/components/AboutSection.astro) — Bio en home
- [src/pages/sobre-mi.astro](src/pages/sobre-mi.astro) — Bio extendida, formación, enfoque
- [src/pages/aviso-legal.astro](src/pages/aviso-legal.astro) — **Importante:** revisar con asesor antes de publicar

### 4. Imágenes → [public/images/](public/images/)

Coloca aquí las fotos:
- `retrato.jpg` — Foto profesional para el hero (ratio 4:5)
- `consulta.jpg` — Foto del espacio terapéutico
- `og-image.jpg` — 1200×630, para compartir en WhatsApp/redes

Después de añadirlas, sustituye los placeholders en `Hero.astro` y `AboutSection.astro` por:

```astro
---
import { Image } from 'astro:assets';
import retrato from '../../public/images/retrato.jpg';
---
<Image src={retrato} alt="Retrato profesional" class="w-full h-full object-cover" />
```

### 5. Colores → [tailwind.config.mjs](tailwind.config.mjs)

La paleta `brand` (verde salvia) y `accent` (amarillo cálido) se cambia en un solo sitio.

## Servicios externos a configurar

### Formspree (formulario de contacto)
1. Crea cuenta gratuita en [formspree.io](https://formspree.io)
2. Crea un nuevo formulario y copia su endpoint (ej: `https://formspree.io/f/abcd1234`)
3. Pégalo en `site.ts` → `formspreeEndpoint`
4. Confirma el email de destino al recibir el primer envío de prueba

### Calendly (reserva de cita)
1. Crea cuenta gratuita en [calendly.com](https://calendly.com)
2. Crea un tipo de evento llamado por ejemplo "Primera consulta" (50 min)
3. Copia su URL (ej: `https://calendly.com/tu-usuario/primera-consulta`)
4. Pégala en `site.ts` → `calendlyUrl`

### WhatsApp
En `site.ts`, pon el número en formato internacional **sin `+` ni espacios**:
- ✅ `34600000000`
- ❌ `+34 600 000 000`

## Despliegue en Vercel (recomendado)

1. Crea un repositorio en GitHub y sube el código:
   ```bash
   git init
   git add .
   git commit -m "Primera versión de la web"
   git remote add origin <url-repo>
   git push -u origin main
   ```
2. Entra en [vercel.com](https://vercel.com) e inicia sesión con GitHub
3. "Import Project" → selecciona el repositorio. Vercel detecta Astro automáticamente
4. Click en "Deploy". En 30 segundos tienes el sitio en `tu-proyecto.vercel.app`
5. Cada `git push` futuro despliega solo
6. **Dominio propio:** lo compras en Namecheap/IONOS (~10 €/año) y lo conectas desde Settings → Domains

> **Importante:** después del primer despliegue, edita `astro.config.mjs` y `src/data/site.ts` poniendo la URL real del dominio. Eso hace que el sitemap, las URLs canónicas y las imágenes Open Graph apunten correctamente.

## Verificación antes de publicar

- [ ] Build local funciona: `npm run build && npm run preview`
- [ ] Lighthouse en Chrome DevTools: 95+ en las cuatro categorías
- [ ] Formulario envía y llega el email a la cuenta configurada
- [ ] Calendly carga y permite reservar
- [ ] Botón flotante de WhatsApp abre el chat con el mensaje pre-rellenado
- [ ] Responsive: revisar 375px, 768px y 1280px
- [ ] Aviso legal **revisado por asesor o abogado** antes de publicar
- [ ] Todos los `[CORCHETES]` reemplazados por contenido real

## Estructura del proyecto

```
src/
├── components/      # Piezas reutilizables (Hero, FAQ, ContactForm…)
├── data/            # Configuración y contenido editable
│   ├── site.ts      # ⭐ Datos de contacto, URLs, redes
│   └── content.ts   # ⭐ Servicios, proceso, FAQ
├── layouts/
│   └── BaseLayout.astro   # Plantilla con SEO, header, footer
├── pages/           # Cada archivo es una URL
│   ├── index.astro
│   ├── sobre-mi.astro
│   ├── servicios.astro
│   ├── reserva.astro
│   ├── contacto.astro
│   └── aviso-legal.astro
└── styles/
    └── global.css
```

## Stack

- Astro 5 · Tailwind CSS 3 · TypeScript · Iconos Lucide via astro-icon
- Sitemap automático · JSON-LD para SEO local · Sin JavaScript en cliente salvo el menú móvil
