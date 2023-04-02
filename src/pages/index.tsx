import React from "react";
import TaskBoardCard from "@/components/TaskBoardCard";
import { Grid } from "@mui/material";
import { taskBoardsStore } from "@/stores/task-boards";

export default function Home() {
  return (
    <main>
      <div className="px-10 py-8">
        <Grid container spacing={2}>
          {taskBoardsStore.boards.value.map((taskBoard, idx) => (
            <Grid key={idx} item xs={12} md={6} xl={3}>
              <TaskBoardCard taskBoard={taskBoard} />
            </Grid>
          ))}
        </Grid>
      </div>
    </main>
  );
}
