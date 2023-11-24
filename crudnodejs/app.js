var express=require("express");
var mysql=require("mysql");
var app=express();
//habilitar la recepcion de json
app.use(express.json());

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

//Agregar un maestro
app.post('/api/maestros',(req,res)=>{
    let data = {clave:req.body.cla,
                nombre:req.body.nom,
                departamento:req.body.dep,
                estatus:req.body.est}
    let sql = "INSERT INTO maestros SET ?";
    conexion.query(sql,data,function(error,results){
        if(error){
            throw error
        }else{
            res.send(results)
        }
    })
})
//Actualizar datos del maestro
app.put('/api/maestros/:id',(req,res)=>{
    let clave = req.params.id;
    let nombre = req.body.nom;
    let departamento = req.body.dep;
    let estatus = req.body.est;
    let sql="UPDATE maestros SET nombre=?,departamento=?,estatus=? WHERE clave=?";
    conexion.query(sql,[nombre,departamento,estatus,clave],function(error,results){
        if(error){
            throw error
        }else{
            res.send(results)
        }
    });
})
//Eliminar un registro de maestro
app.delete('/api/maestros/:id',(req,res)=>{
    conexion.query("DELETE FROM maestros WHERE clave=?",[req.params.id],function(error,filas){
        if(error){
            throw error;
        }else{
            res.send(filas);
        }
    });
});

//encender el servidor
app.listen("3000", function(){
    console.log("servidor puerto 3000");
});