var express = require("express");
var mysql = require("mysql");
var app = express(); // ejecutamos constructor
// Habilitar recepción JSON
app.use(express.json());

// Configuramos la conexión
var conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'mini_sitec',
});

// Probar la conexión
conexion.connect(function(error){
    if(error){
        throw error;
    }else{
        console.log("Conectado a la base de datos")
    }
});

// cors
const cors=require("cors");
const corsOptions ={
origin:'*', 
credentials:true, 
optionSuccessStatus:200,
}
app.use(cors(corsOptions))

app.get("/",function(req,res){
    res.send("<h1>Ruta de inicio</h1>")
});

// Verbos de solicitud del cliente
// app.get();
// app.post();
// app.put();
// app.delete();

// ALUMNOS

// Mostrar todos los alumnos
app.get('/api/alumnos',(req,res)=>{
    conexion.query("SELECT * FROM alumnos",(error,filas)=>{
        if(error){
            throw error;
        }else{
            res.header("Access-Control-Allow-Origin", "*")
            res.send(filas);
        }
    });
});

// Mostrar a un solo alumno
app.get('/api/alumnos/:id',(req,res)=>{
    conexion.query("SELECT * FROM alumnos WHERE NCONTROL = ? LIMIT 1",[req.params.id],(error,fila)=>{
        if(error){
            throw error;
        }else{
            res.send(fila)
        }
    })
})

// Agregar un alumno
app.post('/api/alumnos',(req,res)=>{
    let data = {NCONTROL:req.body.nco,
                NOMBRE:req.body.nom,
                CARRERA:req.body.car,
                ESTATUS:req.body.est}
    let sql = "INSERT INTO alumnos SET ?";
    conexion.query(sql,data,function(error,results){
        if(error){
            throw error
        }else{
            res.send(results)
        }
    })
})

// Actualizar datos del alumnos
app.put('/api/alumnos/:id',(req,res)=>{
    let NCONTROL = req.params.id;
    let NOMBRE = req.body.nom;
    let CARRERA = req.body.car;
    let ESTATUS = req.body.est;
    let sql="UPDATE alumnos SET NOMBRE=?,CARRERA=?,ESTATUS=? WHERE NCONTROL=?";
    conexion.query(sql,[NOMBRE,CARRERA,ESTATUS,NCONTROL],function(error,results){
        if(error){
            throw error
        }else{
            res.send(results)
        }
    });
})

// Eliminar un registro de alumno
app.delete('/api/alumnos/:id',(req,res)=>{
    conexion.query("DELETE FROM alumnos WHERE NCONTROL=?",[req.params.id],function(error,filas){
        if(error){
            throw error;
        }else{
            res.send(filas);
        }
    });
});

// MAESTROS

// Mostrar todos los maestros
app.get('/api/maestros',(req,res)=>{
    conexion.query("SELECT * FROM maestros",(error,filas)=>{
        if(error){
            throw error;
        }else{
            res.header("Access-Control-Allow-Origin", "*")
            res.send(filas);
        }
    });
});

// Mostrar a un solo maestro
app.get('/api/maestros/:id',(req,res)=>{
    conexion.query("SELECT * FROM maestros WHERE CLAVEMAESTRO = ? LIMIT 1",[req.params.id],(error,fila)=>{
        if(error){
            throw error;
        }else{
            res.send(fila)
        }
    })
})

// Agregar un maestro
app.post('/api/maestros',(req,res)=>{
    let data = {CLAVEMAESTRO:req.body.cla,
                NOMBRE:req.body.nom,
                DEPARTAMENTO:req.body.dep,
                ESTATUS:req.body.est}
    let sql = "INSERT INTO maestros SET ?";
    conexion.query(sql,data,function(error,results){
        if(error){
            throw error
        }else{
            res.send(results)
        }
    })
})

// Actualizar datos del maestro
app.put('/api/maestros/:id',(req,res)=>{
    let CLAVEMAESTRO = req.params.id;
    let NOMBRE = req.body.nom;
    let DEPARTAMENTO = req.body.dep;
    let ESTATUS = req.body.est;
    let sql="UPDATE maestros SET NOMBRE=?,DEPARTAMENTO=?,ESTATUS=? WHERE CLAVEMAESTRO=?";
    conexion.query(sql,[NOMBRE,DEPARTAMENTO,ESTATUS,CLAVEMAESTRO],function(error,results){
        if(error){
            throw error
        }else{
            res.send(results)
        }
    });
})

// Eliminar un registro de maestro
app.delete('/api/maestros/:id',(req,res)=>{
    conexion.query("DELETE FROM maestros WHERE CLAVEMAESTRO=?",[req.params.id],function(error,filas){
        if(error){
            throw error;
        }else{
            res.send(filas);
        }
    });
});

// MATERIAS

// Mostrar todas las materias
app.get('/api/materias',(req,res)=>{
    conexion.query("SELECT * FROM materias",(error,filas)=>{
        if(error){
            throw error;
        }else{
            res.header("Access-Control-Allow-Origin", "*")
            res.send(filas);
        }
    });
});

// Mostrar a una sola materia
app.get('/api/materias/:id',(req,res)=>{
    conexion.query("SELECT * FROM materias WHERE CLAVEMATERIA = ? LIMIT 1",[req.params.id],(error,fila)=>{
        if(error){
            throw error;
        }else{
            res.send(fila)
        }
    })
})

