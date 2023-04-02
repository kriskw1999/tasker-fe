import { signal } from "@preact/signals-react";
import { buildTaskBoardMock } from "@/mocks/taskBoards";
import { TaskBoard } from "@/stores/task-boards/types";
import { getById } from "@/utils/array";

export const taskBoardsStore = {
  boards: signal<TaskBoard[]>([
    buildTaskBoardMock(),
    buildTaskBoardMock({ id: 2, title: "Task Board 2" }),
  ]),
  setTaskChecked: function (boardId: number, taskId: number) {
    const board = getById(boardId, this.boards.value)!;
    const task = getById(taskId, board.tasks)!;

    task.done = !task.done;

    this.boards.value = [...this.boards.value];
  },
  addNewTask: function (boardId: number, title: string) {
    const board = getById(boardId, this.boards.value)!;

    console.log(board);

    board.tasks.push({
      id: board.tasks.length + 1,
      title,
      done: false,
      recurrent: false,
    });

    this.boards.value = [...this.boards.value];
  },
  updateTaskTitle: function (boardId: number, taskId: number, title: string) {
    const board = getById(boardId, this.boards.value)!;
    const task = getById(taskId, board.tasks)!;

    task.title = title;

    this.boards.value = [...this.boards.value];
  },
};
