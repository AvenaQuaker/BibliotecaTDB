//Variables Globales
let objetoTabla = {}
let Page = 1
let Accion;

//Tablas
let tablaA
let tablaB
let tablaD
let tablaEXTRA
let tablaH
let tablaI
let tablaJ

//Obtencon de Elementos HTML
let page1 = document.getElementById('page1')
let page2 = document.getElementById('page2')
let main1 = document.getElementById('main1')
let main2 = document.getElementById('main2')
let pageIMG1 = document.getElementById('pageIMG1')
let pageIMG2 = document.getElementById('pageIMG2')
let pimg1 = document.getElementById('pimg1')
let pimg2 = document.getElementById('pimg2')
let plabel1 = document.getElementById('plabel1')
let plabel2 = document.getElementById('plabel2')
let currentPage = document.getElementById('currentpage')
let Filtro = document.querySelector('select')
let Insert = document.getElementById('Insert')
let Read = document.getElementById('Read')
let Update = document.getElementById('Update')
let Delete = document.getElementById('Delete')
let Reload = document.getElementById('Reload')

let tabla1id = document.getElementById('tabla1id')
let tabla1nombre = document.getElementById('tabla1nombre')
let tabla1apellido1 = document.getElementById('tabla1apellido1')
let tabla1apellido2 = document.getElementById('tabla1apellido2')

let tabla2id = document.getElementById('tabla2id')
let tabla2categoria = document.getElementById('tabla2categoria')

let tabla4id = document.getElementById('tabla4id')
let tabla4isbn = document.getElementById('tabla4isbn')
let tabla4prestado = document.getElementById('tabla4prestado')

let tabla4y5titulo = document.getElementById('tabla4.5titulo')
let tabla4y5isbn = document.getElementById('tabla4.5isbn')
let tabla4y5anopub = document.getElementById('tabla4.5anopub')
let tabla4y5autor = document.getElementById('tabla4.5autor')
let tabla4y5editorial = document.getElementById('tabla4.5editorial')
let tabla4y5img = document.getElementById('tabla4.5img')

let tabla8id = document.getElementById('tabla8id')
let tabla8com = document.getElementById('tabla8com')
let tabla8punct = document.getElementById('tabla8punct')
let tabla8idu = document.getElementById('tabla8idu')
let tabla8idl = document.getElementById('tabla8idl')

let tabla10id = document.getElementById('tabla10id')
let tabla10usuario = document.getElementById('tabla10usuario')
let tabla10password = document.getElementById('tabla10password')
let tabla10rol = document.getElementById('tabla10rol')
let tabla10nombre = document.getElementById('tabla10nombre')
let tabla10apellido1 = document.getElementById('tabla10apellido1')
let tabla10apellido2 = document.getElementById('tabla10apellido2')
let tabla10tel = document.getElementById('tabla10tel')
let tabla10direc = document.getElementById('tabla10direc')

let tabla1formbox = document.getElementById('tabla1formbox')
let tabla2formbox = document.getElementById('tabla2formbox')
let tabla4formbox = document.getElementById('tabla4formbox')
let tabla4y5formbox = document.getElementById('tabla4.5formbox')
let tabla8formbox = document.getElementById('tabla8formbox')
let tabla10formbox = document.getElementById('tabla10formbox')

let acceptbutton = document.getElementById('acceptbutton')
let buttonPDF = document.getElementById('PDF')
let errorformbox = document.getElementById('Error')
let cargando = document.querySelector('.Cargando')

//Eventos
page1.addEventListener('click', () => {
    Page = 1
    VerificarPagina()
})

page2.addEventListener('click', () => {
    Page = 2
    VerificarPagina()
})

