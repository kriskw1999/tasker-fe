import { getTaskBoards } from "@/api/taskBoards";
import { createTask } from "@/api/tasks";

export const $api = {
  taskBoards: {
    get: getTaskBoards,
  },
  task: {
    post: createTask,
  },
} as const;
