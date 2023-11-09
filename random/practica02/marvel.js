var cadena="";
var numero=0;
var datos=[];

async function apibuscarheroe(){
    cadena = document.getElementById("heroe").value;
    const respuesta = await fetch("https://gateway.marvel.com/v1/public/characters?ts=1&apikey=67788e74df746a1523d8ebb504ee1008&hash=cf5ec9bfa5a156f031a69417cd0e012c&nameStartsWith="+cadena);
    //https://gateway.marvel.com/v1/public/characters?ts=1&apikey=67788e74df746a1523d8ebb504ee1008&hash=cf5ec9bfa5a156f031a69417cd0e012c
    datos = await respuesta.json();
    muestra();
}

function muestra(){
    console.log();
    let nombre=document.getElementById("nombre");
    let descripcion=document.getElementById("descripcion");
    let foto=document.getElementById("foto");
    let comic=document.getElementById("comics");

    //siempre poner el data porque si no, no jala esto y duraras 2 hora buscando el error ;_;
    foto.setAttribute("src", datos.data.results[numero].thumbnail.path + "." + datos.data.results[numero].thumbnail.extension);
    nombre.innerHTML = datos.data.results[numero].name;
    descripcion.innerHTML = datos.data.results[numero].description;
    comic.innerHTML=datos.data.results[numero].comics.available;
}

function anterior() {
    // Validar si numero es menor que 0
    numero--;
    if (numero < 0) {
        numero = datos.data.results.length - 1;
    }
    muestra();
}

function siguiente() {
    // Validar si numero se pasa del límite
    numero++;
    if (numero === datos.data.results.length) {
        numero = 0;
    }
    muestra();
}