//Funcion que controla la vista de la barra de navegacion
function VerificarPagina() {
    formas = document.querySelectorAll('.formBox')

    switch (Page) {
        case 1:
            pageIMG1.style.background = 'orange';
            pimg1.style.filter = 'invert(1)'
            plabel1.style.color = 'white'
            plabel1.style.fontWeight = 'bold'

            pageIMG2.style.background = '#3f3f3f';
            pimg2.style.filter = 'invert(0.5)'
            plabel2.style.color = 'grey'
            plabel2.style.fontWeight = 'normal'

            formas.forEach((elemento) => {
                elemento.style.opacity = '0'
            })

            main1.style.display = 'flex'
            main2.style.display = 'none'

            currentPage.textContent = 'CRUD'
            break
        case 2:
            pageIMG2.style.background = 'lightBlue';
            pimg2.style.filter = 'invert(1)'
            plabel2.style.color = 'white'
            plabel2.style.fontWeight = 'bold'

            pageIMG1.style.background = '#3f3f3f';
            pimg1.style.filter = 'invert(0.5)'
            plabel1.style.color = 'grey'
            plabel1.style.fontWeight = 'normal'

            formas.forEach((elemento) => {
                elemento.style.opacity = '0'
            })

            main1.style.display = 'none'
            main2.style.display = 'flex'

            currentPage.textContent = 'Graficas'
            break
    }
}

//Funcion que recarga la pagina
function Loading(url) {
    cargando.style.display = 'flex';
    setTimeout(function () {
        window.location.href = url;
    }, 3000);
}

//Funcion que maneja la notificacion push
function PushNotification(Tipo, Mensaje) {
    switch (Tipo) {
        case 'Error':
            errorformbox.style.background = 'linear-gradient(90deg,#ac0000,#a83301)'
            errorformbox.textContent = Mensaje
            errorformbox.style.opacity = '1';
            setTimeout(function () {
                errorformbox.style.opacity = '0'
                errorformbox.style.pointerEvents = 'none'
            }, 3000)
            break;
        case 'Success':
            errorformbox.style.background = 'linear-gradient(90deg,#00ac00,#01a85a)'
            errorformbox.textContent = Mensaje
            errorformbox.style.opacity = '1';
            setTimeout(function () {
                errorformbox.style.opacity = '0'
                errorformbox.style.pointerEvents = 'none'
            }, 3000)
            break;
    }
}

//Funciones invocada al inicio del programa
$(document).ready(function () {
    cargando.style.display = 'flex';

    tablaA = $('#tabla1').DataTable({
        select: true,
        select: {
            style: 'single'
        },
        ajax: {
            url: '/Backend/GETAutores',
            dataSrc: ''
        },
        columns: [
            { data: 'ID' },
            { data: 'Nombre' },
            { data: 'Apellido1' },
            { data: 'Apellido2' }
        ]
    });

    tablaB = $('#tabla2').DataTable({
        select: true,
        select: {
            style: 'single'
        },
        ajax: {
            url: '/Backend/GETCategorias',
            dataSrc: ''
        },
        columns: [
            { data: 'ID' },
            { data: 'Nombre' }
        ]
    });

    tablaD = $('#tabla4').DataTable({
        select: true,
        select: {
            style: 'single'
        },
        ajax: {
            url: '/Backend/GETLibros',
            dataSrc: ''
        },
        columns: [
            { data: 'ID' },
            { data: 'ID_Prestamo' },
            { data: 'ISBN' },
        ]
    });


    tablaEXTRA = $('#tablaL').DataTable({
        select: true,
        select: {
            style: 'single'
        },
        ajax: {
            url: '/Backend/GETLibro',
            dataSrc: ''
        },
        columns: [
            { data: 'ISBN' },
            { data: 'Titulo' },
            { data: 'AñoPublicacion' },
            { data: 'ID_Autor' },
            { data: 'ID_Editorial' },
        ]
    });

    tablaH = $('#tabla8').DataTable({
        select: true,
        select: {
            style: 'single'
        },
        ajax: {
            url: '/Backend/GETResenas',
            dataSrc: ''
        },
        columns: [
            { data: 'ID' },
            { data: 'Comentario' },
            { data: 'Puntuacion' },
            { data: 'ID_Usuario' },
            { data: 'ID_Libro' },
        ]
    });

    tablaJ = $('#tabla10').DataTable({
        select: true,
        select: {
            style: 'single'
        },
        ajax: {
            url: '/Backend/GETUsuariosMOD',
            dataSrc: ''
        },
        columns: [
            { data: 'ID' },
            { data: 'Usuario' },
            { data: 'Password' },
            { data: 'ID_Rol' },
            { data: 'Nombre' },
            { data: 'Telefono' },
            { data: 'Direccion' }

        ]
    });

    setTimeout(() => {
        VerificarPagina()
        Filtrar()
    }, 500)

    setTimeout(() => {
        cargando.style.display = 'none';
    }, 2000)
});

