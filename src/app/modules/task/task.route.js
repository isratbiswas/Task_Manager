import { Router } from "express";

const router = Router();
router.post("/createTask", TaskController.createTask);
router.get("/getTasks", TaskController.getTasks);
router.put("/updateTask/:id", TaskController.updateTask);
router.delete("/deleteTask/:id", TaskController.deleteTask);
export const TaskRoutes = router;
