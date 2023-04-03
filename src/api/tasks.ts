import { http } from "@/api/client";

type CreateTaskRequest = {
  title: string;
  taskBoardId: number;
};

export const createTask = async (payload: CreateTaskRequest) => {
  return http.post("tasks", { ...payload, done: false, recurrent: false });
};