//Funcion que muestra la tabla deseada 
function Filtrar() {
    let tablaFiltrar = Filtro.value;
    formas = document.querySelectorAll('.formBox')

    switch (tablaFiltrar) {
        case 'Opcion1':
            tabla1 = document.getElementById('tabla1_wrapper').style.display = 'block'
            tabla2 = document.getElementById('tabla2_wrapper').style.display = 'none'
            tabla4 = document.getElementById('tabla4_wrapper').style.display = 'none'
            tablaL = document.getElementById('tablaL_wrapper').style.display = 'none'
            tabla8 = document.getElementById('tabla8_wrapper').style.display = 'none'
            tabla10 = document.getElementById('tabla10_wrapper').style.display = 'none'
            break;
        case 'Opcion2':
            tabla1 = document.getElementById('tabla1_wrapper').style.display = 'none'
            tabla2 = document.getElementById('tabla2_wrapper').style.display = 'block'
            tabla4 = document.getElementById('tabla4_wrapper').style.display = 'none'
            tablaL = document.getElementById('tablaL_wrapper').style.display = 'none'
            tabla8 = document.getElementById('tabla8_wrapper').style.display = 'none'
            tabla10 = document.getElementById('tabla10_wrapper').style.display = 'none'
            break;
        case 'Opcion4':
            tabla1 = document.getElementById('tabla1_wrapper').style.display = 'none'
            tabla2 = document.getElementById('tabla2_wrapper').style.display = 'none'
            tabla4 = document.getElementById('tabla4_wrapper').style.display = 'block'
            tablaL = document.getElementById('tablaL_wrapper').style.display = 'none'
            tabla8 = document.getElementById('tabla8_wrapper').style.display = 'none'
            tabla10 = document.getElementById('tabla10_wrapper').style.display = 'none'
            break;
        case 'OpcionL':
            tabla1 = document.getElementById('tabla1_wrapper').style.display = 'none'
            tabla2 = document.getElementById('tabla2_wrapper').style.display = 'none'
            tabla4 = document.getElementById('tabla4_wrapper').style.display = 'none'
            tablaL = document.getElementById('tablaL_wrapper').style.display = 'block'
            tabla8 = document.getElementById('tabla8_wrapper').style.display = 'none'
            tabla10 = document.getElementById('tabla10_wrapper').style.display = 'none'
            break;
        case 'Opcion8':
            tabla1 = document.getElementById('tabla1_wrapper').style.display = 'none'
            tabla2 = document.getElementById('tabla2_wrapper').style.display = 'none'
            tabla4 = document.getElementById('tabla4_wrapper').style.display = 'none'
            tablaL = document.getElementById('tablaL_wrapper').style.display = 'none'
            tabla8 = document.getElementById('tabla8_wrapper').style.display = 'block'
            tabla10 = document.getElementById('tabla10_wrapper').style.display = 'none'
            break;
        case 'Opcion10':
            tabla1 = document.getElementById('tabla1_wrapper').style.display = 'none'
            tabla2 = document.getElementById('tabla2_wrapper').style.display = 'none'
            tabla4 = document.getElementById('tabla4_wrapper').style.display = 'none'
            tablaL = document.getElementById('tablaL_wrapper').style.display = 'none'
            tabla8 = document.getElementById('tabla8_wrapper').style.display = 'none'
            tabla10 = document.getElementById('tabla10_wrapper').style.display = 'block'
            break;
    }

    formas.forEach((elemento) => {
        elemento.style.opacity = '0'
        elemento.style.pointerEvents = 'none'
    })
}

//Evento que cierra el widget
document.querySelectorAll('.cancelbutton').forEach(function (boton) {
    boton.addEventListener('click', (e) => {
        const widget = e.target.closest('.formBox')
        widget.style.opacity = '0'
        widget.style.pointerEvents = 'none'
        boton.style.pointerEvents = 'none'
        widget.querySelector('.acceptbutton').style.pointerEvents = 'none'
    })
})


