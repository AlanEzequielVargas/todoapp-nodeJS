const db = require('../utilities/database');
const Users = require('../models/users.model');
const Tasks = require('../models/tasks.model');
const Categories = require('../models/categories.model');
const Tasks_categories = require('../models/tasks_categories.model');

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
          title: 'estudiar node',
          description: 'description para 1',
          userId: 1,
     },
     {
          title: 'pasear al perro',
          description: 'description para 2',
          userId: 1,
     }, {
          title: 'correr',
          description: 'description para 2',
          userId: 2,
     }

];
const categories = [
     { name: 'Personal' }, { name: 'Academica' }, { name: 'Trabajo' }, { name: 'Salud' }, { name: 'Oseo' }, { name: 'Deporte' }, { name: 'Entretenimiento' }, { name: 'Cocina' }
];
const tasksCategories = [
     {categoryId: 1, taskId: 1},
     {categoryId: 2, taskId: 1},
     {categoryId: 3, taskId: 1},
     {categoryId: 1, taskId: 2},
     {categoryId: 6, taskId: 2}
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
          }, 100);
          setTimeout(() => {
               categories.forEach((category) => Categories.create(category));
          }, 300);
          setTimeout(() => {
               tasksCategories.forEach((tc) => Tasks_categories.create(tc));
          }, 400);
     })
     .catch((error) => console.log(error));








































