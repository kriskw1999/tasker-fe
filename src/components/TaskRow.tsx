import React, { useCallback } from "react";
import { Task } from "@/stores/task-boards/types";
import { Checkbox } from "@mui/material";
import { taskBoardsStore } from "@/stores/task-boards";
import BorderColorRoundedIcon from "@mui/icons-material/BorderColorRounded";
import DeleteIcon from "@mui/icons-material/Delete";
import Hover from "@/components/Hover";
import EditLabelRow from "@/components/EditLabelRow";

type TaskRowProps = {
  task: Task;
  boardId: number;
  isDemo?: boolean;
};

const TaskRow: React.FC<TaskRowProps> = ({ task, boardId, isDemo = false }) => {
  const [isChangingTask, setIsChangingTask] = React.useState<boolean>(false);
  const [isHovered, setIsHovered] = React.useState<boolean>(false);

  const setTaskChecked = useCallback(() => {
    taskBoardsStore.setTaskChecked(boardId, task.id, !task.done);
  }, [boardId, task.id, task.done]);

  const deleteTask = useCallback(() => {
    taskBoardsStore.deleteTask(boardId, task.id);
  }, [boardId, task.id]);

  if (!isChangingTask) {
    return (
      <Hover setHover={setIsHovered} className="flex items-center">
        <Checkbox
          className="pl-0 py-2"
          checked={task.done}
          onClick={!isDemo ? setTaskChecked : () => {}}
        />

        <span className={task.done ? "line-through" : ""}>{task.title}</span>

        {isHovered && !isDemo && (
          <>
            <BorderColorRoundedIcon
              className="text-warning cursor-pointer pl-1"
              onClick={() => {
                setIsChangingTask(true);
              }}
            />
            <DeleteIcon
              className="text-error cursor-pointer pl-1"
              onClick={deleteTask}
            />
          </>
        )}
      </Hover>
    );
  }

  return (
    <EditLabelRow
      initialValue={task.title}
      onSave={(title) => {
        taskBoardsStore.updateTaskTitle(boardId, task.id, title);
        setIsChangingTask(false);
      }}
      onCancel={() => {
        setIsChangingTask(false);
      }}
    />
  );
};

export default TaskRow;
