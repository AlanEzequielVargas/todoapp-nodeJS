const { Sequelize } = require('sequelize');

//crear una instancia con parametros de configuracion de nuestra base de datos
//necesitmoas un objeto de configuracion ,que seriamn credenciales de nuestra base de datos
const db = new Sequelize({
     database: 'todoapp',
     username: 'postgres',
     host: 'localhost',
     port: '5432',
     password: 'root',
     dialect: 'postgres',
     logging: false//sirve para no ver tanta informacion en la ocnsola
});

module.exports = db;




















