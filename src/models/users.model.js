//instancia para la conexion a la db 
const db = require("../utilities/database");
//tipos de datos de sequelize (varchar es string , integer , boolean , float , decimal )
const { DataTypes } = require('sequelize');

//definir modelos de usuarios
//los modelos se definen con una mayuscula
const Users = db.define('users',{
     id: {
          primaryKey: true,
          type: DataTypes.INTEGER,
          autoIncrement: true,
          allowNull: false
     },
     username: {
          type: DataTypes.STRING,
          allowNull:false,
          unique: true
     },
     email: {
          type: DataTypes.STRING,
          allowNull:false,
          unique: true,
          validate: {
               isEmail: true
          }
     },
     password: {
          type: DataTypes.STRING,
          allowNull: false
     }
}); //parametros: nombre de la tabla y atributos de las tablas (dentro de un objeto)

module.exports = Users; 



































