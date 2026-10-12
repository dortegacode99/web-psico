/**
 * CONFIGURACIÓN CENTRAL DEL SITIO
 *
 * Edita aquí los datos reales cuando los tengas.
 * Todo el sitio lee desde este archivo, no necesitas tocar nada más
 * salvo los textos largos que están en cada página.
 */

export const site = {
  // --- Identidad ---
  nombre: 'Jacobo Chamorro',
  tituloProfesional: 'Psicólogo online',
  colegiado: 'M-40114',
  tagline: 'Terapia online para jóvenes y adultos, un espacio para entenderte y alcanzar tus objetivos',

  // --- Contacto ---
  email: 'jacobo.chamorro.ticpg@gmail.com',
  telefono: '+34 618 077 130',
  // Número internacional sin "+" ni espacios para wa.me (ej: 34600000000)
  whatsapp: '34618077130',
  whatsappMensaje: 'Hola, me gustaría informarme sobre la primera sesión.',

  // --- Ubicación ---
  // Aunque la atención es online, el aviso legal requiere una dirección a efectos de
  // notificaciones (puede ser personal o un apartado postal).
  direccion: '',
  ciudad: 'Madrid',
  pais: 'España',

  // --- URLs externas ---
  // Pega aquí el endpoint de Formspree (ej: https://formspree.io/f/xxxxxxx)
  formspreeEndpoint: 'https://formspree.io/f/xzdwvdej',

  // --- Redes sociales (deja '' para ocultar el icono) ---
  redes: {
    instagram: '',
    linkedin: 'https://www.linkedin.com/in/jchamval/',
    facebook: '',
  },

  // --- SEO ---
  // Cuando despliegues, cambia esto por tu dominio real (sin barra final)
  url: 'https://jacobochamorro.vercel.app',
  ogImage: '/images/og-image.jpg',
} as const;

export type SiteConfig = typeof site;

/** URL de WhatsApp pre-rellenada con mensaje. */
export const whatsappUrl = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.whatsappMensaje)}`;

/** Enlace tel: para móviles. */
export const telLink = `tel:${site.telefono.replace(/\s/g, '')}`;

/** Enlace mailto:. */
export const mailtoLink = `mailto:${site.email}`;
