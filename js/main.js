//Formulario.
const formulario = document.querySelector("#formulario")
const nombre = document.querySelector("#nombre")
const apellido = document.querySelector("#apellido")
const numero = document.querySelector("#numero")
const email = document.querySelector("#correo")
const boton = document.querySelector("#enviar")

function enviarPantalla(event) {
    event.preventDefault()

    console.log("Nombre: " + nombre.value)
    console.log("Apellido: " + apellido.value)
    console.log("Numero: " + numero.value)
    console.log("Correo: " + email.value)

    event.target.reset()
}

formulario.addEventListener("submit", enviarPantalla)

//Boton.

function alternarChat() {
    var ventanaChat = document.getElementById('ventana-chat');

    // Si está oculto, lo muestra (y viceversa)
    if (ventanaChat.style.display === 'none' || ventanaChat.style.display === '') {
        ventanaChat.style.display = 'flex';
    } else {
        ventanaChat.style.display = 'none';
    }
}

function alternarMenu() {
    // 1. Obtener el elemento del menú por su ID
    const menu = document.getElementById('menu-movil');

    // 2. Alternar la clase 'activo'
    // Si la tiene, la quita; si no la tiene, la añade.
    // Esto dispara el CSS que lo muestra o lo oculta.
    menu.classList.toggle('activo');
}