//Metodo que administra todas las posibles operaciones del CRUD
document.querySelectorAll('.acceptbutton').forEach(function (boton) {
    boton.addEventListener('click', (e) => {
        var tablaFiltra = Filtro.value
        var Operacion = Accion
        var widget;

        switch (tablaFiltra) {
            case 'Opcion1':
                widget = e.target.closest('.formBox')
                forma = widget.firstElementChild;

                if (forma.checkValidity()) {
                    widget.style.opacity = '0'
                    widget.style.pointerEvents = 'none'
                    let Nombre = tabla1nombre.value
                    let Apellido1 = tabla1apellido1.value
                    let Apellido2 = tabla1apellido2.value

                    switch (Operacion) {
                        case 'Insert':
                            $.ajax({
                                url: '/Backend/INSERTAutores',
                                type: 'POST',
                                contentType: 'application/json',
                                data: JSON.stringify({ Nombre: Nombre, Apellido1: Apellido1, Apellido2: Apellido2 }),
                                success: function (response) {
                                    console.log(response)
                                    tablaA.ajax.reload()
                                    if (response.Message.startsWith('O')) {
                                        PushNotification('Success', response.Message)
                                    } else {
                                        PushNotification('Error', response.Message)
                                    }
                                },
                                error: function (error) {
                                    PushNotification("Error", error);
                                }
                            })
                            break;

                        case 'Update':
                            PushNotification('Error','Usted no tiene permisos para manejar esta operacion')
                            break;

                        case 'Delete':
                            PushNotification('Error', 'Usted no tiene permisos para manejar esta operacion')
                            break;
                    }
                } else {
                    PushNotification('Error', 'Rellene los datos del formulario')
                    break;
                }
                widget.querySelector('.acceptbutton').style.pointerEvents = 'none'
                widget.querySelector('.cancelbutton').style.pointerEvents = 'none'
                break;
            case 'Opcion2':
                widget = e.target.closest('.formBox')
                forma = widget.firstElementChild;

                if (forma.checkValidity()) {
                    widget.style.opacity = '0'
                    widget.style.pointerEvents = 'none'

                    switch (Operacion) {
                        case 'Insert':
                            PushNotification('Error', 'Usted no tiene permisos para manejar esta operacion')
                            break;

                        case 'Update':
                            PushNotification('Error', 'Usted no tiene permisos para manejar esta operacion')
                            break;

                        case 'Delete':
                            PushNotification('Error', 'Usted no tiene permisos para manejar esta operacion')
                            break;
                    }
                } else {
                    PushNotification('Error', 'Rellene los datos del formulario')
                    break;
                }
                widget.querySelector('.acceptbutton').style.pointerEvents = 'none'
                widget.querySelector('.cancelbutton').style.pointerEvents = 'none'
                break;
            case 'Opcion4':
                widget = e.target.closest('.formBox')
                forma = widget.firstElementChild;

                if (forma.checkValidity()) {
                    widget.style.opacity = '0'
                    widget.style.pointerEvents = 'none'
                    let ISBN = tabla4isbn.value

                    switch (Operacion) {
                        case 'Insert':
                            $.ajax({
                                url: '/Backend/INSERTLibros',
                                type: 'POST',
                                contentType: 'application/json',
                                data: JSON.stringify({ ISBN: ISBN }),
                                success: function (response) {
                                    console.log(response)
                                    tablaD.ajax.reload()
                                    if (response.Message.startsWith('O')) {
                                        PushNotification('Success', response.Message)
                                    } else {
                                        PushNotification('Error', response.Message)
                                    }
                                },
                                error: function (error) {
                                    PushNotification("Error", error);
                                }
                            })
                            break;

                        case 'Update':
                            PushNotification('Error', 'Usted no tiene permisos para manejar esta operacion')
                            break;

                        case 'Delete':
                            PushNotification('Error', 'Usted no tiene permisos para manejar esta operacion')
                            break;
                    }
                } else {
                    PushNotification('Error', 'Rellene los datos del formulario')
                    break;
                }
                widget.querySelector('.acceptbutton').style.pointerEvents = 'none'
                widget.querySelector('.cancelbutton').style.pointerEvents = 'none'
                break;
            case 'OpcionL':
                widget = e.target.closest('.formBox')
                forma = widget.firstElementChild;

                if (forma.checkValidity()) {
                    widget.style.opacity = '0'
                    widget.style.pointerEvents = 'none'
                    let ISBN = tabla4y5isbn.value
                    let Titulo = tabla4y5titulo.value
                    let anopublicacion = tabla4y5anopub.value
                    let autor = tabla4y5autor.value
                    let editorial = tabla4y5editorial.value
                    let URL = tabla4y5img.value

                    switch (Operacion) {
                        case 'Insert':
                            $.ajax({
                                url: '/Backend/INSERTLibro',
                                type: 'POST',
                                contentType: 'application/json',
                                data: JSON.stringify({ ISBN: ISBN, Titulo: Titulo, AñoPublicacion: anopublicacion, ID_Autor: autor, ID_Editorial: editorial, URL: URL }),
                                success: function (response) {
                                    console.log(response)
                                    tablaEXTRA.ajax.reload()
                                    if (response.Message.startsWith('O')) {
                                        PushNotification('Success', response.Message)
                                    } else {
                                        PushNotification('Error', response.Message)
                                    }
                                },
                                error: function (error) {
                                    PushNotification("Error", error);
                                }
                            })
                            break;

                        case 'Update':
                            PushNotification('Error', 'Usted no tiene permisos para manejar esta operacion')
                            break;

                        case 'Delete':
                            PushNotification('Error', 'Usted no tiene permisos para manejar esta operacion')
                            break;
                    }
                } else {
                    PushNotification('Error', 'Rellene los datos del formulario')
                    break;
                }
                widget.querySelector('.acceptbutton').style.pointerEvents = 'none'
                widget.querySelector('.cancelbutton').style.pointerEvents = 'none'
                break;
            case 'Opcion8':
                widget = e.target.closest('.formBox')
                forma = widget.firstElementChild;

                if (forma.checkValidity()) {
                    widget.style.opacity = '0'
                    widget.style.pointerEvents = 'none'

                    switch (Operacion) {
                        case 'Insert':
                            PushNotification('Error', 'Usted no tiene permisos para manejar esta operacion')
                            break;

                        case 'Update':
                            PushNotification('Error', 'Usted no tiene permisos para manejar esta operacion')
                            break;

                        case 'Delete':
                            PushNotification('Error', 'Usted no tiene permisos para manejar esta operacion')
                            break;
                    }
                } else {
                    PushNotification('Error', 'Rellene los datos del formulario')
                    break;
                }
                widget.querySelector('.acceptbutton').style.pointerEvents = 'none'
                widget.querySelector('.cancelbutton').style.pointerEvents = 'none'
                break;
            case 'Opcion10':
                widget = e.target.closest('.formBox')
                forma = widget.firstElementChild;

                if (forma.checkValidity()) {
                    widget.style.opacity = '0'
                    widget.style.pointerEvents = 'none'

                    switch (Operacion) {
                        case 'Insert':
                            PushNotification('Error', 'Usted no tiene permisos para manejar esta operacion')
                            break;

                        case 'Update':
                            PushNotification('Error', 'Usted no tiene permisos para manejar esta operacion')
                            break;

                        case 'Delete':
                            PushNotification('Error', 'Usted no tiene permisos para manejar esta operacion')
                            break;
                    }
                } else {
                    PushNotification('Error', 'Rellene los datos del formulario')
                    break;
                }
                widget.querySelector('.acceptbutton').style.pointerEvents = 'none'
                widget.querySelector('.cancelbutton').style.pointerEvents = 'none'
                break;
        }
    })
})

