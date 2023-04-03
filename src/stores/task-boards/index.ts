import { signal } from "@preact/signals-react";
import { TaskBoard } from "@/stores/task-boards/types";
import { addToCollectionOrReplaceById, getById } from "@/utils/array";
import { $api } from "@/api";
import { updateTask } from "@/api/tasks";
import { sortBoardsTasks } from "@/utils/board";

export const taskBoardsStore = {
  boards: signal<TaskBoard[]>([]),
  areBoardsLoaded: signal(false),
  setTaskChecked: async function (
    boardId: number,
    taskId: number,
    done: boolean
  ) {
    const board = getById(boardId, this.boards.value)!;

    const task = await updateTask(taskId, { done });

    addToCollectionOrReplaceById(board.tasks, task);

    this.refreshBoards();
  },
  addNewTask: async function (taskBoardId: number, title: string) {
    const newTask = await $api.task.post({ title, taskBoardId });

    const board = getById(taskBoardId, this.boards.value)!;

    board.tasks.push(newTask);

    this.refreshBoards();
  },
  updateTaskTitle: async function (
    boardId: number,
    taskId: number,
    title: string
  ) {
    const board = getById(boardId, this.boards.value)!;

    const task = await updateTask(taskId, { title });

    addToCollectionOrReplaceById(board.tasks, task);

    this.refreshBoards();
  },
  loadBoards: async function () {
    this.areBoardsLoaded.value = false;
    const boards = await $api.taskBoards.get();
    this.boards.value = sortBoardsTasks(boards);
    this.areBoardsLoaded.value = true;
  },
  deleteTask: async function (boardId: number, taskId: number) {
    const board = getById(boardId, this.boards.value)!;

    await $api.task.delete(taskId);

    board.tasks = board.tasks.filter((task) => task.id !== taskId);

    this.refreshBoards();
  },
  refreshBoards: function () {
    this.boards.value = [...this.boards.value];
  },
  updateBoardTitle: async function (boardId: number, title: string) {
    const board = await $api.taskBoards.patch(boardId, { title });

    addToCollectionOrReplaceById(this.boards.value, board);

    this.refreshBoards();
  },
  deleteTaskBoard: async function (boardId: number) {
    await $api.taskBoards.delete(boardId);

    this.boards.value = this.boards.value.filter(
      (board) => board.id !== boardId
    );
  },
  createTaskBoard: async function (title: string) {
    const newBoard = await $api.taskBoards.post({ title });

    this.boards.value.push(newBoard);

    this.refreshBoards();
  },
};
