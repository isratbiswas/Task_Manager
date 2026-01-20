import { Task } from "./task.model.js";

const createTask = async ({ title, userId }) => {
  const task = await Task.create({
    title,
    user: userId,
  });
  return task;
};

const getTasks = async () => {
  const tasks = await Task.find();
  return tasks;
};

const updateTask = async (id, updateData) => {
  const updatedTask = await Task.findByIdAndUpdate(id, updateData, {
    new: true,
  });
  return updatedTask;
};

const deleteTask = async (id) => {
  await Task.findByIdAndDelete(id);
};

export const TaskService = {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
};