//Evento que muestra el widget de INSERT
Insert.addEventListener('click', (e) => {
    var tablaFiltrar = Filtro.value
    var clickedBox;
    var newPosition
    Accion = 'Insert'

    switch (tablaFiltrar) {
        case 'Opcion1':
            clickedBox = e.target
            newPosition = clickedBox.getBoundingClientRect();
            tabla1formbox.style.top = `${newPosition.bottom * 1}px`;
            tabla1formbox.style.left = `${newPosition.right * 0.8}px`;

            tabla1formbox.querySelector('.acceptbutton').style.pointerEvents = 'auto'
            tabla1formbox.querySelector('.cancelbutton').style.pointerEvents = 'auto'
            tabla1formbox.style.opacity = '1';
            tabla1formbox.style.pointerEvents = 'auto';
            tabla1id.style.pointerEvents = 'none'
            break;
        case 'Opcion2':
            PushNotification('Error', 'Usted no tiene permisos para manejar esta operacion')
            break;
        case 'Opcion4':
            clickedBox = e.target
            newPosition = clickedBox.getBoundingClientRect();
            tabla4formbox.style.top = `${newPosition.bottom * 1}px`;
            tabla4formbox.style.left = `${newPosition.right * 0.8}px`;

            tabla4formbox.querySelector('.acceptbutton').style.pointerEvents = 'auto'
            tabla4formbox.querySelector('.cancelbutton').style.pointerEvents = 'auto'
            tabla4formbox.style.opacity = '1';
            tabla4formbox.style.pointerEvents = 'auto';
            tabla4id.style.pointerEvents = 'none'
            break;
        case 'OpcionL':
            clickedBox = e.target
            newPosition = clickedBox.getBoundingClientRect();
            tabla4y5formbox.style.top = `${newPosition.bottom * 1}px`;
            tabla4y5formbox.style.left = `${newPosition.right * 0.8}px`;

            tabla4y5formbox.querySelector('.acceptbutton').style.pointerEvents = 'auto'
            tabla4y5formbox.querySelector('.cancelbutton').style.pointerEvents = 'auto'
            tabla4y5formbox.style.opacity = '1';
            tabla4y5formbox.style.pointerEvents = 'auto';
            tabla4y5isbn.style.pointerEvents = 'auto';
            break;
     
        case 'Opcion8':
            PushNotification('Error', 'Usted no tiene permisos para manejar esta operacion')
            break;
        case 'Opcion10':
            PushNotification('Error', 'Usted no tiene permisos para manejar esta operacion')
            break;
    }
})

