import {
  deleteBoard,
  getTaskBoards,
  patchTaskBoard,
  postTaskBoard,
} from "@/api/taskBoards";
import { createTask, deleteTask, updateTask } from "@/api/tasks";

export const $api = {
  taskBoards: {
    get: getTaskBoards,
    patch: patchTaskBoard,
    delete: deleteBoard,
    post: postTaskBoard,
  },
  task: {
    post: createTask,
    patch: updateTask,
    delete: deleteTask,
  },
} as const;
