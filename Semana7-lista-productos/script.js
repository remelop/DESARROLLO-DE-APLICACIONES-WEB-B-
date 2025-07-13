// Listas cortas para elegir aleatoriamente
const nombres = [
  "Auriculares inalámbricos",
  "Smartwatch deportivo",
  "Cámara digital",
  "Teclado mecánico",
  "Lámpara de escritorio"
];

const descripciones = [
  "Alta calidad de sonido y batería duradera.",
  "Monitorea tu actividad y recibe notificaciones.",
  "Captura fotos y videos en alta resolución.",
  "Teclas retroiluminadas y respuesta rápida.",
  "Diseño moderno y luz ajustable."
];

// Función para generar un precio aleatorio entre 10 y 100
function precioAleatorio() {
  return (Math.random() * 90 + 10).toFixed(2);
}

// Arreglo inicial de productos (puede quedar igual o vacío)
const productos = [
  {
    nombre: "Camiseta deportiva",
    precio: 25.99,
    descripcion: "Camiseta cómoda y transpirable para deportes."
  },
  {
    nombre: "Zapatos de correr",
    precio: 75.5,
    descripcion: "Zapatos diseñados para mejorar tu rendimiento."
  },
  {
    nombre: "Mochila de viaje",
    precio: 45.0,
    descripcion: "Mochila ligera con múltiples compartimentos."
  }
];

const listaProductos = document.getElementById("lista-productos");

function renderizarProductos() {
  listaProductos.innerHTML = "";
  productos.forEach(producto => {
    const li = document.createElement("li");
    li.innerHTML = `
      <strong>${producto.nombre}</strong> - $${producto.precio}<br>
      <em>${producto.descripcion}</em>
    `;
    listaProductos.appendChild(li);
  });
}

function agregarProducto() {
  // Elegir nombre y descripción aleatoriamente
  const nombre = nombres[Math.floor(Math.random() * nombres.length)];
  const descripcion = descripciones[Math.floor(Math.random() * descripciones.length)];
  const precio = precioAleatorio();

  const nuevoProducto = {
    nombre,
    precio,
    descripcion
  };

  productos.push(nuevoProducto);
  renderizarProductos();
}

document.getElementById("btn-agregar").addEventListener("click", agregarProducto);

window.onload = renderizarProductos;
