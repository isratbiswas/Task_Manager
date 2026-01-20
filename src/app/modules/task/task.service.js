// import { Task } from "./task.model";

// const createTask = async (req, res) => {
//   const task = await Task.create({
//     title: req.body.title,
//     user: req.user.id,
//   });
//   return task;
// };

// const getTasks = async () => {
//   const tasks = await Task.find();
//   return tasks;
// };

// const updateTask = async (id, updateData) => {
//   const updatedTask = await Task.findByIdAndUpdate(id, updateData, {
//     new: true,
//   });
//   return updatedTask;
// };

// const deleteTask = async (id) => {
//   await Task.findByIdAndDelete(id);
// };

// export const TaskService = {
//   createTask,
//   getTasks,
//   updateTask,
//   deleteTask,
// };
