"use strict";
/*• Desarrolle un algoritmo que permita loguearse (registrarse)
a un sistema, ingresando un nombre de usuario y la
contraseña adecuada.
• Considerar que tanto el usuario como la contraseña están
formados sólo por letras.
• El sistema deberá validar que el usuario y la contraseña
sean correctas, comparándolas con lo que es sistema tiene
registrado para ese usuario. Tenga en cuenta que el
sistema tiene registrado el usuario: Juan y la clave
claveJua*/
const UsuarioRegistrado = "ElPappo";
const PassRegistrada = "MaT123";
function loguearse() {
    const UsuarioIngresado = prompt("Ingrese el nombre de USUARIO :") || "";
    const PassIngresada = prompt("Ingrese CONTRASEÑA :") || "";
    if (UsuarioIngresado === UsuarioRegistrado && PassIngresada === PassRegistrada) {
        console.log("Bienvenido al Sistema : ");
    }
    else {
        console.log("Usuario o Contraseña incorrecta, intente nuevamente :");
    }
}
