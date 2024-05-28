//Variables Globales
let objetoTabla = {}
let Page = 1
let Accion;

//Tablas
let tablaA
let tablaB
let tablaC
let tablaD
let tablaEXTRA
let tablaE
let tablaF
let tablaG
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

let tabla3id = document.getElementById('tabla3id')
let tabla3nombre = document.getElementById('tabla3nombre')
let tabla3direccion = document.getElementById('tabla3direccion')
let tabla3telefono = document.getElementById('tabla3telefono')


let tabla4id = document.getElementById('tabla4id')
let tabla4isbn = document.getElementById('tabla4isbn')
let tabla4prestado = document.getElementById('tabla4prestado')

let tabla4y5titulo = document.getElementById('tabla4.5titulo')
let tabla4y5isbn = document.getElementById('tabla4.5isbn')
let tabla4y5anopub = document.getElementById('tabla4.5anopub')
let tabla4y5autor = document.getElementById('tabla4.5autor')
let tabla4y5editorial = document.getElementById('tabla4.5editorial')
let tabla4y5img = document.getElementById('tabla4.5img')

let tabla5idc = document.getElementById('tabla5idc')
let tabla5idl = document.getElementById('tabla5idl')

let tabla6idu = document.getElementById('tabla6idu')
let tabla6idl = document.getElementById('tabla6idl')

let tabla7id = document.getElementById('tabla7id')
let tabla7fechap = document.getElementById('tabla7fechap')
let tabla7fechad = document.getElementById('tabla7fechad')
let tabla7idu = document.getElementById('tabla7idu')

let tabla8id = document.getElementById('tabla8id')
let tabla8com = document.getElementById('tabla8com')
let tabla8punct = document.getElementById('tabla8punct')
let tabla8idu = document.getElementById('tabla8idu')
let tabla8idl = document.getElementById('tabla8idl')

