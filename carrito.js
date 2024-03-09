// carrito.js

document.addEventListener('DOMContentLoaded', function() {
  actualizarCarrito();
});

function actualizarCarrito() {
  var listaCarrito = document.getElementById('listaCarrito');
  var totalCarrito = document.getElementById('totalCarrito');

  // Obtener productos del carrito desde el almacenamiento local
  var carrito = JSON.parse(localStorage.getItem('carrito')) || [];

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
  // Puedes agregar aquí la lógica para procesar la compra, por ejemplo, enviar datos al servidor.
  localStorage.removeItem('carrito'); // Limpiar el carrito después de la compra
  actualizarCarrito();
}
