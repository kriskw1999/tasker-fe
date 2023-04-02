import React from "react";
import { TaskBoard } from "@/stores/task-boards/types";

type TaskContainerProps = {
  taskBoard: TaskBoard;
};

const TaskBoardCard: React.FC<TaskContainerProps> = ({
  taskBoard: { tasks, title },
}) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 h-96 drop-shadow-sm hover:drop-shadow-md">
      <h1 className="text-2xl font-bold">{title}</h1>
      <p className="text-gray-500">This is a todo card</p>
    </div>
  );
};

export default TaskBoardCard;
