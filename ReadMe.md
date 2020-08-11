# Facial Recognition System and MySQL DB

_Sistema de Reconocimiento Facial para realizar su registro de Dia y Hora, y almacenar estos datos en una base de datos MySQL_

## Introducción

_Este proyecto fue propuesto como trabajo para la materia de TALLER DE ANÁLISIS Y DISEÑO DE REDES llevada en la carrera de INGENIERIA DE REDES Y TELECOMUNICACIONES._

_Objetivo: Diseñar e implementar un sistema basado en reconocimiento facial donde se guardarán diversos datos en una base de datos MySQL, estos se obtendrán al momento que se registre una nueva entrada de un usuario en el sistema._

## Uso o instalacion 📋

_- El proyecto esta actualmente funcionando en la pagina de https://proyectopablo.herokuapp.com/_

_- Si quiere ejecutar el programa en su computadora, debe hacer las configuraciones necesarias en el archivo de src/config/db.config.js y luego ejecutar el comando:_
_ _

```
npm start
```

## Indicaciones 

__

_La aplicacion web esta formada por diferentes rutas:_

_-En LISTA DE USUARIOS podremos ver todas las personas que sus datos ya estan ingresados en el sistema_

_-En LISTA REGISTROS estara la informacion de la hora y dia en cada persona hizo un correcto uso del sistema e identificacion facial_

_En NUEVO USUARIO podemos agregar a nueva persona al sistema junto con una foto de ella_

_En NUEVO REGISTRO se hara uso de la API de Face Detection, donde podremos hacer un reconocimiento del rostro y guardar la informacion exacta de la hora en que cada usuario se identifico correctamente_

## Aclaraciones

_El sistema sigue en desarrollo, donde existen muchas cosas por arreglar y mejorar_

## Futuros Cambios

_Actualmente Face.api se ejecuta en el lado del cliente, se espera mudar todo este proceso de reconocimiento y clasificación de rostros al lado del servidor_


## Construido con 🛠️
* [Express](https://expressjs.com/es/) - El framework web usado
* [Face.api](https://justadudewhohacks.github.io/face-api.js/docs/index.html) - API para Face Detection
* [Sequelize](https://sequelize.org/v3/) - ORM para manejo de Base de Datos
* [EJS](https://ejs.co/)
