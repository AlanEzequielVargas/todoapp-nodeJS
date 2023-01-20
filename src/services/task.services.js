const Tasks = require("../models/tasks.model");
const Categories = require("../models/categories.model");
const Tasks_categories = require("../models/tasks_categories.model");

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
     static async getWithCategories(id){
          try {
               const result = await Tasks.findOne({
                    where: {id},
                    include: {//incluyeme
                         model: Tasks_categories ,//modelo y alias
                         as: 'categories',
                         attributes: ['id'],//solo traeme los que esta en corchetes
                         include: {//y con eso incluyeme
                              model: Categories,
                              as: 'category'
                         }
                    }
               });
               return result;
          } catch (error) {
               throw error;
          }
     }
}

module.exports = TaskServices;
