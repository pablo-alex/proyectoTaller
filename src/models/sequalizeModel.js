const dbConfig = require("../config/db.config.js");
console.log(dbConfig);

const Sequelize = require("sequelize");

const personasModels = require("./personas");
const entradasModels = require("./entradas");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  }
});




const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.personas = personasModels(sequelize, Sequelize);
db.entradas = entradasModels(sequelize, Sequelize);

//personasModels.hasMany(entradasModels);
//entradasModels.belongsTo(personasModels);
//Creamos la asociacion de las tablas
//db.Persona.hasMany(db.Entradas);
//db.Entrada.belongsTo(db.Persona);

sequelize.sync({ force: false})
    .then(() => {
        console.log('Tablas sincronizadas');
    })

module.exports = db;