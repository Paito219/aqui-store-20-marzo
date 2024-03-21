function enviarConfirmacion() {
       
    alert('¡Gracias por tu compra! Se ha enviado una notificación de confirmación.');
    window.location.href = "index.html";
}

function regresarAIndex() {
    window.location.href = "index.html";
}


    var productosSeleccionados = JSON.parse(localStorage.getItem('productosSeleccionados'));

    if (productosSeleccionados && productosSeleccionados.length > 0) {
       
        var informacionCarrito = document.getElementById("informacion-carrito");

        // Crear una tabla para mostrar los productos
        var tabla = document.createElement("table");
        tabla.border = "1";
        tabla.innerHTML = "<thead><tr><th>Imagen</th><th>Nombre</th><th>Precio</th></tr></thead><tbody id='productos-seleccionados'></tbody>";

        // Agregar filas con la información de cada producto
        var tbody = tabla.querySelector("tbody");
        productosSeleccionados.forEach(function (producto) {
            var fila = document.createElement("tr");
            fila.innerHTML = "<td><img src='" + producto.imagen + "' alt='" + producto.nombre + "'></td><td>" + producto.nombre + "</td><td>" + producto.precio + "</td>";
            tbody.appendChild(fila);
        });

        // Agregar la tabla al elemento div
        informacionCarrito.appendChild(tabla);
    } else {
        // Mostrar un mensaje si no hay productos seleccionados
        document.write("<p>No hay productos seleccionados.</p>");
    }

    // Evento para mostrar/ocultar datos de tarjeta y selección de banco según el método de pago seleccionado
    var metodoPagoRadios = document.querySelectorAll('input[name="metodoPago"]');
    metodoPagoRadios.forEach(function(radio) {
        radio.addEventListener('change', function() {
            if (this.value === 'tarjeta') {
                document.getElementById('datos-tarjeta').style.display = 'block';
                document.getElementById('seleccion-banco').style.display = 'none';
            } else if (this.value === 'transferencia') {
                document.getElementById('datos-tarjeta').style.display = 'none';
                document.getElementById('seleccion-banco').style.display = 'block';
            }
        });
    });

    
    function enviarConfirmacion() {
        
        alert('¡Gracias por tu compra! Se ha enviado una notificación de confirmación.');
      
        window.location.href = "index.html";
    }

    function mostrarOcultarCampos(opcion) {
        var datosTarjeta = document.getElementById('datos-tarjeta');
        var seleccionBanco = document.getElementById('seleccion-banco');

        if (opcion === 'tarjeta') {
            datosTarjeta.style.display = 'block';
            seleccionBanco.style.display = 'none';
        } else if (opcion === 'transferencia') {
            datosTarjeta.style.display = 'none';
            seleccionBanco.style.display = 'block';
        }
    }
    
    

  
  