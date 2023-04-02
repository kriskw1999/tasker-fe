import { signal } from "@preact/signals-react";
import { buildTaskBoardMock } from "@/mocks/taskBoards";
import { TaskBoard } from "@/stores/task-boards/types";

export const taskBoardsStore = {
  boards: signal<TaskBoard[]>([
    buildTaskBoardMock(),
    buildTaskBoardMock({ title: "Task Board 2" }),
  ]),
};
