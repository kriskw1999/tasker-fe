import { Button, Modal, TextField } from "@mui/material";
import React, { useCallback } from "react";
import { taskBoardsStore } from "@/stores/task-boards";

type AddTaskTableModalProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

const AddTaskTableModal: React.FC<AddTaskTableModalProps> = ({
  open,
  setOpen,
}) => {
  const [title, setTitle] = React.useState("");

  const handleCreateBoard = useCallback(async () => {
    await taskBoardsStore.createTaskBoard(title);
    setTitle("");
    setOpen(false);
  }, [setOpen, title]);

  return (
    <Modal
      open={open}
      style={{ border: "none" }}
      onKeyDown={(e) => {
        if (e.key === "Escape") {
          setOpen(false);
        }
      }}
      onClose={() => {
        setOpen(false);
      }}
    >
      <div
        className="absolute top-1/2 rigth-1/2 left-1/2 bg-white transform -translate-x-1/2 -translate-y-1/2 p-10 rounded-xl"
        style={{ outline: "none" }}
      >
        <h1 className="text-2xl font-bold mb-4">Create new board</h1>

        <TextField
          className="mb-4"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleCreateBoard();
            }
          }}
          label="Board title"
          variant="outlined"
          size="small"
          autoFocus
        />

        <div className="flex gap-3 justify-between">
          <Button variant="outlined" onClick={handleCreateBoard}>
            Create
          </Button>

          <Button
            variant="text"
            onClick={() => {
              setOpen(false);
            }}
          >
            Cancel
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default AddTaskTableModal;
