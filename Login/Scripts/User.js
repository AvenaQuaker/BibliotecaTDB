// Variables Globales
paginaactual = 1;
let tablaX;
let Bandera = false;

// Obtencion de Elementos HTML para FRONTEND
let btnhome = document.getElementById('btnhome');
let btncat = document.getElementById('btncat');
let btnpres = document.getElementById('btnpres')
let seccion1 = document.getElementById('sec1');
let seccion2 = document.getElementById('sec2');
let seccion3 = document.getElementById('sec3');
let user = document.getElementById('usuario')

// Nuevos elementos
let booksSection = document.getElementById('books');
let viewCatalogButton = document.getElementById('view-catalog');
let viewCatalogoButton = document.getElementById('view-catalogos');
let requestBookButton = document.getElementById('request-book-button');
let ventanaFlotante = document.getElementById('ventana-flotante');

// Metodos que controlan los movimientos entre la pagina
btnhome.addEventListener('click', () => {
    paginaactual = 1;
    verificarPagina();
});

btncat.addEventListener('click', () => {
    paginaactual = 2;
    verificarPagina();
});

btnpres.addEventListener('click', () => {
    paginaactual = 3;
    verificarPagina();
});

// Event listeners para nuevos botones
viewCatalogButton.addEventListener('click', () => {
    // Acción para ver el catálogo
    paginaactual = 2;
    verificarPagina();
});
viewCatalogoButton.addEventListener('click', () => {
    // Acción para ver el catálogo
    paginaactual = 2;
    verificarPagina();
});

requestBookButton.addEventListener('click', () => {
    if (Bandera == true) {
        paginaactual = 3;
        verificarPagina();
    } else {
        seccion1.style.display = "none";
        seccion2.style.display = "flex";
        seccion3.style.display = "none";
    }
});

// Function que controla el navbar de arriba
window.addEventListener("scroll", function () {
    var header = document.querySelector(".menu-arriba");
    header.classList.toggle("menu-abajo", window.scrollY > 0);
});

// Funciones
function verificarPagina() {
    switch (paginaactual) {
        case 1:
            seccion1.style.display = "flex";
            seccion2.style.display = "none";
            seccion3.style.display = "none";
            document.title = 'Home';
            break;
        case 2:
            seccion1.style.display = "none";
            seccion2.style.display = "flex";
            seccion3.style.display = "none";
            document.title = 'Catalogo';
            break;
        case 3:
            seccion1.style.display = "none";
            seccion2.style.display = "none";
            seccion3.style.display = "flex";
            document.title = 'Prestamo';
            break;
    }
}

// Función para cargar libros destacados
function cargarLibrosDestacados() {
    
    $.ajax({
        url: '/Home/ObtenerImagenes',
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            let URLS = []

            data.forEach((dato) => {
                URLS.push(dato.URL)
            })

            let libros = [
                { titulo: 'Libro 1', imagen: URLS[0] },
                { titulo: 'Libro 2', imagen: URLS[1] },
                { titulo: 'Libro 5', imagen: URLS[2] },
                { titulo: 'Libro 6', imagen: URLS[3] }
            ];


            libros.forEach(libro => {
                let img = document.createElement('img');
                img.src = libro.imagen;
                img.alt = libro.titulo;
                booksSection.appendChild(img);
            });
        },
        error: function ( error) {
            if (error != ' ') {
                alertamsg.textContent = error;

                alertaCaja.style.opacity = '1';
                alertaCaja.style.pointerEvents = 'auto';

                setTimeout(() => {
                    alertaCaja.style.opacity = '0';
                    alertaCaja.style.pointerEvents = 'none';
                }, 4000);
            }
        }
    })
}

// Función para cerrar la ventana flotante

function cerrarVentana() {
    ventanaFlotante.style.display = 'none';
}
// Declarar variables globales
var ventana;
var filaSeleccionada;
var idProducto;
var nombreProducto;
var precioProducto;
var existenciaProducto;

function mostrarVentana(event) {
    ventana = document.getElementById("ventana-flotante");
    filaSeleccionada = event.target.parentNode; // Obtener la fila seleccionada
    idProducto = filaSeleccionada.cells[0].innerText; 

    solicitarLibro();

}

function solicitarLibro() {
    paginaactual = 3
    verificarPagina();
    document.title = 'Prestamo';
    mostrarInformacionLibro();
}

