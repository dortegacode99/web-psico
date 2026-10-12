/**
 * Contenido editable del sitio (servicios, FAQ, proceso, etc.).
 * Editar aquí evita tocar los archivos .astro.
 */

export const servicios = [
  {
    icono: 'lucide:wind',
    titulo: 'Ansiedad y estrés',
    descripcion: 'Ataques de pánico, preocupación constante, tensión física, pensamientos que no paran y/o sensación de peligro.',
  },
  {
    icono: 'lucide:cloud-rain',
    titulo: 'Depresión y bajo estado de ánimo',
    descripcion: 'Tristeza prolongada, falta de energía, desmotivación, sensación de vacío y/o alteraciones del sueño (dormir demasiado o muy poco).',
  },
  {
    icono: 'lucide:sparkles',
    titulo: 'Autoestima y crecimiento personal',
    descripcion: 'Inseguridad, autoexigencia, dificultad para poner límites o miedo a decepcionar. Construir una relación más amable contigo mismo.',
  },
  {
    icono: 'lucide:heart-crack',
    titulo: 'Duelo y pérdidas',
    descripcion: 'Acompañamiento ante la muerte de un ser querido, una ruptura, cambios laborales o cualquier pérdida que cuesta integrar.',
  },
  {
    icono: 'lucide:users',
    titulo: 'Relaciones familiares y de pareja',
    descripcion: 'Conflictos de pareja, dependencia emocional, dificultades para confiar o patrones que se repiten en tus relaciones.',
  },
  {
    icono: 'lucide:briefcase',
    titulo: 'Estrés laboral y burnout',
    descripcion: 'Saturación, presión, agotamiento, sensación de no llegar, dificultad para desconectar fuera del trabajo y/o desmotivación constante.',
  },
] as const;

export const proceso = [
  {
    numero: '01',
    titulo: 'Primer contacto',
    descripcion: 'Me escribes por formulario, WhatsApp o teléfono. Respondo en menos de 24 h laborables y resolvemos las dudas iniciales.',
  },
  {
    numero: '02',
    titulo: 'Sesión inicial',
    descripcion: 'Una primera sesión online de 50 minutos donde me cuentas qué te ocurre y vemos juntos si encajamos para trabajar.',
  },
  {
    numero: '03',
    titulo: 'Proceso terapéutico',
    descripcion: 'Sesiones regulares (habitualmente semanales) con objetivos claros. Vamos revisando avances y ajustando el ritmo según lo que necesites.',
  },
  {
    numero: '04',
    titulo: 'Cierre y autonomía',
    descripcion: 'Cuando los objetivos se alcanzan, espaciamos las sesiones progresivamente hasta el alta. Siempre con la puerta abierta.',
  },
] as const;

export const faqs = [
  {
    pregunta: '¿Cuánto dura una sesión y con qué frecuencia se hacen?',
    respuesta: 'Las sesiones duran 50 minutos. Lo habitual al inicio es una sesión semanal; conforme avanzas se pueden espaciar a quincenales o mensuales hasta el cierre.',
  },
  {
    pregunta: '¿Hay algún compromiso de permanencia?',
    respuesta: 'No, no hay paquetes cerrados ni permanencia mínima. Cada sesión es independiente y tú decides cuándo continuar, espaciar la frecuencia o cerrar el proceso. Al inicio suele ser útil mantener un ritmo regular para coger continuidad, pero siempre se ajusta a lo que tú necesites en cada momento.',
  },
  {
    pregunta: '¿Cuánto suele durar un proceso terapéutico?',
    respuesta: 'Depende de cada persona y del motivo de consulta: cada proceso tiene su propio ritmo y no hay una duración estándar. Lo importante es revisar juntos los avances con regularidad para que tengas claridad sobre cómo va el proceso en cada momento.',
  },
  {
    pregunta: '¿La terapia online es igual de efectiva que la presencial?',
    respuesta: 'Sí. La evidencia científica muestra que para la mayoría de motivos de consulta en adultos los resultados son equivalentes. Además aporta flexibilidad y permite mantener la continuidad si viajas o cambias de ciudad.',
  },
  {
    pregunta: '¿Trabajas con seguros médicos?',
    respuesta: 'No trabajo directamente con mutuas, pero emito factura privada para que puedas solicitar el reembolso a tu seguro médico si tu póliza lo contempla.',
  },
] as const;
