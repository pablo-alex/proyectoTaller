const express = require('express');
const path = require('path');
const morgan = require('morgan');
const app = express();
const fs = require('fs-extra');
const SocketIO = require('socket.io');
const moment = require('moment');
//Importando rutas
const rutas = require('./routes/rutas');
const { type } = require('os');
//Configuraciones express----------------------------------------
app.set('port', process.env.PORT || 3000); //Define el puerto del server
app.set('view engine', 'ejs'); //usaremos un motor de plantillas
app.set('views', path.join(__dirname, 'views'));// carpeta donde estaran las vistas

//MIDDELWARES----------------------------------------------------
//Con este middelware podremos monitorear peticiones http
app.use(morgan('dev'));

///prueba sincronizando tablas
require('./models/sequalizeModel');


// this makes moment available as a variable in every EJS page
app.locals.moment = moment; 

app.use(express.urlencoded({ extended: false }));
app.use(express.json({ limit: '2mb'}));

//rutas
app.use('/', rutas);
//Archivos estaticos------------------------------------------
app.use("/public", express.static(path.join(__dirname + "/public")));
app.use("/images", express.static(path.join(__dirname + "/images")));
app.use("/modelsML", express.static(path.join(__dirname + "/modelsML")));
//Iniciando el servidor----------------------------------------
const server = app.listen(app.get('port'), () =>{
    console.log('Servidor en el puerto 3000');
});

//inicializamos los sockets--------------------------------------
const io = SocketIO(server);
//inicializamos una conexion-------------------------------------
io.on('connection', (socket)=>{
    console.log('Hay una nueva Conexion! ' + socket.id);
});








