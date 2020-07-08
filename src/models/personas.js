const models = require('./entradas');

module.exports = (sequelize, type) => {

    const modelo = sequelize.define('personas', {
        id: {
            type: type.INTEGER,
            allowNull: false, 
            primaryKey: true
        },
        name: {
            type: type.STRING,
            allowNull: true
        },
        address: {
            type: type.STRING,
            allowNull: true
        },
        phone: {
            type: type.INTEGER,
            allowNull: true
        },
        image: {
            type: type.BLOB("long"),
            allowNull: true
        },
        createdAt: {
            allowNull: true,
            type: type.DATE,
            defaultValue: type.NOW 
        },
        updatedAt: {
            allowNull: true,
            type: type.DATE,
            defaultValue: type.NOW
        }
    });

    return modelo;
}