//Evento que muestra el widget de UPDATE
Update.addEventListener('click', (e) => {
    var tablaFiltrar = Filtro.value
    var clickedBox;
    var newPosition
    Accion = 'Update'

    switch (tablaFiltrar) {
        case 'Opcion1':
            PushNotification('Error', 'Usted no tiene permisos para manejar esta operacion')
            break;
        case 'Opcion2':
            PushNotification('Error', 'Usted no tiene permisos para manejar esta operacion')
            break;
        case 'Opcion4':
            PushNotification('Error', 'Usted no tiene permisos para manejar esta operacion')
            break;
        case 'OpcionL':
            PushNotification('Error', 'Usted no tiene permisos para manejar esta operacion')
            break;
        case 'Opcion8':
            PushNotification('Error', 'Usted no tiene permisos para manejar esta operacion')
            break;
        case 'Opcion10':
            PushNotification('Error', 'Usted no tiene permisos para manejar esta operacion')
            break;
    }

})

//Evento que muestra el widget de DELETE
Delete.addEventListener('click', (e) => {
    var tablaFiltrar = Filtro.value
    var clickedBox;
    var newPosition
    Accion = 'Delete'

    switch (tablaFiltrar) {
        case 'Opcion1':
            PushNotification('Error', 'Usted no tiene permisos para manejar esta operacion')
            break;
        case 'Opcion2':
            PushNotification('Error', 'Usted no tiene permisos para manejar esta operacion')
            break;
        case 'Opcion4':
            PushNotification('Error', 'Usted no tiene permisos para manejar esta operacion')
            break;
        case 'OpcionL':
            PushNotification('Error', 'Usted no tiene permisos para manejar esta operacion')
            break;
   
        case 'Opcion8':
            PushNotification('Error', 'Usted no tiene permisos para manejar esta operacion')
            break;
        case 'Opcion10':
            PushNotification('Error', 'Usted no tiene permisos para manejar esta operacion')
            break;
    }
})


