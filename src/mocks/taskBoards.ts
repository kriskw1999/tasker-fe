import { TaskBoard } from "@/stores/task-boards/types";
import { buildTaskMock } from "@/mocks/tasks";

const TASK_BOARD_MOCK: TaskBoard = {
  id: 1,
  tasks: [buildTaskMock()],
  title: "Task Board 1",
};

export const buildTaskBoardMock = (
  overrides: Partial<TaskBoard> = {}
): TaskBoard => ({
  ...TASK_BOARD_MOCK,
  ...overrides,
});