let tabla9id = document.getElementById('tabla9id')
let tabla9seccion = document.getElementById('tabla9seccion')
let tabla9nivel = document.getElementById('tabla9nivel')
let tabla9estante = document.getElementById('tabla9estante')

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
let tabla3formbox = document.getElementById('tabla3formbox')
let tabla4formbox = document.getElementById('tabla4formbox')
let tabla4y5formbox = document.getElementById('tabla4.5formbox')
let tabla5formbox = document.getElementById('tabla5formbox')
let tabla6formbox = document.getElementById('tabla6formbox')
let tabla7formbox = document.getElementById('tabla7formbox')
let tabla8formbox = document.getElementById('tabla8formbox')
let tabla9formbox = document.getElementById('tabla9formbox')
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

    tablaC = $('#tabla3').DataTable({
        select: true,
        select: {
            style: 'single'
        },
        ajax: {
            url: '/Backend/GETEditoriales',
            dataSrc: ''
        },
        columns: [
            { data: 'ID' },
            { data: 'Nombre' },
            { data: 'Direccion' },
            { data: 'Telefono' }
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

    tablaE = $('#tabla5').DataTable({
        select: true,
        select: {
            style: 'single'
        },
        ajax: {
            url: '/Backend/GETLibros_Categorias',
            dataSrc: ''
        },
        columns: [
            { data: 'ID_Categoria' },
            { data: 'ID_Libro' }
        ]
    });

    tablaF = $('#tabla6').DataTable({
        select: true,
        select: {
            style: 'single'
        },
        ajax: {
            url: '/Backend/GETLibros_Ubicaciones',
            dataSrc: ''
        },
        columns: [
            { data: 'ID_Ubicacion' },
            { data: 'ID_Libro' }
        ]
    });

    tablaG = $('#tabla7').DataTable({
        select: true,
        select: {
            style: 'single'
        },
        ajax: {
            url: '/Backend/GETPrestamos',
            dataSrc: ''
        },
        columns: [
            { data: 'ID' },
            { data: 'FechaPrestamo' },
            { data: 'FechaDevolucion' },
            { data: 'ID_Usuario' }
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

    tablaI = $('#tabla9').DataTable({
        select: true,
        select: {
            style: 'single'
        },
        ajax: {
            url: '/Backend/GETUbicaciones',
            dataSrc: ''
        },
        columns: [
            { data: 'ID' },
            { data: 'Seccion' },
            { data: 'Nivel' },
            { data: 'Estante' }
        ]
    });

    tablaJ = $('#tabla10').DataTable({
        select: true,
        select: {
            style: 'single'
        },
        ajax: {
            url: '/Backend/GETUsuarios',
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
        //Generacion de las Graficas mediante los datos (data)
        config1 = {
            hideHover: 'true',
            resize: true,
            element: 'line-chart',
            data: [
                { month: '2024-01', value: 20 },
                { month: '2024-02', value: 10 },
                { month: '2024-03', value: 5 },
                { month: '2024-04', value: 5 },
                { month: '2024-05', value: 20 },
                { month: '2024-06', value: 20 },
                { month: '2024-07', value: 10 },
                { month: '2024-08', value: 5 },
                { month: '2024-09', value: 5 },
                { month: '2024-10', value: 20 },
                { month: '2024-11', value: 20 },
                { month: '2024-12', value: 20 }
            ],
            xkey: 'month',
            ykeys: ['value'],
            labels: ['Ganancias Totales'],
            lineColors: ['darkGreen'],
            pointFillColors: ['lightGreen']
        }; Morris.Line(config1);

        config2 = {
            hideHover: 'true',
            resize: true,
            element: 'area-chart',
            data: [
                { month: '2024-01', a: 5, b: 7, c: 12 },
                { month: '2024-02', a: 10, b: 9, c: 11 },
                { month: '2024-03', a: 5, b: 8, c: 6 },
                { month: '2024-04', a: 11, b: 9, c: 7 },
                { month: '2024-05', a: 9, b: 10, c: 11 },
                { month: '2024-06', a: 7, b: 6, c: 12 },
                { month: '2024-07', a: 13, b: 7, c: 5 },
                { month: '2024-08', a: 6, b: 8, c: 16 },
                { month: '2024-09', a: 6, b: 9, c: 7 },
                { month: '2024-10', a: 11, b: 10, c: 9 },
                { month: '2024-11', a: 10, b: 7, c: 11 },
                { month: '2024-12', a: 7, b: 15, c: 6 }
            ],
            xkey: 'month',
            ykeys: ['a', 'b', 'c'],
            labels: ['Lunes-Jueves', 'Viernes', 'Fin de Semana'],
            lineColors: ['#035a7c', '#002488', '#3b0088'],
            ymax: 40,
        }; Morris.Area(config2);


        config3 = {
            hideHover: 'true',
            resize: true,
            element: 'bar-chart',
            data: [
                { y: 'Enero', a: 15000, b: 20000, c: 10000 },
                { y: 'Febrero', a: 22000, b: 18000, c: 25000 },
                { y: 'Marzo', a: 28000, b: 16000, c: 21000 },
                { y: 'Abril', a: 12000, b: 27000, c: 19000 },
                { y: 'Mayo', a: 25000, b: 14000, c: 23000 },
                { y: 'Junio', a: 17000, b: 24000, c: 20000 },
                { y: 'Julio', a: 19000, b: 22000, c: 27000 },
                { y: 'Agosto', a: 23000, b: 19000, c: 18000 },
                { y: 'Septiembre', a: 20000, b: 25000, c: 17000 },
                { y: 'Octubre', a: 16000, b: 21000, c: 24000 },
                { y: 'Noviembre', a: 21000, b: 17000, c: 22000 },
                { y: 'Diciembre', a: 18000, b: 23000, c: 16000 }
            ],
            xkey: 'y',
            ykeys: ['a', 'b', 'c'],
            labels: ['Servicios', 'Mantenimiento', 'Productos'],
            pointFillColors: ['#ffffff'],
            pointStrokeColors: ['black'],
            barColors: ['darkred', '#b90000', '#ff3700'],
            stacked: true,
        }; Morris.Bar(config3);


        config4 = {
            hideHover: 'true',
            resize: true,
            element: 'donut-chart',
            data: [
                { label: "PayPal", value: 15 },
                { label: "Mastercard", value: 45 },
                { label: "Visa", value: 25 },
                { label: "Oxxo", value: 10 },
                { label: "GooglePlay", value: 5 },
            ],
            formatter: function (y, data) { return y + '%' },
        }; Morris.Donut(config4);
    }, 500)

    setTimeout(() => {
        VerificarPagina()
        Filtrar()
    }, 500)

    setTimeout(() => {
        cargando.style.display = 'none';
    }, 2000)


    });

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
//Funcion que muestra la tabla deseada 
function Filtrar() {
    let tablaFiltrar = Filtro.value;
    formas = document.querySelectorAll('.formBox')

    switch (tablaFiltrar) {
        case 'Opcion1':
            tabla1 = document.getElementById('tabla1_wrapper').style.display = 'block'
            tabla2 = document.getElementById('tabla2_wrapper').style.display = 'none'
            tabla3 = document.getElementById('tabla3_wrapper').style.display = 'none'
            tabla4 = document.getElementById('tabla4_wrapper').style.display = 'none'
            tablaL = document.getElementById('tablaL_wrapper').style.display = 'none'
            tabla5 = document.getElementById('tabla5_wrapper').style.display = 'none'
            tabla6 = document.getElementById('tabla6_wrapper').style.display = 'none'
            tabla7 = document.getElementById('tabla7_wrapper').style.display = 'none'
            tabla8 = document.getElementById('tabla8_wrapper').style.display = 'none'
            tabla9 = document.getElementById('tabla9_wrapper').style.display = 'none'
            tabla10 = document.getElementById('tabla10_wrapper').style.display = 'none'

            break;
        case 'Opcion2':
            tabla1 = document.getElementById('tabla1_wrapper').style.display = 'none'
            tabla2 = document.getElementById('tabla2_wrapper').style.display = 'block'
            tabla3 = document.getElementById('tabla3_wrapper').style.display = 'none'
            tabla4 = document.getElementById('tabla4_wrapper').style.display = 'none'
            tablaL = document.getElementById('tablaL_wrapper').style.display = 'none'
            tabla5 = document.getElementById('tabla5_wrapper').style.display = 'none'
            tabla6 = document.getElementById('tabla6_wrapper').style.display = 'none'
            tabla7 = document.getElementById('tabla7_wrapper').style.display = 'none'
            tabla8 = document.getElementById('tabla8_wrapper').style.display = 'none'
            tabla9 = document.getElementById('tabla9_wrapper').style.display = 'none'
            tabla10 = document.getElementById('tabla10_wrapper').style.display = 'none'

            break;
        case 'Opcion3':
            tabla1 = document.getElementById('tabla1_wrapper').style.display = 'none'
            tabla2 = document.getElementById('tabla2_wrapper').style.display = 'none'
            tabla3 = document.getElementById('tabla3_wrapper').style.display = 'block'
            tabla4 = document.getElementById('tabla4_wrapper').style.display = 'none'
            tablaL = document.getElementById('tablaL_wrapper').style.display = 'none'
            tabla5 = document.getElementById('tabla5_wrapper').style.display = 'none'
            tabla6 = document.getElementById('tabla6_wrapper').style.display = 'none'
            tabla7 = document.getElementById('tabla7_wrapper').style.display = 'none'
            tabla8 = document.getElementById('tabla8_wrapper').style.display = 'none'
            tabla9 = document.getElementById('tabla9_wrapper').style.display = 'none'
            tabla10 = document.getElementById('tabla10_wrapper').style.display = 'none'

            break;
        case 'Opcion4':
            tabla1 = document.getElementById('tabla1_wrapper').style.display = 'none'
            tabla2 = document.getElementById('tabla2_wrapper').style.display = 'none'
            tabla3 = document.getElementById('tabla3_wrapper').style.display = 'none'
            tabla4 = document.getElementById('tabla4_wrapper').style.display = 'block'
            tablaL = document.getElementById('tablaL_wrapper').style.display = 'none'
            tabla5 = document.getElementById('tabla5_wrapper').style.display = 'none'
            tabla6 = document.getElementById('tabla6_wrapper').style.display = 'none'
            tabla7 = document.getElementById('tabla7_wrapper').style.display = 'none'
            tabla8 = document.getElementById('tabla8_wrapper').style.display = 'none'
            tabla9 = document.getElementById('tabla9_wrapper').style.display = 'none'
            tabla10 = document.getElementById('tabla10_wrapper').style.display = 'none'

            break;
        case 'OpcionL':
            tabla1 = document.getElementById('tabla1_wrapper').style.display = 'none'
            tabla2 = document.getElementById('tabla2_wrapper').style.display = 'none'
            tabla3 = document.getElementById('tabla3_wrapper').style.display = 'none'
            tabla4 = document.getElementById('tabla4_wrapper').style.display = 'none'
            tablaL = document.getElementById('tablaL_wrapper').style.display = 'block'
            tabla5 = document.getElementById('tabla5_wrapper').style.display = 'none'
            tabla6 = document.getElementById('tabla6_wrapper').style.display = 'none'
            tabla7 = document.getElementById('tabla7_wrapper').style.display = 'none'
            tabla8 = document.getElementById('tabla8_wrapper').style.display = 'none'
            tabla9 = document.getElementById('tabla9_wrapper').style.display = 'none'
            tabla10 = document.getElementById('tabla10_wrapper').style.display = 'none'
            break;

        case 'Opcion5':
            tabla1 = document.getElementById('tabla1_wrapper').style.display = 'none'
            tabla2 = document.getElementById('tabla2_wrapper').style.display = 'none'
            tabla3 = document.getElementById('tabla3_wrapper').style.display = 'none'
            tabla4 = document.getElementById('tabla4_wrapper').style.display = 'none'
            tablaL = document.getElementById('tablaL_wrapper').style.display = 'none'
            tabla5 = document.getElementById('tabla5_wrapper').style.display = 'block'
            tabla6 = document.getElementById('tabla6_wrapper').style.display = 'none'
            tabla7 = document.getElementById('tabla7_wrapper').style.display = 'none'
            tabla8 = document.getElementById('tabla8_wrapper').style.display = 'none'
            tabla9 = document.getElementById('tabla9_wrapper').style.display = 'none'
            tabla10 = document.getElementById('tabla10_wrapper').style.display = 'none'

            break;
        case 'Opcion6':
            tabla1 = document.getElementById('tabla1_wrapper').style.display = 'none'
            tabla2 = document.getElementById('tabla2_wrapper').style.display = 'none'
            tabla3 = document.getElementById('tabla3_wrapper').style.display = 'none'
            tabla4 = document.getElementById('tabla4_wrapper').style.display = 'none'
            tablaL = document.getElementById('tablaL_wrapper').style.display = 'none'
            tabla5 = document.getElementById('tabla5_wrapper').style.display = 'none'
            tabla6 = document.getElementById('tabla6_wrapper').style.display = 'block'
            tabla7 = document.getElementById('tabla7_wrapper').style.display = 'none'
            tabla8 = document.getElementById('tabla8_wrapper').style.display = 'none'
            tabla9 = document.getElementById('tabla9_wrapper').style.display = 'none'
            tabla10 = document.getElementById('tabla10_wrapper').style.display = 'none'

            break;
        case 'Opcion7':
            tabla1 = document.getElementById('tabla1_wrapper').style.display = 'none'
            tabla2 = document.getElementById('tabla2_wrapper').style.display = 'none'
            tabla3 = document.getElementById('tabla3_wrapper').style.display = 'none'
            tabla4 = document.getElementById('tabla4_wrapper').style.display = 'none'
            tablaL = document.getElementById('tablaL_wrapper').style.display = 'none'
            tabla5 = document.getElementById('tabla5_wrapper').style.display = 'none'
            tabla6 = document.getElementById('tabla6_wrapper').style.display = 'none'
            tabla7 = document.getElementById('tabla7_wrapper').style.display = 'block'
            tabla8 = document.getElementById('tabla8_wrapper').style.display = 'none'
            tabla9 = document.getElementById('tabla9_wrapper').style.display = 'none'
            tabla10 = document.getElementById('tabla10_wrapper').style.display = 'none'

            break;
        case 'Opcion8':
            tabla1 = document.getElementById('tabla1_wrapper').style.display = 'none'
            tabla2 = document.getElementById('tabla2_wrapper').style.display = 'none'
            tabla3 = document.getElementById('tabla3_wrapper').style.display = 'none'
            tabla4 = document.getElementById('tabla4_wrapper').style.display = 'none'
            tablaL = document.getElementById('tablaL_wrapper').style.display = 'none'
            tabla5 = document.getElementById('tabla5_wrapper').style.display = 'none'
            tabla6 = document.getElementById('tabla6_wrapper').style.display = 'none'
            tabla7 = document.getElementById('tabla7_wrapper').style.display = 'none'
            tabla8 = document.getElementById('tabla8_wrapper').style.display = 'block'
            tabla9 = document.getElementById('tabla9_wrapper').style.display = 'none'
            tabla10 = document.getElementById('tabla10_wrapper').style.display = 'none'

            break;
        case 'Opcion9':
            tabla1 = document.getElementById('tabla1_wrapper').style.display = 'none'
            tabla2 = document.getElementById('tabla2_wrapper').style.display = 'none'
            tabla3 = document.getElementById('tabla3_wrapper').style.display = 'none'
            tabla4 = document.getElementById('tabla4_wrapper').style.display = 'none'
            tablaL = document.getElementById('tablaL_wrapper').style.display = 'none'
            tabla5 = document.getElementById('tabla5_wrapper').style.display = 'none'
            tabla6 = document.getElementById('tabla6_wrapper').style.display = 'none'
            tabla7 = document.getElementById('tabla7_wrapper').style.display = 'none'
            tabla8 = document.getElementById('tabla8_wrapper').style.display = 'none'
            tabla9 = document.getElementById('tabla9_wrapper').style.display = 'block'
            tabla10 = document.getElementById('tabla10_wrapper').style.display = 'none'

            break;
        case 'Opcion10':
            tabla1 = document.getElementById('tabla1_wrapper').style.display = 'none'
            tabla2 = document.getElementById('tabla2_wrapper').style.display = 'none'
            tabla3 = document.getElementById('tabla3_wrapper').style.display = 'none'
            tabla4 = document.getElementById('tabla4_wrapper').style.display = 'none'
            tablaL = document.getElementById('tablaL_wrapper').style.display = 'none'
            tabla5 = document.getElementById('tabla5_wrapper').style.display = 'none'
            tabla6 = document.getElementById('tabla6_wrapper').style.display = 'none'
            tabla7 = document.getElementById('tabla7_wrapper').style.display = 'none'
            tabla8 = document.getElementById('tabla8_wrapper').style.display = 'none'
            tabla9 = document.getElementById('tabla9_wrapper').style.display = 'none'
            tabla10 = document.getElementById('tabla10_wrapper').style.display = 'block'

            break;
        case 'Opcion11':
            tabla1 = document.getElementById('tabla1_wrapper').style.display = 'none'
            tabla2 = document.getElementById('tabla2_wrapper').style.display = 'none'
            tabla3 = document.getElementById('tabla3_wrapper').style.display = 'none'
            tabla4 = document.getElementById('tabla4_wrapper').style.display = 'none'
            tablaL = document.getElementById('tablaL_wrapper').style.display = 'none'
            tabla5 = document.getElementById('tabla5_wrapper').style.display = 'none'
            tabla6 = document.getElementById('tabla6_wrapper').style.display = 'none'
            tabla7 = document.getElementById('tabla7_wrapper').style.display = 'none'
            tabla8 = document.getElementById('tabla8_wrapper').style.display = 'none'
            tabla9 = document.getElementById('tabla9_wrapper').style.display = 'none'
            tabla10 = document.getElementById('tabla10_wrapper').style.display = 'none'

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
                    let ID = tabla1id.value
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
                            $.ajax({
                                url: '/Backend/UPDATEAutores',
                                type: 'POST',
                                contentType: 'application/json',
                                data: JSON.stringify({ ID: ID, Nombre: Nombre, Apellido1: Apellido1, Apellido2: Apellido2 }),
                                success: function (response) {
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

                        case 'Delete':
                            $.ajax({
                                url: '/Backend/DELETEAutores',
                                type: 'POST',
                                contentType: 'application/json',
                                data: JSON.stringify({ ID: ID }),
                                success: function (response) {
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
                    let ID = tabla2id.value
                    let Categoria = tabla2categoria.value

                    switch (Operacion) {
                        case 'Insert':
                            $.ajax({
                                url: '/Backend/INSERTCategorias',
                                type: 'POST',
                                contentType: 'application/json',
                                data: JSON.stringify({ Nombre: Categoria }),
                                success: function (response) {
                                    tablaB.ajax.reload()
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
                            $.ajax({
                                url: '/Backend/UPDATECategorias',
                                type: 'POST',
                                contentType: 'application/json',
                                data: JSON.stringify({ ID: ID, Nombre: Categoria }),
                                success: function (response) {
                                    tablaB.ajax.reload()
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

                        case 'Delete':
                            $.ajax({
                                url: '/Backend/DELETECategorias',
                                type: 'POST',
                                contentType: 'application/json',
                                data: JSON.stringify({ ID: ID }),
                                success: function (response) {
                                    tablaB.ajax.reload()
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
                    }
                } else {
                    PushNotification('Error', 'Rellene los datos del formulario')
                    break;
                }
                widget.querySelector('.acceptbutton').style.pointerEvents = 'none'
                widget.querySelector('.cancelbutton').style.pointerEvents = 'none'
                break;
            case 'Opcion3':
                widget = e.target.closest('.formBox')
                forma = widget.firstElementChild;

                if (forma.checkValidity()) {
                    widget.style.opacity = '0'
                    widget.style.pointerEvents = 'none'
                    let ID = tabla3id.value
                    let Nombre = tabla3nombre.value
                    let Direccion = tabla3direccion.value
                    let Telefono = tabla3telefono.value

                    switch (Operacion) {
                        case 'Insert':
                            $.ajax({
                                url: '/Backend/INSERTEditoriales',
                                type: 'POST',
                                contentType: 'application/json',
                                data: JSON.stringify({ Nombre: Nombre, Direccion: Direccion, Telefono: Telefono }),
                                success: function (response) {
                                    tablaC.ajax.reload()
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
                            $.ajax({
                                url: '/Backend/UPDATEEditoriales',
                                type: 'POST',
                                contentType: 'application/json',
                                data: JSON.stringify({ ID: ID, Nombre: Nombre, Direccion: Direccion, Telefono: Telefono }),
                                success: function (response) {
                                    tablaC.ajax.reload()
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

                        case 'Delete':
                            $.ajax({
                                url: '/Backend/DELETEEditoriales',
                                type: 'POST',
                                contentType: 'application/json',
                                data: JSON.stringify({ ID: ID }),
                                success: function (response) {
                                    tablaC.ajax.reload()
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
                    let ID = tabla4id.value
                    let ISBN = tabla4isbn.value
                    let prestado = tabla4prestado.value

                    switch (Operacion) {
                        case 'Insert':
                            $.ajax({
                                url: '/Backend/INSERTLibros',
                                type: 'POST',
                                contentType: 'application/json',
                                data: JSON.stringify({ ISBN: ISBN }),
                                success: function (response) {
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
                            $.ajax({
                                url: '/Backend/UPDATELibros',
                                type: 'POST',
                                contentType: 'application/json',
                                data: JSON.stringify({ ID: ID, ISBN: ISBN, Prestado: prestado }),
                                success: function (response) {
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

                        case 'Delete':
                            $.ajax({
                                url: '/Backend/DELETELibros',
                                type: 'POST',
                                contentType: 'application/json',
                                data: JSON.stringify({ ID: ID }),
                                success: function (response) {
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
                            $.ajax({
                                url: '/Backend/UPDATELibro',
                                type: 'POST',
                                contentType: 'application/json',
                                data: JSON.stringify({ ISBN: ISBN, Titulo: Titulo, AñoPublicacion: anopublicacion, ID_Autor: autor, ID_Editorial: editorial, URL: URL }),
                                success: function (response) {
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

                        case 'Delete':
                            $.ajax({
                                url: '/Backend/DELETELibro',
                                type: 'POST',
                                contentType: 'application/json',
                                data: JSON.stringify({ ISBN: ISBN }),
                                success: function (response) {
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
                    }
                } else {
                    PushNotification('Error', 'Rellene los datos del formulario')
                    break;
                }
                widget.querySelector('.acceptbutton').style.pointerEvents = 'none'
                widget.querySelector('.cancelbutton').style.pointerEvents = 'none'
                break;
            case 'Opcion5':
                widget = e.target.closest('.formBox')
                forma = widget.firstElementChild;

                if (forma.checkValidity()) {
                    widget.style.opacity = '0'
                    widget.style.pointerEvents = 'none'
                    let ID_Categoria = tabla5idc.value
                    let ID_Libro = tabla5idl.value

                    switch (Operacion) {
                        case 'Insert':
                            $.ajax({
                                url: '/Backend/INSERTLibros_Categorias',
                                type: 'POST',
                                contentType: 'application/json',
                                data: JSON.stringify({ ID_Categoria: ID_Categoria, ID_Libro: ID_Libro }),
                                success: function (response) {
                                    tablaE.ajax.reload()
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
                            break;

                        case 'Delete':
                            $.ajax({
                                url: '/Backend/DELETELibros_Categorias',
                                type: 'POST',
                                contentType: 'application/json',
                                data: JSON.stringify({ ID_Categoria: ID_Categoria, ID_Libro: ID_Libro }),
                                success: function (response) {
                                    tablaE.ajax.reload()
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
                    }
                } else {
                    PushNotification('Error', 'Rellene los datos del formulario')
                    break;
                }
                widget.querySelector('.acceptbutton').style.pointerEvents = 'none'
                widget.querySelector('.cancelbutton').style.pointerEvents = 'none'
                break;
            case 'Opcion6':
                widget = e.target.closest('.formBox')
                forma = widget.firstElementChild;

                if (forma.checkValidity()) {
                    widget.style.opacity = '0'
                    widget.style.pointerEvents = 'none'
                    let ID_Ubicacion = tabla6idu.value
                    let ID_Libro = tabla6idl.value

                    switch (Operacion) {
                        case 'Insert':
                            $.ajax({
                                url: '/Backend/INSERTLibros_Ubicaciones',
                                type: 'POST',
                                contentType: 'application/json',
                                data: JSON.stringify({ ID_Ubicacion: ID_Ubicacion, ID_Libro: ID_Libro }),
                                success: function (response) {
                                    tablaF.ajax.reload()
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
                            break;

                        case 'Delete':
                            $.ajax({
                                url: '/Backend/DELETELibros_Ubicaciones',
                                type: 'POST',
                                contentType: 'application/json',
                                data: JSON.stringify({ ID_Ubicacion: ID_Ubicacion, ID_Libro: ID_Libro }),
                                success: function (response) {
                                    tablaF.ajax.reload()
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
                    }
                } else {
                    PushNotification('Error', 'Rellene los datos del formulario')
                    break;
                }
                widget.querySelector('.acceptbutton').style.pointerEvents = 'none'
                widget.querySelector('.cancelbutton').style.pointerEvents = 'none'
                break;
            case 'Opcion7':
                widget = e.target.closest('.formBox')
                forma = widget.firstElementChild;

                if (forma.checkValidity()) {
                    widget.style.opacity = '0'
                    widget.style.pointerEvents = 'none'
                    let ID = tabla7id.value
                    let FechaPrestamo = tabla7fechap.value
                    let FechaDevolucion = tabla7fechad.value
                    let ID_Usuario = tabla7idu.value

                    switch (Operacion) {
                        case 'Insert':
                            $.ajax({
                                url: '/Backend/INSERTPrestamos',
                                type: 'POST',
                                contentType: 'application/json',
                                data: JSON.stringify({ FechaPrestamo: FechaPrestamo, FechaDevolucion: FechaDevolucion, ID_Usuario: ID_Usuario }),
                                success: function (response) {
                                    tablaG.ajax.reload()
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
                            $.ajax({
                                url: '/Backend/UPDATEPrestamos',
                                type: 'POST',
                                contentType: 'application/json',
                                data: JSON.stringify({ ID: ID, FechaPrestamo: FechaPrestamo, FechaDevolucion: FechaDevolucion, ID_Usuario: ID_Usuario }),
                                success: function (response) {
                                    tablaG.ajax.reload()
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

                        case 'Delete':
                            $.ajax({
                                url: '/Backend/DELETEPrestamos',
                                type: 'POST',
                                contentType: 'application/json',
                                data: JSON.stringify({ ID: ID }),
                                success: function (response) {
                                    tablaG.ajax.reload()
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
                    let ID = tabla8id.value
                    let Comentario = tabla8com.value
                    let Puntuacion = tabla8punct.value
                    let ID_Usuario = tabla8idu.value
                    let ID_Libro = tabla8idl.value

                    switch (Operacion) {
                        case 'Insert':
                            $.ajax({
                                url: '/Backend/INSERTResenas',
                                type: 'POST',
                                contentType: 'application/json',
                                data: JSON.stringify({ Comentario: Comentario, Puntuacion: Puntuacion, ID_Usuario: ID_Usuario, ID_Libro: ID_Libro }),
                                success: function (response) {
                                    tablaH.ajax.reload()
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
                            $.ajax({
                                url: '/Backend/UPDATEResenas',
                                type: 'POST',
                                contentType: 'application/json',
                                data: JSON.stringify({ ID: ID, Comentario: Comentario, Puntuacion: Puntuacion, ID_Usuario: ID_Usuario, ID_Libro: ID_Libro }),
                                success: function (response) {
                                    tablaH.ajax.reload()
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

                        case 'Delete':
                            $.ajax({
                                url: '/Backend/DELETEResenas',
                                type: 'POST',
                                contentType: 'application/json',
                                data: JSON.stringify({ ID: ID }),
                                success: function (response) {
                                    tablaH.ajax.reload()
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
                    }
                } else {
                    PushNotification('Error', 'Rellene los datos del formulario')
                    break;
                }
                widget.querySelector('.acceptbutton').style.pointerEvents = 'none'
                widget.querySelector('.cancelbutton').style.pointerEvents = 'none'
                break;
            case 'Opcion9':
                widget = e.target.closest('.formBox')
                forma = widget.firstElementChild;

                if (forma.checkValidity()) {
                    widget.style.opacity = '0'
                    widget.style.pointerEvents = 'none'
                    let ID = tabla9id.value
                    let Seccion = tabla9seccion.value
                    let Nivel = tabla9nivel.value
                    let Estante = tabla9estante.value

                    switch (Operacion) {
                        case 'Insert':
                            $.ajax({
                                url: '/Backend/INSERTUbicaciones',
                                type: 'POST',
                                contentType: 'application/json',
                                data: JSON.stringify({ Seccion: Seccion, Nivel: Nivel, Estante: Estante }),
                                success: function (response) {
                                    tablaI.ajax.reload()
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
                            $.ajax({
                                url: '/Backend/UPDATEUbicaciones',
                                type: 'POST',
                                contentType: 'application/json',
                                data: JSON.stringify({ ID: ID, Seccion: Seccion, Nivel: Nivel, Estante: Estante }),
                                success: function (response) {
                                    tablaI.ajax.reload()
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

                        case 'Delete':
                            $.ajax({
                                url: '/Backend/DELETEUbicaciones',
                                type: 'POST',
                                contentType: 'application/json',
                                data: JSON.stringify({ ID: ID }),
                                success: function (response) {
                                    tablaI.ajax.reload()
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
                    let ID = tabla10id.value
                    let Password = tabla10password.value
                    let Rol = tabla10rol.value
                    let Nombre = tabla10nombre.value
                    let ApellidoP = tabla10apellido1.value
                    let ApellidoM = tabla10apellido2.value
                    let Telefono = tabla10tel.value
                    let Direccion = tabla10direc.value
                    let Usuario = tabla10usuario.value

                    switch (Operacion) {
                        case 'Insert':
                            $.ajax({
                                url: '/Backend/INSERTUsuarios',
                                type: 'POST',
                                contentType: 'application/json',
                                data: JSON.stringify({ Password: Password, ID_Rol: Rol, Nombre: Nombre, ApellidoP: ApellidoP, ApellidoM: ApellidoM, Telefono: Telefono, Direccion: Direccion, Usuario: Usuario }),
                                success: function (response) {
                                    tablaJ.ajax.reload()
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
                            $.ajax({
                                url: '/Backend/UPDATEUsuarios',
                                type: 'POST',
                                contentType: 'application/json',
                                data: JSON.stringify({ ID: ID, Password: Password, ID_Rol: Rol, Nombre: Nombre, ApellidoP: ApellidoP, ApellidoM: ApellidoM, Telefono: Telefono, Direccion: Direccion, Usuario: Usuario }),
                                success: function (response) {
                                    tablaJ.ajax.reload()
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

                        case 'Delete':
                            $.ajax({
                                url: '/Backend/DELETEUsuarios',
                                type: 'POST',
                                contentType: 'application/json',
                                data: JSON.stringify({ ID: ID }),
                                success: function (response) {
                                    tablaJ.ajax.reload()
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
            clickedBox = e.target
            newPosition = clickedBox.getBoundingClientRect();
            tabla2formbox.style.top = `${newPosition.bottom * 1}px`;
            tabla2formbox.style.left = `${newPosition.right * 0.8}px`;

            tabla2formbox.querySelector('.acceptbutton').style.pointerEvents = 'auto'
            tabla2formbox.querySelector('.cancelbutton').style.pointerEvents = 'auto'
            tabla2formbox.style.opacity = '1';
            tabla2formbox.style.pointerEvents = 'auto';
            tabla2id.style.pointerEvents = 'none'
            break;
        case 'Opcion3':
            clickedBox = e.target
            newPosition = clickedBox.getBoundingClientRect();
            tabla3formbox.style.top = `${newPosition.bottom * 1}px`;
            tabla3formbox.style.left = `${newPosition.right * 0.8}px`;

            tabla3formbox.querySelector('.acceptbutton').style.pointerEvents = 'auto'
            tabla3formbox.querySelector('.cancelbutton').style.pointerEvents = 'auto'
            tabla3formbox.style.opacity = '1';
            tabla3formbox.style.pointerEvents = 'auto';
            tabla3id.style.pointerEvents = 'none'
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
        case 'Opcion5':
            clickedBox = e.target
            newPosition = clickedBox.getBoundingClientRect();
            tabla5formbox.style.top = `${newPosition.bottom * 1}px`;
            tabla5formbox.style.left = `${newPosition.right * 0.8}px`;

            tabla5formbox.querySelector('.acceptbutton').style.pointerEvents = 'auto'
            tabla5formbox.querySelector('.cancelbutton').style.pointerEvents = 'auto'
            tabla5formbox.style.opacity = '1';
            tabla5formbox.style.pointerEvents = 'auto';
            break;
        case 'Opcion6':
            clickedBox = e.target
            newPosition = clickedBox.getBoundingClientRect();
            tabla6formbox.style.top = `${newPosition.bottom * 1}px`;
            tabla6formbox.style.left = `${newPosition.right * 0.8}px`;

            tabla6formbox.querySelector('.acceptbutton').style.pointerEvents = 'auto'
            tabla6formbox.querySelector('.cancelbutton').style.pointerEvents = 'auto'
            tabla6formbox.style.opacity = '1';
            tabla6formbox.style.pointerEvents = 'auto';
            break;
        case 'Opcion7':
            clickedBox = e.target
            newPosition = clickedBox.getBoundingClientRect();
            tabla7formbox.style.top = `${newPosition.bottom * 1}px`;
            tabla7formbox.style.left = `${newPosition.right * 0.8}px`;

            tabla7formbox.querySelector('.acceptbutton').style.pointerEvents = 'auto'
            tabla7formbox.querySelector('.cancelbutton').style.pointerEvents = 'auto'
            tabla7formbox.style.opacity = '1';
            tabla7formbox.style.pointerEvents = 'auto';
            tabla7id.style.pointerEvents = 'none'
            break;
        case 'Opcion8':
            clickedBox = e.target
            newPosition = clickedBox.getBoundingClientRect();
            tabla8formbox.style.top = `${newPosition.bottom * 1}px`;
            tabla8formbox.style.left = `${newPosition.right * 0.8}px`;

            tabla8formbox.querySelector('.acceptbutton').style.pointerEvents = 'auto'
            tabla8formbox.querySelector('.cancelbutton').style.pointerEvents = 'auto'
            tabla8formbox.style.opacity = '1';
            tabla8formbox.style.pointerEvents = 'auto';
            tabla8id.style.pointerEvents = 'none'
            break;
        case 'Opcion9':
            clickedBox = e.target
            newPosition = clickedBox.getBoundingClientRect();
            tabla9formbox.style.top = `${newPosition.bottom * 1}px`;
            tabla9formbox.style.left = `${newPosition.right * 0.8}px`;

            tabla9formbox.querySelector('.acceptbutton').style.pointerEvents = 'auto'
            tabla9formbox.querySelector('.cancelbutton').style.pointerEvents = 'auto'
            tabla9formbox.style.opacity = '1';
            tabla9formbox.style.pointerEvents = 'auto';
            tabla9id.style.pointerEvents = 'none'
            break;
        case 'Opcion10':
            clickedBox = e.target
            newPosition = clickedBox.getBoundingClientRect();
            tabla10formbox.style.top = `${newPosition.bottom * 1.2}px`;
            tabla10formbox.style.left = `${newPosition.right * 0.8}px`;

            tabla10formbox.querySelector('.acceptbutton').style.pointerEvents = 'auto'
            tabla10formbox.querySelector('.cancelbutton').style.pointerEvents = 'auto'
            tabla10formbox.style.opacity = '1';
            tabla10formbox.style.pointerEvents = 'auto';
            tabla10id.style.pointerEvents = 'none'
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
            clickedBox = e.target
            newPosition = clickedBox.getBoundingClientRect();
            tabla2formbox.style.top = `${newPosition.bottom * 1}px`;
            tabla2formbox.style.left = `${newPosition.right * 0.8}px`;

            tabla2formbox.querySelector('.acceptbutton').style.pointerEvents = 'auto'
            tabla2formbox.querySelector('.cancelbutton').style.pointerEvents = 'auto'
            tabla2formbox.style.opacity = '1';
            tabla2formbox.style.pointerEvents = 'auto';
            tabla2id.style.pointerEvents = 'none'
            break;
        case 'Opcion3':
            clickedBox = e.target
            newPosition = clickedBox.getBoundingClientRect();
            tabla3formbox.style.top = `${newPosition.bottom * 1}px`;
            tabla3formbox.style.left = `${newPosition.right * 0.8}px`;

            tabla3formbox.querySelector('.acceptbutton').style.pointerEvents = 'auto'
            tabla3formbox.querySelector('.cancelbutton').style.pointerEvents = 'auto'
            tabla3formbox.style.opacity = '1';
            tabla3formbox.style.pointerEvents = 'auto';
            tabla3id.style.pointerEvents = 'none'
            break;
        case 'Opcion4':
            clickedBox = e.target
            newPosition = clickedBox.getBoundingClientRect();
            tabla4formbox.style.top = `${newPosition.bottom * 1}px`;
            tabla4formbox.style.left = `${newPosition.right * 0.8}px`;

            tabla4formbox.querySelector('.acceptbutton').style.pointerEvents = 'auto'
            tabla5formbox.querySelector('.cancelbutton').style.pointerEvents = 'auto'
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
            break;
        case 'Opcion5':
            PushNotification('Error', 'No puede actualizar este Registro')
            break;
        case 'Opcion6':
            PushNotification('Error', 'No puede actualizar este Registro')
            break;
        case 'Opcion7':
            clickedBox = e.target
            newPosition = clickedBox.getBoundingClientRect();
            tabla7formbox.style.top = `${newPosition.bottom * 1}px`;
            tabla7formbox.style.left = `${newPosition.right * 0.8}px`;

            tabla7formbox.querySelector('.acceptbutton').style.pointerEvents = 'auto'
            tabla7formbox.querySelector('.cancelbutton').style.pointerEvents = 'auto'
            tabla7formbox.style.opacity = '1';
            tabla7formbox.style.pointerEvents = 'auto';
            tabla7id.style.pointerEvents = 'none'
            break;
        case 'Opcion8':
            clickedBox = e.target
            newPosition = clickedBox.getBoundingClientRect();
            tabla8formbox.style.top = `${newPosition.bottom * 1}px`;
            tabla8formbox.style.left = `${newPosition.right * 0.8}px`;

            tabla8formbox.querySelector('.acceptbutton').style.pointerEvents = 'auto'
            tabla8formbox.querySelector('.cancelbutton').style.pointerEvents = 'auto'
            tabla8formbox.style.opacity = '1';
            tabla8formbox.style.pointerEvents = 'auto';
            tabla8id.style.pointerEvents = 'none'
            break;
        case 'Opcion9':
            clickedBox = e.target
            newPosition = clickedBox.getBoundingClientRect();
            tabla9formbox.style.top = `${newPosition.bottom * 1}px`;
            tabla9formbox.style.left = `${newPosition.right * 0.8}px`;

            tabla9formbox.querySelector('.acceptbutton').style.pointerEvents = 'auto'
            tabla9formbox.querySelector('.cancelbutton').style.pointerEvents = 'auto'
            tabla9formbox.style.opacity = '1';
            tabla9formbox.style.pointerEvents = 'auto'
            tabla9id.style.pointerEvents = 'none'
            break;
        case 'Opcion10':
            clickedBox = e.target
            newPosition = clickedBox.getBoundingClientRect();
            tabla10formbox.style.top = `${newPosition.bottom * 1.2}px`;
            tabla10formbox.style.left = `${newPosition.right * 0.8}px`;

            tabla10formbox.querySelector('.acceptbutton').style.pointerEvents = 'auto'
            tabla10formbox.querySelector('.cancelbutton').style.pointerEvents = 'auto'
            tabla10formbox.style.opacity = '1';
            tabla10formbox.style.pointerEvents = 'auto';
            tabla10id.style.pointerEvents = 'none'
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
            clickedBox = e.target
            newPosition = clickedBox.getBoundingClientRect();
            tabla1formbox.style.top = `${newPosition.bottom * 1}px`;
            tabla1formbox.style.left = `${newPosition.right * 0.8}px`;

            tabla1formbox.querySelector('.acceptbutton').style.pointerEvents = 'auto'
            tabla1formbox.querySelector('.cancelbutton').style.pointerEvents = 'auto'
            tabla1formbox.style.opacity = '1';
            tabla1formbox.style.pointerEvents = 'none'

            break;
        case 'Opcion2':
            clickedBox = e.target
            newPosition = clickedBox.getBoundingClientRect();
            tabla2formbox.style.top = `${newPosition.bottom * 1}px`;
            tabla2formbox.style.left = `${newPosition.right * 0.8}px`;

            tabla2formbox.querySelector('.acceptbutton').style.pointerEvents = 'auto'
            tabla2formbox.querySelector('.cancelbutton').style.pointerEvents = 'auto'
            tabla2formbox.style.opacity = '1';
            tabla2formbox.style.pointerEvents = 'none'
            break;
        case 'Opcion3':
            clickedBox = e.target
            newPosition = clickedBox.getBoundingClientRect();
            tabla3formbox.style.top = `${newPosition.bottom * 1}px`;
            tabla3formbox.style.left = `${newPosition.right * 0.8}px`;

            tabla3formbox.querySelector('.acceptbutton').style.pointerEvents = 'auto'
            tabla3formbox.querySelector('.cancelbutton').style.pointerEvents = 'auto'
            tabla3formbox.style.opacity = '1';
            tabla3formbox.style.pointerEvents = 'none'
            break;
        case 'Opcion4':
            clickedBox = e.target
            newPosition = clickedBox.getBoundingClientRect();
            tabla4formbox.style.top = `${newPosition.bottom * 1}px`;
            tabla4formbox.style.left = `${newPosition.right * 0.8}px`;

            tabla4formbox.querySelector('.acceptbutton').style.pointerEvents = 'auto'
            tabla4formbox.querySelector('.cancelbutton').style.pointerEvents = 'auto'
            tabla4formbox.style.opacity = '1';
            tabla4formbox.style.pointerEvents = 'none'
            break;
        case 'OpcionL':
            clickedBox = e.target
            newPosition = clickedBox.getBoundingClientRect();
            tabla4y5formbox.style.top = `${newPosition.bottom * 1}px`;
            tabla4y5formbox.style.left = `${newPosition.right * 0.8}px`;

            tabla4y5formbox.querySelector('.acceptbutton').style.pointerEvents = 'auto'
            tabla4y5formbox.querySelector('.cancelbutton').style.pointerEvents = 'auto'
            tabla4y5formbox.style.opacity = '1';
            tabla4y5formbox.style.pointerEvents = 'none'
            break;
        case 'Opcion5':
            clickedBox = e.target
            newPosition = clickedBox.getBoundingClientRect();
            tabla5formbox.style.top = `${newPosition.bottom * 1}px`;
            tabla5formbox.style.left = `${newPosition.right * 0.8}px`;

            tabla5formbox.querySelector('.acceptbutton').style.pointerEvents = 'auto'
            tabla5formbox.querySelector('.cancelbutton').style.pointerEvents = 'auto'
            tabla5formbox.style.opacity = '1';
            tabla5formbox.style.pointerEvents = 'none'
            break;
        case 'Opcion6':
            clickedBox = e.target
            newPosition = clickedBox.getBoundingClientRect();
            tabla6formbox.style.top = `${newPosition.bottom * 1}px`;
            tabla6formbox.style.left = `${newPosition.right * 0.8}px`;

            tabla6formbox.querySelector('.acceptbutton').style.pointerEvents = 'auto'
            tabla6formbox.querySelector('.cancelbutton').style.pointerEvents = 'auto'
            tabla6formbox.style.opacity = '1';
            tabla6formbox.style.pointerEvents = 'none'
            break;
        case 'Opcion7':
            clickedBox = e.target
            newPosition = clickedBox.getBoundingClientRect();
            tabla7formbox.style.top = `${newPosition.bottom * 1}px`;
            tabla7formbox.style.left = `${newPosition.right * 0.8}px`;

            tabla7formbox.querySelector('.acceptbutton').style.pointerEvents = 'auto'
            tabla7formbox.querySelector('.cancelbutton').style.pointerEvents = 'auto'
            tabla7formbox.style.opacity = '1';
            tabla7formbox.style.pointerEvents = 'none'
            break;
        case 'Opcion8':
            clickedBox = e.target
            newPosition = clickedBox.getBoundingClientRect();
            tabla8formbox.style.top = `${newPosition.bottom * 1}px`;
            tabla8formbox.style.left = `${newPosition.right * 0.8}px`;

            tabla8formbox.querySelector('.acceptbutton').style.pointerEvents = 'auto'
            tabla8formbox.querySelector('.cancelbutton').style.pointerEvents = 'auto'
            tabla8formbox.style.opacity = '1';
            tabla8formbox.style.pointerEvents = 'none'
            break;
        case 'Opcion9':
            clickedBox = e.target
            newPosition = clickedBox.getBoundingClientRect();
            tabla9formbox.style.top = `${newPosition.bottom * 1}px`;
            tabla9formbox.style.left = `${newPosition.right * 0.8}px`;

            tabla9formbox.querySelector('.acceptbutton').style.pointerEvents = 'auto'
            tabla9formbox.querySelector('.cancelbutton').style.pointerEvents = 'auto'
            tabla9formbox.style.opacity = '1';
            tabla9formbox.style.pointerEvents = 'none'
            break;
        case 'Opcion10':
            clickedBox = e.target
            newPosition = clickedBox.getBoundingClientRect();
            tabla10formbox.style.top = `${newPosition.bottom * 1.2}px`;
            tabla10formbox.style.left = `${newPosition.right * 0.8}px`;

            tabla10formbox.querySelector('.acceptbutton').style.pointerEvents = 'auto'
            tabla10formbox.querySelector('.cancelbutton').style.pointerEvents = 'auto'
            tabla10formbox.style.opacity = '1';
            tabla10formbox.style.pointerEvents = 'none'
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

let tablaDatos3 = document.getElementById("tabla3");
tablaDatos3.addEventListener('click', function (evento) {
    if (evento.target.tagName === 'TD') {
        let fila = evento.target.parentNode;
        let celdas = fila.getElementsByTagName('td');
        let objeto = {};

        for (let i = 0; i < celdas.length; i++) {
            objeto[i] = celdas[i].innerHTML;
        }
        objetoTabla = objeto
    }

    tabla3id.value = objetoTabla[0]
    tabla3nombre.value = objetoTabla[1]
    tabla3direccion.value = objetoTabla[2]
    tabla3telefono.value = objetoTabla[3]
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

let tablaDatos5 = document.getElementById("tabla5");
tablaDatos5.addEventListener('click', function (evento) {
    if (evento.target.tagName === 'TD') {
        let fila = evento.target.parentNode;
        let celdas = fila.getElementsByTagName('td');
        let objeto = {};

        for (let i = 0; i < celdas.length; i++) {
            objeto[i] = celdas[i].innerHTML;
        }
        objetoTabla = objeto
    }

    tabla5idc.value = objetoTabla[0]
    tabla5idl.value = objetoTabla[1]
});

let tablaDatos6 = document.getElementById("tabla6");
tablaDatos6.addEventListener('click', function (evento) {
    if (evento.target.tagName === 'TD') {
        let fila = evento.target.parentNode;
        let celdas = fila.getElementsByTagName('td');
        let objeto = {};

        for (let i = 0; i < celdas.length; i++) {
            objeto[i] = celdas[i].innerHTML;
        }
        objetoTabla = objeto
    }

    tabla6idu.value = objetoTabla[0]
    tabla6idl.value = objetoTabla[1]
});

let tablaDatos7 = document.getElementById("tabla7");
tablaDatos7.addEventListener('click', function (evento) {
    if (evento.target.tagName === 'TD') {
        let fila = evento.target.parentNode;
        let celdas = fila.getElementsByTagName('td');
        let objeto = {};

        for (let i = 0; i < celdas.length; i++) {
            objeto[i] = celdas[i].innerHTML;
        }
        objetoTabla = objeto
    }

    tabla7id.value = objetoTabla[0]
    tabla7fechap.value = objetoTabla[1]
    tabla7fechad.value = objetoTabla[2]
    tabla7idu.value = objetoTabla[3]
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

let tablaDatos9 = document.getElementById("tabla9");
tablaDatos9.addEventListener('click', function (evento) {
    if (evento.target.tagName === 'TD') {
        let fila = evento.target.parentNode;
        let celdas = fila.getElementsByTagName('td');
        let objeto = {};

        for (let i = 0; i < celdas.length; i++) {
            objeto[i] = celdas[i].innerHTML;
        }
        objetoTabla = objeto
    }

    tabla9id.value = objetoTabla[0]
    tabla9seccion.value = objetoTabla[1]
    tabla9nivel.value = objetoTabla[2]
    tabla9estante.value = objetoTabla[3]
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
