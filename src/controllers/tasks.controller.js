const TasksServices = require('../services/task.services');

const getAllTasks = async (req, res) => {
     try {
          const result = await TasksServices.getAll();
          res.status(200).json({
               message: 'obteniendo todos los todos',
               data: result,
          }
          );
     } catch (error) {
          res.status(400).json(error.message);
     }
}

const getTaskById = async (req, res) => {
     try {
          const { id } = req.params;
          const result = await TasksServices.getById(id);
          res.status(200).json(result);
     } catch (error) {
          res.status(400).json(error.message);
     }
}

const createTask = async (req, res) => {
     try {
          const task = req.body;
          const result = await TasksServices.createNewTask(task);
          res.status(200).json(result);
     } catch (error) {
          res.status(400).json(error.message);
     }
}

const deleteTask = async (req, res) => {
     try {
          const { id } = req.params;
          const result = await TasksServices.deleteATask({ where: { id } });
          res.status(200).json(result);
     } catch (error) {
          res.status(400).json(error.message);
     }
}

const editTask = async (req, res) => {
     try {
          const { id } = req.params;
          const editedTask = req.body;
          const result = await TasksServices.updateTask(id, editedTask);
          res.status(200).json(result);
     } catch (error) {
          res.status(400).json(error.message);
     }
}

const getTaskWithCategories = async (req,res) => {
     try {
          const {id} = req.params;
          const result = await TasksServices.getWithCategories(id);
          res.json({
               message: 'Enviando tareas con categorias',
               data: result
          });
     } catch (error) {
          res.status(400).json({
               error: error.message,
               details: error.stack,
          })
     }
}

module.exports = { getAllTasks, getTaskById, getTaskWithCategories, createTask, deleteTask, editTask ,};





























