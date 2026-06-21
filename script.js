function cambiarTema(){

document.body.classList.toggle("oscuro");

}

function mostrarInfo(){

let info =
document.getElementById("infoExtra");

if(info.style.display=="none"){

info.style.display="block";

}else{

info.style.display="none";

}

}

function validarFormulario(){

let nombre =
document.getElementById("nombre").value;

let correo =
document.getElementById("correo").value;

let mensaje =
document.getElementById("mensaje").value;

if(
nombre=="" ||
correo=="" ||
mensaje==""
){

alert(
"Complete todos los campos"
);

return false;

}

alert(
"Mensaje enviado correctamente"
);

return true;

}

window.onload=function(){

setTimeout(function(){

alert(
"Bienvenido a mi Portafolio"
);

},1000);

}