const Tasks = require("../models/tasks.model");

class TaskServices {
     static async getAll(){
          try {
               const result = await Tasks.findAll();
               return result;
          } catch (error) {
               throw error;
          }
     }
     static async getById(id){
          try {
               const result = await Tasks.findByPk(id);
               return result;
          } catch (error) {
               throw error;
          }
     }
     static async createNewTask(task){
          try {
               const result = await Tasks.create(task);
               return result;
          } catch (error) {
               throw error;
          }
     }
     static async deleteATask(id){
          try {
               const result = await Tasks.destroy(id);
               return result;
          } catch (error) {
               throw error;
          }
     }
     static async updateTask(id , body){
          try {
               const result = await Tasks.update(body , {where: {id}});
               return result;
          } catch (error) {
               throw error;
          }
     }
}

module.exports = TaskServices;
