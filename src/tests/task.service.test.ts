import taskService from "../services/task.service";
import Task from "../models/task.model";

jest.mock("../models/task.model");

describe("TaskService", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("should create a task", async () => {
    const mockTask = { id: 1, title: "Test task", completed: false };
    (Task.create as jest.Mock).mockResolvedValue(mockTask);

    const task = await taskService.createTask("Test task");

    expect(task).toEqual(mockTask);
    expect(Task.create).toHaveBeenCalledWith({ title: "Test task" });
  });
});
