const Tasks = require('../models/tasks.model');
const Users = require('../models/users.model');

class UserServices {
     static async getAll() {
          try {
               const result = await Users.findAll();
               return result;
          } catch (error) {
               throw error;
          }
     }
     static async getById(id) {
          try {
               const result = await Users.findByPk(id);
               return result;
          } catch (error) {
               throw error;
          }
     }
     static async userTasks(id) {
          try {
               const result = await Users.findOne({ 
                    where: { id }, 
                    attributes: ['username'], 
                    include: { 
                         model: Tasks, 
                         as: 'task' } 
                    });
               console.log(result);
               return result;
          } catch (error) {
               throw error;
          }
     }
     static async createNewUser(body) {
          try {
               const result = await Users.create(body);
               return result;
          } catch (error) {
               throw error;
          }
     }
     static async updateAUser(id, body) {
          try {
               const result = await Users.update(body, { where: { id } });
               return result;
          } catch (error) {
               throw error;
          }
     }
     static async deleteAUser(id) {
          try {
               const result = await Users.destroy({ where: { id } });
               return result;
          } catch (error) {
               throw error;
          }
     }
}

module.exports = UserServices;
