//Obtencion de los datos de una fila para el widget
let tablaDatos1 = document.getElementById("tabla1");
tablaDatos1.addEventListener('click', function (evento) {
    if (evento.target.tagName === 'TD') {
        let fila = evento.target.parentNode;
        let celdas = fila.getElementsByTagName('td');
        let objeto = {};

        for (let i = 0; i < celdas.length; i++) {
            objeto[i] = celdas[i].innerHTML;
        }
        objetoTabla = objeto
    }

    tabla1id.value = objetoTabla[0]
    tabla1nombre.value = objetoTabla[1]
    tabla1apellido1.value = objetoTabla[2]
    tabla1apellido2.value = objetoTabla[3]
});

let tablaDatos2 = document.getElementById("tabla2");
tablaDatos2.addEventListener('click', function (evento) {
    if (evento.target.tagName === 'TD') {
        let fila = evento.target.parentNode;
        let celdas = fila.getElementsByTagName('td');
        let objeto = {};

        for (let i = 0; i < celdas.length; i++) {
            objeto[i] = celdas[i].innerHTML;
        }
        objetoTabla = objeto
    }

    tabla2id.value = objetoTabla[0]
    tabla2categoria.value = objetoTabla[1]
});

let tablaDatos4 = document.getElementById("tabla4");
tablaDatos4.addEventListener('click', function (evento) {
    if (evento.target.tagName === 'TD') {
        let fila = evento.target.parentNode;
        let celdas = fila.getElementsByTagName('td');
        let objeto = {};

        for (let i = 0; i < celdas.length; i++) {
            objeto[i] = celdas[i].innerHTML;
        }
        objetoTabla = objeto
    }

    tabla4id.value = objetoTabla[0]
    tabla4prestado.value = objetoTabla[1]
    tabla4isbn.value = objetoTabla[2]
});

let tablaDatosL = document.getElementById("tablaL");
tablaDatosL.addEventListener('click', function (evento) {
    if (evento.target.tagName === 'TD') {
        let fila = evento.target.parentNode;
        let celdas = fila.getElementsByTagName('td');
        let objeto = {};

        for (let i = 0; i < celdas.length; i++) {
            objeto[i] = celdas[i].innerHTML;
        }
        objetoTabla = objeto
    }

    tabla4y5isbn.value = objetoTabla[0]
    tabla4y5titulo.value = objetoTabla[1]
    tabla4y5anopub.value = objetoTabla[2]
    tabla4y5autor.value = objetoTabla[3]
    tabla4y5editorial.value = objetoTabla[4]
});

let tablaDatos8 = document.getElementById("tabla8");
tablaDatos8.addEventListener('click', function (evento) {
    if (evento.target.tagName === 'TD') {
        let fila = evento.target.parentNode;
        let celdas = fila.getElementsByTagName('td');
        let objeto = {};

        for (let i = 0; i < celdas.length; i++) {
            objeto[i] = celdas[i].innerHTML;
        }
        objetoTabla = objeto
    }

    tabla8id.value = objetoTabla[0]
    tabla8com.value = objetoTabla[1]
    tabla8punct.value = objetoTabla[2]
    tabla8idu.value = objetoTabla[3]
    tabla8idl.value = objetoTabla[4]
});

let tablaDatos10 = document.getElementById("tabla10");
tablaDatos10.addEventListener('click', function (evento) {
    if (evento.target.tagName === 'TD') {
        let fila = evento.target.parentNode;
        let celdas = fila.getElementsByTagName('td');
        let objeto = {};

        for (let i = 0; i < celdas.length; i++) {
            objeto[i] = celdas[i].innerHTML;
        }
        objetoTabla = objeto
    }

    tabla10id.value = objetoTabla[0]
    tabla10usuario.value = objetoTabla[1]
    tabla10password.value = objetoTabla[2]
    tabla10rol.value = objetoTabla[3]
    tabla10nombre.value = (objetoTabla[4].split(" "))[0]
    tabla10apellido1.value = (objetoTabla[4].split(" "))[1]
    tabla10apellido2.value = (objetoTabla[4].split(" "))[2]
    tabla10tel.value = objetoTabla[5]
    tabla10direc.value = objetoTabla[6]
});


//Metodo de Cierre de Sesion
function Redireccionar() {
    cargando.style.display = 'flex'
    form = document.getElementById('CS')

    setTimeout(() => {
        cargando.style.display = 'none'
        form.submit()
    }, 2000)
}
