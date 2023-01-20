const { Router } = require('express');
const {getAllTasks , getTaskById,getTaskWithCategories, createTask, deleteTask, editTask} = require('../controllers/tasks.controller');
const authMiddleware = require('../middlewares/auth.middleware');

const router = Router();

router.get('/tasks',authMiddleware,getAllTasks);
router.get('/tasks/:id',authMiddleware, getTaskById);
router.get('/tasks/:id/categories',authMiddleware, getTaskWithCategories);
router.post('/tasks' ,authMiddleware, createTask);
router.delete('/tasks/:id' ,authMiddleware, deleteTask);
router.put('/tasks/:id',authMiddleware,editTask);

module.exports = router;



















