import React from "react";
import { TaskBoard } from "@/stores/task-boards/types";
import TaskRow from "@/components/TaskRow";
import AddTaskRow from "@/components/AddTaskRow";

type TaskContainerProps = {
  taskBoard: TaskBoard;
};

const TaskBoardCard: React.FC<TaskContainerProps> = ({
  taskBoard: { tasks, title, id },
}) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 h-96 drop-shadow-sm hover:drop-shadow-md">
      <h1 className="text-2xl font-bold">{title}</h1>

      {tasks.map((task, idx) => (
        <TaskRow boardId={id} task={task} key={idx} />
      ))}

      <AddTaskRow boardId={id} />
    </div>
  );
};

export default TaskBoardCard;
