import React, { useEffect, useState } from "react";
import { Favorite } from "@mui/icons-material";
import TaskRow from "@/components/TaskRow";
import { buildTaskMock } from "@/mocks/tasks";
import LoginCTA from "@/components/LoginCTA";
import SignupCTA from "@/components/SignupCTA";
import { useAuth0 } from "@auth0/auth0-react";
import { useRouter } from "next/router";
import { CircularProgress } from "@mui/material";
import Head from "next/head";

const HomePage = () => {
  const { isAuthenticated, isLoading } = useAuth0();
  const router = useRouter();

  /**
   * Used as a delay to avoid the switch of the loading due to
   * the auth0 initialization that takes a bit of time
   */
  const [delay, setDelay] = useState(false);

  setTimeout(() => {
    setDelay(true);
  }, 1000);

  useEffect(() => {
    if (isAuthenticated) {
      router.push("/");
    }
  }, [isAuthenticated, router]);

  return (
    <div className="w-screen h-screen bg-primary">
      <Head>
        <title>Home</title>
      </Head>

      {(isLoading || isAuthenticated) && delay ? (
        <div className="absolute flex items-center justify-center gap-4 top-1/2 rigth-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <h1 className="text-white text-7xl font-bold mb-6">Tasker</h1>
          <CircularProgress className="text-white" />
        </div>
      ) : (
        <>
          <div className="h-full grid lg:grid-cols-3">
            {/* LEFT CONTENT */}
            <div className="lg:visible invisible" />

            {/* CENTRAL CONTENT */}
            <div className="flex items-center flex-col h-full justify-center px-10 pop-in">
              <h1 className="text-white text-7xl font-bold mb-6">Tasker</h1>

              {/* LOGIN */}
              <LoginCTA />

              {/* REGISTER */}
              <SignupCTA />

              {/* DEMO */}
              <div className="w-255">
                <span className="text-white mr-1">or</span>
                <span className="font-bold underline text-white cursor-pointer">
                  Try it out
                </span>
              </div>
            </div>

            {/* RIGHT CONTENT */}
            <div className="justify-start items-center lg:visible flex invisible">
              <div className="w-400 h-400 relative lg:right-10 xl:right-20">
                <div className="absolute h-full w-full rounded-3xl bg-neutral bottom-10 start-10 floating" />
                <div className="absolute top-0 left-0 h-full w-full rounded-3xl bg-white floating p-4">
                  <TaskRow
                    task={buildTaskMock({ title: "Improve productivity" })}
                    boardId={-1}
                    isDemo
                  />
                  <TaskRow
                    task={buildTaskMock({ title: "Reach your goals" })}
                    boardId={-1}
                    isDemo
                  />
                  <TaskRow
                    task={buildTaskMock({ title: "And even more..." })}
                    boardId={-1}
                    isDemo
                  />
                </div>
              </div>
            </div>
          </div>

          {/* BOTTOM CONTENT */}
          <div className="text-white flex gap-1 absolute bottom-0 left-0 p-4">
            <span>Made with</span>
            <Favorite className="text-accent" />
            <span>by</span>
            <a
              className="underline font-bold"
              href="https://github.com/kriskw1999"
              target="_blank"
              rel="noreferrer"
            >
              Krzysztof Witkowski
            </a>
          </div>
        </>
      )}
    </div>
  );
};

export default HomePage;
