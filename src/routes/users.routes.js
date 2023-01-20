const { Router } = require('express');
const { getAllUsers,
     getUserById,
     createUser,
     updateUser,
     deleteUser, 
     getUserWithTasks} = require('../controllers/users.controller');
const authMiddleware = require('../middlewares/auth.middleware');

const router = Router(); 

//en lugar de get , put , post , delete

//este va responder a todos los gets
router.get('/users',authMiddleware, getAllUsers);
router.get('/users/:id',authMiddleware, getUserById);
//obtener a un usuario con sus tareas
router.get('/users/:id/tasks' ,authMiddleware, getUserWithTasks);
router.post('/users', createUser); 
router.put('/users/:id',authMiddleware, updateUser);
router.delete('/users/:id', authMiddleware,deleteUser); 


module.exports = router;































