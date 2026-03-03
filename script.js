// script.js
// Manipulación básica del DOM - Reservas Restaurante


let total = 0;

function cambiarCantidad(boton, cambio) {

    let contenedor = boton.parentElement;
    let cantidadSpan = contenedor.querySelector(".cantidad");

    let cantidad = parseInt(cantidadSpan.innerText);

    cantidad += cambio;

    if (cantidad < 1) {
        cantidad = 1;
    }

    cantidadSpan.innerText = cantidad;
}



function agregarCarrito(boton, nombre, precio) {

    let contenedor = boton.parentElement;
    let cantidad = parseInt(contenedor.querySelector(".cantidad").innerText);

    total += cantidad;

    let carrito = document.getElementById("cart-count");
    carrito.innerText = total;

    alert(nombre + " agregado al carrito 🛒");
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