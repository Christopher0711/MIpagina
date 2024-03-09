document.addEventListener('DOMContentLoaded', function() {
    // Código JavaScript aquí
    document.getElementById('mostrarInfoProductosBtn').addEventListener('click', mostrarInfoProductos);
  });
  
  function mostrarInfoProductos() {
    var infoProductos = document.getElementById('infoProductos');
    if (infoProductos.style.display === 'none') {
      infoProductos.style.display = 'block';
    } else {
      infoProductos.style.display = 'none';
    }
  }
  