/**
 * Textos de la web (cabeceras, servicios, proceso, FAQ…).
 *
 * Los textos viven en los JSON de src/data/textos/ y Jacobo los edita desde Pages CMS,
 * con los formularios definidos en .pages.yml (raíz del repo). Este archivo los lee y los
 * deja listos para los componentes, tolerando campos vacíos o borrados: un texto en blanco
 * nunca debe romper el build, porque entonces el cambio no se publica y nadie sabe por qué.
 *
 * Convención de los campos de texto largo: una línea en blanco separa un párrafo del siguiente.
 */
import inicioJson from './textos/inicio.json';
import sobreMiJson from './textos/sobre-mi.json';
import serviciosJson from './textos/servicios.json';
import preguntasJson from './textos/preguntas.json';
import contactoJson from './textos/contacto.json';

type Texto = string | null | undefined;

/** El texto en una sola línea, sin espacios sobrantes ('' si está vacío). */
export const limpio = (texto: Texto) => (texto ?? '').replace(/\s+/g, ' ').trim();

/** Parte un texto largo en párrafos (separados por una línea en blanco). */
export const parrafos = (texto: Texto) => (texto ?? '').split(/\n\s*\n/).map(limpio).filter(Boolean);

/** Icono de respaldo si una tarjeta se guarda sin icono (sin él, el build fallaría). */
const icono = (nombre: Texto) => limpio(nombre) || 'lucide:sparkles';

/** Quita de una lista los elementos que se han quedado sin su texto principal. */
function sinVacios<T>(lista: T[] | null | undefined, principal: (item: T) => Texto): T[] {
  return (lista ?? []).filter((item) => item && limpio(principal(item)));
}

/** Etiqueta pequeña + título + párrafos: la cabecera de casi todas las secciones. */
const seccion = (s?: { etiqueta?: Texto; titulo?: Texto; texto?: Texto } | null) => ({
  etiqueta: limpio(s?.etiqueta),
  titulo: limpio(s?.titulo),
  parrafos: parrafos(s?.texto),
});

// --- Inicio ---

/** Portada. La frase principal es site.tagline (también va al pie y a Google). */
export const portada = {
  parrafos: parrafos(inicioJson.cabecera?.texto),
  boton: limpio(inicioJson.cabecera?.boton) || 'Contacta conmigo',
  destacados: sinVacios(inicioJson.cabecera?.destacados, (d) => d.valor).map((d) => ({
    valor: limpio(d.valor),
    texto: limpio(d.texto),
  })),
};

/** Recuadro "¿Quieres dar el primer paso?" (al final de Inicio, Sobre mí y Servicios). */
export const llamadaFinal = {
  ...seccion(inicioJson.llamadaFinal),
  boton: limpio(inicioJson.llamadaFinal?.boton) || 'Contacta conmigo',
};

// --- Sobre mí ---

/** Presentación: en la portada sale resumida; en /sobre-mi, con el texto ampliado. */
export const presentacion = {
  ...seccion(sobreMiJson.presentacion),
  ampliacion: parrafos(sobreMiJson.presentacion?.textoAmpliado),
  botonPortada: limpio(sobreMiJson.presentacion?.botonPortada) || 'Saber más sobre mí',
};

export const sobreMi = {
  cabecera: seccion(sobreMiJson.cabecera),
  valores: sinVacios(sobreMiJson.valores, (v) => v.titulo).map((v) => ({
    icono: icono(v.icono),
    titulo: limpio(v.titulo),
    texto: limpio(v.texto),
  })),
  formacion: {
    ...seccion(sobreMiJson.formacion),
    lista: sinVacios(sobreMiJson.formacion?.lista, (f) => f).map(limpio),
  },
  enfoque: seccion(sobreMiJson.enfoque),
  descripcionGoogle: limpio(sobreMiJson.descripcionGoogle),
};

// --- Servicios ---

type GrupoJson = {
  pestana?: Texto;
  detalle?: Texto;
  lista?: { icono?: Texto; titulo?: Texto; descripcion?: Texto }[] | null;
} | null | undefined;

/** Una pestaña de servicios (Adultos / Infanto-juvenil) con sus tarjetas. */
const grupo = (id: string, g: GrupoJson, pestanaPorDefecto: string) => ({
  id,
  pestana: limpio(g?.pestana) || pestanaPorDefecto,
  detalle: limpio(g?.detalle),
  lista: sinVacios(g?.lista, (s) => s.titulo).map((s) => ({
    icono: icono(s.icono),
    titulo: limpio(s.titulo),
    descripcion: limpio(s.descripcion),
  })),
});

/**
 * "En qué puedo ayudarte" (Inicio y Servicios): una pestaña por público, en este orden (la
 * primera es la que sale abierta al entrar). Una pestaña que se
 * queda sin tarjetas desaparece; si solo queda una, se pinta sin selector.
 */
export const servicios = {
  ...seccion(serviciosJson.areas),
  grupos: [
    grupo('infanto-juvenil', serviciosJson.areas?.infantoJuvenil, 'Infanto-juvenil'),
    grupo('adultos', serviciosJson.areas?.adultos, 'Adultos'),
  ].filter((g) => g.lista.length > 0),
};

/** "El proceso, paso a paso" (Inicio y Servicios). El número de cada paso sale solo. */
export const proceso = {
  ...seccion(serviciosJson.proceso),
  pasos: sinVacios(serviciosJson.proceso?.pasos, (p) => p.titulo).map((p, i) => ({
    numero: String(i + 1).padStart(2, '0'),
    titulo: limpio(p.titulo),
    descripcion: limpio(p.descripcion),
  })),
};

export const paginaServicios = {
  cabecera: seccion(serviciosJson.cabecera),
  sesiones: {
    ...seccion(serviciosJson.sesiones),
    lista: sinVacios(serviciosJson.sesiones?.lista, (m) => m.titulo).map((m) => ({
      icono: icono(m.icono),
      titulo: limpio(m.titulo),
      texto: limpio(m.texto),
    })),
  },
  descripcionGoogle: limpio(serviciosJson.descripcionGoogle),
};

// --- Preguntas frecuentes ---

export const faqs = {
  ...seccion(preguntasJson),
  lista: sinVacios(preguntasJson.lista, (f) => f.pregunta).map((f) => ({
    pregunta: limpio(f.pregunta),
    respuesta: parrafos(f.respuesta),
  })),
};

// --- Contacto ---

export const contacto = {
  cabecera: seccion(contactoJson.cabecera),
  formularioTitulo: limpio(contactoJson.formulario?.titulo) || 'Escríbeme',
  formularioNota: limpio(contactoJson.formulario?.nota),
  horario: sinVacios(contactoJson.disponibilidad?.horario, (l) => l).map(limpio),
  modalidad: limpio(contactoJson.disponibilidad?.modalidad),
  whatsapp: {
    titulo: limpio(contactoJson.whatsapp?.titulo) || '¿Prefieres WhatsApp?',
    texto: limpio(contactoJson.whatsapp?.texto),
  },
};
