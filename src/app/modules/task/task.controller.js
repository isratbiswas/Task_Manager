import { CatchAsync } from "../../utils/CatchAsync.js";
import sendResponse from "../../utils/sendResponse.js";
import { TaskService } from "./task.service.js";

const createTask = CatchAsync(async (req, res) => {
  const task = await TaskService.createTask(req.body);
  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: "Task created successfully",
    data: task,
  });
});

const getTasks = CatchAsync(async (req, res) => {
  const tasks = await TaskService.getTasks();
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Tasks retrieved successfully",
    data: tasks,
  });
});

const updateTask = CatchAsync(async (req, res) => {
  const { id } = req.params;
  const updatedTask = await TaskService.updateTask(id, req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Task updated successfully",
    data: updatedTask,
  });
});
const deleteTask = CatchAsync(async (req, res) => {
  const { id } = req.params;
  await TaskService.deleteTask(id);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Task deleted successfully",
    data: null,
  });
});
export const TaskController = {
  createTask,

  getTasks,
  updateTask,
  deleteTask,
};
