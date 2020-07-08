const express = require('express');
const router = express.Router();

const rutasController = require('../controllers/rutasController');

//Aqui declaramos todas las rutas que utilizaremos
router.get('/', rutasController.listarUsers);
router.get('/newusers', rutasController.newUser);
router.get('/enters', rutasController.listarEnters);
router.get('/newenters', rutasController.newEnter);

router.post('/addUser', rutasController.addUser);
router.post('/addEnter', rutasController.addEnter);

router.post('/obteinData', rutasController.obtener);

router.get('/delete/:personaID', rutasController.deleteUser);


//Importamos
module.exports = router;