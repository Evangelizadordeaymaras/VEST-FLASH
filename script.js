let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

function actualizarCarrito() {
  const lista = document.getElementById('carrito-lista');
  const total = document.getElementById('carrito-total');
  lista.innerHTML = '';
  let suma = 0;

  if (carrito.length === 0) {
    lista.innerHTML = '<li>El carrito está vacío.</li>';
    total.textContent = '';
  } else {
    carrito.forEach(item => {
      const li = document.createElement('li');
      li.textContent = `${item.nombre} - S/ ${item.precio}`;
      lista.appendChild(li);
      suma += item.precio;
    });
    total.textContent = `Total: S/ ${suma.toFixed(2)}`;
  }

  localStorage.setItem('carrito', JSON.stringify(carrito));
}

function carritoAgregar(nombre, precio) {
  carrito.push({ nombre, precio });
  actualizarCarrito();
  alert(`${nombre} añadido al carrito.`);
}

function verCarrito() {
  document.getElementById('carrito-pestana').style.display = 'block';
  actualizarCarrito();
}

function cerrarCarrito() {
  document.getElementById('carrito-pestana').style.display = 'none';
}

function vaciarCarrito() {
  carrito = [];
  actualizarCarrito();
  alert('Carrito vaciado.');
}