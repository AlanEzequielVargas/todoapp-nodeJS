const db = require('../utilities/database');
const { DataTypes } = require('sequelize');
const Users = require('./users.model');

const Tasks = db.define('task', {// primer argunmento es el nombre de la tabla
     id: {
          primaryKey: true,
          type: DataTypes.INTEGER,
          autoIncrement: true,
          allowNull: false,
          unique: true,
     },
     title: {
          type: DataTypes.STRING,
          allowNull: false,
     },
     description: {
          type: DataTypes.STRING
     },
     isComplete: {
          type: DataTypes.BOOLEAN,
          defaultValue: false,
          field: 'is_complete'//
     },
     userId: {
          type: DataTypes.INTEGER,
          allowNull: false,
          field: 'user_id',
          references: {
               model: Users, // importar modelo
               key: 'id' // propiedad a cual queremos conectarnos
          }
     }
} ,
{timestamps: false}); 

module.exports = Tasks;