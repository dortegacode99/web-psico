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

### 1. Textos y datos de contacto → Pages CMS (sin tocar código)

Todos los textos de las páginas (portada, Sobre mí, Servicios, FAQ, Contacto) y los datos de
contacto viven en **[src/data/textos/](src/data/textos/)**, un JSON por página. Jacobo los edita
desde **[app.pagescms.org](https://app.pagescms.org)** con formularios en español; al guardar,
Pages CMS hace un commit en GitHub y Vercel vuelve a publicar la web sola (~1 min).

- Los formularios se definen en **[.pages.yml](.pages.yml)**. Pages CMS reescribe cada JSON
  **solo con los campos de ese esquema**: si añades un campo al JSON, añádelo también allí.
- [src/data/content.ts](src/data/content.ts) y [src/data/site.ts](src/data/site.ts) leen esos JSON
  y los dejan listos para los componentes, tolerando campos vacíos: un texto en blanco nunca
  debe romper el build (si el build falla, el cambio no se publica y nadie sabe por qué).
- En los campos de texto largo, **una línea en blanco separa párrafos**.
- Lo técnico sigue en `site.ts` y no se edita desde el CMS: endpoint de Formspree, URL del sitio,
  imagen para redes.

Quedan fuera del editor a propósito: la navegación, las etiquetas del formulario, el 404 y el
[aviso legal](src/pages/aviso-legal.astro) (**revisar con asesor antes de cambiarlo**; nombre,
email, teléfono, colegiado y ciudad sí se actualizan solos desde los datos de contacto).

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
En los datos de contacto (Pages CMS o `src/data/textos/datos.json`), el número va en formato
internacional **sin `+` ni espacios** (el formulario lo valida y `site.ts` lo limpia igualmente):
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
├── data/
│   ├── textos/      # ⭐ Un JSON por página: lo que edita Jacobo desde Pages CMS
│   ├── site.ts      # Datos de contacto (desde textos/datos.json) + ajustes técnicos
│   └── content.ts   # Lee los JSON de textos/ y los prepara para los componentes
├── layouts/
│   └── BaseLayout.astro   # Plantilla con SEO, header, footer
├── pages/           # Cada archivo es una URL
│   ├── index.astro
│   ├── sobre-mi.astro
│   ├── servicios.astro
│   ├── contacto.astro
│   └── aviso-legal.astro
└── styles/
    └── global.css
```

## Stack

- Astro 5 · Tailwind CSS 3 · TypeScript · Iconos Lucide via astro-icon
- Sitemap automático · JSON-LD para SEO local · Sin JavaScript en cliente salvo el menú móvil
