// Obtencion de Elementos HTML
let body = document.getElementById('TODO')
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');
let formR = document.getElementById('formregister');
let formL = document.getElementById('formlogin');
let alerta = document.getElementById('cerrar');
let alertaCaja = document.getElementById('alerta')
let alertamsg = document.getElementById('msgAlerta')
let cargando = document.getElementById('Cargando');

// Funciones de Control
signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});

alerta.addEventListener('click', (e) => {
    alertaCaja.style.pointerEvents = 'none'
    alertaCaja.style.opacity = 0
});

// Funciones del BACKEND
document.addEventListener("DOMContentLoaded", () => {
    var message = document.getElementById('hiddenMessage').textContent;
    body.style.opacity = 0

    setTimeout(() => {
        body.style.opacity = 1
    },500)

    setTimeout(() => {
        if (message != ' ') {
            alertamsg.textContent = message;

            alertaCaja.style.opacity = '1';
            alertaCaja.style.pointerEvents = 'auto';

            setTimeout(() => {
                alertaCaja.style.opacity = '0'
                alertaCaja.style.pointerEvents = 'none'
            }, 4000)
        }
    }, 1000)
});

formR.onsubmit = () => {
    cargando.style.display = 'flex';

    setTimeout(() => {
        formR.submit();
    }, 3000)

    return false;
}

formL.onsubmit = () => {
    cargando.style.display = 'flex';

    setTimeout(() => {
        formL.submit();
    }, 3000)

    return false;
}
