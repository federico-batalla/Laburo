"use strict";

let btnFinLic = document.getElementById("btnFinLic");
btnFinLic.addEventListener("click",FinLic);

let input = document.getElementById("input");

let textos = [];


function limpiarCadena(texto){

    let aux1 = texto.replace(/\t+/g,'-'); 
    let aux2 = [];
    aux2 = aux1.split("-");

    
    return aux2


}




function FinLic(){
    
    textos = limpiarCadena(input.value);

    let dni = textos[0];
    let apellido = textos [1]
    
    console.log(textos);
    console.log(dni,apellido);

    

}