// Función para mostrar la información del libro en la sección 3
function mostrarInformacionLibro() {

    Bandera = true;

    $.ajax({
        url: '/Home/ObtenerLibro',
        type: 'GET',
        data: { ISBN: idProducto},
        dataType: 'json',
        success: function (data) {

            let Libro = data
 
            const infoDiv = document.getElementById("info-libro");
            infoDiv.innerHTML = `
    <h3 style="margin-bottom:50px;color:white;font-size: 28px;">Datos del libro: </h3>
    
      <p><strong>ISBN:</strong> ${Libro.ISBN}</p>
      <p><strong>Titulo:</strong>${Libro.Titulo}</p>
      <p><strong>Fecha de publicacion:</strong> ${Libro.AñoPublicacion}</p>
      <p><strong>Autor:</strong> ${Libro.Autor}</p>
      <p><strong>Editorial:</strong> ${Libro.Editorial}</p>
      <img src="${Libro.URL}" alt="Imagen del libro" style="width: 25rem; height: 35rem;position: absolute;  top: 50%; left: 75%; transform: translate(-50%, -50%);">
      <label for="fecha-entrega"style="margin-top:2rem; color:white;font-size: 24px;" >Selecciona la fecha de entrega:</label>
      <select id="duracion-prestamo" name="duracion-prestamo"  >
      <option value="1S">1 semana</option>
      <option value="2S">2 semanas</option>
      <option value="3S">3 semanas</option>
      <option value="Mes">1 mes</option>
      </select>
      <h1>¿Quieres solicitar este libro?</h1>
      <button class="efecto-hover-button" onclick="finalizarSolicitud()">Solicitar Libro</button>
      <h1>¿No te gusto el libro?, Elige un nuevo libro!</h1>
      <button class="efecto-hover-button-red" onclick="cancelarSolicitud()">Volver al catalogo</button>
    `;


            btnpres.style.display = 'block'
        },

        error: function (error) {
                if (error != ' ') {
                    alertamsg.textContent = error;

                    alertaCaja.style.opacity = '1';
                    alertaCaja.style.pointerEvents = 'auto';

                    setTimeout(() => {
                        alertaCaja.style.opacity = '0';
                        alertaCaja.style.pointerEvents = 'none';
                    }, 4000);
                }
           
        }
    })

}
function cancelarSolicitud() {
    document.getElementById("sec2").style.display = "block";
    document.getElementById("sec3").style.display = "none";
    document.title = 'Catalogo';
}


// Obtencion de Elementos HTML para el BACKEND
let alerta = document.getElementById('cerrar');
let alertaCaja = document.getElementById('alerta');
let alertamsg = document.getElementById('msgAlerta');
let cargando = document.getElementById('Cargando');

// Funciones del BACKEND
document.addEventListener("DOMContentLoaded", () => {
    cargarLibrosDestacados();

    tablaX = $('#tabla1').DataTable({
        select: true,
        select: {
            style: 'single'
        },
        ajax: {
            url: '/Home/ObtenerLibros',
            dataSrc: ''
        },
        columns: [
            { data: 'ISBN' },
            { data: 'Titulo' },
            { data: 'Autor' },
            { data: 'CantidadLibros' },
            { data: 'CantidadDisponible' },
        ]
    });

    verificarPagina();

    setTimeout(() => {
        alertamsg.innerHTML = 'Bienvenido<br><br>' + user.textContent;

            alertaCaja.style.opacity = '1';
            alertaCaja.style.pointerEvents = 'auto';

            setTimeout(() => {
                alertaCaja.style.opacity = '0';
                alertaCaja.style.pointerEvents = 'none';
            }, 4000);
    }, 1000);
});

function finalizarSolicitud() { 
    let eleccion = document.getElementById('duracion-prestamo').value
    let id = document.getElementById('userid').textContent
    let fecha = new Date();
    let nuevaFecha
    let año
    let mes 
    let dia
    switch (eleccion) {
        case '1S':
            nuevaFecha = fecha
            nuevaFecha.setDate(nuevaFecha.getDate() + 7)
            año = fecha.getFullYear();
            mes = (fecha.getMonth() + 1).toString().padStart(2, '0');
            dia = fecha.getDate().toString().padStart(2, '0');
            nuevaFecha = `${año}-${mes}-${dia}`;
            break;
        case '2S':
            nuevaFecha = fecha
            nuevaFecha.setDate(nuevaFecha.getDate() + 14)
            año = fecha.getFullYear();
            mes = (fecha.getMonth() + 1).toString().padStart(2, '0');
            dia = fecha.getDate().toString().padStart(2, '0');
            nuevaFecha = `${año}-${mes}-${dia}`;
            break;
        case '3S':
            nuevaFecha = fecha
            nuevaFecha.setDate(nuevaFecha.getDate() + 21)
            año = fecha.getFullYear();
            mes = (fecha.getMonth() + 1).toString().padStart(2, '0');
            dia = fecha.getDate().toString().padStart(2, '0');
            nuevaFecha = `${año}-${mes}-${dia}`;
            break;
        case 'Mes':
            nuevaFecha = fecha
            nuevaFecha.setDate(nuevaFecha.getDate() + 30)
            año = fecha.getFullYear();
            mes = (fecha.getMonth() + 1).toString().padStart(2, '0');
            dia = fecha.getDate().toString().padStart(2, '0');
            nuevaFecha = `${año}-${mes}-${dia}`;
            break;
    }

    console.log({
        isbn: idProducto,
        idUsuario: id,
        fechaDevolucion: nuevaFecha
    })
    $.ajax({
        url: '/Home/PrestarLibro',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({
            isbn: idProducto,
            idUsuario: id,
            fechaDevolucion: nuevaFecha
        }),
        success: function (response) {
            tablaX.ajax.reload();
            alertamsg.textContent = response.Message;

            alertaCaja.style.opacity = '1';
            alertaCaja.style.pointerEvents = 'auto';

            setTimeout(() => {
                alertaCaja.style.opacity = '0';
                alertaCaja.style.pointerEvents = 'none';
            }, 4000);
        },
        error: function (error) {
            alertamsg.textContent = error.Message;

            alertaCaja.style.opacity = '1';
            alertaCaja.style.pointerEvents = 'auto';

            setTimeout(() => {
                alertaCaja.style.opacity = '0';
                alertaCaja.style.pointerEvents = 'none';
            }, 4000);
        }
    })
}

//Metodo de Cierre de Sesion
function Redireccionar() {
    cargando.style.display = 'flex'
    form = document.getElementById('CS')

    setTimeout(() => {
        cargando.style.display = 'none'
        form.submit()
    }, 2000)
}