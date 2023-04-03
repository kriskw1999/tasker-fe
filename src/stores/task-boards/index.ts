import { signal } from "@preact/signals-react";
import { TaskBoard } from "@/stores/task-boards/types";
import { getById } from "@/utils/array";
import { $api } from "@/api";

export const taskBoardsStore = {
  boards: signal<TaskBoard[]>([]),
  areBoardsLoaded: signal(false),
  setTaskChecked: function (boardId: number, taskId: number) {
    const board = getById(boardId, this.boards.value)!;
    const task = getById(taskId, board.tasks)!;

    task.done = !task.done;

    this.boards.value = [...this.boards.value];
  },
  addNewTask: async function (taskBoardId: number, title: string) {
    const newTask = await $api.task.post({ title, taskBoardId });

    const board = getById(taskBoardId, this.boards.value)!;

    board.tasks.push(newTask);

    this.boards.value = [...this.boards.value];
  },
  updateTaskTitle: function (boardId: number, taskId: number, title: string) {
    const board = getById(boardId, this.boards.value)!;
    const task = getById(taskId, board.tasks)!;

    task.title = title;

    this.boards.value = [...this.boards.value];
  },
  loadBoards: async function () {
    this.areBoardsLoaded.value = false;
    this.boards.value = await $api.taskBoards.get();
    this.areBoardsLoaded.value = true;
  },
};
