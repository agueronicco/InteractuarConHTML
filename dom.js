let titulo = document.getElementById("encabezado");
//console.log(titulo.innerHTML);

let concepto = document.getElementById("concepto");
concepto.style.color = "red";
//console.log(concepto);

let caracteristicas = document.getElementsByTagName("p");
caracteristicas[0].style.textAlign = "right";
//console.log(caracteristicas[0].innerHTML);

let nuevoParrafo = document.createElement("p");
let textoParrafo = document.createTextNode("Aqui va el texto del parrafo");
let datoNuevo = document.getElementById("datos");
datoNuevo.appendChild(nuevoParrafo);
nuevoParrafo.appendChild(textoParrafo);

function valida() {
    let nombre = document.getElementById("nombre").value;
    let radios = document.getElementsByName("programar");
    let estudia = document.getElementById("estudiante");
    let valorRadio = "";

    for(let a = 0; a < radios.length; a++) {
        if(radios[a].checked)  {
            valorRadio = radios[a].value;
        }
    }

    if (estudia.checked) {
        estudia = "SI";
    } else {
        estudia = "NO";
    }

    console.log("Nombre: " + nombre + "\nSabe programar: " + valorRadio + "\nEs estudiante: " + estudia);
}

function limpiar() {
    document.getElementById("nombre").value = "";
    let radios = document.getElementsByName("programar");

    for(let a = 0; a < radios.length; a++) {
        if(radios[a].checked)  {
            radios[a].checked = false;
        }
    }

    let estudia = document.getElementById("estudiante");
    estudia.checked = false;
}