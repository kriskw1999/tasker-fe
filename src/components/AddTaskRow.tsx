import React, { useState } from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { taskBoardsStore } from "@/stores/task-boards";
import EditLabelRow from "@/components/EditLabelRow";

type AddTaskRowProps = {
  boardId: number;
};

const AddTaskRow: React.FC<AddTaskRowProps> = ({ boardId }) => {
  const [isAddingTask, setIsAddingTask] = useState<boolean>(false);

  const addTask = async (label: string) => {
    await taskBoardsStore.addNewTask(boardId, label);
    setIsAddingTask(false);
  };

  if (!isAddingTask) {
    return (
      <AddCircleOutlineIcon
        className="hover:text-accent cursor-pointer mt-2"
        onClick={() => {
          setIsAddingTask(true);
        }}
      />
    );
  } else
    return (
      <EditLabelRow
        initialValue=""
        onSave={addTask}
        onCancel={() => {
          setIsAddingTask(false);
        }}
      />
    );
};

export default AddTaskRow;
