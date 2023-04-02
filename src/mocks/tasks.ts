import { Task } from "@/stores/task-boards/types";

const TASK_MOCK: Task = {
  id: 1,
  title: "Task 1",
  done: false,
  recurrent: false,
};

export const buildTaskMock = (overrides: Partial<Task> = {}): Task => ({
  ...TASK_MOCK,
  ...overrides,
});
