/**
 * CONFIGURACIÓN CENTRAL DEL SITIO
 *
 * Los datos de perfil y contacto viven en src/data/textos/datos.json y Jacobo los edita
 * desde Pages CMS (formularios en .pages.yml, raíz del repo). Aquí se leen y se completan
 * con los ajustes técnicos, que NO se tocan desde el editor.
 */
import datos from './textos/datos.json';
import inicio from './textos/inicio.json';
import { limpio } from './content';

export const site = {
  // --- Identidad (editable: Pages CMS → "Datos de contacto y perfil") ---
  nombre: limpio(datos.nombre),
  tituloProfesional: limpio(datos.tituloProfesional),
  colegiado: limpio(datos.colegiado),
  // Frase principal de la portada (editable: Pages CMS → "Inicio")
  tagline: limpio(inicio.cabecera?.titulo),

  // --- Contacto (editable) ---
  email: limpio(datos.email),
  telefono: limpio(datos.telefono),
  // Número internacional sin "+" ni espacios para wa.me (ej: 34600000000).
  // Se dejan solo los dígitos por si alguien lo escribe con "+" o espacios.
  whatsapp: (datos.whatsapp ?? '').replace(/\D/g, ''),
  whatsappMensaje: limpio(datos.whatsappMensaje),

  // --- Ubicación ---
  // Aunque la atención es online, el aviso legal requiere una dirección a efectos de
  // notificaciones (puede ser personal o un apartado postal).
  direccion: '',
  ciudad: limpio(datos.ciudad),
  pais: 'España',

  // --- URLs externas ---
  // Pega aquí el endpoint de Formspree (ej: https://formspree.io/f/xxxxxxx)
  formspreeEndpoint: 'https://formspree.io/f/xzdwvdej',

  // --- Redes sociales (editable; vacío = no sale el icono) ---
  redes: {
    instagram: limpio(datos.redes?.instagram),
    linkedin: limpio(datos.redes?.linkedin),
    facebook: limpio(datos.redes?.facebook),
  },

  // --- SEO ---
  // Dominio de la web (sin barra final). Si cambia, cámbialo también en astro.config.mjs,
  // public/robots.txt y vercel.json (la redirección desde la dirección vieja de Vercel).
  url: 'https://jacobochamorro.es',
  ogImage: '/images/og-image.jpg',
};

export type SiteConfig = typeof site;

/** URL de WhatsApp pre-rellenada con mensaje. */
export const whatsappUrl = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.whatsappMensaje)}`;

/** Enlace tel: para móviles. */
export const telLink = `tel:${site.telefono.replace(/\s/g, '')}`;

/** Enlace mailto:. */
export const mailtoLink = `mailto:${site.email}`;
