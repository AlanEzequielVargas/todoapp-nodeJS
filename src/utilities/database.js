const { Sequelize } = require('sequelize');
require("dotenv").config();
//crear una instancia con parametros de configuracion de nuestra base de datos
//necesitmoas un objeto de configuracion ,que seriamn credenciales de nuestra base de datos
const db = new Sequelize({
     database: process.env.DB_NAME,
     username: process.env.DB_USER,
     host: process.env.DB_HOST,
     port: process.env.DB_PORT,
     password: process.env.DB_PASSWORD,
     dialect: 'postgres',
     logging: false,//sirve para no ver tanta informacion en la ocnsola
     dialectOptions:{ssl: {require: true , rejectUnauthorized: false}}//cuando queramos correr el proyecto local esta opcion no nos va a dejar , dialectOptions sirve para permitir correr el proyecto fuera de aqui y que funcione el SSL
});

module.exports = db;




















