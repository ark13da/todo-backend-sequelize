import { Request, Response } from "express";
import taskService from "../services/task.service";
import { promises } from "dns";

class TaskController {
  async getAllTasks(req: Request, res: Response): Promise<void> {
    const tasks = await taskService.getAllTasks();
    res.json(tasks);
  }

  async createTask(req: Request, res: Response): Promise<void> {
    const { title } = req.body;
    const task = await taskService.createTask(title);
    res.status(201).json(task);
  }

  async updateTask(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const updates = req.body;
    const task = await taskService.updateTask(Number(id), updates);
    if (task) {
      res.status(201).json(task);
    } else {
      res.status(404).json({ message: "Task not found" });
    }
  }

  async deleteTask(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const success = await taskService.deleteTask(Number(id));
    if (success) {
      res.status(204).send();
    } else {
      res.status(404).json({ message: "Task not found" });
    }
  }
}

export default new TaskController();