// Agregar una materia
app.post('/api/materias',(req,res)=>{
    let data = {CLAVEMATERIA:req.body.cla,
                NOMBRE:req.body.nom,
                CREDITOS:req.body.cre}
    let sql = "INSERT INTO materias SET ?";
    conexion.query(sql,data,function(error,results){
        if(error){
            throw error
        }else{
            res.send(results)
        }
    })
})

// Actualizar datos de la materia
app.put('/api/materias/:id',(req,res)=>{
    let CLAVEMATERIA = req.params.id;
    let NOMBRE = req.body.nom;
    let CREDITOS = req.body.cre;
    let sql="UPDATE materias SET NOMBRE=?,CREDITOS=? WHERE CLAVEMATERIA=?";
    conexion.query(sql,[NOMBRE,CREDITOS,CLAVEMATERIA],function(error,results){
        if(error){
            throw error
        }else{
            res.send(results)
        }
    });
})

// Eliminar una materia
app.delete('/api/materias/:id',(req,res)=>{
    conexion.query("DELETE FROM materias WHERE CLAVEMATERIA=?",[req.params.id],function(error,filas){
        if(error){
            throw error;
        }else{
            res.send(filas);
        }
    });
});

// GRUPOS

// Mostrar todos los grupos
app.get('/api/grupos',(req,res)=>{
    conexion.query("SELECT * FROM grupos",(error,filas)=>{
        if(error){
            throw error;
        }else{
            res.header("Access-Control-Allow-Origin", "*")
            res.send(filas);
        }
    });
});

// Mostrar a un solo grupo
app.get('/api/grupos/:id',(req,res)=>{
    conexion.query("SELECT * FROM grupos WHERE CLAVEGRUPO = ? LIMIT 1",[req.params.id],(error,fila)=>{
        if(error){
            throw error;
        }else{
            res.send(fila)
        }
    })
})

// Agregar un grupo
app.post('/api/grupos',(req,res)=>{
    let data = {CLAVEMATERIA:req.body.clamat,
                CLAVEGRUPO:req.body.clagru,
                CLAVEMAESTRO:req.body.clamae,
                LIMITEALUMNOS:req.body.limalu,
                INSCRITOS:req.body.ins,
                HORARIOLUNES:req.body.horlun,
                HORARIOMARTES:req.body.hormar,
                HORARIOMIERCOLES:req.body.hormie,
                HORARIOJUEVES:req.body.horjue,
                HORARIOVIERNES:req.body.horvie}
    let sql = "INSERT INTO grupos SET ?";
    conexion.query(sql,data,function(error,results){
        if(error){
            throw error
        }else{
            res.send(results)
        }
    })
})

// Actualizar datos del grupo
app.put('/api/grupos/:id',(req,res)=>{
    let CLAVEGRUPO = req.params.id;
    let CLAVEMAESTRO = req.body.clamae;
    let LIMITEALUMNOS = req.body.limalu;
    let INSCRITOS = req.body.ins;
    let HORARIOLUNES = req.body.horlun;
    let HORARIOMARTES = req.body.hormar;
    let HORARIOMIERCOLES = req.body.hormie;
    let HORARIOJUEVES = req.body.horjue;
    let HORARIOVIERNES = req.body.horvie;
    let sql="UPDATE grupos SET CLAVEMAESTRO=?,LIMITEALUMNOS=?,INSCRITOS=?,HORARIOLUNES=?,HORARIOMARTES=?,HORARIOMIERCOLES=?,HORARIOJUEVES=?,HORARIOVIERNES=? WHERE CLAVEGRUPO=?";
    conexion.query(sql,[CLAVEMAESTRO,LIMITEALUMNOS,INSCRITOS,
        HORARIOLUNES,HORARIOMARTES,HORARIOMIERCOLES,HORARIOJUEVES,HORARIOVIERNES,CLAVEGRUPO],function(error,results){
        if(error){
            throw error
        }else{
            res.send(results)
        }
    });
})

// Eliminar un grupo
app.delete('/api/grupos/:id',(req,res)=>{
    conexion.query("DELETE FROM grupos WHERE CLAVEGRUPO=?",[req.params.id],function(error,filas){
        if(error){
            throw error;
        }else{
            res.send(filas);
        }
    });
});

// Encender el servidor
app.listen("3000",function(){
    console.log("Servidor puerto 3000");
});





//-----------------Carga
//Nueva Carga
app.post('/api/carga', (req, res) => {
    try{
        let data = {
            clavemateria: req.body.clavemateria,
            clavegrupo: req.body.clavegrupo,
            ncontrol: req.body.ncontrol,
        };
        let sql = "insert into carga SET ?";
        conexion.query(sql, data, function (error, results) {
            if (error) {
                throw error;
            } else {
                res.send(results);
            }
        })

    }catch(error){
        console.log(error)
    }
   
});

//Actualizar inscritos en grupo
app.put('/api/inscribir/:clavegrupo', (req, res) => {
    // eficiente para que no recorra toda la tabla
    let clavegrupo = req.params.clavegrupo;
    let sql = "UPDATE grupos set inscritos = inscritos + 1  where clavegrupo  = ?";
    conexion.query(sql, [clavegrupo], function (error, results) {
        if (error) {
            throw error;
        } else {
            res.send(results);
        }
    })
})

app.get('/api/buscarGrupo/:CLAVEGRUPO', (req, res) => {
    // eficiente para que no recorra toda la tabla
    conexion.query("SELECT * FROM grupos WHERE clavegrupo = ?  & clavemateria = ? LIMIT 1", [req.params.CLAVEGRUPO, req.query.clavemateria], (error, fila) => {
        if (error) {
            throw error;
        } else {
            res.send(fila);
        }
    })
})
