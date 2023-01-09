const db = require('../utilities/database');
const Users = require('../models/users.model');
const Tasks = require('../models/tasks.model');

const users = [
     {
          username: 'postgres',
          email: 'postgres@gmail.com',
          password: '1234',
     }, {
          username: 'postgres2',
          email: 'postgres2@gmail.com',
          password: '12345',
     }
];
const tasks = [
     {
          title: 'tarea 1',
          description: 'description para 1',
          userId: 1,
     },
     {
          title: 'tarea 2',
          description: 'description para 2',
          userId: 2,
     }
];

//const categories = [];
//const tasksCategories = [];

//METODOS
//create
//findOne , findAll(SELECT * FROM) , findByPk
//update
//destroy

db.sync({ force: true })
     .then(() => {
          console.log('iniciando nose que');
          users.forEach((user) => Users.create(user))/* create es lo mismo que INSERT INTO user contenido como en sql */
          setTimeout(() => {
               tasks.forEach((task) => Tasks.create(task))
          } , 100)
     })
     .catch((error) => console.log(error)); 








































