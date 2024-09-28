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
import * as rs from "readline-sync"

const UsuarioRegistrado: string = "pappo";
const PassRegistrada: string = "matias";

function loguearse() {
    const UsuarioIngresado = rs.question("Ingrese el nombre de USUARIO :");

    const PassIngresada = rs.question("Ingrese CONTRASEÑA :");

    if (UsuarioIngresado === UsuarioRegistrado && PassIngresada === PassRegistrada) {
        console.log("Bienvenido al Sistema  ");
        console.log("Ingrese la opcion para su Retiro :");
    } else {
    console.log("Usuario o Contraseña incorrecta, intente nuevamente :");
   }
}
loguearse(); 