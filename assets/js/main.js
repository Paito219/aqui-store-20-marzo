const carrito = document.getElementById('carrito');
const elementos1 = document.getElementById('lista-1');
const lista = document.querySelector("#lista-carrito tbody");
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');

cargarEventListeners();

function cargarEventListeners() {
    elementos1.addEventListener('click', comprarElemento);
    carrito.addEventListener('click', eliminarElemento);
    vaciarCarritoBtn.addEventListener('click', vaciarCarrito);
}

function comprarElemento (e) {
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')) {
        const elemento = e.target.parentElement.parentElement;
        leerDatosElemento(elemento);
        
    }
}

function leerDatosElemento(elemento) {
    const infoElemento = {
        imagen: elemento.querySelector('img').src,
        titulo: elemento.querySelector('h3').textContent,
        precio: elemento.querySelector('.precio').textContent,
        id: elemento.querySelector('a').getAttribute('data-id')
    }
    insertarCarrito(infoElemento);
}

function insertarCarrito(elemento){
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>
           <img src="${elemento.imagen}" width=100
        </td>
        <td>
           ${elemento.titulo}
        </td>
        <td>
           ${elemento.precio}
        </td>
        <td>
           <a herf="#" class="borrar" data-id="${elemento.id}" > X </a>
        </td>
    `;
    lista.appendChild(row);
    
}

function eliminarElemento(e) {
    e.preventDefault();
    let elemento,
        elementoId;
    if (e.target.classList.contains('borrar')) {
        e.target.parentElement.parentElement.remove();
        elemento = e.target.parentElement.parentElement;
        elementoId = elemento.querySelector('a').getAttribute('data-id');
    }
}

function vaciarCarrito() {
    while(lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }
    return false;
}

function accion() {
    console.log("prueba boton N1");
    let ancla = document.getElementsByClassName('nav-enlace');
    for(let i =0; i < ancla.length; i++) {
        ancla[i].classList.toggle('ocultar');
    }
}

/* Sergio Buscar*/

var articulos = [
    { titulo: 'Artículo 1', contenido: ' ' },
    { titulo: 'Artículo 2', contenido: 'Contenido del artículo 2...' },
    
  ];

  function realizarBusqueda() {
    var busqueda = document.getElementById("busquedaInput").value.toLowerCase();

    var resultados = articulos.filter(function(articulo) {
      return articulo.titulo.toLowerCase().includes(busqueda) || articulo.contenido.toLowerCase().includes(busqueda);
    });

    mostrarResultados(resultados);
  }

  function mostrarResultados(resultados) {
    var resultadosDiv = document.getElementById("resultados");
    resultadosDiv.innerHTML = ""; 

    if (resultados.length === 0) {
      resultadosDiv.innerHTML = "No se encontraron resultados.";
    } else {
      resultados.forEach(function(articulo) {
        var articuloDiv = document.createElement("div");
        articuloDiv.innerHTML = "<h3>" + articulo.titulo + "</h3><p>" + articulo.contenido + "</p>";
        resultadosDiv.appendChild(articuloDiv);
      });
    }
  }
  
  var articulos = [
    { titulo: 'Artículo 1', contenido: 'Contenido del artículo 1...' },
    {
      titulo: 'Combo Gaming GS X1',
      contenido: 'Descripción del Combo Gaming GS X1...',
      precio: '$2,860,000',
      precioAntes: 'Antes $3,699,000',
      enlaceAgregarCarrito: '#',
      imagen: './assets/img/Productos/Combo Gaming GS X1.png'
    },
    { titulo: 'Artículo 2', contenido: 'Contenido del artículo 2...' },
    {
      titulo: 'Combo PC Pro Gamer MOBA',
      contenido: 'Combo PC Pro Gamer MOBA + Combo Periféricos...',
      precio: '$2.499,000',
      precioAntes: 'Antes $3.499,000',
      enlaceAgregarCarrito: '#',
      imagen: './assets/img/Productos/Combo PC Pro Gamer MOBA +Combo Periféricos.png'
    },
    { titulo: 'Artículo 3', contenido: 'Contenido del artículo 3...' },
    {
      titulo: 'PC Gamer prueba 4444444',
      contenido: 'PC Gamer Ultra-GeForce RTX 4070 12GB',
      precio: '$5.999,000',
      precioAntes: 'Antes $7.999,000',
      enlaceAgregarCarrito: '#',
      imagen: './assets/img/Productos/PC Gamer Ultra-GeForce RTX 4070 12GB.png'
    },
    { titulo: 'Artículo 4', contenido: 'Contenido del artículo 4...' },
    {
      titulo: 'Mouse Gamer T-DAGGER Captain RGB',
      contenido: 'Mouse Gamer T-DAGGER Captain RGB',
      precio: '$129,900',
      precioAntes: 'Antes $179,900',
      enlaceAgregarCarrito: '#',
      imagen: './assets/img/Productos/Mouse Gamer T-DAGGER Captain RGB.png'
    }


  ];
  
function mostrarResultados(resultados) {
    var resultadosDiv = document.getElementById("resultados");
    resultadosDiv.innerHTML = ""; 
  
    if (resultados.length === 0) {
      resultadosDiv.innerHTML = "No se encontraron resultados.";
    } else {
      resultados.forEach(function(articulo) {
        var articuloDiv = document.createElement("div");
        articuloDiv.innerHTML = `
          <div class="resultado-item">
            <h3>${articulo.titulo}</h3>
            <img src="${articulo.imagen}" alt="${articulo.titulo}" class="imagen-resultados">
            <p>${articulo.contenido}</p>
            <p class="precio">${articulo.precio}</p>
            <del class="precio antes">${articulo.precioAntes}</del>
            <a href="${articulo.enlaceAgregarCarrito}" class="agregar-carrito btn-1" data-id="1">Agregar</a>
          </div>
        `;
        resultadosDiv.appendChild(articuloDiv);
      });
    }
  }


  /* Enviar*/

  var enviarButton = document.getElementById("enviar");
  enviarButton.addEventListener("click", function() {
      var productosSeleccionados = obtenerProductosSeleccionados();
      localStorage.setItem('productosSeleccionados', JSON.stringify(productosSeleccionados));
      window.location.href = "envio.html";
  });

  
  function obtenerProductosSeleccionados() {
      var productos = [];
      var listaCarrito = document.getElementById("lista-carrito").querySelectorAll("tbody tr");
      
      listaCarrito.forEach(function(item) {
          var producto = {
              imagen: item.querySelector("td:nth-child(1)").textContent,
              nombre: item.querySelector("td:nth-child(2)").textContent,
              precio: item.querySelector("td:nth-child(3)").textContent
          };
          productos.push(producto);
      });
      
      return productos;
  }
  /* Formulario y nombre de usuario*/
  document.addEventListener("DOMContentLoaded", function () {
    verificarSesion();
});

function verificarSesion() {
    var usuarioAutenticado = obtenerUsuarioAutenticado();

    if (usuarioAutenticado) {
        mostrarUsuarioAutenticado(usuarioAutenticado);
    }
}

function obtenerUsuarioAutenticado() {
    var usuarioJSON = localStorage.getItem("usuarioAutenticado");
    return usuarioJSON ? JSON.parse(usuarioJSON) : null;
}

function mostrarUsuarioAutenticado(usuario) {
    var usuarioSection = document.getElementById("usuario-section");
    var btnRegistro = document.getElementById("btnRegistro");
    var nombreUsuario = document.getElementById("nombreUsuario");
    var btnCerrarSesion = document.getElementById("btnCerrarSesion");

    btnRegistro.style.display = "none";
    nombreUsuario.textContent = "Hola " + usuario.nombre;
    btnCerrarSesion.style.display = "inline";

    
    usuarioSection.appendChild(nombreUsuario);
    usuarioSection.appendChild(document.createTextNode(" ")); 
    usuarioSection.appendChild(btnCerrarSesion);
}

function cerrarSesion() {
    localStorage.removeItem("usuarioAutenticado");
    location.reload();
}
function registrarUsuario(event) {
  event.preventDefault();

  var nombre = document.getElementById("nombre").value;

  var usuarioAutenticado = {
      nombre: nombre,
  };

  localStorage.setItem("usuarioAutenticado", JSON.stringify(usuarioAutenticado));

  window.location.href = "index.html";
}

function registrarUsuario(event) {
  event.preventDefault();

  var nombre = document.getElementById("user").value;

  var usuarioAutenticado = {
      nombre: nombre,
  };

  localStorage.setItem("usuarioAutenticado", JSON.stringify(usuarioAutenticado));

  window.location.href = "index.html";
}

/* Paola  Boton*/ 

function openWhatsAppChat() {
  // Reemplaza "[número]" con el número de teléfono del asesor en formato internacional
  var phoneNumber = "[número]";
  
  // Reemplaza "[mensaje]" con el mensaje predeterminado (opcional)
  var message = encodeURIComponent("[mensaje]");
  
  // Construye el enlace de WhatsApp
  var whatsappLink = "https://wa.me/" + phoneNumber + "/?text=" + message;
  
  // Abre el enlace en una nueva ventana o pestaña
  window.open(whatsappLink, '_blank');
}



