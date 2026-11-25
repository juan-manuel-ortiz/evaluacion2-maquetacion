/*
 * app.js - JavaScript que construye la interfaz
 *
 * Los NOMBRES de las funciones y sus parámetros no se cambian: el
 * verificador las llama así. Lo que hay dentro lo escribes tú.
 *
 * Las funciones de los issues #3 y #4 (crearCard, generarHTML, filtrar,
 * buscar, ordenar, aplicarFiltros) NO tocan el DOM: reciben datos y
 * devuelven datos o texto. Solo actualizarVista() e iniciar() usan document.
 *
 * Consulta:
 *   https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Template_literals
 *   https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 *   https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
 *   https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
 *   https://developer.mozilla.org/es/docs/Web/API/EventTarget/addEventListener
 *   https://es.javascript.info/array-methods
 */

// Estado de la interfaz: lo que la persona eligió en los controles.
const estado = {
  categoria: 'todas',
  texto: '',
  orden: 'nombre-asc'
};

/* ---------------------------------------------------------------
 * Issue #3 - Datos a tarjetas
 * --------------------------------------------------------------- */

// TODO: devuelve un TEXTO con el HTML de UNA tarjeta.
// Debe tener: un article con clase card (dentro de una columna si tu
// #catalogo no usa row-cols), la imagen con src = item.imagen y un alt
// descriptivo, card-body, un h3 con clase card-title y el nombre,
// un badge con la categoría, la descripción, el valor de
// item[configuracion.campoOrden] con su etiqueta, y tus 2 campos propios.

function crearCard(item) {
  return `
    <div class="col">
      <article class="card rounded-4 shadow-sm h-100">
        <img src="${item.imagen}" class="card-img-top" alt="Curso de ${item.nombre}">

        <div class="card-body">
          <h3 class="card-title h5">${item.nombre}</h3>

          <span class="badge bg-success mb-2">${item.categoria}</span>

          <p class="card-text">${item.descripcion}</p>

          <p class="mb-1">Horas: ${item.horas}</p>
          <p class="mb-1">Nivel: ${item.nivel}</p>
          <p class="mb-0">Modalidad: ${item.modalidad}</p>
        </div>
      </article>
    </div>
  `;
}


// TODO: devuelve el HTML de TODAS las tarjetas de la lista (map + join).
// Si la lista está vacía, devuelve un mensaje (por ejemplo un <p>) que
// diga que no hay resultados.

function generarHTML(lista) {
  if (lista.length === 0) {
    return '<p class="text-center">No hay resultados para tu búsqueda.</p>';
  }

  return lista.map(item => crearCard(item)).join('');
}


/* ---------------------------------------------------------------
 * Issue #4 - Filtrar, buscar y ordenar
 * Ninguna de estas funciones modifica la lista que recibe.
 * --------------------------------------------------------------- */

// TODO: devuelve solo los elementos de esa categoría.
// Si categoria es 'todas', devuelve todos.

function filtrarPorCategoria(lista, categoria) {
  if (categoria === 'todas') {
    return [...lista];
  }

  return lista.filter(item => item.categoria === categoria);
}


// TODO: devuelve los elementos cuyo nombre o descripcion contienen el
// texto, sin importar mayúsculas ni espacios al inicio o al final.
// Si el texto está vacío, devuelve todos.

function buscarPorTexto(lista, texto) {
  const busqueda = texto.trim().toLowerCase();

  if (busqueda === '') {
    return [...lista];
  }

  return lista.filter(item =>
    item.nombre.toLowerCase().includes(busqueda) ||
    item.descripcion.toLowerCase().includes(busqueda)
  );
}


// TODO: devuelve una COPIA ordenada según el criterio:
//   'nombre-asc'  A a Z por nombre (localeCompare)
//   'valor-asc'   de menor a mayor según item[configuracion.campoOrden]
//   'valor-desc'  de mayor a menor

function ordenarItems(lista, criterio) {
  const copia = [...lista];

  if (criterio === 'nombre-asc') {
    return copia.sort((a, b) => a.nombre.localeCompare(b.nombre));
  }

  if (criterio === 'valor-asc') {
    return copia.sort((a, b) => a[configuracion.campoOrden] - b[configuracion.campoOrden]);
  }

  if (criterio === 'valor-desc') {
    return copia.sort((a, b) => b[configuracion.campoOrden] - a[configuracion.campoOrden]);
  }

  return copia;
}


// TODO: aplica las tres funciones anteriores en cadena según el estado
// ({ categoria, texto, orden }) y devuelve la lista resultante.

function aplicarFiltros(lista, estado) {
  let resultado = filtrarPorCategoria(lista, estado.categoria);

  resultado = buscarPorTexto(resultado, estado.texto);

  resultado = ordenarItems(resultado, estado.orden);

  return resultado;
}


/* ---------------------------------------------------------------
 * Issue #4 - Eventos (estas sí usan el DOM)
 * --------------------------------------------------------------- */

// TODO: calcula la lista con aplicarFiltros(items, estado), pinta el
// resultado en #catalogo con innerHTML y actualiza #contador
// (por ejemplo "Mostrando 5 de 12 resultados").


function actualizarVista() {
  const catalogo = document.getElementById('catalogo');
  const contador = document.getElementById('contador');

  const resultados = aplicarFiltros(items, estado);

  catalogo.innerHTML = generarHTML(resultados);

  contador.textContent = `Mostrando ${resultados.length} de ${items.length} resultados`;
}



// TODO: conecta los eventos y pinta por primera vez.
//   click  en cada botón con data-categoria: actualiza estado.categoria
//          y aria-pressed ("true" en el elegido, "false" en los demás)
//   input  en #buscador: actualiza estado.texto
//   change en #orden: actualiza estado.orden
// Después de cada cambio llama a actualizarVista().


function iniciar() {
  const botones = document.querySelectorAll('[data-categoria]');
  const buscador = document.getElementById('buscador');
  const orden = document.getElementById('orden');

  botones.forEach(boton => {
    boton.addEventListener('click', () => {
      estado.categoria = boton.dataset.categoria;

      botones.forEach(b => {
        const seleccionado = b === boton;
        b.setAttribute('aria-pressed', seleccionado);
        b.classList.toggle('active', seleccionado);
      });

      actualizarVista();
    });
  });

  buscador.addEventListener('input', () => {
    estado.texto = buscador.value;
    actualizarVista();
  });

  orden.addEventListener('change', () => {
    estado.orden = orden.value;
    actualizarVista();
  });

  actualizarVista();
}



// No cambies estas líneas: así el archivo también carga en el verificador,
// donde no existe document.
if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', iniciar);
}
