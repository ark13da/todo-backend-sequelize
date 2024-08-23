import Task from "../models/task.model";

class TaskService {
  async getAllTasks(): Promise<Task[]> {
    return Task.findAll();
  }

  async getTaskById(id: number): Promise<Task | null> {
    return Task.findByPk(id);
  }

  async createTask(title: string): Promise<Task> {
    return Task.create({ title });
  }

  async updateTask(id: number, updates: Partial<Task>): Promise<Task | null> {
    const task = await this.getTaskById(id);
    if (!task) return null;
    return task.update(updates);
  }

  async deleteTask(id: number): Promise<boolean> {
    const task = await this.getTaskById(id);
    if (!task) return false;
    await task.destroy();
    return true;
  }
}
export default new TaskService();