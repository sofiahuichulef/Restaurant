// script.js
// Manipulación básica del DOM - Reservas Restaurante

console.log(carrito);
let cantidad = 1;

function cambiarCantidad(valor){

    cantidad += valor;

    // evitar números negativos
    if(cantidad < 1){
        cantidad = 1;
    }

    document.getElementById("cantidad").innerText = cantidad;
}


function agregarCarrito(producto, precio){

    alert(
        "Agregaste " + cantidad +
        " x " + producto +
        " al carrito 🛒"
    );

}
function validarEmail(correo){
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(correo);
}



function reservarMesa(){

    // capturar datos
    let nombre = document.getElementById("nombre").value;
    let fecha = document.getElementById("fecha").value;
    let personas = document.getElementById("personas").value;
    let correo = document.getElementById("correo").value;
    let celular = document.getElementById("celular").value;

    // validación simple
    if(nombre === "" || fecha === ""){
        alert("Por favor completa los datos");
        return;
    }

     // validar email
    if(!validarEmail(correo)){
        alert("Ingresa un correo electrónico válido 📧");
        return;
    }


    // modificar contenido DOM
    document.getElementById("subtitle-form").innerText =
        "✅ Reserva realizada para " + nombre;

    alert("Reserva confirmada para " + personas + " personas 🎉");
}