// vamos a importar todos nuestros modelos creados
const Users = require('./users.model');
const Tasks = require('./tasks.model');
const Categories = require('./categories.model');
const Tasks_categories = require('./tasks_categories.model');

const initModels = () => {
     //vamos a crear las relaciones
     //hasOne --> para indicar que tiene uno
     //hasMany --> para indicar que tiene muchos
     //belongsTo --> para indicar que pertenece a uno
     Tasks.belongsTo(Users , {as: 'author', foreignKey: 'user_id'});//en ves de darnos solo el nombre del usuario nos completa con author : nombre de usuario;
     Users.hasMany(Tasks , {as: 'task' , foreignKey: 'user_id'});
     
     //relacion muchos a muchos
     Tasks_categories.belongsTo(Tasks, {as: 'task', foreignKey: 'task_id'});
     Tasks.hasMany(Tasks_categories , {as: 'categories' , foreignKey: 'task_id'});
     
     Tasks_categories.belongsTo(Categories , {as: 'category' , foreignKey: 'category_id'});
     Categories.hasMany(Tasks_categories, {as: 'task' , foreignKey: 'category_id'});
};

module.exports = initModels;




































