import { TaskBoard } from "@/stores/task-boards/types";

export const sortBoardsTasks = (boards: TaskBoard[]): TaskBoard[] => {
  return boards
    .sort((a, b) => a.id - b.id)
    .map((board) => ({
      ...board,
      tasks: board.tasks.sort((a, b) => a.id - b.id),
    }));
};
