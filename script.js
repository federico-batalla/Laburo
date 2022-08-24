"use strict";

let btnFinLic = document.getElementById("btnFinLic");
btnFinLic.addEventListener("click",FinLic);

let input = document.getElementById("input");

let textos = [];

let divNuevo = document.getElementById("divNuevo");

function limpiarCadena(texto){

    let aux1 = texto.replace(/\t+/g,'-').toLowerCase(); 
    let aux2 = [];
    aux2 = aux1.split("-");

    
    return aux2


}




function FinLic(){
    
    textos = limpiarCadena(input.value);

    let dni = textos[0];
    let nombre = textos [1];
    let tipoLic = textos[6];
    let situacionRevista = textos[7];
    console.log(textos);
    console.log(dni,nombre);


    let nota = document.createElement("p");
    nota.innerHTML = "Buenas Tardes <br> Solicito se aprueben los siguientes movimientos de "+tipoLic+" del docente "+nombre+" DNI Nº "+dni+". <br>Los motivos de dicho movimientos es que se necesita cargar la Baja como "+situacionRevista+"  y la licencia impide dicha carga <br> Adjunto al presente Nota de Renuncia del docente ."
    divNuevo.appendChild(nota);

}