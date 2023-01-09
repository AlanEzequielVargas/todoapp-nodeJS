//importabamos express
const express = require('express');
const db = require('./utilities/database');
const initModels = require('./models/init.model');
const Users = require('./models/users.model');
const Tasks = require('./models/tasks.model');

//crear una instancia de express
const app = express();

app.use(express.json());

const PORT = 8000;

//probando la conexion de la base de datos
db.authenticate()
     .then(() => console.log('Autenticacion exitosa'))
     .catch((error) => console.log(error));

initModels();
//vamos a usar el metodo sync de nuestra db

db.sync({ force: false /*altera el contenido de las tablas*/ })//devuelve una promesa
     .then(() => console.log('base de datos sinconizada'))
     .catch((error) => console.log(error))


app.get('/', (req, res) => {
     res.status(200).json({ message: 'Bienvenido al servidor' })
});

// definir las rutas de nuestros endpoints
// para todas las consultas de usuario
// localhost:8000/users --> todo para usuarios
// localhost:8000/tasks --> tado para tareas

// GET a /users
app.get('/users', async (req, res) => {
     try {
          //vamos a obtener el resultado de consultar a todos los usuarios de la DB
          const result = await Users.findAll();
          res.status(200).json(result);
     } catch (error) {
          console.log(error);
     }
})

//obtener un usuario sabiendo su ID
app.get('/users/:id', async (req, res) => {
     try {
          const { id } = req.params;
          // es lo mismo que const id = req.params.id;
          const result = await Users.findByPk(id);
          res.status(200).json(result);
     } catch (error) {
          console.log(error);
     }
});
//obtener un usuario por username
app.get('/users/username/:username', async (req, res) => {

     try {
          const { username } = req.params;
          const result = await Users.findOne({where: {username}});
          res.status(200).json(result);
     } catch (error) {
          console.log(error);
     }
});

//creando usuario
app.post('/users' , async (req,res) => {
     try {
          const user = req.body;
          const result = await Users.create(user);
          res.status(201).json(result);
     } catch (error) {
          res.status(400).json(error.message);
          console.log(error);
     }
})

//actalizar un usuario
app.put('/users/:id' , async (req , res) => {
     try {
          const {id} = req.params;
          const field = req.body;
          const result = await Users.update(field , {where: {id}});
          res.status(200).json(result);
     } catch (error) {
          res.status(400).json(error.message);
          console.log(error);
     }
})

//eliminar un usuario
app.delete('/users/:id' , async (req , res) => {
     try {
          const {id} = req.params;
          const result = await Users.destroy({where: {id}});
          res.status(200).json(result)
     } catch (error) {
          res.status(400).json(error.message);
          console.log(error);
     }
})

//----------------TASKS------------
app.get('/tasks' , async(req , res) => {
     try {
          const result = await Tasks.findAll();
          res.status(200).json(result);
     } catch (error) {
          console.log(error);
     }
});
//Get por su ID
app.get('/tasks/:id' , async(req , res) => {
     try {
          const result = await Tasks.findByPk(req.params.id);
          res.status(200).json(result);
     } catch (error) {
          res.status(400).json(error.message);
          console.log(error);
     }
});

//Create
app.post('/tasks' , async (req,res) => {
     try {
          const task = req.body;
          const result = await Tasks.create(task);
          res.status(200).json(result);
     } catch (error) {
          res.status(400).json(error.message);
          console.log(error);
     }
})
//Update
app.put('/tasks/:id' , async (req , res) => {
     try {
          const {id} = req.params;//localhost:8000/tasks/id
          const task = req.body;
          const result = await Tasks.update(task , {where: {id}});
          res.status(200).json(result);
     } catch (error) {
          res.status(400).json(error.message);
          console.log(error);
     }
});
//delete
app.delete('/tasks/:id' , async (req , res) => {
     try {
          const {id} = req.params;
          const result = await Tasks.destroy({where : {id}});
          res.status(200).json(result);
     } catch (error) {
          console.log(error);
     }
})

app.listen(PORT, () => {
     console.log(`servidor corriendo en el puerto ${PORT}`)
});










































