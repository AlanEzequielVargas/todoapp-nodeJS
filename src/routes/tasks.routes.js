const { Router } = require('express');
const {getAllTasks , getTaskById,getTaskWithCategories, createTask, deleteTask, editTask} = require('../controllers/tasks.controller');
const authMiddleware = require('../middlewares/auth.middleware');

const router = Router();

router.get('/tasks',authMiddleware,getAllTasks); 
router.get('/tasks/:id', getTaskById);
router.get('/tasks/:id/categories', getTaskWithCategories);
router.post('/tasks' , createTask);
router.delete('/tasks/:id' , deleteTask);
router.put('/tasks/:id',editTask);

module.exports = router;



















