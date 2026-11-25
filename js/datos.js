/*
 * datos.js - Los datos de tu tema
 * Los datos viven aquí, separados de la interfaz. app.js los recorre
 * y construye las tarjetas: nunca se escriben tarjetas a mano en el HTML.
 *
 * TODO (issue #1):
 *
 * 1. Completa configuracion:
 *      titulo         nombre de tu proyecto
 *      campoOrden     nombre de la propiedad NUMÉRICA que se usa para ordenar
 *                     (precio, duracionMinutos, paginas...). Se elige en la guía.
 *      etiquetaValor  cómo se muestra ese número en la tarjeta ("Precio", "Duración")
 *
 * 2. Llena items con los 12 elementos de la página de Contenido de tu
 *    empresa en el Manual de marca (nombres, categorías y valores exactos).
 *    TODOS con las mismas propiedades:
 *      id           número, único
 *      nombre       texto
 *      categoria    texto (mínimo 3 categorías, cada una con 2 o más elementos)
 *      descripcion  texto corto
 *      imagen       ruta en img/ (que exista) o URL que empiece por https://
 *      la propiedad de campoOrden (número)
 *      y los 2 campos propios que indica tu tema en la guía
 *
 * La información es ficticia: la entrega la empresa en el manual.
 * Puedes usar img/placeholder.svg mientras consigues imágenes.
 */


const configuracion = {
  titulo: 'Aula Ágil',
  campoOrden: 'horas',
  etiquetaValor: 'Horas'
};

const items = [
  {
    id: 1,
    nombre: 'HTML y CSS desde cero',
    categoria: 'programacion',
    descripcion: 'Crea tu primera página web.',
    imagen: 'img/placeholder.svg',
    horas: 40,
    nivel: 'básico',
    modalidad: 'presencial'
  },
  {
    id: 2,
    nombre: 'JavaScript práctico',
    categoria: 'programacion',
    descripcion: 'Da interactividad a tus páginas.',
    imagen: 'img/placeholder.svg',
    horas: 60,
    nivel: 'intermedio',
    modalidad: 'virtual'
  },
  {
    id: 3,
    nombre: 'Python para datos',
    categoria: 'programacion',
    descripcion: 'Analiza datos con Python.',
    imagen: 'img/placeholder.svg',
    horas: 48,
    nivel: 'intermedio',
    modalidad: 'virtual'
  },
  {
    id: 4,
    nombre: 'Diseño gráfico básico',
    categoria: 'diseno',
    descripcion: 'Fundamentos de color, forma y tipografía.',
    imagen: 'img/placeholder.svg',
    horas: 32,
    nivel: 'básico',
    modalidad: 'presencial'
  },
  {
    id: 5,
    nombre: 'Figma para interfaces',
    categoria: 'diseno',
    descripcion: 'Diseña pantallas de apps y sitios.',
    imagen: 'img/placeholder.svg',
    horas: 24,
    nivel: 'intermedio',
    modalidad: 'virtual'
  },
  {
    id: 6,
    nombre: 'Fotografía con celular',
    categoria: 'diseno',
    descripcion: 'Mejores fotos para redes sociales.',
    imagen: 'img/placeholder.svg',
    horas: 16,
    nivel: 'básico',
    modalidad: 'presencial'
  },
  {
    id: 7,
    nombre: 'Inglés conversacional',
    categoria: 'idiomas',
    descripcion: 'Habla con confianza en situaciones diarias.',
    imagen: 'img/placeholder.svg',
    horas: 80,
    nivel: 'intermedio',
    modalidad: 'presencial'
  },
  {
    id: 8,
    nombre: 'Inglés para entrevistas',
    categoria: 'idiomas',
    descripcion: 'Prepárate para entrevistas en inglés.',
    imagen: 'img/placeholder.svg',
    horas: 20,
    nivel: 'avanzado',
    modalidad: 'virtual'
  },
  {
    id: 9,
    nombre: 'Portugués básico',
    categoria: 'idiomas',
    descripcion: 'Primeros pasos en portugués.',
    imagen: 'img/placeholder.svg',
    horas: 40,
    nivel: 'básico',
    modalidad: 'virtual'
  },
  {
    id: 10,
    nombre: 'Excel intermedio',
    categoria: 'ofimatica',
    descripcion: 'Fórmulas, tablas dinámicas y gráficos.',
    imagen: 'img/placeholder.svg',
    horas: 30,
    nivel: 'intermedio',
    modalidad: 'presencial'
  },
  {
    id: 11,
    nombre: 'Word profesional',
    categoria: 'ofimatica',
    descripcion: 'Documentos con estilos y tablas.',
    imagen: 'img/placeholder.svg',
    horas: 16,
    nivel: 'básico',
    modalidad: 'virtual'
  },
  {
    id: 12,
    nombre: 'Presentaciones efectivas',
    categoria: 'ofimatica',
    descripcion: 'Diapositivas claras y atractivas.',
    imagen: 'img/placeholder.svg',
    horas: 12,
    nivel: 'básico',
    modalidad: 'virtual'
  }
];

