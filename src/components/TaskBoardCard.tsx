import React, { useState } from "react";
import { TaskBoard } from "@/stores/task-boards/types";
import TaskRow from "@/components/TaskRow";
import AddTaskRow from "@/components/AddTaskRow";
import TaskBoardEditMenu from "@/components/TaskBoardEditMenu";
import { Button, TextField } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { taskBoardsStore } from "@/stores/task-boards";

type TaskContainerProps = {
  taskBoard: TaskBoard;
};

const TaskBoardCard: React.FC<TaskContainerProps> = ({
  taskBoard: { tasks, title, id },
}) => {
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const [titleToSave, setTitleToSave] = useState<string>(title);

  return (
    <div
      className={`bg-white shadow-lg hover:shadow-xl rounded-lg p-4 h-96 flipping-card ${
        isFlipped ? "card-flipped" : ""
      }`}
      onKeyDown={(e) => {
        if (e.key === "Escape") {
          setIsFlipped(false);
        }
      }}
    >
      <div className="flipping-card-front">
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold">{title}</h1>

          <TaskBoardEditMenu
            onEditClick={() => {
              setIsFlipped(true);
            }}
          />
        </div>

        {tasks.map((task, idx) => (
          <TaskRow boardId={id} task={task} key={idx} />
        ))}

        <AddTaskRow boardId={id} />
      </div>

      <div className="flipping-card-back flex flex-col justify-between">
        <div>
          <h1 className="text-2xl font-bold text-primary mb-4">Edit board</h1>

          <TextField
            value={titleToSave}
            onChange={(e) => {
              setTitleToSave(e.target.value);
            }}
            onKeyDown={async (e) => {
              if (e.key === "Enter") {
                await taskBoardsStore.updateBoardTitle(id, titleToSave);
                setIsFlipped(false);
              }
            }}
            size="small"
            label="Title"
            autoFocus
          />
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="outlined"
            onClick={async () => {
              await taskBoardsStore.updateBoardTitle(id, titleToSave);
              setIsFlipped(false);
            }}
          >
            Save
          </Button>

          <Button
            variant="text"
            onClick={() => {
              setIsFlipped(false);
            }}
          >
            Cancel
          </Button>

          <DeleteIcon
            className="text-error cursor-pointer pl-1"
            onClick={async () => {
              await taskBoardsStore.deleteTaskBoard(id);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default TaskBoardCard;
