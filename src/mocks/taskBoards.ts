import { TaskBoard } from "@/stores/task-boards/types";
import { buildTaskMock } from "@/mocks/tasks";

const TASK_BOARD_MOCK: TaskBoard = {
  id: 1,
  tasks: [],
  title: "Task Board 1",
};

export const buildTaskBoardMock = (
  overrides: Partial<TaskBoard> = {}
): TaskBoard => ({
  ...TASK_BOARD_MOCK,
  tasks: [
    buildTaskMock(),
    buildTaskMock({ id: 2, done: true, title: "Do something" }),
    buildTaskMock({ id: 3, done: false, title: "Do something else" }),
  ],
  ...overrides,
});
