const models = require('./personas');

module.exports = (sequelize, type) => {

    const modelo = sequelize.define('entradas', {
        id: {
            
            allowNull: false, 
            autoIncrement: true,
            primaryKey: true,
            type: type.INTEGER
        },
        myDate: { 
            type: type.DATE, 
            defaultValue: type.NOW 
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
        },
        persona_id : {
            type: type.INTEGER,
            allowNull: false,
            references: {    
                model: 'personas',
                key: 'id'
            }
        }
    });

    return modelo;
}