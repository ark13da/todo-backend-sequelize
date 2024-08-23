import { Router } from "express";
import TaskController from "../controllers/task.controller";

const router = Router();

router.get("/tasks", TaskController.getAllTasks);
router.post("/tasks", TaskController.createTask);
router.put("/tasks/:id", TaskController.updateTask);
router.delete("task/:id", TaskController.deleteTask);

export default router;
