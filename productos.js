// productos.js

function agregarAlCarrito(producto, precio) {
    var carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito.push({ producto, precio });
    localStorage.setItem('carrito', JSON.stringify(carrito));
    alert('Producto agregado al carrito!');
  }
  