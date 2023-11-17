var express=require("express");
var mysql=require("mysql");
var app=express();

//configurar la conexion
var mysql = require('mysql');

var conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'pw1213'
});

// Probar conexión
conexion.connect(function(error) {
    if (error) {
        throw error;
    } else {
        console.log("Conectado a la base de datos");
    }
});

app.get("/", function(req,res){
    res.send("<h1>Ruta de inicio<h1>");
});

//verbos de solicitud
//app.get();
//app.post();
//app.delete();
//app.put();

//mostrar todos los maestros
app.get('/api/maestros', (req,res)=>{
    conexion.query("SELECT * FROM maestros", (error,filas)=>{
        if(error){
            throw error;
        } else {
            res.send(filas);
        }
    });
});

//mostrar un maestro
app.get('/api/maestros', (req,res)=>{
    conexion.query("SELECT * FROM maestros WHERE clave =? LIMIT 1",[req.params.id], (error,filas)=>{
        if(error){
            throw error;
        } else {
            res.send(filas);
        }
    });
    //se usa el req.params.id para decir que se quiere
});

//encender el servidor
app.listen("3000", function(){
    console.log("servidor puerto 3000");
});