// tienda.js

var carrito = [];

function agregarAlCarrito(producto, precio) {
  carrito.push({ producto, precio });
  actualizarCarrito();
}

function actualizarCarrito() {
  var listaCarrito = document.getElementById('listaCarrito');
  var totalCarrito = document.getElementById('totalCarrito');

  // Limpiar lista
  listaCarrito.innerHTML = '';

  // Mostrar productos en el carrito
  var total = 0;
  carrito.forEach(item => {
    var listItem = document.createElement('li');
    listItem.textContent = `${item.producto} - $${item.precio.toFixed(2)}`;
    listaCarrito.appendChild(listItem);
    total += item.precio;
  });

  // Actualizar total
  totalCarrito.textContent = total.toFixed(2);
}

function realizarCompra() {
  alert('Compra realizada. Gracias por tu compra!');
  carrito = []; // Vaciar el carrito después de la compra
  actualizarCarrito();
}
