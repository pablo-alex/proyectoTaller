//aqui pondremos todas las funciones
const funciones = {};

const { personas } = require('../models/sequalizeModel');
const { entradas } = require('../models/sequalizeModel');

///Usuarios 
funciones.listarUsers = async (req, res) => {
    const lista = await personas.findAll();
    res.render('listaUsers', {
        data: lista
    });
};

funciones.newUser = async (req, res) => {
    res.render('nuevoUser');
};

funciones.addUser = async (req, res) => {
    const consultados = await personas.create(req.body);
    res.json(consultados);
};

funciones.listarEnters = async (req, res) => {
    const result1 = await entradas.findAll();
    const result2 = await personas.findAll();
    res.render('listaEnters', {
        enters: result1,
        users: result2
    });
};

funciones.newEnter = async (req, res) => {
    const lista = await personas.findAll();
    res.render('nuevoEnter', {
        data: lista
    });
};

funciones.addEnter = async (req, res) => {
    console.log('Recibi una respuesta');
    console.log(req.body);

    const respuesta = await entradas.create(req.body);
    res.json(respuesta);
};

funciones.deleteUser = async (req, res) => {
    await entradas.destroy({
        where: { persona_id : req.params.personaID }
    });
    await personas.destroy({
        where: { id : req.params.personaID }
    });
    const nuevos = await personas.findAll();
    res.redirect('/');
}

funciones.obtener = async (req, res) => {
    //console.log(req.body);
    const lista = await personas.findAll();
    var transformado = [];

    for (let i = 0; i < lista.length; i=i+1) {
        transformado.push({
            id: lista[i].id,
            name: lista[i].name,
            image: lista[i].image.toString()
        });
    }
    res.json(transformado);
    
}





module.exports = funciones;