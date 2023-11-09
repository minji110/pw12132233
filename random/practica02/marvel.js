var numero=0;
var cadena="";
var datos=[];

async function apirandommovie(){
    cadena=document.getElementById("pelicula");
    const respuesta = await fetch("https://gateway.marvel.com/v1/public/characters?ts=1&apikey=67788e74df746a1523d8ebb504ee1008&hash=cf5ec9bfa5a156f031a69417cd0e012c&nameStartsWith="+cadena);
    //"https://gateway.marvel.com/v1/public/characters?ts=1&apikey=67788e74df746a1523d8ebb504ee1008&hash=cf5ec9bfa5a156f031a69417cd0e012c&nameStartsWith="+cadena
    //https://gateway.marvel.com/v1/public/characters?ts=1&apikey=67788e74df746a1523d8ebb504ee1008&hash=cf5ec9bfa5a156f031a69417cd0e012c
    datos = await respuesta.json();

    muestra();
}

function muestra(){
    let foto=document.getElementById("foto");
    let nombre=document.getElementById("nombre");
    let descripcion=document.getElementById("descripcion");

    foto.setAttribute("src", datos.results[0].thumbnail);
    nombre.innerHTML=datos.results[0].name;
    descripcion.innerHTML=datos.results[0].description;
}

//esto ya esta
function anterior(){
    if (numero>0){
        muestra();
        numero--;
    }
    muestra();
}
function siguiente(){
    // validar que no se pase
    if (numero <datos.results.leght-1){
        numero++;
       muestra();
    }
    
}