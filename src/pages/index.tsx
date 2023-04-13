import React, { useEffect } from "react";
import TaskBoardCard from "@/components/TaskBoardCard";
import { Grid } from "@mui/material";
import { taskBoardsStore } from "@/stores/task-boards";
import DefaultLayout from "@/layouts/default";
import { useAuth0 } from "@auth0/auth0-react";
import { useRouter } from "next/router";
import Head from "next/head";
import { clientStore } from "@/stores/client";

export default function Home() {
  const { isAuthenticated, isLoading, getAccessTokenSilently } = useAuth0();
  const router = useRouter();

  if (!clientStore.isAuthenticated()) {
    getAccessTokenSilently().then((token) => {
      clientStore.setJwt(token);
    });
  }

  useEffect(() => {
    if (!taskBoardsStore.areBoardsLoaded.value && isAuthenticated) {
      taskBoardsStore.loadBoards();
    }
  }, [isAuthenticated]);

  useEffect(() => {
    if (!isAuthenticated && !isLoading) {
      router.push("/home");
    }
  }, [isAuthenticated, router, isLoading]);

  return (
    <DefaultLayout>
      <Head>
        <title>Dashboard</title>
      </Head>

      <div className="px-10 py-8">
        <Grid container spacing={2}>
          {taskBoardsStore.boards.value.map((taskBoard, idx) => (
            <Grid key={`${idx}-${taskBoard.id}`} item xs={12} md={6} xl={3}>
              <TaskBoardCard taskBoard={taskBoard} />
            </Grid>
          ))}
        </Grid>
      </div>
    </DefaultLayout>
  );
}
