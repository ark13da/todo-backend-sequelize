import request from "supertest";
import app from "../app";
import sequelize from "../config";

beforeAll(async () => {
  await sequelize.sync({ force: true });
});

describe("Task Routes", () => {
  it("should create a task", async () => {
    const res = await request(app)
      .post("/api/tasks")
      .send({ title: "Test task" });

    expect(res.status).toBe(201);
    expect(res.body.title).toBe("Test task");
  });
});
