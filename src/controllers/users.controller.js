const UserServices = require('../services/user.service');

const getAllUsers = async(req , res) => {
     try {
          const result = await UserServices.getAll();
          res.status(200).json(result);
     }catch (error) {
          res.status(400).json(error.message);
     } 
}

const getUserById = async (req , res) => {
     try {
          const {id} = req.params;
          const result = await UserServices.getById(id);
          res.status(200).json(result);
     } catch (error) {
          res.status(400).json(error.message);
     }
}

const getUserWithTasks = async (req , res) => {
     try {
          const {id} = req.params;
          const result = await UserServices.getWithTasks(id);
          res.status(200).json(result);
     } catch (error) {
          res.status(400).json(error.message);
     }
}

const createUser = async (req , res) => {
     try {
          const user = req.body;
          const result = await UserServices.createNewUser(user);
          res.status(200).json(result);
     } catch (error) {
          res.status(400).json(error.message);
     }
}

const updateUser = async (req , res) => {
     try {
          const {id} = req.params;
          const user = req.body;
          const result = await UserServices.updateAUser(id , user);

          res.status(200).json(result);
     } catch (error) {
          res.status(400).json(error.message);
     }
}

const deleteUser = async (req , res) => {
     try {
          const {id} = req.params;
          const result = await UserServices.deleteAUser(id);
          res.status(200).json(result);
     } catch (error) {
          res.status(400).json(error.message);
     }
}



module.exports = {
     getAllUsers,
     getUserById,
     getUserWithTasks,
     createUser,
     updateUser,
     deleteUser
};






























