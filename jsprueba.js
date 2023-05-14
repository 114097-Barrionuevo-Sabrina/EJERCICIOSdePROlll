const carrito = document.getElementById('lista-carrito');
const totalCarrito = document.getElementById('total-carrito');
const vaciarCarrito = document.getElementById('vaciar-carrito');
const boton = document.querySelectorAll('.producto button').forEach((boton) => {
    boton.addEventListener('click', agregarAlCarrito);
  });
  
  // Manejador de eventos para vaciar el carrito
  vaciarCarrito.addEventListener('click', () => {
    carrito.innerHTML = '';
    actualizarTotal(0);
  });
  
  // Función para agregar un producto al carrito
  function agregarAlCarrito(event) {
    const producto = event.target.parentElement;
    const titulo = producto.querySelector('h3').textContent;
    const precio = producto.querySelector('p').textContent;
  
    const nuevoProducto = document.createElement('li');
    nuevoProducto.innerHTML = `
      <span>${titulo} - ${precio}</span>
      <button class="eliminar-producto">Eliminar</button>
    `;
  
    carrito.appendChild(nuevoProducto);
  
    actualizarTotal(parseFloat(precio.slice(1)));
  
    // Manejador de eventos para eliminar un producto del carrito
    nuevoProducto.querySelector('.eliminar-producto').addEventListener('click', () => {
      nuevoProducto.remove();
      actualizarTotal(-parseFloat(precio.slice(1)));
    });
  }
  
  // Función para actualizar el total del carrito
  function actualizarTotal(precio) {
    const totalActual = parseFloat(totalCarrito.textContent.slice(7));
    totalCarrito.textContent = `Total: $${totalActual + precio}`;

    /*funcion para habilitar el carrito
    function habilitarCarrito() {
        var carrito = document.getElementById("carrito");
        carrito.style.display = "block";
      }*/
  }